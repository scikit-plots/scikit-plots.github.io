# sanitize[#](#sanitize "Link to this heading")

scikitplot.cython.sanitize(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/cython/_utils.py#L17)[#](#scikitplot.cython.sanitize "Link to this definition")
:   Convert an arbitrary string into a valid, collision-resistant module name.

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

    * Non-ASCII and non-alphanumeric characters (including `/`, `-`, `.`,
      spaces, and any Unicode letter such as `é`) are replaced with
      underscores, so the result is always pure ASCII (CYTHON-API-003).
    * If the first character of the result would be a digit, a leading
      underscore is prepended so that the output is always a valid identifier.
    * ****Collision resistance****: when sanitisation actually alters the input
      (characters were replaced or a prefix added), a short `_<hash>` suffix
      derived from the **original** string is appended, so distinct inputs that
      would otherwise map to the same identifier (e.g. `"a-b"` and `"a.b"`)
      get distinct names. Inputs that are already valid ASCII identifiers are
      returned unchanged (no suffix), preserving backward-compatible names.
    * An empty input string returns `"_"` (the minimal valid identifier).

    Examples

    Try it in your browser!
    ```
    >>> sanitize("hello_world")  # already valid -> unchanged
    'hello_world'
    >>> sanitize("hello-world")  # altered -> disambiguated
    'hello_world_afa27b44'
    >>> sanitize("")
    '_'
    >>> sanitize("a-b") == sanitize("a.b")  # distinct inputs -> distinct names
    False

    ```
    Go BackOpen In Tab