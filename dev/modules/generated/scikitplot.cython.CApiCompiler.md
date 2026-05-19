# CApiCompiler[#](#capicompiler "Link to this heading")

class scikitplot.cython.CApiCompiler[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/cython/_custom_compiler.py#L1012)[#](#scikitplot.cython.CApiCompiler "Link to this definition")
:   Built-in custom compiler: NumPy C-API projects.

    Wraps the Cython+setuptools pipeline with automatic NumPy include
    injection and support for multi-file C-API source trees.

    Attributes:
    :   ****name****str
        :   Always `"custom_c_api"`.

    Notes

    ****Master user note****: register this compiler and pass your C source
    tree via `extra_sources`:

    ```
    from scikitplot.cython._custom_compiler import (
        CApiCompiler,
        collect_c_api_sources,
        register_compiler,
    )

    register_compiler(CApiCompiler())
    sources = collect_c_api_sources("src/mylib/")

    ```

    Examples

    Try it in your browser!
    ```
    >>> cc = CApiCompiler()
    >>> cc.name
    'custom_c_api'
    >>> isinstance(cc, CustomCompilerProtocol)
    True

    ```
    Go BackOpen In Tab

    \_\_call\_\_(**source**, **\***, **build\_dir**, **module\_name**, **extra\_sources=None**, **include\_dirs=None**, **extra\_compile\_args=None**, **extra\_link\_args=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/cython/_custom_compiler.py#L1049)[#](#scikitplot.cython.CApiCompiler.__call__ "Link to this definition")
    :   Compile a Cython+NumPy C-API extension.

        Parameters:
        :   ****source****str
            :   Cython (`.pyx`) source text.

            ****build\_dir****pathlib.Path
            :   Output directory.

            ****module\_name****str
            :   Python module name.

            ****extra\_sources****sequence of path-like or None
            :   Additional C/C++ source files (e.g., from
                [`collect_c_api_sources`](scikitplot.cython.collect_c_api_sources.html#scikitplot.cython.collect_c_api_sources "scikitplot.cython.collect_c_api_sources")).

            ****include\_dirs****sequence of path-like or None
            :   Additional include directories (NumPy headers added automatically).

            ****extra\_compile\_args****sequence of str or None
            :   Additional compiler flags.

            ****extra\_link\_args****sequence of str or None
            :   Additional linker flags.

            ****\*\*kwargs****
            :   Ignored for forward compatibility.

        Returns:
        :   pathlib.Path
            :   Path to the compiled artifact.

        Raises:
        :   ImportError
            :   If NumPy or Cython is not installed.

            RuntimeError
            :   If compilation fails.

        Parameters:
        :   * ****source**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****extra\_sources**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]** **|** **None**)
            * ****include\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]** **|** **None**)
            * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'custom\_c\_api'[#](#scikitplot.cython.CApiCompiler.name "Link to this definition")