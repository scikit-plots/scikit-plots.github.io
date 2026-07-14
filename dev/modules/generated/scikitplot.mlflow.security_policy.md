# security\_policy[#](#security-policy "Link to this heading")

scikitplot.mlflow.security\_policy(**policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/mlflow/_security.py#L724)[#](#scikitplot.mlflow.security_policy "Link to this definition")
:   Temporarily activate a [`SecurityPolicy`](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow.SecurityPolicy") for a context block.

    Parameters:
    :   ****policy****SecurityPolicy or None
        :   Policy to activate. Pass `None` to disable enforcement within the block.

    Yields:
    :   None

    Parameters:
    :   ****policy**** ([**SecurityPolicy**](scikitplot.mlflow.SecurityPolicy.html#scikitplot.mlflow.SecurityPolicy "scikitplot.mlflow._security.SecurityPolicy") **|** **None**)

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.14)")[None]

    > **See also**
    > [`set_security_policy`](scikitplot.mlflow.set_security_policy.html#scikitplot.mlflow.set_security_policy "scikitplot.mlflow.set_security_policy")
    :   Set the active policy globally.

    Notes

    Exception-safe: previous policy is always restored on exit.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.mlflow._security import DEFAULT_SECURITY_POLICY, security_policy
    >>> with security_policy(DEFAULT_SECURITY_POLICY):
    ...     pass  # session() calls here are guarded

    ```
    Go BackOpen In Tab