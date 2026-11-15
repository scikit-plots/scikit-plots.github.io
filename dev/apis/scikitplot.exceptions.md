# scikitplot.exceptions[#](#module-scikitplot.exceptions "Link to this heading")

Custom warnings and errors used across scikit-plots.

This module contains errors/exceptions and warnings of general use for
scikit-plots. Exceptions that are specific to a given subpackage should **not** be
here, but rather in the particular subpackage.

The builtin warning hierarchy is:

```
Warning
├── DeprecationWarning          ← base of ScikitplotDeprecationWarning
├── PendingDeprecationWarning   ← base of ScikitplotPendingDeprecationWarning
└── UserWarning                 ← base of ScikitplotUserWarning

```

Notes

****Developer notes****

* Do **not** import this module from `__init__.py` before it has been fully
  bootstrapped. The `_is_loaded` guard prevents accidental re-import, which
  would create duplicate class identities and break `isinstance` checks across
  reload boundaries.
* `error_code` in [`ScikitplotException`](../modules/generated/scikitplot.exceptions.ScikitplotException.html#scikitplot.exceptions.ScikitplotException "scikitplot.exceptions.ScikitplotException") and its subclasses may be
  either an `int` (legacy convention) or a `str` sentinel (e.g.
  `"NOT_FOUND"`, `"INVALID_STATE"`). Both forms are preserved verbatim in
  the JSON payload; callers must not assume a particular type.
* `__getattr__` at module scope handles the deprecated `ErfaError` /
  `ErfaWarning` aliases. `stacklevel=2` ensures the warning frame points
  at the **caller** rather than at the `__getattr__` body itself.

## Errors[#](#errors "Link to this heading")

|  |  |
| --- | --- |
| [`ScikitplotException`](../modules/generated/scikitplot.exceptions.ScikitplotException.html#scikitplot.exceptions.ScikitplotException "scikitplot.exceptions.ScikitplotException") | Generic exception thrown to surface failure information about external-facing operations. |
| [`CommandError`](../modules/generated/scikitplot.exceptions.CommandError.html#scikitplot.exceptions.CommandError "scikitplot.exceptions.CommandError") | Raised when there is an error in command-line arguments. |
| [`ExecutionException`](../modules/generated/scikitplot.exceptions.ExecutionException.html#scikitplot.exceptions.ExecutionException "scikitplot.exceptions.ExecutionException") | Exception thrown when executing a project fails. |
| [`InvalidUrlException`](../modules/generated/scikitplot.exceptions.InvalidUrlException.html#scikitplot.exceptions.InvalidUrlException "scikitplot.exceptions.InvalidUrlException") | Exception thrown when a http request fails to send due to an invalid URL. |
| [`MissingConfigException`](../modules/generated/scikitplot.exceptions.MissingConfigException.html#scikitplot.exceptions.MissingConfigException "scikitplot.exceptions.MissingConfigException") | Exception thrown when expected configuration file/directory not found. |
| [`ScikitplotTracingException`](../modules/generated/scikitplot.exceptions.ScikitplotTracingException.html#scikitplot.exceptions.ScikitplotTracingException "scikitplot.exceptions.ScikitplotTracingException") | Exception thrown from tracing logic. |
| [`ScikitplotTraceDataException`](../modules/generated/scikitplot.exceptions.ScikitplotTraceDataException.html#scikitplot.exceptions.ScikitplotTraceDataException "scikitplot.exceptions.ScikitplotTraceDataException") | Exception thrown for trace data related errors. |
| [`ScikitplotTraceDataCorrupted`](../modules/generated/scikitplot.exceptions.ScikitplotTraceDataCorrupted.html#scikitplot.exceptions.ScikitplotTraceDataCorrupted "scikitplot.exceptions.ScikitplotTraceDataCorrupted") | Exception thrown when trace data is corrupted. |
| [`ScikitplotTraceDataNotFound`](../modules/generated/scikitplot.exceptions.ScikitplotTraceDataNotFound.html#scikitplot.exceptions.ScikitplotTraceDataNotFound "scikitplot.exceptions.ScikitplotTraceDataNotFound") | Exception thrown when trace data is not found. |

## Numerical errors[#](#numerical-errors "Link to this heading")

|  |  |
| --- | --- |
| [`AxisError`](../modules/generated/scikitplot.exceptions.AxisError.html#scikitplot.exceptions.AxisError "scikitplot.exceptions.AxisError") | Axis supplied was invalid. |
| [`DTypePromotionError`](../modules/generated/scikitplot.exceptions.DTypePromotionError.html#scikitplot.exceptions.DTypePromotionError "scikitplot.exceptions.DTypePromotionError") | Multiple DTypes could not be converted to a common one. |
| [`TooHardError`](../modules/generated/scikitplot.exceptions.TooHardError.html#scikitplot.exceptions.TooHardError "scikitplot.exceptions.TooHardError") | `max_work` was exceeded. |

## Warnings[#](#warnings "Link to this heading")

|  |  |
| --- | --- |
| [`ScikitplotWarning`](../modules/generated/scikitplot.exceptions.ScikitplotWarning.html#scikitplot.exceptions.ScikitplotWarning "scikitplot.exceptions.ScikitplotWarning") | The base warning class from which all scikit-plots warnings should inherit. |
| [`ScikitplotUserWarning`](../modules/generated/scikitplot.exceptions.ScikitplotUserWarning.html#scikitplot.exceptions.ScikitplotUserWarning "scikitplot.exceptions.ScikitplotUserWarning") | The primary warning class for scikit-plots. |
| [`ScikitplotDeprecationWarning`](../modules/generated/scikitplot.exceptions.ScikitplotDeprecationWarning.html#scikitplot.exceptions.ScikitplotDeprecationWarning "scikitplot.exceptions.ScikitplotDeprecationWarning") | A warning class to indicate a deprecated feature. |
| [`ScikitplotPendingDeprecationWarning`](../modules/generated/scikitplot.exceptions.ScikitplotPendingDeprecationWarning.html#scikitplot.exceptions.ScikitplotPendingDeprecationWarning "scikitplot.exceptions.ScikitplotPendingDeprecationWarning") | A warning class to indicate a soon-to-be deprecated feature. |
| [`ScikitplotBackwardsIncompatibleChangeWarning`](../modules/generated/scikitplot.exceptions.ScikitplotBackwardsIncompatibleChangeWarning.html#scikitplot.exceptions.ScikitplotBackwardsIncompatibleChangeWarning "scikitplot.exceptions.ScikitplotBackwardsIncompatibleChangeWarning") | A warning class indicating a change in scikit-plots that is incompatible with previous versions. |
| [`DuplicateRepresentationWarning`](../modules/generated/scikitplot.exceptions.DuplicateRepresentationWarning.html#scikitplot.exceptions.DuplicateRepresentationWarning "scikitplot.exceptions.DuplicateRepresentationWarning") | A warning class indicating a representation name was already registered. |
| [`ComplexWarning`](../modules/generated/scikitplot.exceptions.ComplexWarning.html#scikitplot.exceptions.ComplexWarning "scikitplot.exceptions.ComplexWarning") | The warning raised when casting a complex dtype to a real dtype. |
| [`ModuleDeprecationWarning`](../modules/generated/scikitplot.exceptions.ModuleDeprecationWarning.html#scikitplot.exceptions.ModuleDeprecationWarning "scikitplot.exceptions.ModuleDeprecationWarning") | Module deprecation warning. |
| [`RankWarning`](../modules/generated/scikitplot.exceptions.RankWarning.html#scikitplot.exceptions.RankWarning "scikitplot.exceptions.RankWarning") | Matrix rank warning. |
| [`VisibleDeprecationWarning`](../modules/generated/scikitplot.exceptions.VisibleDeprecationWarning.html#scikitplot.exceptions.VisibleDeprecationWarning "scikitplot.exceptions.VisibleDeprecationWarning") | Visible deprecation warning. |