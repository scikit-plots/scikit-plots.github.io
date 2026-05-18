# numpy\_include[#](#numpy-include "Link to this heading")

scikitplot.cython.numpy\_include()[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/cython/_custom_compiler.py#L617)[#](#scikitplot.cython.numpy_include "Link to this definition")
:   Return the NumPy C-API include directory, or `None` if not installed.

    Returns:
    :   pathlib.Path or None
        :   Absolute path to `numpy/core/include`, or `None` when NumPy
            is not importable.

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | None

    Notes

    ****User note****: this is equivalent to passing
    `numpy_support=True` to the public API, but gives you an explicit
    path you can inspect or pass to a custom compiler.

    Examples

    Try it in your browser!
    ```
    >>> p = numpy_include()
    >>> p is None or p.is_dir()
    True

    ```
    Go BackOpen In Tab