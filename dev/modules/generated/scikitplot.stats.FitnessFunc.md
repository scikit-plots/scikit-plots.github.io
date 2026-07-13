# FitnessFunc[#](#fitnessfunc "Link to this heading")

class scikitplot.stats.FitnessFunc(**p0=0.05**, **gamma=None**, **ncp\_prior=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L189)[#](#scikitplot.stats.FitnessFunc "Link to this definition")
:   Base class for bayesian blocks fitness functions.

    Derived classes should overload the following method:

    `fitness(self, **kwargs)`:
    :   Compute the fitness given a set of named arguments.
        Arguments accepted by fitness must be among `[T_k, N_k, a_k, b_k, c_k]`
        (See [[1]](#r399ddc5f052b-1) for details on the meaning of these parameters).

    Additionally, other methods may be overloaded as well:

    `__init__(self, **kwargs)`:
    :   Initialize the fitness function with any parameters beyond the normal
        `p0` and `gamma`.

    `validate_input(self, t, x, sigma)`:
    :   Enable specific checks of the input data (`t`, `x`, `sigma`)
        to be performed prior to the fit.

    `compute_ncp_prior(self, N)`: If `ncp_prior` is not defined explicitly,
    :   this function is called in order to define it before fitting. This may be
        calculated from `gamma`, `p0`, or whatever method you choose.

    `p0_prior(self, N)`:
    :   Specify the form of the prior given the false-alarm probability `p0`
        (See [[1]](#r399ddc5f052b-1) for details).

    For examples of implemented fitness functions, see [`Events`](scikitplot.stats.Events.html#scikitplot.stats.Events "scikitplot.stats.Events"),
    [`RegularEvents`](scikitplot.stats.RegularEvents.html#scikitplot.stats.RegularEvents "scikitplot.stats.RegularEvents"), and [`PointMeasures`](scikitplot.stats.PointMeasures.html#scikitplot.stats.PointMeasures "scikitplot.stats.PointMeasures").

    References

    [1]
    ([1](#id1),[2](#id2))

    Scargle, J et al. (2013)
    [https://ui.adsabs.harvard.edu/abs/2013ApJ…764..167S](https://ui.adsabs.harvard.edu/abs/2013ApJ...764..167S)

    Parameters:
    :   * ****p0**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****gamma**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****ncp\_prior**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)

    compute\_ncp\_prior(**N**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L327)[#](#scikitplot.stats.FitnessFunc.compute_ncp_prior "Link to this definition")
    :   If `ncp_prior` is not explicitly defined, compute it from `gamma`
        or `p0`.

        Parameters:
        :   ****N**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    fit(**t**, **x=None**, **sigma=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L342)[#](#scikitplot.stats.FitnessFunc.fit "Link to this definition")
    :   Fit the Bayesian Blocks model given the specified fitness function.

        Parameters:
        :   ****t****array-like
            :   data times (one dimensional, length N)

            ****x****array-like, optional
            :   data values

            ****sigma****array-like or float, optional
            :   data errors

        Returns:
        :   ****edges****ndarray
            :   array containing the (M+1) edges defining the M optimal bins

        Parameters:
        :   * ****t**** (**ArrayLike**)
            * ****x**** (**ArrayLike** **|** **None**)
            * ****sigma**** (**ArrayLike** **|** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]

    fitness(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L307)[#](#scikitplot.stats.FitnessFunc.fitness "Link to this definition")

    p0\_prior(**N**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L310)[#](#scikitplot.stats.FitnessFunc.p0_prior "Link to this definition")
    :   Empirical prior, parametrized by the false alarm probability `p0`.

        See eq. 21 in Scargle (2013).

        Note that there was an error in this equation in the original Scargle
        paper (the “log” was missing). The following corrected form is taken
        from <https://arxiv.org/abs/1304.2818>

        Parameters:
        :   ****N**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    validate\_input(**t**, **x=None**, **sigma=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L236)[#](#scikitplot.stats.FitnessFunc.validate_input "Link to this definition")
    :   Validate inputs to the model.

        Parameters:
        :   ****t****array-like
            :   times of observations

            ****x****array-like, optional
            :   values observed at each time

            ****sigma****float or array-like, optional
            :   errors in values x

        Returns:
        :   ****t, x, sigma****array-like, float
            :   validated and perhaps modified versions of inputs

        Parameters:
        :   * ****t**** (**ArrayLike**)
            * ****x**** (**ArrayLike** **|** **None**)
            * ****sigma**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **ArrayLike** **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]], [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]], [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]]