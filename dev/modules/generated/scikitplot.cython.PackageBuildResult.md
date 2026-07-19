# PackageBuildResult[#](#packagebuildresult "Link to this heading")

class scikitplot.cython.PackageBuildResult(**package\_name=''**, **key=''**, **build\_dir=<factory>**, **results=<factory>**, **used\_cache=False**, **created\_utc=None**, **fingerprint=None**, **meta=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/cython/_result.py#L120)[#](#scikitplot.cython.PackageBuildResult "Link to this definition")
:   Result of compiling/importing a **package** of extension modules.

    A “package build” compiles multiple Cython extension modules in a single
    build directory under one Python package name (e.g., `mypkg.mod1`,
    `mypkg.mod2`). This supports workflows where a logical unit is split across
    several `.pyx` modules, and/or a package has multiple extension entrypoints.

    Parameters:
    :   ****package\_name****str
        :   Python package name (e.g., `"mypkg"`).

        ****key****str
        :   Deterministic cache key for this package build configuration.

        ****build\_dir****pathlib.Path
        :   Cache/build directory containing the package directory and artifacts.

        ****results****Sequence[BuildResult]
        :   Per-module build results, in deterministic module-name order.

        ****used\_cache****bool
        :   Whether an existing artifact set was reused without recompilation.

        ****created\_utc****str or None
        :   ISO 8601 UTC timestamp (`...Z`) if available.

        ****fingerprint****Mapping[str, Any] or None
        :   Runtime fingerprint used for caching (Python/Cython/NumPy/platform).

        ****meta****Mapping[str, Any]
        :   The full metadata dictionary persisted in `meta.json` for this entry.

    Parameters:
    :   * ****package\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****results**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")**]**)
        * ****used\_cache**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****created\_utc**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****fingerprint**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****meta**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    build\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.cython.PackageBuildResult.build_dir "Link to this definition")
    :   !! processed by numpydoc !!

    created\_utc: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.PackageBuildResult.created_utc "Link to this definition")
    :   !! processed by numpydoc !!

    fingerprint: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.PackageBuildResult.fingerprint "Link to this definition")
    :   !! processed by numpydoc !!

    key: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.PackageBuildResult.key "Link to this definition")
    :   !! processed by numpydoc !!

    meta: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][#](#scikitplot.cython.PackageBuildResult.meta "Link to this definition")
    :   !! processed by numpydoc !!

    property modules: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[ModuleType](https://docs.python.org/3/library/types.html#types.ModuleType "(in Python v3.14)")][#](#scikitplot.cython.PackageBuildResult.modules "Link to this definition")
    :   Loaded modules in the same order as `results`.

        Returns:
        :   Sequence[types.ModuleType]
            :   Loaded extension modules.

    package\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.PackageBuildResult.package_name "Link to this definition")
    :   !! processed by numpydoc !!

    results: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")[[BuildResult](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")][#](#scikitplot.cython.PackageBuildResult.results "Link to this definition")
    :   !! processed by numpydoc !!

    used\_cache: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.PackageBuildResult.used_cache "Link to this definition")
    :   !! processed by numpydoc !!