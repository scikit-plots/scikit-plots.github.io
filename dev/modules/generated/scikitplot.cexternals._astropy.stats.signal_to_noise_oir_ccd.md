# signal\_to\_noise\_oir\_ccd[#](#signal-to-noise-oir-ccd "Link to this heading")

scikitplot.cexternals.\_astropy.stats.signal\_to\_noise\_oir\_ccd(**t**, **source\_eps**, **sky\_eps**, **dark\_eps**, **rd**, **npix**, **gain=1.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/cexternals/_astropy/stats/funcs.py#L947)[#](#scikitplot.cexternals._astropy.stats.signal_to_noise_oir_ccd "Link to this definition")
:   Computes the signal to noise ratio for source being observed in the
    optical/IR using a CCD.

    Parameters:
    :   ****t****float or numpy.ndarray
        :   CCD integration time in seconds

        ****source\_eps****float
        :   Number of electrons (photons) or DN per second in the aperture from the
            source. Note that this should already have been scaled by the filter
            transmission and the quantum efficiency of the CCD. If the input is in
            DN, then be sure to set the gain to the proper value for the CCD.
            If the input is in electrons per second, then keep the gain as its
            default of 1.0.

        ****sky\_eps****float
        :   Number of electrons (photons) or DN per second per pixel from the sky
            background. Should already be scaled by filter transmission and QE.
            This must be in the same units as source\_eps for the calculation to
            make sense.

        ****dark\_eps****float
        :   Number of thermal electrons per second per pixel. If this is given in
            DN or ADU, then multiply by the gain to get the value in electrons.

        ****rd****float
        :   Read noise of the CCD in electrons. If this is given in
            DN or ADU, then multiply by the gain to get the value in electrons.

        ****npix****float
        :   Size of the aperture in pixels

        ****gain****float, optional
        :   Gain of the CCD. In units of electrons per DN.

    Returns:
    :   ****SNR****float or numpy.ndarray
        :   Signal to noise ratio calculated from the inputs

    Parameters:
    :   * ****t**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**,** **...****]****,** [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")**[****\_ScalarT****]****]**)
        * ****source\_eps**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****sky\_eps**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****dark\_eps**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****rd**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****npix**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****gain**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[**\_ScalarT**]]