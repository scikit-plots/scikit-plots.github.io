# session\_from\_toml[#](#session-from-toml "Link to this heading")

scikitplot.mlflow.session\_from\_toml(**toml\_path**, **\***, **profile='local'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mlflow/_session.py#L513)[#](#scikitplot.mlflow.session_from_toml "Link to this definition")
:   Create an MLflow session using a shared project TOML config.

    Notes

    TOML reading is supported via stdlib `tomllib` (Python 3.11+).
    TOML writing is not supported in stdlib; use YAML if you need read/write.

    Parameters:
    :   * ****toml\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[**MlflowHandle**](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle "scikitplot.mlflow._session.MlflowHandle"), None, None]