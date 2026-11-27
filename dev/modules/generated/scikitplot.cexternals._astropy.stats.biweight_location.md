# biweight\_location[#](#biweight-location "Link to this heading")

scikitplot.cexternals.\_astropy.stats.biweight\_location(**data**, **c=6.0**, **M=None**, **axis=None**, **\***, **ignore\_nan=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/biweight.py#L44)[#](#scikitplot.cexternals._astropy.stats.biweight_location "Link to this definition")
:   Compute the biweight location.

    The biweight location is a robust statistic for determining the
    central location of a distribution. It is given by:

    \[\zeta\_{biloc}= M + \frac{\sum\_{|u\_i|<1} \ (x\_i - M) (1 - u\_i^2)^2}
    {\sum\_{|u\_i|<1} \ (1 - u\_i^2)^2}\]

    where \(x\) is the input data, \(M\) is the sample median
    (or the input initial location guess) and \(u\_i\) is given by:

    \[u\_{i} = \frac{(x\_i - M)}{c \* MAD}\]

    where \(c\) is the tuning constant and \(MAD\) is the
    [median absolute deviation](https://en.wikipedia.org/wiki/Median_absolute_deviation). The
    biweight location tuning constant `c` is typically 6.0 (the
    default).

    If \(MAD\) is zero, then the median will be returned.

    Parameters:
    :   ****data****array-like
        :   Input array or object that can be converted to an array.
            `data` can be a `~numpy.ma.MaskedArray`.

        ****c****float, optional
        :   Tuning constant for the biweight estimator (default = 6.0).

        ****M****float or array-like, optional
        :   Initial guess for the location. If `M` is a scalar value,
            then its value will be used for the entire array (or along each
            `axis`, if specified). If `M` is an array, then its must be
            an array containing the initial location estimate along each
            `axis` of the input array. If `None` (default), then the
            median of the input array will be used (or along each `axis`,
            if specified).

        ****axis****int or tuple of int, optional
        :   The axis or axes along which the biweight locations are
            computed. If `None` (default), then the biweight location of
            the flattened input array will be computed.

        ****ignore\_nan****bool, optional
        :   Whether to ignore NaN values in the input `data`.

    Returns:
    :   ****biweight\_location****float or `~numpy.ndarray`
        :   The biweight location of the input data. If `axis` is `None`
            then a scalar will be returned, otherwise a `~numpy.ndarray`
            will be returned.

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****c**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****M**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **ArrayLike** **|** **None**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]** **|** **None**)
        * ****ignore\_nan**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]

    > **See also**
    > [`biweight_scale`](scikitplot.cexternals._astropy.stats.biweight_scale.html#scikitplot.cexternals._astropy.stats.biweight_scale "scikitplot.cexternals._astropy.stats.biweight_scale"), [`biweight_midvariance`](scikitplot.cexternals._astropy.stats.biweight_midvariance.html#scikitplot.cexternals._astropy.stats.biweight_midvariance "scikitplot.cexternals._astropy.stats.biweight_midvariance"), [`biweight_midcovariance`](scikitplot.cexternals._astropy.stats.biweight_midcovariance.html#scikitplot.cexternals._astropy.stats.biweight_midcovariance "scikitplot.cexternals._astropy.stats.biweight_midcovariance")

    References

    [1]

    Beers, Flynn, and Gebhardt (1990; AJ 100, 32) ([https://ui.adsabs.harvard.edu/abs/1990AJ….100…32B](https://ui.adsabs.harvard.edu/abs/1990AJ....100...32B))

    [2]

    <https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/biwloc.htm>

    Examples

    Try it in your browser!

    Generate random variates from a Gaussian distribution and return the
    biweight location of the distribution:

    ```
    >>> import numpy as np
    >>> from astropy.stats import biweight_location
    >>> rand = np.random.default_rng(12345)
    >>> biloc = biweight_location(rand.standard_normal(1000))
    >>> print(biloc)
    0.01535330525461019

    ```
    Go BackOpen In Tab