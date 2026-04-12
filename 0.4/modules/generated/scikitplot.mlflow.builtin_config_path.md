# builtin\_config\_path[#](#builtin-config-path "Link to this heading")

scikitplot.mlflow.builtin\_config\_path(**fmt='toml'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/mlflow/_workflow.py#L78)[#](#scikitplot.mlflow.builtin_config_path "Link to this definition")
:   Return the path to the built-in demo config shipped with the package.

    Parameters:
    :   ****fmt****{“toml”, “yaml”}, default=”toml”
        :   Which demo config to return.

    Returns:
    :   pathlib.Path
        :   Path to the built-in config file.

    Raises:
    :   ValueError
        :   If `fmt` is not supported.

        FileNotFoundError
        :   If the built-in config file is missing (packaging error).

    Parameters:
    :   ****fmt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")