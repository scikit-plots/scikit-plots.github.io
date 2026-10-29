# import\_cached\_package\_result[#](#import-cached-package-result "Link to this heading")

scikitplot.cython.import\_cached\_package\_result(**key**, **\***, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_public.py#L752)[#](#scikitplot.cython.import_cached_package_result "Link to this definition")
:   Import a cached **package** entry by cache key.

    Parameters:
    :   ****key****str
        :   Cache key.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override.

    Returns:
    :   scikitplot.cython.PackageBuildResult
        :   Package import result.

    Raises:
    :   ValueError
        :   If key does not refer to a package entry.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**PackageBuildResult**](scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython._result.PackageBuildResult")