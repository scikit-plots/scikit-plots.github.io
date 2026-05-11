# default\_project\_paths[#](#default-project-paths "Link to this heading")

scikitplot.mlflow.default\_project\_paths(**\***, **project\_root=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/mlflow/_workflow.py#L109)[#](#scikitplot.mlflow.default_project_paths "Link to this definition")
:   Compute standard config file paths for a project.

    Returns:
    :   WorkflowPaths
        :   Standardized paths.

    Attributes:
    :   ****project\_root****pathlib.Path or None, default=None
        :   If None, uses `scikitplot.mlflow.project.find_project_root`.

    Parameters:
    :   ****project\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**WorkflowPaths**](scikitplot.mlflow.WorkflowPaths.html#scikitplot.mlflow.WorkflowPaths "scikitplot.mlflow._workflow.WorkflowPaths")