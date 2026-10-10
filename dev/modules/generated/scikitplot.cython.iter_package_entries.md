# iter\_package\_entries[#](#iter-package-entries "Link to this heading")

scikitplot.cython.iter\_package\_entries(**cache\_dir**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cython/_cache.py#L619)[#](#scikitplot.cython.iter_package_entries "Link to this definition")
:   List **package** cache entries found under the cache directory.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Cache root. If None, resolves to default.

    Returns:
    :   list[PackageCacheEntry]
        :   Package entries with discovered artifacts.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**PackageCacheEntry**](scikitplot.cython.PackageCacheEntry.html#scikitplot.cython.PackageCacheEntry "scikitplot.cython._cache.PackageCacheEntry")]

    Notes

    Package entries are identified by `meta.json` containing `kind == 'package'`.