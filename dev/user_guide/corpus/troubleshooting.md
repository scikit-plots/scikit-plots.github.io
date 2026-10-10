# Troubleshooting[#](#troubleshooting "Link to this heading")

## Package installed, backend still unavailable[#](#package-installed-backend-still-unavailable "Link to this heading")

Inspect `component_capabilities`. For model/system-backed components, look
at `assets_ready` and `reason_code` rather than only `installed`.

## Whisper fails but the gallery should continue[#](#whisper-fails-but-the-gallery-should-continue "Link to this heading")

The default media-reader policy is fail-soft and observable. A runtime failure
in `faster-whisper` is logged and the OpenAI Whisper backend is attempted. If
all backends fail, no ASR chunks are produced and `backend_reports` records the
failure. Set `strict=True` or `backend_policy="strict"` when exhaustion
should raise.

## Need a fully local ASR[#](#need-a-fully-local-asr "Link to this heading")

Provide `ASRBackend` and select it first with an explicit
`BackendPolicy`. Use `include_unlisted=False` if built-in Whisper
backends must not be attempted.

## A builder factory seems ignored[#](#a-builder-factory-seems-ignored "Link to this heading")

Pass [`BuilderFactories`](../../modules/generated/scikitplot.corpus.BuilderFactories.html#scikitplot.corpus.BuilderFactories "scikitplot.corpus.BuilderFactories") directly to [`CorpusBuilder`](../../modules/generated/scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") for new code.
[`FactoryCorpusBuilder`](../../modules/generated/scikitplot.corpus.FactoryCorpusBuilder.html#scikitplot.corpus.FactoryCorpusBuilder "scikitplot.corpus.FactoryCorpusBuilder") is a compatibility facade over the same native
seams. Reader, filter and downloader factories are wired through central
construction paths; if behavior bypasses one of these seams, treat that as a
regression rather than adding another special-case factory.

## A URL works in a browser but Corpus refuses it[#](#a-url-works-in-a-browser-but-corpus-refuses-it "Link to this heading")

Do not disable SSRF/fail-closed resolution globally just to make one environment
pass. Check DNS/proxy/container network configuration first. Private-network
access should be an explicit, narrow policy decision.

## A Levenshtein backend is missing[#](#a-levenshtein-backend-is-missing "Link to this heading")

`backend="auto"` remains usable because it ends in the dependency-free Python
implementation. An explicitly requested unavailable backend warns and falls back
unless `strict=True`. Use `backend_info()` to inspect the selected backend.

## Offline policy says unavailable, not empty[#](#offline-policy-says-unavailable-not-empty "Link to this heading")

`BackendStatus.UNAVAILABLE` means policy/readiness left no runnable backend;
it is intentionally different from `EMPTY`, where a backend really ran and
produced a valid empty result. For faster-whisper, the offline policy forces a
local-files-only load so a cached model may still work even when preflight
readiness is `UNKNOWN`.