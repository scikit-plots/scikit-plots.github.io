> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-fluent-corpus-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Configure Corpus with FluentCorpus[#](#configure-corpus-with-fluentcorpus "Link to this heading")

`FluentCorpus` is an immutable configuration facade for building a
canonical `CorpusPlan` and, when requested, materializing that plan as a
`RuntimeCorpus`.

Use this example to learn the configuration model before moving to larger
retrieval/media showcases.

## You will learn[#](#you-will-learn "Link to this heading")

* how configuration domains compose without depending on call order,
* how duplicate configuration is detected and replaced intentionally,
* how plans are validated, fingerprinted, and serialized,
* how `FluentCorpus.build` remains the validated-plan boundary,
* how `FluentCorpus.materialize` creates operational runtime state,
* where source processing actually begins.

## Executed path[#](#executed-path "Link to this heading")

The only runtime example uses a temporary local text file, paragraph chunking,
and in-memory storage. It requires no network access, model download, native
vector backend, OCR/ASR dependency, or external NLP resource.

## Optional capabilities[#](#optional-capabilities "Link to this heading")

Some earlier sections use descriptive placeholder strings to explain the plan
mechanics. Those values are ****not**** presented as registered runtime component
names and those illustrative plans are not materialized.

The core distinction is:

`FluentCorpus configures *what* the corpus should use; materialize() constructs
runtime objects; run() starts source processing.`

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## Start with the smallest useful chain[#](#start-with-the-smallest-useful-chain "Link to this heading")

Each configuration domain has its own fluent method. Values may be component
objects, configuration dataclasses, registered names, or other declarative
fragments depending on the domain.

The short `"E"` and `"S"` values below are deliberately abstract. This
first plan is used only to demonstrate configuration identity; it is not
materialized.

```
import os
import tempfile
from pathlib import Path

from scikitplot.corpus import (
    CONFIG_DOMAINS,
    ConfigConflictError,
    CorpusPlan,
    FluentCorpus,
    ParagraphChunkerConfig,
    RuntimePolicy,
)

# os.environ["SCIKITPLOT_GALLERY_RUN_ASR"] = "1"
# os.environ["SCIKITPLOT_CORPUS_ALLOW_DOWNLOADS"] = "1"
_RUN_ASR = os.environ.get("SCIKITPLOT_GALLERY_RUN_ASR", "1").strip().lower() in {
    "1",
    "true",
    "yes",
    "on",
}
_SCIKITPLOT_CORPUS_ALLOW_DOWNLOADS = os.getenv("SCIKITPLOT_CORPUS_ALLOW_DOWNLOADS", "1").strip().lower() in {
    "1",
    "true",
    "yes",
    "on",
}

basic = FluentCorpus().embedder("E").storage("S")

print(basic)
print("configured:", basic.plan().configured)
print("embedder:", basic.plan().get("embedder"))
print("storage:", basic.plan().get("storage"))

```
```
<FluentCorpus configured=[embedder, storage] 637758af50710957>
configured: ['embedder', 'storage']
embedder: E
storage: S

```

## Fluent call order does not define execution order[#](#fluent-call-order-does-not-define-execution-order "Link to this heading")

Independent configuration fragments commute. These two chains produce the
same canonical plan and therefore the same fingerprint.

```
forward = FluentCorpus().embedder("E").storage("S")
backward = FluentCorpus().storage("S").embedder("E")

print("same plan:", forward.plan() == backward.plan())
print("forward fingerprint:", forward.plan().fingerprint)
print("backward fingerprint:", backward.plan().fingerprint)

```
```
same plan: True
forward fingerprint: 637758af50710957
backward fingerprint: 637758af50710957

```

## Configure every supported domain[#](#configure-every-supported-domain "Link to this heading")

`FluentCorpus` currently exposes ten declarative configuration domains.
Their names describe **which** part of the corpus is being configured.

The strings in this section are descriptive placeholders, not guaranteed
runtime registry names. Building this plan performs no source I/O, model
loading, storage connection, or vector-index construction.

```
complete = (
    FluentCorpus()
    .source("<source>")
    .reader("<reader>")
    .normalizer("<normalizer>")
    .chunker("<chunker>")
    .enricher("<enricher>")
    .embedder("<embedder>")
    .storage("<storage>")
    .index("<index-backend>")
    .retrieval("<retrieval-policy>")
    .export("<export-format>")
)

plan = complete.plan()

print("supported domains:", CONFIG_DOMAINS)
print("configured domains:", plan.configured)

for domain in plan.configured:
    print(f"{domain:10s} -> {plan.get(domain)!r}")

```
```
supported domains: ('source', 'reader', 'normalizer', 'chunker', 'enricher', 'embedder', 'storage', 'index', 'retrieval', 'export')
configured domains: ['source', 'reader', 'normalizer', 'chunker', 'enricher', 'embedder', 'storage', 'index', 'retrieval', 'export']
source     -> '<source>'
reader     -> '<reader>'
normalizer -> '<normalizer>'
chunker    -> '<chunker>'
enricher   -> '<enricher>'
embedder   -> '<embedder>'
storage    -> '<storage>'
index      -> '<index-backend>'
retrieval  -> '<retrieval-policy>'
export     -> '<export-format>'

```

## Configure dynamically[#](#configure-dynamically "Link to this heading")

`config(domain, value)` is useful when domains come from a configuration
file, CLI options, a registry, or another programmatic source.

As above, these are plan-only demo values and are not materialized.

```
dynamic = FluentCorpus()

for domain in CONFIG_DOMAINS:
    dynamic = dynamic.config(domain, f"demo-{domain}")

print(dynamic)
print(dynamic.plan().configured)

```
```
<FluentCorpus configured=[source, reader, normalizer, chunker, enricher, embedder, storage, index, retrieval, export] 315139ce7f6faace>
['source', 'reader', 'normalizer', 'chunker', 'enricher', 'embedder', 'storage', 'index', 'retrieval', 'export']

```

## Partial configuration is valid[#](#partial-configuration-is-valid "Link to this heading")

A plan may represent only the decisions known so far. Plan validation checks
cross-fragment coherence; it does not imply that every optional runtime
dependency or named backend has already been constructed.

```
embedding_only = FluentCorpus().embedder("demo-embedding-model")

print(embedding_only)
print("configured:", embedding_only.plan().configured)
print("validation problems:", embedding_only.validate())

```
```
<FluentCorpus configured=[embedder] 25be69c966330fa3>
configured: ['embedder']
validation problems: []

```

## Builders are immutable and reusable[#](#builders-are-immutable-and-reusable "Link to this heading")

Every fluent call returns a new builder. The original object is unchanged,
which makes a partially configured builder useful as a template.

```
base = (
    FluentCorpus()
    .reader("auto")
    .chunker(ParagraphChunkerConfig(min_length=1, max_length=500))
)

memory_branch = base.storage("memory")
same_base_other_branch = base.storage("sqlite")

print("base:", base.plan().configured)
print("memory branch storage:", memory_branch.plan().get("storage"))
print("sqlite branch storage:", same_base_other_branch.plan().get("storage"))

```
```
base: ['reader', 'chunker']
memory branch storage: memory
sqlite branch storage: sqlite

```

## Duplicate configuration is an error by default[#](#duplicate-configuration-is-an-error-by-default "Link to this heading")

Calling the same domain twice does not silently discard the first value.
`ConfigConflictError` makes accidental replacement visible.

```
try:
    FluentCorpus().embedder("model-A").embedder("model-B")
except ConfigConflictError as exc:
    print(type(exc).__name__)
    print(exc)

```
```
ConfigConflictError
'embedder' is already configured as str('model-A'); refusing to replace it with str('model-B') silently. Use .replace_embedder(...) or conflict='replace' to substitute it deliberately.

```

## Replace a value only when that is intentional[#](#replace-a-value-only-when-that-is-intentional "Link to this heading")

There are two explicit replacement forms.

`replace_embedder(...)` makes the intent especially clear in a fluent
chain. `conflict="replace"` is useful for generic/config-driven code.

```
explicit_replace = FluentCorpus().embedder("model-A").replace_embedder("model-B")

keyword_replace = (
    FluentCorpus()
    .embedder("model-A")
    .embedder("model-B", conflict="replace")
)

print("explicit replacement:", explicit_replace.plan().get("embedder"))
print("keyword replacement:", keyword_replace.plan().get("embedder"))

```
```
explicit replacement: model-B
keyword replacement: model-B

```

## Every domain also has a `replace_*` method[#](#every-domain-also-has-a-replace-method "Link to this heading")

The replacement API is generated consistently for all configuration domains.
This small introspection block gives new users a quick map of the available
fluent vocabulary.

```
for domain in CONFIG_DOMAINS:
    setter = getattr(FluentCorpus, domain)
    replacer = getattr(FluentCorpus, f"replace_{domain}")
    print(f"{setter.__name__:10s} | {replacer.__name__}")

```
```
source     | replace_source
reader     | replace_reader
normalizer | replace_normalizer
chunker    | replace_chunker
enricher   | replace_enricher
embedder   | replace_embedder
storage    | replace_storage
index      | replace_index
retrieval  | replace_retrieval
export     | replace_export

```

## Execution order is explicit through `stages`[#](#execution-order-is-explicit-through-stages "Link to this heading")

The order of `reader()`, `chunker()`, `embedder()`, and other fluent
calls never changes the pipeline sequence.

`stages(...)` may select an explicit canonical subset for execution. The
current runtime does not interpret fluent call order as a second execution
engine.

```
default_order = (
    FluentCorpus()
    .chunker("demo-chunker")
    .normalizer("demo-normalizer")
    .plan()
)

explicit_order = (
    FluentCorpus()
    .normalizer("demo-normalizer")
    .chunker("demo-chunker")
    .stages("read", "normalize", "chunk", "embed")
    .plan()
)

print("default effective stages:", default_order.effective_stages)
print("explicit effective stages:", explicit_order.effective_stages)

```
```
default effective stages: ('read', 'normalize', 'chunk', 'enrich', 'embed', 'store', 'retrieve')
explicit effective stages: ('read', 'normalize', 'chunk', 'embed')

```

## Validate cross-fragment coherence before build[#](#validate-cross-fragment-coherence-before-build "Link to this heading")

Validation reports known plan-level problems as structured records without
constructing optional backends.

A vector index without an embedder is one example of an incoherent plan.

```
invalid = FluentCorpus().index("demo-vector-index")
problems = invalid.validate()

for problem in problems:
    print("code:", problem.code)
    print("message:", problem.message)
    print("stage:", problem.stage)

```
```
code: PLAN_INDEX_WITHOUT_EMBEDDER
message: a vector index is configured but no embedder is; the index would have no vectors to build from
stage: plan

```

## Add the missing dependency and validate again[#](#add-the-missing-dependency-and-validate-again "Link to this heading")

This demonstrates **plan-level** coherence only. The placeholder backend/model
names are intentionally not materialized in this section.

```
valid = (
    FluentCorpus()
    .embedder("demo-embedding-model")
    .index("demo-vector-index")
)

print("validation problems:", valid.validate())

```
```
validation problems: []

```

## `build` validates and returns the immutable plan[#](#build-validates-and-returns-the-immutable-plan "Link to this heading")

`build()` remains the validated-plan boundary for backward compatibility.
It does not read the source or construct runtime state. Use `materialize()`
when you want the plan to become operational.

```
built_plan = valid.build()

print("build returned:", type(built_plan).__name__)
print("same canonical plan:", built_plan == valid.plan())

```
```
build returned: CorpusPlan
same canonical plan: True

```

## Materialize one small real plan[#](#materialize-one-small-real-plan "Link to this heading")

This is the first operational section. It uses only portable/core
capabilities so the beginner example does not depend on NLTK data, OCR/ASR,
a transformer model, or a native vector backend.

Materialization constructs `RuntimeCorpus` but does not process the source.
Source I/O starts only when `run()` is called.

```
with tempfile.TemporaryDirectory(prefix="scikitplot-fluent-") as tmp:
    source = Path(tmp) / "tiny_corpus.txt"
    source.write_text(
        "FluentCorpus describes immutable configuration.\n\n"
        "RuntimeCorpus executes that configuration when run() is called.",
        encoding="utf-8",
    )

    executable = (
        FluentCorpus()
        .source(source)
        .reader("auto")
        .chunker(ParagraphChunkerConfig(min_length=1, max_length=500))
        .storage("memory")
    )

    print("validation problems:", executable.validate())

    with executable.materialize(
        policy=RuntimePolicy(allow_network=False),
    ) as runtime:
        print("runtime type:", type(runtime).__name__)
        print("documents before run:", len(runtime.documents))
        print("storage before run:", runtime.storage.count())

        result = runtime.run()

        print("pipeline documents:", result.n_documents)
        print("runtime documents:", len(runtime.documents))
        print("stored documents:", runtime.storage.count())
        print("runtime closed inside context:", runtime.closed)

    print("runtime closed after context:", runtime.closed)

```
```
validation problems: []
runtime type: RuntimeCorpus
documents before run: 0
storage before run: 0
pipeline documents: 2
runtime documents: 2
stored documents: 2
runtime closed inside context: False
runtime closed after context: True

```

## Validation happens before runtime execution[#](#validation-happens-before-runtime-execution "Link to this heading")

`materialize()` calls the same plan validation boundary first. A genuinely
incoherent plan therefore fails before source I/O or optional backend work.
This is an intentional configuration error, not an optional-capability skip.

```
try:
    invalid.materialize()
except ValueError as exc:
    print("materialization rejected invalid plan:", exc)

```
```
materialization rejected invalid plan: invalid corpus plan: [validation/PLAN_INDEX_WITHOUT_EMBEDDER] plan: a vector index is configured but no embedder is; the index would have no vectors to build from

```

## A plan has a stable content-derived fingerprint[#](#a-plan-has-a-stable-content-derived-fingerprint "Link to this heading")

Equal configurations share a fingerprint even when their fluent call order
differs. Changing a fragment changes the fingerprint.

```
plan_a = FluentCorpus().reader("R").storage("S").plan()
plan_b = FluentCorpus().storage("S").reader("R").plan()
plan_c = FluentCorpus().reader("R").storage("OTHER").plan()

print("A:", plan_a.fingerprint)
print("B:", plan_b.fingerprint)
print("C:", plan_c.fingerprint)
print("A == B:", plan_a == plan_b)
print("A == C:", plan_a == plan_c)

```
```
A: af29c4a720e95a19
B: af29c4a720e95a19
C: 3a6ecaac9a5eb82a
A == B: True
A == C: False

```

## Convert the plan to a JSON-compatible description[#](#convert-the-plan-to-a-json-compatible-description "Link to this heading")

`to_dict()` provides a compact representation for logging, diagnostics,
configuration inspection, or serialization by a surrounding application.

```
payload = complete.plan().to_dict()

print("fingerprint:", payload["fingerprint"])
print("configured:", payload["configured"])
print("stages:", payload["stages"])
print("fragments:")
for name, description in payload["fragments"].items():
    print(f"  {name:10s}: {description}")

```
```
fingerprint: 0ba300b891ed9431
configured: ['source', 'reader', 'normalizer', 'chunker', 'enricher', 'embedder', 'storage', 'index', 'retrieval', 'export']
stages: ['read', 'normalize', 'chunk', 'enrich', 'embed', 'store', 'retrieve']
fragments:
  source    : str('<source>')
  reader    : str('<reader>')
  normalizer: str('<normalizer>')
  chunker   : str('<chunker>')
  enricher  : str('<enricher>')
  embedder  : str('<embedder>')
  storage   : str('<storage>')
  index     : str('<index-backend>')
  retrieval : str('<retrieval-policy>')
  export    : str('<export-format>')

```

## Fluent and explicit CorpusPlan forms are equivalent[#](#fluent-and-explicit-corpusplan-forms-are-equivalent "Link to this heading")

`FluentCorpus` is a convenience facade over `CorpusPlan` rather than a
separate configuration model.

```
fluent_plan = FluentCorpus().reader("R").embedder("E").storage("S").plan()

explicit_plan = CorpusPlan.of(
    reader="R",
    embedder="E",
    storage="S",
)

print("equivalent:", fluent_plan == explicit_plan)

```
```
equivalent: True

```

## A practical newbie pattern[#](#a-practical-newbie-pattern "Link to this heading")

A useful progression is:

1. create a reusable declarative base,
2. branch it for different environments,
3. validate and inspect the chosen branch,
4. materialize only the branch you actually want to execute,
5. use `RuntimeCorpus` for run/add/search/storage/export lifecycle.

The development branch below is directly materializable. The production
branch stays configuration-only because persistent storage paths, embedding
models, and native index availability are application/environment decisions.

```
base = (
    FluentCorpus()
    .reader("auto")
    .chunker(ParagraphChunkerConfig(min_length=1, max_length=500))
)

development = base.storage("memory")

production_shape = (
    base
    .embedder("<production-embedding-model>")
    .storage("<persistent-storage>")
    .index("<production-vector-backend>")
    .retrieval("hybrid")
    .export("parquet")
)

for name, builder in [
    ("development", development),
    ("production-shape", production_shape),
]:
    print(f"\n{name.upper()}")
    print("  valid:", not builder.validate())
    print("  fingerprint:", builder.plan().fingerprint)
    print("  configured:", builder.plan().configured)

```
```
DEVELOPMENT
  valid: True
  fingerprint: 7778ad910bffbc3d
  configured: ['reader', 'chunker', 'storage']

PRODUCTION-SHAPE
  valid: True
  fingerprint: fc58cff3175b3006
  configured: ['reader', 'chunker', 'embedder', 'storage', 'index', 'retrieval', 'export']

```

## Optional-capability rule for the rest of the Corpus gallery[#](#optional-capability-rule-for-the-rest-of-the-corpus-gallery "Link to this heading")

This example intentionally has no optional dependency in its executed path.
In later media/NLP/native-backend examples we use this review rule:

`missing optional dependency/resource/capability → visible SKIP`

`real API/contract/security regression → visible failure`

A skip must not fabricate documents/results and must not be implemented by a
broad `except Exception` that could hide a real defect.

## Takeaway[#](#takeaway "Link to this heading")

`FluentCorpus` is best understood as an immutable configuration language
with an explicit operational boundary:

`configure → branch → validate → inspect → build plan → materialize → run`.

Fluent call order remains configuration order-independent. `RuntimeCorpus`
owns the stateful execution lifecycle once a plan is materialized.

Tags: [model-workflow: corpus](../../_tags/model-workflow-corpus.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.017 seconds)

[![Launch binder](../../_images/binder_badge_logo4.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_fluent_corpus_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo4.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_fluent_corpus_script.ipynb)

[`Download Jupyter notebook: plot_corpus_fluent_corpus_script.ipynb`](../../_downloads/d5cc88ee112c0c13c4f604c6a7de487e/plot_corpus_fluent_corpus_script.ipynb)

[`Download Python source code: plot_corpus_fluent_corpus_script.py`](../../_downloads/06a6b4526447bcdbc83aedf0931222db/plot_corpus_fluent_corpus_script.py)

[`Download zipped: plot_corpus_fluent_corpus_script.zip`](../../_downloads/e1a68dd9b0eeb219850add4142f6299b/plot_corpus_fluent_corpus_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](../cython/plot_01_browse_and_compile_templates.html)

Browse and compile templates

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)