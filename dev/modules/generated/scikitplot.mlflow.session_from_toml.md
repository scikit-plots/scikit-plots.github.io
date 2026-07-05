# session\_from\_toml[#](#session-from-toml "Link to this heading")

scikitplot.mlflow.session\_from\_toml(**toml\_path**, **\***, **profile='local'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/mlflow/_session.py#L504)[#](#scikitplot.mlflow.session_from_toml "Link to this definition")
:   Create an MLflow session using a shared project TOML config.

    Notes

    TOML reading is supported via stdlib `tomllib` (Python 3.11+).
    TOML writing is not supported in stdlib; use YAML if you need read/write.

    Parameters:
    :   * ****toml\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.14)")[[**MlflowHandle**](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle "scikitplot.mlflow._session.MlflowHandle")]