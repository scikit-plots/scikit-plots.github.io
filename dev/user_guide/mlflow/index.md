# MLflow Workflow Automation[#](#mlflow-workflow-automation "Link to this heading")

Examples relevant to the [`mlflow`](../../apis/scikitplot.mlflow.html#module-scikitplot.mlflow "scikitplot.mlflow") module.

Adds a ****project-level configuration**** mechanism so multiple scripts
(e.g., `train.py`, `hpo.py`, `predict.py`) share the exact same MLflow settings,
regardless of current working directory.

Examples

```
import os
import scikitplot as sp

# print(sp.mlflow.DEFAULT_PROJECT_MARKERS)
# Walk upward from `start` until a directory containing any marker is found.
# export SCIKITPLOT_PROJECT_MARKERS='[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'
os.environ["SCIKITPLOT_PROJECT_MARKERS"]='[".git","pyproject.toml","README.txt","configs/mlflow.toml"]'

sp.mlflow.workflow(
    profile="local",
    open_ui_seconds=30,
    experiment_name="my-first-project",
    fmt="toml",
    overwrite=True,  # If config already exists: ./configs/mlflow.toml (use overwrite=True).
)

```

Quiskstart Template: Beginner workflow demo

* [MLflow](../../auto_examples/mlflow/plot_mlflow.html#sphx-glr-auto-examples-mlflow-plot-mlflow-py): Example usage of
  [`workflow`](../../modules/generated/scikitplot.mlflow.workflow.html#scikitplot.mlflow.workflow "scikitplot.mlflow.workflow") using template.