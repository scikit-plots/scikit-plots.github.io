# build\_extension\_module[#](#build-extension-module "Link to this heading")

scikitplot.cython.build\_extension\_module(**\***, **code**, **source\_path**, **module\_name**, **cache\_dir**, **use\_cache**, **force\_rebuild**, **verbose**, **profile=None**, **annotate**, **view\_annotate**, **numpy\_support**, **numpy\_required**, **include\_dirs**, **library\_dirs**, **libraries**, **define\_macros**, **extra\_compile\_args**, **extra\_link\_args**, **compiler\_directives**, **extra\_sources=None**, **support\_files=None**, **support\_paths=None**, **include\_cwd=True**, **lock\_timeout\_s=60.0**, **language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ee25698/scikitplot/cython/_builder.py#L222)[#](#scikitplot.cython.build_extension_module "Link to this definition")
:   Compile and import an extension module (module-only convenience wrapper).

    This is the internal implementation used by the public API. It delegates
    entirely to [`build_extension_module_result`](scikitplot.cython.build_extension_module_result.html#scikitplot.cython.build_extension_module_result "scikitplot.cython.build_extension_module_result") and returns only the
    imported module object. Use [`build_extension_module_result`](scikitplot.cython.build_extension_module_result.html#scikitplot.cython.build_extension_module_result "scikitplot.cython.build_extension_module_result") when
    structured metadata (cache key, artifact path, fingerprint) is required.

    Parameters:
    :   ****code****str or None
        :   Cython source string. Exactly one of `code` or `source_path` must
            be provided.

        ****source\_path****pathlib.Path or None
        :   Path to a `.pyx` file. Exactly one of `code` or `source_path`
            must be provided.

        ****module\_name****str or None
        :   Optional explicit module name. Derived from the cache key if `None`.

        ****cache\_dir****str or pathlib.Path or None
        :   Root cache directory for build artifacts.

        ****use\_cache****bool
        :   If `True`, reuse an existing cached artifact when the cache key
            matches.

        ****force\_rebuild****bool
        :   If `True`, rebuild even when a valid cached artifact exists.

        ****verbose****int
        :   Build verbosity. Negative values suppress most output.

        ****profile****str or None
        :   Optional build profile (`"fast-debug"`, `"release"`,
            `"annotate"`).

        ****annotate****bool
        :   If `True`, generate a Cython HTML annotation file.

        ****view\_annotate****bool
        :   If `True`, open the annotation HTML in a browser after compilation.
            Requires `annotate=True`. Silently skipped in headless environments.

        ****numpy\_support****bool
        :   If `True`, attempt to add NumPy include directories.

        ****numpy\_required****bool
        :   If `True` and `numpy_support=True`, raise `ImportError` when
            NumPy is not installed.

        ****include\_dirs****sequence of path-like or None
        :   Additional C/C++ include directories.

        ****library\_dirs****sequence of path-like or None
        :   Additional linker search directories.

        ****libraries****sequence of str or None
        :   Libraries to link against.

        ****define\_macros****sequence of (str, str | None) or None
        :   Preprocessor macros to define.

        ****extra\_compile\_args****sequence of str or None
        :   Extra flags passed to the C/C++ compiler.

        ****extra\_link\_args****sequence of str or None
        :   Extra flags passed to the linker.

        ****compiler\_directives****Mapping[str, Any] or None
        :   Cython compiler directives merged over the baseline defaults.

        ****extra\_sources****sequence of path-like or None, default=None
        :   Additional C/C++ source files to compile and link.

        ****support\_files****Mapping[str, str | bytes] or None, default=None
        :   In-memory support files written into the build directory before
            compilation (e.g., `.pxd` / `.pxi` headers).

        ****support\_paths****sequence of path-like or None, default=None
        :   On-disk support files copied into the build directory before
            compilation.

        ****include\_cwd****bool, default=True
        :   If `True`, add the current working directory to include paths.

        ****lock\_timeout\_s****float, default=60.0
        :   Maximum seconds to wait for the per-key build lock.

        ****language****{{‘c’, ‘c++’}} or None, default=None
        :   Optional language override for the extension.

    Returns:
    :   types.ModuleType
        :   The imported extension module.

    Parameters:
    :   * ****code**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****cache\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****use\_cache**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****force\_rebuild**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****verbose**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****annotate**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****view\_annotate**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****numpy\_support**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****numpy\_required**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** **None**)
        * ****library\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]** **|** **None**)
        * ****libraries**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****define\_macros**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None****]****]** **|** **None**)
        * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****compiler\_directives**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_sources**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** **None**)
        * ****support\_files**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** **None**)
        * ****support\_paths**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** **None**)
        * ****include\_cwd**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****lock\_timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")

    > **See also**
    > [`build_extension_module_result`](scikitplot.cython.build_extension_module_result.html#scikitplot.cython.build_extension_module_result "scikitplot.cython.build_extension_module_result")
    :   Same operation returning structured metadata.