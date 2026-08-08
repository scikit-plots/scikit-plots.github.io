# apply\_env[#](#apply-env "Link to this heading")

scikitplot.mlflow.apply\_env(**\***, **env\_file**, **extra\_env**, **set\_defaults\_only=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/mlflow/_env.py#L123)[#](#scikitplot.mlflow.apply_env "Link to this definition")
:   Apply `.env` and explicit overrides to `os.environ`.

    Parameters:
    :   ****env\_file****str or None
        :   Optional `.env` path. If provided, values are loaded into `os.environ`.

        ****extra\_env****Mapping[str, str] or None
        :   Explicit key-value overrides to apply.

        ****set\_defaults\_only****bool, default=True
        :   If True, `.env` values are applied only when a key is missing from `os.environ`.

    Raises:
    :   FileNotFoundError
        :   If env\_file is provided but does not exist.

    Parameters:
    :   * ****env\_file**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****extra\_env**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****set\_defaults\_only**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   None