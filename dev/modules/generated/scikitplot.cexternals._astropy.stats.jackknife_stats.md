# jackknife\_stats[#](#jackknife-stats "Link to this heading")

scikitplot.cexternals.\_astropy.stats.jackknife\_stats(**data**, **statistic**, **confidence\_level=0.95**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/jackknife.py#L60)[#](#scikitplot.cexternals._astropy.stats.jackknife_stats "Link to this definition")
:   Performs jackknife estimation on the basis of jackknife resamples.

    This function requires [SciPy](https://www.scipy.org/) to be installed.

    Parameters:
    :   ****data****ndarray
        :   Original sample (1-D array).

        ****statistic****function
        :   Any function (or vector of functions) on the basis of the measured
            data, e.g, sample mean, sample variance, etc. The jackknife estimate of
            this statistic will be returned.

        ****confidence\_level****float, optional
        :   Confidence level for the confidence interval of the Jackknife estimate.
            Must be a real-valued number in (0,1). Default value is 0.95.

    Returns:
    :   ****estimate****float or `~numpy.ndarray`
        :   The i-th element is the bias-corrected “jackknifed” estimate.

        ****bias****float or `~numpy.ndarray`
        :   The i-th element is the jackknife bias.

        ****std\_err****float or `~numpy.ndarray`
        :   The i-th element is the jackknife standard error.

        ****conf\_interval****ndarray
        :   If `statistic` is single-valued, the first and second elements are
            the lower and upper bounds, respectively. If `statistic` is
            vector-valued, each column corresponds to the confidence interval for
            each component of `statistic`. The first and second rows contain the
            lower and upper bounds, respectively.

    Parameters:
    :   * ****data**** (**NDArray**)
        * ****statistic**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)"))
        * ****confidence\_level**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**, [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**, [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**, **NDArray**]

    Examples

    Try it in your browser!

    1. Obtain Jackknife resamples:

    ```
    >>> import numpy as np
    >>> from astropy.stats import jackknife_resampling
    >>> from astropy.stats import jackknife_stats
    >>> data = np.array([1,2,3,4,5,6,7,8,9,0])
    >>> resamples = jackknife_resampling(data)
    >>> resamples
    array([[2., 3., 4., 5., 6., 7., 8., 9., 0.],
           [1., 3., 4., 5., 6., 7., 8., 9., 0.],
           [1., 2., 4., 5., 6., 7., 8., 9., 0.],
           [1., 2., 3., 5., 6., 7., 8., 9., 0.],
           [1., 2., 3., 4., 6., 7., 8., 9., 0.],
           [1., 2., 3., 4., 5., 7., 8., 9., 0.],
           [1., 2., 3., 4., 5., 6., 8., 9., 0.],
           [1., 2., 3., 4., 5., 6., 7., 9., 0.],
           [1., 2., 3., 4., 5., 6., 7., 8., 0.],
           [1., 2., 3., 4., 5., 6., 7., 8., 9.]])
    >>> resamples.shape
    (10, 9)

    ```

    2. Obtain Jackknife estimate for the mean, its bias, its standard error,
    and its 95% confidence interval:

    ```
    >>> test_statistic = np.mean
    >>> estimate, bias, stderr, conf_interval = jackknife_stats(
    ...     data, test_statistic, 0.95)
    >>> estimate
    np.float64(4.5)
    >>> bias
    np.float64(0.0)
    >>> stderr
    np.float64(0.95742710775633832)
    >>> conf_interval
    array([2.62347735,  6.37652265])

    ```

    3. Example for two estimates

    ```
    >>> test_statistic = lambda x: (np.mean(x), np.var(x))
    >>> estimate, bias, stderr, conf_interval = jackknife_stats(
    ...     data, test_statistic, 0.95)
    >>> estimate
    array([4.5       ,  9.16666667])
    >>> bias
    array([ 0.        , -0.91666667])
    >>> stderr
    array([0.95742711,  2.69124476])
    >>> conf_interval
    array([[ 2.62347735,   3.89192387],
           [ 6.37652265,  14.44140947]])

    ```

    IMPORTANT: Note that confidence intervals are given as columns

    Go BackOpen In Tab