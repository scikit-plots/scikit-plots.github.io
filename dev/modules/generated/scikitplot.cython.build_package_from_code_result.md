# build\_package\_from\_code\_result[#](#build-package-from-code-result "Link to this heading")

scikitplot.cython.build\_package\_from\_code\_result(**modules**, **\***, **package\_name**, **profile=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cython/_public.py#L991)[#](#scikitplot.cython.build_package_from_code_result "Link to this definition")
:   Build and import a multi-module extension package from code strings.

    Parameters:
    :   ****modules****Mapping[str, str]
        :   Mapping of module short name to Cython code.

        ****package\_name****str
        :   Package name.

        ****profile****{‘fast-debug’, ‘release’, ‘annotate’} or None, default=None
        :   Optional build profile preset.

        ****\*\*kwargs****dict
        :   Passed to the underlying builder.

    Returns:
    :   scikitplot.cython.PackageBuildResult
        :   Package build result.

    Parameters:
    :   * ****modules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****package\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**PackageBuildResult**](scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython._result.PackageBuildResult")