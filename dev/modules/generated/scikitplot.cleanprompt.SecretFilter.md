# SecretFilter[#](#secretfilter "Link to this heading")

class scikitplot.cleanprompt.SecretFilter(**secrets=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L176)[#](#scikitplot.cleanprompt.SecretFilter "Link to this definition")
:   Replace known secret surfaces in a record with `REDACTION_MARK`.

    Parameters:
    :   ****secrets****iterable of str, optional
        :   Surfaces to scrub. Short strings are ignored; see the notes.

    Parameters:
    :   ****secrets**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

    Notes

    ****Developer notes.**** Defence in depth, not the primary guarantee. The
    primary guarantee is that no call site passes a secret; this catches the
    call site that eventually will.

    Two deliberate limits.

    **Short surfaces are not scrubbed.** A two-character secret would match
    inside ordinary words and turn every message into noise, which trains
    people to ignore logs. The floor is four characters.

    **Scrubbing happens on the formatted message**, including arguments, because
    a secret passed as a `%s` argument is not in `record.msg`. The record’s
    `args` are cleared afterwards so the handler does not re-interpolate them
    and undo the work.

    Examples

    Try it in your browser!
    ```
    >>> import logging
    >>> filt = SecretFilter(["topsecret@example.com"])
    >>> rec = logging.LogRecord(
    ...     "x", logging.INFO, "f", 1, "found %s", ("topsecret@example.com",), None
    ... )
    >>> filt.filter(rec) and "topsecret" not in rec.getMessage()
    True

    ```
    Go BackOpen In Tab

    MIN\_LENGTH = 4[#](#scikitplot.cleanprompt.SecretFilter.MIN_LENGTH "Link to this definition")
    :   Surfaces shorter than this are not scrubbed. Scrubbing `"Ann"` would
        also rewrite `"Annual"` and `"Planning"` in every record, making logs
        unreadable; this filter is the second line of defence — the submodule
        never passes a value to a logger in the first place.

    add(**secrets**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L224)[#](#scikitplot.cleanprompt.SecretFilter.add "Link to this definition")
    :   Add surfaces to scrub, longest first.

        Parameters:
        :   ****secrets**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   None

    filter(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L251)[#](#scikitplot.cleanprompt.SecretFilter.filter "Link to this definition")
    :   Scrub the record in place. Always returns `True`.

        Notes

        ****Developer notes.**** Three places carry text out of a record, and all
        three are scrubbed: the formatted message; string fields a call site
        attached with `extra=` (which [`JsonFormatter`](scikitplot.cleanprompt.JsonFormatter.html#scikitplot.cleanprompt.JsonFormatter "scikitplot.cleanprompt.JsonFormatter") emits); and the
        rendered traceback, which is formatted here once and stored as
        `exc_text` so no handler renders the raw one afterwards.

        Parameters:
        :   ****record**** ([**LogRecord**](scikitplot.logging.LogRecord.html#scikitplot.logging.LogRecord "logging.LogRecord"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    scrub(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L232)[#](#scikitplot.cleanprompt.SecretFilter.scrub "Link to this definition")
    :   Return `text` with every held surface replaced.

        Parameters:
        :   ****text****str
            :   Any text.

        Returns:
        :   str
            :   The scrubbed text.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")