# build\_extension\_module\_result[#](#build-extension-module-result "Link to this heading")

scikitplot.cython.build\_extension\_module\_result(**\***, **code**, **source\_path**, **module\_name**, **cache\_dir**, **use\_cache**, **force\_rebuild**, **verbose**, **profile=None**, **annotate**, **view\_annotate**, **numpy\_support**, **numpy\_required**, **include\_dirs**, **library\_dirs**, **libraries**, **define\_macros**, **extra\_compile\_args**, **extra\_link\_args**, **compiler\_directives**, **extra\_sources=None**, **support\_files=None**, **support\_paths=None**, **include\_cwd=True**, **lock\_timeout\_s=60.0**, **language=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/cython/_builder.py#L358)[#](#scikitplot.cython.build_extension_module_result "Link to this definition")
:   Compile and import an extension module, with deterministic caching.

    Parameters:
    :   ****code****str or None
        :   Cython source string that is valid for a `.pyx` file. Exactly one of
            `code` or `source_path` must be provided.

        ****source\_path****pathlib.Path or None
        :   Path to a `.pyx` file. Exactly one of `code` or `source_path` must
            be provided.

        ****module\_name****str or None
        :   Optional explicit module name. If None, a deterministic name is derived
            from the cache key.

        ****cache\_dir****str or pathlib.Path or None
        :   Root cache directory for build artifacts.

        ****use\_cache****bool
        :   If True, reuse a previously compiled artifact when the cache key matches.

        ****force\_rebuild****bool
        :   If True, rebuild even if a cached artifact exists.

        ****verbose****int
        :   Build verbosity. Negative values suppress most build output.

        ****profile****str or None
        :   Optional profile label (e.g., “fast-debug”, “release”, “annotate”).
            This value is persisted in metadata for introspection but does not affect
            the cache key by itself (the actual build options do).

        ****annotate****bool
        :   If True, generate a Cython annotation HTML file.

        ****view\_annotate****bool
        :   If True, open the annotation HTML file in a browser (requires annotate=True).

        ****numpy\_support****bool
        :   If True, attempt to add NumPy include directories when NumPy is installed.

        ****numpy\_required****bool
        :   If True and numpy\_support=True, raise ImportError when NumPy is not installed.

        ****include\_dirs, library\_dirs, libraries, define\_macros, extra\_compile\_args, extra\_link\_args****
        :   Standard extension build options passed to the C/C++ compiler and linker.

        ****compiler\_directives****Mapping[str, Any] or None
        :   Cython compiler directives (default includes `language_level=3`).

        ****extra\_sources****sequence of path-like, optional
        :   Additional C/C++ sources to compile and link into the extension.
            Only files ending in [‘.c’, ‘.cc’, ‘.cpp’, ‘.cxx’] are accepted.

        ****support\_files****Mapping[str, str | bytes] or None, optional
        :   Extra **support** files written into the build directory when compiling from
            a source string (e.g., `.pxi` / `.pxd` / headers). Keys must be simple
            filenames (no directories). Values are written as UTF-8 text for `str`
            and as raw bytes for `bytes`.

        ****support\_paths****sequence of path-like, optional
        :   Extra support files copied into the build directory when compiling from a
            source file. Each file is copied by basename into the build directory.

        ****include\_cwd****bool, default=True
        :   If True, include the current working directory in include paths.

        ****lock\_timeout\_s****float, default=60.0
        :   Maximum seconds to wait for the per-key build lock.

        ****language****{‘c’, ‘c++’} or None, default=None
        :   Optional explicit language for the extension. If None, the build uses the
            default compiler behavior.

    Returns:
    :   scikitplot.cython.BuildResult
        :   Structured build result including the imported module and metadata.

    Raises:
    :   ValueError
        :   If inputs are invalid or unsupported.

        ImportError
        :   If required build dependencies are missing (Cython, setuptools, and optionally NumPy).

        RuntimeError
        :   If compilation fails.

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
        * ****library\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")**]** **|** **None**)
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
    :   [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")

    Notes

    The returned module is annotated with:

    * `__scikitplot_cython_key__`: cache key
    * `__scikitplot_cython_build_dir__`: build directory
    * `__scikitplot_cython_artifact__`: compiled artifact path