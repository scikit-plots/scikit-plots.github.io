# parse\_dotenv[#](#parse-dotenv "Link to this heading")

scikitplot.mlflow.parse\_dotenv(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/mlflow/_env.py#L69)[#](#scikitplot.mlflow.parse_dotenv "Link to this definition")
:   Parse a minimal `.env` file containing KEY=VALUE assignments.

    Parameters:
    :   ****path****str
        :   Path to the `.env` file.

    Returns:
    :   dict[str, str]
        :   Parsed key-value pairs.

    Raises:
    :   FileNotFoundError
        :   If the file does not exist.

    Parameters:
    :   ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    Notes

    Strict behavior:
    - Empty lines and comments beginning with `#` are ignored
    - No shell expansion is performed
    - Optional leading [`](#id1)export ` is supported
    - Surrounding matching-pair quotes are stripped from values

    > (`"value"` → `value`, `'value'` → `value`,
    > but `"value'` is left unchanged — mismatched quotes are not stripped)

    * Invalid lines (missing `=`) are ignored