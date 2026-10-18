# build\_package\_from\_paths\_result[#](#build-package-from-paths-result "Link to this heading")

scikitplot.cython.build\_package\_from\_paths\_result(**modules**, **\***, **package\_name**, **profile=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cython/_public.py#L1099)[#](#scikitplot.cython.build_package_from_paths_result "Link to this definition")
:   Build and import a multi-module extension package from `.pyx` file paths.

    Parameters:
    :   * ****modules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]**)
        * ****package\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**PackageBuildResult**](scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython._result.PackageBuildResult")