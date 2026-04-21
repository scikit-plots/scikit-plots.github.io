# logger[#](#logger "Link to this heading")

[`logging`](../../apis/scikitplot.logging.html#module-scikitplot.logging "scikitplot.logging") (alias, [`logger`](#module-scikitplot.logger "scikitplot.logger")) module provide unified both Python [`logging`](https://docs.python.org/3/library/logging.html#module-logging "(in Python v3.14)") and [`logging.Logger`](https://docs.python.org/3/library/logging.html#logging.Logger "(in Python v3.14)") utilities.

View aliases[#](#view-aliases "Link to this dropdown")

****Main aliases****

`scikitplot.logging`

****Compat aliases****

`scikitplot.logger`

Inspired by [“Tensorflow’s logging system”](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/platform/tf_logging.py#L94) [[1]](#r71f6266c1ee7-1).

This module provides advanced logging utilities for Python applications,
including support for singleton-based logging with customizable formatters,
handlers, and thread-safety.

It extends Python’s standard logging library to enhance usability
and flexibility for large-scale projects.

Scikit-plots logging helpers, supports vendoring.

Module Dependencies:
- Python standard library: [`logging`](https://docs.python.org/3/library/logging.html#module-logging "(in Python v3.14)")

> **See also**
> * [python/cpython](https://github.com/python/cpython/blob/main/Lib/logging/__init__.py)

References

[[1](#id1)]

[Tensorflow contributors. (2025).
“Tensorflow’s logging system”
Tensorflow. https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/platform/tf\_logging.py#L94](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/platform/tf_logging.py#L94)