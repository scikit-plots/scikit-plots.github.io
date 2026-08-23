# dot[#](#dot "Link to this heading")

scikitplot.nc.dot(**a: [numpy.ndarray](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**, **b: [numpy.ndarray](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**) → [numpy.ndarray](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/nc/_wrappers.py#L193)[#](#scikitplot.nc.dot "Link to this definition")
:   Dot product of two arrays using the C++ NumCpp backend.

    This function behaves similarly to [`numpy.dot`](https://numpy.org/devdocs/reference/generated/numpy.dot.html#numpy.dot "(in NumPy v2.6.dev0)") for 1-D and 2-D
    arrays but executes the computation in C++ via the NumCpp library.

    Parameters:
    :   ****a, b****array\_like
        :   Input vectors or matrices. They are converted to
            [`numpy.ndarray`](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") without copying whenever possible.
            Arrays must

            * have the same dtype, and
            * be 1-D or 2-D.

            For 1-D inputs, the result is a scalar 0-D array.
            For 2-D inputs, standard matrix multiplication rules apply.

    Returns:
    :   ****out****numpy.ndarray
        :   Dot product of `a` and `b`. The result dtype matches the input
            dtype for the supported dtypes.

    Raises:
    :   ValueError
        :   If either input has more than 2 dimensions.

        TypeError
        :   If the dtypes of `a` and `b` do not match, or if the dtype is
            not supported.

    Parameters:
    :   * ****a**** (**ArrayLike**)
        * ****b**** (**ArrayLike**)

    Return type:
    :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    > **See also**
    > [`numpy.dot`](https://numpy.org/devdocs/reference/generated/numpy.dot.html#numpy.dot "(in NumPy v2.6.dev0)")


    [`scikitplot.nc.dot`](#scikitplot.nc.dot "scikitplot.nc.dot")

    Notes

    Use both NumCpp and Numpy. [dpilger26/NumCpp#16](https://github.com/dpilger26/NumCpp/issues/16)

    The computation is performed by the C++ NumCpp implementation
    `nc::dot` on `nc::NdArray` containers obtained via the
    NumCpp pybind interface to [`dot`](#scikitplot.nc.dot "scikitplot.nc.dot").

    This is a low-level C++ binding. It expects NumPy arrays and is
    typically called via [`dot`](#scikitplot.nc.dot "scikitplot.nc.dot"), which accepts
    generic array-like inputs and calls [`numpy.asarray`](https://numpy.org/devdocs/reference/generated/numpy.asarray.html#numpy.asarray "(in NumPy v2.6.dev0)") on them.

    At the moment the following NumPy dtypes are supported:

    * `float64`
    * `float32`
    * `int64`

    Other dtypes will raise a [`TypeError`](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.14)").

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> a = np.array([[1,2],[3,4]])
    >>> b = np.array([[5,6],[7,8]])
    >>> np.dot(a, b)

    ```
    ```
    >>> import scikitplot.nc as nc
    >>> nc.dot(a, b)
    >>> nc.dot([1,2], [3,4])

    ```
    Go BackOpen In Tab