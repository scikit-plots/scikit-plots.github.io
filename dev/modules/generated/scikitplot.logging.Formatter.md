# Formatter[#](#formatter "Link to this heading")

class scikitplot.logging.Formatter(**fmt=None**, **datefmt=None**, **style='%'**, **validate=True**, **\***, **defaults=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L546)[#](#scikitplot.logging.Formatter "Link to this definition")
:   Formatter instances are used to convert a LogRecord to text.

    Formatters need to know how a LogRecord is constructed. They are
    responsible for converting a LogRecord to (usually) a string which can
    be interpreted by either a human or an external system. The base Formatter
    allows a formatting string to be specified. If none is supplied, the
    style-dependent default value, “%(message)s”, “{message}”, or
    “${message}”, is used.

    The Formatter can be initialized with a format string which makes use of
    knowledge of the LogRecord attributes - e.g. the default value mentioned
    above makes use of the fact that the user’s message and arguments are pre-
    formatted into a LogRecord’s message attribute. Currently, the useful
    attributes in a LogRecord are described by:

    %(name)s Name of the logger (logging channel)
    %(levelno)s Numeric logging level for the message (DEBUG, INFO,

    > WARNING, ERROR, CRITICAL)

    %(levelname)s Text logging level for the message (“DEBUG”, “INFO”,
    :   “WARNING”, “ERROR”, “CRITICAL”)

    %(pathname)s Full pathname of the source file where the logging
    :   call was issued (if available)

    %(filename)s Filename portion of pathname
    %(module)s Module (name portion of filename)
    %(lineno)d Source line number where the logging call was issued

    > (if available)

    %(funcName)s Function name
    %(created)f Time when the LogRecord was created (time.time()

    > return value)

    %(asctime)s Textual time when the LogRecord was created
    %(msecs)d Millisecond portion of the creation time
    %(relativeCreated)d Time in milliseconds when the LogRecord was created,

    > relative to the time the logging module was loaded
    > (typically at application startup time)

    %(thread)d Thread ID (if available)
    %(threadName)s Thread name (if available)
    %(taskName)s Task name (if available)
    %(process)d Process ID (if available)
    %(message)s The result of record.getMessage(), computed just as

    > the record is emitted

    default\_msec\_format = '%s,%03d'[#](#scikitplot.logging.Formatter.default_msec_format "Link to this definition")

    default\_time\_format = '%Y-%m-%d %H:%M:%S'[#](#scikitplot.logging.Formatter.default_time_format "Link to this definition")

    format(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L690)[#](#scikitplot.logging.Formatter.format "Link to this definition")
    :   Format the specified record as text.

        The record’s attribute dictionary is used as the operand to a
        string formatting operation which yields the returned string.
        Before formatting the dictionary, a couple of preparatory steps
        are carried out. The message attribute of the record is computed
        using LogRecord.getMessage(). If the formatting string uses the
        time (as determined by a call to usesTime(), formatTime() is
        called to format the event time. If there is exception information,
        it is formatted using formatException() and appended to the message.

    formatException(**ei**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L649)[#](#scikitplot.logging.Formatter.formatException "Link to this definition")
    :   Format and return the specified exception information as a string.

        This default implementation just uses
        traceback.print\_exception()

    formatMessage(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L674)[#](#scikitplot.logging.Formatter.formatMessage "Link to this definition")

    formatStack(**stack\_info**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L677)[#](#scikitplot.logging.Formatter.formatStack "Link to this definition")
    :   This method is provided as an extension point for specialized
        formatting of stack information.

        The input data is a string as returned from a call to
        [`traceback.print_stack`](https://docs.python.org/3/library/traceback.html#traceback.print_stack "(in Python v3.15)"), but with the last trailing newline
        removed.

        The base implementation just returns the value passed in.

    formatTime(**record**, **datefmt=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L622)[#](#scikitplot.logging.Formatter.formatTime "Link to this definition")
    :   Return the creation time of the specified LogRecord as formatted text.

        This method should be called from format() by a formatter which
        wants to make use of a formatted time. This method can be overridden
        in formatters to provide for any specific requirement, but the
        basic behaviour is as follows: if datefmt (a string) is specified,
        it is used with time.strftime() to format the creation time of the
        record. Otherwise, an ISO8601-like (or RFC 3339-like) format is used.
        The resulting string is returned. This function uses a user-configurable
        function to convert the creation time to a tuple. By default,
        time.localtime() is used; to change this for a particular formatter
        instance, set the ‘converter’ attribute to a function with the same
        signature as time.localtime() or time.gmtime(). To change it for all
        formatters, for example if you want all logging times to be shown in GMT,
        set the ‘converter’ attribute in the Formatter class.

    usesTime()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L668)[#](#scikitplot.logging.Formatter.usesTime "Link to this definition")
    :   Check if the format uses the creation time of the record.