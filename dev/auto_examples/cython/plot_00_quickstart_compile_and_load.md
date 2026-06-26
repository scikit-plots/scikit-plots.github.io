> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-00-quickstart-compile-and-load-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cython quickstart: compile\_and\_load[#](#cython-quickstart-compile-and-load "Link to this heading")

This example shows the minimal workflow:

1. Compile a small Cython snippet at runtime.
2. Call the compiled function immediately.
3. Inspect build/cache metadata (key, build dir, artifact path).
4. Demonstrate profiles, pin/alias, and restart-safe re-import by key.

## Notes[#](#notes "Link to this heading")

Runtime compilation requires:

* a working C/C++ compiler toolchain
* Python development headers (`Python.h`)
* the `Cython` package
* (optional) NumPy if `numpy_support=True` and your code uses NumPy C-API

If prerequisites are not available (common on doc builders),
this example prints a short diagnostic and exits gracefully.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

from scikitplot import cython

```
```
def _print_prereq_summary(report: dict) -> None:
    """Print a stable, user/dev friendly prereq summary."""
    print("Prereq ok:", report.get("ok", False))
    for k in ("cython", "setuptools", "numpy", "compiler", "python_headers"):
        if k in report:
            item = report.get(k, {})
            if isinstance(item, dict):
                ok = item.get("ok", False)
                ver = item.get("version", None)
                msg = item.get("message", None)
                s = f"  - {k}: ok={ok}"
                if ver:
                    s += f", version={ver}"
                if msg:
                    s += f", message={msg}"
                print(s)

```

Basic environment diagnostic (safe to run on doc builders)

```
report = cython.check_build_prereqs()
_print_prereq_summary(report)

```
```
Prereq ok: False
  - cython: ok=True, version=3.2.6
  - setuptools: ok=True, version=82.0.1

```

## Generate `python` Module from `python`[#](#generate-python-module-from-python "Link to this heading")

```
if not report.get('cython', {}).get('ok'):
    print("\nCython runtime compilation prerequisites are missing.")
    # If your implementation provides a formatted string, prefer it.
    fmt = getattr(report, "format", None)
    if callable(fmt):
        print(fmt())
    else:
        problems = report.get("problems", [])
        if problems:
            print("Problems:", problems)
else:
    # ------------------------------------------------------------
    # 1) Compile a tiny Cython function and call it immediately.
    # ------------------------------------------------------------
    code_f = "def f(int n):\n    return n*n\n"

    try:
        m = cython.compile_and_load(code_f, profile="fast-debug")
    except Exception as e:
        # Docs-safe: show error without crashing the whole gallery build.
        print("\nCompilation failed (showing exception and exiting gracefully):")
        print(type(e).__name__ + ":", e)
    else:
        print("\nCompiled module name:", getattr(m, "__name__", "<unknown>"))
        print("f(10) =", m.f(10))

        # ------------------------------------------------------------
        # 2) If you need build metadata, use *_result API.
        # ------------------------------------------------------------
        code_g = "def g(int n):\n    return n+1\n"
        r = cython.compile_and_load_result(
            code_g,
            profile="fast-debug",
            numpy_support=True,
            numpy_required=False,
        )

        print("\nBuildResult (metadata):")
        print("  module_name :", r.module_name)
        print("  cache key   :", r.key)
        print("  build dir   :", r.build_dir)
        print("  artifact    :", r.artifact_path)
        print("  used_cache  :", r.used_cache)
        print("  created_utc :", r.created_utc)

        # Call g to prove the compiled module is live.
        print("g(10) =", r.module.g(10))

        # ------------------------------------------------------------
        # 3) Restart-safe workflow: import again by cache key.
        # ------------------------------------------------------------
        # This simulates "after kernel restart" behavior.
        try:
            m2 = cython.import_cached(r.key)
        except Exception as e:
            print("\nCould not re-import from cache by key:")
            print(type(e).__name__ + ":", e)
        else:
            print("\nRe-imported from cache key:")
            print("  module:", m2.__name__)
            print("  g(10) :", m2.g(10))

        # ------------------------------------------------------------
        # 4) Pin/Alias for friendly reuse.
        # ------------------------------------------------------------
        alias = "quickstart_g"
        try:
            cython.pin(r.key, alias=alias, overwrite=True)
            m3 = cython.import_pinned(alias)
        except Exception as e:
            print("\nPin/import by alias failed:")
            print(type(e).__name__ + ":", e)
        else:
            print("\nImported via alias:", alias)
            print("  module:", m3.__name__)
            print("  g(10) :", m3.g(10))

        # ------------------------------------------------------------
        # 5) Profile demonstration: release build gets a different key.
        # ------------------------------------------------------------
        r_rel = cython.compile_and_load_result(code_g, profile="release", numpy_support=True, numpy_required=False)
        print("\nProfile comparison (keys):")
        print("  fast-debug:", r.key)
        print("  release   :", r_rel.key)
        print("  keys differ:", r.key != r_rel.key)

        # Optional: print cache stats snapshot, if available.
        if hasattr(cython, "cache_stats"):
            print("\nCache stats snapshot:")
            print(cython.cache_stats())

```
```
Compiled module name: scikitplot_cython_dcc07d0ff95c10ef
f(10) = 100

BuildResult (metadata):
  module_name : scikitplot_cython_8c86efd9d53684b1
  cache key   : 8c86efd9d53684b165468c85bf4fd11e1a7de61d6cdde0075a3e0507cfaf424c
  build dir   : /home/circleci/.cache/scikitplot/cython/8c86efd9d53684b165468c85bf4fd11e1a7de61d6cdde0075a3e0507cfaf424c
  artifact    : /home/circleci/.cache/scikitplot/cython/8c86efd9d53684b165468c85bf4fd11e1a7de61d6cdde0075a3e0507cfaf424c/scikitplot_cython_8c86efd9d53684b1.cpython-312-x86_64-linux-gnu.so
  used_cache  : False
  created_utc : 2026-06-26T18:49:00Z
g(10) = 11

Re-imported from cache key:
  module: scikitplot_cython_8c86efd9d53684b1
  g(10) : 11

Imported via alias: quickstart_g
  module: scikitplot_cython_8c86efd9d53684b1
  g(10) : 11

Profile comparison (keys):
  fast-debug: 8c86efd9d53684b165468c85bf4fd11e1a7de61d6cdde0075a3e0507cfaf424c
  release   : cc742d2431f49ab1ce72df56914e664127f1c237962d952ff123eb13ff5555db
  keys differ: True

Cache stats snapshot:
CacheStats(cache_root=PosixPath('/home/circleci/.cache/scikitplot/cython'), n_modules=3, n_packages=0, total_bytes=2170878, pinned_aliases=1, pinned_keys=1, newest_mtime_utc='2026-06-26T18:49:01Z', oldest_mtime_utc='2026-06-26T18:48:59Z')

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 2.792 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_00_quickstart_compile_and_load.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_00_quickstart_compile_and_load.ipynb)

[`Download Jupyter notebook: plot_00_quickstart_compile_and_load.ipynb`](../../_downloads/59e5666c5068e0f00b3dceedbc97c9c8/plot_00_quickstart_compile_and_load.ipynb)

[`Download Python source code: plot_00_quickstart_compile_and_load.py`](../../_downloads/159b8d494a62223b23241b531c774988/plot_00_quickstart_compile_and_load.py)

[`Download zipped: plot_00_quickstart_compile_and_load.zip`](../../_downloads/e6f66caf2036c87f30d44cbfdb58537c/plot_00_quickstart_compile_and_load.zip)

Related examples

![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds![](../../_images/sphx_glr_plot_03_cache_and_restart_reuse_thumb.png)

[Cache and restart reuse](plot_03_cache_and_restart_reuse.html)

Cache and restart reuse![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](plot_01_browse_and_compile_templates.html)

Browse and compile templates

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)