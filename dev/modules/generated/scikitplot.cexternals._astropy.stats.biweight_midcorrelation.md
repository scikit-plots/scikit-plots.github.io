# biweight\_midcorrelation[#](#biweight-midcorrelation "Link to this heading")

scikitplot.cexternals.\_astropy.stats.biweight\_midcorrelation(**x**, **y**, **c=9.0**, **M=None**, **modify\_sample\_size=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/biweight.py#L708)[#](#scikitplot.cexternals._astropy.stats.biweight_midcorrelation "Link to this definition")
:   Compute the biweight midcorrelation between two variables.

    The [biweight midcorrelation](https://en.wikipedia.org/wiki/Biweight_midcorrelation) is a
    measure of similarity between samples. It is given by:

    \[r\_{bicorr} = \frac{\zeta\_{xy}}{\sqrt{\zeta\_{xx} \ \zeta\_{yy}}}\]

    where \(\zeta\_{xx}\) is the biweight midvariance of \(x\),
    \(\zeta\_{yy}\) is the biweight midvariance of \(y\), and
    \(\zeta\_{xy}\) is the biweight midcovariance of \(x\) and
    \(y\).

    Parameters:
    :   ****x, y****1D array-like
        :   Input arrays for the two variables. `x` and `y` must be 1D
            arrays and have the same number of elements.

        ****c****float, optional
        :   Tuning constant for the biweight estimator (default = 9.0). See
            `biweight_midcovariance` for more details.

        ****M****float or array-like, optional
        :   The location estimate. If `M` is a scalar value, then its
            value will be used for the entire array (or along each `axis`,
            if specified). If `M` is an array, then its must be an array
            containing the location estimate along each `axis` of the
            input array. If `None` (default), then the median of the input
            array will be used (or along each `axis`, if specified). See
            `biweight_midcovariance` for more details.

        ****modify\_sample\_size****bool, optional
        :   If `False` (default), then the sample size used is the total
            number of elements in the array (or along the input `axis`, if
            specified), which follows the standard definition of biweight
            midcovariance. If `True`, then the sample size is reduced to
            correct for any rejected values (i.e. the sample size used
            includes only the non-rejected values), which results in a value
            closer to the true midcovariance for small sample sizes or for a
            large number of rejected values. See `biweight_midcovariance`
            for more details.

    Returns:
    :   ****biweight\_midcorrelation****float
        :   The biweight midcorrelation between `x` and `y`.

    Parameters:
    :   * ****x**** (**ArrayLike**)
        * ****y**** (**ArrayLike**)
        * ****c**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****M**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **ArrayLike** **|** **None**)
        * ****modify\_sample\_size**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    > **See also**
    > [`biweight_scale`](scikitplot.cexternals._astropy.stats.biweight_scale.html#scikitplot.cexternals._astropy.stats.biweight_scale "scikitplot.cexternals._astropy.stats.biweight_scale"), [`biweight_midvariance`](scikitplot.cexternals._astropy.stats.biweight_midvariance.html#scikitplot.cexternals._astropy.stats.biweight_midvariance "scikitplot.cexternals._astropy.stats.biweight_midvariance"), [`biweight_midcovariance`](scikitplot.cexternals._astropy.stats.biweight_midcovariance.html#scikitplot.cexternals._astropy.stats.biweight_midcovariance "scikitplot.cexternals._astropy.stats.biweight_midcovariance"), [`biweight_location`](scikitplot.cexternals._astropy.stats.biweight_location.html#scikitplot.cexternals._astropy.stats.biweight_location "scikitplot.cexternals._astropy.stats.biweight_location")

    References

    [1]

    <https://en.wikipedia.org/wiki/Biweight_midcorrelation>

    Examples

    Try it in your browser!

    Calculate the biweight midcorrelation between two variables:

    ```
    >>> import numpy as np
    >>> from astropy.stats import biweight_midcorrelation
    >>> rng = np.random.default_rng(12345)
    >>> x = rng.normal(0, 1, 200)
    >>> y = rng.normal(0, 3, 200)
    >>> # Introduce an obvious outlier
    >>> x[0] = 30.0
    >>> bicorr = biweight_midcorrelation(x, y)
    >>> print(bicorr)
    -0.09203238319481295

    ```
    Go BackOpen In Tab