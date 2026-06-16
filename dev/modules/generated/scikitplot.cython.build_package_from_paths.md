# build\_package\_from\_paths[#](#build-package-from-paths "Link to this heading")

scikitplot.cython.build\_package\_from\_paths(**modules**, **\***, **package\_name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/cython/_public.py#L926)[#](#scikitplot.cython.build_package_from_paths "Link to this definition")
:   Build and import a multi-module extension package and return loaded modules.

    Parameters:
    :   * ****modules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]**)
        * ****package\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")]