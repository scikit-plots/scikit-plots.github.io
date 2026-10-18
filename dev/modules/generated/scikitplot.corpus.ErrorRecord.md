# ErrorRecord[#](#errorrecord "Link to this heading")

class scikitplot.corpus.ErrorRecord(**code**, **category**, **message**, **stage=None**, **source\_id=None**, **exception\_type=None**, **traceback\_text=None**, **details=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L101)[#](#scikitplot.corpus.ErrorRecord "Link to this definition")
:   One structured, serialisable diagnostic.

    Parameters:
    :   ****code****str
        :   Stable machine-readable identifier, e.g. `"ARCHIVE_MEMBER_REFUSED"`.
            Stable across releases so callers may branch on it.

        ****category****ErrorCategory
        :   Coarse classification, for counting and filtering.

        ****message****str
        :   Human-readable description. Should name the specific subject.

        ****stage****str or None, optional
        :   Pipeline stage that produced the record, e.g. `"read"`, `"embed"`.

        ****source\_id****str or None, optional
        :   Identifier of the affected input: a `doc_id`, path, URL or member name.

        ****exception\_type****str or None, optional
        :   Class **name** of the originating exception, as a string. The exception
            object itself is deliberately not retained – see the module notes.

        ****traceback\_text****str or None, optional
        :   Formatted traceback, attached only when a caller explicitly opts in via
            `include_traceback=True`.

        ****details****dict, optional
        :   Additional JSON-compatible context.

    Parameters:
    :   * ****code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****category**** ([**ErrorCategory**](scikitplot.corpus.ErrorCategory.html#scikitplot.corpus.ErrorCategory "scikitplot.corpus._diagnostics.ErrorCategory"))
        * ****message**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****source\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****exception\_type**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****traceback\_text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****details**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    ****Developer.**** `frozen=True` because a diagnostic describes something that
    already happened; mutating it after the fact would make a build manifest
    disagree with the run it describes.

    Examples

    Try it in your browser!
    ```
    >>> rec = ErrorRecord(
    ...     code="PARSE_FAILED",
    ...     category=ErrorCategory.PARSE,
    ...     message="malformed XML",
    ...     source_id="doc-1",
    ... )
    >>> rec.code
    'PARSE_FAILED'
    >>> sorted(rec.to_dict())[:3]
    ['category', 'code', 'details']

    ```

    A record built from an exception keeps the type name, not the object:

    ```
    >>> try:
    ...     raise ValueError("boom")
    ... except ValueError as exc:
    ...     rec = ErrorRecord.from_exception(
    ...         exc, code="X", category=ErrorCategory.INTERNAL
    ...     )
    >>> rec.exception_type
    'ValueError'
    >>> rec.traceback_text is None
    True

    ```
    Go BackOpen In Tab

    category: [ErrorCategory](scikitplot.corpus.ErrorCategory.html#scikitplot.corpus.ErrorCategory "scikitplot.corpus._diagnostics.ErrorCategory")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L101)[#](#scikitplot.corpus.ErrorRecord.category "Link to this definition")

    code: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L101)[#](#scikitplot.corpus.ErrorRecord.code "Link to this definition")

    details: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L101)[#](#scikitplot.corpus.ErrorRecord.details "Link to this definition")

    exception\_type: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ErrorRecord.exception_type "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L245)[#](#scikitplot.corpus.ErrorRecord.from_dict "Link to this definition")
    :   Rebuild a record from [`to_dict`](#scikitplot.corpus.ErrorRecord.to_dict "scikitplot.corpus.ErrorRecord.to_dict") output.

        Parameters:
        :   ****data****dict
            :   Mapping produced by [`to_dict`](#scikitplot.corpus.ErrorRecord.to_dict "scikitplot.corpus.ErrorRecord.to_dict").

        Returns:
        :   ErrorRecord

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**ErrorRecord**](#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")

    classmethod from\_exception(**exc**, **\***, **code**, **category**, **stage=None**, **source\_id=None**, **include\_traceback=False**, **details=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L169)[#](#scikitplot.corpus.ErrorRecord.from_exception "Link to this definition")
    :   Build a record from `exc` ****without retaining the exception****.

        Parameters:
        :   ****exc****BaseException
            :   The originating exception. Only its type name and `str()` are kept.

            ****code****str
            :   Stable machine-readable identifier.

            ****category****ErrorCategory or str
            :   Coarse classification.

            ****stage****str or None, optional
            :   Pipeline stage.

            ****source\_id****str or None, optional
            :   Identifier of the affected input.

            ****include\_traceback****bool, optional
            :   When `True`, format and attach the traceback as text. Default
                `False`: a formatted traceback is a string and therefore safe to
                retain, but it is verbose, so it is opt-in.

            ****details****dict or None, optional
            :   Additional JSON-compatible context.

        Returns:
        :   ErrorRecord
            :   A record holding no reference to `exc` or its frames.

        Parameters:
        :   * ****exc**** ([**BaseException**](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)"))
            * ****code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****category**** ([**ErrorCategory**](scikitplot.corpus.ErrorCategory.html#scikitplot.corpus.ErrorCategory "scikitplot.corpus._diagnostics.ErrorCategory") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****include\_traceback**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****details**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**ErrorRecord**](#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")

        Notes

        ****Developer.**** This method is the reason the 139x retention measured in
        F-R11-02 does not recur: the exception is read and dropped inside this
        call, so no frame locals survive it.

    message: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L101)[#](#scikitplot.corpus.ErrorRecord.message "Link to this definition")

    source\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ErrorRecord.source_id "Link to this definition")

    stage: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ErrorRecord.stage "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_diagnostics.py#L227)[#](#scikitplot.corpus.ErrorRecord.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Returns:
        :   dict
            :   All fields, with [`category`](#scikitplot.corpus.ErrorRecord.category "scikitplot.corpus.ErrorRecord.category") rendered as its string value.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> rec = ErrorRecord(code="C", category=ErrorCategory.SOURCE, message="m")
        >>> _ = json.dumps(rec.to_dict())

        ```
        Go BackOpen In Tab

    traceback\_text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ErrorRecord.traceback_text "Link to this definition")