# knuth\_bin\_width[#](#knuth-bin-width "Link to this heading")

scikitplot.cexternals.\_astropy.stats.knuth\_bin\_width(**data**, **return\_bins=False**, **quiet=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/cexternals/_astropy/stats/histogram.py#L313)[#](#scikitplot.cexternals._astropy.stats.knuth_bin_width "Link to this definition")
:   Return the optimal histogram bin width using Knuth’s rule.

    Knuth’s rule is a fixed-width, Bayesian approach to determining
    the optimal bin width of a histogram.

    Parameters:
    :   ****data****array-like, ndim=1
        :   observed (one-dimensional) data

        ****return\_bins****bool, optional
        :   if True, then return the bin edges

        ****quiet****bool, optional
        :   if True (default) then suppress stdout output from scipy.optimize

    Returns:
    :   ****dx****float
        :   optimal bin width. Bins are measured starting at the first data point.

        ****bins****ndarray
        :   bin edges: returned if `return_bins` is True

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****return\_bins**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)
        * ****quiet**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[**\_ScalarT**]]]

    > **See also**
    > [`freedman_bin_width`](scikitplot.cexternals._astropy.stats.freedman_bin_width.html#scikitplot.cexternals._astropy.stats.freedman_bin_width "scikitplot.cexternals._astropy.stats.freedman_bin_width")


    [`scott_bin_width`](scikitplot.cexternals._astropy.stats.scott_bin_width.html#scikitplot.cexternals._astropy.stats.scott_bin_width "scikitplot.cexternals._astropy.stats.scott_bin_width")


    `bayesian_blocks`


    [`histogram`](scikitplot.cexternals._astropy.stats.histogram.html#scikitplot.cexternals._astropy.stats.histogram "scikitplot.cexternals._astropy.stats.histogram")

    Notes

    The optimal number of bins is the value M which maximizes the function

    \[F(M|x,I) = n\log(M) + \log\Gamma(\frac{M}{2})
    - M\log\Gamma(\frac{1}{2})
    - \log\Gamma(\frac{2n+M}{2})
    + \sum\_{k=1}^M \log\Gamma(n\_k + \frac{1}{2})\]

    where \(\Gamma\) is the Gamma function, \(n\) is the number of
    data points, \(n\_k\) is the number of measurements in bin \(k\)
    [[1]](#r2dfee2234ab7-1).

    References

    [[1](#id1)]

    Knuth, K.H. “Optimal Data-Based Binning for Histograms”.
    arXiv:0605197, 2006