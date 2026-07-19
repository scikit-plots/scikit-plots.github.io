# SecurityPolicyViolationError[#](#securitypolicyviolationerror "Link to this heading")

exception scikitplot.mlflow.SecurityPolicyViolationError[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/mlflow/_errors.py#L36)[#](#scikitplot.mlflow.SecurityPolicyViolationError "Link to this definition")
:   Raised when an operation is rejected by the active [`SecurityPolicy`](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy").

    Notes

    This is a subclass of [`PermissionError`](https://docs.python.org/3/library/exceptions.html#PermissionError "(in Python v3.14)") so callers can catch it with either
    `SecurityPolicyViolationError` (precise) or `PermissionError` (broad).

    Annotation:
    :   Unrecognized objtype: `exception`