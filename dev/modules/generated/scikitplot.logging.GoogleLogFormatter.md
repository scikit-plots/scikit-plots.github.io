# GoogleLogFormatter[#](#googlelogformatter "Link to this heading")

class scikitplot.logging.GoogleLogFormatter(**datefmt='%Y-%m-%d %H:%M:%S'**, **default\_time\_format='%Y-%m-%d %H:%M:%S'**, **default\_msec\_format='%s,%03d'**, **backend=None**, **use\_datetime=True**, **use\_utc=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/logging.py#L671)[#](#scikitplot.logging.GoogleLogFormatter "Link to this definition")
:   A custom logging formatter inherited from [`Formatter`](https://docs.python.org/3/library/logging.html#logging.Formatter "(in Python v3.14)").

    That formats log messages in a Google-style format:

    ```
    >>> # Google-style format
    >>> `YYYY-MM-DD HH:MM:SS.mmmmmm logger_name logging_level message`

    ```

    Parameters:
    :   ****datefmt****str, optional
        :   Date format for `asctime`. Default is ‘%Y-%m-%d %H:%M:%S’.

        ****default\_time\_format****str, optional
        :   Default time format. Default is ‘%Y-%m-%d %H:%M:%S’.

        ****default\_msec\_format****str, optional
        :   Default millisecond format. Default is ‘%s,%03d’.

        ****backend****{‘json’, ‘pprint’, ‘text’}, optional
        :   Backend to use for formatting the log output. Default is None.

        ****use\_datetime****bool, optional
        :   Whether to include microseconds in the timestamp using datetime. Default is True.

    Parameters:
    :   * ****datefmt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****default\_time\_format**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****default\_msec\_format**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****use\_datetime**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)
        * ****use\_utc**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    > **See also**
    > [`logging.Formatter`](https://docs.python.org/3/library/logging.html#logging.Formatter "(in Python v3.14)")
    :   logging Formatter.

    Notes

    This formatter outputs logs in a structured format with the following fields if any:

    * `asctime`: The timestamp of the log entry.
    * `levelname`: The log level (e.g., DEBUG, INFO, WARNING).
    * `name`: The name of the logger.
    * `thread`: The thread ID.
    * `filename`: The name of the file generating the log entry.
    * `lineno`: The line number where the log entry was generated.
    * `message`: The log message.

    default\_msec\_format = '%s,%03d'[#](#scikitplot.logging.GoogleLogFormatter.default_msec_format "Link to this definition")

    default\_time\_format = '%Y-%m-%d %H:%M:%S'[#](#scikitplot.logging.GoogleLogFormatter.default_time_format "Link to this definition")

    format(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/logging.py#L769)[#](#scikitplot.logging.GoogleLogFormatter.format "Link to this definition")
    :   Format the log record into a JSON string or a pretty-printed dictionary.

        Parameters:
        :   ****record****logging.LogRecord
            :   The log record containing log information (message, level, etc.).

        Returns:
        :   str
            :   The formatted log message (either in literal str, JSON or pretty-print format).

        Parameters:
        :   ****record**** ([**LogRecord**](https://docs.python.org/3/library/logging.html#logging.LogRecord "(in Python v3.14)"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    formatException(**ei**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/../../logging/__init__.py#L633)[#](#scikitplot.logging.GoogleLogFormatter.formatException "Link to this definition")
    :   Format and return the specified exception information as a string.

        This default implementation just uses
        traceback.print\_exception()

    formatMessage(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/../../logging/__init__.py#L658)[#](#scikitplot.logging.GoogleLogFormatter.formatMessage "Link to this definition")

    formatStack(**stack\_info**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/../../logging/__init__.py#L661)[#](#scikitplot.logging.GoogleLogFormatter.formatStack "Link to this definition")
    :   This method is provided as an extension point for specialized
        formatting of stack information.

        The input data is a string as returned from a call to
        [`traceback.print_stack`](https://docs.python.org/3/library/traceback.html#traceback.print_stack "(in Python v3.14)"), but with the last trailing newline
        removed.

        The base implementation just returns the value passed in.

    formatTime(**record**, **datefmt=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/logging.py#L748)[#](#scikitplot.logging.GoogleLogFormatter.formatTime "Link to this definition")
    :   Format time.

        <https://docs.python.org/3/library/logging.html#logging.Formatter.formatTime>

        Parameters:
        :   * ****record**** ([**LogRecord**](https://docs.python.org/3/library/logging.html#logging.LogRecord "(in Python v3.14)"))
            * ****datefmt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    usesTime()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/../../logging/__init__.py#L652)[#](#scikitplot.logging.GoogleLogFormatter.usesTime "Link to this definition")
    :   Check if the format uses the creation time of the record.