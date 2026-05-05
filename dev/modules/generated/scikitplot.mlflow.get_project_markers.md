# get\_project\_markers[#](#get-project-markers "Link to this heading")

scikitplot.mlflow.get\_project\_markers(**\***, **config\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_project.py#L206)[#](#scikitplot.mlflow.get_project_markers "Link to this definition")
:   Resolve project markers deterministically.

    Resolution order:

    1. If `config_path` provided and contains `[project].markers`, use that.
    2. Else if env var `SCIKITPLOT_PROJECT_MARKERS` is set, use that (strict JSON list).
    3. Else use current module default set via [`set_project_markers`](scikitplot.mlflow.set_project_markers.html#scikitplot.mlflow.set_project_markers "scikitplot.mlflow.set_project_markers") (or built-in default).

    Parameters:
    :   ****config\_path****pathlib.Path or None, default=None
        :   Optional TOML file to read `[project].markers` from.

    Returns:
    :   tuple[str, …]
        :   Effective marker tuple.

    Parameters:
    :   ****config\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), …]