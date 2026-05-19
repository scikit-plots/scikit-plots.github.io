# mlflow\_version[#](#mlflow-version "Link to this heading")

scikitplot.mlflow.mlflow\_version()[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/mlflow/_utils.py#L97)[#](#scikitplot.mlflow.mlflow_version "Link to this definition")
:   Retrieve the installed MLflow version (if available).

    Returns:
    :   MlflowVersion or None
        :   Parsed version if MLflow is importable and version can be resolved, otherwise None.

    Return type:
    :   [**MlflowVersion**](scikitplot.mlflow.MlflowVersion.html#scikitplot.mlflow.MlflowVersion "scikitplot.mlflow._utils.MlflowVersion") | None

    Notes

    Uses package metadata (`importlib.metadata.version`).
    Prefers module attribute `__version__` to support mocked or vendored MLflow.
    Falls back to package metadata when available.