# histogram[#](#histogram "Link to this heading")

scikitplot.cexternals.\_astropy.stats.histogram(**a**, **bins=10**, **range=None**, **weights=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/cexternals/_astropy/stats/histogram.py#L108)[#](#scikitplot.cexternals._astropy.stats.histogram "Link to this definition")
:   Enhanced histogram function, providing adaptive binnings.

    This is a histogram function that enables the use of more sophisticated
    algorithms for determining bins. Aside from the `bins` argument allowing
    a string specified how bins are computed, the parameters are the same
    as `numpy.histogram`.

    Parameters:
    :   ****a****array-like
        :   array of data to be histogrammed

        ****bins****int, list, or str, optional
        :   If bins is a string, then it must be one of:

            * ‘blocks’ : use bayesian blocks for dynamic bin widths
            * ‘knuth’ : use Knuth’s rule to determine bins
            * ‘scott’ : use Scott’s rule to determine bins
            * ‘freedman’ : use the Freedman-Diaconis rule to determine bins

        ****range****tuple or None, optional
        :   the minimum and maximum range for the histogram. If not specified,
            it will be (x.min(), x.max())

        ****weights****array-like, optional
        :   An array the same shape as `a`. If given, the histogram accumulates
            the value of the weight corresponding to `a` instead of returning the
            count of values. This argument does not affect determination of bin
            edges.

        ****\*\*kwargs****dict, optional
        :   Extra arguments are described in `numpy.histogram`.

    Returns:
    :   ****hist****array
        :   The values of the histogram. See `density` and `weights` for a
            description of the possible semantics.

        ****bin\_edges****array of dtype float
        :   Return the bin edges `(length(hist)+1)`.

    Parameters:
    :   * ****a**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****bins**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]** **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'blocks'****,** **'knuth'****,** **'scott'****,** **'freedman'****]** **|** **None**)
        * ****range**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**,** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]** **|** **None**)
        * ****weights**** (**\_Buffer** **|** **\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]** **|** **\_NestedSequence****[****\_SupportsArray****[**[**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** [**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **\_NestedSequence****[**[**complex**](https://docs.python.org/3/library/functions.html#complex "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]], [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.5.dev0)")[**\_ScalarT**]]]

    > **See also**
    > [`numpy.histogram`](https://numpy.org/devdocs/reference/generated/numpy.histogram.html#numpy.histogram "(in NumPy v2.5.dev0)")