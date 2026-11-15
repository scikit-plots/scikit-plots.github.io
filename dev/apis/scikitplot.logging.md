# scikitplot.logging[#](#module-scikitplot.logging "Link to this heading")

[`logging`](#module-scikitplot.logging "scikitplot.logging") (alias, [`logger`](../modules/generated/scikitplot.logger.html#module-scikitplot.logger "scikitplot.logger")) module provide unified both Python [`logging`](https://docs.python.org/3/library/logging.html#module-logging "(in Python v3.15)") and [`logging.Logger`](../modules/generated/scikitplot.logging.Logger.html#scikitplot.logging.Logger "logging.Logger") utilities.

View aliases[#](#view-aliases "Link to this dropdown")

****Main aliases****

`scikitplot.logging`

****Compat aliases****

`scikitplot.logger`

Inspired by [“Tensorflow’s logging system”](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/platform/tf_logging.py#L94) [[1]](#r821c5e370069-1).

This module provides advanced logging utilities for Python applications,
including support for singleton-based logging with customizable formatters,
handlers, and thread-safety.

It extends Python’s standard logging library to enhance usability
and flexibility for large-scale projects.

Scikit-plots logging helpers, supports vendoring.

Module Dependencies:
- Python standard library: [`logging`](https://docs.python.org/3/library/logging.html#module-logging "(in Python v3.15)")

> **See also**
> * [python/cpython](https://github.com/python/cpython/blob/main/Lib/logging/__init__.py)

References

[[1](#id1)]

[Tensorflow contributors. (2025).
“Tensorflow’s logging system”
Tensorflow. https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/platform/tf\_logging.py#L94](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/platform/tf_logging.py#L94)

****User guide.**** See the [Logging](../user_guide/logging/index.html#logging-index) section for further details.

## Logging Levels[#](#logging-levels "Link to this heading")

|  |  |
| --- | --- |
| [`CRITICAL`](../modules/generated/scikitplot.logging.CRITICAL.html#scikitplot.logging.CRITICAL "scikitplot.logging.CRITICAL") | int([x]) -> integer int(x, base=10) -> integer |
| [`DEBUG`](../modules/generated/scikitplot.logging.DEBUG.html#scikitplot.logging.DEBUG "scikitplot.logging.DEBUG") | int([x]) -> integer int(x, base=10) -> integer |
| [`ERROR`](../modules/generated/scikitplot.logging.ERROR.html#scikitplot.logging.ERROR "scikitplot.logging.ERROR") | int([x]) -> integer int(x, base=10) -> integer |
| [`FATAL`](../modules/generated/scikitplot.logging.FATAL.html#scikitplot.logging.FATAL "scikitplot.logging.FATAL") | int([x]) -> integer int(x, base=10) -> integer |
| [`INFO`](../modules/generated/scikitplot.logging.INFO.html#scikitplot.logging.INFO "scikitplot.logging.INFO") | int([x]) -> integer int(x, base=10) -> integer |
| [`NOTSET`](../modules/generated/scikitplot.logging.NOTSET.html#scikitplot.logging.NOTSET "scikitplot.logging.NOTSET") | int([x]) -> integer int(x, base=10) -> integer |
| [`WARN`](../modules/generated/scikitplot.logging.WARN.html#scikitplot.logging.WARN "scikitplot.logging.WARN") | int([x]) -> integer int(x, base=10) -> integer |
| [`WARNING`](../modules/generated/scikitplot.logging.WARNING.html#scikitplot.logging.WARNING "scikitplot.logging.WARNING") | int([x]) -> integer int(x, base=10) -> integer |

## Logging Helpers[#](#logging-helpers "Link to this heading")

|  |  |
| --- | --- |
| [`AlwaysStdErrHandler`](../modules/generated/scikitplot.logging.AlwaysStdErrHandler.html#scikitplot.logging.AlwaysStdErrHandler "scikitplot.logging.AlwaysStdErrHandler") | A custom logging handler inherited from [`StreamHandler`](../modules/generated/scikitplot.logging.StreamHandler.html#scikitplot.logging.StreamHandler "logging.StreamHandler"). |
| [`GoogleLogFormatter`](../modules/generated/scikitplot.logging.GoogleLogFormatter.html#scikitplot.logging.GoogleLogFormatter "scikitplot.logging.GoogleLogFormatter") | A custom logging formatter inherited from [`Formatter`](../modules/generated/scikitplot.logging.Formatter.html#scikitplot.logging.Formatter "logging.Formatter"). |
| [`getEffectiveLevel`](../modules/generated/scikitplot.logging.getEffectiveLevel.html#scikitplot.logging.getEffectiveLevel "scikitplot.logging.getEffectiveLevel") | Return the effective level for the scikit-plots logger. |
| [`get_logger`](../modules/generated/scikitplot.logging.get_logger.html#scikitplot.logging.get_logger "scikitplot.logging.get_logger") | Return SP (scikitplot) logger instance. |
| [`get_verbosity`](../modules/generated/scikitplot.logging.get_verbosity.html#scikitplot.logging.get_verbosity "scikitplot.logging.get_verbosity") | Return the current verbosity level. |
| [`setLevel`](../modules/generated/scikitplot.logging.setLevel.html#scikitplot.logging.setLevel "scikitplot.logging.setLevel") | Set the logger's level. |
| [`set_verbosity`](../modules/generated/scikitplot.logging.set_verbosity.html#scikitplot.logging.set_verbosity "scikitplot.logging.set_verbosity") | Set the verbosity level. |

## Standard Library Compatibility[#](#standard-library-compatibility "Link to this heading")

Re-exported from [`logging`](https://docs.python.org/3/library/logging.html#module-logging "(in Python v3.15)") so this module can be used as a drop-in replacement.

|  |  |
| --- | --- |
| [`BASIC_FORMAT`](../modules/generated/scikitplot.logging.BASIC_FORMAT.html#scikitplot.logging.BASIC_FORMAT "scikitplot.logging.BASIC_FORMAT") | str(object='') -> str str(bytes\_or\_buffer[, encoding[, errors]]) -> str |
| [`Filter`](../modules/generated/scikitplot.logging.Filter.html#scikitplot.logging.Filter "scikitplot.logging.Filter") | Filter instances are used to perform arbitrary filtering of LogRecords. |
| [`Formatter`](../modules/generated/scikitplot.logging.Formatter.html#scikitplot.logging.Formatter "scikitplot.logging.Formatter") | Formatter instances are used to convert a LogRecord to text. |
| [`Handler`](../modules/generated/scikitplot.logging.Handler.html#scikitplot.logging.Handler "scikitplot.logging.Handler") | Handler instances dispatch logging events to specific destinations. |
| [`LogRecord`](../modules/generated/scikitplot.logging.LogRecord.html#scikitplot.logging.LogRecord "scikitplot.logging.LogRecord") | A LogRecord instance represents an event being logged. |
| [`Logger`](../modules/generated/scikitplot.logging.Logger.html#scikitplot.logging.Logger "scikitplot.logging.Logger") | Instances of the Logger class represent a single logging channel. |
| [`NullHandler`](../modules/generated/scikitplot.logging.NullHandler.html#scikitplot.logging.NullHandler "scikitplot.logging.NullHandler") | This handler does nothing. |
| [`StreamHandler`](../modules/generated/scikitplot.logging.StreamHandler.html#scikitplot.logging.StreamHandler "scikitplot.logging.StreamHandler") | A handler class which writes logging records, appropriately formatted, to a stream. |
| [`getLevelName`](../modules/generated/scikitplot.logging.getLevelName.html#scikitplot.logging.getLevelName "scikitplot.logging.getLevelName") | Return the textual or numeric representation of logging level 'level'. |
| [`getLogger`](../modules/generated/scikitplot.logging.getLogger.html#scikitplot.logging.getLogger "scikitplot.logging.getLogger") | Return a logger with the specified name, creating it if necessary. |

## Log the Message[#](#log-the-message "Link to this heading")

Log the message at a predefined logging level.

|  |  |
| --- | --- |
| [`log`](../modules/generated/scikitplot.logging.log.html#scikitplot.logging.log "scikitplot.logging.log") | Log a message at the specified log level. |
| [`log_every_n`](../modules/generated/scikitplot.logging.log_every_n.html#scikitplot.logging.log_every_n "scikitplot.logging.log_every_n") | Log once per **n** calls from the same call site. |
| [`log_first_n`](../modules/generated/scikitplot.logging.log_first_n.html#scikitplot.logging.log_first_n "scikitplot.logging.log_first_n") | Log only for the first **n** calls from the same call site. |
| [`log_if`](../modules/generated/scikitplot.logging.log_if.html#scikitplot.logging.log_if "scikitplot.logging.log_if") | Log only if a condition is True. |
| [`vlog`](../modules/generated/scikitplot.logging.vlog.html#scikitplot.logging.vlog "scikitplot.logging.vlog") | Log a message at the specified log level. |
| [`debug`](../modules/generated/scikitplot.logging.debug-func.html#scikitplot.logging.debug "scikitplot.logging.debug") | Log a message at the DEBUG log level. |
| [`info`](../modules/generated/scikitplot.logging.info-func.html#scikitplot.logging.info "scikitplot.logging.info") | Log a message at the INFO log level. |
| [`warning`](../modules/generated/scikitplot.logging.warning-func.html#scikitplot.logging.warning "scikitplot.logging.warning") | Log a message at the WARNING log level. |
| [`warn`](../modules/generated/scikitplot.logging.warn-func.html#scikitplot.logging.warn "scikitplot.logging.warn") | Log a message at the WARN -> WARNING log level. |
| [`error`](../modules/generated/scikitplot.logging.error-func.html#scikitplot.logging.error "scikitplot.logging.error") | Log a message at the ERROR log level. |
| [`error_log`](../modules/generated/scikitplot.logging.error_log.html#scikitplot.logging.error_log "scikitplot.logging.error_log") | Log an error-like message at a specified level. |
| [`exception`](../modules/generated/scikitplot.logging.exception.html#scikitplot.logging.exception "scikitplot.logging.exception") | Log a message with severity 'ERROR' on the root logger. |
| [`TaskLevelStatusMessage`](../modules/generated/scikitplot.logging.TaskLevelStatusMessage.html#scikitplot.logging.TaskLevelStatusMessage "scikitplot.logging.TaskLevelStatusMessage") | Compatibility wrapper for legacy call sites. |
| [`critical`](../modules/generated/scikitplot.logging.critical-func.html#scikitplot.logging.critical "scikitplot.logging.critical") | Log a message at the CRITICAL log level. |
| [`fatal`](../modules/generated/scikitplot.logging.fatal-func.html#scikitplot.logging.fatal "scikitplot.logging.fatal") | Log a message at the FATAL -> CRITICAL log level. |