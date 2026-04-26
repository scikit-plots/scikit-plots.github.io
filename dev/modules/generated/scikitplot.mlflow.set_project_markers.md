# set\_project\_markers[#](#set-project-markers "Link to this heading")

scikitplot.mlflow.set\_project\_markers(**markers**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/mlflow/_project.py#L236)[#](#scikitplot.mlflow.set_project_markers "Link to this definition")
:   Set the module default markers.

    Parameters:
    :   ****markers****sequence[str] or None
        :   New default markers. If None, resets to [`DEFAULT_PROJECT_MARKERS`](scikitplot.mlflow.DEFAULT_PROJECT_MARKERS.html#scikitplot.mlflow.DEFAULT_PROJECT_MARKERS "scikitplot.mlflow.DEFAULT_PROJECT_MARKERS").

    Parameters:
    :   ****markers**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   None

    Notes

    This affects only calls that do not pass `markers=` and do not override via config/env.
    Prefer the context manager [`project_markers`](scikitplot.mlflow.project_markers.html#scikitplot.mlflow.project_markers "scikitplot.mlflow.project_markers") in automation pipelines and tests.