# import\_artifact\_bytes[#](#import-artifact-bytes "Link to this heading")

scikitplot.cython.import\_artifact\_bytes(**data**, **\***, **module\_name**, **artifact\_filename**, **temp\_dir=None**, **key=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cython/_public.py#L999)[#](#scikitplot.cython.import_artifact_bytes "Link to this definition")
:   Import a compiled extension artifact from raw bytes.

    Parameters:
    :   * ****data**** ([**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****artifact\_filename**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****temp\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.15)")