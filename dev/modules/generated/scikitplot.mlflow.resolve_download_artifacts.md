# resolve\_download\_artifacts[#](#resolve-download-artifacts "Link to this heading")

scikitplot.mlflow.resolve\_download\_artifacts(**mlflow\_module**, **\***, **client=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/mlflow/_compat.py#L52)[#](#scikitplot.mlflow.resolve_download_artifacts "Link to this definition")
:   Resolve a canonical artifact download function across MLflow versions.

    Parameters:
    :   ****mlflow\_module****module
        :   Imported `mlflow` module.

        ****client****Any or None, default=None
        :   Optional MLflow client bound to the desired tracking URI. If provided, it will be
            used for fallback APIs to avoid accidentally downloading from a different server.

    Returns:
    :   callable
        :   A callable compatible with `mlflow.artifacts.download_artifacts(...)`.

    Raises:
    :   AttributeError
        :   If no supported artifact download API is found.

    Parameters:
    :   * ****mlflow\_module**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****client**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[…], [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    Notes

    Preference order is deterministic:
    1) `mlflow.artifacts.download_artifacts` (public modern API)
    2) `client.download_artifacts` (session-bound)
    3) `MlflowClient.download_artifacts` (legacy, constructed without explicit URI)