# runtime\_fingerprint[#](#runtime-fingerprint "Link to this heading")

scikitplot.cython.runtime\_fingerprint(**\***, **cython\_version**, **numpy\_version**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/cython/_cache.py#L312)[#](#scikitplot.cython.runtime_fingerprint "Link to this definition")
:   Compute a runtime fingerprint for caching correctness.

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