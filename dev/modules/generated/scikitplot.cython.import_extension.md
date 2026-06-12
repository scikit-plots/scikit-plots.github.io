# import\_extension[#](#import-extension "Link to this heading")

scikitplot.cython.import\_extension(**\***, **name**, **path**, **key=None**, **build\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/cython/_loader.py#L34)[#](#scikitplot.cython.import_extension "Link to this definition")
:   Import an extension module from an explicit artifact path.

    Parameters:
    :   ****name****str
        :   Module name used at compilation time.

        ****path****pathlib.Path
        :   Compiled extension artifact path.

        ****key****str or None, default=None
        :   Cache key to attach to the loaded module.

        ****build\_dir****pathlib.Path or None, default=None
        :   Cache entry directory to attach to the loaded module.

    Returns:
    :   types.ModuleType
        :   Imported module.

    Raises:
    :   ImportError
        :   If the module cannot be loaded.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")