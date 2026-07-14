# cdf\_from\_intervals[#](#cdf-from-intervals "Link to this heading")

scikitplot.cexternals.\_astropy.stats.cdf\_from\_intervals(**breaks**, **totals**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/cexternals/_astropy/stats/funcs.py#L1588)[#](#scikitplot.cexternals._astropy.stats.cdf_from_intervals "Link to this definition")
:   Construct a callable piecewise-linear CDF from a pair of arrays.

    Take a pair of arrays in the format returned by fold\_intervals and
    make a callable cumulative distribution function on the interval
    (0,1).

    Parameters:
    :   ****breaks****(N,) array of float
        :   The boundaries of successive intervals.

        ****totals****(N-1,) array of float
        :   The weight for each interval.

    Returns:
    :   ****f****callable
        :   A cumulative distribution function corresponding to the
            piecewise-constant probability distribution given by breaks, weights

    Parameters:
    :   * ****breaks**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]**)
        * ****totals**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]**)

    Return type:
    :   [**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.14)")