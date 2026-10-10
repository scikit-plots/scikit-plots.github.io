# summary\_table[#](#summary-table "Link to this heading")

scikitplot.cleanprompt.summary\_table(**result**, **reveal=False**, **color=None**, **stream=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_render.py#L138)[#](#scikitplot.cleanprompt.summary_table "Link to this definition")
:   Render a table of what was redacted.

    Parameters:
    :   ****result****RedactionResult
        :   The pass to describe.

        ****reveal****bool, default=False
        :   When `True`, include the original values. Off by default: a summary is
            the thing most likely to be pasted into a ticket or a log.

        ****color****bool, optional
        :   Explicit override; see [`should_colorize`](scikitplot.cleanprompt.should_colorize.html#scikitplot.cleanprompt.should_colorize "scikitplot.cleanprompt.should_colorize").

        ****stream****file-like, optional
        :   Destination used to detect a terminal.

    Returns:
    :   str
        :   A plain-text table, or a note when nothing was redacted.

    Parameters:
    :   * ****result**** (**RedactionResult**)
        * ****reveal**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****color**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****stream**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Notes

    ****Developer notes.**** `reveal` defaults to `False` because upstream
    printed every secret on one line unconditionally
    (`"Removed sensitive information: " + ", ".join(...)`), which puts personal
    data into terminal scrollback, shell transcripts and any captured log.

    Examples

    Try it in your browser!
    ```
    >>> from ._engine import Redactor
    >>> print(summary_table(Redactor().redact("no secrets here"), color=False))
    no sensitive values detected

    ```
    Go BackOpen In Tab