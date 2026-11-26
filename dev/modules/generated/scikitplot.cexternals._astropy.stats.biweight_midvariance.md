# biweight\_midvariance[#](#biweight-midvariance "Link to this heading")

scikitplot.cexternals.\_astropy.stats.biweight\_midvariance(**data**, **c=9.0**, **M=None**, **axis=None**, **modify\_sample\_size=False**, **\***, **ignore\_nan=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cexternals/_astropy/stats/biweight.py#L308)[#](#scikitplot.cexternals._astropy.stats.biweight_midvariance "Link to this definition")
:   Compute the biweight midvariance.

    The biweight midvariance is a robust statistic for determining the
    variance of a distribution. Its square root is a robust estimator
    of scale (i.e. standard deviation). It is given by:

    \[\zeta\_{bivar} = n \ \frac{\sum\_{|u\_i| < 1} \
    (x\_i - M)^2 (1 - u\_i^2)^4} {(\sum\_{|u\_i| < 1} \
    (1 - u\_i^2) (1 - 5u\_i^2))^2}\]

    where \(x\) is the input data, \(M\) is the sample median
    (or the input location) and \(u\_i\) is given by:

    \[u\_{i} = \frac{(x\_i - M)}{c \* MAD}\]

    where \(c\) is the tuning constant and \(MAD\) is the
    [median absolute deviation](https://en.wikipedia.org/wiki/Median_absolute_deviation). The
    biweight midvariance tuning constant `c` is typically 9.0 (the
    default).

    If \(MAD\) is zero, then zero will be returned.

    For the standard definition of [biweight midvariance](https://en.wikipedia.org/wiki/Robust_measures_of_scale#The_biweight_midvariance),
    \(n\) is the total number of points in the array (or along the
    input `axis`, if specified). That definition is used if
    `modify_sample_size` is `False`, which is the default.

    However, if `modify_sample_size = True`, then \(n\) is the
    number of points for which \(|u\_i| < 1\) (i.e. the total number
    of non-rejected values), i.e.

    \[n = \sum\_{|u\_i| < 1} \ 1\]

    which results in a value closer to the true variance for small
    sample sizes or for a large number of rejected values.

    Parameters:
    :   ****data****array-like
        :   Input array or object that can be converted to an array.
            `data` can be a `~numpy.ma.MaskedArray`.

        ****c****float, optional
        :   Tuning constant for the biweight estimator (default = 9.0).

        ****M****float or array-like, optional
        :   The location estimate. If `M` is a scalar value, then its
            value will be used for the entire array (or along each `axis`,
            if specified). If `M` is an array, then its must be an array
            containing the location estimate along each `axis` of the
            input array. If `None` (default), then the median of the input
            array will be used (or along each `axis`, if specified).

        ****axis****int or tuple of int, optional
        :   The axis or axes along which the biweight midvariances are
            computed. If `None` (default), then the biweight midvariance of
            the flattened input array will be computed.

        ****modify\_sample\_size****bool, optional
        :   If `False` (default), then the sample size used is the total
            number of elements in the array (or along the input `axis`, if
            specified), which follows the standard definition of biweight
            midvariance. If `True`, then the sample size is reduced to
            correct for any rejected values (i.e. the sample size used
            includes only the non-rejected values), which results in a value
            closer to the true variance for small sample sizes or for a
            large number of rejected values.

        ****ignore\_nan****bool, optional
        :   Whether to ignore NaN values in the input `data`.

    Returns:
    :   ****biweight\_midvariance****float or `~numpy.ndarray`
        :   The biweight midvariance of the input data. If `axis` is
            `None` then a scalar will be returned, otherwise a
            `~numpy.ndarray` will be returned.

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****c**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****M**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **ArrayLike** **|** **None**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]** **|** **None**)
        * ****modify\_sample\_size**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****ignore\_nan**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    > **See also**
    > [`biweight_midcovariance`](scikitplot.cexternals._astropy.stats.biweight_midcovariance.html#scikitplot.cexternals._astropy.stats.biweight_midcovariance "scikitplot.cexternals._astropy.stats.biweight_midcovariance"), [`biweight_midcorrelation`](scikitplot.cexternals._astropy.stats.biweight_midcorrelation.html#scikitplot.cexternals._astropy.stats.biweight_midcorrelation "scikitplot.cexternals._astropy.stats.biweight_midcorrelation"), [`astropy.stats.mad_std`](https://docs.astropy.org/en/latest/api/astropy.stats.mad_std.html#astropy.stats.mad_std "(in Astropy v9.0)"), [`astropy.stats.median_absolute_deviation`](https://docs.astropy.org/en/latest/api/astropy.stats.median_absolute_deviation.html#astropy.stats.median_absolute_deviation "(in Astropy v9.0)")

    References

    [1]

    <https://en.wikipedia.org/wiki/Robust_measures_of_scale#The_biweight_midvariance>

    [2]

    Beers, Flynn, and Gebhardt (1990; AJ 100, 32) ([https://ui.adsabs.harvard.edu/abs/1990AJ….100…32B](https://ui.adsabs.harvard.edu/abs/1990AJ....100...32B))

    Examples

    Try it in your browser!

    Generate random variates from a Gaussian distribution and return the
    biweight midvariance of the distribution:

    ```
    >>> import numpy as np
    >>> from astropy.stats import biweight_midvariance
    >>> rand = np.random.default_rng(12345)
    >>> bivar = biweight_midvariance(rand.standard_normal(1000))
    >>> print(bivar)
    1.0484350639638342

    ```
    Go BackOpen In Tab