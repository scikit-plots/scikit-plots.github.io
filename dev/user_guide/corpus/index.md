# Corpus User Guide[#](#corpus-user-guide "Link to this heading")

[`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") turns local files, URLs, archives and media into
canonical [`CorpusDocument`](../../modules/generated/scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") evidence, then lets you normalize, enrich,
embed, store, retrieve and export that evidence without requiring one monolithic
runtime.

The important boundary is that configuration, capability discovery and
execution are separate. A package can be installed without its model or system
binary being ready; a backend can be selected without becoming active; and a
fail-soft operation can continue while still recording structured degradation.

> **Important**
> Corpus treats optional capability failure as data, not as success. Use
`component_capabilities` before a run when readiness matters and inspect
`reader.backend_reports` after a reader run when a fallback was possible.
`strict=False` may keep ingestion alive; it does not mean failures are
invisible.

## The whole idea in one picture[#](#the-whole-idea-in-one-picture "Link to this heading")

```
source
   |
   v
downloader / local path
   |
   v
DocumentReader ---- capability/readiness ---- optional backends
   |                                      \
   |                                       +-- fallback policy + reports
   v
filter -> normalize -> chunk -> enrich -> embed -> store -> index
                                                  |
                                                  v
                                       retrieve / adapt / export

```

There are three complementary configuration levels:

`CorpusPipeline`
:   Direct control of one execution pipeline.

`CorpusBuilder`
:   High-level heterogeneous ingestion, downloading, search and adaptation.

`FluentCorpus`
:   Immutable declarative plans that can be generated, branched, compared and
    materialized explicitly.

## Thirty seconds[#](#thirty-seconds "Link to this heading")

```
from scikitplot.corpus import FluentCorpus

plan = FluentCorpus.from_config({
    "chunker": "paragraph",
    "storage": "memory",
})
plan.explain()["configured"]
# ['chunker', 'storage']

```

Inspect optional component readiness without importing heavy models:

```
from scikitplot.corpus import component_capabilities

status = component_capabilities(["asr:faster-whisper", "ocr:pytesseract"])
status["asr:faster-whisper"]["installed"]
# True or False depending on the environment

```

## Which surface should I use?[#](#which-surface-should-i-use "Link to this heading")

| Goal | Start with |
| --- | --- |
| Process one source with explicit stages | [`CorpusPipeline`](../../modules/generated/scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline") |
| Ingest heterogeneous local/remote sources | [`CorpusBuilder`](../../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") |
| Generate reusable configuration variants | [`FluentCorpus`](../../modules/generated/scikitplot.corpus.FluentCorpus.html#scikitplot.corpus.FluentCorpus "scikitplot.corpus.FluentCorpus") ([Fluent configuration and policies](fluent_and_policies.html#corpus-fluent-policies)) |
| Supply a custom reader/filter/downloader/component | [`CorpusBuilder`](../../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") with [`BuilderFactories`](../../modules/generated/scikitplot.corpus.BuilderFactories.html#scikitplot.corpus.BuilderFactories "scikitplot.corpus.BuilderFactories") ([Customization](customization.html#corpus-customization)) |
| Inspect optional package/model/binary readiness | `component_capabilities` ([Readers, backends, and readiness](readers_and_backends.html#corpus-readers-backends)) |
| Preview the exact ASR chain without running models | [`AudioReader.plan_asr_backends`](../../modules/generated/scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader.plan_asr_backends "scikitplot.corpus.AudioReader.plan_asr_backends") / `BackendPlan` |
| Control backend order/fallback/offline behavior | `BackendPolicy` |
| Reuse one typed policy family across runtime/reader/builder seams | `CorpusPolicyBundle` ([Fluent configuration and policies](fluent_and_policies.html#corpus-fluent-policies)) |
| Control transfer TLS/SSRF/size/retry budgets | `DownloadPolicy` ([Downloads and network boundaries](downloads_and_network.html#corpus-downloads-network)) |
| Add a private/local ASR implementation | `ASRBackend` |
| Download HTTP/GDrive/GitHub/YouTube inputs | [`AnyDownloader`](../../modules/generated/scikitplot.corpus.AnyDownloader.html#scikitplot.corpus.AnyDownloader "scikitplot.corpus.AnyDownloader") ([Downloads and network boundaries](downloads_and_network.html#corpus-downloads-network)) |
| Do fuzzy lexical ranking without requiring Corpus | `scikitplot.levenshtein` ([Retrieval and similarity](retrieval_and_similarity.html#corpus-retrieval-similarity)) |
| Search vectors/lexical/hybrid indexes | [`RetrievalIndex`](../../modules/generated/scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex "scikitplot.corpus.RetrievalIndex") |
| Export/adapt documents | the export and adapter APIs ([Formats, structured evidence, and export](formats_and_export.html#corpus-formats-export)) |

## How this guide is organised[#](#how-this-guide-is-organised "Link to this heading")

Read the first two pages first. After that, choose the page for the task in
front of you.

**getting-started**

* [Getting started](getting_started.html)
  * [Installation philosophy](getting_started.html#installation-philosophy)
  * [Immutable configuration](getting_started.html#immutable-configuration)
  * [Capability preflight](getting_started.html#capability-preflight)
**architect**

* [Architecture](architecture.html)
  * [The central seams](architecture.html#the-central-seams)
  * [Why there is no mega fallback manager](architecture.html#why-there-is-no-mega-fallback-manager)
  * [Policy scopes stay orthogonal](architecture.html#policy-scopes-stay-orthogonal)
**reader**

* [Readers, backends, and readiness](readers_and_backends.html)
  * [Reader dispatch](readers_and_backends.html#reader-dispatch)
  * [Backend outcome is not a boolean](readers_and_backends.html#backend-outcome-is-not-a-boolean)
  * [Readiness vocabulary](readers_and_backends.html#readiness-vocabulary)
  * [Role-based discovery](readers_and_backends.html#role-based-discovery)
  * [Plan the exact reader backend chain before running](readers_and_backends.html#plan-the-exact-reader-backend-chain-before-running)
  * [Custom readiness registries](readers_and_backends.html#custom-readiness-registries)
  * [Backend policies](readers_and_backends.html#backend-policies)
  * [Custom ASR](readers_and_backends.html#custom-asr)
  * [OCR is explicit, not an automatic cascade](readers_and_backends.html#ocr-is-explicit-not-an-automatic-cascade)
**fluent**

* [Fluent configuration and policies](fluent_and_policies.html)
  * [Generate from a mapping](fluent_and_policies.html#generate-from-a-mapping)
  * [Generate bounded variants](fluent_and_policies.html#generate-bounded-variants)
  * [Explain and compare](fluent_and_policies.html#explain-and-compare)
  * [Policy layers are separate](fluent_and_policies.html#policy-layers-are-separate)
  * [Compose without collapsing policy dimensions](fluent_and_policies.html#compose-without-collapsing-policy-dimensions)
**customize**

* [Customization](customization.html)
  * [Reader-level extractor](customization.html#reader-level-extractor)
  * [Builder factories](customization.html#builder-factories)
  * [Custom downloader](customization.html#custom-downloader)
  * [Custom retrieval](customization.html#custom-retrieval)
  * [Custom registries](customization.html#custom-registries)
**download**

* [Downloads and network boundaries](downloads_and_network.html)
  * [DownloadPolicy: one transport contract](downloads_and_network.html#downloadpolicy-one-transport-contract)
  * [Plan dispatch without touching the network](downloads_and_network.html#plan-dispatch-without-touching-the-network)
  * [Builder integration](downloads_and_network.html#builder-integration)
  * [Security defaults](downloads_and_network.html#security-defaults)
  * [Runtime plans](downloads_and_network.html#runtime-plans)
  * [Policy/legacy configuration ambiguity](downloads_and_network.html#policy-legacy-configuration-ambiguity)
**retrieval**

* [Retrieval and similarity](retrieval_and_similarity.html)
  * [Levenshtein facade](retrieval_and_similarity.html#levenshtein-facade)
  * [Choosing a metric](retrieval_and_similarity.html#choosing-a-metric)
**format**

* [Formats, structured evidence, and export](formats_and_export.html)
  * [Archives](formats_and_export.html#archives)
  * [Export and adapters](formats_and_export.html#export-and-adapters)
**security**

* [Security and limits](security_and_limits.html)
  * [Fail-soft is not silent success](security_and_limits.html#fail-soft-is-not-silent-success)
  * [Network boundaries](security_and_limits.html#network-boundaries)
  * [Model-backed readiness](security_and_limits.html#model-backed-readiness)
  * [User code](security_and_limits.html#user-code)
  * [Resource exhaustion](security_and_limits.html#resource-exhaustion)
  * [Levenshtein limits](security_and_limits.html#levenshtein-limits)
**troubleshoot**

* [Troubleshooting](troubleshooting.html)
  * [Package installed, backend still unavailable](troubleshooting.html#package-installed-backend-still-unavailable)
  * [Whisper fails but the gallery should continue](troubleshooting.html#whisper-fails-but-the-gallery-should-continue)
  * [Need a fully local ASR](troubleshooting.html#need-a-fully-local-asr)
  * [A builder factory seems ignored](troubleshooting.html#a-builder-factory-seems-ignored)
  * [A URL works in a browser but Corpus refuses it](troubleshooting.html#a-url-works-in-a-browser-but-corpus-refuses-it)
  * [A Levenshtein backend is missing](troubleshooting.html#a-levenshtein-backend-is-missing)
  * [Offline policy says unavailable, not empty](troubleshooting.html#offline-policy-says-unavailable-not-empty)

The executable gallery, [Corpus](../../auto_examples/corpus/index.html#corpus-examples), follows the same architecture
with deterministic local examples first and optional live/model paths clearly
marked.

> **See also**
> * [Corpus](../../auto_examples/corpus/index.html#corpus-examples)
* [CleanPrompt User Guide](../cleanprompt/index.html#cleanprompt-index)
* [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus")