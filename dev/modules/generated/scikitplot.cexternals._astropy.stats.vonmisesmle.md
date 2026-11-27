# vonmisesmle[#](#vonmisesmle "Link to this heading")

scikitplot.cexternals.\_astropy.stats.vonmisesmle(**data**, **axis=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/circstats.py#L566)[#](#scikitplot.cexternals._astropy.stats.vonmisesmle "Link to this definition")
:   Computes the Maximum Likelihood Estimator (MLE) for the parameters of
    the von Mises distribution.

    Parameters:
    :   ****data****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.

        ****axis****int, optional
        :   Axis along which the mle will be computed.

        ****weights****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights` represents a
            weighting factor for each group such that `sum(weights, axis)`
            equals the number of observations. See [[1]](#r1c84340f5385-1), remark 1.4, page 22,
            for detailed explanation.

    Returns:
    :   ****mu****float or `~astropy.units.Quantity`
        :   The mean (aka location parameter).

        ****kappa****float or `~astropy.units.Quantity` [‘dimensionless’]
        :   The concentration parameter.

    Parameters:
    :   * ****data**** (**NDArray** **|** **DummyQuantity**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****weights**** (**NDArray** **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **DummyQuantity**, [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **DummyQuantity**]

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
    >>> from astropy.stats import vonmisesmle
    >>> from astropy import units as u
    >>> data = np.array([130, 90, 0, 145])*u.deg
    >>> vonmisesmle(data)
    (<Quantity 101.16894320013179 deg>, <Quantity 1.49358958737054>)

    ```
    Go BackOpen In Tab