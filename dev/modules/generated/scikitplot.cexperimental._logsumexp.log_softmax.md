# log\_softmax[#](#log-softmax "Link to this heading")

scikitplot.cexperimental.\_logsumexp.log\_softmax(**x**, **axis=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/cexperimental/_logsumexp.py#L383)[#](#scikitplot.cexperimental._logsumexp.log_softmax "Link to this definition")
:   Compute the logarithm of the softmax function.

    In principle:

    ```
    log_softmax(x) = log(softmax(x))

    ```

    but using a more accurate implementation.

    Parameters:
    :   ****x****array\_like
        :   Input array.

        ****axis****int or tuple of ints, optional
        :   Axis to compute values along. Default is None and softmax will be
            computed over the entire array `x`.

    Returns:
    :   ****s****ndarray or scalar
        :   An array with the same shape as `x`. Exponential of the result will
            sum to 1 along the specified axis. If `x` is a scalar, a scalar is
            returned.

    Notes

    `log_softmax` is more accurate than `np.log(softmax(x))` with inputs that
    make `softmax` saturate (see examples below).

    Added in version 1.5.0.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from scipy.special import log_softmax
    >>> from scipy.special import softmax
    >>> np.set_printoptions(precision=5)

    ```
    ```
    >>> x = np.array([1000.0, 1.0])

    ```
    ```
    >>> y = log_softmax(x)
    >>> y
    array([   0., -999.])

    ```
    ```
    >>> with np.errstate(divide='ignore'):
    ...     y = np.log(softmax(x))
    >>> y
    array([  0., -inf])

    ```
    Go BackOpen In Tab