# circvar[#](#circvar "Link to this heading")

scikitplot.cexternals.\_astropy.stats.circvar(**data**, **axis=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cexternals/_astropy/stats/circstats.py#L131)[#](#scikitplot.cexternals._astropy.stats.circvar "Link to this definition")
:   Computes the circular variance of an array of circular data.

    There are some concepts for defining measures of dispersion for circular
    data. The variance implemented here is based on the definition given by
    [[1]](#r384bf520e4af-1), which is also the same used by the R package ‘CircStats’ [[2]](#r384bf520e4af-2).

    Parameters:
    :   ****data****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.
            Dimensionless, if Quantity.

        ****axis****int, optional
        :   Axis along which circular variances are computed. The default is to
            compute the variance of the flattened array.

        ****weights****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights` represents a
            weighting factor for each group such that `sum(weights, axis)`
            equals the number of observations. See [[1]](#r384bf520e4af-1), remark 1.4, page 22,
            for detailed explanation.

    Returns:
    :   ****circvar****ndarray or `~astropy.units.Quantity` [‘dimensionless’]
        :   Circular variance.

    Parameters:
    :   * ****data**** (**NDArray** **|** **DummyQuantity**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****weights**** (**NDArray** **|** **None**)

    Return type:
    :   **NDArray** | **DummyQuantity**

    Notes

    For Scipy < 1.9.0, `scipy.stats.circvar` uses a different
    definition based on an approximation using the limit of small
    angles that approaches the linear variance. For Scipy >= 1.9.0,
    `scipy.stats.cirvar` uses a definition consistent with this
    implementation.

    References

    [1]
    ([1](#id1),[2](#id3))

    S. R. Jammalamadaka, A. SenGupta. “Topics in Circular Statistics”.
    Series on Multivariate Analysis, Vol. 5, 2001.

    [[2](#id2)]

    C. Agostinelli, U. Lund. “Circular Statistics from ‘Topics in
    Circular Statistics (2001)’”. 2015.
    <<https://cran.r-project.org/web/packages/CircStats/CircStats.pdf>>

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from astropy.stats import circvar
    >>> from astropy import units as u
    >>> data = np.array([51, 67, 40, 109, 31, 358])*u.deg
    >>> circvar(data)
    <Quantity 0.16356352748437508>

    ```
    Go BackOpen In Tab