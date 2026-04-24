# iter\_all\_entry\_dirs[#](#iter-all-entry-dirs "Link to this heading")

scikitplot.cython.iter\_all\_entry\_dirs(**cache\_root**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/cython/_cache.py#L411)[#](#scikitplot.cython.iter_all_entry_dirs "Link to this definition")
:   Return all cache entry directories whose name is a valid cache key.

    Parameters:
    :   ****cache\_root****str or pathlib.Path or None
        :   Cache root.

    Returns:
    :   list[pathlib.Path]
        :   Entry directory paths, sorted by name for deterministic ordering.

    Parameters:
    :   ****cache\_root**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")]

    Notes

    A `list` is returned rather than a generator so that callers can iterate
    the result multiple times safely (e.g., once for stats and once for GC).
    A generator would be silently exhausted on the second pass, producing an
    empty sequence with no error.