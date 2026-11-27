> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-03-cache-and-restart-reuse-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cache and restart reuse[#](#cache-and-restart-reuse "Link to this heading")

Compiled artifacts are cached on disk. After a Python kernel restart,
you can import the cached module again without recompiling (as long as
the runtime fingerprint matches).

This example demonstrates:

* compiling a snippet
* listing cached entries
* importing the same module from the cache by key
* (optional) showing cache stats

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

from typing import Any

from scikitplot import cython

```
```
def _print_entry_summary(entries: list[Any], limit: int = 5) -> None:
    """Print a stable cache listing summary."""
    print("Cache entries:", len(entries))
    if not entries:
        return

    # Print last few entries by whatever order list_cached returns.
    tail = entries[-limit:]
    print(f"Last {len(tail)} entries:")
    for e in tail:
        # CacheEntry is expected to have these (defaults exist).
        print("  - key:", getattr(e, "key", None))
        print("    module_name:", getattr(e, "module_name", None))
        print("    artifact_path:", getattr(e, "artifact_path", None))
        print("    created_utc:", getattr(e, "created_utc", None))

```

## Generate `python` Module from `python`[#](#generate-python-module-from-python "Link to this heading")

```
report = cython.check_build_prereqs(numpy=False)

if not report.get('cython', {}).get('ok'):
    print("Skipping compilation because build prerequisites are missing.")
    problems = report.get("problems", [])
    if problems:
        print("Problems:", problems)
else:
    # 1) Compile a snippet and capture its deterministic cache key.
    r = cython.compile_and_load_result("def f(int n):\n    return n*n\n", profile="fast-debug", verbose=0)
    key = r.key

    print("\nBuildResult:")
    print("  module_name:", r.module_name)
    print("  key        :", r.key)
    print("  artifact   :", r.artifact_path)
    print("  used_cache :", r.used_cache)

    # 2) List cache entries (safe if empty).
    entries = cython.list_cached()
    _print_entry_summary(entries)

    # Optional: cache stats snapshot (if available).
    if hasattr(cython, "cache_stats"):
        print("\nCache stats snapshot:")
        print(cython.cache_stats())

    # 3) Import the same module by key (restart-safe mechanism).
    # Use import_cached_result if available so we can inspect metadata.
    if hasattr(cython, "import_cached_result"):
        r2 = cython.import_cached_result(key)
        m2 = r2.module
        print("\nImported from cache (result API):")
        print("  module_name:", r2.module_name)
        print("  used_cache :", r2.used_cache)
        print("  artifact   :", r2.artifact_path)
    else:
        m2 = cython.import_cached(key)
        print("\nImported from cache (module API):", m2.__name__)

    # 4) Verify correctness strictly.
    out = m2.f(11)
    print("import_cached(key).f(11) =", out)
    print("Expected:", 121)
    print("Correct:", out == 121)

```
```
BuildResult:
  module_name: scikitplot_cython_ba0339daaf057b6c
  key        : ba0339daaf057b6c074bdb52ac84deff5eada091970e6afffdf49792b8a683f5
  artifact   : /home/circleci/.cache/scikitplot/cython/ba0339daaf057b6c074bdb52ac84deff5eada091970e6afffdf49792b8a683f5/scikitplot_cython_ba0339daaf057b6c.cpython-312-x86_64-linux-gnu.so
  used_cache : True
Cache entries: 6
Last 5 entries:
  - key: 8af444bb94dcb257a31ab93d26b96a180d90e49feccf77506ac374694b702c50
    module_name: scikitplot_cython_8af444bb94dcb257
    artifact_path: /home/circleci/.cache/scikitplot/cython/8af444bb94dcb257a31ab93d26b96a180d90e49feccf77506ac374694b702c50/scikitplot_cython_8af444bb94dcb257.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-11-26T15:11:46Z
  - key: abafd228441a62588be25ae06b55fb9fb56871cabc4934821191ef6e83ce3ef0
    module_name: scikitplot_cython_abafd228441a6258
    artifact_path: /home/circleci/.cache/scikitplot/cython/abafd228441a62588be25ae06b55fb9fb56871cabc4934821191ef6e83ce3ef0/scikitplot_cython_abafd228441a6258.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-11-26T15:11:40Z
  - key: ba0339daaf057b6c074bdb52ac84deff5eada091970e6afffdf49792b8a683f5
    module_name: scikitplot_cython_ba0339daaf057b6c
    artifact_path: /home/circleci/.cache/scikitplot/cython/ba0339daaf057b6c074bdb52ac84deff5eada091970e6afffdf49792b8a683f5/scikitplot_cython_ba0339daaf057b6c.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-11-26T15:11:38Z
  - key: d474419779b0e0b600cbec657ccd7a912a665570b08501749414df180135b250
    module_name: scikitplot_cython_d474419779b0e0b6
    artifact_path: /home/circleci/.cache/scikitplot/cython/d474419779b0e0b600cbec657ccd7a912a665570b08501749414df180135b250/scikitplot_cython_d474419779b0e0b6.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-11-26T15:11:39Z
  - key: e91d178a574d1377eb3d75a5972d351785666e4ee1913b367be6e4cac718e9f8
    module_name: scikitplot_cython_e91d178a574d1377
    artifact_path: /home/circleci/.cache/scikitplot/cython/e91d178a574d1377eb3d75a5972d351785666e4ee1913b367be6e4cac718e9f8/scikitplot_cython_e91d178a574d1377.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-11-26T15:11:45Z

Cache stats snapshot:
CacheStats(cache_root=PosixPath('/home/circleci/.cache/scikitplot/cython'), n_modules=6, n_packages=0, total_bytes=4474684, pinned_aliases=1, pinned_keys=1, newest_mtime_utc='2026-11-26T15:11:47Z', oldest_mtime_utc='2026-11-26T15:11:39Z')

Imported from cache (result API):
  module_name: scikitplot_cython_ba0339daaf057b6c
  used_cache : True
  artifact   : /home/circleci/.cache/scikitplot/cython/ba0339daaf057b6c074bdb52ac84deff5eada091970e6afffdf49792b8a683f5/scikitplot_cython_ba0339daaf057b6c.cpython-312-x86_64-linux-gnu.so
import_cached(key).f(11) = 121
Expected: 121
Correct: True

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.018 seconds)

[![Launch binder](../../_images/binder_badge_logo6.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_03_cache_and_restart_reuse.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo6.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_03_cache_and_restart_reuse.ipynb)

[`Download Jupyter notebook: plot_03_cache_and_restart_reuse.ipynb`](../../_downloads/e47b1206d8df28277bda49485b5604ce/plot_03_cache_and_restart_reuse.ipynb)

[`Download Python source code: plot_03_cache_and_restart_reuse.py`](../../_downloads/07bbf5f18c42b0de30b29abdc7d30444/plot_03_cache_and_restart_reuse.py)

[`Download zipped: plot_03_cache_and_restart_reuse.zip`](../../_downloads/a02ad281779d2480ac415c9590362734/plot_03_cache_and_restart_reuse.zip)

Related examples

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](plot_01_browse_and_compile_templates.html)

Browse and compile templates![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)