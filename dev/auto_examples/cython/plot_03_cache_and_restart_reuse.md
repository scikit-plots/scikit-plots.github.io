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
  module_name: scikitplot_cython_7024267ad2d3c2af
  key        : 7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000
  artifact   : /home/circleci/.cache/scikitplot/cython/7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000/scikitplot_cython_7024267ad2d3c2af.cpython-312-x86_64-linux-gnu.so
  used_cache : True
Cache entries: 6
Last 5 entries:
  - key: 27f80730b47a731ea98d0b45195a1399dd2e9f1432926e05614df4f89558db46
    module_name: scikitplot_cython_27f80730b47a731e
    artifact_path: /home/circleci/.cache/scikitplot/cython/27f80730b47a731ea98d0b45195a1399dd2e9f1432926e05614df4f89558db46/scikitplot_cython_27f80730b47a731e.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-08-07T22:11:10Z
  - key: 7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000
    module_name: scikitplot_cython_7024267ad2d3c2af
    artifact_path: /home/circleci/.cache/scikitplot/cython/7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000/scikitplot_cython_7024267ad2d3c2af.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-08-07T22:11:06Z
  - key: b7dab274e3fd001ea22a772ac180186ac42d98a930de71922e64717c7c18ff9f
    module_name: scikitplot_cython_b7dab274e3fd001e
    artifact_path: /home/circleci/.cache/scikitplot/cython/b7dab274e3fd001ea22a772ac180186ac42d98a930de71922e64717c7c18ff9f/scikitplot_cython_b7dab274e3fd001e.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-08-07T22:11:13Z
  - key: c9fa120136e2f5589f656a08da08fb3845159ab04926b9c67f5df454a2cfffd6
    module_name: scikitplot_cython_c9fa120136e2f558
    artifact_path: /home/circleci/.cache/scikitplot/cython/c9fa120136e2f5589f656a08da08fb3845159ab04926b9c67f5df454a2cfffd6/scikitplot_cython_c9fa120136e2f558.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-08-07T22:11:13Z
  - key: cb68b77d0401864167a3b412a9fcbefd52217bafc03c42b2f69e03022226186e
    module_name: scikitplot_cython_cb68b77d04018641
    artifact_path: /home/circleci/.cache/scikitplot/cython/cb68b77d0401864167a3b412a9fcbefd52217bafc03c42b2f69e03022226186e/scikitplot_cython_cb68b77d04018641.cpython-312-x86_64-linux-gnu.so
    created_utc: 2026-08-07T22:11:06Z

Cache stats snapshot:
CacheStats(cache_root=PosixPath('/home/circleci/.cache/scikitplot/cython'), n_modules=6, n_packages=0, total_bytes=4493148, pinned_aliases=1, pinned_keys=1, newest_mtime_utc='2026-08-07T22:11:15Z', oldest_mtime_utc='2026-08-07T22:11:06Z')

Imported from cache (result API):
  module_name: scikitplot_cython_7024267ad2d3c2af
  used_cache : True
  artifact   : /home/circleci/.cache/scikitplot/cython/7024267ad2d3c2afa1443f720ed827a3fda6a73089b625ac96fbae1e4394d000/scikitplot_cython_7024267ad2d3c2af.cpython-312-x86_64-linux-gnu.so
import_cached(key).f(11) = 121
Expected: 121
Correct: True

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.025 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_03_cache_and_restart_reuse.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_03_cache_and_restart_reuse.ipynb)

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