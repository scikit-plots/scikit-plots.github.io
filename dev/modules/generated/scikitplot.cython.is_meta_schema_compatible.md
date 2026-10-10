# is\_meta\_schema\_compatible[#](#is-meta-schema-compatible "Link to this heading")

scikitplot.cython.is\_meta\_schema\_compatible(**meta**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cython/_cache.py#L83)[#](#scikitplot.cython.is_meta_schema_compatible "Link to this definition")
:   Return whether `meta` can be trusted by the current reader.

    Compatible means the entry’s schema version is a version this library knows
    how to read: any version from 1 up to [`CACHE_SCHEMA_VERSION`](scikitplot.cython.CACHE_SCHEMA_VERSION.html#scikitplot.cython.CACHE_SCHEMA_VERSION "scikitplot.cython.CACHE_SCHEMA_VERSION"). Legacy
    entries (version 0, pre-versioning) and entries from a **newer**, unknown
    schema are treated as incompatible so they are rebuilt rather than misread
    (CYTHON-SCH-001).

    Parameters:
    :   ****meta**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")