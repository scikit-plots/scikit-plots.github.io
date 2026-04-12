# pybind11\_include[#](#pybind11-include "Link to this heading")

scikitplot.cython.pybind11\_include()[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/cython/_custom_compiler.py#L584)[#](#scikitplot.cython.pybind11_include "Link to this definition")
:   Return the pybind11 include directory, or `None` if not installed.

    Returns:
    :   pathlib.Path or None
        :   Absolute path to the pybind11 headers, or `None` when pybind11
            is not importable.

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | None

    Notes

    ****User note****: pass the result to `include_dirs`:

    ```
    inc = pybind11_include()
    if inc is None:
        raise ImportError("pip install pybind11")
    result = compile_and_load(code, include_dirs=[inc])

    ```

    Examples

    ```
    >>> p = pybind11_include()
    >>> p is None or p.is_dir()
    True

    ```