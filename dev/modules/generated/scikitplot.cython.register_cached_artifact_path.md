# register\_cached\_artifact\_path[#](#register-cached-artifact-path "Link to this heading")

scikitplot.cython.register\_cached\_artifact\_path(**artifact\_path**, **\***, **module\_name**, **cache\_dir=None**, **copy=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/cython/_public.py#L894)[#](#scikitplot.cython.register_cached_artifact_path "Link to this definition")
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
    :   * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")