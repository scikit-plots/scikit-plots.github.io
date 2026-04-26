# resolve\_cache\_dir[#](#resolve-cache-dir "Link to this heading")

scikitplot.cython.resolve\_cache\_dir(**cache\_dir**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/cython/_cache.py#L192)[#](#scikitplot.cython.resolve_cache_dir "Link to this definition")
:   Resolve and create the cache directory.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Requested cache dir. If None, use environment override or a default
            platform cache location.

    Returns:
    :   pathlib.Path
        :   Resolved cache directory root (created if needed).

    Raises:
    :   OSError
        :   If directory creation fails.

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    Notes

    Environment override (if set) takes precedence:
    `SCIKITPLOT_CYTHON_CACHE_DIR`.