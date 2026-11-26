# Logger[#](#logger "Link to this heading")

class scikitplot.logging.Logger(**name**, **level=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1482)[#](#scikitplot.logging.Logger "Link to this definition")
:   Instances of the Logger class represent a single logging channel. A
    “logging channel” indicates an area of an application. Exactly how an
    “area” is defined is up to the application developer. Since an
    application can have any number of areas, logging channels are identified
    by a unique string. Application areas can be nested (e.g. an area
    of “input processing” might include sub-areas “read CSV files”, “read
    XLS files” and “read Gnumeric files”). To cater for this natural nesting,
    channel names are organized into a namespace hierarchy where levels are
    separated by periods, much like the Java or Python package namespace. So
    in the instance given above, channel names might be “input” for the upper
    level, and “input.csv”, “input.xls” and “input.gnu” for the sub-levels.
    There is no arbitrary limit to the depth of nesting.

    addFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L817)[#](#scikitplot.logging.Logger.addFilter "Link to this definition")
    :   Add the specified filter to this handler.

    addHandler(**hdlr**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1702)[#](#scikitplot.logging.Logger.addHandler "Link to this definition")
    :   Add the specified handler to this logger.

    callHandlers(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1746)[#](#scikitplot.logging.Logger.callHandlers "Link to this definition")
    :   Pass a record to all relevant handlers.

        Loop through all handlers for this logger and its parents in the
        logger hierarchy. If no handler was found, output a one-off error
        message to sys.stderr. Stop searching up the hierarchy whenever a
        logger with the “propagate” attribute set to zero is found - that
        will be the last logger whose handlers are called.

    critical(**msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1576)[#](#scikitplot.logging.Logger.critical "Link to this definition")
    :   Log ‘msg % args’ with severity ‘CRITICAL’.

        To pass exception information, use the keyword argument exc\_info with
        a true value, e.g.

        logger.critical(“Houston, we have a %s”, “major disaster”, exc\_info=True)

    debug(**msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1517)[#](#scikitplot.logging.Logger.debug "Link to this definition")
    :   Log ‘msg % args’ with severity ‘DEBUG’.

        To pass exception information, use the keyword argument exc\_info with
        a true value, e.g.

        logger.debug(“Houston, we have a %s”, “thorny problem”, exc\_info=True)

    error(**msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1558)[#](#scikitplot.logging.Logger.error "Link to this definition")
    :   Log ‘msg % args’ with severity ‘ERROR’.

        To pass exception information, use the keyword argument exc\_info with
        a true value, e.g.

        logger.error(“Houston, we have a %s”, “major problem”, exc\_info=True)

    exception(**msg**, **\*args**, **exc\_info=True**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1570)[#](#scikitplot.logging.Logger.exception "Link to this definition")
    :   Convenience method for logging an ERROR with exception information.

    fatal(**msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1588)[#](#scikitplot.logging.Logger.fatal "Link to this definition")
    :   Don’t use this method, use critical() instead.

    filter(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L831)[#](#scikitplot.logging.Logger.filter "Link to this definition")
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

    findCaller(**stack\_info=False**, **stacklevel=1**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1611)[#](#scikitplot.logging.Logger.findCaller "Link to this definition")
    :   Find the stack frame of the caller so that we can note the source
        file name, line number and function name.

    getChild(**suffix**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1812)[#](#scikitplot.logging.Logger.getChild "Link to this definition")
    :   Get a logger which is a descendant to this one.

        This is a convenience method, such that

        logging.getLogger(‘abc’).getChild(‘def.ghi’)

        is the same as

        logging.getLogger(‘abc.def.ghi’)

        It’s useful, for example, when the parent logger is named using
        \_\_name\_\_ rather than a literal string.

    getChildren()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1831)[#](#scikitplot.logging.Logger.getChildren "Link to this definition")

    getEffectiveLevel()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1776)[#](#scikitplot.logging.Logger.getEffectiveLevel "Link to this definition")
    :   Get the effective level for this logger.

        Loop through this logger and its parents in the logger hierarchy,
        looking for a non-zero logging level. Return the first one found.

    handle(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1686)[#](#scikitplot.logging.Logger.handle "Link to this definition")
    :   Call the handlers for the specified record.

        This method is used for unpickled records received from a socket, as
        well as those created locally. Logger-level filtering is applied.

    hasHandlers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1724)[#](#scikitplot.logging.Logger.hasHandlers "Link to this definition")
    :   See if this logger has any handlers configured.

        Loop through all handlers for this logger and its parents in the
        logger hierarchy. Return True if a handler was found, else False.
        Stop searching up the hierarchy whenever a logger with the “propagate”
        attribute set to zero is found - that will be the last logger which
        is checked for the existence of handlers.

    info(**msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1529)[#](#scikitplot.logging.Logger.info "Link to this definition")
    :   Log ‘msg % args’ with severity ‘INFO’.

        To pass exception information, use the keyword argument exc\_info with
        a true value, e.g.

        logger.info(“Houston, we have a %s”, “notable problem”, exc\_info=True)

    isEnabledFor(**level**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1790)[#](#scikitplot.logging.Logger.isEnabledFor "Link to this definition")
    :   Is this logger enabled for level ‘level’?

    log(**level**, **msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1594)[#](#scikitplot.logging.Logger.log "Link to this definition")
    :   Log ‘msg % args’ with the integer severity ‘level’.

        To pass exception information, use the keyword argument exc\_info with
        a true value, e.g.

        logger.log(level, “We have a %s”, “mysterious problem”, exc\_info=True)

    makeRecord(**name**, **level**, **fn**, **lno**, **msg**, **args**, **exc\_info**, **func=None**, **extra=None**, **sinfo=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1645)[#](#scikitplot.logging.Logger.makeRecord "Link to this definition")
    :   A factory method which can be overridden in subclasses to create
        specialized LogRecords.

    manager = <logging.Manager object>[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L)[#](#scikitplot.logging.Logger.manager "Link to this definition")

    removeFilter(**filter**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L824)[#](#scikitplot.logging.Logger.removeFilter "Link to this definition")
    :   Remove the specified filter from this handler.

    removeHandler(**hdlr**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1713)[#](#scikitplot.logging.Logger.removeHandler "Link to this definition")
    :   Remove the specified handler from this logger.

    root = <RootLogger root (WARNING)>[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L)[#](#scikitplot.logging.Logger.root "Link to this definition")

    setLevel(**level**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1510)[#](#scikitplot.logging.Logger.setLevel "Link to this definition")
    :   Set the logging level of this logger. level must be an int or a str.

    warn(**msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1553)[#](#scikitplot.logging.Logger.warn "Link to this definition")

    warning(**msg**, **\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/../../logging/__init__.py#L1541)[#](#scikitplot.logging.Logger.warning "Link to this definition")
    :   Log ‘msg % args’ with severity ‘WARNING’.

        To pass exception information, use the keyword argument exc\_info with
        a true value, e.g.

        logger.warning(“Houston, we have a %s”, “bit of a problem”, exc\_info=True)