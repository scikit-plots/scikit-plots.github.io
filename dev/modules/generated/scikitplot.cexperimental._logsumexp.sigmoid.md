# sigmoid[#](#sigmoid "Link to this heading")

scikitplot.cexperimental.\_logsumexp.sigmoid(**x**, **axis=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/cexperimental/_logsumexp.py#L19)[#](#scikitplot.cexperimental._logsumexp.sigmoid "Link to this definition")
:   Compute the sigmoid function for the input array `x`.

    The sigmoid function is defined as:

    ```
    sigmoid(x) = 1 / (1 + exp(-x))

    ```
    \[\text{sigmoid}(x) = \frac{1}{1 + e^{-x}}\]

    Added in version 0.3.9.

    Parameters:
    :   ****x****array-like
        :   Input array for which to compute the sigmoid. This can be a list,
            numpy array, or any array-like structure.

        ****axis****int or None, optional
        :   Axis or axes along which to compute the sigmoid. If None, the sigmoid
            will be computed over the entire array. The default is None.

    Returns:
    :   numpy.ndarray
        :   The sigmoid of each element in `x`, with the same shape as `x`.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from scikitplot.cexperimental._logsumexp import sigmoid
    >>> x = np.array([0, 1, 2])
    >>> sigmoid(x)
    array([0.5       , 0.7310586 , 0.88079708])

    ```
    Go BackOpen In Tab