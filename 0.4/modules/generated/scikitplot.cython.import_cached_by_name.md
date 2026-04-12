# import\_cached\_by\_name[#](#import-cached-by-name "Link to this heading")

scikitplot.cython.import\_cached\_by\_name(**module\_name**, **\***, **cache\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/cython/_public.py#L983)[#](#scikitplot.cython.import_cached_by_name "Link to this definition")
:   Import the newest cached module entry matching `module_name`.

    Parameters:
    :   ****module\_name****str
        :   Exact module name.

        ****cache\_dir****str or pathlib.Path or None, default=None
        :   Cache root override.

    Returns:
    :   types.ModuleType
        :   Loaded module.

    Raises:
    :   FileNotFoundError
        :   If no cached entry matches.

    Parameters:
    :   * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")