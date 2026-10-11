> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-corpus-plot-corpus-policy-bundle-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Compose Corpus policies without hiding boundaries[#](#compose-corpus-policies-without-hiding-boundaries "Link to this heading")

This example keeps the four policy dimensions separate while using
`CorpusPolicyBundle` as a reusable configuration
container. It performs no network request and loads no optional model.

```
from __future__ import annotations

from pprint import pprint

from scikitplot.corpus import CorpusPolicyBundle

```

Start from a safe local preset. The bundle is only composition: source
execution, optional backends, downloader transport, and per-document failure
behavior remain distinct policy objects.

```
policies = CorpusPolicyBundle.safe_local()
pprint(policies.explain())

assert policies.runtime.allow_network is False
assert policies.backend.allow_network is False
assert policies.backend.allow_download is False
assert policies.download.verify_ssl is True
assert policies.download.block_private_ips is True

```
```
{'backend': {'allow_download': False,
             'allow_fallback': True,
             'allow_network': False,
             'include_unlisted': True,
             'name': 'offline',
             'on_exhausted': 'collect',
             'order': [],
             'require_ready': False},
 'derived': {'backend_download_allowed': False,
             'backend_fallback_allowed': True,
             'backend_network_allowed': False,
             'backend_requires_ready': False,
             'pipeline_errors': 'collect',
             'private_ip_blocking': True,
             'tls_verification': True,
             'url_sources_allowed': False},
 'download': {'block_private_ips': True,
              'max_bytes': 104857600,
              'max_redirects': 5,
              'max_retries': 3,
              'name': 'secure',
              'retry_backoff': 1.0,
              'timeout': 30.0,
              'user_agent': 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; '
                            '+https://github.com/scikit-plots/scikit-plots)',
              'verify_ssl': True},
 'errors': 'collect',
 'name': 'safe-local',
 'runtime': {'allow_network': False}}

```

Nested mapping configuration is useful for TOML/YAML/JSON frontends. Unknown
keys and string booleans are rejected rather than silently treated as truthy.

```
team = CorpusPolicyBundle.from_config(
    {
        "preset": "safe-local",
        "name": "team-local",
        "backend": {
            "preset": "offline",
            "order": ["faster-whisper", "openai-whisper"],
            "include_unlisted": False,
        },
        "download": {"preset": "constrained", "max_retries": 0},
        "errors": "collect",
    }
)

round_trip = CorpusPolicyBundle.from_config(team.to_dict())
assert round_trip == team
pprint(round_trip.to_dict())

```
```
{'backend': {'allow_download': False,
             'allow_fallback': True,
             'allow_network': False,
             'include_unlisted': False,
             'name': 'offline',
             'on_exhausted': 'collect',
             'order': ['faster-whisper', 'openai-whisper'],
             'require_ready': False},
 'download': {'block_private_ips': True,
              'max_bytes': 26214400,
              'max_redirects': 3,
              'max_retries': 0,
              'name': 'constrained',
              'retry_backoff': 0.5,
              'timeout': 15.0,
              'user_agent': 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; '
                            '+https://github.com/scikit-plots/scikit-plots)',
              'verify_ssl': True},
 'errors': 'collect',
 'name': 'team-local',
 'runtime': {'allow_network': False}}

```

Helpers target only policy-owning seams. They do not push backend policy into
every reader, because PDF/OCR/text/ASR fallback semantics are intentionally
different.

```
reader_kwargs = team.reader_kwargs(model_size="tiny")
builder_config = team.builder_config(chunker="paragraph")

assert reader_kwargs["backend_policy"] == team.backend
assert builder_config.download_policy == team.download
assert builder_config.chunker == "paragraph"

```

One dimension can be tuned while the remaining contract stays immutable.

```
strict_team = team.with_overrides(name="team-strict", errors="raise")
assert strict_team.runtime == team.runtime
assert strict_team.backend == team.backend
assert strict_team.download == team.download
assert strict_team.errors.value == "raise"

print("Policy bundle example completed without network/model side effects.")

```
```
Policy bundle example completed without network/model side effects.

```

****Total running time of the script:**** (0 minutes 0.007 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/corpus/plot_corpus_policy_bundle_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/corpus/plot_corpus_policy_bundle_script.ipynb)

[`Download Jupyter notebook: plot_corpus_policy_bundle_script.ipynb`](../../_downloads/fcc12166d26689c234e97fb4cbea25b0/plot_corpus_policy_bundle_script.ipynb)

[`Download Python source code: plot_corpus_policy_bundle_script.py`](../../_downloads/b288fac3cdbe1d7d5741caee88b9adcc/plot_corpus_policy_bundle_script.py)

[`Download zipped: plot_corpus_policy_bundle_script.zip`](../../_downloads/a40c6d67f28db58e5e4b5c357b53d5a6/plot_corpus_policy_bundle_script.zip)

Related examples

![](../../_images/sphx_glr_plot_corpus_backend_policy_script_thumb.png)

[Customize Corpus backends and readiness policies](plot_corpus_backend_policy_script.html)

Customize Corpus backends and readiness policies![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[Process a Mixed-Media ZIP Archive with Corpus](plot_corpus_who_zip_script.html)

Process a Mixed-Media ZIP Archive with Corpus

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)