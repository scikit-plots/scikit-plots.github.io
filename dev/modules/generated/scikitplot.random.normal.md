# normal[#](#normal "Link to this heading")

scikitplot.random.normal(**self**, **loc=0.0**, **scale=1.0**, **size=None**)[#](#scikitplot.random.normal "Link to this definition")
:   Normal distribution (Box-Muller transform).

    Parameters:
    :   ****loc****float, default=0.0
        :   Mean

        ****scale****float, default=1.0
        :   Standard deviation

        ****size****int or tuple, optional
        :   Output shape

    Returns:
    :   float or ndarray
        :   Normal samples

    Notes

    Uses the Box-Muller transform:
    :   z = sqrt(-2 \* log(u1)) \* cos(2 \* pi \* u2)

    where u1, u2 are i.i.d. Uniform(0, 1).

    u1 is clamped away from zero to prevent log(0) = -inf. Since
    KissBitGenerator.random() maps [0, 2^64-1] onto [0.0, 1.0) and zero
    is a valid raw value, u1 == 0.0 is possible (probability 1/2^64).

    The size != None path is fully vectorized in NumPy’s C layer.
    No Python list or scalar boxing is performed, which avoids the
    GCC -Wstringop-overflow false positives triggered by Python 3.13t’s
    free-threaded Py\_INCREF atomic operations.

    Examples

    Try it in your browser!
    ```
    >>> gen = KissGenerator(42)
    >>> gen.normal(0, 1, size=1000)
    array([...])

    ```
    Go BackOpen In Tab