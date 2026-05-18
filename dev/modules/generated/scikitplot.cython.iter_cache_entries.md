# iter\_cache\_entries[#](#iter-cache-entries "Link to this heading")

scikitplot.cython.iter\_cache\_entries(**cache\_dir**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/cython/_cache.py#L438)[#](#scikitplot.cython.iter_cache_entries "Link to this definition")
:   List **module** cache entries found under the cache directory.

    Package builds (`kind == 'package'`) are excluded; use
    [`iter_package_entries`](scikitplot.cython.iter_package_entries.html#scikitplot.cython.iter_package_entries "scikitplot.cython.iter_package_entries") for those.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Cache root. If None, resolves to default.

    Returns:
    :   list[CacheEntry]
        :   Entries with discovered artifacts.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**CacheEntry**](scikitplot.cython.CacheEntry.html#scikitplot.cython.CacheEntry "scikitplot.cython._cache.CacheEntry")]