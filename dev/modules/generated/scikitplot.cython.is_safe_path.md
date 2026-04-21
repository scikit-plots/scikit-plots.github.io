# is\_safe\_path[#](#is-safe-path "Link to this heading")

scikitplot.cython.is\_safe\_path(**path**, **\***, **allow\_absolute=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cython/_security.py#L312)[#](#scikitplot.cython.is_safe_path "Link to this definition")
:   Return `True` when a filesystem path does not contain traversal sequences.

    Parameters:
    :   ****path****str or os.PathLike
        :   Path to validate.

        ****allow\_absolute****bool, default=False
        :   If `False`, absolute paths are considered unsafe.

    Returns:
    :   bool
        :   `True` if the path passes all checks, `False` otherwise.

    Parameters:
    :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****allow\_absolute**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    Notes

    Path-traversal sequences (`../`, `..\\`, `~`) are always
    rejected regardless of `allow_absolute`.

    Examples

    Try it in your browser!
    ```
    >>> is_safe_path("include/mylib")
    True
    >>> is_safe_path("../../../etc/passwd")
    False
    >>> is_safe_path("/usr/include", allow_absolute=True)
    True
    >>> is_safe_path("/usr/include", allow_absolute=False)
    False

    ```
    Go BackOpen In Tab