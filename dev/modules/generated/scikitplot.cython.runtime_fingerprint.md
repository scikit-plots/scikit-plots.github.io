# runtime\_fingerprint[#](#runtime-fingerprint "Link to this heading")

scikitplot.cython.runtime\_fingerprint(**\***, **cython\_version**, **numpy\_version**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/cython/_cache.py#L390)[#](#scikitplot.cython.runtime_fingerprint "Link to this definition")
:   Compute a runtime fingerprint for caching correctness.

    The fingerprint includes the interpreter, platform, and library versions
    ****and**** the toolchain / ABI inputs (compiler identity, extension ABI tag,
    pointer width, free-threaded flag) so that an artifact built with one
    compiler or ABI is never reused under an incompatible one
    (CYTHON-CACHE-003).

    Parameters:
    :   ****cython\_version****str
        :   Cython version.

        ****numpy\_version****str or None
        :   NumPy version (None if not used).

    Returns:
    :   Mapping[str, Any]
        :   Fingerprint mapping.

    Parameters:
    :   * ****cython\_version**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****numpy\_version**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    Extending this mapping intentionally changes cache keys, so entries built by
    an older library version are treated as misses and rebuilt once — this is
    the correct behaviour, since those entries lacked toolchain/ABI safety.