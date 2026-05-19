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
  module_name: scikitplot_cython_2b754df9a69f375f
  key        : 2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28
  artifact   : /home/circleci/.cache/scikitplot/cython/2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28/scikitplot_cython_2b754df9a69f375f.cpython-311-x86_64-linux-gnu.so
  used_cache : True
Cache entries: 5
Last 5 entries:
  - key: 2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28
    module_name: scikitplot_cython_2b754df9a69f375f
    artifact_path: /home/circleci/.cache/scikitplot/cython/2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28/scikitplot_cython_2b754df9a69f375f.cpython-311-x86_64-linux-gnu.so
    created_utc: 2026-05-19T13:40:10Z
  - key: 65cd2f6b6833663c932142bf28ebaa13163c2bcac3e7fc12d4ba44729be37925
    module_name: scikitplot_cython_65cd2f6b6833663c
    artifact_path: /home/circleci/.cache/scikitplot/cython/65cd2f6b6833663c932142bf28ebaa13163c2bcac3e7fc12d4ba44729be37925/scikitplot_cython_65cd2f6b6833663c.cpython-311-x86_64-linux-gnu.so
    created_utc: 2026-05-19T13:40:14Z
  - key: a4fd411caf85ee94d71c1ef3be8344595c1995edf98e6d01e616d6f5a9f9ec46
    module_name: scikitplot_cython_a4fd411caf85ee94
    artifact_path: /home/circleci/.cache/scikitplot/cython/a4fd411caf85ee94d71c1ef3be8344595c1995edf98e6d01e616d6f5a9f9ec46/scikitplot_cython_a4fd411caf85ee94.cpython-311-x86_64-linux-gnu.so
    created_utc: 2026-05-19T13:40:13Z
  - key: cdc86d4f26d1826c0dd1fb42d5e916dacc2f92a69a3df9e6e7f0008c9b10203a
    module_name: scikitplot_cython_cdc86d4f26d1826c
    artifact_path: /home/circleci/.cache/scikitplot/cython/cdc86d4f26d1826c0dd1fb42d5e916dacc2f92a69a3df9e6e7f0008c9b10203a/scikitplot_cython_cdc86d4f26d1826c.cpython-311-x86_64-linux-gnu.so
    created_utc: 2026-05-19T13:40:11Z
  - key: f83561673aae6a832b8dbc37e07968faadba2966f47e7ac3b4294d54534ad213
    module_name: scikitplot_cython_f83561673aae6a83
    artifact_path: /home/circleci/.cache/scikitplot/cython/f83561673aae6a832b8dbc37e07968faadba2966f47e7ac3b4294d54534ad213/scikitplot_cython_f83561673aae6a83.cpython-311-x86_64-linux-gnu.so
    created_utc: 2026-05-19T13:40:12Z

Cache stats snapshot:
CacheStats(cache_root=PosixPath('/home/circleci/.cache/scikitplot/cython'), n_modules=5, n_packages=0, total_bytes=3450253, pinned_aliases=1, pinned_keys=1, newest_mtime_utc='2026-05-19T13:40:15Z', oldest_mtime_utc='2026-05-19T13:40:11Z')

Imported from cache (result API):
  module_name: scikitplot_cython_2b754df9a69f375f
  used_cache : True
  artifact   : /home/circleci/.cache/scikitplot/cython/2b754df9a69f375fae238618628b7928bad7fc6cb84fe3e8765407e401aa9f28/scikitplot_cython_2b754df9a69f375f.cpython-311-x86_64-linux-gnu.so
import_cached(key).f(11) = 121
Expected: 121
Correct: True

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.009 seconds)

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