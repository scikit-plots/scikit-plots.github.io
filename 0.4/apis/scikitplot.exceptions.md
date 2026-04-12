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

|  |  |
| --- | --- |
| [`ModuleDeprecationWarning`](../modules/generated/scikitplot.exceptions.ModuleDeprecationWarning.html#scikitplot.exceptions.ModuleDeprecationWarning "scikitplot.exceptions.ModuleDeprecationWarning") | Module deprecation warning. |
| [`ScikitplotException`](../modules/generated/scikitplot.exceptions.ScikitplotException.html#scikitplot.exceptions.ScikitplotException "scikitplot.exceptions.ScikitplotException") | Generic exception thrown to surface failure information about external-facing operations. |
| [`VisibleDeprecationWarning`](../modules/generated/scikitplot.exceptions.VisibleDeprecationWarning.html#scikitplot.exceptions.VisibleDeprecationWarning "scikitplot.exceptions.VisibleDeprecationWarning") | Visible deprecation warning. |