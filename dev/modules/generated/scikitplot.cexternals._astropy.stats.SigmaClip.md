# SigmaClip[#](#sigmaclip "Link to this heading")

class scikitplot.cexternals.\_astropy.stats.SigmaClip(**sigma=3.0**, **sigma\_lower=None**, **sigma\_upper=None**, **maxiters=5**, **cenfunc='median'**, **stdfunc='std'**, **grow=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L35)[#](#scikitplot.cexternals._astropy.stats.SigmaClip "Link to this definition")
:   Class to perform sigma clipping.

    The data will be iterated over, each time rejecting values that are
    less or more than a specified number of standard deviations from a
    center value.

    Clipped (rejected) pixels are those where:

    ```
    data < center - (sigma_lower * std)
    data > center + (sigma_upper * std)

    ```

    where:

    ```
    center = cenfunc(data [, axis=])
    std = stdfunc(data [, axis=])

    ```

    Invalid data values (i.e., NaN or inf) are automatically clipped.

    For a functional interface to sigma clipping, see
    [`sigma_clip`](scikitplot.cexternals._astropy.stats.sigma_clip.html#scikitplot.cexternals._astropy.stats.sigma_clip "scikitplot.cexternals._astropy.stats.sigma_clip").

    > **Note**
    > `scipy.stats.sigmaclip` provides a subset of the functionality
    in this class. Also, its input data cannot be a masked array
    and it does not handle data that contains invalid values (i.e.,
    NaN or inf). Also note that it uses the mean as the centering
    function. The equivalent settings to `scipy.stats.sigmaclip`
    are:

    ```
    sigclip = SigmaClip(sigma=4., cenfunc='mean', maxiters=None)
    sigclip(data, axis=None, masked=False, return_bounds=True)

    ```

    Parameters:
    :   ****sigma****float, optional
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

        ****grow****float or `False`, optional
        :   Radius within which to mask the neighbouring pixels of those
            that fall outwith the clipping limits (only applied along
            `axis`, if specified). As an example, for a 2D image a value
            of 1 will mask the nearest pixels in a cross pattern around each
            deviant pixel, while 1.5 will also reject the nearest diagonal
            neighbours and so on.

    Parameters:
    :   * ****sigma**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****sigma\_lower**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****sigma\_upper**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****maxiters**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****cenfunc**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'median'****,** **'mean'****]** **|** **~collections.abc.Callable**)
        * ****stdfunc**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'std'****,** **'mad\_std'****]** **|** **~collections.abc.Callable**)
        * ****grow**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****False****]** **|** **None**)

    > **See also**
    > [`sigma_clip`](scikitplot.cexternals._astropy.stats.sigma_clip.html#scikitplot.cexternals._astropy.stats.sigma_clip "scikitplot.cexternals._astropy.stats.sigma_clip"), [`sigma_clipped_stats`](scikitplot.cexternals._astropy.stats.sigma_clipped_stats.html#scikitplot.cexternals._astropy.stats.sigma_clipped_stats "scikitplot.cexternals._astropy.stats.sigma_clipped_stats"), [`SigmaClippedStats`](scikitplot.cexternals._astropy.stats.SigmaClippedStats.html#scikitplot.cexternals._astropy.stats.SigmaClippedStats "scikitplot.cexternals._astropy.stats.SigmaClippedStats")

    Notes

    The best performance will typically be obtained by setting
    `cenfunc` and `stdfunc` to one of the built-in functions
    specified as a string. If one of the options is set to a string
    while the other has a custom callable, you may in some cases see
    better performance if you have the [bottleneck](https://github.com/pydata/bottleneck) package installed.
    To preserve accuracy, bottleneck is only used for float64 computations.

    Examples

    Try it in your browser!

    This example uses a data array of random variates from a Gaussian
    distribution. We clip all points that are more than 2 sample
    standard deviations from the median. The result is a masked array,
    where the mask is `True` for clipped data:

    ```
    >>> from astropy.stats import SigmaClip
    >>> from numpy.random import randn
    >>> randvar = randn(10000)
    >>> sigclip = SigmaClip(sigma=2, maxiters=5)
    >>> filtered_data = sigclip(randvar)

    ```

    This example clips all points that are more than 3 sigma relative
    to the sample **mean**, clips until convergence, returns an unmasked
    `~numpy.ndarray`, and modifies the data in-place:

    ```
    >>> from astropy.stats import SigmaClip
    >>> from numpy.random import randn
    >>> from numpy import mean
    >>> randvar = randn(10000)
    >>> sigclip = SigmaClip(sigma=3, maxiters=None, cenfunc='mean')
    >>> filtered_data = sigclip(randvar, masked=False, copy=False)

    ```

    This example sigma clips along one axis:

    ```
    >>> from astropy.stats import SigmaClip
    >>> from numpy.random import normal
    >>> from numpy import arange, diag, ones
    >>> data = arange(5) + normal(0., 0.05, (5, 5)) + diag(ones(5))
    >>> sigclip = SigmaClip(sigma=2.3)
    >>> filtered_data = sigclip(data, axis=0)

    ```

    Note that along the other axis, no points would be clipped, as the
    standard deviation is higher.

    Go BackOpen In Tab

    \_\_call\_\_(**data**, **axis=None**, **masked=True**, **return\_bounds=False**, **copy=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cexternals/_astropy/stats/sigma_clipping.py#L552)[#](#scikitplot.cexternals._astropy.stats.SigmaClip.__call__ "Link to this definition")
    :   Perform sigma clipping on the provided data.

        Parameters:
        :   ****data****array-like or `~numpy.ma.MaskedArray`
            :   The data to be sigma clipped.

            ****axis****None or int or tuple of int, optional
            :   The axis or axes along which to sigma clip the data. If
                `None`, then the flattened data will be used. `axis` is
                passed to the `cenfunc` and `stdfunc`. The default is
                `None`.

            ****masked****bool, optional
            :   If `True`, then a `~numpy.ma.MaskedArray` is returned, where
                the mask is `True` for clipped values. If `False`, then a
                `~numpy.ndarray` is returned. The default is `True`.

            ****return\_bounds****bool, optional
            :   If `True`, then the minimum and maximum clipping bounds are
                also returned.

            ****copy****bool, optional
            :   If `True`, then the `data` array will be copied. If
                `False` and `masked=True`, then the returned masked array
                data will contain the same array as the input `data` (if
                `data` is a `~numpy.ndarray` or `~numpy.ma.MaskedArray`).
                If `False` and `masked=False`, the input data is modified
                in-place. The default is `True`.

        Returns:
        :   ****result****array-like
            :   If `masked=True`, then a `~numpy.ma.MaskedArray` is
                returned, where the mask is `True` for clipped values and
                where the input mask was `True`.

                If `masked=False`, then a `~numpy.ndarray` is returned.

                If `return_bounds=True`, then in addition to the masked
                array or array above, the minimum and maximum clipping
                bounds are returned.

                If `masked=False` and `axis=None`, then the output
                array is a flattened 1D `~numpy.ndarray` where the clipped
                values have been removed. If `return_bounds=True` then the
                returned minimum and maximum thresholds are scalars.

                If `masked=False` and `axis` is specified, then the
                output `~numpy.ndarray` will have the same shape as the
                input `data` and contain `np.nan` where values were
                clipped. In this case, integer-type `data` arrays will
                be converted to `~numpy.float32`. If the input `data`
                was a masked array, then the output `~numpy.ndarray` will
                also contain `np.nan` where the input mask was `True`. If
                `return_bounds=True` then the returned minimum and maximum
                clipping thresholds will be be `~numpy.ndarray`s.

        Parameters:
        :   * ****data**** (**ArrayLike**)
            * ****axis**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]** **|** **None**)
            * ****masked**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
            * ****return\_bounds**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
            * ****copy**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

        Return type:
        :   **NDArray** | [**MaskedArray**](https://numpy.org/devdocs/reference/maskedarray.baseclass.html#numpy.ma.MaskedArray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[**NDArray** | [**MaskedArray**](https://numpy.org/devdocs/reference/maskedarray.baseclass.html#numpy.ma.MaskedArray "(in NumPy v2.6.dev0)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[**NDArray** | [**MaskedArray**](https://numpy.org/devdocs/reference/maskedarray.baseclass.html#numpy.ma.MaskedArray "(in NumPy v2.6.dev0)"), **NDArray**, **NDArray**]