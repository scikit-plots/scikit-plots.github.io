# fold\_intervals[#](#fold-intervals "Link to this heading")

scikitplot.cexternals.\_astropy.stats.fold\_intervals(**intervals**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/cexternals/_astropy/stats/funcs.py#L1534)[#](#scikitplot.cexternals._astropy.stats.fold_intervals "Link to this definition")
:   Fold the weighted intervals to the interval (0,1).

    Convert a list of intervals (ai, bi, wi) to a list of non-overlapping
    intervals covering (0,1). Each output interval has a weight equal
    to the sum of the wis of all the intervals that include it. All intervals
    are interpreted modulo 1, and weights are accumulated counting
    multiplicity. This is appropriate, for example, if you have one or more
    blocks of observation and you want to determine how much observation
    time was spent on different parts of a system’s orbit (the blocks
    should be converted to units of the orbital period first).

    Parameters:
    :   ****intervals****list of (3,) tuple
        :   For each tuple (ai,bi,wi); ai and bi are the limits of the interval,
            and wi is the weight to apply to the interval.

    Returns:
    :   ****breaks****(N,) array of float
        :   The endpoints of a set of intervals covering [0,1]; breaks[0]=0 and
            breaks[-1] = 1

        ****weights****(N-1,) array of float
        :   The ith element is the sum of number of times the interval
            breaks[i],breaks[i+1] is included in each interval times the weight
            associated with that interval.

    Parameters:
    :   ****intervals**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**,** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**,** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]**)

    Return type:
    :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]], [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]]