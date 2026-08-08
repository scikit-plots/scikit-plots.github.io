# compile\_template[#](#compile-template "Link to this heading")

scikitplot.cython.compile\_template(**template\_id**, **\***, **module\_name=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/cython/_templates_api.py#L782)[#](#scikitplot.cython.compile_template "Link to this definition")
:   Compile and import a Cython template and return the loaded module.

    Parameters:
    :   ****template\_id****str
        :   Template ID.

        ****module\_name****str or None, default=None
        :   Compiled module name override.

        ****\*\*kwargs****
        :   Passed to [`compile_template_result`](scikitplot.cython.compile_template_result.html#scikitplot.cython.compile_template_result "scikitplot.cython.compile_template_result").

    Returns:
    :   types.ModuleType
        :   Loaded module.

    Parameters:
    :   * ****template\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))