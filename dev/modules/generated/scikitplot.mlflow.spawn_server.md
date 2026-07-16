# spawn\_server[#](#spawn-server "Link to this heading")

scikitplot.mlflow.spawn\_server(**cfg**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/mlflow/_server.py#L309)[#](#scikitplot.mlflow.spawn_server "Link to this definition")
:   Spawn an MLflow server subprocess.

    Parameters:
    :   ****cfg****ServerConfig
        :   Server configuration.

    Returns:
    :   SpawnedServer
        :   Handle to the spawned server.

    Raises:
    :   MlflowServerStartError
        :   If the configured port is not free or the process fails to start.

    Parameters:
    :   ****cfg**** ([**ServerConfig**](scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow._config.ServerConfig"))

    Return type:
    :   [**SpawnedServer**](scikitplot.mlflow.SpawnedServer.html#scikitplot.mlflow.SpawnedServer "scikitplot.mlflow._server.SpawnedServer")