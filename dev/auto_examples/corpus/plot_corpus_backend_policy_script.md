> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-backend-policy-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Customize Corpus backends and readiness policies[#](#customize-corpus-backends-and-readiness-policies "Link to this heading")

Optional packages are not a single yes/no capability. A package may be
installed while its model or system asset is missing, a policy may select a
backend that has not run yet, and a successful fallback may be deliberately
reported as degraded.

This example shows the public pieces that keep those states separate:

* `component_capabilities` for side-effect-free readiness inspection,
* [`AudioReader.plan_asr_backends`](../../modules/generated/scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader.plan_asr_backends "scikitplot.corpus.AudioReader.plan_asr_backends") for exact preflight selection,
* `BackendPolicy` for ordered/offline/strict selection policy,
* `ASRBackend` for a user-provided speech recognizer,
* [`DocumentReader.backend_reports`](../../modules/generated/scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.backend_reports "scikitplot.corpus.DocumentReader.backend_reports") for structured runtime evidence.

The executable path uses a tiny synthetic local backend. It performs no
network access, model download, or audio decoding.

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

## Provide a user-side ASR backend[#](#provide-a-user-side-asr-backend "Link to this heading")

Custom backends receive one immutable `ASRRequest`, keeping the
extension signature stable as future request metadata is added.

```
def local_demo_asr(request: ASRRequest):
    """Return one deterministic segment without touching the media bytes."""
    return [
        {
            "text": f"synthetic transcript for {request.media_path.stem}",
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
that own their inference runtime.

```
policy = BackendPolicy.resilient().with_order(
    "gallery-local-asr",
    include_unlisted=False,
)

with tempfile.TemporaryDirectory() as tmpdir:
    audio_path = Path(tmpdir) / "demo.mp3"
    audio_path.write_bytes(b"")

    reader = AudioReader(
        audio_path,
        transcribe=True,
        backend_policy=policy,
        asr_backends=(custom_backend,),
    )
    # Preflight uses the same candidate factory as execution but does not call
    # ``local_demo_asr`` or any model backend.
    plan = reader.plan_asr_backends()
    print("preflight:", plan.to_dict())
    assert plan.selected == ("gallery-local-asr",)

    chunks = list(reader.get_raw_chunks())

print("chunk text:", chunks[0]["text"])
print("provider:", chunks[0]["asr_metadata"]["provider"])
print("backend report:", reader.backend_reports[-1])
print("policy skips:", reader.backend_reports[-1].get("skip_details", []))

# The runtime report is the evidence that a selected backend actually ran.
assert chunks[0]["asr_metadata"]["provider"] == "gallery-demo"
assert reader.backend_reports[-1]["status"] == "success"
assert reader.backend_reports[-1]["backend"] == "gallery-local-asr"

```
```
preflight: {'policy': 'resilient', 'declared': ['faster-whisper', 'openai-whisper', 'gallery-local-asr'], 'ordered': ['gallery-local-asr'], 'eligible': ['gallery-local-asr'], 'selected': ['gallery-local-asr'], 'skipped': [], 'selected_capabilities': [], 'skip_details': []}
chunk text: synthetic transcript for demo
provider: gallery-demo
backend report: {'status': 'success', 'backend': 'gallery-local-asr', 'attempted': ['gallery-local-asr'], 'missed': [], 'skipped': [], 'policy': 'resilient', 'selected_capabilities': [], 'active_capability': None, 'skip_details': [], 'errors': []}
policy skips: []

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

****Total running time of the script:**** (0 minutes 0.009 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_backend_policy_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_backend_policy_script.ipynb)

[`Download Jupyter notebook: plot_corpus_backend_policy_script.ipynb`](../../_downloads/cf7a3cffe6b4e38b7f1883933949aea5/plot_corpus_backend_policy_script.ipynb)

[`Download Python source code: plot_corpus_backend_policy_script.py`](../../_downloads/07f6d5f8b2a33c0662e78e184ade1554/plot_corpus_backend_policy_script.py)

[`Download zipped: plot_corpus_backend_policy_script.zip`](../../_downloads/d378db2262838ec6881eb408ee1062a6/plot_corpus_backend_policy_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[Process an MP3 with Corpus](plot_corpus_a_tale_of_two_cities_mp3_script.html)

Process an MP3 with Corpus![](../../_images/sphx_glr_plot_corpus_policy_bundle_script_thumb.png)

[Compose Corpus policies without hiding boundaries](plot_corpus_policy_bundle_script.html)

Compose Corpus policies without hiding boundaries![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[Process a Mixed-Media ZIP Archive with Corpus](plot_corpus_who_zip_script.html)

Process a Mixed-Media ZIP Archive with Corpus![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)