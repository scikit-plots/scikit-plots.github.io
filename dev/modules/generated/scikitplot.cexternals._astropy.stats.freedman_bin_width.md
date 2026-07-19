# freedman\_bin\_width[#](#freedman-bin-width "Link to this heading")

scikitplot.cexternals.\_astropy.stats.freedman\_bin\_width(**data**, **return\_bins=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/cexternals/_astropy/stats/histogram.py#L235)[#](#scikitplot.cexternals._astropy.stats.freedman_bin_width "Link to this definition")
:   Return the optimal histogram bin width using the Freedman-Diaconis rule.

    The Freedman-Diaconis rule is a normal reference rule like Scott’s
    rule, but uses rank-based statistics for results which are more robust
    to deviations from a normal distribution.

    Parameters:
    :   ****data****array-like, ndim=1
        :   observed (one-dimensional) data

        ****return\_bins****bool, optional
        :   if True, then return the bin edges

    Returns:
    :   ****width****float
        :   optimal bin width using the Freedman-Diaconis rule

        ****bins****ndarray
        :   bin edges: returned if `return_bins` is True

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****return\_bins**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[**\_ScalarT**]]]

    > **See also**
    > [`knuth_bin_width`](scikitplot.cexternals._astropy.stats.knuth_bin_width.html#scikitplot.cexternals._astropy.stats.knuth_bin_width "scikitplot.cexternals._astropy.stats.knuth_bin_width")


    [`scott_bin_width`](scikitplot.cexternals._astropy.stats.scott_bin_width.html#scikitplot.cexternals._astropy.stats.scott_bin_width "scikitplot.cexternals._astropy.stats.scott_bin_width")


    `bayesian_blocks`


    [`histogram`](scikitplot.cexternals._astropy.stats.histogram.html#scikitplot.cexternals._astropy.stats.histogram "scikitplot.cexternals._astropy.stats.histogram")

    Notes

    The optimal bin width is

    \[\Delta\_b = \frac{2(q\_{75} - q\_{25})}{n^{1/3}}\]

    where \(q\_{N}\) is the \(N\) percent quartile of the data, and
    \(n\) is the number of data points [[1]](#r28b0113263be-1).

    References

    [[1](#id1)]

    D. Freedman & P. Diaconis (1981)
    “On the histogram as a density estimator: L2 theory”.
    Probability Theory and Related Fields 57 (4): 453-476