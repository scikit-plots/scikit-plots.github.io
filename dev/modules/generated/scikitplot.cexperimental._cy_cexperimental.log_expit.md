# log\_expit[#](#log-expit "Link to this heading")

scikitplot.cexperimental.\_cy\_cexperimental.log\_expit(**x0**)[#](#scikitplot.cexperimental._cy_cexperimental.log_expit "Link to this definition")
:   Compute the natural logarithm of the sigmoid (expit) of a scalar input.

    The function is defined as:

    \[\log\\_\operatorname{expit}(x) = -\log\left(1 + e^{-x}\right)\]

    This transformation is commonly used when working with log-probabilities
    or in numerically stable implementations of logistic functions.

    Parameters:
    :   ****x0****dfg\_number\_t
        :   Scalar input value. Can be of type `float`, `double`, or `long double`.

    Returns:
    :   dfg\_number\_t
        :   The log-sigmoid of the input value, returned with the same type as `x0`.

    > **See also**
    > [`expit`](scikitplot.cexperimental._cy_cexperimental.expit.html#scikitplot.cexperimental._cy_cexperimental.expit "scikitplot.cexperimental._cy_cexperimental.expit")
    :   The sigmoid function.

    [`logit`](scikitplot.cexperimental._cy_cexperimental.logit.html#scikitplot.cexperimental._cy_cexperimental.logit "scikitplot.cexperimental._cy_cexperimental.logit")
    :   The inverse sigmoid (log-odds) function.

    Notes

    This is a Cython-accelerated implementation using `dfg_number_t`
    as the floating-point type.

    Added in version 0.3.9.

    Examples

    ```
    >>> log_expit(0.5)
    -0.4740769841801067

    ```