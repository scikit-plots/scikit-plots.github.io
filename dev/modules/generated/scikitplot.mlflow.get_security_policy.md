# get\_security\_policy[#](#get-security-policy "Link to this heading")

scikitplot.mlflow.get\_security\_policy()[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/mlflow/_security.py#L671)[#](#scikitplot.mlflow.get_security_policy "Link to this definition")
:   Return the currently active [`SecurityPolicy`](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy"), or `None`.

    Returns:
    :   SecurityPolicy or None
        :   Active policy. `None` means no enforcement (default; backwards-compatible).

    Return type:
    :   [**SecurityPolicy**](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow._security.SecurityPolicy") | None

    > **See also**
    > [`set_security_policy`](scikitplot.mlflow.set_security_policy.html#scikitplot.mlflow.set_security_policy "scikitplot.mlflow.set_security_policy")
    :   Activate a policy globally.

    [`security_policy`](scikitplot.mlflow.security_policy.html#scikitplot.mlflow.security_policy "scikitplot.mlflow.security_policy")
    :   Activate a policy for a context block.