# import\_artifact\_bytes[#](#import-artifact-bytes "Link to this heading")

scikitplot.cython.import\_artifact\_bytes(**data**, **\***, **module\_name**, **artifact\_filename**, **temp\_dir=None**, **key=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/cython/_public.py#L802)[#](#scikitplot.cython.import_artifact_bytes "Link to this definition")
:   Import a compiled extension artifact from raw bytes.

    Parameters:
    :   * ****data**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****artifact\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****temp\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")