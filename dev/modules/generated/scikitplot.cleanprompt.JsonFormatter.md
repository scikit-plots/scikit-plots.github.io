# JsonFormatter[#](#jsonformatter "Link to this heading")

class scikitplot.cleanprompt.JsonFormatter(**fmt=None**, **datefmt=None**, **style='%'**, **validate=True**, **\***, **defaults=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L293)[#](#scikitplot.cleanprompt.JsonFormatter "Link to this definition")
:   Format a record as one JSON object per line.

    Notes

    ****Developer notes.**** For shipping into a log aggregator, where a text
    format has to be re-parsed with a regular expression. Keys are stable;
    anything a call site attaches with `extra=` is merged in, so a caller can
    add structure without a new formatter.

    default\_msec\_format = '%s,%03d'[#](#scikitplot.cleanprompt.JsonFormatter.default_msec_format "Link to this definition")

    default\_time\_format = '%Y-%m-%d %H:%M:%S'[#](#scikitplot.cleanprompt.JsonFormatter.default_time_format "Link to this definition")

    format(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L309)[#](#scikitplot.cleanprompt.JsonFormatter.format "Link to this definition")
    :   Return the record as a JSON object.

        Parameters:
        :   ****record**** ([**LogRecord**](scikitplot.logging.LogRecord.html#scikitplot.logging.LogRecord "logging.LogRecord"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    formatException(**ei**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L649)[#](#scikitplot.cleanprompt.JsonFormatter.formatException "Link to this definition")
    :   Format and return the specified exception information as a string.

        This default implementation just uses
        traceback.print\_exception()

    formatMessage(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L674)[#](#scikitplot.cleanprompt.JsonFormatter.formatMessage "Link to this definition")

    formatStack(**stack\_info**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L677)[#](#scikitplot.cleanprompt.JsonFormatter.formatStack "Link to this definition")
    :   This method is provided as an extension point for specialized
        formatting of stack information.

        The input data is a string as returned from a call to
        [`traceback.print_stack`](https://docs.python.org/3/library/traceback.html#traceback.print_stack "(in Python v3.15)"), but with the last trailing newline
        removed.

        The base implementation just returns the value passed in.

    formatTime(**record**, **datefmt=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L622)[#](#scikitplot.cleanprompt.JsonFormatter.formatTime "Link to this definition")
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

    usesTime()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L668)[#](#scikitplot.cleanprompt.JsonFormatter.usesTime "Link to this definition")
    :   Check if the format uses the creation time of the record.