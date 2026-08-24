> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-fluent-hamlet-retrieval-script-v1-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Build and Search a Real Hamlet Corpus with FluentCorpus[#](#build-and-search-a-real-hamlet-corpus-with-fluentcorpus "Link to this heading")

This example takes a real public-domain text excerpt from William
Shakespeare’s **Hamlet** and restructures a traditional hand-written retrieval
workflow around `FluentCorpus`.

The old mental model is often a sequence of unrelated helper functions:

```
raw text
  → clean
  → tokenize
  → chunk
  → vectorize
  → build ANN index
  → search

```

With `FluentCorpus`, those decisions become one inspectable configuration:

```
source
  → reader
  → normalizer
  → chunker
  → enricher
  → embedder
  → storage
  → index
  → retrieval
  → export

```

The current `FluentCorpus.build` validates and returns a
`CorpusPlan`; it does ****not yet materialize or execute**** concrete
components. To keep this example truthful, a small gallery-local
`materialize_plan` helper translates the validated plan into the existing
runtime APIs.

The executed path is intentionally offline and deterministic:

* the Hamlet excerpt is embedded in this example,
* tokenization and keyword extraction use dependency-free backends,
* embeddings use a deterministic local hashing function,
* dense retrieval uses the exact `bruteforce` backend,
* storage uses [`InMemoryStorage`](../../modules/generated/scikitplot.corpus.InMemoryStorage.html#scikitplot.corpus.InMemoryStorage "scikitplot.corpus.InMemoryStorage"),
* export uses JSONL.

A second branch shows how the same plan can select Annoy when native Annoy is
available, without changing the rest of the corpus configuration.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## Imports[#](#imports "Link to this heading")

All gallery-facing components come from the public `scikitplot.corpus`
namespace. NumPy is used by the small deterministic custom embedder.

```
from __future__ import annotations

import hashlib
import re
import tempfile
from collections import Counter
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from scikitplot.corpus import (
    CorpusPipeline,
    DocumentReader,
    EmbeddingEngine,
    ExportFormat,
    FluentCorpus,
    InMemoryStorage,
    ParagraphChunker,
    ParagraphChunkerConfig,
    RetrievalConfig,
    RetrievalIndex,
    StorageQuery,
    TextNormalizer,
    TextNormalizerConfig,
    export_documents,
)

```

## 1. Use real public-domain text[#](#use-real-public-domain-text "Link to this heading")

This deterministic excerpt is adapted from the Project Gutenberg **Hamlet**
text used in the original retrieval prototype. Keeping the executed example
local avoids making Sphinx-Gallery or offline CI depend on network access.

To experiment with the full book interactively, replace `HAMLET_TEXT` with
a downloaded Gutenberg copy before running the remaining cells.

```
HAMLET_TEXT = """\
THE TRAGEDY OF HAMLET, PRINCE OF DENMARK

HAMLET. O that this too too solid flesh would melt,
Thaw, and resolve itself into a dew!
Or that the Everlasting had not fix'd
His canon 'gainst self-slaughter! O God! God!
How weary, stale, flat, and unprofitable
Seem to me all the uses of this world!
Fie on't! ah, fie! 'Tis an unweeded garden
That grows to seed. Things rank and gross in nature
Possess it merely. That it should come to this!

POLONIUS. Yet here, Laertes? Aboard, aboard, for shame!
The wind sits in the shoulder of your sail,
And you are stay'd for. There- my blessing with thee!
Give thy thoughts no tongue,
Nor any unproportion'd thought his act.
Be thou familiar, but by no means vulgar;
Those friends thou hast, and their adoption tried,
Grapple them unto thy soul with hoops of steel.
Give every man thy ear, but few thy voice;
Take each man's censure, but reserve thy judgment.
This above all- to thine own self be true,
And it must follow, as the night the day,
Thou canst not then be false to any man.

GHOST. I am thy father's spirit,
Doom'd for a certain term to walk the night,
And for the day confin'd to fast in fires,
Till the foul crimes done in my days of nature
Are burnt and purg'd away.
I could a tale unfold whose lightest word
Would harrow up thy soul, freeze thy young blood,
Make thy two eyes, like stars, start from their spheres.

HAMLET. O all you host of heaven! O earth! What else?
And shall I couple hell? O, fie! Hold, hold, my heart,
And you, my sinews, grow not instant old,
But bear me stiffly up. Remember thee!
Ay, thou poor ghost, while memory holds a seat
In this distracted globe. Remember thee!

HAMLET. To be, or not to be- that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune
Or to take arms against a sea of troubles,
And by opposing end them. To die- to sleep-
No more; and by a sleep to say we end
The heartache, and the thousand natural shocks
That flesh is heir to. 'Tis a consummation
Devoutly to be wish'd. To die- to sleep.
To sleep- perchance to dream: ay, there's the rub!
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause.

OPHELIA. O, what a noble mind is here o'erthrown!
The courtier's, soldier's, scholar's, eye, tongue, sword;
The expectancy and rose of the fair state,
The glass of fashion and the mould of form,
The observed of all observers, quite, quite down!

HAMLET. Speak the speech, I pray you, as I pronounced it to
you, trippingly on the tongue. But if you mouth it,
as many of your players do, I had as lief the
town crier spoke my lines. Nor do not saw the air
too much with your hand, thus, but use all gently;
for in the very torrent, tempest, and, as I may say,
the whirlwind of passion, you must acquire and beget
a temperance that may give it smoothness.

KING. O, my offence is rank, it smells to heaven;
It hath the primal eldest curse upon't,
A brother's murder. Pray can I not,
Though inclination be as sharp as will.
My stronger guilt defeats my strong intent,
And, like a man to double business bound,
I stand in pause where I shall first begin,
And both neglect.

HAMLET. Alas, poor Yorick! I knew him, Horatio. A fellow
of infinite jest, of most excellent fancy. He hath
borne me on his back a thousand times; and now, how
abhorred in my imagination it is!
Where be your gibes now? Your gambols? Your songs?
Your flashes of merriment that were wont to set the table on a roar?

HAMLET. There's a divinity that shapes our ends,
Rough-hew them how we will.

HORATIO. That is most certain.

HAMLET. Not a whit, we defy augury. There's a special
providence in the fall of a sparrow. If it be now,
'tis not to come; if it be not to come, it will be
now; if it be not now, yet it will come.
The readiness is all.
"""

```

## 2. Create a temporary real source file[#](#create-a-temporary-real-source-file "Link to this heading")

`CorpusPipeline` operates on the same file-oriented reader layer used by
normal applications. A temporary directory keeps the gallery self-contained
and avoids writing generated artifacts into the source tree.

```
_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-hamlet-")
_WORK_DIR = Path(_WORKSPACE.name)
_HAMLET_PATH = _WORK_DIR / "hamlet_excerpt.txt"
_EXPORT_PATH = _WORK_DIR / "hamlet_corpus.jsonl"

_HAMLET_PATH.write_text(HAMLET_TEXT, encoding="utf-8")

print("Source:", _HAMLET_PATH)
print("Characters:", len(HAMLET_TEXT))

```
```
Source: /tmp/scikitplot-hamlet-k1lmrxg_/hamlet_excerpt.txt
Characters: 3819

```

## 3. Define a deterministic local embedder[#](#define-a-deterministic-local-embedder "Link to this heading")

A real retrieval example needs vectors, but a gallery build should not need
to download a transformer model. This function creates a small signed
hashing bag-of-words vector:

* the same token always maps to the same dimension,
* the mapping is stable across Python processes,
* no model files or network access are required,
* cosine similarity remains meaningful enough for this teaching example.

This is a ****demonstration embedding****, not a replacement for a trained
sentence embedding model in production.

```
_TOKEN_RE = re.compile(r"[A-Za-z']+")


def hash_bow_embeddings(
    texts: list[str],
    *,
    dimension: int = 256,
) -> np.ndarray:
    """Return deterministic signed hashing vectors for ``texts``."""
    matrix = np.zeros((len(texts), dimension), dtype=np.float32)

    for row, text in enumerate(texts):
        for token in _TOKEN_RE.findall(text.lower()):
            digest = hashlib.blake2b(
                token.encode("utf-8"),
                digest_size=8,
            ).digest()

            column = int.from_bytes(digest[:4], "little") % dimension
            sign = 1.0 if digest[4] & 1 else -1.0
            matrix[row, column] += sign

    norms = np.linalg.norm(matrix, axis=1, keepdims=True)
    np.divide(
        matrix,
        norms,
        out=matrix,
        where=norms != 0,
    )
    return matrix

```

## 4. Keep embedder configuration stable inside the plan[#](#keep-embedder-configuration-stable-inside-the-plan "Link to this heading")

`FluentCorpus` accepts arbitrary configuration fragments. A small frozen
dataclass records the semantic identity of this demo embedder without putting
a live function or mutable runtime object into the plan fingerprint.

```
@dataclass(frozen=True)
class HashEmbedderSpec:
    """Stable declarative specification for the gallery embedder."""

    name: str = "signed-hash-bow-v1"
    dimension: int = 1024
    normalize: bool = True


@dataclass(frozen=True)
class SimpleEnricherSpec:
    """Dependency-free token/keyword enrichment used by this gallery."""

    min_token_length: int = 3
    max_keywords: int = 8


class SimpleFrequencyEnricher:
    """Populate ``tokens`` and frequency ``keywords`` without optional data."""

    def __init__(self, spec: SimpleEnricherSpec) -> None:
        self.spec = spec

    def enrich_documents(self, documents, *, overwrite: bool = False):
        """Return documents with deterministic token and keyword fields."""
        enriched = []

        for doc in documents:
            if not overwrite and doc.tokens is not None:
                enriched.append(doc)
                continue

            source_text = doc.normalized_text or doc.text
            tokens = [
                token.lower()
                for token in _TOKEN_RE.findall(source_text)
                if len(token) >= self.spec.min_token_length
            ]

            counts = Counter(tokens)
            keywords = [
                token
                for token, _count in sorted(
                    counts.items(),
                    key=lambda item: (-item[1], item[0]),
                )[: self.spec.max_keywords]
            ]

            enriched.append(
                doc.replace(
                    tokens=tokens or None,
                    keywords=keywords or None,
                )
            )

        return enriched

```

## 5. Build one real FluentCorpus configuration[#](#build-one-real-fluentcorpus-configuration "Link to this heading")

The plan now contains concrete configuration for every important stage.

Notice that these calls describe ****which**** components/settings should be
used. Their fluent call order does not become pipeline execution order.

```
base = (
    FluentCorpus()
    .source(Path("hamlet_excerpt.txt"))
    .reader(DocumentReader)
    .normalizer(
        TextNormalizerConfig(
            steps=["unicode", "whitespace"],
            lowercase=False,
        )
    )
    .chunker(
        ParagraphChunkerConfig(
            min_length=40,
            max_length=900,
            overlap=0,
            merge_short=True,
        )
    )
    .enricher(
        SimpleEnricherSpec(
            min_token_length=3,
            max_keywords=8,
        )
    )
    .embedder(HashEmbedderSpec())
    .storage(InMemoryStorage)
    .retrieval(
        RetrievalConfig(
            match_mode="hybrid",
            top_k=4,
            hybrid_alpha=0.55,
            backend="bruteforce",
        )
    )
    .export(ExportFormat.JSONL)
)

portable = base.index(
    RetrievalConfig(
        match_mode="hybrid",
        top_k=8,
        backend="bruteforce",
    )
)

print(portable)
print("Configured domains:", portable.plan().configured)

```
```
<FluentCorpus configured=[source, reader, normalizer, chunker, enricher, embedder, storage, index, retrieval, export] 3fe6267b2a4cdba0>
Configured domains: ['source', 'reader', 'normalizer', 'chunker', 'enricher', 'embedder', 'storage', 'index', 'retrieval', 'export']

```

## 6. Validate and compile the FluentCorpus plan[#](#validate-and-compile-the-fluentcorpus-plan "Link to this heading")

`build()` is currently the validation boundary. It returns the canonical
`CorpusPlan` and performs no I/O or model loading.

```
problems = portable.validate()
print("Validation problems:", problems)

plan = portable.build()

print("Plan fingerprint:", plan.fingerprint)
print("Stages:", plan.effective_stages)

```
```
Validation problems: []
Plan fingerprint: 3fe6267b2a4cdba0
Stages: ('read', 'normalize', 'chunk', 'enrich', 'embed', 'store', 'retrieve')

```

## 7. Materialize the current plan into runtime components[#](#materialize-the-current-plan-into-runtime-components "Link to this heading")

`FluentCorpus` does not yet contain a built-in execution compiler.
This helper is deliberately local to the example and uses only public Corpus
APIs. It demonstrates one possible future integration seam while keeping
today’s contract explicit.

```
@dataclass
class RuntimeCorpus:
    """Concrete runtime objects materialized from a ``CorpusPlan``."""

    source_path: Path
    pipeline: CorpusPipeline
    storage: InMemoryStorage
    index: RetrievalIndex
    retrieval_config: RetrievalConfig
    export_format: ExportFormat
    embedding_engine: EmbeddingEngine


def materialize_plan(plan, *, work_dir: Path) -> RuntimeCorpus:
    """Translate the configuration fragments used by this example."""
    source_fragment = plan.get("source")
    normalizer_config = plan.get("normalizer")
    chunker_config = plan.get("chunker")
    enricher_config = plan.get("enricher")
    embedder_spec = plan.get("embedder")
    storage_type = plan.get("storage")
    index_config = plan.get("index")
    retrieval_config = plan.get("retrieval")
    export_format = plan.get("export")

    if not isinstance(embedder_spec, HashEmbedderSpec):
        raise TypeError("This example expects HashEmbedderSpec.")
    if storage_type is not InMemoryStorage:
        raise TypeError("This example expects InMemoryStorage.")

    embedding_engine = EmbeddingEngine(
        model_name=embedder_spec.name,
        backend="custom",
        custom_fn=lambda texts: hash_bow_embeddings(
            texts,
            dimension=embedder_spec.dimension,
        ),
        enable_cache=False,
        normalize=embedder_spec.normalize,
    )

    pipeline = CorpusPipeline(
        chunker=ParagraphChunker(chunker_config),
        normalizer=TextNormalizer(normalizer_config),
        enricher=SimpleFrequencyEnricher(enricher_config),
        embedding_engine=embedding_engine,
    )

    return RuntimeCorpus(
        source_path=work_dir / source_fragment,
        pipeline=pipeline,
        storage=storage_type(),
        index=RetrievalIndex(config=index_config),
        retrieval_config=retrieval_config,
        export_format=export_format,
        embedding_engine=embedding_engine,
    )


runtime = materialize_plan(plan, work_dir=_WORK_DIR)

print("Pipeline:", runtime.pipeline)
print("Storage:", runtime.storage)
print("Index backend requested:", plan.get("index").backend)

```
```
Pipeline: <scikitplot.corpus._pipeline.CorpusPipeline object at 0x71cc4f867020>
Storage: InMemoryStorage(n_docs=0)
Index backend requested: bruteforce

```

## 8. Execute the real Corpus pipeline[#](#execute-the-real-corpus-pipeline "Link to this heading")

The text reader loads the file, the paragraph chunker creates speech-sized
passages, normalization/enrichment populate document fields, and the custom
embedder attaches one vector to every produced document.

```
result = runtime.pipeline.run(runtime.source_path)

print("Documents:", result.n_documents)
print("Has embeddings:", all(doc.has_embedding for doc in result.documents))

for i, doc in enumerate(result.documents[:3]):
    print(f"\n[{i}] {doc.text[:180]!r}")
    print("    keywords:", doc.keywords)

```
```
Documents: 12
Has embeddings: True

[0] 'THE TRAGEDY OF HAMLET, PRINCE OF DENMARK'
    keywords: ['denmark', 'hamlet', 'prince', 'the', 'tragedy']

[1] "HAMLET. O that this too too solid flesh would melt,\nThaw, and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow wea"
    keywords: ['that', 'and', 'this', 'fie', 'god', 'the', 'too', "'gainst"]

[2] "POLONIUS. Yet here, Laertes? Aboard, aboard, for shame!\nThe wind sits in the shoulder of your sail,\nAnd you are stay'd for. There- my blessing with thee!\nGive thy thoughts no tongu"
    keywords: ['thy', 'the', 'and', 'but', 'thou', 'aboard', 'any', 'for']

```

## 9. Persist the documents through the configured storage[#](#persist-the-documents-through-the-configured-storage "Link to this heading")

`InMemoryStorage` is appropriate for a gallery because it has no external
service and disappears with the process. The important part is that the
storage choice came from the Fluent plan rather than a second configuration.

```
runtime.storage.save_batch(result.documents)

print("Stored documents:", runtime.storage.count())

ghost_docs = runtime.storage.query(
    StorageQuery(
        full_text="ghost",
        limit=3,
    )
)

print("Storage full-text matches:", ghost_docs.total)
print("Filter support:", ghost_docs.filter_support)

```
```
Stored documents: 12
Storage full-text matches: 2
Filter support: {'full_text': <FilterSupport.EMULATED: 'emulated'>}

```

## 10. Build the configured retrieval index[#](#build-the-configured-retrieval-index "Link to this heading")

The same documents already carry dense vectors, so `RetrievalIndex` builds
both its lexical BM25 leg and the configured exact dense vector backend.

```
runtime.index.build(result.documents)

print("Indexed documents:", runtime.index.n_documents)
print("Dense index available:", runtime.index.has_embeddings)
print("Dense backend:", runtime.index.backend_name)

```
```
Indexed documents: 12
Dense index available: True
Dense backend: bruteforce

```

## 11. Run a real hybrid query[#](#run-a-real-hybrid-query "Link to this heading")

Hybrid retrieval needs the query in both lexical and vector form. The query
uses the ****same embedding function**** that embedded the corpus, so both sides
share one vector space.

```
query = "to die sleep dream death what comes after"

query_embedding = runtime.embedding_engine.embed([query])[0]

response = runtime.index.search(
    query,
    config=runtime.retrieval_config,
    query_embedding=query_embedding,
)

print("Query:", query)
print("Retrieval status:", response.status)
print("Hits:", len(response))

for rank, hit in enumerate(response, start=1):
    preview = hit.doc.text.replace("\n", " ")[:170]
    print(
        f"\n#{rank} score={hit.score:.6f} "
        f"mode={hit.match_mode} backend={hit.backend}"
    )
    print(preview)

```
```
Query: to die sleep dream death what comes after
Retrieval status: success
Hits: 4

#1 score=0.016393 mode=hybrid backend=bruteforce
HAMLET. To be, or not to be- that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune Or to take arms against a sea of

#2 score=0.015737 mode=hybrid backend=bruteforce
HAMLET. O all you host of heaven! O earth! What else? And shall I couple hell? O, fie! Hold, hold, my heart, And you, my sinews, grow not instant old, But bear me stiffly

#3 score=0.015720 mode=hybrid backend=bruteforce
OPHELIA. O, what a noble mind is here o'erthrown! The courtier's, soldier's, scholar's, eye, tongue, sword; The expectancy and rose of the fair state, The glass of fashio

#4 score=0.008871 mode=hybrid backend=bruteforce
HAMLET. O that this too too solid flesh would melt, Thaw, and resolve itself into a dew! Or that the Everlasting had not fix'd His canon 'gainst self-slaughter! O God! Go

```

## 12. Inspect lexical and semantic behavior separately[#](#inspect-lexical-and-semantic-behavior-separately "Link to this heading")

One benefit of the current retrieval API is that the same built index can be
queried under different matching policies without rebuilding it.

```
keyword_response = runtime.index.search(
    "father spirit ghost",
    config=RetrievalConfig(
        match_mode="keyword",
        top_k=3,
    ),
)

semantic_query = "mortality dreams after death"
semantic_vector = runtime.embedding_engine.embed([semantic_query])[0]

semantic_response = runtime.index.search(
    semantic_query,
    config=RetrievalConfig(
        match_mode="semantic",
        top_k=3,
        backend="bruteforce",
    ),
    query_embedding=semantic_vector,
)

print("Keyword top hit:")
if keyword_response:
    print(keyword_response[0].doc.text[:220])

print("\nSemantic top hit:")
if semantic_response:
    print(semantic_response[0].doc.text[:220])

```
```
Keyword top hit:
GHOST. I am thy father's spirit,
Doom'd for a certain term to walk the night,
And for the day confin'd to fast in fires,
Till the foul crimes done in my days of nature
Are burnt and purg'd away.
I could a tale unfold who

Semantic top hit:
HAMLET. To be, or not to be- that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune
Or to take arms against a sea of troubles,
And by opposing end them. To die- to sle

```

## 13. Export using the format selected by FluentCorpus[#](#export-using-the-format-selected-by-fluentcorpus "Link to this heading")

Export remains a separate runtime operation today. The selected format is
nevertheless carried by the same plan, so configuration stays centralized.

```
export_documents(
    list(result.documents),
    _EXPORT_PATH,
    runtime.export_format,
    include_embedding=False,
)

print("Exported:", _EXPORT_PATH)
print("Bytes:", _EXPORT_PATH.stat().st_size)
print("First JSONL row:")
print(_EXPORT_PATH.read_text(encoding="utf-8").splitlines()[0][:300])

```
```
Exported: /tmp/scikitplot-hamlet-k1lmrxg_/hamlet_corpus.jsonl
Bytes: 31126
First JSONL row:
{"schema_version": "2.0", "doc_id": "778d78ec096f965d", "input_path": "hamlet_excerpt.txt", "chunk_index": 0, "text": "THE TRAGEDY OF HAMLET, PRINCE OF DENMARK", "section_type": "text", "chunking_strategy": "paragraph", "language": null, "char_start": 0, "char_end": 40, "metadata": {}, "source_type"

```

## 14. Branch the same real corpus plan to Annoy[#](#branch-the-same-real-corpus-plan-to-annoy "Link to this heading")

Because `FluentCorpus` is immutable, selecting Annoy does not require
rebuilding all the preceding configuration by hand.

This cell only creates and validates the Annoy configuration. It does not
build the native index, so the gallery remains portable to environments where
Annoy is unavailable (including some browser/WASM builds).

```
annoy = portable.replace_index(
    RetrievalConfig(
        match_mode="hybrid",
        top_k=8,
        backend="annoy",
        annoy_impl="auto",
        annoy_metric="angular",
        annoy_n_trees=20,
    )
)

print("Portable backend:", portable.plan().get("index").backend)
print("Annoy backend:", annoy.plan().get("index").backend)
print("Base source unchanged:", annoy.plan().get("source") == plan.get("source"))
print("Annoy plan validation:", annoy.validate())

```
```
Portable backend: bruteforce
Annoy backend: annoy
Base source unchanged: True
Annoy plan validation: []

```

## 15. Compare the old and new structure[#](#compare-the-old-and-new-structure "Link to this heading")

The data processing itself is still performed by the mature Corpus runtime
components. `FluentCorpus` removes duplicated configuration and provides
one immutable plan that can be inspected, validated, branched, serialized,
and eventually compiled by a first-class execution layer.

```
BEFORE

raw_text
  → clean_text()
  → tokenize()
  → chunk_text()
  → vectorize()
  → create Index(...)
  → manually keep every setting in sync


WITH FLUENTCORPUS

FluentCorpus()
  .source(...)
  .reader(...)
  .normalizer(...)
  .chunker(...)
  .enricher(...)
  .embedder(...)
  .storage(...)
  .index(...)
  .retrieval(...)
  .export(...)
         │
         ▼
    validated CorpusPlan
         │
         ▼
    materialize runtime
         │
         ▼
   process → store → retrieve → export

```

## 16. Cleanup[#](#cleanup "Link to this heading")

The example created only temporary files, so no gallery-source or repository
directories are modified.

```
_WORKSPACE.cleanup()

print("Temporary workspace cleaned.")

```
```
Temporary workspace cleaned.

```

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.041 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.ipynb)

[`Download Jupyter notebook: plot_corpus_fluent_hamlet_retrieval_script_v1.ipynb`](../../_downloads/7112a5a51a0bf20e7cf18e51b847135a/plot_corpus_fluent_hamlet_retrieval_script_v1.ipynb)

[`Download Python source code: plot_corpus_fluent_hamlet_retrieval_script_v1.py`](../../_downloads/6d888c5d4102d90369250662655e662f/plot_corpus_fluent_hamlet_retrieval_script_v1.py)

[`Download zipped: plot_corpus_fluent_hamlet_retrieval_script_v1.zip`](../../_downloads/57391e29aea91c20a983468eeff801b1/plot_corpus_fluent_hamlet_retrieval_script_v1.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_corpus_script_thumb.png)

[Configure Corpus with FluentCorpus](plot_corpus_fluent_corpus_script.html)

Configure Corpus with FluentCorpus![](../../_images/sphx_glr_plot_annoy_cython_hamlet_example_thumb.png)

[Approximate Nearest Neighbors with Annoy — A Hamlet Example](../annoy/plot_annoy_cython_hamlet_example.html)

Approximate Nearest Neighbors with Annoy — A Hamlet Example

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)