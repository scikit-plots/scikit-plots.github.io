# load\_project\_config\_toml[#](#load-project-config-toml "Link to this heading")

scikitplot.mlflow.load\_project\_config\_toml(**path**, **\***, **profile='local'**, **project\_root=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/mlflow/_project.py#L761)[#](#scikitplot.mlflow.load_project_config_toml "Link to this definition")
:   Load project MLflow config from a TOML file.

    Parameters:
    :   ****path****pathlib.Path
        :   TOML config file path.

        ****profile****str, default=”local”
        :   Profile name.

        ****project\_root****pathlib.Path or None, default=None
        :   Project root used to resolve relative paths. If None, discovered via [`find_project_root`](scikitplot.mlflow.find_project_root.html#scikitplot.mlflow.find_project_root "scikitplot.mlflow.find_project_root").

    Returns:
    :   ProjectConfig
        :   Loaded project configuration.

    Raises:
    :   FileNotFoundError
        :   If the file does not exist.

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****project\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ProjectConfig**](scikitplot.mlflow.ProjectConfig.html#scikitplot.mlflow.ProjectConfig "scikitplot.mlflow._project.ProjectConfig")

    Notes

    TOML reading uses stdlib `tomllib` (Python 3.11+).