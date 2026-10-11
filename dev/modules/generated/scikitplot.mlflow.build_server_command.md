# build\_server\_command[#](#build-server-command "Link to this heading")

scikitplot.mlflow.build\_server\_command(**cfg**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/mlflow/_server.py#L180)[#](#scikitplot.mlflow.build_server_command "Link to this definition")
:   Build a deterministic `mlflow server` command.

    Parameters:
    :   ****cfg****ServerConfig
        :   Server configuration.

    Returns:
    :   list[str]
        :   Command list suitable for `subprocess.Popen`.

    Parameters:
    :   ****cfg**** ([**ServerConfig**](scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow._config.ServerConfig"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Notes

    Uses `sys.executable -m mlflow` to ensure the server runs in the same environment.