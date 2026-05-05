# set\_security\_policy[#](#set-security-policy "Link to this heading")

scikitplot.mlflow.set\_security\_policy(**policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L688)[#](#scikitplot.mlflow.set_security_policy "Link to this definition")
:   Set the active [`SecurityPolicy`](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy") globally.

    Parameters:
    :   ****policy****SecurityPolicy or None
        :   Policy to activate. Pass `None` to disable enforcement.

    Returns:
    :   None

    Raises:
    :   TypeError
        :   If **policy** is not a [`SecurityPolicy`](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy") or `None`.

    Parameters:
    :   ****policy**** ([**SecurityPolicy**](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow._security.SecurityPolicy") **|** **None**)

    Return type:
    :   None

    > **See also**
    > [`security_policy`](scikitplot.mlflow.security_policy.html#scikitplot.mlflow.security_policy "scikitplot.mlflow.security_policy")
    :   Activate a policy for a single context block.

    Notes

    Mutates module-level state. For scope-limited use, prefer
    [`security_policy`](scikitplot.mlflow.security_policy.html#scikitplot.mlflow.security_policy "scikitplot.mlflow.security_policy").