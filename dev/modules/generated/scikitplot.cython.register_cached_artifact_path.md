# register\_cached\_artifact\_path[#](#register-cached-artifact-path "Link to this heading")

scikitplot.cython.register\_cached\_artifact\_path(**artifact\_path**, **\***, **module\_name**, **cache\_dir=None**, **copy=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cython/_public.py#L922)[#](#scikitplot.cython.register_cached_artifact_path "Link to this definition")
:   Register an existing compiled extension artifact on disk, then import it.

    Parameters:
    :   ****artifact\_path****path-like
        :   Path to the compiled artifact.

        ****module\_name****str
        :   Module name used at compilation time.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override.

        ****copy****bool, default=True
        :   If True, copy artifact into the cache.

    Returns:
    :   scikitplot.cython.BuildResult
        :   Imported result.

    Parameters:
    :   * ****artifact\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****copy**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")