# LogRecord[#](#logrecord "Link to this heading")

class scikitplot.logging.LogRecord(**name**, **level**, **pathname**, **lineno**, **msg**, **args**, **exc\_info**, **func=None**, **sinfo=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L286)[#](#scikitplot.logging.LogRecord "Link to this definition")
:   A LogRecord instance represents an event being logged.

    LogRecord instances are created every time something is logged. They
    contain all the information pertinent to the event being logged. The
    main information passed in is in msg and args, which are combined
    using str(msg) % args to create the message field of the record. The
    record also includes information such as when the record was created,
    the source line where the logging call was made, and any exception
    information to be logged.

    getMessage()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../../logging/__init__.py#L383)[#](#scikitplot.logging.LogRecord.getMessage "Link to this definition")
    :   Return the message for this LogRecord.

        Return the message for this LogRecord after merging any user-supplied
        arguments with the message.