# compile\_template[#](#compile-template "Link to this heading")

scikitplot.cython.compile\_template(**template\_id**, **\***, **module\_name=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/cython/_templates_api.py#L638)[#](#scikitplot.cython.compile_template "Link to this definition")
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

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cython_template_thumb.png)

[Cython: Realtime compile\_and\_load (.pyx)](../../auto_examples/cython/plot_cython_template.html)

Cython: Realtime compile\_and\_load (.pyx)