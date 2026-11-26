# circstd[#](#circstd "Link to this heading")

scikitplot.cexternals.\_astropy.stats.circstd(**data**, **axis=None**, **weights=None**, **method='angular'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cexternals/_astropy/stats/circstats.py#L190)[#](#scikitplot.cexternals._astropy.stats.circstd "Link to this definition")
:   Computes the circular standard deviation of an array of circular data.

    The standard deviation implemented here is based on the definitions given
    by [[1]](#rb8021afd301b-1), which is also the same used by the R package ‘CirStat’ [[2]](#rb8021afd301b-2).

    Two methods are implemented: ‘angular’ and ‘circular’. The former is
    defined as sqrt(2 \* (1 - R)) and it is bounded in [0, 2\*Pi]. The
    latter is defined as sqrt(-2 \* ln(R)) and it is bounded in [0, inf].

    Following ‘CircStat’ the default method used to obtain the standard
    deviation is ‘angular’.

    Parameters:
    :   ****data****ndarray or `~astropy.units.Quantity`
        :   Array of circular (directional) data, which is assumed to be in
            radians whenever `data` is `numpy.ndarray`.
            If quantity, must be dimensionless.

        ****axis****int, optional
        :   Axis along which circular variances are computed. The default is to
            compute the variance of the flattened array.

        ****weights****numpy.ndarray, optional
        :   In case of grouped data, the i-th element of `weights` represents a
            weighting factor for each group such that `sum(weights, axis)`
            equals the number of observations. See [[3]](#rb8021afd301b-3), remark 1.4, page 22,
            for detailed explanation.

        ****method****str, optional
        :   The method used to estimate the standard deviation:

            * ‘angular’ : obtains the angular deviation
            * ‘circular’ : obtains the circular deviation

    Returns:
    :   ****circstd****ndarray or `~astropy.units.Quantity` [‘dimensionless’]
        :   Angular or circular standard deviation.

    Parameters:
    :   * ****data**** (**NDArray** **|** **DummyQuantity**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****weights**** (**NDArray** **|** **None**)
        * ****method**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   **NDArray** | **DummyQuantity**

    References

    [[1](#id1)]

    P. Berens. “CircStat: A MATLAB Toolbox for Circular Statistics”.
    Journal of Statistical Software, vol 31, issue 10, 2009.

    [[2](#id2)]

    C. Agostinelli, U. Lund. “Circular Statistics from ‘Topics in
    Circular Statistics (2001)’”. 2015.
    <<https://cran.r-project.org/web/packages/CircStats/CircStats.pdf>>

    [[3](#id3)]

    S. R. Jammalamadaka, A. SenGupta. “Topics in Circular Statistics”.
    Series on Multivariate Analysis, Vol. 5, 2001.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from astropy.stats import circstd
    >>> from astropy import units as u
    >>> data = np.array([51, 67, 40, 109, 31, 358])*u.deg
    >>> circstd(data)
    <Quantity 0.57195022>

    ```

    Alternatively, using the ‘circular’ method:

    ```
    >>> import numpy as np
    >>> from astropy.stats import circstd
    >>> from astropy import units as u
    >>> data = np.array([51, 67, 40, 109, 31, 358])*u.deg
    >>> circstd(data, method='circular')
    <Quantity 0.59766999>

    ```
    Go BackOpen In Tab