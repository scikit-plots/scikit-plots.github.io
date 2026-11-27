# vtest[#](#vtest "Link to this heading")

scikitplot.cexternals.\_astropy.stats.vtest(**data**, **mu=0.0**, **axis=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/circstats.py#L475)[#](#scikitplot.cexternals._astropy.stats.vtest "Link to this definition")
:   Performs the Rayleigh test of uniformity where the alternative
    hypothesis H1 is assumed to have a known mean angle `mu`.

    Parameters:
    :   ****data****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.

        ****mu****float or `~astropy.units.Quantity` [‘angle’], optional
        :   Mean angle. Assumed to be known.

        ****axis****int, optional
        :   Axis along which the V test will be performed.

        ****weights****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights` represents a
            weighting factor for each group such that `sum(weights, axis)`
            equals the number of observations. See [[1]](#rb18851392311-1), remark 1.4, page 22,
            for detailed explanation.

    Returns:
    :   ****p-value****float or `~astropy.units.Quantity` [‘dimensionless’]

    Parameters:
    :   * ****data**** (**NDArray** **|** **DummyQuantity**)
        * ****mu**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **DummyQuantity** **|** **None**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****weights**** (**NDArray** **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **DummyQuantity**

    References

    [[1](#id1)]

    S. R. Jammalamadaka, A. SenGupta. “Topics in Circular Statistics”.
    Series on Multivariate Analysis, Vol. 5, 2001.

    [2]

    C. Agostinelli, U. Lund. “Circular Statistics from ‘Topics in
    Circular Statistics (2001)’”. 2015.
    <<https://cran.r-project.org/web/packages/CircStats/CircStats.pdf>>

    [3]

    M. Chirstman., C. Miller. “Testing a Sample of Directions for
    Uniformity.” Lecture Notes, STA 6934/5805. University of Florida, 2007.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from astropy.stats import vtest
    >>> from astropy import units as u
    >>> data = np.array([130, 90, 0, 145])*u.deg
    >>> vtest(data)
    <Quantity 0.6223678199713766>

    ```
    Go BackOpen In Tab