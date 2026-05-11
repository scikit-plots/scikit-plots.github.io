# export\_builtin\_config[#](#export-builtin-config "Link to this heading")

scikitplot.mlflow.export\_builtin\_config(**\***, **fmt='toml'**, **dest\_path=None**, **project\_root=None**, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/mlflow/_workflow.py#L133)[#](#scikitplot.mlflow.export_builtin_config "Link to this definition")
:   Export the built-in demo config into the current project.

    Parameters:
    :   ****fmt****{“toml”, “yaml”}, default=”toml”
        :   Which built-in config format to export.

        ****dest\_path****pathlib.Path or None, default=None
        :   Destination config path. If None, uses `<project_root>/configs/mlflow.<fmt>`.

        ****project\_root****pathlib.Path or None, default=None
        :   Project root (used when dest\_path is None).

        ****overwrite****bool, default=False
        :   If False, raise when destination exists.

    Returns:
    :   pathlib.Path
        :   Destination path written.

    Raises:
    :   FileExistsError
        :   If destination exists and overwrite is False.

    Parameters:
    :   * ****fmt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****dest\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****project\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")