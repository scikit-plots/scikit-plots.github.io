# find\_entry\_by\_key[#](#find-entry-by-key "Link to this heading")

scikitplot.cython.find\_entry\_by\_key(**cache\_dir**, **key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/cython/_cache.py#L570)[#](#scikitplot.cython.find_entry_by_key "Link to this definition")
:   Find a single **module** cache entry by key.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Cache root.

        ****key****str
        :   Cache key hex string.

    Returns:
    :   CacheEntry
        :   The matching module entry.

    Raises:
    :   FileNotFoundError
        :   If no matching module entry exists or no artifact is present.

        ValueError
        :   If key format is invalid or key corresponds to a package entry.

    Parameters:
    :   * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**CacheEntry**](scikitplot.cython.CacheEntry.html#scikitplot.cython.CacheEntry "scikitplot.cython._cache.CacheEntry")