# scott\_bin\_width[#](#scott-bin-width "Link to this heading")

scikitplot.cexternals.\_astropy.stats.scott\_bin\_width(**data**, **return\_bins=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/cexternals/_astropy/stats/histogram.py#L171)[#](#scikitplot.cexternals._astropy.stats.scott_bin_width "Link to this definition")
:   Return the optimal histogram bin width using Scott’s rule.

    Scott’s rule is a normal reference rule: it minimizes the integrated
    mean squared error in the bin approximation under the assumption that the
    data is approximately Gaussian.

    Parameters:
    :   ****data****array-like, ndim=1
        :   observed (one-dimensional) data

        ****return\_bins****bool, optional
        :   if True, then return the bin edges

    Returns:
    :   ****width****float
        :   optimal bin width using Scott’s rule

        ****bins****ndarray
        :   bin edges: returned if `return_bins` is True

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****return\_bins**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[**\_ScalarT**]]]

    > **See also**
    > [`knuth_bin_width`](scikitplot.cexternals._astropy.stats.knuth_bin_width.html#scikitplot.cexternals._astropy.stats.knuth_bin_width "scikitplot.cexternals._astropy.stats.knuth_bin_width")


    [`freedman_bin_width`](scikitplot.cexternals._astropy.stats.freedman_bin_width.html#scikitplot.cexternals._astropy.stats.freedman_bin_width "scikitplot.cexternals._astropy.stats.freedman_bin_width")


    `bayesian_blocks`


    [`histogram`](scikitplot.cexternals._astropy.stats.histogram.html#scikitplot.cexternals._astropy.stats.histogram "scikitplot.cexternals._astropy.stats.histogram")

    Notes

    The optimal bin width is

    \[\Delta\_b = \frac{3.5\sigma}{n^{1/3}}\]

    where \(\sigma\) is the standard deviation of the data, and
    \(n\) is the number of data points [[1]](#r87aedc4e5d53-1).

    References

    [[1](#id1)]

    Scott, David W. (1979). “On optimal and data-based histograms”.
    Biometricka 66 (3): 605-610