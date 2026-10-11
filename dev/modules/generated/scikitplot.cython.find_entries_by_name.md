# find\_entries\_by\_name[#](#find-entries-by-name "Link to this heading")

scikitplot.cython.find\_entries\_by\_name(**cache\_dir**, **module\_name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_cache.py#L837)[#](#scikitplot.cython.find_entries_by_name "Link to this definition")
:   Find module cache entries matching an exact module name.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Cache root.

        ****module\_name****str
        :   Module name (exact).

    Returns:
    :   list[CacheEntry]
        :   Matching module entries.

    Parameters:
    :   * ****cache\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****module\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**CacheEntry**](scikitplot.cython.CacheEntry.html#scikitplot.cython.CacheEntry "scikitplot.cython._cache.CacheEntry")]