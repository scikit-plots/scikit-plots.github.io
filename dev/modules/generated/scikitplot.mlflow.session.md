# session[#](#session "Link to this heading")

scikitplot.mlflow.session(**\***, **config=None**, **server=None**, **start\_server=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mlflow/_session.py#L325)[#](#scikitplot.mlflow.session "Link to this definition")
:   Create a strict, context-managed MLflow session.

    Parameters:
    :   ****config****SessionConfig or None, default=None
        :   Session-level configuration (URIs, `.env`, extra env, timeouts, defaults).

        ****server****ServerConfig or None, default=None
        :   Server configuration for managed server mode.

        ****start\_server****bool, default=False
        :   If True, spawns an ephemeral `mlflow server` subprocess and tears it down on exit.

    Returns:
    :   Generator[MlflowHandle, None, None]
        :   A handle that proxies `mlflow` and exposes session-bound helpers.

    Raises:
    :   ImportError
        :   If MLflow is not installed.

        FileNotFoundError
        :   If `config.env_file` is provided but missing.

        ValueError
        :   If configuration is invalid.

        RuntimeError
        :   If the server fails to start or readiness is not reached within the timeout.

        TimeoutError
        :   If readiness is not reached within the timeout.

        KeyError
        :   If `experiment_name` is provided and `create_experiment_if_missing=False`
            but the experiment does not exist (strict fail).

    Parameters:
    :   * ****config**** ([**SessionConfig**](scikitplot.mlflow.SessionConfig.html#scikitplot.mlflow.SessionConfig "scikitplot.mlflow._config.SessionConfig") **|** **None**)
        * ****server**** ([**ServerConfig**](scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow._config.ServerConfig") **|** **None**)
        * ****start\_server**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[**MlflowHandle**](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle "scikitplot.mlflow._session.MlflowHandle"), None, None]

    Notes

    Environment is restored exactly on exit.