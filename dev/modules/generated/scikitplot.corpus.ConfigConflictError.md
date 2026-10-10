# ConfigConflictError[#](#configconflicterror "Link to this heading")

exception scikitplot.corpus.ConfigConflictError[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_plan.py#L132)[#](#scikitplot.corpus.ConfigConflictError "Link to this definition")
:   Raised when one domain is configured twice without an explicit intent.

    Notes

    A subclass of [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)") so existing handlers still catch it, while
    callers can react specifically to a configuration conflict.

    Annotation:
    :   Unrecognized objtype: `exception`