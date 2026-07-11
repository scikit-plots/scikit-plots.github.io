# logsumexp[#](#logsumexp "Link to this heading")

scikitplot.cexperimental.\_logsumexp.logsumexp(**a**, **axis=None**, **b=None**, **keepdims=False**, **return\_sign=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/cexperimental/_logsumexp.py#L58)[#](#scikitplot.cexperimental._logsumexp.logsumexp "Link to this definition")
:   Compute the log of the sum of exponentials of input elements.

    Parameters:
    :   ****a****array\_like
        :   Input array.

        ****axis****None or int or tuple of ints, optional
        :   Axis or axes over which the sum is taken. By default `axis` is None,
            and all elements are summed.

            Added in version 0.11.0.

        ****b****array-like, optional
        :   Scaling factor for exp(`a`) must be of the same shape as `a` or
            broadcastable to `a`. These values may be negative in order to
            implement subtraction.

            Added in version 0.12.0.

        ****keepdims****bool, optional
        :   If this is set to True, the axes which are reduced are left in the
            result as dimensions with size one. With this option, the result
            will broadcast correctly against the original array.

            Added in version 0.15.0.

        ****return\_sign****bool, optional
        :   If this is set to True, the result will be a pair containing sign
            information; if False, results that are negative will be returned
            as NaN. Default is False (no sign information).

            Added in version 0.16.0.

    Returns:
    :   ****res****ndarray
        :   The result, `np.log(np.sum(np.exp(a)))` calculated in a numerically
            more stable way. If `b` is given then `np.log(np.sum(b*np.exp(a)))`
            is returned. If `return_sign` is True, `res` contains the log of
            the absolute value of the argument.

        ****sgn****ndarray
        :   If `return_sign` is True, this will be an array of floating-point
            numbers matching res containing +1, 0, -1 (for real-valued inputs)
            or a complex phase (for complex inputs). This gives the sign of the
            argument of the logarithm in `res`.
            If `return_sign` is False, only one result is returned.

    > **See also**
    > [`numpy.logaddexp`](https://numpy.org/devdocs/reference/generated/numpy.logaddexp.html#numpy.logaddexp "(in NumPy v2.6.dev0)"), [`numpy.logaddexp2`](https://numpy.org/devdocs/reference/generated/numpy.logaddexp2.html#numpy.logaddexp2 "(in NumPy v2.6.dev0)")

    Notes

    NumPy has a logaddexp function which is very similar to `logsumexp`, but
    only handles two arguments. `logaddexp.reduce` is similar to this
    function, but may be less stable.

    The logarithm is a multivalued function: for each \(x\) there is an
    infinite number of \(z\) such that \(exp(z) = x\). The convention
    is to return the \(z\) whose imaginary part lies in \((-pi, pi]\).

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from scipy.special import logsumexp
    >>> a = np.arange(10)
    >>> logsumexp(a)
    9.4586297444267107
    >>> np.log(np.sum(np.exp(a)))
    9.4586297444267107

    ```

    With weights

    ```
    >>> a = np.arange(10)
    >>> b = np.arange(10, 0, -1)
    >>> logsumexp(a, b=b)
    9.9170178533034665
    >>> np.log(np.sum(b * np.exp(a)))
    9.9170178533034647

    ```

    Returning a sign flag

    ```
    >>> logsumexp([1, 2], b=[1, -1], return_sign=True)
    (1.5413248546129181, -1.0)

    ```

    Notice that `logsumexp` does not directly support masked arrays. To use it
    on a masked array, convert the mask into zero weights:

    ```
    >>> a = np.ma.array([np.log(2), 2, np.log(3)], mask=[False, True, False])
    >>> b = (~a.mask).astype(int)
    >>> logsumexp(a.data, b=b), np.log(5)
    1.6094379124341005, 1.6094379124341005

    ```
    Go BackOpen In Tab