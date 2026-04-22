# AlwaysStdErrHandler[#](#alwaysstderrhandler "Link to this heading")

class scikitplot.logging.AlwaysStdErrHandler(**stream=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/logging.py#L916)[#](#scikitplot.logging.AlwaysStdErrHandler "Link to this definition")
:   A custom logging handler inherited from [`StreamHandler`](https://docs.python.org/3/library/logging.handlers.html#logging.StreamHandler "(in Python v3.14)").

    That enforces the use of a specific output stream: either standard error
    (`sys.stderr`) or standard output (`sys.stdout`).

    This handler is particularly useful for environments where log streams must
    be explicitly directed, such as Jupyter notebooks or specialized logging setups.

    Parameters:
    :   ****stream****{‘stdout’, ‘stderr’} or IO[str], optional
        :   If a string is provided, selects [`sys.stdout`](https://docs.python.org/3/library/sys.html#sys.stdout "(in Python v3.14)") or [`sys.stderr`](https://docs.python.org/3/library/sys.html#sys.stderr "(in Python v3.14)").
            If a file-like object is provided, it will be used directly.
            Default is `'stderr'` (or `'stdout'` when detected in Jupyter).

    Raises:
    :   ValueError
        :   If `stream` is a string not in `{'stdout', 'stderr'}`.

    Parameters:
    :   ****stream**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **any** **|** **None**)

    > **See also**
    > [`logging.StreamHandler`](https://docs.python.org/3/library/logging.handlers.html#logging.StreamHandler "(in Python v3.14)")
    :   Writes logging records, appropriately formatted, to a stream. This class does not close the stream, as `sys.stdout` or `sys.stderr` may be used.

    `_is_jupyter_notebook`
    :   Determines if the environment is a Jupyter notebook. For define `use_stderr`.

    Notes

    Historically, this handler tried to default to stderr except in notebooks.
    This behavior is preserved through the default arguments in the base class.

    acquire()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L922)[#](#scikitplot.logging.AlwaysStdErrHandler.acquire "Link to this definition")
    :   Acquire the I/O thread lock.

    addFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L801)[#](#scikitplot.logging.AlwaysStdErrHandler.addFilter "Link to this definition")
    :   Add the specified filter to this handler.

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L998)[#](#scikitplot.logging.AlwaysStdErrHandler.close "Link to this definition")
    :   Tidy up any resources used by the handler.

        This version removes the handler from an internal map of handlers,
        \_handlers, which is used for handler lookup by name. Subclasses
        should ensure that this gets called from overridden close()
        methods.

    createLock()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L912)[#](#scikitplot.logging.AlwaysStdErrHandler.createLock "Link to this definition")
    :   Acquire a thread lock for serializing access to the underlying I/O.

    emit(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L1098)[#](#scikitplot.logging.AlwaysStdErrHandler.emit "Link to this definition")
    :   Emit a record.

        If a formatter is specified, it is used to format the record.
        The record is then written to the stream with a trailing newline. If
        exception information is present, it is formatted using
        traceback.print\_exception and appended to the stream. If the stream
        has an ‘encoding’ attribute, it is used to determine how to do the
        output to the stream.

    filter(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L815)[#](#scikitplot.logging.AlwaysStdErrHandler.filter "Link to this definition")
    :   Determine if a record is loggable by consulting all the filters.

        The default is to allow the record to be logged; any filter can veto
        this and the record is then dropped. Returns a zero value if a record
        is to be dropped, else non-zero.

        Changed in version 3.2: Allow filters to be just callables.

    flush()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L1087)[#](#scikitplot.logging.AlwaysStdErrHandler.flush "Link to this definition")
    :   Flushes the stream.

    format(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L942)[#](#scikitplot.logging.AlwaysStdErrHandler.format "Link to this definition")
    :   Format the specified record.

        If a formatter is set, use it. Otherwise, use the default formatter
        for the module.

    get\_name()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L896)[#](#scikitplot.logging.AlwaysStdErrHandler.get_name "Link to this definition")

    handle(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L965)[#](#scikitplot.logging.AlwaysStdErrHandler.handle "Link to this definition")
    :   Conditionally emit the specified logging record.

        Emission depends on filters which may have been added to the handler.
        Wrap the actual emission of the record with acquisition/release of
        the I/O thread lock. Returns whether the filter passed the record for
        emission.

    handleError(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L1016)[#](#scikitplot.logging.AlwaysStdErrHandler.handleError "Link to this definition")
    :   Handle errors which occur during an emit() call.

        This method should be called from handlers when an exception is
        encountered during an emit() call. If raiseExceptions is false,
        exceptions get silently ignored. This is what is mostly wanted
        for a logging system - most users will not care about errors in
        the logging system, they are more interested in application errors.
        You could, however, replace this with a custom handler if you wish.
        The record which was being processed is passed in to this method.

    property name[#](#scikitplot.logging.AlwaysStdErrHandler.name "Link to this definition")
    :   This is the name property for StreamHandler.

        Returns:
        :   str | None
            :   The current handler object name if provided, otherwise None.

    release()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L929)[#](#scikitplot.logging.AlwaysStdErrHandler.release "Link to this definition")
    :   Release the I/O thread lock.

    removeFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L808)[#](#scikitplot.logging.AlwaysStdErrHandler.removeFilter "Link to this definition")
    :   Remove the specified filter from this handler.

    setFormatter(**fmt**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L983)[#](#scikitplot.logging.AlwaysStdErrHandler.setFormatter "Link to this definition")
    :   Set the formatter for this handler.

    setLevel(**level**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L936)[#](#scikitplot.logging.AlwaysStdErrHandler.setLevel "Link to this definition")
    :   Set the logging level of this handler. level must be an int or a str.

    setStream(**stream**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L1120)[#](#scikitplot.logging.AlwaysStdErrHandler.setStream "Link to this definition")
    :   Sets the StreamHandler’s stream to the specified value,
        if it is different.

        Returns the old stream, if the stream was changed, or None
        if it wasn’t.

    set\_name(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/../../logging/__init__.py#L899)[#](#scikitplot.logging.AlwaysStdErrHandler.set_name "Link to this definition")

    property stream: IO[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][#](#scikitplot.logging.AlwaysStdErrHandler.stream "Link to this definition")
    :   Get the current logging stream.

        Returns:
        :   IO[str]
            :   The current stream object (`sys.stderr` or `sys.stdout`).

    terminator = '\n'[#](#scikitplot.logging.AlwaysStdErrHandler.terminator "Link to this definition")