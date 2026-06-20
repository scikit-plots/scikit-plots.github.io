# calculate\_bin\_edges[#](#calculate-bin-edges "Link to this heading")

scikitplot.cexternals.\_astropy.stats.calculate\_bin\_edges(**a**, **bins=10**, **range=None**, **weights=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/cexternals/_astropy/stats/histogram.py#L25)[#](#scikitplot.cexternals._astropy.stats.calculate_bin_edges "Link to this definition")
:   Calculate histogram bin edges like `numpy.histogram_bin_edges`.

    Parameters:
    :   ****a****array-like
        :   Input data. The bin edges are calculated over the flattened array.

        ****bins****int, list, or str, optional
        :   If `bins` is an int, it is the number of bins. If it is a list
            it is taken to be the bin edges. If it is a string, it must be one
            of ‘blocks’, ‘knuth’, ‘scott’ or ‘freedman’. See
            `~astropy.stats.histogram` for a description of each method.

        ****range****tuple or None, optional
        :   The minimum and maximum range for the histogram. If not specified,
            it will be (a.min(), a.max()). However, if bins is a list it is
            returned unmodified regardless of the range argument.

        ****weights****array-like, optional
        :   An array the same shape as `a`. If given, the histogram accumulates
            the value of the weight corresponding to `a` instead of returning the
            count of values. This argument does not affect determination of bin
            edges, though they may be used in the future as new methods are added.

    Returns:
    :   ****bins****ndarray
        :   Histogram bin edges

    Parameters:
    :   * ****a**** (**ArrayLike**)
        * ****bins**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]** **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'blocks'****,** **'knuth'****,** **'scott'****,** **'freedman'****]** **|** **None**)
        * ****range**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**,** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]** **|** **None**)
        * ****weights**** (**ArrayLike** **|** **None**)

    Return type:
    :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]