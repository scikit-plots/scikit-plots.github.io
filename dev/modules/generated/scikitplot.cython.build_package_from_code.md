# build\_package\_from\_code[#](#build-package-from-code "Link to this heading")

scikitplot.cython.build\_package\_from\_code(**modules**, **\***, **package\_name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cython/_public.py#L1085)[#](#scikitplot.cython.build_package_from_code "Link to this definition")
:   Build and import a multi-module extension package and return loaded modules.

    Parameters:
    :   * ****modules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****package\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")[[**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.15)")]