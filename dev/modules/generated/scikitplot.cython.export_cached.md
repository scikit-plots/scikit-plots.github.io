# export\_cached[#](#export-cached "Link to this heading")

scikitplot.cython.export\_cached(**key**, **\***, **dest\_dir**, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/cython/_public.py#L1147)[#](#scikitplot.cython.export_cached "Link to this definition")
:   Export a cache entry directory to a destination folder.

    Parameters:
    :   ****key****str
        :   Cache key to export.

        ****dest\_dir****str or pathlib.Path
        :   Destination directory. Created (including parents) if absent.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override. If `None`, uses the environment override or the
            default cache location. Consistent with all other public functions that
            accept `cache_dir`.

    Returns:
    :   pathlib.Path
        :   Path to the exported entry directory inside `dest_dir`.

    Raises:
    :   FileNotFoundError
        :   If `key` does not exist in the cache.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****dest\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")