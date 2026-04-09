# WorkflowPaths[#](#workflowpaths "Link to this heading")

class scikitplot.mlflow.WorkflowPaths(**\_project\_root**, **\_config\_dir**, **\_toml\_path**, **\_yaml\_path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/mlflow/_workflow.py#L35)[#](#scikitplot.mlflow.WorkflowPaths "Link to this definition")
:   Standardized project config paths used by the workflow.

    Attributes:
    :   [`project_root`](#scikitplot.mlflow.WorkflowPaths.project_root "scikitplot.mlflow.WorkflowPaths.project_root")pathlib.Path
        :   Project root directory.

        [`config_dir`](#scikitplot.mlflow.WorkflowPaths.config_dir "scikitplot.mlflow.WorkflowPaths.config_dir")pathlib.Path
        :   Configuration directory (typically `<project_root>/configs`).

        [`toml_path`](#scikitplot.mlflow.WorkflowPaths.toml_path "scikitplot.mlflow.WorkflowPaths.toml_path")pathlib.Path
        :   TOML config path.

        [`yaml_path`](#scikitplot.mlflow.WorkflowPaths.yaml_path "scikitplot.mlflow.WorkflowPaths.yaml_path")pathlib.Path
        :   YAML config path.

    Parameters:
    :   * ****\_project\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****\_config\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****\_toml\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****\_yaml\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))

    property config\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.mlflow.WorkflowPaths.config_dir "Link to this definition")
    :   Configuration directory (typically `<project_root>/configs`).

    property project\_root: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.mlflow.WorkflowPaths.project_root "Link to this definition")
    :   Project root directory.

    property toml\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.mlflow.WorkflowPaths.toml_path "Link to this definition")
    :   TOML config path.

    property yaml\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.mlflow.WorkflowPaths.yaml_path "Link to this definition")
    :   YAML config path.