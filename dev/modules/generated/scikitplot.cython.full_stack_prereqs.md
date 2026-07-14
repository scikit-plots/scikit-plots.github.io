# full\_stack\_prereqs[#](#full-stack-prereqs "Link to this heading")

scikitplot.cython.full\_stack\_prereqs()[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/cython/_custom_compiler.py#L482)[#](#scikitplot.cython.full_stack_prereqs "Link to this definition")
:   Check prerequisites full stack setuptools, Cython, pybind11, and NumPy.

    Validates setuptools, Cython, pybind11, and NumPy — the full set
    required for scientific extension development with C-API bindings.

    Returns:
    :   dict[str, Any]
        :   Keys: `setuptools`, `cython`, `pybind11`, `numpy`.

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****Pro user note****: install the full stack with:

    ```
    pip install setuptools Cython pybind11 numpy

    ```

    If `pybind11["ok"]` is `False`, also try:

    ```
    pip install "pybind11[global]"

    ```

    to install CMake-compatible headers system-wide.

    Examples

    Try it in your browser!
    ```
    >>> result = full_stack_prereqs()
    >>> all(k in result for k in ("setuptools", "cython", "pybind11", "numpy"))
    True

    ```
    Go BackOpen In Tab