# register\_artifact\_path[#](#register-artifact-path "Link to this heading")

scikitplot.cython.register\_artifact\_path(**cache\_dir**, **artifact\_path**, **\***, **module\_name**, **copy=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cython/_cache.py#L732)[#](#scikitplot.cython.register_artifact_path "Link to this definition")
:   Register an existing compiled extension artifact into the cache registry.

    Parameters:
    :   ****cache\_dir****str or pathlib.Path or None
        :   Cache root. If None, resolves to the default cache.

        ****artifact\_path****path-like
        :   Path to a compiled extension artifact (`.so`/`.pyd`).

        ****module\_name****str
        :   Module name the artifact was compiled for (init symbol name).

        ****copy****bool, default=True
        :   If True, copy the artifact into the cache entry directory.

    Returns:
    :   CacheEntry
        :   The registered cache entry.

    Raises:
    :   FileNotFoundError
        :   If the artifact does not exist.

        ValueError
        :   If the artifact does not have a valid extension suffix.

        OSError
        :   If writing metadata or copying fails.

    Parameters:
    :   * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**CacheEntry**](scikitplot.cython.CacheEntry.html#scikitplot.cython.CacheEntry "scikitplot.cython._cache.CacheEntry")