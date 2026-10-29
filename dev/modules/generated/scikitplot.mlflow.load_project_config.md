# load\_project\_config[#](#load-project-config "Link to this heading")

scikitplot.mlflow.load\_project\_config(**path**, **\***, **profile='local'**, **project\_root=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mlflow/_project.py#L857)[#](#scikitplot.mlflow.load_project_config "Link to this definition")
:   Load project MLflow config from TOML or YAML based on file extension.

    Parameters:
    :   ****path****pathlib.Path
        :   Path to a config file. Supported extensions: .toml, .yaml, .yml

        ****profile****str, default=”local”
        :   Profile name.

        ****project\_root****pathlib.Path or None, default=None
        :   Optional project root override for path normalization.

    Returns:
    :   ProjectConfig
        :   Loaded config.

    Raises:
    :   ValueError
        :   If file extension is unsupported.

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****project\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**ProjectConfig**](scikitplot.mlflow.ProjectConfig.html#scikitplot.mlflow.ProjectConfig "scikitplot.mlflow._project.ProjectConfig")