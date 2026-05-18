> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-09-workflow-templates-cli-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Workflow templates (train / hpo / predict) + CLI entry template[#](#workflow-templates-train-hpo-predict-cli-entry-template "Link to this heading")

Workflow templates are shipped as package data under
`_templates/workflow/`. They are designed to be copied into any project
directory and executed directly.

Each script follows canonical CLI structure:

* `parse_args(argv=None)`
* `main(argv=None) -> int`
* `if __name__ == "__main__": raise SystemExit(main())`

This example lists workflows and copies one workflow to a temporary folder.
It also shows how to compile a Cython extension (a `.so`/`.pyd`) and import
it from the copied workflow directory:

1. Single-module compile → copy artifact next to workflow → import by path.
2. Multi-module package build → copy package folder → import via sys.path.

## Notes[#](#notes "Link to this heading")

Compilation requires a working compiler toolchain and Python headers. During
Sphinx-Gallery builds, we skip compilation cleanly if prerequisites are missing.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import os
import sys
import tempfile
from pathlib import Path

from scikitplot import cython

```

## Generate Workflow Package `wf_ext_pkg`[#](#generate-workflow-package-wf-ext-pkg "Link to this heading")

Copy template workflow in local or use exist from local folder.

```
workflows = getattr(cython, "list_workflows", lambda: [])()
print("Workflows:", workflows)

if not workflows:
    print("No workflow templates bundled in this build.")
else:
    wf = workflows[0]
    with tempfile.TemporaryDirectory(dir=".") as tmp:
        dest = Path(tmp) / "workflow_copy"
        cython.copy_workflow(wf, dest_dir=dest, overwrite=True)

        print("Copied workflow to:", dest)
        print("Files:", sorted(p.name for p in dest.rglob("*.py")))

        # Show how users would run the CLI entrypoint.
        cli = dest / "cli.py"
        print("\nRun:")
        print(f"  python {cli} train --help")
        print(f"  python {cli} hpo --help")
        print(f"  python {cli} predict --help")

        # ------------------------------------------------------------
        # Optional: compile and import a .so/.pyd into this copied folder
        # ------------------------------------------------------------
        # prereqs = getattr(cython, "check_build_prereqs", lambda **_: {"ok": False})()
        report = cython.check_build_prereqs(numpy=False)
        if not report.get('cython', {}).get('ok'):
            print("\nBuild prerequisites not available; skipping compilation demo.")
            # Print a compact diagnostic (safe for docs output)
            problems = report.get("problems", [])
            if problems:
                print("Prereq problems:", problems)
        else:
            # 1) Single-module extension compile -> copy artifact -> import by path
            code = (
                "def square(int n):\n"
                "    return n*n\n"
            )

            res = cython.compile_and_load_result(
                code,
                module_name="wf_ext_square",
                profile="fast-debug",
                numpy_support=True,
                numpy_required=False,
            )

            artifact_copy = dest / res.artifact_path.name
            artifact_copy.write_bytes(res.artifact_path.read_bytes())

            # Import the compiled extension from the copied workflow directory.
            m = cython.import_artifact_path(artifact_copy, module_name=res.module_name)
            print("\nSingle-module extension imported from copied folder:")
            print("  m.square(12) =", m.square(12))

            # 2) Multi-module package build -> copy package folder -> import via sys.path
            # This creates a package with two extension modules:
            #   wf_ext_pkg.alpha
            #   wf_ext_pkg.beta
            pkg = cython.build_package_from_code_result(
                package_name="wf_ext_pkg",
                modules={
                    "alpha": "def inc(int n):\n    return n + 1\n",
                    "beta":  "def dec(int n):\n    return n - 1\n",
                },
                profile="fast-debug",
                numpy_support=True,
                numpy_required=False,
            )

            # Copy the built package directory into the workflow folder.
            pkg_src_dir = pkg.build_dir / pkg.package_name
            pkg_dst_dir = dest / pkg.package_name

            # Strict copy (no heuristics): recreate files.
            pkg_dst_dir.mkdir(parents=True, exist_ok=True)
            for p in pkg_src_dir.rglob("*"):
                rel = p.relative_to(pkg_src_dir)
                out = pkg_dst_dir / rel
                if p.is_dir():
                    out.mkdir(parents=True, exist_ok=True)
                else:
                    out.write_bytes(p.read_bytes())

            # Now import it like a normal package by adding `dest` to sys.path.
            sys.path.insert(0, str(dest))
            try:
                import wf_ext_pkg.alpha as alpha  # type: ignore
                import wf_ext_pkg.beta as beta    # type: ignore
                print("\nPackage extension imported from copied folder:")
                print("  alpha.inc(10) =", alpha.inc(10))
                print("  beta.dec(10)  =", beta.dec(10))
            finally:
                # Clean up sys.path modification
                if sys.path and sys.path[0] == str(dest):
                    sys.path.pop(0)

```
```
Workflows: ['churn_basic']
Copied workflow to: tmpuzs6oomo/workflow_copy
Files: ['cli.py', 'hpo.py', 'predict.py', 'train.py']

Run:
  python tmpuzs6oomo/workflow_copy/cli.py train --help
  python tmpuzs6oomo/workflow_copy/cli.py hpo --help
  python tmpuzs6oomo/workflow_copy/cli.py predict --help

Single-module extension imported from copied folder:
  m.square(12) = 144
Compiling /home/circleci/.cache/scikitplot/cython/415843c0d349bf259c510d882ffdfb7bf8a782a4930daee343850d70a33229f3/wf_ext_pkg/alpha.pyx because it changed.
Compiling /home/circleci/.cache/scikitplot/cython/415843c0d349bf259c510d882ffdfb7bf8a782a4930daee343850d70a33229f3/wf_ext_pkg/beta.pyx because it changed.
[1/2] Cythonizing /home/circleci/.cache/scikitplot/cython/415843c0d349bf259c510d882ffdfb7bf8a782a4930daee343850d70a33229f3/wf_ext_pkg/alpha.pyx
[2/2] Cythonizing /home/circleci/.cache/scikitplot/cython/415843c0d349bf259c510d882ffdfb7bf8a782a4930daee343850d70a33229f3/wf_ext_pkg/beta.pyx

Package extension imported from copied folder:
  alpha.inc(10) = 11
  beta.dec(10)  = 9

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 1.096 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_09_workflow_templates_cli.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_09_workflow_templates_cli.ipynb)

[`Download Jupyter notebook: plot_09_workflow_templates_cli.ipynb`](../../_downloads/182d7c659be2410f39d6c11870cd0fc2/plot_09_workflow_templates_cli.ipynb)

[`Download Python source code: plot_09_workflow_templates_cli.py`](../../_downloads/48b69c731eff8980bc7a221731eed790/plot_09_workflow_templates_cli.py)

[`Download zipped: plot_09_workflow_templates_cli.zip`](../../_downloads/a43f95e414feb43f130e4796b539533c/plot_09_workflow_templates_cli.zip)

Related examples

![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](plot_01_browse_and_compile_templates.html)

Browse and compile templates![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)