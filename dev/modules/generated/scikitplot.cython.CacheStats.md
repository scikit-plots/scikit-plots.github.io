# CacheStats[#](#cachestats "Link to this heading")

class scikitplot.cython.CacheStats(**cache\_root=<factory>**, **n\_modules=0**, **n\_packages=0**, **total\_bytes=0**, **pinned\_aliases=0**, **pinned\_keys=0**, **newest\_mtime\_utc=None**, **oldest\_mtime\_utc=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/cython/_result.py#L194)[#](#scikitplot.cython.CacheStats "Link to this definition")
:   Cache statistics for the compiled-artifact cache root.

    Parameters:
    :   ****cache\_root****pathlib.Path
        :   Cache root directory.

        ****n\_modules****int
        :   Number of module entries (`kind == 'module'`).

        ****n\_packages****int
        :   Number of package entries (`kind == 'package'`).

        ****total\_bytes****int
        :   Total disk usage in bytes for all entries.

        ****pinned\_aliases****int
        :   Number of pin aliases in the pin registry.

        ****pinned\_keys****int
        :   Number of unique pinned keys in the pin registry.

        ****newest\_mtime\_utc****str or None
        :   UTC timestamp (`...Z`) of the newest entry’s last-modified time.

        ****oldest\_mtime\_utc****str or None
        :   UTC timestamp (`...Z`) of the oldest entry’s last-modified time.

    Parameters:
    :   * ****cache\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****n\_modules**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_packages**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****total\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****pinned\_aliases**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****pinned\_keys**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****newest\_mtime\_utc**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****oldest\_mtime\_utc**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    cache\_root: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.cache_root "Link to this definition")
    :   !! processed by numpydoc !!

    n\_modules: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.n_modules "Link to this definition")
    :   !! processed by numpydoc !!

    n\_packages: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.n_packages "Link to this definition")
    :   !! processed by numpydoc !!

    newest\_mtime\_utc: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.newest_mtime_utc "Link to this definition")
    :   !! processed by numpydoc !!

    oldest\_mtime\_utc: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.oldest_mtime_utc "Link to this definition")
    :   !! processed by numpydoc !!

    pinned\_aliases: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.pinned_aliases "Link to this definition")
    :   !! processed by numpydoc !!

    pinned\_keys: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.pinned_keys "Link to this definition")
    :   !! processed by numpydoc !!

    total\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.CacheStats.total_bytes "Link to this definition")
    :   !! processed by numpydoc !!