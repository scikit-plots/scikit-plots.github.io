# bayesian\_blocks[#](#bayesian-blocks "Link to this heading")

scikitplot.stats.bayesian\_blocks(**t**, **x=None**, **sigma=None**, **fitness='events'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L67)[#](#scikitplot.stats.bayesian_blocks "Link to this definition")
:   Compute optimal segmentation of data with Scargle’s Bayesian Blocks.

    This is a flexible implementation of the Bayesian Blocks algorithm
    described in Scargle 2013 [[1]](#refb3b6bccc47-1).

    Parameters:
    :   ****t****array-like
        :   data times (one dimensional, length N)

        ****x****array-like, optional
        :   data values

        ****sigma****array-like or float, optional
        :   data errors

        ****fitness****str or object
        :   the fitness function to use for the model.
            If a string, the following options are supported:

            * ‘events’ : binned or unbinned event data. Arguments are `gamma`,
              which gives the slope of the prior on the number of bins, or
              `ncp_prior`, which is \(-\ln({\tt gamma})\).
            * ‘regular\_events’ : non-overlapping events measured at multiples of a
              fundamental tick rate, `dt`, which must be specified as an
              additional argument. Extra arguments are `p0`, which gives the
              false alarm probability to compute the prior, or `gamma`, which
              gives the slope of the prior on the number of bins, or `ncp_prior`,
              which is \(-\ln({\tt gamma})\).
            * ‘measures’ : fitness for a measured sequence with Gaussian errors.
              Extra arguments are `p0`, which gives the false alarm probability
              to compute the prior, or `gamma`, which gives the slope of the
              prior on the number of bins, or `ncp_prior`, which is
              \(-\ln({\tt gamma})\).

            In all three cases, if more than one of `p0`, `gamma`, and
            `ncp_prior` is chosen, `ncp_prior` takes precedence over `gamma`
            which takes precedence over `p0`.

            Alternatively, the fitness parameter can be an instance of
            [`FitnessFunc`](scikitplot.stats.FitnessFunc.html#scikitplot.stats.FitnessFunc "scikitplot.stats.FitnessFunc") or a subclass thereof.

        ****\*\*kwargs****
        :   any additional keyword arguments will be passed to the specified
            [`FitnessFunc`](scikitplot.stats.FitnessFunc.html#scikitplot.stats.FitnessFunc "scikitplot.stats.FitnessFunc") derived class.

    Returns:
    :   ****edges****ndarray
        :   array containing the (N+1) edges defining the N bins

    Parameters:
    :   * ****t**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****x**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****sigma**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****fitness**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'events'****,** **'regular\_events'****,** **'measures'****]** **|** **~scikitplot.cexternals.\_astropy.stats.bayesian\_blocks.FitnessFunc**)

    Return type:
    :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]

    > **See also**
    > [`astropy.stats.histogram`](https://docs.astropy.org/en/latest/api/astropy.stats.histogram.html#astropy.stats.histogram "(in Astropy v8.1)")
    :   compute a histogram using bayesian blocks

    References

    [[1](#id1)]

    Scargle, J et al. (2013)
    [https://ui.adsabs.harvard.edu/abs/2013ApJ…764..167S](https://ui.adsabs.harvard.edu/abs/2013ApJ...764..167S)

    [2]

    Bellman, R.E., Dreyfus, S.E., 1962. Applied Dynamic
    Programming. Princeton University Press, Princeton.
    <https://press.princeton.edu/books/hardcover/9780691651873/applied-dynamic-programming>

    [3]

    Bellman, R., Roth, R., 1969. Curve fitting by segmented
    straight lines. J. Amer. Statist. Assoc. 64, 1079–1084.
    <https://www.tandfonline.com/doi/abs/10.1080/01621459.1969.10501038>

    Examples

    Try it in your browser!

    Event data:

    ```
    >>> t = np.random.normal(size=100)
    >>> edges = bayesian_blocks(t, fitness='events', p0=0.01)

    ```

    Event data with repeats:

    ```
    >>> t = np.random.normal(size=100)
    >>> t[80:] = t[:20]
    >>> edges = bayesian_blocks(t, fitness='events', p0=0.01)

    ```

    Regular event data:

    ```
    >>> dt = 0.05
    >>> t = dt * np.arange(1000)
    >>> x = np.zeros(len(t))
    >>> x[np.random.randint(0, len(t), len(t) // 10)] = 1
    >>> edges = bayesian_blocks(t, x, fitness='regular_events', dt=dt)

    ```

    Measured point data with errors:

    ```
    >>> t = 100 * np.random.random(100)
    >>> x = np.exp(-0.5 * (t - 50) ** 2)
    >>> sigma = 0.1
    >>> x_obs = np.random.normal(x, sigma)
    >>> edges = bayesian_blocks(t, x_obs, sigma, fitness='measures')

    ```
    Go BackOpen In Tab