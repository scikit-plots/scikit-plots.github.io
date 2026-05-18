# is\_safe\_compiler\_arg[#](#is-safe-compiler-arg "Link to this heading")

scikitplot.cython.is\_safe\_compiler\_arg(**arg**, **\***, **allow\_shell\_meta=False**, **allow\_dangerous=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/cython/_security.py#L409)[#](#scikitplot.cython.is_safe_compiler_arg "Link to this definition")
:   Return `True` when a compiler argument string is safe to pass.

    Parameters:
    :   ****arg****str
        :   A single compiler flag (e.g., `"-O2"`, `"-DNDEBUG"`).

        ****allow\_shell\_meta****bool, default=False
        :   If `False`, shell metacharacters are rejected.

        ****allow\_dangerous****bool, default=False
        :   If `False`, known-dangerous flag patterns are rejected.

    Returns:
    :   bool
        :   `True` if the argument passes all checks, `False` otherwise.

    Parameters:
    :   * ****arg**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****allow\_shell\_meta**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_dangerous**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    Notes

    Null bytes are always rejected regardless of other flags.

    Examples

    Try it in your browser!
    ```
    >>> is_safe_compiler_arg("-O2")
    True
    >>> is_safe_compiler_arg("-O2; rm -rf /")
    False
    >>> is_safe_compiler_arg("-imacros /etc/shadow")
    False

    ```
    Go BackOpen In Tab