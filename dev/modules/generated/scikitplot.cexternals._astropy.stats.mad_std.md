# mad\_std[#](#mad-std "Link to this heading")

scikitplot.cexternals.\_astropy.stats.mad\_std(**data**, **axis=None**, **func=None**, **ignore\_nan=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/cexternals/_astropy/stats/funcs.py#L886)[#](#scikitplot.cexternals._astropy.stats.mad_std "Link to this definition")
:   Calculate a robust standard deviation using the [median absolute deviation (MAD)](https://en.wikipedia.org/wiki/Median_absolute_deviation).

    The standard deviation estimator is given by:

    \[\sigma \approx \frac{\textrm{MAD}}{\Phi^{-1}(3/4)}
    \approx 1.4826 \ \textrm{MAD}\]

    where \(\Phi^{-1}(P)\) is the normal inverse cumulative
    distribution function evaluated at probability \(P = 3/4\).

    Parameters:
    :   ****data****array-like
        :   Data array or object that can be converted to an array.

        ****axis****None, int, or tuple of int, optional
        :   The axis or axes along which the robust standard deviations are
            computed. The default (`None`) is to compute the robust
            standard deviation of the flattened array.

        ****func****callable, optional
        :   The function used to compute the median. Defaults to `numpy.ma.median`
            for masked arrays, otherwise to `numpy.median`.

        ****ignore\_nan****bool, optional
        :   Ignore NaN values (treat them as if they are not in the array) when
            computing the median. This will use `numpy.ma.median` if `axis` is
            specified, or `numpy.nanmedian` if `axis=None` and numpy’s version is
            >1.10 because nanmedian is slightly faster in this case.

    Returns:
    :   ****mad\_std****float or `~numpy.ndarray`
        :   The robust standard deviation of the input data. If `axis` is
            `None` then a scalar will be returned, otherwise a
            `~numpy.ndarray` will be returned.

    Parameters:
    :   * ****data**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****axis**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** **...****]** **|** **None**)
        * ****func**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.14)") **|** **None**)
        * ****ignore\_nan**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]]

    > **See also**
    > `biweight_midvariance`, `biweight_midcovariance`, [`median_absolute_deviation`](scikitplot.cexternals._astropy.stats.median_absolute_deviation.html#scikitplot.cexternals._astropy.stats.median_absolute_deviation "scikitplot.cexternals._astropy.stats.median_absolute_deviation")

    Examples

    ```
    >>> import numpy as np
    >>> from astropy.stats import mad_std
    >>> rand = np.random.default_rng(12345)
    >>> madstd = mad_std(rand.normal(5, 2, (100, 100)))
    >>> print(madstd)
    1.984147963351707

    ```