# write\_meta[#](#write-meta "Link to this heading")

scikitplot.cython.write\_meta(**build\_dir**, **meta**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/cython/_cache.py#L359)[#](#scikitplot.cython.write_meta "Link to this definition")
:   Write `meta.json` in the build directory atomically.

    Parameters:
    :   ****build\_dir****pathlib.Path
        :   Cache entry directory.

        ****meta****Mapping[str, Any]
        :   Metadata mapping.

    Parameters:
    :   * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****meta**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    Return type:
    :   None

    Notes

    Uses a write-then-rename (atomic replace) pattern so that a crash during
    writing never leaves a partially-written `meta.json`. On POSIX this is
    an atomic operation; on Windows it uses `replace()` which is best-effort.