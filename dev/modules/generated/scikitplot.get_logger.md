# get\_logger[#](#get-logger "Link to this heading")

scikitplot.get\_logger()[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/logging.py#L1124)[#](#scikitplot.get_logger "Link to this definition")
:   Return SP (scikitplot) logger instance.

    Returns:
    :   logging.Logger
        :   An instance of the Python logging library Logger.

    Return type:
    :   [**Logger**](https://docs.python.org/3/library/logging.html#logging.Logger "(in Python v3.14)")

    > **See also**
    > [`scikitplot.logger`](scikitplot.logger.html#module-scikitplot.logger "scikitplot.logger")
    :   An alias of [`logging`](../../apis/scikitplot.logging.html#module-scikitplot.logging "scikitplot.logging") module, providing logging functionality.

    [`logging.getLogger`](https://docs.python.org/3/library/logging.html#logging.getLogger "(in Python v3.14)")
    :   Standard library function to retrieve [`logging.Logger`](https://docs.python.org/3/library/logging.html#logging.Logger "(in Python v3.14)") instance. For more: <https://docs.python.org/3/library/logging.html>

    Notes

    See Python documentation (<https://docs.python.org/3/library/logging.html>)
    for detailed API. Below is only a summary.

    The logger has 5 levels of logging from the most serious to the least:

    1. `CRITICAL` or `FATAL`
    2. `ERROR`
    3. `WARNING`
    4. `INFO`
    5. `DEBUG`
    6. `NOTSET`

    The logger has the following methods, based on these logging levels:

    1. `critical(msg, *args, **kwargs)` or `fatal(msg, *args, **kwargs)`
    2. `error(msg, *args, **kwargs)`
    3. `warning(msg, *args, **kwargs)` or `warn(msg, *args, **kwargs)`
    4. `info(msg, *args, **kwargs)`
    5. `debug(msg, *args, **kwargs)`

    The `msg` can contain string formatting. An example of logging at the `ERROR`
    level
    using string formatting is:

    ```
    >>> sp.get_logger().error("The value %d is invalid.", 3)

    ```

    You can also specify the logging verbosity. In this case, the
    WARN level log will not be emitted:

    ```
    >>> sp.get_logger().setLevel(sp.logging.WARNING)
    >>> sp.get_logger().debug(
    ...     "This is a debug."
    ... )  # This will not be shown, as level is WARNING.
    >>> sp.get_logger().info(
    ...     "This is a info."
    ... )  # This will not be shown, as level is WARNING.
    >>> sp.get_logger().warning("This is a warning.")

    ```

    Examples

    Try it in your browser!

    Get the root `logger` from `module attr`:

    ```
    >>> from scikitplot import logger
    >>> logger.setLevel(logger.INFO)  # default WARNING
    >>> logger.info("This is a info message from the sp logger.")

    ```
    ```
    >>> import scikitplot as sp
    >>> sp.logger.setLevel(sp.logger.INFO)  # default WARNING
    >>> sp.logger.info("This is a info message from the sp logger.")

    ```

    Get the root `logger` from `func`:

    ```
    >>> import scikitplot as sp
    >>> sp.get_logger().setLevel(sp.logging.INFO)  # default WARNING
    >>> sp.get_logger().info("This is a info message from the sp logger.")

    ```
    Go BackOpen In Tab