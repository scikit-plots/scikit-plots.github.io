> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-mlflow-plot-mlflow-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# MLflow[#](#sphx-glr-auto-examples-mlflow-plot-mlflow-py "Link to this heading")

An example showing the [`mlflow`](../../apis/scikitplot.mlflow.html#module-scikitplot.mlflow "scikitplot.mlflow") submodule..

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## mlflow workflow helper[#](#mlflow-workflow-helper "Link to this heading")

Adds a ****project-level configuration**** mechanism so multiple scripts
(e.g., `train.py`, `hpo.py`, `predict.py`) share the exact same MLflow settings,
regardless of current working directory.

```
# !pip install mlflow pyyaml
import scikitplot as sp

print(sp.mlflow.workflow.__doc__)

```
```
Run the built-in end-to-end MLflow workflow demo.

This is a small, newbie-friendly helper that:

1. Exports the library's built-in demo config (TOML or YAML) into your project.
2. Runs a small "train" logging run.
3. Optionally keeps the UI open for inspection.
4. Runs a small "predict" logging run.

Parameters
----------
profile : str, default="local"
    Profile name inside the project config.
open_ui_seconds : float, default=0.0
    If > 0, sleeps for this many seconds while the session is open, logging ``ui_url``.
experiment_name : str or None, default=None
    If provided, patches the exported config to use this experiment name.
fmt : {"toml", "yaml"}, default="toml"
    Which built-in demo config format to export.
overwrite : bool, default=False
    Whether to overwrite existing project config files.

Returns
-------
WorkflowPaths
    Paths used during the workflow (project root, config dir, toml/yaml paths).

See Also
--------
run_demo
    The implementation used by the CLI entry point.

```
```
print(sp.mlflow.DEFAULT_PROJECT_MARKERS)

```
```
('.git', 'configs', 'configs/mlflow.toml', 'Makefile', 'pyproject.toml', 'README', 'README.txt', 'README.md', 'README.rst')

```

## Environment (best for CI)[#](#environment-best-for-ci "Link to this heading")

Default marker file-folder for auto detection
Walk upward from `start` until a directory containing any marker is found.

```
import os

# export SCIKITPLOT_PROJECT_MARKERS='[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'
os.environ["SCIKITPLOT_PROJECT_MARKERS"]='[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'

# Check ROOT or base_dir is requested
sp.mlflow.find_project_root()

```
```
PosixPath('/home/circleci/repo/galleries/examples/mlflow')

```

## 💡 Quiskstart Template: Beginner workflow demo[#](#quiskstart-template-beginner-workflow-demo "Link to this heading")

Demo save config from default settings then customize.

```
sp.mlflow.workflow(
    profile="local",
    open_ui_seconds=5,
    experiment_name="my-first-project",  # "scikitplot-project"
    fmt="toml",
    overwrite=True,  # Config already exists: ./configs/mlflow.toml (use overwrite=True).
)

```
```
2026/07/14 04:49:00 INFO mlflow.tracking.fluent: Experiment with name 'my-first-project' does not exist. Creating a new experiment.
🏃 View run train at: http://127.0.0.1:8891/#/experiments/1/runs/c0398c7605c7493094acefbfbc6cf56e
🧪 View experiment at: http://127.0.0.1:8891/#/experiments/1
🏃 View run predict at: http://127.0.0.1:8891/#/experiments/1/runs/f4b605abf1de4fc985f7cc31b87b6f41
🧪 View experiment at: http://127.0.0.1:8891/#/experiments/1

WorkflowPaths(_project_root=PosixPath('/home/circleci/repo/galleries/examples/mlflow'), _config_dir=PosixPath('/home/circleci/repo/galleries/examples/mlflow/configs'), _toml_path=PosixPath('/home/circleci/repo/galleries/examples/mlflow/configs/mlflow.toml'), _yaml_path=PosixPath('/home/circleci/repo/galleries/examples/mlflow/configs/mlflow.yaml'))

```

## 🛠️ How to use customized settings?[#](#how-to-use-customized-settings "Link to this heading")

```
import time
import scikitplot as sp


ROOT = sp.mlflow.find_project_root(config_path=None)

with sp.mlflow.session_from_file(ROOT / "configs/mlflow.toml", profile="local") as mlflow:
    with mlflow.start_run():  # default_run_name + default tags apply automatically
        mlflow.log_param("phase", "train")

    # Overwrite new profile, If Needed
    sp.mlflow.dump_project_config_yaml(source_config_path=None)


# ROOT = sp.mlflow.find_project_root(config_path=None)

with sp.mlflow.session_from_file(ROOT / "configs/mlflow.yaml", profile="local") as mlflow:
    print("Open MLflow UI:", mlflow.ui_url)
    # do something
    time.sleep(5)


with sp.mlflow.session_from_file(ROOT / "configs/mlflow.yaml", profile="local") as mlflow:
    with mlflow.start_run(run_name="predict"):  # override default name if you want
        mlflow.log_param("phase", "predict")

```
```
🏃 View run train at: http://127.0.0.1:8891/#/experiments/1/runs/ea46e34e5d244073b4600000590ae5d3
🧪 View experiment at: http://127.0.0.1:8891/#/experiments/1
Open MLflow UI: http://127.0.0.1:8891
🏃 View run predict at: http://127.0.0.1:8891/#/experiments/1/runs/3ad31b411d6b42afb328169bd30a45d2
🧪 View experiment at: http://127.0.0.1:8891/#/experiments/1

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: model building](../../_tags/model-workflow-model-building.html) [plot-type: text](../../_tags/plot-type-text.html) [domain: mlflow](../../_tags/domain-mlflow.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 18.900 seconds)

[![Launch binder](../../_images/binder_badge_logo11.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/mlflow/plot_mlflow.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo11.svg)](../../lite/lab/index.html?path=auto_examples/mlflow/plot_mlflow.ipynb)

[`Download Jupyter notebook: plot_mlflow.ipynb`](../../_downloads/f2b5691e338c880ded0a4446783fd670/plot_mlflow.ipynb)

[`Download Python source code: plot_mlflow.py`](../../_downloads/5f793713f22d3c9ad64158df13e9ee69/plot_mlflow.py)

[`Download zipped: plot_mlflow.zip`](../../_downloads/7f69801a62ebe35b39672d221db4bba6/plot_mlflow.zip)

Related examples

![](../../_images/sphx_glr_s_compile_cpp_thumb.png)

[Compile and run the C++ Annoy with examples](../annoy/s_compile_cpp.html)

Compile and run the C++ Annoy with examples![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](../cython/plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template![](../../_images/sphx_glr_plot_cython_template_thumb.png)

[Cython: Realtime compile\_and\_load (.pyx)](../cython/plot_cython_template.html)

Cython: Realtime compile\_and\_load (.pyx)![](../../_images/sphx_glr_plot_nc_test_thumb.png)

[nc with examples](../nc/plot_nc_test.html)

nc with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)