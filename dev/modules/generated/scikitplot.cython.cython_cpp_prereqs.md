# cython\_cpp\_prereqs[#](#cython-cpp-prereqs "Link to this heading")

scikitplot.cython.cython\_cpp\_prereqs()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/cython/_custom_compiler.py#L454)[#](#scikitplot.cython.cython_cpp_prereqs "Link to this definition")
:   Check prerequisites compile C++ via Cython.

    Requires Cython only. NumPy is optional; setuptools is optional (the
    Cython compiler transpiles the `.pyx` to C++ which can be compiled
    separately).

    Returns:
    :   dict[str, Any]
        :   Keys: `cython`. Each value is a dict with `ok: bool`.

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****Newbie user note****: install Cython with `pip install Cython`.
    You also need a working C++ compiler (`gcc`/`g++` on Linux,
    Xcode on macOS, MSVC on Windows).

    Examples

    Try it in your browser!
    ```
    >>> result = cython_cpp_prereqs()
    >>> "cython" in result
    True

    ```
    Go BackOpen In Tab