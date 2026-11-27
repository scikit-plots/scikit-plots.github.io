# NullHandler[#](#nullhandler "Link to this heading")

class scikitplot.logging.NullHandler(**level=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L2285)[#](#scikitplot.logging.NullHandler "Link to this definition")
:   This handler does nothing. It’s intended to be used to avoid the
    “No handlers could be found for logger XXX” one-off warning. This is
    important for library code, which may contain code to log events. If a user
    of the library does not configure logging, the one-off warning might be
    produced; to avoid this, the library developer simply needs to instantiate
    a NullHandler and add it to the top-level logger of the library module or
    package.

    acquire()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L968)[#](#scikitplot.logging.NullHandler.acquire "Link to this definition")
    :   Acquire the I/O thread lock.

    addFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L817)[#](#scikitplot.logging.NullHandler.addFilter "Link to this definition")
    :   Add the specified filter to this handler.

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1048)[#](#scikitplot.logging.NullHandler.close "Link to this definition")
    :   Tidy up any resources used by the handler.

        This version removes the handler from an internal map of handlers,
        \_handlers, which is used for handler lookup by name. Subclasses
        should ensure that this gets called from overridden close()
        methods.

    createLock()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L2301)[#](#scikitplot.logging.NullHandler.createLock "Link to this definition")
    :   Acquire a thread lock for serializing access to the underlying I/O.

    emit(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L2298)[#](#scikitplot.logging.NullHandler.emit "Link to this definition")
    :   Stub.

    filter(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L831)[#](#scikitplot.logging.NullHandler.filter "Link to this definition")
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

    flush()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1039)[#](#scikitplot.logging.NullHandler.flush "Link to this definition")
    :   Ensure all logging output has been flushed.

        This version does nothing and is intended to be implemented by
        subclasses.

    format(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L988)[#](#scikitplot.logging.NullHandler.format "Link to this definition")
    :   Format the specified record.

        If a formatter is set, use it. Otherwise, use the default formatter
        for the module.

    get\_name()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L942)[#](#scikitplot.logging.NullHandler.get_name "Link to this definition")

    handle(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L2295)[#](#scikitplot.logging.NullHandler.handle "Link to this definition")
    :   Stub.

    handleError(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1066)[#](#scikitplot.logging.NullHandler.handleError "Link to this definition")
    :   Handle errors which occur during an emit() call.

        This method should be called from handlers when an exception is
        encountered during an emit() call. If raiseExceptions is false,
        exceptions get silently ignored. This is what is mostly wanted
        for a logging system - most users will not care about errors in
        the logging system, they are more interested in application errors.
        You could, however, replace this with a custom handler if you wish.
        The record which was being processed is passed in to this method.

    property name[#](#scikitplot.logging.NullHandler.name "Link to this definition")
    :   This is the name property for StreamHandler.

        Returns:
        :   str | None
            :   The current handler object name if provided, otherwise None.

    release()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L975)[#](#scikitplot.logging.NullHandler.release "Link to this definition")
    :   Release the I/O thread lock.

    removeFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L824)[#](#scikitplot.logging.NullHandler.removeFilter "Link to this definition")
    :   Remove the specified filter from this handler.

    setFormatter(**fmt**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1033)[#](#scikitplot.logging.NullHandler.setFormatter "Link to this definition")
    :   Set the formatter for this handler.

    setLevel(**level**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L982)[#](#scikitplot.logging.NullHandler.setLevel "Link to this definition")
    :   Set the logging level of this handler. level must be an int or a str.

    set\_name(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L945)[#](#scikitplot.logging.NullHandler.set_name "Link to this definition")