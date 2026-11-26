# StreamHandler[#](#streamhandler "Link to this heading")

class scikitplot.logging.StreamHandler(**stream=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1117)[#](#scikitplot.logging.StreamHandler "Link to this definition")
:   A handler class which writes logging records, appropriately formatted,
    to a stream. Note that this class does not close the stream, as
    sys.stdout or sys.stderr may be used.

    acquire()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L968)[#](#scikitplot.logging.StreamHandler.acquire "Link to this definition")
    :   Acquire the I/O thread lock.

    addFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L817)[#](#scikitplot.logging.StreamHandler.addFilter "Link to this definition")
    :   Add the specified filter to this handler.

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1048)[#](#scikitplot.logging.StreamHandler.close "Link to this definition")
    :   Tidy up any resources used by the handler.

        This version removes the handler from an internal map of handlers,
        \_handlers, which is used for handler lookup by name. Subclasses
        should ensure that this gets called from overridden close()
        methods.

    createLock()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L958)[#](#scikitplot.logging.StreamHandler.createLock "Link to this definition")
    :   Acquire a thread lock for serializing access to the underlying I/O.

    emit(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1148)[#](#scikitplot.logging.StreamHandler.emit "Link to this definition")
    :   Emit a record.

        If a formatter is specified, it is used to format the record.
        The record is then written to the stream with a trailing newline. If
        exception information is present, it is formatted using
        traceback.print\_exception and appended to the stream. If the stream
        has an ‘encoding’ attribute, it is used to determine how to do the
        output to the stream.

    filter(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L831)[#](#scikitplot.logging.StreamHandler.filter "Link to this definition")
    :   Determine if a record is loggable by consulting all the filters.

        The default is to allow the record to be logged; any filter can veto
        this by returning a false value.
        If a filter attached to a handler returns a log record instance,
        then that instance is used in place of the original log record in
        any further processing of the event by that handler.
        If a filter returns any other true value, the original log record
        is used in any further processing of the event by that handler.

        If none of the filters return false values, this method returns
        a log record.
        If any of the filters return a false value, this method returns
        a false value.

        Changed in version 3.2: Allow filters to be just callables.

        Changed in version 3.12: Allow filters to return a LogRecord instead of
        modifying it in place.

    flush()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1137)[#](#scikitplot.logging.StreamHandler.flush "Link to this definition")
    :   Flushes the stream.

    format(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L988)[#](#scikitplot.logging.StreamHandler.format "Link to this definition")
    :   Format the specified record.

        If a formatter is set, use it. Otherwise, use the default formatter
        for the module.

    get\_name()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L942)[#](#scikitplot.logging.StreamHandler.get_name "Link to this definition")

    handle(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1011)[#](#scikitplot.logging.StreamHandler.handle "Link to this definition")
    :   Conditionally emit the specified logging record.

        Emission depends on filters which may have been added to the handler.
        Wrap the actual emission of the record with acquisition/release of
        the I/O thread lock.

        Returns an instance of the log record that was emitted
        if it passed all filters, otherwise a false value is returned.

    handleError(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1066)[#](#scikitplot.logging.StreamHandler.handleError "Link to this definition")
    :   Handle errors which occur during an emit() call.

        This method should be called from handlers when an exception is
        encountered during an emit() call. If raiseExceptions is false,
        exceptions get silently ignored. This is what is mostly wanted
        for a logging system - most users will not care about errors in
        the logging system, they are more interested in application errors.
        You could, however, replace this with a custom handler if you wish.
        The record which was being processed is passed in to this method.

    property name[#](#scikitplot.logging.StreamHandler.name "Link to this definition")
    :   This is the name property for StreamHandler.

        Returns:
        :   str | None
            :   The current handler object name if provided, otherwise None.

    release()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L975)[#](#scikitplot.logging.StreamHandler.release "Link to this definition")
    :   Release the I/O thread lock.

    removeFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L824)[#](#scikitplot.logging.StreamHandler.removeFilter "Link to this definition")
    :   Remove the specified filter from this handler.

    setFormatter(**fmt**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1033)[#](#scikitplot.logging.StreamHandler.setFormatter "Link to this definition")
    :   Set the formatter for this handler.

    setLevel(**level**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L982)[#](#scikitplot.logging.StreamHandler.setLevel "Link to this definition")
    :   Set the logging level of this handler. level must be an int or a str.

    setStream(**stream**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L1170)[#](#scikitplot.logging.StreamHandler.setStream "Link to this definition")
    :   Sets the StreamHandler’s stream to the specified value,
        if it is different.

        Returns the old stream, if the stream was changed, or None
        if it wasn’t.

    set\_name(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L945)[#](#scikitplot.logging.StreamHandler.set_name "Link to this definition")

    terminator = '\n'[#](#scikitplot.logging.StreamHandler.terminator "Link to this definition")