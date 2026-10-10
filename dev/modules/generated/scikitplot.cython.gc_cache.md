# gc\_cache[#](#gc-cache "Link to this heading")

scikitplot.cython.gc\_cache(**\***, **cache\_dir=None**, **keep\_n\_newest=None**, **max\_age\_days=None**, **max\_bytes=None**, **dry\_run=False**, **lock\_timeout\_s=60.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cython/_gc.py#L145)[#](#scikitplot.cython.gc_cache "Link to this definition")
:   Deterministically garbage-collect cached build entries.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root. If None, uses the default cache location.

        ****keep\_n\_newest****int or None, default=None
        :   If provided, keep at least the N newest entries (across modules and packages).

        ****max\_age\_days****int or None, default=None
        :   If provided, delete entries older than this many days.

        ****max\_bytes****int or None, default=None
        :   If provided, delete oldest entries until total cache size is <= max\_bytes.

        ****dry\_run****bool, default=False
        :   If True, do not delete anything; only report what would be deleted.

        ****lock\_timeout\_s****float, default=60.0
        :   Max seconds to wait for a cache-root GC lock.

    Returns:
    :   scikitplot.cython.CacheGCResult
        :   GC report.

    Raises:
    :   ValueError
        :   If any numeric parameter is invalid.

    Parameters:
    :   * ****cache\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****keep\_n\_newest**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_age\_days**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****dry\_run**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Return type:
    :   [**CacheGCResult**](scikitplot.cython.CacheGCResult.html#scikitplot.cython.CacheGCResult "scikitplot.cython._result.CacheGCResult")