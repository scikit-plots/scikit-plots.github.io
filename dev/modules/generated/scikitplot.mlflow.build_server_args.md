# build\_server\_args[#](#build-server-args "Link to this heading")

scikitplot.mlflow.build\_server\_args(**cfg**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/mlflow/_server.py#L70)[#](#scikitplot.mlflow.build_server_args "Link to this definition")
:   Build the CLI args for `mlflow server` from a ServerConfig.

    Parameters:
    :   ****cfg****ServerConfig
        :   Server configuration.

    Returns:
    :   list[str]
        :   CLI arguments (excluding `python -m mlflow server` prefix).

    Raises:
    :   ValueError
        :   If cfg violates generic constraints.

    Parameters:
    :   ****cfg**** ([**ServerConfig**](scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow._config.ServerConfig"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]