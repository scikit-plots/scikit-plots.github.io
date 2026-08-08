# import\_cached\_result[#](#import-cached-result "Link to this heading")

scikitplot.cython.import\_cached\_result(**key**, **\***, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/cython/_public.py#L654)[#](#scikitplot.cython.import_cached_result "Link to this definition")
:   Import a cached **module** entry by cache key.

    Parameters:
    :   ****key****str
        :   Cache key.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override.

    Returns:
    :   scikitplot.cython.BuildResult
        :   Import result (`used_cache=True`).

    Raises:
    :   ValueError
        :   If key refers to a package entry.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")