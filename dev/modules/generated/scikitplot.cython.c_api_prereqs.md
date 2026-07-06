# c\_api\_prereqs[#](#c-api-prereqs "Link to this heading")

scikitplot.cython.c\_api\_prereqs()[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/cython/_custom_compiler.py#L547)[#](#scikitplot.cython.c_api_prereqs "Link to this definition")
:   Check prerequisites own custom C-API.

    Validates Cython (for `.pyx` transpilation), NumPy (for
    `numpy/arrayobject.h`), and setuptools (for the build extension
    infrastructure).

    Returns:
    :   dict[str, Any]
        :   Keys: `cython`, `numpy`, `setuptools`.

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****Master user note****: use [`collect_c_api_sources`](scikitplot.cython.collect_c_api_sources.html#scikitplot.cython.collect_c_api_sources "scikitplot.cython.collect_c_api_sources") to glob C
    source trees. Pass the result as `extra_sources` to
    [`scikitplot.cython.compile_and_load`](scikitplot.cython.compile_and_load.html#scikitplot.cython.compile_and_load "scikitplot.cython.compile_and_load").

    Examples

    Try it in your browser!
    ```
    >>> result = c_api_prereqs()
    >>> all(k in result for k in ("cython", "numpy", "setuptools"))
    True

    ```
    Go BackOpen In Tab