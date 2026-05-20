# make\_cache\_key[#](#make-cache-key "Link to this heading")

scikitplot.cython.make\_cache\_key(**payload**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c2567fd/scikitplot/cython/_cache.py#L273)[#](#scikitplot.cython.make_cache_key "Link to this definition")
:   Create a deterministic cache key from a JSON-serializable mapping.

    Parameters:
    :   ****payload****Mapping[str, Any]
        :   JSON-serializable mapping.

    Returns:
    :   str
        :   64-character hex digest.

    Parameters:
    :   ****payload**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")