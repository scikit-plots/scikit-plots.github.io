# import\_artifact\_path[#](#import-artifact-path "Link to this heading")

scikitplot.cython.import\_artifact\_path(**artifact\_path**, **\***, **module\_name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/cython/_public.py#L947)[#](#scikitplot.cython.import_artifact_path "Link to this definition")
:   Import a compiled extension artifact from a path.

    Parameters:
    :   ****artifact\_path****path-like
        :   Artifact path.

        ****module\_name****str or None, default=None
        :   Module name used at compilation time. If None, attempts to read meta.json
            near the artifact.

    Returns:
    :   types.ModuleType
        :   Imported module.

    Parameters:
    :   * ****artifact\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")