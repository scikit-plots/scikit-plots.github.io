# import\_extension\_from\_bytes[#](#import-extension-from-bytes "Link to this heading")

scikitplot.cython.import\_extension\_from\_bytes(**data**, **\***, **module\_name**, **artifact\_filename**, **temp\_dir=None**, **key=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cython/_loader.py#L222)[#](#scikitplot.cython.import_extension_from_bytes "Link to this definition")
:   Import an extension module from raw artifact bytes.

    Parameters:
    :   ****data****bytes
        :   Raw contents of a compiled extension artifact (`.so` / `.pyd`).

        ****module\_name****str
        :   Module name the artifact was compiled for (init symbol name).

        ****artifact\_filename****str
        :   Filename to use when writing the artifact (must end with a valid
            extension suffix). This must be a simple filename (no directories).

        ****temp\_dir****str or os.PathLike or None, default=None
        :   Directory to place the hash-scoped artifact file. If None, a platform
            temp directory is used.

        ****key****str or None, default=None
        :   Optional cache key to attach to the loaded module.

    Returns:
    :   types.ModuleType
        :   Imported extension module.

    Raises:
    :   ValueError
        :   If `artifact_filename` is invalid.

        OSError
        :   If a conflicting artifact already exists at the deterministic path.

        ImportError
        :   If the module cannot be loaded.

    Parameters:
    :   * ****data**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****artifact\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****temp\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")

    Notes

    Python extension modules cannot be imported directly from memory; the artifact
    must exist as a file on disk. This function writes the provided bytes to a
    deterministic location (by content hash) under `temp_dir` and imports it.