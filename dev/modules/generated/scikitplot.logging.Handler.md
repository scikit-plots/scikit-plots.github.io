# Handler[#](#handler "Link to this heading")

class scikitplot.logging.Handler(**level=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L919)[#](#scikitplot.logging.Handler "Link to this definition")
:   Handler instances dispatch logging events to specific destinations.

    The base handler class. Acts as a placeholder which defines the Handler
    interface. Handlers can optionally use Formatter instances to format
    records as desired. By default, no formatter is specified; in this case,
    the ‘raw’ message as determined by record.message is logged.

    acquire()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L968)[#](#scikitplot.logging.Handler.acquire "Link to this definition")
    :   Acquire the I/O thread lock.

    addFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L817)[#](#scikitplot.logging.Handler.addFilter "Link to this definition")
    :   Add the specified filter to this handler.

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1048)[#](#scikitplot.logging.Handler.close "Link to this definition")
    :   Tidy up any resources used by the handler.

        This version removes the handler from an internal map of handlers,
        \_handlers, which is used for handler lookup by name. Subclasses
        should ensure that this gets called from overridden close()
        methods.

    createLock()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L958)[#](#scikitplot.logging.Handler.createLock "Link to this definition")
    :   Acquire a thread lock for serializing access to the underlying I/O.

    emit(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1001)[#](#scikitplot.logging.Handler.emit "Link to this definition")
    :   Do whatever it takes to actually log the specified logging record.

        This version is intended to be implemented by subclasses and so
        raises a NotImplementedError.

    filter(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L831)[#](#scikitplot.logging.Handler.filter "Link to this definition")
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

    flush()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1039)[#](#scikitplot.logging.Handler.flush "Link to this definition")
    :   Ensure all logging output has been flushed.

        This version does nothing and is intended to be implemented by
        subclasses.

    format(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L988)[#](#scikitplot.logging.Handler.format "Link to this definition")
    :   Format the specified record.

        If a formatter is set, use it. Otherwise, use the default formatter
        for the module.

    get\_name()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L942)[#](#scikitplot.logging.Handler.get_name "Link to this definition")

    handle(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1011)[#](#scikitplot.logging.Handler.handle "Link to this definition")
    :   Conditionally emit the specified logging record.

        Emission depends on filters which may have been added to the handler.
        Wrap the actual emission of the record with acquisition/release of
        the I/O thread lock.

        Returns an instance of the log record that was emitted
        if it passed all filters, otherwise a false value is returned.

    handleError(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1066)[#](#scikitplot.logging.Handler.handleError "Link to this definition")
    :   Handle errors which occur during an emit() call.

        This method should be called from handlers when an exception is
        encountered during an emit() call. If raiseExceptions is false,
        exceptions get silently ignored. This is what is mostly wanted
        for a logging system - most users will not care about errors in
        the logging system, they are more interested in application errors.
        You could, however, replace this with a custom handler if you wish.
        The record which was being processed is passed in to this method.

    property name[#](#scikitplot.logging.Handler.name "Link to this definition")
    :   This is the name property for StreamHandler.

        Returns:
        :   str | None
            :   The current handler object name if provided, otherwise None.

    release()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L975)[#](#scikitplot.logging.Handler.release "Link to this definition")
    :   Release the I/O thread lock.

    removeFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L824)[#](#scikitplot.logging.Handler.removeFilter "Link to this definition")
    :   Remove the specified filter from this handler.

    setFormatter(**fmt**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L1033)[#](#scikitplot.logging.Handler.setFormatter "Link to this definition")
    :   Set the formatter for this handler.

    setLevel(**level**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L982)[#](#scikitplot.logging.Handler.setLevel "Link to this definition")
    :   Set the logging level of this handler. level must be an int or a str.

    set\_name(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L945)[#](#scikitplot.logging.Handler.set_name "Link to this definition")