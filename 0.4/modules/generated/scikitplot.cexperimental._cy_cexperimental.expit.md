# expit[#](#expit "Link to this heading")

scikitplot.cexperimental.\_cy\_cexperimental.expit(**x0**)[#](#scikitplot.cexperimental._cy_cexperimental.expit "Link to this definition")
:   Compute the sigmoid (expit) of a scalar input.

    The sigmoid function maps a real-valued input to the interval (0, 1) and is
    defined as:

    \[\operatorname{expit}(x) = \frac{1}{1 + e^{-x}}\]

    This function is widely used in logistic regression and other models in
    machine learning and statistics.

    Parameters:
    :   ****x0****dfg\_number\_t
        :   Scalar input value. Can be of type `float`, `double`, or `long double`.

    Returns:
    :   dfg\_number\_t
        :   The sigmoid of the input value, with the same type as `x0`.

    > **See also**
    > [`logit`](scikitplot.cexperimental._cy_cexperimental.logit.html#scikitplot.cexperimental._cy_cexperimental.logit "scikitplot.cexperimental._cy_cexperimental.logit")
    :   Inverse of the sigmoid function.

    [`log_expit`](scikitplot.cexperimental._cy_cexperimental.log_expit.html#scikitplot.cexperimental._cy_cexperimental.log_expit "scikitplot.cexperimental._cy_cexperimental.log_expit")
    :   Logarithm of the sigmoid function.

    Notes

    This is a Cython-accelerated implementation using the `dfg_number_t` typedef,
    which controls the precision (e.g., `float`, `double`, or `long double`).

    Added in version 0.3.9.

    Examples

    ```
    >>> expit(0.0)
    0.5

    ```
    ```
    >>> expit(0.5)
    0.6224593312018546

    ```