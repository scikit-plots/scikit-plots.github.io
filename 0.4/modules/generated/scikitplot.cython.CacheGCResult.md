# CacheGCResult[#](#cachegcresult "Link to this heading")

class scikitplot.cython.CacheGCResult(**cache\_root=<factory>**, **deleted\_keys=<factory>**, **skipped\_pinned\_keys=<factory>**, **skipped\_missing\_keys=<factory>**, **freed\_bytes=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/cython/_result.py#L244)[#](#scikitplot.cython.CacheGCResult "Link to this definition")
:   Result of a cache garbage-collection operation.

    Parameters:
    :   ****cache\_root****pathlib.Path
        :   Cache root directory.

        ****deleted\_keys****Sequence[str]
        :   Cache keys deleted (hex digests).

        ****skipped\_pinned\_keys****Sequence[str]
        :   Cache keys preserved because they are pinned.

        ****skipped\_missing\_keys****Sequence[str]
        :   Cache keys requested for deletion but missing on disk.

        ****freed\_bytes****int
        :   Estimated bytes freed (best effort, computed pre-delete).

    Parameters:
    :   * ****cache\_root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****deleted\_keys**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****skipped\_pinned\_keys**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****skipped\_missing\_keys**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****freed\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    cache\_root: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.cython.CacheGCResult.cache_root "Link to this definition")
    :   !! processed by numpydoc !!

    deleted\_keys: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][#](#scikitplot.cython.CacheGCResult.deleted_keys "Link to this definition")
    :   !! processed by numpydoc !!

    freed\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.CacheGCResult.freed_bytes "Link to this definition")
    :   !! processed by numpydoc !!

    skipped\_missing\_keys: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][#](#scikitplot.cython.CacheGCResult.skipped_missing_keys "Link to this definition")
    :   !! processed by numpydoc !!

    skipped\_pinned\_keys: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][#](#scikitplot.cython.CacheGCResult.skipped_pinned_keys "Link to this definition")
    :   !! processed by numpydoc !!