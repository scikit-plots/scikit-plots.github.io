# SecurityPolicy[#](#securitypolicy "Link to this heading")

class scikitplot.cython.SecurityPolicy(**strict=True**, **allow\_absolute\_include\_dirs=False**, **allow\_shell\_metacharacters=False**, **allow\_reserved\_macros=False**, **allow\_dangerous\_compiler\_args=False**, **max\_source\_bytes=10485760**, **max\_extra\_compile\_args=64**, **max\_extra\_link\_args=64**, **max\_include\_dirs=32**, **max\_libraries=32**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c2567fd/scikitplot/cython/_security.py#L165)[#](#scikitplot.cython.SecurityPolicy "Link to this definition")
:   Immutable security policy applied to build inputs before compilation.

    Parameters:
    :   ****strict****bool, default=True
        :   Master switch. When `False`, all checks below default to the
            most permissive setting. Overriding individual flags still works.

        ****allow\_absolute\_include\_dirs****bool, default=False
        :   When `False`, include directories must be relative paths or must
            be resolved to be inside the cache directory. Setting `True`
            allows any absolute path, which is required when pointing at
            system headers (e.g., `/usr/local/include`).
            Newbies: leave `False`. Pros: set `True` for custom installs.

        ****allow\_shell\_metacharacters****bool, default=False
        :   When `False`, shell metacharacters (`; & | ` $ < > ( ) \\`)
            are rejected in `extra_compile_args` and `extra_link_args`.
            Only enable this when you are ****certain**** your build backend does
            not use `shell=True`.

        ****allow\_reserved\_macros****bool, default=False
        :   When `False`, define-macro names that shadow CPython or
            security-sensitive preprocessor guards are rejected.

        ****allow\_dangerous\_compiler\_args****bool, default=False
        :   When `False`, compiler arguments that match known dangerous
            patterns (`-imacros`, `-specs=`, etc.) are rejected.

        ****max\_source\_bytes****int or None, default=10\_485\_760
        :   Maximum allowed source code size in bytes (default 10 MiB).
            `None` disables the limit. Prevents accidental or deliberate
            memory exhaustion during compilation.

        ****max\_extra\_compile\_args****int, default=64
        :   Maximum number of extra C/C++ compiler arguments accepted.

        ****max\_extra\_link\_args****int, default=64
        :   Maximum number of extra linker arguments accepted. Separate from
            `max_extra_compile_args` because link-time argument counts can
            legitimately differ from compile-time counts (e.g., many `-l` flags).

        ****max\_include\_dirs****int, default=32
        :   Maximum number of include directories accepted.

        ****max\_libraries****int, default=32
        :   Maximum number of library names accepted.

    Parameters:
    :   * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_absolute\_include\_dirs**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_shell\_metacharacters**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_reserved\_macros**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_dangerous\_compiler\_args**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_source\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****max\_extra\_compile\_args**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_extra\_link\_args**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_include\_dirs**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_libraries**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    > **See also**
    > [`validate_build_inputs`](scikitplot.cython.validate_build_inputs.html#scikitplot.cython.validate_build_inputs "scikitplot.cython.validate_build_inputs")
    :   Apply this policy against actual build inputs.

    [`SecurityError`](scikitplot.cython.SecurityError.html#scikitplot.cython.SecurityError "scikitplot.cython.SecurityError")
    :   Raised on violation.

    Notes

    ****Newbie users**** (Scenarios 1 & 2): use [`DEFAULT_SECURITY_POLICY`](scikitplot.cython.DEFAULT_SECURITY_POLICY.html#scikitplot.cython.DEFAULT_SECURITY_POLICY "scikitplot.cython.DEFAULT_SECURITY_POLICY")
    (`strict=True`). You get path-traversal protection and macro-shadow
    guards with no extra configuration.

    ****Master/pro users**** (Scenarios 3-7): construct a custom policy that
    relaxes only the specific checks you need:

    ```
    from scikitplot.cython._security import SecurityPolicy

    policy = SecurityPolicy(allow_absolute_include_dirs=True)

    ```

    ****CI/automation environments****: set
    `SCIKITPLOT_CYTHON_ALLOW_ABSOLUTE_DIRS=1` in the environment to
    temporarily enable absolute include dirs without code changes.

    Examples

    Try it in your browser!

    Default (strict) policy:

    ```
    >>> policy = SecurityPolicy()
    >>> policy.strict
    True
    >>> policy.allow_shell_metacharacters
    False

    ```

    Relaxed policy for pro users who supply system include paths:

    ```
    >>> policy = SecurityPolicy(allow_absolute_include_dirs=True)
    >>> policy.allow_absolute_include_dirs
    True

    ```
    Go BackOpen In Tab

    allow\_absolute\_include\_dirs: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.allow_absolute_include_dirs "Link to this definition")
    :   !! processed by numpydoc !!

    allow\_dangerous\_compiler\_args: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.allow_dangerous_compiler_args "Link to this definition")
    :   !! processed by numpydoc !!

    allow\_reserved\_macros: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.allow_reserved_macros "Link to this definition")
    :   !! processed by numpydoc !!

    allow\_shell\_metacharacters: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.allow_shell_metacharacters "Link to this definition")
    :   !! processed by numpydoc !!

    max\_extra\_compile\_args: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.max_extra_compile_args "Link to this definition")
    :   !! processed by numpydoc !!

    max\_extra\_link\_args: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.max_extra_link_args "Link to this definition")
    :   !! processed by numpydoc !!

    max\_include\_dirs: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.max_include_dirs "Link to this definition")
    :   !! processed by numpydoc !!

    max\_libraries: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.max_libraries "Link to this definition")
    :   !! processed by numpydoc !!

    max\_source\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.max_source_bytes "Link to this definition")
    :   !! processed by numpydoc !!

    classmethod relaxed()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c2567fd/scikitplot/cython/_security.py#L270)[#](#scikitplot.cython.SecurityPolicy.relaxed "Link to this definition")
    :   Return a pre-configured policy with all dangerous checks disabled.

        > **Warning**
        > Only use this for fully trusted inputs (e.g., your own build
        scripts in a controlled CI environment). Do NOT apply this
        to user-supplied data.

        Returns:
        :   SecurityPolicy
            :   Permissive policy instance.

        Return type:
        :   [**SecurityPolicy**](#scikitplot.cython.SecurityPolicy "scikitplot.cython._security.SecurityPolicy")

    strict: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.cython.SecurityPolicy.strict "Link to this definition")
    :   !! processed by numpydoc !!