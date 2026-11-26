# log\_level\_from\_env[#](#log-level-from-env "Link to this heading")

scikitplot.cleanprompt.log\_level\_from\_env(**default='warning'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_logging.py#L332)[#](#scikitplot.cleanprompt.log_level_from_env "Link to this definition")
:   Return the log level named by the environment, or `default`.

    Parameters:
    :   ****default****str, default=’warning’
        :   Used when no variable is set or the value is not a level.

    Returns:
    :   str
        :   A lower-case level name.

    Parameters:
    :   ****default**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Notes

    ****Developer notes.**** An unrecognised value falls back rather than raising.
    These variables are commonly set once for a whole shell, and refusing to
    run because an inherited value is misspelt would be obstructive.

    Examples

    Try it in your browser!
    ```
    >>> log_level_from_env("info")
    'info'

    ```
    Go BackOpen In Tab