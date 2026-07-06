# compile\_template\_result[#](#compile-template-result "Link to this heading")

scikitplot.cython.compile\_template\_result(**template\_id**, **\***, **module\_name=None**, **cache\_dir=None**, **use\_cache=True**, **force\_rebuild=False**, **verbose=0**, **profile=None**, **numpy\_support=True**, **numpy\_required=None**, **annotate=None**, **view\_annotate=False**, **compiler\_directives=None**, **include\_dirs=None**, **extra\_compile\_args=None**, **extra\_link\_args=None**, **extra\_sources=None**, **support\_files=None**, **support\_paths=None**, **include\_cwd=True**, **lock\_timeout\_s=60.0**, **language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/cython/_templates_api.py#L487)[#](#scikitplot.cython.compile_template_result "Link to this definition")
:   Compile and import a Cython template and return a structured result.

    Parameters:
    :   ****template\_id****str
        :   Template ID resolving to a `.pyx` template.

        ****module\_name****str or None, default=None
        :   Compiled module name override. If None, the builder derives a unique,
            deterministic name from the full cache key (recommended to avoid
            collisions when building the same template under different options).

        ****include\_cwd****bool, default=True
        :   If True, include the current working directory in include paths.

        ****lock\_timeout\_s****float, default=60.0
        :   Max seconds to wait for the per-key build lock.

        ****cache\_dir, use\_cache, force\_rebuild, verbose, annotate, view\_annotate, compiler\_directives, include\_dirs, extra\_sources****
        :   See [`scikitplot.cython.compile_and_load`](scikitplot.cython.compile_and_load.html#scikitplot.cython.compile_and_load "scikitplot.cython.compile_and_load").

        ****profile****{‘fast-debug’, ‘release’, ‘annotate’} or None, default=None
        :   Optional build profile preset.

        ****numpy\_support****bool, default=True
        :   If True, attempt to include NumPy headers if NumPy is installed.

        ****numpy\_required****bool or None, default=None
        :   If True, raise if NumPy is unavailable. If None, value is derived from
            template metadata (`requires_numpy`) when present.

        ****support\_files, support\_paths****
        :   Additional support files/paths to include for compilation.

        ****language****{‘c’, ‘c++’} or None, default=None
        :   Optional language override. If None, may be derived from metadata.

    Returns:
    :   scikitplot.cython.BuildResult
        :   Structured build result.

    Raises:
    :   ValueError
        :   If the resolved template is not a Cython template.

    Parameters:
    :   * ****template\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****use\_cache**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****force\_rebuild**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****verbose**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****numpy\_support**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****numpy\_required**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)
        * ****annotate**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)
        * ****view\_annotate**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****include\_dirs**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_compile\_args**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_sources**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]** **|** **None**)
        * ****support\_files**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** **None**)
        * ****support\_paths**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]** **|** **None**)
        * ****include\_cwd**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](../../auto_examples/cython/plot_01_browse_and_compile_templates.html)

Browse and compile templates