# ScikitplotTraceDataException[#](#scikitplottracedataexception "Link to this heading")

exception scikitplot.exceptions.ScikitplotTraceDataException(**error\_code**, **request\_id=None**, **artifact\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/exceptions.py#L530)[#](#scikitplot.exceptions.ScikitplotTraceDataException "Link to this definition")
:   Exception thrown for trace data related errors.

    Parameters:
    :   ****error\_code****str
        :   A string identifier for the error kind. Recognised values:

            `"NOT_FOUND"`
            :   Trace data could not be located.

            `"INVALID_STATE"`
            :   Trace data was found but is corrupted or in an unexpected state.

            Any other value produces a generic error message.

        ****request\_id****str or None, optional
        :   The trace request identifier to include in the error message.
            Takes priority over **artifact\_path** when both are supplied.

        ****artifact\_path****str or None, optional
        :   The artifact path to include in the error message. Used only when
            **request\_id** is `None`.

    Attributes:
    :   ****ctx****str
        :   The context string embedded in the error message. One of
            `"request_id=<value>"`, `"path=<value>"`, or `"unknown"`.

    Parameters:
    :   * ****error\_code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****request\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****artifact\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****Bug fixes applied (three defects present in the original upstream):****

    1. `self.ctx` was never initialised when both **request\_id** and
       **artifact\_path** were `None`, causing `AttributeError` inside
       `super().__init__()`. Now defaults to `"unknown"`.
    2. The second branch was `elif error_code == -1:` — identical to the
       `if` above it, making the corrupted-state path dead code. Replaced
       with the correct string sentinel `"INVALID_STATE"`, matching what
       [`ScikitplotTraceDataCorrupted`](scikitplot.exceptions.ScikitplotTraceDataCorrupted.html#scikitplot.exceptions.ScikitplotTraceDataCorrupted "scikitplot.exceptions.ScikitplotTraceDataCorrupted") actually passes.
    3. [`ScikitplotTraceDataNotFound`](scikitplot.exceptions.ScikitplotTraceDataNotFound.html#scikitplot.exceptions.ScikitplotTraceDataNotFound "scikitplot.exceptions.ScikitplotTraceDataNotFound") passes `"NOT_FOUND"` and
       [`ScikitplotTraceDataCorrupted`](scikitplot.exceptions.ScikitplotTraceDataCorrupted.html#scikitplot.exceptions.ScikitplotTraceDataCorrupted "scikitplot.exceptions.ScikitplotTraceDataCorrupted") passes `"INVALID_STATE"` as
       **error\_code**, but the old comparisons used integer literals (`-1`),
       so no branch ever matched and `super().__init__()` was never called,
       leaving the exception object in an uninitialised state. Comparisons
       now use the correct string sentinels.

    Annotation:
    :   Unrecognized objtype: `exception`

    Parameters:
    :   * ****error\_code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****request\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****artifact\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)