# circmoment[#](#circmoment "Link to this heading")

scikitplot.cexternals.\_astropy.stats.circmoment(**data**, **p=1.0**, **centered=False**, **axis=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cexternals/_astropy/stats/circstats.py#L273)[#](#scikitplot.cexternals._astropy.stats.circmoment "Link to this definition")
:   Computes the `p`-th trigonometric circular moment for an array
    of circular data.

    Parameters:
    :   ****data****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.

        ****p****float, optional
        :   Order of the circular moment.

        ****centered****bool, optional
        :   If `True`, central circular moments are computed. Default value is
            `False`.

        ****axis****int, optional
        :   Axis along which circular moments are computed. The default is to
            compute the circular moment of the flattened array.

        ****weights****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights` represents a
            weighting factor for each group such that `sum(weights, axis)`
            equals the number of observations. See [[1]](#rfd160ef6ed81-1), remark 1.4, page 22,
            for detailed explanation.

    Returns:
    :   ****circmoment****ndarray or `~astropy.units.Quantity`
        :   The first and second elements correspond to the direction and length of
            the `p`-th circular moment, respectively.

    Parameters:
    :   * ****data**** (**NDArray** **|** **DummyQuantity**)
        * ****p**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****centered**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
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
    >>> from astropy.stats import circmoment
    >>> from astropy import units as u
    >>> data = np.array([51, 67, 40, 109, 31, 358])*u.deg
    >>> circmoment(data, p=2)
    (<Quantity 90.99263082432564 deg>, <Quantity 0.48004283892950717>)

    ```
    Go BackOpen In Tab