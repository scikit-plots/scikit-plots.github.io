# session\_from\_file[#](#session-from-file "Link to this heading")

scikitplot.mlflow.session\_from\_file(**config\_path**, **\***, **profile='local'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mlflow/_session.py#L534)[#](#scikitplot.mlflow.session_from_file "Link to this definition")
:   Create an MLflow session using a shared project config file (TOML or YAML).

    Parameters:
    :   ****config\_path****str or pathlib.Path
        :   Path to a project config file. Supported extensions: .toml, .yaml, .yml

        ****profile****str, default=”local”
        :   Profile to load.

    Returns:
    :   Generator[MlflowHandle, None, None]
        :   Session handle proxying the upstream `mlflow` module.

    Parameters:
    :   * ****config\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[**MlflowHandle**](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle "scikitplot.mlflow._session.MlflowHandle"), None, None]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_mlflow_thumb.png)

[MLflow](../../auto_examples/mlflow/plot_mlflow.html)

MLflow