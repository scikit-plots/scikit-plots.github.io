# cdf\_from\_intervals[#](#cdf-from-intervals "Link to this heading")

scikitplot.cexternals.\_astropy.stats.cdf\_from\_intervals(**breaks**, **totals**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cexternals/_astropy/stats/funcs.py#L1588)[#](#scikitplot.cexternals._astropy.stats.cdf_from_intervals "Link to this definition")
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
    :   * ****breaks**** (**NDArray****[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]**)
        * ****totals**** (**NDArray****[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]**)

    Return type:
    :   [**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.14)")