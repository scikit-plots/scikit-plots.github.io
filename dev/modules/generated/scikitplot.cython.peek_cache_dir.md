# peek\_cache\_dir[#](#peek-cache-dir "Link to this heading")

scikitplot.cython.peek\_cache\_dir(**cache\_dir**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/cython/_cache.py#L228)[#](#scikitplot.cython.peek_cache_dir "Link to this definition")
:   Resolve the cache directory path without creating it.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Requested cache dir. If None, use environment override or a default
            platform cache location.

    Returns:
    :   pathlib.Path
        :   Resolved cache directory root (may not exist).

    Parameters:
    :   ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")