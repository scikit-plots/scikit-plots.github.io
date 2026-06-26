# session[#](#session "Link to this heading")

scikitplot.mlflow.session(**\***, **config=None**, **server=None**, **start\_server=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/mlflow/_session.py#L316)[#](#scikitplot.mlflow.session "Link to this definition")
:   Create a strict, context-managed MLflow session.

    Parameters:
    :   ****config****SessionConfig or None, default=None
        :   Session-level configuration (URIs, `.env`, extra env, timeouts, defaults).

        ****server****ServerConfig or None, default=None
        :   Server configuration for managed server mode.

        ****start\_server****bool, default=False
        :   If True, spawns an ephemeral `mlflow server` subprocess and tears it down on exit.

    Returns:
    :   Iterator[MlflowHandle]
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
        * ****start\_server**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.14)")[[**MlflowHandle**](scikitplot.mlflow.MlflowHandle.html#scikitplot.mlflow.MlflowHandle "scikitplot.mlflow._session.MlflowHandle")]

    Notes

    Environment is restored exactly on exit.