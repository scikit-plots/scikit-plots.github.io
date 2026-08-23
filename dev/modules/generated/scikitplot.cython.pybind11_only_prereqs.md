# pybind11\_only\_prereqs[#](#pybind11-only-prereqs "Link to this heading")

scikitplot.cython.pybind11\_only\_prereqs()[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/cython/_custom_compiler.py#L623)[#](#scikitplot.cython.pybind11_only_prereqs "Link to this definition")
:   Check prerequisites pybind11 only.

    Only pybind11 is required. Cython and setuptools are NOT required
    for header-only pybind11 projects that use CMake or a custom build.

    Returns:
    :   dict[str, Any]
        :   Keys: `pybind11`.

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****Master user note****: pybind11 header-only projects compile C++ directly.
    Use [`pybind11_include`](scikitplot.cython.pybind11_include.html#scikitplot.cython.pybind11_include "scikitplot.cython.pybind11_include") to get the header directory, then pass it
    to your C++ compiler as `-I<dir>`.

    Examples

    Try it in your browser!
    ```
    >>> result = pybind11_only_prereqs()
    >>> "pybind11" in result
    True

    ```
    Go BackOpen In Tab