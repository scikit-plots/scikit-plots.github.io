# pure\_python\_prereqs[#](#pure-python-prereqs "Link to this heading")

scikitplot.cython.pure\_python\_prereqs()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/cython/_custom_compiler.py#L426)[#](#scikitplot.cython.pure_python_prereqs "Link to this definition")
:   Check prerequisites pure Python, setuptools only.

    No Cython, pybind11, or NumPy is required. Only setuptools (for
    building pure-Python packages with a `setup.py`) is checked.

    Returns:
    :   dict[str, Any]
        :   Keys: `setuptools`. Each value is a dict with `ok: bool`
            and either `version: str` or `error: str`.

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****Newbie user note****: if `setuptools["ok"]` is `False`, install
    it with `pip install setuptools`. No C compiler is needed for
    pure Python packages.

    Examples

    Try it in your browser!
    ```
    >>> result = pure_python_prereqs()
    >>> "setuptools" in result
    True

    ```
    Go BackOpen In Tab