# PackageCacheEntry[#](#packagecacheentry "Link to this heading")

class scikitplot.cython.PackageCacheEntry(**key=''**, **build\_dir=PosixPath('.')**, **package\_name=''**, **modules=()**, **artifacts=()**, **created\_utc=None**, **fingerprint=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/cython/_cache.py#L141)[#](#scikitplot.cython.PackageCacheEntry "Link to this definition")
:   A compiled **package** cache entry (multi-module build).

    Parameters:
    :   ****key****str
        :   Cache key (hex digest).

        ****build\_dir****pathlib.Path
        :   Directory containing the package directory and artifacts.

        ****package\_name****str
        :   Python package name (e.g., `"mypkg"`).

        ****modules****tuple[str, …]
        :   Full dotted module names included in the package build.

        ****artifacts****tuple[pathlib.Path, …]
        :   Artifact paths for modules in the same order as `modules`.

        ****created\_utc****str or None
        :   ISO timestamp (UTC) if available.

        ****fingerprint****Mapping[str, Any] or None
        :   Runtime fingerprint used when building this artifact (if available).

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****package\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****modules**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **...****]**)
        * ****artifacts**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**,** **...****]**)
        * ****created\_utc**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****fingerprint**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

    artifacts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"), ...][#](#scikitplot.cython.PackageCacheEntry.artifacts "Link to this definition")
    :   !! processed by numpydoc !!

    build\_dir: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.cython.PackageCacheEntry.build_dir "Link to this definition")
    :   !! processed by numpydoc !!

    created\_utc: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.PackageCacheEntry.created_utc "Link to this definition")
    :   !! processed by numpydoc !!

    fingerprint: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.PackageCacheEntry.fingerprint "Link to this definition")
    :   !! processed by numpydoc !!

    key: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.PackageCacheEntry.key "Link to this definition")
    :   !! processed by numpydoc !!

    modules: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...][#](#scikitplot.cython.PackageCacheEntry.modules "Link to this definition")
    :   !! processed by numpydoc !!

    package\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.PackageCacheEntry.package_name "Link to this definition")
    :   !! processed by numpydoc !!