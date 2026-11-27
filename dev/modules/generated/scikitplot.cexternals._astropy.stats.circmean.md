# circmean[#](#circmean "Link to this heading")

scikitplot.cexternals.\_astropy.stats.circmean(**data**, **axis=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/circstats.py#L85)[#](#scikitplot.cexternals._astropy.stats.circmean "Link to this definition")
:   Computes the circular mean angle of an array of circular data.

    Parameters:
    :   ****data****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.

        ****axis****int, optional
        :   Axis along which circular means are computed. The default is to compute
            the mean of the flattened array.

        ****weights****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights` represents a
            weighting factor for each group such that `sum(weights, axis)`
            equals the number of observations. See [[1]](#r18039b2b50bd-1), remark 1.4, page 22, for
            detailed explanation.

    Returns:
    :   ****circmean****ndarray or `~astropy.units.Quantity`
        :   Circular mean.

    Parameters:
    :   * ****data**** (**NDArray** **|** **DummyQuantity**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****weights**** (**NDArray** **|** **None**)

    Return type:
    :   **NDArray** | **DummyQuantity**

    References

    [[1](#id1)]

    S. R. Jammalamadaka, A. SenGupta. “Topics in Circular Statistics”.
    Series on Multivariate Analysis, Vol. 5, 2001.

    [2]

    C. Agostinelli, U. Lund. “Circular Statistics from ‘Topics in
    Circular Statistics (2001)’”. 2015.
    <<https://cran.r-project.org/web/packages/CircStats/CircStats.pdf>>

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from astropy.stats import circmean
    >>> from astropy import units as u
    >>> data = np.array([51, 67, 40, 109, 31, 358])*u.deg
    >>> circmean(data)
    <Quantity 48.62718088722989 deg>

    ```
    Go BackOpen In Tab