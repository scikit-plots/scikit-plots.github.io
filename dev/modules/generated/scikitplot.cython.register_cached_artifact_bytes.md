# register\_cached\_artifact\_bytes[#](#register-cached-artifact-bytes "Link to this heading")

scikitplot.cython.register\_cached\_artifact\_bytes(**data**, **\***, **module\_name**, **artifact\_filename**, **cache\_dir=None**, **temp\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c2567fd/scikitplot/cython/_public.py#L1060)[#](#scikitplot.cython.register_cached_artifact_bytes "Link to this definition")
:   Register a compiled extension artifact from bytes and import it.

    Parameters:
    :   ****data****bytes
        :   Artifact bytes.

        ****module\_name****str
        :   Module name used at compilation time.

        ****artifact\_filename****str
        :   Artifact filename ending with a valid extension suffix (e.g., `.so` / `.pyd`).

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override.

        ****temp\_dir****str or os.PathLike or None, default=None
        :   Temporary directory used to stage the artifact before registering.

    Returns:
    :   scikitplot.cython.BuildResult
        :   Imported result.

    Parameters:
    :   * ****data**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****artifact\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****temp\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")