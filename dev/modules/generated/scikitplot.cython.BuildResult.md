# BuildResult[#](#buildresult "Link to this heading")

class scikitplot.cython.BuildResult(**module=<factory>**, **key=''**, **module\_name=''**, **build\_dir=<factory>**, **artifact\_path=<factory>**, **used\_cache=False**, **created\_utc=None**, **fingerprint=None**, **source\_sha256=None**, **meta=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cython/_result.py#L95)[#](#scikitplot.cython.BuildResult "Link to this definition")
:   Result of compiling/importing a single Cython extension module.

    Parameters:
    :   ****module****types.ModuleType
        :   The imported extension module.

        ****key****str
        :   Deterministic cache key for this build configuration.

        ****module\_name****str
        :   Module name the artifact was compiled for (init symbol name).

        ****build\_dir****pathlib.Path
        :   Cache/build directory containing source, metadata, and artifacts.

        ****artifact\_path****pathlib.Path
        :   Path to the compiled extension artifact (`.so` / `.pyd`).

        ****used\_cache****bool
        :   Whether an existing artifact was reused without recompilation.

        ****created\_utc****str or None
        :   ISO 8601 UTC timestamp (`...Z`) if available.

        ****fingerprint****Mapping[str, Any] or None
        :   Runtime fingerprint used for caching (Python/Cython/NumPy/platform).

        ****source\_sha256****str or None
        :   SHA-256 digest of the main source content, if available.

        ****meta****Mapping[str, Any]
        :   The full metadata dictionary persisted in `meta.json` for this entry.

    Parameters:
    :   * ****module**** ([**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.15)"))
        * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****artifact\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****used\_cache**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****created\_utc**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****fingerprint**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****source\_sha256**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****meta**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    Importing an extension artifact requires the **same** `module_name` it was
    compiled for.

    property annotation\_html: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.annotation_html "Link to this definition")
    :   Absolute path of this module’s Cython annotation report, if there is one.

        Returns:
        :   pathlib.Path or None
            :   The `.html` file Cython wrote for this module when the build was
                made with `annotate=True` (or `profile="annotate"`); `None`
                when the build did not annotate or the file is not on disk.

        Notes

        ****User.**** Open the file in a browser to read the generated C/C++ next
        to each line of the `.pyx` source; lines are shaded by how much they
        call into the Python interpreter. `meta["annotate_html"]` holds the
        same file as a path relative to `build_dir`.

        Examples

        Try it in your browser!
        ```
        >>> result = compile_and_load_result(code, annotate=True)
        >>> result.annotation_html.name
        'scikitplot_cython_0123456789abcdef.html'

        ```
        Go BackOpen In Tab

    artifact\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.artifact_path "Link to this definition")
    :   !! processed by numpydoc !!

    build\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.build_dir "Link to this definition")
    :   !! processed by numpydoc !!

    created\_utc: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.created_utc "Link to this definition")
    :   !! processed by numpydoc !!

    fingerprint: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.fingerprint "Link to this definition")
    :   !! processed by numpydoc !!

    key: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.key "Link to this definition")
    :   !! processed by numpydoc !!

    meta: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][#](#scikitplot.cython.BuildResult.meta "Link to this definition")
    :   !! processed by numpydoc !!

    module: [ModuleType](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.module "Link to this definition")
    :   !! processed by numpydoc !!

    module\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.module_name "Link to this definition")
    :   !! processed by numpydoc !!

    source\_sha256: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.source_sha256 "Link to this definition")
    :   !! processed by numpydoc !!

    used\_cache: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.cython.BuildResult.used_cache "Link to this definition")
    :   !! processed by numpydoc !!