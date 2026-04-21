# BuildResult[#](#buildresult "Link to this heading")

class scikitplot.cython.BuildResult(**module=<factory>**, **key=''**, **module\_name=''**, **build\_dir=<factory>**, **artifact\_path=<factory>**, **used\_cache=False**, **created\_utc=None**, **fingerprint=None**, **source\_sha256=None**, **meta=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cython/_result.py#L51)[#](#scikitplot.cython.BuildResult "Link to this definition")
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
    :   * ****module**** ([**ModuleType**](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)"))
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****artifact\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****used\_cache**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****created\_utc**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****fingerprint**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****source\_sha256**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****meta**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    Notes

    Importing an extension artifact requires the **same** `module_name` it was
    compiled for.

    artifact\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.artifact_path "Link to this definition")
    :   !! processed by numpydoc !!

    build\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.build_dir "Link to this definition")
    :   !! processed by numpydoc !!

    created\_utc: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.created_utc "Link to this definition")
    :   !! processed by numpydoc !!

    fingerprint: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.fingerprint "Link to this definition")
    :   !! processed by numpydoc !!

    key: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.key "Link to this definition")
    :   !! processed by numpydoc !!

    meta: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][#](#scikitplot.cython.BuildResult.meta "Link to this definition")
    :   !! processed by numpydoc !!

    module: [ModuleType](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.module "Link to this definition")
    :   !! processed by numpydoc !!

    module\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.module_name "Link to this definition")
    :   !! processed by numpydoc !!

    source\_sha256: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.source_sha256 "Link to this definition")
    :   !! processed by numpydoc !!

    used\_cache: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.BuildResult.used_cache "Link to this definition")
    :   !! processed by numpydoc !!