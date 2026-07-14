# session\_from\_file[#](#session-from-file "Link to this heading")

scikitplot.mlflow.session\_from\_file(**config\_path**, **\***, **profile='local'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/mlflow/_session.py#L525)[#](#scikitplot.mlflow.session_from_file "Link to this definition")
:   Create an MLflow session using a shared project config file (TOML or YAML).

    Parameters:
    :   ****config\_path****str or pathlib.Path
        :   Path to a project config file. Supported extensions: .toml, .yaml, .yml

        ****profile****str, default=”local”
        :   Profile to load.

    Returns:
    :   Iterator[MlflowHandle]
        :   Session handle proxying the upstream `mlflow` module.

    Parameters:
    :   * ****config\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.14)")[[**MlflowHandle**](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle "scikitplot.mlflow._session.MlflowHandle")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_mlflow_thumb.png)

[MLflow](../../auto_examples/mlflow/plot_mlflow.html)

MLflow