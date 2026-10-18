# CacheEntry[#](#cacheentry "Link to this heading")

class scikitplot.cython.CacheEntry(**key=''**, **build\_dir=PosixPath('.')**, **module\_name=''**, **artifact\_path=PosixPath('.')**, **created\_utc=None**, **fingerprint=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cython/_cache.py#L131)[#](#scikitplot.cython.CacheEntry "Link to this definition")
:   A compiled **module** cache entry.

    Parameters:
    :   ****key****str
        :   Cache key (hex digest).

        ****build\_dir****pathlib.Path
        :   Directory containing build artifacts for this key.

        ****module\_name****str
        :   Python module name used to compile the extension.

        ****artifact\_path****pathlib.Path
        :   Path to the compiled extension (e.g., `.so` or `.pyd`).

        ****created\_utc****str or None
        :   ISO timestamp (UTC) if available.

        ****fingerprint****Mapping[str, Any] or None
        :   Runtime fingerprint used when building this artifact (if available).

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****module\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****artifact\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****created\_utc**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****fingerprint**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    artifact\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[#](#scikitplot.cython.CacheEntry.artifact_path "Link to this definition")
    :   !! processed by numpydoc !!

    build\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[#](#scikitplot.cython.CacheEntry.build_dir "Link to this definition")
    :   !! processed by numpydoc !!

    created\_utc: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cython.CacheEntry.created_utc "Link to this definition")
    :   !! processed by numpydoc !!

    fingerprint: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cython.CacheEntry.fingerprint "Link to this definition")
    :   !! processed by numpydoc !!

    key: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.cython.CacheEntry.key "Link to this definition")
    :   !! processed by numpydoc !!

    module\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.cython.CacheEntry.module_name "Link to this definition")
    :   !! processed by numpydoc !!