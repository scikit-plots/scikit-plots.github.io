# AxisError[#](#axiserror "Link to this heading")

exception scikitplot.exceptions.AxisError(**axis**, **ndim=None**, **msg\_prefix=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/exceptions.py#L192)[#](#scikitplot.exceptions.AxisError "Link to this definition")
:   Axis supplied was invalid.

    This is raised whenever an `axis` parameter is specified that is larger
    than the number of array dimensions.
    For compatibility with code written against older numpy versions, which
    raised a mixture of [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)") and [`IndexError`](https://docs.python.org/3/builtins/exceptions.html#IndexError "(in Python v3.15)") for this
    situation, this exception subclasses both to ensure that
    `except ValueError` and `except IndexError` statements continue
    to catch `AxisError`.

    Parameters:
    :   ****axis****int or str
        :   The out-of-bounds axis, or a custom exception message string.
            When a custom message is supplied, `ndim` must be omitted (or
            `None`) and `msg_prefix` must be `None`.

        ****ndim****int, optional
        :   The number of array dimensions. Required when `axis` is an int.

        ****msg\_prefix****str, optional
        :   A prefix prepended to the auto-generated message, separated by
            `": "`.

    Attributes:
    :   ****axis****int or None
        :   The out-of-bounds axis, or `None` for the single-argument form.

        ****ndim****int or None
        :   The number of array dimensions, or `None` for the single-argument
            form.

    Notes

    Added in version 1.22: The `axis` and `ndim` attributes.

    The `__slots__` declaration prevents creation of a `__dict__`,
    keeping instances lightweight.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> array_1d = np.arange(10)
    >>> np.cumsum(array_1d, axis=1)
    Traceback (most recent call last):
      ...
    numpy.exceptions.AxisError: axis 1 is out of bounds for array of dimension 1

    ```

    Negative axes are preserved:

    ```
    >>> np.cumsum(array_1d, axis=-2)
    Traceback (most recent call last):
      ...
    numpy.exceptions.AxisError: axis -2 is out of bounds for array of dimension 1

    ```

    The class constructor generally takes the axis and arrays’
    dimensionality as arguments:

    ```
    >>> print(np.exceptions.AxisError(2, 1, msg_prefix='error'))
    error: axis 2 is out of bounds for array of dimension 1

    ```

    Alternatively, a custom exception message can be passed:

    ```
    >>> print(np.exceptions.AxisError('Custom error message'))
    Custom error message

    ```
    Go BackOpen In Tab

    Annotation:
    :   Unrecognized objtype: `exception`