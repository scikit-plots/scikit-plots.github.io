# register\_compiler[#](#register-compiler "Link to this heading")

scikitplot.cython.register\_compiler(**compiler**, **\***, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/cython/_custom_compiler.py#L441)[#](#scikitplot.cython.register_compiler "Link to this definition")
:   Register a custom compiler in the module-level registry.

    Parameters:
    :   ****compiler****CustomCompilerProtocol
        :   Compiler to register. Must have a `name` attribute starting
            with `custom_` or `Custom`, and be callable.

        ****overwrite****bool, default=False
        :   Whether to overwrite an existing compiler with the same name.

    Raises:
    :   ValueError
        :   If the name is invalid or already taken (`overwrite=False`).

        TypeError
        :   If `compiler` does not satisfy the protocol.

    Parameters:
    :   * ****compiler**** ([**CustomCompilerProtocol**](scikitplot.cython.CustomCompilerProtocol.html#scikitplot.cython.CustomCompilerProtocol "scikitplot.cython._custom_compiler.CustomCompilerProtocol"))
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   None

    Notes

    Register at module-import time in a single-threaded context. The
    registry is ****not**** thread-safe.

    Examples

    Try it in your browser!
    ```
    >>> class custom_fast:
    ...     name = "custom_fast"
    ...
    ...     def __call__(self, source, *, build_dir, module_name, **kw):
    ...         raise NotImplementedError
    >>> register_compiler(custom_fast())
    >>> "custom_fast" in list_compilers()
    True

    ```
    Go BackOpen In Tab