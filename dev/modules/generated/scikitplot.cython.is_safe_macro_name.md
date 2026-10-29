# is\_safe\_macro\_name[#](#is-safe-macro-name "Link to this heading")

scikitplot.cython.is\_safe\_macro\_name(**name**, **\***, **allow\_reserved=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_security.py#L440)[#](#scikitplot.cython.is_safe_macro_name "Link to this definition")
:   Return `True` when a C preprocessor macro name is safe to define.

    Parameters:
    :   ****name****str
        :   Macro name (the left-hand side of a `-D` flag).

        ****allow\_reserved****bool, default=False
        :   If `False`, names that shadow CPython or security-critical
            preprocessor guards are rejected.

    Returns:
    :   bool
        :   `True` if the name is safe, `False` otherwise.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****allow\_reserved**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    Notes

    Valid macro names match the regex `[A-Za-z_][A-Za-z0-9_]*`. The
    reserved-name check is independent of syntax validity.

    Examples

    Try it in your browser!
    ```
    >>> is_safe_macro_name("MY_FLAG")
    True
    >>> is_safe_macro_name("Py_LIMITED_API")
    False
    >>> is_safe_macro_name("Py_LIMITED_API", allow_reserved=True)
    True
    >>> is_safe_macro_name("123INVALID")
    False

    ```
    Go BackOpen In Tab