> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-04-pin-alias-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Pin/Alias: stable handles for cached builds[#](#pin-alias-stable-handles-for-cached-builds "Link to this heading")

Pins provide a human-friendly alias for a cached build key:

* `pin(key, alias="fast_fft")`
* `import_pinned("fast_fft")`

Pins are stored per cache directory (portable and deterministic).

## What this example demonstrates[#](#what-this-example-demonstrates "Link to this heading")

1. Compile a snippet and pin its cache key under an alias.
2. Import again using the alias (without remembering the key).
3. Show strict overwrite behavior.
4. List pins and remove a pin (unpin).

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

from scikitplot import cython

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
    # 1) Compile a small module and capture its cache key.
    r = cython.compile_and_load_result("def f(int n):\n    return n*n\n", profile="fast-debug", verbose=0)
    key = r.key
    alias = "demo_square"

    print("Built key:", key)
    print("Pin alias:", alias)

    # 2) Pin the key (overwrite=True makes the example rerunnable).
    cython.pin(key, alias=alias, overwrite=True)

    # 3) Import via alias and verify correctness.
    if hasattr(cython, "import_pinned_result"):
        r2 = cython.import_pinned_result(alias)
        m = r2.module
        print("\nImported via alias (result API):")
        print("  module_name:", r2.module_name)
        print("  key        :", r2.key)
        print("  used_cache :", r2.used_cache)
    else:
        m = cython.import_pinned(alias)
        print("\nImported via alias (module API):", m.__name__)

    out = m.f(9)
    print("demo_square.f(9) =", out)
    print("Expected:", 81)
    print("Correct:", out == 81)

    # 4) Show pins dictionary (alias -> key).
    pins = cython.list_pins()
    print("\nPins:", pins)
    print("Alias resolves to this key:", pins.get(alias))

    # 5) Demonstrate strict overwrite behavior:
    #    Attempt to pin a different key to the same alias without overwrite.
    r_other = cython.compile_and_load_result("def f(int n):\n    return n*n + 1\n", profile="fast-debug", verbose=0)

    print("\nStrict collision demo:")
    try:
        cython.pin(r_other.key, alias=alias, overwrite=False)
        print("Unexpected: pin succeeded without overwrite.")
    except Exception as e:
        print("As expected, pin without overwrite failed:")
        print(" ", type(e).__name__ + ":", e)

    # Now overwrite intentionally.
    cython.pin(r_other.key, alias=alias, overwrite=True)
    m_over = cython.import_pinned(alias)
    print("After overwrite, demo_square.f(9) =", m_over.f(9))

    # 6) Unpin and verify alias is removed.
    if hasattr(cython, "unpin"):
        cython.unpin(alias)
        print("\nAfter unpin, pins:", cython.list_pins())
    else:
        print("\nNo unpin() API found in this build; skipping unpin demo.")

```
```
Built key: b82a7d5a410e110f658412dad516f578eab39189361958efd923b876759fc411
Pin alias: demo_square

Imported via alias (result API):
  module_name: scikitplot_cython_b82a7d5a410e110f
  key        : b82a7d5a410e110f658412dad516f578eab39189361958efd923b876759fc411
  used_cache : True
demo_square.f(9) = 81
Expected: 81
Correct: True

Pins: {'demo_square': 'b82a7d5a410e110f658412dad516f578eab39189361958efd923b876759fc411', 'quickstart_g': '27e834d4d9b9704b6531d579adba3e067590eb11fa92da0e71dbff68fab3b664'}
Alias resolves to this key: b82a7d5a410e110f658412dad516f578eab39189361958efd923b876759fc411

Strict collision demo:
As expected, pin without overwrite failed:
  ValueError: Alias collision: alias 'demo_square' already points to a different key (b82a7d5a410e110f...). Use overwrite=True to replace.
After overwrite, demo_square.f(9) = 82

After unpin, pins: {'quickstart_g': '27e834d4d9b9704b6531d579adba3e067590eb11fa92da0e71dbff68fab3b664'}

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.433 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_04_pin_alias.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_04_pin_alias.ipynb)

[`Download Jupyter notebook: plot_04_pin_alias.ipynb`](../../_downloads/51f502e99319a1d7a46eacdfa9b21d8d/plot_04_pin_alias.ipynb)

[`Download Python source code: plot_04_pin_alias.py`](../../_downloads/01e0f02a82b701c006359d09b51ac3f2/plot_04_pin_alias.py)

[`Download zipped: plot_04_pin_alias.zip`](../../_downloads/d73326f7edbf37f8c71c4990cbc96cd1/plot_04_pin_alias.zip)

Related examples

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)![](../../_images/sphx_glr_plot_03_cache_and_restart_reuse_thumb.png)

[Cache and restart reuse](plot_03_cache_and_restart_reuse.html)

Cache and restart reuse![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)