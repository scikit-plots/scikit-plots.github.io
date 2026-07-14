# DEFAULT\_SECURITY\_POLICY[#](#default-security-policy "Link to this heading")

scikitplot.cython.DEFAULT\_SECURITY\_POLICY = SecurityPolicy(strict=True, allow\_absolute\_include\_dirs=False, allow\_shell\_metacharacters=False, allow\_reserved\_macros=False, allow\_dangerous\_compiler\_args=False, max\_source\_bytes=10485760, max\_extra\_compile\_args=64, max\_extra\_link\_args=64, max\_include\_dirs=32, max\_libraries=32)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/cython/_security.py#L)[#](#scikitplot.cython.DEFAULT_SECURITY_POLICY "Link to this definition")
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

    > **See also**
    > [`validate_build_inputs`](scikitplot.cython.validate_build_inputs.html#scikitplot.cython.validate_build_inputs "scikitplot.cython.validate_build_inputs")
    :   Apply this policy against actual build inputs.

    [`SecurityError`](scikitplot.cython.SecurityError.html#scikitplot.cython.SecurityError "scikitplot.cython.SecurityError")
    :   Raised on violation.

    Notes

    ****Newbie users**** (Scenarios 1 & 2): use [`DEFAULT_SECURITY_POLICY`](#scikitplot.cython.DEFAULT_SECURITY_POLICY "scikitplot.cython.DEFAULT_SECURITY_POLICY")
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