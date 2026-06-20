# CompilerRegistry[#](#compilerregistry "Link to this heading")

class scikitplot.cython.CompilerRegistry[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/cython/_custom_compiler.py#L219)[#](#scikitplot.cython.CompilerRegistry "Link to this definition")
:   Thread-unsafe module-level registry of custom compiler callables.

    Notes

    The registry is intentionally simple (dict-backed) and ****not****
    thread-safe. Register compilers at module-import time or in a
    single-threaded setup phase, not concurrently.

    Use the module-level helpers [`register_compiler`](scikitplot.cython.register_compiler.html#scikitplot.cython.register_compiler "scikitplot.cython.register_compiler"),
    [`get_compiler`](scikitplot.cython.get_compiler.html#scikitplot.cython.get_compiler "scikitplot.cython.get_compiler"), and [`list_compilers`](scikitplot.cython.list_compilers.html#scikitplot.cython.list_compilers "scikitplot.cython.list_compilers") instead of
    instantiating this class directly.

    get(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/cython/_custom_compiler.py#L276)[#](#scikitplot.cython.CompilerRegistry.get "Link to this definition")
    :   Retrieve a registered compiler by name.

        Parameters:
        :   ****name****str
            :   Compiler name.

        Returns:
        :   CustomCompilerProtocol
            :   The registered compiler callable.

        Raises:
        :   KeyError
            :   If no compiler with that name is registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**CustomCompilerProtocol**](scikitplot.cython.CustomCompilerProtocol.html#scikitplot.cython.CustomCompilerProtocol "scikitplot.cython._custom_compiler.CustomCompilerProtocol")

    list()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/cython/_custom_compiler.py#L302)[#](#scikitplot.cython.CompilerRegistry.list "Link to this definition")
    :   Return sorted list of registered compiler names.

        Returns:
        :   list[str]
            :   Sorted compiler names.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    register(**compiler**, **\***, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/cython/_custom_compiler.py#L237)[#](#scikitplot.cython.CompilerRegistry.register "Link to this definition")
    :   Register a custom compiler callable.

        Parameters:
        :   ****compiler****CustomCompilerProtocol
            :   Compiler instance to register.

            ****overwrite****bool, default=False
            :   If `False`, raise [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.14)") when a compiler with the
                same name is already registered. If `True`, silently replace.

        Raises:
        :   ValueError
            :   If the compiler name is invalid or already registered
                (when `overwrite=False`).

            TypeError
            :   If `compiler` does not satisfy [`CustomCompilerProtocol`](scikitplot.cython.CustomCompilerProtocol.html#scikitplot.cython.CustomCompilerProtocol "scikitplot.cython.CustomCompilerProtocol").

        Parameters:
        :   * ****compiler**** ([**CustomCompilerProtocol**](scikitplot.cython.CustomCompilerProtocol.html#scikitplot.cython.CustomCompilerProtocol "scikitplot.cython._custom_compiler.CustomCompilerProtocol"))
            * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   None

    unregister(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/cython/_custom_compiler.py#L313)[#](#scikitplot.cython.CompilerRegistry.unregister "Link to this definition")
    :   Remove a registered compiler.

        Parameters:
        :   ****name****str
            :   Compiler name to remove.

        Returns:
        :   bool
            :   `True` if the compiler was found and removed, `False`
                if it was not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")