# cache\_stats[#](#cache-stats "Link to this heading")

scikitplot.cython.cache\_stats(**cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/cython/_gc.py#L77)[#](#scikitplot.cython.cache_stats "Link to this definition")
:   Compute cache statistics.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

    Returns:
    :   scikitplot.cython.CacheStats
        :   Cache statistics snapshot.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**CacheStats**](scikitplot.cython.CacheStats.html#scikitplot.cython.CacheStats "scikitplot.cython._result.CacheStats")