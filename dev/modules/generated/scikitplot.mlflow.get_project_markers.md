# get\_project\_markers[#](#get-project-markers "Link to this heading")

scikitplot.mlflow.get\_project\_markers(**\***, **config\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/mlflow/_project.py#L206)[#](#scikitplot.mlflow.get_project_markers "Link to this definition")
:   Resolve project markers deterministically.

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