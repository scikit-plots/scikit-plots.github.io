# patch\_experiment\_name\_in\_toml[#](#patch-experiment-name-in-toml "Link to this heading")

scikitplot.mlflow.patch\_experiment\_name\_in\_toml(**path**, **\***, **experiment\_name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/mlflow/_workflow.py#L183)[#](#scikitplot.mlflow.patch_experiment_name_in_toml "Link to this definition")
:   Patch `experiment_name = ...` in a TOML config deterministically.

    Parameters:
    :   ****path****pathlib.Path
        :   TOML config path.

        ****experiment\_name****str
        :   New experiment name.

    Raises:
    :   ValueError
        :   If the TOML file does not contain an experiment\_name assignment.

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****experiment\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   None