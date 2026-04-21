# logit[#](#logit "Link to this heading")

scikitplot.cexperimental.\_cy\_cexperimental.logit(**x0**)[#](#scikitplot.cexperimental._cy_cexperimental.logit "Link to this definition")
:   Compute the logit (inverse sigmoid) of a scalar input.

    The logit function transforms a probability in the interval (0, 1) into
    a real-valued number. It is defined as:

    \[\operatorname{logit}(x) = \log\left(\frac{x}{1 - x}\right)\]

    This function is commonly used in logistic regression and other
    probabilistic models.

    Parameters:
    :   ****x0****dfg\_number\_t
        :   Scalar input value in the range (0, 1). Typically a `float`, `double`,
            or `long double`.

    Returns:
    :   dfg\_number\_t
        :   The logit of the input value, returned with the same type as `x0`.

    > **See also**
    > [`expit`](scikitplot.cexperimental._cy_cexperimental.expit.html#scikitplot.cexperimental._cy_cexperimental.expit "scikitplot.cexperimental._cy_cexperimental.expit")
    :   The sigmoid (logistic) function.

    [`log_expit`](scikitplot.cexperimental._cy_cexperimental.log_expit.html#scikitplot.cexperimental._cy_cexperimental.log_expit "scikitplot.cexperimental._cy_cexperimental.log_expit")
    :   Logarithm of the sigmoid function.

    Notes

    The input must be strictly within the interval (0, 1) to avoid
    mathematical domain errors (e.g., division by zero or log of zero).

    Added in version 0.3.9.

    Examples

    Try it in your browser!
    ```
    >>> logit(0.5)
    0.0

    ```
    ```
    >>> logit(0.8)
    1.3862943611198906

    ```
    Go BackOpen In Tab