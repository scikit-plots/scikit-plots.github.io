# rayleightest[#](#rayleightest "Link to this heading")

scikitplot.cexternals.\_astropy.stats.rayleightest(**data**, **axis=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cexternals/_astropy/stats/circstats.py#L402)[#](#scikitplot.cexternals._astropy.stats.rayleightest "Link to this definition")
:   Performs the Rayleigh test of uniformity.

    This test is used to identify a non-uniform distribution, i.e. it is
    designed for detecting an unimodal deviation from uniformity. More
    precisely, it assumes the following hypotheses:
    - H0 (null hypothesis): The population is distributed uniformly around the
    circle.
    - H1 (alternative hypothesis): The population is not distributed uniformly
    around the circle.
    Small p-values suggest to reject the null hypothesis.

    Parameters:
    :   ****data****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.

        ****axis****int, optional
        :   Axis along which the Rayleigh test will be performed.

        ****weights****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights` represents a
            weighting factor for each group such that `np.sum(weights, axis)`
            equals the number of observations.
            See [[1]](#r766f7c3f3213-1), remark 1.4, page 22, for detailed explanation.

    Returns:
    :   ****p-value****float or `~astropy.units.Quantity` [‘dimensionless’]

    Parameters:
    :   * ****data**** (**NDArray** **|** **DummyQuantity**)
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

    [4]

    D. Wilkie. “Rayleigh Test for Randomness of Circular Data”. Applied
    Statistics. 1983.
    <<http://wexler.free.fr/library/files/wilkie%20(1983)%20rayleigh%20test%20for%20randomness%20of%20circular%20data.pdf>>

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from astropy.stats import rayleightest
    >>> from astropy import units as u
    >>> data = np.array([130, 90, 0, 145])*u.deg
    >>> rayleightest(data)
    <Quantity 0.2563487733797317>

    ```
    Go BackOpen In Tab