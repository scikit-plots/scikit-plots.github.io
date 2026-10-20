# build\_package\_example\_result[#](#build-package-example-result "Link to this heading")

scikitplot.cython.build\_package\_example\_result(**name**, **\***, **cache\_dir=None**, **use\_cache=True**, **force\_rebuild=False**, **verbose=0**, **profile=None**, **numpy\_support=True**, **numpy\_required=False**, **include\_dirs=None**, **extra\_compile\_args=None**, **extra\_link\_args=None**, **compiler\_directives=None**, **include\_cwd=True**, **lock\_timeout\_s=60.0**, **language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cython/_templates_api.py#L984)[#](#scikitplot.cython.build_package_example_result "Link to this definition")
:   Build and import a multi-module **package example** and return a structured result.

    Parameters:
    :   ****name****str
        :   Package example name under `_templates/package_examples`.

        ****cache\_dir, use\_cache, force\_rebuild, verbose, profile, numpy\_support, numpy\_required, include\_dirs, extra\_compile\_args, extra\_link\_args, compiler\_directives, include\_cwd, lock\_timeout\_s, language****
        :   See [`scikitplot.cython.build_package_from_paths_result`](scikitplot.cython.build_package_from_paths_result.html#scikitplot.cython.build_package_from_paths_result "scikitplot.cython.build_package_from_paths_result").

    Returns:
    :   scikitplot.cython.PackageBuildResult
        :   Structured package build result.

    Raises:
    :   ValueError
        :   If metadata is missing required fields.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****use\_cache**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****force\_rebuild**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****verbose**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****numpy\_support**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****numpy\_required**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_dirs**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")**]** **|** **None**)
        * ****extra\_compile\_args**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****include\_cwd**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)