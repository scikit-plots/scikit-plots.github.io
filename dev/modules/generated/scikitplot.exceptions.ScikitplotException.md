# ScikitplotException[#](#scikitplotexception "Link to this heading")

exception scikitplot.exceptions.ScikitplotException(**message**, **error\_code=0**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/exceptions.py#L369)[#](#scikitplot.exceptions.ScikitplotException "Link to this definition")
:   Generic exception thrown to surface failure information about external-facing operations.

    The error message associated with this exception may be exposed to clients
    in HTTP responses for debugging purposes. If the error text is sensitive,
    raise a generic [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)") object instead.

    Parameters:
    :   ****message****str or Exception
        :   The message or exception describing the error that occurred. Converted
            to `str` unconditionally. Included in the serialised JSON payload.

        ****error\_code****int or str, optional
        :   An error code for the error that occurred. May be an integer
            (legacy convention) or a string sentinel such as `"NOT_FOUND"`.
            Defaults to `0`. Included in the serialised JSON payload.

        ****\*\*kwargs****
        :   Additional key-value pairs included in the serialised JSON payload.
            Values must be JSON-serialisable; non-serialisable values are
            coerced to their `str` representation during serialisation.

    Attributes:
    :   ****error\_code****int or str
        :   The error code as supplied.

        ****message****str
        :   The string form of the supplied message.

        ****json\_kwargs****dict
        :   The extra keyword arguments to include in the JSON payload.

    Notes

    ****User note**** – catch this class (or its subclasses) when you need to
    distinguish scikit-plots operational errors from other [`Exception`](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)")
    types.

    ****Developer note**** – `error_code` is stored verbatim; do not apply
    integer-only logic elsewhere in the codebase without first checking its
    type. The `try/except` that previously guarded the attribute assignment
    was dead code (attribute assignment never raises [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.14)") or
    [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.14)")) and has been removed.

    Annotation:
    :   Unrecognized objtype: `exception`