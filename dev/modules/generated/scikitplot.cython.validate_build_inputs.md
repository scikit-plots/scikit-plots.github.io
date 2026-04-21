# validate\_build\_inputs[#](#validate-build-inputs "Link to this heading")

scikitplot.cython.validate\_build\_inputs(**\***, **policy=None**, **source=None**, **define\_macros=None**, **extra\_compile\_args=None**, **extra\_link\_args=None**, **include\_dirs=None**, **libraries=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/cython/_security.py#L463)[#](#scikitplot.cython.validate_build_inputs "Link to this definition")
:   Validate build inputs against a [`SecurityPolicy`](scikitplot.cython.SecurityPolicy.html#scikitplot.cython.SecurityPolicy "scikitplot.cython.SecurityPolicy").

    Raises [`SecurityError`](scikitplot.cython.SecurityError.html#scikitplot.cython.SecurityError "scikitplot.cython.SecurityError") on the ****first**** violation found. All
    checks are deterministic and do not perform filesystem I/O.

    Parameters:
    :   ****policy****SecurityPolicy or None, default=None
        :   Policy to enforce. If `None`, [`DEFAULT_SECURITY_POLICY`](scikitplot.cython.DEFAULT_SECURITY_POLICY.html#scikitplot.cython.DEFAULT_SECURITY_POLICY "scikitplot.cython.DEFAULT_SECURITY_POLICY")
            (strict mode) is used.

        ****source****str or None, default=None
        :   Cython source text. Checked against `policy.max_source_bytes`.

        ****define\_macros****sequence of (str, str | None) or None, default=None
        :   Preprocessor macro definitions. Each `(name, value)` pair is
            validated.

        ****extra\_compile\_args****sequence of str or None, default=None
        :   Extra C/C++ compiler arguments to validate.

        ****extra\_link\_args****sequence of str or None, default=None
        :   Extra linker arguments to validate.

        ****include\_dirs****sequence of path-like or None, default=None
        :   Additional include directories to validate.

        ****libraries****sequence of str or None, default=None
        :   Library names to validate.

    Raises:
    :   SecurityError
        :   On the first detected violation.

        TypeError
        :   If `policy` is not a [`SecurityPolicy`](scikitplot.cython.SecurityPolicy.html#scikitplot.cython.SecurityPolicy "scikitplot.cython.SecurityPolicy") instance.

    Parameters:
    :   * ****policy**** ([**SecurityPolicy**](scikitplot.cython.SecurityPolicy.html#scikitplot.cython.SecurityPolicy "scikitplot.cython._security.SecurityPolicy") **|** **None**)
        * ****source**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****define\_macros**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None****]****]** **|** **None**)
        * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****include\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]** **|** **None**)
        * ****libraries**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   None

    Notes

    ****For newbies**** (Scenarios 1 & 2): you do not need to call this
    function directly — the public API applies it automatically via
    [`DEFAULT_SECURITY_POLICY`](scikitplot.cython.DEFAULT_SECURITY_POLICY.html#scikitplot.cython.DEFAULT_SECURITY_POLICY "scikitplot.cython.DEFAULT_SECURITY_POLICY").

    ****For masters**** (Scenarios 3-7): call this explicitly when you bypass
    the public API or when building with custom compilers.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.cython._security import validate_build_inputs
    >>> validate_build_inputs(
    ...     source="def hello(): return 42",
    ...     extra_compile_args=["-O2"],
    ... )  # No error: all inputs are safe.

    ```
    ```
    >>> validate_build_inputs(
    ...     extra_compile_args=["-O2; rm -rf /"],
    ... )
    Traceback (most recent call last):
        ...
    SecurityError: [extra_compile_args] shell metacharacter in arg: '-O2; rm -rf /'

    ```
    Go BackOpen In Tab