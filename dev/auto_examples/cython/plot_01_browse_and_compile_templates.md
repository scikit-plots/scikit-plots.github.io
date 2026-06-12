> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-01-browse-and-compile-templates-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Browse and compile templates[#](#browse-and-compile-templates "Link to this heading")

This example shows how to:

* list available templates
* read a template source file
* compile a selected template
* inspect the compiled module
* handle missing templates or build prerequisites gracefully (docs-safe)

## Notes[#](#notes "Link to this heading")

Templates are shipped as package data under `_templates/`. If your packaging
configuration excludes them, this example will print a clear message and exit.

Compilation requires build prerequisites; we check them first to keep gallery
builds stable.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

from typing import Any, Iterable

from scikitplot import cython

```
```
def _preview_text(s: str, n: int = 250) -> str:
    s2 = s.replace("\r\n", "\n")
    if len(s2) <= n:
        return s2
    return s2[:n] + "\n..."


def _safe_call_from_metadata(module: Any, demo_calls: Iterable[dict[str, Any]]) -> bool:
    """
    Execute strictly declared demo calls.

    The metadata schema is expected to include demo calls like:

    {"func": "square", "args": [12]}

    This function executes only declared calls, with no guessing.
    """
    any_called = False
    for call in demo_calls:
        func_name = call.get("func")
        args = call.get("args", [])
        kwargs = call.get("kwargs", {})
        if not isinstance(func_name, str):
            continue
        f = getattr(module, func_name, None)
        if not callable(f):
            continue
        try:
            out = f(*args, **kwargs)
        except Exception as e:
            print(f"Demo call failed: {module.__name__}.{func_name}{tuple(args)!r} -> {type(e).__name__}: {e}")
        else:
            print(f"Demo call: {module.__name__}.{func_name}(*{args!r}, **{kwargs!r}) -> {out!r}")
            any_called = True
    return any_called


def _public_names(module: Any, limit: int = 20) -> list[str]:
    names = sorted(
        n for n in getattr(module, "__dict__", {}).keys()
        if n and not n.startswith("_")
    )
    return names[:limit]

```

## List all available module tamplates[#](#list-all-available-module-tamplates "Link to this heading")

<https://scikit-plots.github.io/dev/user_guide/cython/_templates/templates_index.html>

```
templates = cython.list_templates()
print("Template count:", len(templates))
print("First 8:", templates[:8])

```
```
Template count: 75
First 8: ['basic_cython/t01_square_int', 'basic_cython/t02_add_float', 'basic_cython/t03_toggle_bool', 'basic_cython/t04_repeat_str', 'basic_cython/t05_int_overflow_demo', 'basic_cython/t06_xor_bytes', 'complex_cython/t01_cpp_vector_sum', 'complex_cython/t01_fast_clip']

```

## Generate `python` Module from `cython`[#](#generate-python-module-from-cython "Link to this heading")

```
# Pick a template deterministically and safely.
if not templates:
    print(
        "No templates found.\n"
        "This usually means templates were not included as package data.\n"
        "Ensure your packaging includes scikitplot/cython/_templates/**."
    )
else:
    name = templates[0]
    path = cython.get_template_path(name)
    print("\nTemplate:", name)
    print("Path:", path)

    src = cython.read_template(name)
    print("\nSource preview:\n")
    print(_preview_text(src, 250))

    # Check build prerequisites (docs-safe).
    report = cython.check_build_prereqs(numpy=False)
    if not report.get('cython', {}).get('ok'):
        print("\nSkipping compilation because build prerequisites are missing.")
        problems = report.get("problems", [])
        if problems:
            print("Problems:", problems)
    else:
        # Compile the selected template.
        #
        # Prefer compile_template_result so we can display metadata.
        r = cython.compile_template_result(name, profile="fast-debug", verbose=0)
        print("\nBuildResult:")
        print("  module_name:", r.module_name)
        print("  key        :", r.key)
        print("  artifact   :", r.artifact_path)
        print("  used_cache :", r.used_cache)

        mod = r.module
        print("\nImported module:", mod.__name__)
        print("Public names:", _public_names(mod))

        # Strict demo execution:
        # 1) If template metadata declares demo calls, use them.
        # 2) Otherwise do NOT guess signatures; just print public names.
        info = getattr(cython, "read_template_info", None)
        if callable(info):
            meta = info(name)
            demo_calls = getattr(meta, "demo_calls", None)
            if demo_calls:
                print("\nRunning metadata-declared demo calls:")
                called = _safe_call_from_metadata(mod, demo_calls)
                if not called:
                    print("No declared calls could be executed.")
            else:
                print("\nNo demo_calls declared in template metadata; skipping execution.")
        else:
            print("\nTemplate metadata reader not available; skipping execution.")

```
```
Template: basic_cython/t01_square_int
Path: /home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/scikitplot/cython/_templates/basic_cython/t01_square_int.pyx

Source preview:

# cython: language_level=3
"""Basic Cython template: typed function.

This demonstrates a minimal compiled function with C integer typing.
"""


def square(int n):
    """Return n*n using C integer arithmetic."""
    return n * n


BuildResult:
  module_name: scikitplot_cython_68b614f33cf06682
  key        : 68b614f33cf06682779d8522862b78a78f2d47e77d9673e8bde32c03209daf6b
  artifact   : /home/circleci/.cache/scikitplot/cython/68b614f33cf06682779d8522862b78a78f2d47e77d9673e8bde32c03209daf6b/scikitplot_cython_68b614f33cf06682.cpython-311-x86_64-linux-gnu.so
  used_cache : False

Imported module: scikitplot_cython_68b614f33cf06682
Public names: ['square']

No demo_calls declared in template metadata; skipping execution.

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.446 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_01_browse_and_compile_templates.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_01_browse_and_compile_templates.ipynb)

[`Download Jupyter notebook: plot_01_browse_and_compile_templates.ipynb`](../../_downloads/a389ff47550de162e8a988982129b8cb/plot_01_browse_and_compile_templates.ipynb)

[`Download Python source code: plot_01_browse_and_compile_templates.py`](../../_downloads/c47afb181a9c8aeda3b5933a49df2d9d/plot_01_browse_and_compile_templates.py)

[`Download zipped: plot_01_browse_and_compile_templates.zip`](../../_downloads/405775fec747accaf563736a231ea973/plot_01_browse_and_compile_templates.zip)

Related examples

![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_s_compile_cpp_thumb.png)

[Compile and run the C++ Annoy with examples](../annoy/s_compile_cpp.html)

Compile and run the C++ Annoy with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)