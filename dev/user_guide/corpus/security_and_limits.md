# Security and limits[#](#security-and-limits "Link to this heading")

## Fail-soft is not silent success[#](#fail-soft-is-not-silent-success "Link to this heading")

An optional backend may be allowed to fail without aborting a heterogeneous
build, but the failure remains visible through logging and structured
`backend_reports`. Use strict policy when a missing result must invalidate the
run.

## Network boundaries[#](#network-boundaries "Link to this heading")

URL downloading is subject to scheme/redirect/SSRF/size controls. Network source
permission in [`RuntimePolicy`](../../modules/generated/scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus.RuntimePolicy") is explicit. Model/resource downloads are a
separate capability decision.

## Model-backed readiness[#](#model-backed-readiness "Link to this heading")

`installed=True` is not enough for systems such as Whisper/EasyOCR. A model
may be absent and first use may download it. The readiness registry reports
`ready=None` when it cannot prove local asset presence without side effects.

## User code[#](#user-code "Link to this heading")

Custom extractors, factories, ASR backends, downloader handlers and retrieval
scorers are executable Python supplied by the caller. Treat configuration that
contains callables as code, not as untrusted data to deserialize automatically.

## Resource exhaustion[#](#resource-exhaustion "Link to this heading")

Keep existing archive/file/download limits enabled. A custom backend also needs
its own model/input/time/memory bounds; the generic backend runner cannot infer
safe limits for arbitrary third-party engines.

## Levenshtein limits[#](#levenshtein-limits "Link to this heading")

The pure-Python Levenshtein fallback uses memory-bounded Wagner-Fischer dynamic
programming but still has quadratic time in the input lengths. Use bounded input
sizes for untrusted very-long strings. The optional native backends improve
speed; they do not turn edit distance into constant-cost validation.