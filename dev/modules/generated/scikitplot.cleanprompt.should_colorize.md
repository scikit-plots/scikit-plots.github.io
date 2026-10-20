# should\_colorize[#](#should-colorize "Link to this heading")

scikitplot.cleanprompt.should\_colorize(**stream=None**, **color=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_render.py#L57)[#](#scikitplot.cleanprompt.should_colorize "Link to this definition")
:   Decide whether to emit terminal colour.

    Parameters:
    :   ****stream****file-like, optional
        :   Destination. Defaults to [`sys.stdout`](https://docs.python.org/3/library/sys.html#sys.stdout "(in Python v3.15)").

        ****color****bool, optional
        :   Explicit override. `True` or `False` decides immediately.

    Returns:
    :   bool
        :   Whether colour should be emitted.

    Parameters:
    :   * ****stream**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**)
        * ****color**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    Return type:
    :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    Notes

    ****Developer notes.**** `NO_COLOR` is honoured whenever it is set to any
    value, per the convention at <<https://no-color.org>>. A stream without
    `isatty` — a pipe, a file, a captured buffer in a test — is treated as
    not a terminal.

    Examples

    Try it in your browser!
    ```
    >>> should_colorize(color=False)
    False

    ```
    Go BackOpen In Tab