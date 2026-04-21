# RegularEvents[#](#regularevents "Link to this heading")

class scikitplot.stats.RegularEvents(**dt**, **p0=0.05**, **gamma=None**, **ncp\_prior=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L498)[#](#scikitplot.stats.RegularEvents "Link to this definition")
:   Bayesian blocks fitness for regular events.

    This is for data which has a fundamental “tick” length, so that all
    measured values are multiples of this tick length. In each tick, there
    are either zero or one counts.

    Parameters:
    :   ****dt****float
        :   tick rate for data

        ****p0****float, optional
        :   False alarm probability, used to compute the prior on \(N\_{\rm
            blocks}\) (see eq. 21 of Scargle 2013). If gamma is specified, p0 is
            ignored.

        ****gamma****float, optional
        :   If specified, then use this gamma to compute the general prior form,
            \(p \sim {\tt gamma}^{N\_{\rm blocks}}\). If gamma is specified, p0
            is ignored.

        ****ncp\_prior****float, optional
        :   If specified, use the value of `ncp_prior` to compute the prior as
            above, using the definition \({\tt ncp\\_prior} = -\ln({\tt
            gamma})\). If `ncp_prior` is specified, `gamma` and `p0` are
            ignored.

    Parameters:
    :   * ****dt**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****p0**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****gamma**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****ncp\_prior**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)

    compute\_ncp\_prior(**N**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L327)[#](#scikitplot.stats.RegularEvents.compute_ncp_prior "Link to this definition")
    :   If `ncp_prior` is not explicitly defined, compute it from `gamma`
        or `p0`.

        Parameters:
        :   ****N**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    fit(**t**, **x=None**, **sigma=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L342)[#](#scikitplot.stats.RegularEvents.fit "Link to this definition")
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
        :   * ****t**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****x**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****sigma**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]

    fitness(**T\_k**, **N\_k**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L545)[#](#scikitplot.stats.RegularEvents.fitness "Link to this definition")
    :   Parameters:
        :   * ****T\_k**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]**)
            * ****N\_k**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]

    p0\_prior(**N**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L310)[#](#scikitplot.stats.RegularEvents.p0_prior "Link to this definition")
    :   Empirical prior, parametrized by the false alarm probability `p0`.

        See eq. 21 in Scargle (2013).

        Note that there was an error in this equation in the original Scargle
        paper (the “log” was missing). The following corrected form is taken
        from <https://arxiv.org/abs/1304.2818>

        Parameters:
        :   ****N**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")

    validate\_input(**t**, **x=None**, **sigma=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cexternals/_astropy/stats/bayesian_blocks.py#L534)[#](#scikitplot.stats.RegularEvents.validate_input "Link to this definition")
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
        :   * ****t**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****x**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****sigma**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]], [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]], [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]]