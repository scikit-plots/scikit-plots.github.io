# SigmaClippedStats[#](#sigmaclippedstats "Link to this heading")

class scikitplot.cexternals.\_astropy.stats.SigmaClippedStats(**data**, **\***, **mask=None**, **mask\_value=None**, **sigma=3.0**, **sigma\_lower=None**, **sigma\_upper=None**, **maxiters=5**, **cenfunc='median'**, **stdfunc='std'**, **axis=None**, **grow=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L886)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats "Link to this definition")
:   Class to calculate sigma-clipped statistics on the provided data.

    Parameters:
    :   ****data****array-like or `~numpy.ma.MaskedArray`
        :   Data array or object that can be converted to an array.

        ****mask****`numpy.ndarray` (bool), optional
        :   A boolean mask with the same shape as `data`, where a `True`
            value indicates the corresponding element of `data` is masked.
            Masked pixels are excluded when computing the statistics.

        ****mask\_value****float, optional
        :   A data value (e.g., `0.0`) that is ignored when computing the
            statistics. `mask_value` will be masked in addition to any
            input `mask`.

        ****sigma****float, optional
        :   The number of standard deviations to use for both the lower
            and upper clipping limit. These limits are overridden by
            `sigma_lower` and `sigma_upper`, if input. The default is 3.

        ****sigma\_lower****float or None, optional
        :   The number of standard deviations to use as the lower bound for
            the clipping limit. If `None` then the value of `sigma` is
            used. The default is `None`.

        ****sigma\_upper****float or None, optional
        :   The number of standard deviations to use as the upper bound for
            the clipping limit. If `None` then the value of `sigma` is
            used. The default is `None`.

        ****maxiters****int or None, optional
        :   The maximum number of sigma-clipping iterations to perform or
            `None` to clip until convergence is achieved (i.e., iterate
            until the last iteration clips nothing). If convergence is
            achieved prior to `maxiters` iterations, the clipping
            iterations will stop. The default is 5.

        ****cenfunc****{‘median’, ‘mean’} or callable, optional
        :   The statistic or callable function/object used to compute
            the center value for the clipping. If using a callable
            function/object and the `axis` keyword is used, then it must
            be able to ignore NaNs (e.g., `numpy.nanmean`) and it must have
            an `axis` keyword to return an array with axis dimension(s)
            removed. The default is `'median'`.

        ****stdfunc****{‘std’, ‘mad\_std’} or callable, optional
        :   The statistic or callable function/object used to compute the
            standard deviation about the center value. If using a callable
            function/object and the `axis` keyword is used, then it must
            be able to ignore NaNs (e.g., `numpy.nanstd`) and it must have
            an `axis` keyword to return an array with axis dimension(s)
            removed. The default is `'std'`.

        ****axis****None or int or tuple of int, optional
        :   The axis or axes along which to sigma clip the data. If `None`,
            then the flattened data will be used. `axis` is passed to the
            `cenfunc` and `stdfunc`. The default is `None`.

        ****grow****float or `False`, optional
        :   Radius within which to mask the neighbouring pixels of those
            that fall outwith the clipping limits (only applied along
            `axis`, if specified). As an example, for a 2D image a value
            of 1 will mask the nearest pixels in a cross pattern around each
            deviant pixel, while 1.5 will also reject the nearest diagonal
            neighbours and so on.

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****mask**** (**NDArray** **|** **None**)
        * ****mask\_value**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****sigma**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****sigma\_lower**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****sigma\_upper**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****maxiters**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****cenfunc**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'median'****,** **'mean'****]** **|** **~collections.abc.Callable**)
        * ****stdfunc**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'std'****,** **'mad\_std'****]** **|** **~collections.abc.Callable**)
        * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]** **|** **None**)
        * ****grow**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****False****]** **|** **None**)

    > **See also**
    > [`sigma_clipped_stats`](scikitplot.cexternals._astropy.stats.sigma_clipped_stats.html#scikitplot.cexternals._astropy.stats.sigma_clipped_stats "scikitplot.cexternals._astropy.stats.sigma_clipped_stats"), [`SigmaClip`](scikitplot.cexternals._astropy.stats.SigmaClip.html#scikitplot.cexternals._astropy.stats.SigmaClip "scikitplot.cexternals._astropy.stats.SigmaClip"), [`sigma_clip`](scikitplot.cexternals._astropy.stats.sigma_clip.html#scikitplot.cexternals._astropy.stats.sigma_clip "scikitplot.cexternals._astropy.stats.sigma_clip")

    Notes

    The best performance will typically be obtained by setting
    `cenfunc` and `stdfunc` to one of the built-in functions
    specified as a string. If one of the options is set to a string
    while the other has a custom callable, you may in some cases
    see better performance if you have the [bottleneck](https://github.com/pydata/bottleneck) package
    installed. To preserve accuracy, bottleneck is only used for float64
    computations.

    biweight\_location(**c=6.0**, **M=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1147)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.biweight_location "Link to this definition")
    :   Calculate the biweight location of the data.

        NaN values are ignored.

        Parameters:
        :   ****c****float, optional
            :   Tuning constant for the biweight estimator. Default value is
                6.0.

            ****M****float or None, optional
            :   Initial guess for the biweight location. Default value is
                `None`.

        Returns:
        :   ****biweight\_location****float or `~numpy.ndarray`
            :   The biweight location of the data.

        Parameters:
        :   * ****c**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
            * ****M**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    biweight\_scale(**c=6.0**, **M=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1172)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.biweight_scale "Link to this definition")
    :   Calculate the biweight scale of the data.

        NaN values are ignored.

        Parameters:
        :   ****c****float, optional
            :   Tuning constant for the biweight estimator. Default value is
                6.0.

            ****M****float or None, optional
            :   Initial guess for the biweight location. Default value is
                `None`.

        Returns:
        :   ****biweight\_scale****float or `~numpy.ndarray`
            :   The biweight scale of the data.

        Parameters:
        :   * ****c**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
            * ****M**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    mad\_std()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1195)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.mad_std "Link to this definition")
    :   Calculate the median absolute deviation (MAD) based standard
        deviation of the data.

        NaN values are ignored.

        Returns:
        :   ****mad\_std****float or `~numpy.ndarray`
            :   The MAD-based standard deviation of the data.

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    max()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1024)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.max "Link to this definition")
    :   Calculate the maximum of the data.

        NaN values are ignored.

        Returns:
        :   ****max****float or `~numpy.ndarray`
            :   The maximum of the data.

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    mean()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1050)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.mean "Link to this definition")
    :   Calculate the mean of the data.

        NaN values are ignored.

        Returns:
        :   ****mean****float or `~numpy.ndarray`
            :   The mean of the data.

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    median()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1063)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.median "Link to this definition")
    :   Calculate the median of the data.

        NaN values are ignored.

        Returns:
        :   ****median****float or `~numpy.ndarray`
            :   The median of the data.

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    min()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1011)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.min "Link to this definition")
    :   Calculate the minimum of the data.

        NaN values are ignored.

        Returns:
        :   ****min****float or `~numpy.ndarray`
            :   The minimum of the data.

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    mode(**median\_factor=3.0**, **mean\_factor=2.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1076)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.mode "Link to this definition")
    :   Calculate the mode of the data using a estimator of the form
        `(median_factor * median) - (mean_factor * mean)`.

        NaN values are ignored.

        Parameters:
        :   ****median\_factor****float, optional
            :   The multiplicative factor for the data median. Defaults to 3.

            ****mean\_factor****float, optional
            :   The multiplicative factor for the data mean. Defaults to 2.

        Returns:
        :   ****mode****float or `~numpy.ndarray`
            :   The estimated mode of the data.

        Parameters:
        :   * ****median\_factor**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
            * ****mean\_factor**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    std(**ddof=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1100)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.std "Link to this definition")
    :   Calculate the standard deviation of the data.

        NaN values are ignored.

        Parameters:
        :   ****ddof****int, optional
            :   The delta degrees of freedom for the standard deviation
                calculation. The divisor used in the calculation is `N -
                ddof`, where `N` represents the number of elements. For
                a population standard deviation where you have data for the
                entire population, use `ddof=0`. For a sample standard
                deviation where you have a sample of the population, use
                `ddof=1`. The default is 0.

        Returns:
        :   ****std****float or `~numpy.ndarray`
            :   The standard deviation of the data.

        Parameters:
        :   ****ddof**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    sum()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1037)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.sum "Link to this definition")
    :   Calculate the sum of the data.

        NaN values are ignored.

        Returns:
        :   ****sum****float or `~numpy.ndarray`
            :   The sum of the data.

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**

    var(**ddof=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L1124)[#](#scikitplot.cexternals._astropy.stats.SigmaClippedStats.var "Link to this definition")
    :   Calculate the variance of the data.

        NaN values are ignored.

        Parameters:
        :   ****ddof****int, optional
            :   The delta degrees of freedom. The divisor used in the
                calculation is `N - ddof`, where `N` represents the
                number of elements. For a population variance where you have
                data for the entire population, use `ddof=0`. For a sample
                variance where you have a sample of the population, use
                `ddof=1`. The default is 0.

        Returns:
        :   ****var****float or `~numpy.ndarray`
            :   The variance of the data.

        Parameters:
        :   ****ddof**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | **NDArray**