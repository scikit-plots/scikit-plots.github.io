# sanitize[#](#sanitize "Link to this heading")

scikitplot.cython.sanitize(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/cython/_utils.py#L10)[#](#scikitplot.cython.sanitize "Link to this definition")
:   Convert an arbitrary string into a valid Python module name.

    Parameters:
    :   ****name****str
        :   Input string (path-like strings allowed).

    Returns:
    :   str
        :   Sanitized module-like identifier. The returned string is guaranteed to
            be a non-empty, valid Python identifier consisting only of ASCII
            alphanumerics and underscores.

    Raises:
    :   TypeError
        :   If `name` is not a `str`.

    Parameters:
    :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Notes

    * Non-alphanumeric characters (including `/`, `-`, `.`, spaces) are
      replaced with underscores.
    * If the first character of the result would be a digit, a leading
      underscore is prepended so that the output is always a valid identifier.
    * An empty input string returns `"_"` (the minimal valid identifier).

    Examples

    Try it in your browser!
    ```
    >>> sanitize("hello-world")
    'hello_world'
    >>> sanitize("123abc")
    '_123abc'
    >>> sanitize("")
    '_'
    >>> sanitize("a/b/c")
    'a_b_c'

    ```
    Go BackOpen In Tab