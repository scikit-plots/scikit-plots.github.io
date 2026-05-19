# SpawnedServer[#](#spawnedserver "Link to this heading")

class scikitplot.mlflow.SpawnedServer(**\_process**, **\_command**, **\_started\_at**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/mlflow/_server.py#L202)[#](#scikitplot.mlflow.SpawnedServer "Link to this definition")
:   Spawned MLflow server process state.

    Attributes:
    :   [`process`](#scikitplot.mlflow.SpawnedServer.process "scikitplot.mlflow.SpawnedServer.process")subprocess.Popen
        :   The underlying server process.

        [`command`](#scikitplot.mlflow.SpawnedServer.command "scikitplot.mlflow.SpawnedServer.command")list[str]
        :   The command used to launch the server.

    Parameters:
    :   * ****\_process**** ([**Popen**](https://docs.python.org/3/library/subprocess.html#subprocess.Popen "(in Python v3.14)"))
        * ****\_command**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****\_started\_at**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    property command: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][#](#scikitplot.mlflow.SpawnedServer.command "Link to this definition")
    :   The command used to launch the server.

    property process: [Popen](https://docs.python.org/3/library/subprocess.html#subprocess.Popen "(in Python v3.14)")[#](#scikitplot.mlflow.SpawnedServer.process "Link to this definition")
    :   The underlying server process.

    read\_all\_output()[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/mlflow/_server.py#L234)[#](#scikitplot.mlflow.SpawnedServer.read_all_output "Link to this definition")
    :   Read all remaining captured stdout (best-effort).

        Returns:
        :   str
            :   Captured output text, or an empty string.

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    property started\_at: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[#](#scikitplot.mlflow.SpawnedServer.started_at "Link to this definition")
    :   Timestamp (time.time()) when the server was started.

    terminate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/mlflow/_server.py#L250)[#](#scikitplot.mlflow.SpawnedServer.terminate "Link to this definition")
    :   Terminate the spawned process deterministically.

        Returns:
        :   None

        Return type:
        :   None

        Notes

        Cross-platform strict teardown:
        - POSIX: terminates the whole process group (start\_new\_session=True).
        - Windows: attempts CTRL\_BREAK\_EVENT for process group, then terminate/kill.