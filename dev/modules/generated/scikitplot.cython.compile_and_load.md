# compile\_and\_load[#](#compile-and-load "Link to this heading")

scikitplot.cython.compile\_and\_load(**source**, **\***, **module\_name=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cython/_public.py#L567)[#](#scikitplot.cython.compile_and_load "Link to this definition")
:   Compile and import a Cython extension module and return the loaded module.

    Parameters:
    :   ****source****str
        :   Cython source text.

        ****module\_name****str or None, default=None
        :   Module name override.

        ****\*\*kwargs****dict
        :   Passed to [`compile_and_load_result`](scikitplot.cython.compile_and_load_result.html#scikitplot.cython.compile_and_load_result "scikitplot.cython.compile_and_load_result").

    Returns:
    :   types.ModuleType
        :   Loaded module.

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")