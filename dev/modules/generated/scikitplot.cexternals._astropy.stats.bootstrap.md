# bootstrap[#](#bootstrap "Link to this heading")

scikitplot.cexternals.\_astropy.stats.bootstrap(**data**, **bootnum=100**, **samples=None**, **bootfunc=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/cexternals/_astropy/stats/funcs.py#L998)[#](#scikitplot.cexternals._astropy.stats.bootstrap "Link to this definition")
:   Performs bootstrap resampling on numpy arrays.

    Bootstrap resampling is used to understand confidence intervals of sample
    estimates. This function returns versions of the dataset resampled with
    replacement (“case bootstrapping”). These can all be run through a function
    or statistic to produce a distribution of values which can then be used to
    find the confidence intervals.

    Parameters:
    :   ****data****ndarray
        :   N-D array. The bootstrap resampling will be performed on the first
            index, so the first index should access the relevant information
            to be bootstrapped.

        ****bootnum****int, optional
        :   Number of bootstrap resamples

        ****samples****int, optional
        :   Number of samples in each resample. The default `None` sets samples to
            the number of datapoints

        ****bootfunc****function, optional
        :   Function to reduce the resampled data. Each bootstrap resample will
            be put through this function and the results returned. If `None`, the
            bootstrapped data will be returned

    Returns:
    :   ****boot****ndarray
        :   If bootfunc is None, then each row is a bootstrap resample of the data.
            If bootfunc is specified, then the columns will correspond to the
            outputs of bootfunc.

    Parameters:
    :   * ****data**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")**[****\_ScalarT****]****]**)
        * ****bootnum**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****samples**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****bootfunc**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[**\_ScalarT**]]

    Examples

    Try it in your browser!

    Obtain a twice resampled array:

    ```
    >>> from astropy.stats import bootstrap
    >>> import numpy as np
    >>> from astropy.utils import NumpyRNGContext
    >>> bootarr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    >>> with NumpyRNGContext(1):
    ...     bootresult = bootstrap(bootarr, 2)
    ...
    >>> bootresult
    array([[6., 9., 0., 6., 1., 1., 2., 8., 7., 0.],
           [3., 5., 6., 3., 5., 3., 5., 8., 8., 0.]])
    >>> bootresult.shape
    (2, 10)

    ```

    Obtain a statistic on the array

    ```
    >>> with NumpyRNGContext(1):
    ...     bootresult = bootstrap(bootarr, 2, bootfunc=np.mean)
    ...
    >>> bootresult
    array([4. , 4.6])

    ```

    Obtain a statistic with two outputs on the array

    ```
    >>> test_statistic = lambda x: (np.sum(x), np.mean(x))
    >>> with NumpyRNGContext(1):
    ...     bootresult = bootstrap(bootarr, 3, bootfunc=test_statistic)
    >>> bootresult
    array([[40. ,  4. ],
           [46. ,  4.6],
           [35. ,  3.5]])
    >>> bootresult.shape
    (3, 2)

    ```

    Obtain a statistic with two outputs on the array, keeping only the first
    output

    ```
    >>> bootfunc = lambda x:test_statistic(x)[0]
    >>> with NumpyRNGContext(1):
    ...     bootresult = bootstrap(bootarr, 3, bootfunc=bootfunc)
    ...
    >>> bootresult
    array([40., 46., 35.])
    >>> bootresult.shape
    (3,)

    ```
    Go BackOpen In Tab