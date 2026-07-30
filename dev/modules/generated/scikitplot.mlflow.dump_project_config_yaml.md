# dump\_project\_config\_yaml[#](#dump-project-config-yaml "Link to this heading")

scikitplot.mlflow.dump\_project\_config\_yaml(**cfg=None**, **path=None**, **\***, **profile='local'**, **source\_config\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/mlflow/_project.py#L899)[#](#scikitplot.mlflow.dump_project_config_yaml "Link to this definition")
:   Write a ProjectConfig to a YAML file.

    This function supports two strict modes:

    1. Explicit mode (library-level):
       `dump_project_config_yaml(cfg, path)`
    2. Project convenience mode (newbie-friendly):
       `dump_project_config_yaml(profile="local")`
       - Loads config from `<project_root>/configs/mlflow.toml` by default
       - Writes YAML to `<project_root>/configs/mlflow.yaml` by default

    Parameters:
    :   ****cfg****ProjectConfig or None, default=None
        :   Configuration to write. If None, `source_config_path` (or default project TOML)
            is loaded and used.

        ****path****pathlib.Path or None, default=None
        :   Output YAML file path. If None in convenience mode, uses the default project YAML path.

        ****profile****str, default=”local”
        :   Profile name used when loading the source configuration in convenience mode.

        ****source\_config\_path****pathlib.Path or None, default=None
        :   Source config path to load in convenience mode. If None, defaults to
            `<project_root>/configs/mlflow.toml`.

    Returns:
    :   pathlib.Path
        :   The YAML path written.

    Raises:
    :   ImportError
        :   If PyYAML is not installed.

        FileNotFoundError
        :   If convenience mode cannot find a source config.

        ValueError
        :   If arguments are inconsistent (e.g., cfg provided but path missing).

    Parameters:
    :   * ****cfg**** ([**ProjectConfig**](scikitplot.mlflow.ProjectConfig.html#scikitplot.mlflow.ProjectConfig "scikitplot.mlflow._project.ProjectConfig") **|** **None**)
        * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****source\_config\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_mlflow_thumb.png)

[MLflow](../../auto_examples/mlflow/plot_mlflow.html)

MLflow