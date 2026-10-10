# Architecture[#](#architecture "Link to this heading")

Corpus separates mechanism from policy.

```
input
  |
  +-- local file -----------------------------+
  |                                           |
  +-- URL -> downloader -> DownloadResult ----+
                                              v
                                       DocumentReader
                                              |
                          +-------------------+--------------------+
                          |                                        |
                   built-in backend                         custom backend
                          |                                        |
                          +---- BackendPolicy / readiness ---------+
                                              |
                                        raw chunks
                                              |
                               filter / normalize / chunk
                                              |
                               enrich / embed / store / index

```

## The central seams[#](#the-central-seams "Link to this heading")

`DocumentReader`
:   Owns format dispatch, common document construction, custom extractor
    execution and per-run backend reports.

`CorpusBuilder._make_reader`
:   One construction seam for local files, downloads and archive members.
    [`FactoryCorpusBuilder`](../../modules/generated/scikitplot.corpus.FactoryCorpusBuilder.html#scikitplot.corpus.FactoryCorpusBuilder "scikitplot.corpus.FactoryCorpusBuilder") can replace it through `reader_factory`.

`CorpusBuilder._make_downloader`
:   One construction seam for downloadable URLs. It delegates specialist
    routing to [`AnyDownloader`](../../modules/generated/scikitplot.corpus.AnyDownloader.html#scikitplot.corpus.AnyDownloader "scikitplot.corpus.AnyDownloader"), consumes `DownloadPolicy`, and can
    be replaced through `downloader_factory`.

`plan_backend_chain` / `run_backend_chain`
:   Share one selection algorithm. `BackendPlan` exposes side-effect-free
    preflight ordering/readiness; runtime adds attempt/failure/active evidence.
    Readers still decide what a valid result means and what failure should
    ultimately do.

`CapabilityRegistry`
:   Owns lightweight readiness facts. It does not load models or contact the
    network.

`CorpusPlan` / `FluentCorpus`
:   Own immutable configuration identity, conflict detection and deterministic
    plan generation.

## Why there is no mega fallback manager[#](#why-there-is-no-mega-fallback-manager "Link to this heading")

Different operations have different semantics. A missing optional XML parser
can fall back to the standard library, but malformed XML should stay an error.
A Whisper backend can fail and another ASR implementation can be tried. An OCR
backend may download a model, so switching automatically can change network and
resource behavior. PDF extraction may have provisional/empty-page semantics
that are not ordinary failure.

The shared layer therefore centralizes **how** attempts are observed, while each
reader owns **when** fallback is correct.

## Policy scopes stay orthogonal[#](#policy-scopes-stay-orthogonal "Link to this heading")

Corpus deliberately does not create one mega `strict` switch:

* [`RuntimePolicy`](../../modules/generated/scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus.RuntimePolicy") decides whether URL sources may execute;
* `DownloadPolicy` owns transfer security/resource budgets;
* `BackendPolicy` owns optional implementation selection/fallback;
* [`ErrorPolicy`](../../modules/generated/scikitplot.corpus.ErrorPolicy.html#scikitplot.corpus.ErrorPolicy "scikitplot.corpus.ErrorPolicy") owns per-document pipeline failure behavior.

Each layer has presets/config validation, but changing one does not silently
change the others. This is easier to reason about than a convenience mode whose
meaning varies by reader or transport.