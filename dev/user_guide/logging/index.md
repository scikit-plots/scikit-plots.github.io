# Logging System[#](#logging-system "Link to this heading")

This module contains functions related to [`logging`](../../apis/scikitplot.logging.html#module-scikitplot.logging "scikitplot.logging") (Scikit-plots Logging).

> **Note**
> The Scikit-plots logging system is meant for internal scikit-plots usage.
For use in other packages, we recommend implementing your own `logger` instead.
> **Tip**
> The Scikit-plots logging system compatible with python logging API system.
This module defines a logging class based on the built-in logging module.

## Configuring the logging system[#](#configuring-the-logging-system "Link to this heading")

Get the root `logger` from `module attr`:

```
>>> from scikitplot import logger
>>> logger.setLevel(logger.INFO)  # default WARNING
>>> logger.info("This is a info message from the sp logger.")
2026-01-23 11:06:27.180474: I scikitplot 140316325247872 3536182465.py:3:<module>] This is a info message from the sp logger.

>>> import scikitplot as sp
>>> sp.logger.setLevel(sp.logger.INFO)  # default WARNING
>>> sp.logger.info("This is a info message from the sp logger.")
2026-01-23 11:06:27.181338: I scikitplot 140316325247872 3536182465.py:7:<module>] This is a info message from the sp logger.

```

Get the root `logger` from `func`:

```
>>> import scikitplot as sp

>>> sp.get_logger().setLevel(sp.logging.INFO)  # default WARNING
>>> sp.get_logger().info("This is a info message from the sp logger.")
2026-01-23 11:06:27.186634: I scikitplot 140316325247872 interactiveshell.py:3701:run_code] This is a info message from the sp logger.

```
> **Note**
> This module builds on Python’s standard [`logging`](https://docs.python.org/3/library/logging.html#module-logging "(in Python v3.14)") library.
For more information on Python’s logging API, refer to the official
documentation: <https://docs.python.org/3/library/logging.html>

```
>>> import logging
>>> logger = logging.getLogger(__name__)
>>> logger.setLevel(logging.DEBUG)

```

Logging Levels:

* `NOTSET` (0) : NOTSET
* `DEBUG` (10) : Detailed information useful during development,
  typically of interest only when diagnosing problems.
* `INFO` (20) : Confirmation that things are working as expected.
* `WARNING` (30): An indication that something unexpected happened,
  or indicative of some problem in the near future.
* `ERROR` (40) : Due to a more serious problem,
  the software has not been able to perform some function.
* `CRITICAL` = `FATAL` (50): A very serious error, indicating that
  the program itself may be unable to continue running.