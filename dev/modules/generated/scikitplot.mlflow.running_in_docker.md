# running\_in\_docker[#](#running-in-docker "Link to this heading")

scikitplot.mlflow.running\_in\_docker()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/mlflow/_container.py#L19)[#](#scikitplot.mlflow.running_in_docker "Link to this definition")
:   Detect whether the current process is running in a Docker container.

    Returns:
    :   bool
        :   True if the file `/.dockerenv` exists, else False.

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    Notes

    This check is intentionally strict and deterministic:
    - It relies only on `/.dockerenv` (common in Docker containers).
    - It does not attempt cgroup inference or other heuristics.