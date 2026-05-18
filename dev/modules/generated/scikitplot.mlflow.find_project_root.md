# find\_project\_root[#](#find-project-root "Link to this heading")

scikitplot.mlflow.find\_project\_root(**start=None**, **\***, **markers=None**, **config\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/mlflow/_project.py#L284)[#](#scikitplot.mlflow.find_project_root "Link to this definition")
:   Find a project root directory deterministically.

    Parameters:
    :   ****start****pathlib.Path or None, default=None
        :   Starting directory. If None, uses the current working directory.

        ****markers****sequence[str] or None, default=None
        :   Marker files/directories that define a project root. If None, resolved via
            [`get_project_markers`](scikitplot.mlflow.get_project_markers.html#scikitplot.mlflow.get_project_markers "scikitplot.mlflow.get_project_markers") (using `config_path` if provided).

        ****config\_path****pathlib.Path or None, default=None
        :   Optional TOML file to read `[project].markers` from.

    Returns:
    :   pathlib.Path
        :   Project root path.

    Raises:
    :   FileNotFoundError
        :   If no project root can be found by walking to filesystem root.

    Parameters:
    :   * ****start**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****markers**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****config\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    Notes

    Strict rule (no heuristics):
    - Walk upward from `start` until a directory containing any marker is found.
    - If none are found, raise.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_mlflow_thumb.png)

[MLflow](../../auto_examples/mlflow/plot_mlflow.html)

MLflow