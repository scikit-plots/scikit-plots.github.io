# median\_absolute\_deviation[#](#median-absolute-deviation "Link to this heading")

scikitplot.cexternals.\_astropy.stats.median\_absolute\_deviation(**data**, **axis=None**, **func=None**, **ignore\_nan=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/cexternals/_astropy/stats/funcs.py#L788)[#](#scikitplot.cexternals._astropy.stats.median_absolute_deviation "Link to this definition")
:   Calculate the median absolute deviation (MAD).

    The MAD is defined as `median(abs(a - median(a)))`.

    Parameters:
    :   ****data****array-like
        :   Input array or object that can be converted to an array.

        ****axis****None, int, or tuple of int, optional
        :   The axis or axes along which the MADs are computed. The default
            (`None`) is to compute the MAD of the flattened array.

        ****func****callable, optional
        :   The function used to compute the median. Defaults to `numpy.ma.median`
            for masked arrays, otherwise to `numpy.median`.

        ****ignore\_nan****bool, optional
        :   Ignore NaN values (treat them as if they are not in the array) when
            computing the median. This will use `numpy.ma.median` if `axis` is
            specified, or `numpy.nanmedian` if `axis==None` and numpy’s version
            is >1.10 because nanmedian is slightly faster in this case.

    Returns:
    :   ****mad****float or `~numpy.ndarray`
        :   The median absolute deviation of the input array. If `axis`
            is `None` then a scalar will be returned, otherwise a
            `~numpy.ndarray` will be returned.

    Parameters:
    :   * ****data**** (**ArrayLike**)
        * ****axis**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** **...****]** **|** **None**)
        * ****func**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.14)") **|** **None**)
        * ****ignore\_nan**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[**\_ScalarT**]]

    > **See also**
    > [`mad_std`](scikitplot.cexternals._astropy.stats.mad_std.html#scikitplot.cexternals._astropy.stats.mad_std "scikitplot.cexternals._astropy.stats.mad_std")

    Examples

    Try it in your browser!

    Generate random variates from a Gaussian distribution and return the
    median absolute deviation for that distribution:

    ```
    >>> import numpy as np
    >>> from astropy.stats import median_absolute_deviation
    >>> rand = np.random.default_rng(12345)
    >>> from numpy.random import randn
    >>> mad = median_absolute_deviation(rand.standard_normal(1000))
    >>> print(mad)
    0.6829504282771885

    ```
    Go BackOpen In Tab