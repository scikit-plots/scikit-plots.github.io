# build\_extension\_package\_from\_code\_result[#](#build-extension-package-from-code-result "Link to this heading")

scikitplot.cython.build\_extension\_package\_from\_code\_result(**modules**, **\***, **package\_name**, **cache\_dir=None**, **use\_cache=True**, **force\_rebuild=False**, **verbose=0**, **profile=None**, **annotate=False**, **view\_annotate=False**, **numpy\_support=True**, **numpy\_required=False**, **include\_dirs=None**, **library\_dirs=None**, **libraries=None**, **define\_macros=None**, **extra\_compile\_args=None**, **extra\_link\_args=None**, **compiler\_directives=None**, **extra\_sources=None**, **support\_files=None**, **support\_paths=None**, **include\_cwd=True**, **lock\_timeout\_s=60.0**, **language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cython/_builder.py#L1655)[#](#scikitplot.cython.build_extension_package_from_code_result "Link to this definition")
:   Compile a **package** of multiple extension modules from in-memory code strings.

    Parameters:
    :   ****modules****Mapping[str, str]
        :   Mapping of `{module_short_name: pyx_code}`. Module names must be simple
            identifiers (no dots). The compiled modules will be importable as
            `{package_name}.{module_short_name}`.

        ****package\_name****str
        :   Python package name (identifier-like; may include dots for a nested package).

        ****cache\_dir, use\_cache, force\_rebuild, verbose, annotate, view\_annotate, numpy\_support, numpy\_required****
        :   See [`scikitplot.cython.compile_and_load`](scikitplot.cython.compile_and_load.html#scikitplot.cython.compile_and_load "scikitplot.cython.compile_and_load").

        ****include\_dirs, library\_dirs, libraries, define\_macros, extra\_compile\_args, extra\_link\_args, compiler\_directives****
        :   See [`scikitplot.cython.compile_and_load`](scikitplot.cython.compile_and_load.html#scikitplot.cython.compile_and_load "scikitplot.cython.compile_and_load").

        ****extra\_sources****sequence of path-like, optional
        :   Additional C/C++ sources compiled and linked into **each** extension module.
            Allowed suffixes: .c, .cc, .cpp, .cxx, .C

        ****support\_files****Mapping[str, str | bytes] or None, default=None
        :   Support files written into the package directory (e.g., `.pxi`, `.pxd`).
            Filenames must be simple (no directories). Collisions are strict.

        ****support\_paths****sequence of path-like, optional
        :   Support files copied into the package directory. Basenames must be unique.

        ****include\_cwd****bool, default=True
        :   If True, include the current working directory in include paths.

        ****lock\_timeout\_s****float, default=60.0
        :   Maximum seconds to wait for the per-key build lock.

        ****language****{‘c’, ‘c++’} or None, default=None
        :   Optional explicit language for the extensions.

    Returns:
    :   scikitplot.cython.PackageBuildResult
        :   Result object containing all loaded modules.

    Parameters:
    :   * ****modules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
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
        * ****include\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** **None**)
        * ****library\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** **None**)
        * ****libraries**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****define\_macros**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None****]****]** **|** **None**)
        * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****extra\_sources**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** **None**)
        * ****support\_files**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** **None**)
        * ****support\_paths**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** **None**)
        * ****include\_cwd**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**PackageBuildResult**](scikitplot.cython.PackageBuildResult.html#scikitplot.cython.PackageBuildResult "scikitplot.cython._result.PackageBuildResult")