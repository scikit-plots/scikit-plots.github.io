# project\_markers[#](#project-markers "Link to this heading")

scikitplot.mlflow.project\_markers(**markers**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/mlflow/_project.py#L256)[#](#scikitplot.mlflow.project_markers "Link to this definition")
:   Temporarily override module default markers for a block.

    Parameters:
    :   ****markers****sequence[str] or None
        :   Temporary markers. If None, resets to [`DEFAULT_PROJECT_MARKERS`](scikitplot.mlflow.DEFAULT_PROJECT_MARKERS.html#scikitplot.mlflow.DEFAULT_PROJECT_MARKERS "scikitplot.mlflow.DEFAULT_PROJECT_MARKERS") for the block.

    Yields:
    :   None

    Parameters:
    :   ****markers**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.14)")[None]

    Notes

    This is deterministic and exception-safe. It is the preferred way to alter marker behavior
    for a single workflow step (train/hpo/predict) without mutating global state permanently.