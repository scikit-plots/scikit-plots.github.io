# load\_project\_config\_yaml[#](#load-project-config-yaml "Link to this heading")

scikitplot.mlflow.load\_project\_config\_yaml(**path**, **\***, **profile='local'**, **project\_root=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c2567fd/scikitplot/mlflow/_project.py#L803)[#](#scikitplot.mlflow.load_project_config_yaml "Link to this definition")
:   Load project MLflow config from a YAML file.

    Parameters:
    :   ****path****pathlib.Path
        :   Path to YAML config file (.yaml or .yml).

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

        ImportError
        :   If PyYAML is not installed.

        ValueError
        :   If the YAML does not parse to a mapping.

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****project\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ProjectConfig**](scikitplot.mlflow.ProjectConfig.html#scikitplot.mlflow.ProjectConfig "scikitplot.mlflow._project.ProjectConfig")