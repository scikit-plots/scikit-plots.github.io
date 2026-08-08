# build\_package\_from\_code[#](#build-package-from-code "Link to this heading")

scikitplot.cython.build\_package\_from\_code(**modules**, **\***, **package\_name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/cython/_public.py#L1057)[#](#scikitplot.cython.build_package_from_code "Link to this definition")
:   Build and import a multi-module extension package and return loaded modules.

    Parameters:
    :   * ****modules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****package\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")]