# import\_extension\_from\_path[#](#import-extension-from-path "Link to this heading")

scikitplot.cython.import\_extension\_from\_path(**artifact\_path**, **\***, **module\_name=None**, **key=None**, **build\_dir=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/cython/_loader.py#L119)[#](#scikitplot.cython.import_extension_from_path "Link to this definition")
:   Import an extension module from a filesystem path.

    Parameters:
    :   ****artifact\_path****path-like
        :   Path to a compiled extension artifact (`.so` / `.pyd`).

        ****module\_name****str or None, default=None
        :   Module name the artifact was compiled for. If None, this function will
            attempt to read `meta.json` near the artifact to obtain the authoritative
            name (strict). For package builds, this may be `meta.json` one level above
            the package directory.

        ****key****str or None, default=None
        :   Optional cache key to attach to the loaded module (overrides meta.json).

        ****build\_dir****pathlib.Path or None, default=None
        :   Optional build directory to attach to the loaded module (overrides meta.json).

    Returns:
    :   types.ModuleType
        :   Imported extension module.

    Raises:
    :   FileNotFoundError
        :   If the artifact does not exist.

        ValueError
        :   If the artifact suffix is invalid or module name cannot be determined.

        ImportError
        :   If the module cannot be loaded.

    Parameters:
    :   * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")