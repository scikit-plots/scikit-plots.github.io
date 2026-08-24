> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-05-package-examples-multimodule-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Multi-module package builds (5 package examples)[#](#multi-module-package-builds-5-package-examples "Link to this heading")

This example shows how to build a small compiled package consisting of
multiple Cython extension modules in one build directory.

Package examples live under `_templates/package_examples/` and include:

* vector\_ops
* stats\_basic
* text\_hash
* signal\_conv
* graph\_algo

## What this example demonstrates[#](#what-this-example-demonstrates "Link to this heading")

1. Listing bundled package examples.
2. Checking build prerequisites safely (so docs builds don’t fail).
3. Building one example package (profile=”fast-debug”).
4. Showing deterministic metadata: cache key, artifacts, module names.
5. Importing a module by dotted name and calling a known function (when declared).
6. Pinning the package build by alias and re-importing by alias.
7. Re-importing from cache key (restart-safe).
8. Optional: printing cache stats.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import importlib
from typing import Any, Iterable

from scikitplot import cython

```
```
def _safe_call_known_function(module: Any, candidates: Iterable[str]) -> None:
    """
    Call a known function if present, otherwise print a small preview.

    This is intentionally strict: we only call names we expect, and only if
    present on the module. Otherwise we print public names for inspection.
    """
    for name in candidates:
        f = getattr(module, name, None)
        if callable(f):
            try:
                # Use a simple, deterministic call convention:
                # - prefer 1-arg integer calls where sensible
                out = f(10)
                print(f"  {module.__name__}.{name}(10) -> {out!r}")
            except TypeError:
                # Some functions may take no args or different args; avoid guessing.
                print(f"  {module.__name__}.{name} is callable but signature differs; not calling.")
            return

    # Fallback: show a preview of public names (no execution).
    public = sorted(n for n in getattr(module, "__dict__", {}).keys() if n and not n.startswith("_"))
    print(f"  No known callable exported; public names: {public[:15]}{' ...' if len(public) > 15 else ''}")

```

## List all available Package tamplates[#](#list-all-available-package-tamplates "Link to this heading")

<https://scikit-plots.github.io/dev/user_guide/cython/_templates/templates_index.html>

```
examples = getattr(cython, "list_package_examples", lambda: [])()
print("Package examples:", examples)

```
```
Package examples: ['graph_algo', 'signal_conv', 'stats_basic', 'text_hash', 'vector_ops']

```

## Generate `python` Packages from `cython`[#](#generate-python-packages-from-cython "Link to this heading")

```
# Pick a template deterministically and safely.
# TODO: SecurityError: [include_dirs] unsafe include_dir (path traversal or absolute path not allowed):
# '/work/scikitplot/cython/_templates/package_examples/graph_algo'
if not examples:
    print("No package examples were bundled in this build.")
else:
    # Build prereqs check: keep docs builds safe.
    report = cython.check_build_prereqs(numpy=False)

    if not report.get('cython', {}).get('ok'):
        print("Skipping package build because prerequisites are missing.\n")
        problems = report.get("problems", [])
        if problems:
            print("Problems:", problems)
    else:
        # Choose a deterministic example name (first in sorted order)
        name = sorted(examples)[0]
        print("\nBuilding package example:", name)

        ## Demonstrate profiles:
        ## fast-debug is great for iteration; release for performance.
        # r_debug = cython.build_package_example_result(name, profile="fast-debug", verbose=0)
        # print("\nBuild (fast-debug) result:")
        # print(r_debug)

        ## Optional: build release too to show key changes deterministically.
        # r_release = cython.build_package_example_result(name, profile="release", verbose=0)
        # print("\nBuild (release) result:")
        # print(r_release)
        # print("\nKeys differ by profile:")
        # print("  fast-debug:", r_debug.key)
        # print("  release   :", r_release.key)

        ## Show deterministic metadata
        # print("\nPackage metadata:")
        # print("  package_name:", r_debug.package_name)
        # print("  build_dir   :", r_debug.build_dir)
        # print("  used_cache  :", r_debug.used_cache)
        # print("  created_utc :", r_debug.created_utc)

        ## Show per-module summary and artifact paths
        # print("\nModules and artifacts:")
        # for br in r_debug.results:
        #     print(" ", br.module.__name__)
        #     print("    artifact:", br.artifact_path)

        ## Import one built module by dotted name and call a known function (strict)
        # first_module = r_debug.modules[0]
        # mod_name = first_module.__name__
        # mod = importlib.import_module(mod_name)
        # print("\nImported module:", mod.__name__)

        ## Try calling a known function name (declared by convention)
        ## Keep candidates short and standard.
        # _safe_call_known_function(mod, candidates=("run", "demo", "test", "inc", "dec", "dot", "hash_text"))

        ## Pin/alias (per-cache-dir) and import again
        # alias = f"pkg_{name}_debug"
        # print("\nPinning build:")
        # cython.pin(r_debug.key, alias=alias, overwrite=True)
        # r_pinned = cython.import_pinned_result(alias)
        # print("Pinned import result:")
        # print(r_pinned)
        # print("Pinned package name:", r_pinned.package_name)

        ## Restart-safe import by key (no recompilation)
        # r_cached = cython.import_cached_package_result(r_debug.key)
        # print("\nImported from cache key:")
        # print(r_cached)
        # print("  used_cache:", r_cached.used_cache)

        ## Optional: cache stats (if available)
        # if hasattr(cython, "cache_stats"):
        #     stats = cython.cache_stats()
        #     print("\nCache stats snapshot:")
        #     print(stats)

```
```
Building package example: graph_algo

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.003 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_05_package_examples_multimodule.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_05_package_examples_multimodule.ipynb)

[`Download Jupyter notebook: plot_05_package_examples_multimodule.ipynb`](../../_downloads/fd866acd47e488285dc41ac8779918f6/plot_05_package_examples_multimodule.ipynb)

[`Download Python source code: plot_05_package_examples_multimodule.py`](../../_downloads/13e9206bf0ad7f3ff957fc485755a9e7/plot_05_package_examples_multimodule.py)

[`Download zipped: plot_05_package_examples_multimodule.zip`](../../_downloads/d56bce85af3091f9efd1b57af7339fde/plot_05_package_examples_multimodule.zip)

Related examples

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](plot_01_browse_and_compile_templates.html)

Browse and compile templates![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)