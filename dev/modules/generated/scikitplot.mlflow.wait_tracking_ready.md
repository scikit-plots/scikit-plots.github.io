# wait\_tracking\_ready[#](#wait-tracking-ready "Link to this heading")

scikitplot.mlflow.wait\_tracking\_ready(**tracking\_uri**, **timeout\_s**, **\***, **server=None**, **poll\_interval\_s=0.2**, **request\_timeout\_s=2.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_readiness.py#L61)[#](#scikitplot.mlflow.wait_tracking_ready "Link to this definition")
:   Wait until the MLflow tracking REST API responds.

    Parameters:
    :   ****tracking\_uri****str
        :   MLflow tracking URI, e.g., `"http://127.0.0.1:5000"`.

        ****timeout\_s****float
        :   Maximum seconds to wait.

        ****server****SpawnedServer or None, default=None
        :   If provided, and the server process exits while waiting, raise immediately
            with captured output.

        ****poll\_interval\_s****float, default=0.2
        :   Seconds to sleep between readiness check attempts.
            Callers may lower this for tests or raise it for slow environments.

        ****request\_timeout\_s****float, default=2.0
        :   Per-request HTTP timeout in seconds.

    Returns:
    :   None

    Raises:
    :   ValueError
        :   If `tracking_uri` is not an HTTP(S) URI.

        RuntimeError
        :   If the server exits before becoming ready.

        TimeoutError
        :   If readiness is not reached within `timeout_s`.

    Parameters:
    :   * ****tracking\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****server**** ([**SpawnedServer**](scikitplot.mlflow.SpawnedServer.html#scikitplot.mlflow.SpawnedServer "scikitplot.mlflow._server.SpawnedServer") **|** **None**)
        * ****poll\_interval\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****request\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   None

    Notes

    MLflow has evolved REST endpoints over time and can be deployed behind different
    server stacks. This function uses a deterministic two-step check:

    1. `POST /api/2.0/mlflow/experiments/search` (stable modern endpoint)
    2. If the server responds with 404/405, fallback to
       `GET /api/2.0/mlflow/experiments/list`

    Any 200 response from either endpoint is considered “ready”.
    Debug-level log lines are emitted on each attempt to support diagnostics
    in slow or broken-pipe environments.