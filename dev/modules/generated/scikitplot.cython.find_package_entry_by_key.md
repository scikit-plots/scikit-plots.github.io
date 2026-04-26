# find\_package\_entry\_by\_key[#](#find-package-entry-by-key "Link to this heading")

scikitplot.cython.find\_package\_entry\_by\_key(**cache\_dir**, **key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/cython/_cache.py#L625)[#](#scikitplot.cython.find_package_entry_by_key "Link to this definition")
:   Find a single **package** cache entry by key.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Cache root.

        ****key****str
        :   Cache key hex string.

    Returns:
    :   PackageCacheEntry
        :   The matching package entry.

    Raises:
    :   FileNotFoundError
        :   If no matching package entry exists or required artifacts are missing.

        ValueError
        :   If key format is invalid or key corresponds to a module entry.

    Parameters:
    :   * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**PackageCacheEntry**](scikitplot.cython.PackageCacheEntry.html#scikitplot.cython.PackageCacheEntry "scikitplot.cython._cache.PackageCacheEntry")