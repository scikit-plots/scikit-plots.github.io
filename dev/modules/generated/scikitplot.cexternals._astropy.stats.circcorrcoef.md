# circcorrcoef[#](#circcorrcoef "Link to this heading")

scikitplot.cexternals.\_astropy.stats.circcorrcoef(**alpha**, **beta**, **axis=None**, **weights\_alpha=None**, **weights\_beta=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cexternals/_astropy/stats/circstats.py#L333)[#](#scikitplot.cexternals._astropy.stats.circcorrcoef "Link to this definition")
:   Computes the circular correlation coefficient between two array of
    circular data.

    Parameters:
    :   ****alpha****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.

        ****beta****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.

        ****axis****int, optional
        :   Axis along which circular correlation coefficients are computed.
            The default is the compute the circular correlation coefficient of the
            flattened array.

        ****weights\_alpha****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights_alpha`
            represents a weighting factor for each group such that
            `sum(weights_alpha, axis)` equals the number of observations.
            See [[1]](#r8328030b8054-1), remark 1.4, page 22, for detailed explanation.

        ****weights\_beta****numpy.ndarray, optional
        :   See description of `weights_alpha`.

    Returns:
    :   ****rho****ndarray or `~astropy.units.Quantity` [‘dimensionless’]
        :   Circular correlation coefficient.

    Parameters:
    :   * ****alpha**** (**NDArray** **|** **DummyQuantity**)
        * ****beta**** (**NDArray** **|** **DummyQuantity**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****weights\_alpha**** (**NDArray** **|** **None**)
        * ****weights\_beta**** (**NDArray** **|** **None**)

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
    >>> from astropy.stats import circcorrcoef
    >>> from astropy import units as u
    >>> alpha = np.array([356, 97, 211, 232, 343, 292, 157, 302, 335, 302,
    ...                   324, 85, 324, 340, 157, 238, 254, 146, 232, 122,
    ...                   329])*u.deg
    >>> beta = np.array([119, 162, 221, 259, 270, 29, 97, 292, 40, 313, 94,
    ...                  45, 47, 108, 221, 270, 119, 248, 270, 45, 23])*u.deg
    >>> circcorrcoef(alpha, beta)
    <Quantity 0.2704648826748831>

    ```
    Go BackOpen In Tab