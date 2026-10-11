# build\_extension\_package\_from\_paths\_result[#](#build-extension-package-from-paths-result "Link to this heading")

scikitplot.cython.build\_extension\_package\_from\_paths\_result(**modules**, **\***, **package\_name**, **cache\_dir=None**, **use\_cache=True**, **force\_rebuild=False**, **verbose=0**, **profile=None**, **annotate=False**, **view\_annotate=False**, **numpy\_support=True**, **numpy\_required=False**, **include\_dirs=None**, **library\_dirs=None**, **libraries=None**, **define\_macros=None**, **extra\_compile\_args=None**, **extra\_link\_args=None**, **compiler\_directives=None**, **extra\_sources=None**, **support\_files=None**, **support\_paths=None**, **include\_cwd=True**, **lock\_timeout\_s=60.0**, **language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cython/_builder.py#L2077)[#](#scikitplot.cython.build_extension_package_from_paths_result "Link to this definition")
:   Compile a **package** of multiple extension modules from existing `.pyx` files.

    Parameters:
    :   ****modules****Mapping[str, str | pathlib.Path]
        :   Mapping of `{module_short_name: pyx_path}`.

        ****package\_name****str
        :   Python package name.

        ****(other parameters)****
        :   See [`build_extension_package_from_code_result`](scikitplot.cython.build_extension_package_from_code_result.html#scikitplot.cython.build_extension_package_from_code_result "scikitplot.cython.build_extension_package_from_code_result").

    Returns:
    :   scikitplot.cython.PackageBuildResult
        :   Result object containing all loaded modules.

    Parameters:
    :   * ****modules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]**)
        * ****package\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****use\_cache**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****force\_rebuild**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****verbose**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****annotate**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****view\_annotate**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****numpy\_support**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****numpy\_required**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]** **|** **None**)
        * ****library\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]** **|** **None**)
        * ****libraries**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****define\_macros**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None****]****]** **|** **None**)
        * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****extra\_sources**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]** **|** **None**)
        * ****support\_files**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** **None**)
        * ****support\_paths**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]** **|** **None**)
        * ****include\_cwd**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**PackageBuildResult**](scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython._result.PackageBuildResult")