# read\_meta[#](#read-meta "Link to this heading")

scikitplot.cython.read\_meta(**build\_dir**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cython/_cache.py#L513)[#](#scikitplot.cython.read_meta "Link to this definition")
:   Read `meta.json` from a build directory.

    Parameters:
    :   ****build\_dir****pathlib.Path
        :   Cache entry directory.

    Returns:
    :   Mapping[str, Any] or None
        :   Parsed metadata dict, or None if missing/invalid.

    Parameters:
    :   ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))

    Return type:
    :   [**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | None