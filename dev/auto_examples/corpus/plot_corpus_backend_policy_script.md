> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-backend-policy-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Customize Corpus backends and readiness policies[#](#customize-corpus-backends-and-readiness-policies "Link to this heading")

Optional packages are not a single yes/no capability. A package may be
installed while its model or system asset is missing, a policy may select a
backend that has not run yet, and a successful fallback may be deliberately
reported as degraded.

This example shows the public pieces that keep those states separate:

* [`component_capabilities`](../../modules/generated/scikitplot.corpus.component_capabilities.html#scikitplot.corpus.component_capabilities "scikitplot.corpus.component_capabilities") for side-effect-free readiness inspection,
* [`AudioReader.plan_asr_backends`](../../modules/generated/scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader.plan_asr_backends "scikitplot.corpus.AudioReader.plan_asr_backends") for exact preflight selection,
* [`BackendPolicy`](../../modules/generated/scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus.BackendPolicy") for ordered/offline/strict selection policy,
* [`ASRBackend`](../../modules/generated/scikitplot.corpus.ASRBackend.html#scikitplot.corpus.ASRBackend "scikitplot.corpus.ASRBackend") for a user-provided speech recognizer,
* [`DocumentReader.backend_reports`](../../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.backend_reports "scikitplot.corpus.DocumentReader.backend_reports") for structured runtime evidence.

The executable path reads the two recordings bundled under `data/` with a
small local backend that stands in for a speech model. It performs no
network access, model download, or audio decoding; an empty file is shown
being refused.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

from __future__ import annotations

import tempfile
from pathlib import Path

from scikitplot.corpus import (
    ASRBackend,
    ASRRequest,
    AudioReader,
    BackendPolicy,
    component_capabilities,
)

```

## Inspect capability readiness without loading models[#](#inspect-capability-readiness-without-loading-models "Link to this heading")

`installed` and `ready` deliberately mean different things. Whisper
packages may be discoverable while model readiness is unknown until first
use; the readiness probe must not download a model merely to make a green
status claim.

```
snapshot = component_capabilities(
    ("asr:faster-whisper", "asr:openai-whisper")
)
for name, report in snapshot.items():
    print(
        name,
        {
            key: report[key]
            for key in ("installed", "assets_ready", "ready", "selected", "active")
        },
    )

```
```
asr:faster-whisper {'installed': True, 'assets_ready': None, 'ready': None, 'selected': False, 'active': False}
asr:openai-whisper {'installed': True, 'assets_ready': None, 'ready': None, 'selected': False, 'active': False}

```

## Locate the bundled recordings[#](#locate-the-bundled-recordings "Link to this heading")

The two MP3 files ship with the gallery under `data/`. A missing file is
reported as `SKIP`; it never turns into a network request.

```
def _resolve_example_dir() -> Path:
    """Resolve the example directory across scripts and Sphinx-Gallery."""
    file = globals().get("__file__")
    return Path(file).resolve().parent if file else Path.cwd().resolve()


_DATA_DIR = _resolve_example_dir() / "data"
RECORDINGS = [
    _DATA_DIR / "can-people-afford-to-pay-for-health-care.mp3",
    _DATA_DIR / "tale_of_two_cities_01_dickens_64kb.mp3",
]
for path in RECORDINGS:
    state = f"{path.stat().st_size:,} bytes" if path.is_file() else "SKIP: missing"
    print(f"{path.name}: {state}")
available = [path for path in RECORDINGS if path.is_file() and path.stat().st_size]

```
```
can-people-afford-to-pay-for-health-care.mp3: 401,709 bytes
tale_of_two_cities_01_dickens_64kb.mp3: 200,966 bytes

```

## Provide a user-side ASR backend[#](#provide-a-user-side-asr-backend "Link to this heading")

Custom backends receive one immutable [`ASRRequest`](../../modules/generated/scikitplot.corpus.ASRRequest.html#scikitplot.corpus.ASRRequest "scikitplot.corpus.ASRRequest"), keeping the
extension signature stable as future request metadata is added. This one
stands in for a real recognizer: it reads only the file’s size, so the
example runs without a model, yet the reader still checks a real recording.

```
def local_demo_asr(request: ASRRequest):
    """Return one deterministic segment describing the media file."""
    size = request.media_path.stat().st_size
    return [
        {
            "text": f"placeholder transcript of {request.media_path.stem} ({size:,} bytes)",
            "timecode_start": 0.0,
            "timecode_end": 1.25,
            "provider": "gallery-demo",
        }
    ]


custom_backend = ASRBackend(
    name="gallery-local-asr",
    transcribe=local_demo_asr,
    requires_network=False,
    may_download=False,
    offline_capable=True,
)

```

## Make backend order an explicit policy[#](#make-backend-order-an-explicit-policy "Link to this heading")

`include_unlisted=False` means the two built-in Whisper implementations
are not attempted. This is useful for deterministic tests and for projects
that own their inference runtime. Preflight uses the same candidate
factory as execution but calls no backend; the runtime report is the
evidence that the selected backend actually ran.

```
policy = BackendPolicy.resilient().with_order(
    "gallery-local-asr",
    include_unlisted=False,
)

for audio_path in available:
    reader = AudioReader(
        audio_path,
        transcribe=True,
        backend_policy=policy,
        asr_backends=(custom_backend,),
    )
    plan = reader.plan_asr_backends()
    assert plan.selected == ("gallery-local-asr",)
    chunks = list(reader.get_raw_chunks())
    report = reader.backend_reports[-1]
    print(audio_path.name)
    print("  preflight:", plan.selected)
    print("  chunk text:", chunks[0]["text"])
    print("  provider:", chunks[0]["asr_metadata"]["provider"])
    print("  report:", {k: report[k] for k in ("backend", "status") if k in report})
    assert chunks[0]["asr_metadata"]["provider"] == "gallery-demo"
    assert report["status"] == "success" and report["backend"] == "gallery-local-asr"

```
```
can-people-afford-to-pay-for-health-care.mp3
  preflight: ('gallery-local-asr',)
  chunk text: placeholder transcript of can-people-afford-to-pay-for-health-care (401,709 bytes)
  provider: gallery-demo
  report: {'backend': 'gallery-local-asr', 'status': 'success'}
tale_of_two_cities_01_dickens_64kb.mp3
  preflight: ('gallery-local-asr',)
  chunk text: placeholder transcript of tale_of_two_cities_01_dickens_64kb (200,966 bytes)
  provider: gallery-demo
  report: {'backend': 'gallery-local-asr', 'status': 'success'}

```

## Edge case: an empty file is refused, not transcribed[#](#edge-case-an-empty-file-is-refused-not-transcribed "Link to this heading")

A 0-byte `.mp3` holds no audio. The reader refuses it before any backend
runs, with an error naming the file, so a truncated download cannot pass
as an empty transcript.

```
with tempfile.TemporaryDirectory() as tmpdir:
    empty = Path(tmpdir) / "empty.mp3"
    empty.write_bytes(b"")
    try:
        list(
            AudioReader(
                empty, transcribe=True, backend_policy=policy, asr_backends=(custom_backend,)
            ).get_raw_chunks()
        )
    except ValueError as exc:
        print("refused:", exc)

```
```
refused: AudioReader: empty.mp3 is empty (0 bytes) and holds no audio. Replace it with the full recording or remove it from the input.

```

## Policy presets express orchestration, not reader semantics[#](#policy-presets-express-orchestration-not-reader-semantics "Link to this heading")

`offline` forbids network and download side effects rather than equating
“may download” with “must download now”. A backend may participate when it
can enforce local-only execution; model-backed adapters can therefore use an
already-cached model without weakening the policy. Readers still decide what
constitutes a successful result and which runtime errors are safe to fall
back from.

```
for item in (
    BackendPolicy.resilient(),
    BackendPolicy.offline(),
    BackendPolicy.first_available(),
    BackendPolicy.strict(),
):
    print(item.name, item)

```
```
resilient BackendPolicy(name='resilient', order=(), include_unlisted=True, allow_fallback=True, require_ready=False, allow_network=True, allow_download=True, on_exhausted=<ErrorPolicy.COLLECT: 'collect'>)
offline BackendPolicy(name='offline', order=(), include_unlisted=True, allow_fallback=True, require_ready=False, allow_network=False, allow_download=False, on_exhausted=<ErrorPolicy.COLLECT: 'collect'>)
first-available BackendPolicy(name='first-available', order=(), include_unlisted=True, allow_fallback=False, require_ready=False, allow_network=True, allow_download=True, on_exhausted=<ErrorPolicy.COLLECT: 'collect'>)
strict BackendPolicy(name='strict', order=(), include_unlisted=True, allow_fallback=True, require_ready=False, allow_network=True, allow_download=True, on_exhausted=<ErrorPolicy.RAISE: 'raise'>)

```

****Total running time of the script:**** (0 minutes 0.007 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_backend_policy_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_backend_policy_script.ipynb)

[`Download Jupyter notebook: plot_corpus_backend_policy_script.ipynb`](../../_downloads/cf7a3cffe6b4e38b7f1883933949aea5/plot_corpus_backend_policy_script.ipynb)

[`Download Python source code: plot_corpus_backend_policy_script.py`](../../_downloads/07f6d5f8b2a33c0662e78e184ade1554/plot_corpus_backend_policy_script.py)

[`Download zipped: plot_corpus_backend_policy_script.zip`](../../_downloads/d378db2262838ec6881eb408ee1062a6/plot_corpus_backend_policy_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[Process an MP3 with Corpus](plot_corpus_a_tale_of_two_cities_mp3_script.html)

Process an MP3 with Corpus![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[Process a Mixed-Media ZIP Archive with Corpus](plot_corpus_who_zip_script.html)

Process a Mixed-Media ZIP Archive with Corpus![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)