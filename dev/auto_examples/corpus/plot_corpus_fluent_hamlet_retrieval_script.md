> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-fluent-hamlet-retrieval-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Build and Search a Real Hamlet Corpus with FluentCorpus[#](#build-and-search-a-real-hamlet-corpus-with-fluentcorpus "Link to this heading")

This example uses a real public-domain **Hamlet** excerpt to demonstrate the
first-class `FluentCorpus` runtime workflow.

The configuration remains declarative:

```
FluentCorpus
  → source
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

The operational boundary is now explicit:

```
FluentCorpus.materialize()
  → RuntimeCorpus
  → run()
  → add()
  → search() / query_storage() / export()

```

Unlike the earlier version of this example, no gallery-local `RuntimeCorpus`
or `materialize_plan` helper is required. The Corpus submodule owns that
translation and lifecycle directly.

The executed path is intentionally offline and deterministic:

* `HAMLET_TEXT` provides a bundled public-domain sample,
* normalization and paragraph chunking use local Corpus components,
* `SimpleEnricherSpec` configures `SimpleFrequencyEnricher`,
* `HashEmbedder` provides deterministic local lexical embeddings,
* dense retrieval uses the exact `bruteforce` backend,
* storage uses [`InMemoryStorage`](../../modules/generated/scikitplot.corpus.InMemoryStorage.html#scikitplot.corpus.InMemoryStorage "scikitplot.corpus.InMemoryStorage"),
* export uses JSONL.

The sample, simple enricher, enricher spec, and hashing embedder are public
[`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") helpers rather than gallery-local implementations.

Because Sphinx-Gallery turns `# %%` blocks into independent notebook cells,
the runtime is kept explicitly open across the multi-cell workflow and closed
in the final cleanup cell. For a single-cell script, a context manager remains
the preferred lifecycle form. A bounded `add()` scenario extends the same
runtime generation with a second local source and rebuilds one coherent
retrieval index.

A final configuration-only branch shows the modern generic `index_kwargs`
form for Annoy without requiring the native backend during the gallery build.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## Imports[#](#imports "Link to this heading")

Runtime construction, sample data, dependency-free enrichment, embeddings,
lifecycle, storage, retrieval, and export all come from the public Corpus API.

```
from __future__ import annotations

import tempfile
from pathlib import Path

from scikitplot.corpus import (
    HAMLET_TEXT,
    DocumentReader,
    ExportFormat,
    FluentCorpus,
    HashEmbedder,
    InMemoryStorage,
    ParagraphChunkerConfig,
    RetrievalConfig,
    RuntimePolicy,
    SimpleEnricherSpec,
    SimpleFrequencyEnricher,
    StorageQuery,
    TextNormalizerConfig,
)

```

## 1. Use the public Hamlet sample[#](#use-the-public-hamlet-sample "Link to this heading")

`HAMLET_TEXT` is exported directly by [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus"). Keeping a
small public-domain sample in the submodule makes examples, smoke tests, and
offline experiments reproducible without copying the same text into every
gallery file.

The addendum stays local because it exists only to demonstrate
`RuntimeCorpus.add` later in this example.

```
HAMLET_ADDENDUM = """\
POLONIUS. This business is well ended.
My liege, and madam, to expostulate
What majesty should be, what duty is,
Why day is day, night night, and time is time,
Were nothing but to waste night, day, and time.
Therefore, since brevity is the soul of wit,
And tediousness the limbs and outward flourishes,
I will be brief.

HAMLET. What a piece of work is a man! How noble in reason,
how infinite in faculty, in form and moving how express and admirable,
in action how like an angel, in apprehension how like a god:
the beauty of the world, the paragon of animals.
"""

```

## 2. Create temporary real source files[#](#create-temporary-real-source-files "Link to this heading")

The runtime uses the normal file-oriented reader layer. A temporary
workspace gives us a genuine source path and export destination without
modifying the gallery source tree.

```
_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-hamlet-")
_WORK_DIR = Path(_WORKSPACE.name)
_HAMLET_PATH = _WORK_DIR / "hamlet_excerpt.txt"
_HAMLET_ADDENDUM_PATH = _WORK_DIR / "hamlet_addendum.txt"
_EXPORT_PATH = _WORK_DIR / "hamlet_corpus.jsonl"

_HAMLET_PATH.write_text(HAMLET_TEXT, encoding="utf-8")
_HAMLET_ADDENDUM_PATH.write_text(HAMLET_ADDENDUM, encoding="utf-8")

print("Initial source:", _HAMLET_PATH)
print("Initial characters:", len(HAMLET_TEXT))
print("Addendum source:", _HAMLET_ADDENDUM_PATH)

```
```
Initial source: /tmp/scikitplot-hamlet-17ebpn82/hamlet_excerpt.txt
Initial characters: 3820
Addendum source: /tmp/scikitplot-hamlet-17ebpn82/hamlet_addendum.txt

```

## 3. Configure the public dependency-free helpers[#](#configure-the-public-dependency-free-helpers "Link to this heading")

These helpers now belong to [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus"); the gallery does not
need to define its own hashing embedder or token/keyword enricher.

`SimpleEnricherSpec` is the declarative form accepted directly by
`FluentCorpus.enricher(...)`. `SimpleFrequencyEnricher` is the direct
imperative equivalent when an application wants to enrich documents itself.

```
ENRICHER_SPEC = SimpleEnricherSpec(
    min_token_length=3,
    max_keywords=8,
)
DIRECT_ENRICHER = SimpleFrequencyEnricher(ENRICHER_SPEC)
HASH_EMBEDDER = HashEmbedder(dimension=1024)

print("Sample characters:", len(HAMLET_TEXT))
print("Declarative enricher spec:", ENRICHER_SPEC)
print("Direct enricher type:", type(DIRECT_ENRICHER).__name__)
print("Hash embedding dimension:", HASH_EMBEDDER.dimension)

```
```
Sample characters: 3820
Declarative enricher spec: SimpleEnricherSpec(min_token_length=3, max_keywords=8, lowercase=True)
Direct enricher type: SimpleFrequencyEnricher
Hash embedding dimension: 1024

```

## 4. Describe the whole corpus with FluentCorpus[#](#describe-the-whole-corpus-with-fluentcorpus "Link to this heading")

`index` and `retrieval` are deliberately separate decisions:

* `index` chooses how dense vectors are indexed.
* `retrieval` chooses how the already-built corpus is queried/fused.

`RetrievalConfig` is still used for both domains in the current transitional
API, but backend-specific constructor settings now belong in generic
`index_kwargs` rather than requiring a new top-level field per backend.

```
fluent = (
    FluentCorpus()
    .source(_HAMLET_PATH)
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
    .enricher(ENRICHER_SPEC)
    .embedder(HASH_EMBEDDER)
    .storage(InMemoryStorage)
    .index(
        RetrievalConfig(
            backend="bruteforce",
        )
    )
    .retrieval(
        RetrievalConfig(
            match_mode="hybrid",
            top_k=4,
            hybrid_alpha=0.55,
        )
    )
    .export(ExportFormat.JSONL)
)

print(fluent)
print("Configured domains:", fluent.plan().configured)
print("Validation problems:", fluent.validate())

```
```
<FluentCorpus configured=[source, reader, normalizer, chunker, enricher, embedder, storage, index, retrieval, export] e228ed71d52ba3ec>
Configured domains: ['source', 'reader', 'normalizer', 'chunker', 'enricher', 'embedder', 'storage', 'index', 'retrieval', 'export']
Validation problems: []

```

## 5. Materialize with an explicit runtime lifecycle[#](#materialize-with-an-explicit-runtime-lifecycle "Link to this heading")

`materialize()` constructs operational components and returns
`RuntimeCorpus`, but it does ****not**** read `plan.source`. That keeps
configuration/materialization separate from execution.

`RuntimePolicy` is also explicit. This gallery forbids network sources,
even though both configured sources are local.

A context manager is ideal when materialize/run/search/export all live in one
Python scope. This gallery intentionally spans multiple `# %%` cells,
which become independent cells in the generated notebook. Therefore we keep
the runtime explicitly open across cells and close it in the final cleanup
cell. This makes both `Run all` and step-by-step notebook execution safe.

Single-cell/script equivalent:

```
with fluent.materialize(policy=RuntimePolicy(allow_network=False)) as rt:
    result = rt.run()

```
```
runtime = fluent.materialize(
    policy=RuntimePolicy(allow_network=False),
)

print("Runtime type:", type(runtime).__name__)
print("Plan fingerprint:", runtime.plan_fingerprint)
print("Documents before run:", len(runtime.documents))
print("Index before run:", runtime.index)

```
```
Runtime type: RuntimeCorpus
Plan fingerprint: e228ed71d52ba3ec
Documents before run: 0
Index before run: None

```

## 6. Run once: process, store, and build the index[#](#run-once-process-store-and-build-the-index "Link to this heading")

`RuntimeCorpus.run()` owns:

`CorpusPipeline → storage.save_batch → RetrievalIndex.build`.

`run()` is intentionally one-shot. Additional sources belong to
`add()` so the generation transition is explicit.

```
result = runtime.run()

print("Pipeline documents:", result.n_documents)
print("Runtime documents:", len(runtime.documents))
print("Stored documents:", runtime.storage.count())
print("Index documents:", runtime.index.n_documents)
print("Dense index available:", runtime.index.has_embeddings)
print("Dense backend:", runtime.index.backend_name)
print("Index generation:", runtime.index_generation)

for i, doc in enumerate(runtime.documents[:3]):
    print(f"\n[{i}] {doc.text[:180]!r}")
    print("    keywords:", doc.keywords)

```
```
Pipeline documents: 12
Runtime documents: 12
Stored documents: 12
Index documents: 12
Dense index available: True
Dense backend: bruteforce
Index generation: 5987ceda39d019cd

[0] 'THE TRAGEDY OF HAMLET, PRINCE OF DENMARK'
    keywords: ['denmark', 'hamlet', 'prince', 'the', 'tragedy']

[1] "HAMLET. O that this too too solid flesh would melt,\nThaw, and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow wea"
    keywords: ['that', 'and', 'this', 'fie', 'god', 'the', 'too', 'all']

[2] "POLONIUS. Yet here, Laertes? Aboard, aboard, for shame!\nThe wind sits in the shoulder of your sail,\nAnd you are stay'd for. There- my blessing with thee!\nGive thy thoughts no tongu"
    keywords: ['thy', 'the', 'and', 'but', 'thou', 'aboard', 'any', 'for']

```

## 7. Query storage through RuntimeCorpus[#](#query-storage-through-runtimecorpus "Link to this heading")

The runtime exposes the configured storage backend without making the
user keep a parallel storage variable in sync with the plan.

```
ghost_docs = runtime.query_storage(
    StorageQuery(
        full_text="ghost",
        limit=3,
    )
)

print("Storage full-text matches:", ghost_docs.total)
print("Filter support:", ghost_docs.filter_support)

```
```
Storage full-text matches: 2
Filter support: {'full_text': <FilterSupport.EMULATED: 'emulated'>}

```

## 8. Run a real hybrid search[#](#run-a-real-hybrid-search "Link to this heading")

`RuntimeCorpus.search` automatically embeds semantic/hybrid queries with
the same embedding engine that was used for corpus documents.

```
query = "to die sleep dream death what comes after"
response = runtime.search(query)

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

#3 score=0.015591 mode=hybrid backend=bruteforce
OPHELIA. O, what a noble mind is here o'erthrown! The courtier's, soldier's, scholar's, eye, tongue, sword; The expectancy and rose of the fair state, The glass of fashio

#4 score=0.008871 mode=hybrid backend=bruteforce
HAMLET. O that this too too solid flesh would melt, Thaw, and resolve itself into a dew! Or that the Everlasting had not fix'd His canon 'gainst self-slaughter! O God! Go

```

## 9. Add another source and advance the index generation[#](#add-another-source-and-advance-the-index-generation "Link to this heading")

`add()` processes new source data, appends the resulting documents to
the runtime, commits them to storage, and rebuilds one coherent index over
the complete document set.

This is different from calling `run()` twice: `run()` establishes the
first generation and `add()` makes later growth explicit.

```
documents_before_add = len(runtime.documents)
generation_before_add = runtime.index_generation

added = runtime.add(_HAMLET_ADDENDUM_PATH)

documents_after_add = len(runtime.documents)
generation_after_add = runtime.index_generation

print("Addendum pipeline documents:", added.n_documents)
print("Documents before add:", documents_before_add)
print("Documents after add:", documents_after_add)
print("Stored documents after add:", runtime.storage.count())
print("Generation before add:", generation_before_add)
print("Generation after add:", generation_after_add)
print("Generation changed:", generation_before_add != generation_after_add)

add_response = runtime.search("brevity soul wit tediousness")
print("Addendum search status:", add_response.status)
if add_response:
    print("Addendum top hit:", add_response[0].doc.text[:220])

```
```
Addendum pipeline documents: 2
Documents before add: 12
Documents after add: 14
Stored documents after add: 14
Generation before add: 5987ceda39d019cd
Generation after add: 106622e8245f5305
Generation changed: True
Addendum search status: success
Addendum top hit: POLONIUS. This business is well ended.
My liege, and madam, to expostulate
What majesty should be, what duty is,
Why day is day, night night, and time is time,
Were nothing but to waste night, day, and time.
Therefore, s

```

## 10. Override retrieval policy without rebuilding[#](#override-retrieval-policy-without-rebuilding "Link to this heading")

Search policy can change per request while the current index generation
stays intact. Keyword mode needs no query embedding; semantic mode is
embedded automatically by `RuntimeCorpus.search`.

```
keyword_response = runtime.search(
    "father spirit ghost",
    config=RetrievalConfig(
        match_mode="keyword",
        top_k=3,
    ),
)

semantic_response = runtime.search(
    "mortality dreams after death",
    config=RetrievalConfig(
        match_mode="semantic",
        top_k=3,
    ),
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

## 11. Export the current generation through RuntimeCorpus[#](#export-the-current-generation-through-runtimecorpus "Link to this heading")

The plan already selected JSONL, so `runtime.export` only needs the
output path. Export happens after `add()` and therefore includes the
complete current runtime generation.

```
exported = runtime.export(
    _EXPORT_PATH,
    include_embedding=False,
)

print("Exported:", exported)
print("Bytes:", exported.stat().st_size)
print("Exported documents:", len(runtime.documents))
print("First JSONL row:")
print(exported.read_text(encoding="utf-8").splitlines()[0][:300])

# The runtime intentionally remains open for the following independent gallery
# cells.  It is closed explicitly in the final cleanup section.
print("Runtime still open after export:", not runtime.closed)

```
```
Exported: /tmp/scikitplot-hamlet-17ebpn82/hamlet_corpus.jsonl
Bytes: 35993
Exported documents: 14
First JSONL row:
{"schema_version": "2.0", "doc_id": "778d78ec096f965d", "input_path": "hamlet_excerpt.txt", "chunk_index": 0, "text": "THE TRAGEDY OF HAMLET, PRINCE OF DENMARK", "section_type": "text", "chunking_strategy": "paragraph", "language": null, "char_start": 0, "char_end": 40, "metadata": {}, "source_type"
Runtime still open after export: True

```

## 12. Configure the same corpus for Annoy with generic index\_kwargs[#](#configure-the-same-corpus-for-annoy-with-generic-index-kwargs "Link to this heading")

Backend-specific constructor options now live in the generic `index_kwargs`
mapping. The old `annoy_*` fields remain compatible, but new examples
should prefer the generic form because it scales to other vector backends.

This branch is configuration-only: it validates the immutable plan but does
not materialize/build Annoy, so native Annoy is not required by the gallery.

```
annoy = fluent.replace_index(
    RetrievalConfig(
        backend="annoy",
        index_kwargs={
            "impl": "auto",
            "metric": "angular",
            "n_trees": 20,
            "search_k": -1,
        },
    )
)

print("Portable backend:", fluent.plan().get("index").backend)
print("Annoy backend:", annoy.plan().get("index").backend)
print("Annoy constructor kwargs:", annoy.plan().get("index").index_kwargs)
print("Source unchanged:", annoy.plan().get("source") == fluent.plan().get("source"))
print("Annoy plan validation:", annoy.validate())

```
```
Portable backend: bruteforce
Annoy backend: annoy
Annoy constructor kwargs: {'impl': 'auto', 'metric': 'angular', 'n_trees': 20, 'search_k': -1}
Source unchanged: True
Annoy plan validation: []

```

## 13. Compare the old and new structure[#](#compare-the-old-and-new-structure "Link to this heading")

The mature Corpus components perform the processing, and the reusable sample,
enrichment, and hashing helpers now live in the submodule too. The gallery
therefore focuses on composition and lifecycle instead of local helper code.

```
BEFORE V2

FluentCorpus
    ↓
CorpusPlan
    ↓
gallery-local materialize_plan()
    ↓
gallery-local RuntimeCorpus
    ↓
pipeline.run()
storage.save_batch()
index.build()
index.search()
export_documents()


CURRENT

FluentCorpus
    ↓
.materialize()
    ↓
RuntimeCorpus
    ↓
.run()
.add()
.query_storage()
.search()
.export()
.close()  # explicit across gallery/notebook cells

```

## 14. Cleanup[#](#cleanup "Link to this heading")

Close runtime-owned resources before deleting the temporary source/export
workspace. `close()` is idempotent, so rerunning this cleanup cell is safe.

```
runtime.close()
print("Runtime closed:", runtime.closed)

_WORKSPACE.cleanup()
print("Temporary workspace cleaned.")

```
```
Runtime closed: True
Temporary workspace cleaned.

```

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.050 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.ipynb)

[`Download Jupyter notebook: plot_corpus_fluent_hamlet_retrieval_script.ipynb`](../../_downloads/a7001b02dde766f2c658ee50a1901895/plot_corpus_fluent_hamlet_retrieval_script.ipynb)

[`Download Python source code: plot_corpus_fluent_hamlet_retrieval_script.py`](../../_downloads/aeb493bf9754d55ad436121373574ebe/plot_corpus_fluent_hamlet_retrieval_script.py)

[`Download zipped: plot_corpus_fluent_hamlet_retrieval_script.zip`](../../_downloads/b0dfcbe784afa7ee9272906864280bbb/plot_corpus_fluent_hamlet_retrieval_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_corpus_script_thumb.png)

[Configure Corpus with FluentCorpus](plot_corpus_fluent_corpus_script.html)

Configure Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)