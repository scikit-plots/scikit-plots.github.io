# Logging[#](#logging "Link to this heading")

`scikitplot.logging` wraps Python’s standard logging model with a Scikit-Plots package logger, Google-style formatting, verbosity helpers and rate-limited convenience functions.

> **Important**
> The current repository snapshot has several open compatibility findings in this submodule. Prefer the basic `get_logger` / `setLevel` / standard `debug`-`critical` path and read ****Known limits**** before depending on helper or environment behavior.
Getting started

Use the package logger and set verbosity without configuring duplicate handlers.

[Getting started](getting_started.html#logging-getting-started)Levels and loggers

Understand package-level helpers, effective level, verbosity, and stdlib compatibility.

[Levels and loggers](levels_and_loggers.html#logging-levels-and-loggers)Formatting and helpers

Google-style formatting, sanitization, rate-limited helpers, and stderr behavior.

[Formatting and helpers](formatting_and_helpers.html#logging-formatting-and-helpers)Python API

Public constants, stdlib-compatible objects, and Scikit-Plots helpers.

[Python API](python_api.html#logging-python-api)Known limits and troubleshooting

Current compatibility findings and safe workarounds.

[Known limits and troubleshooting](known_limits_and_troubleshooting.html#logging-known-limits-and-troubleshooting)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Further reading[#](#further-reading "Link to this heading")

> **Note**
> This module builds on Python’s standard [`logging`](https://docs.python.org/3/library/logging.html#module-logging "(in Python v3.15)") library.
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