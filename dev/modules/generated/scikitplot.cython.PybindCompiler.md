# PybindCompiler[#](#pybindcompiler "Link to this heading")

class scikitplot.cython.PybindCompiler[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/cython/_custom_compiler.py#L862)[#](#scikitplot.cython.PybindCompiler "Link to this definition")
:   Built-in custom compiler: pybind11-only projects.

    This compiler wraps the standard Cython+setuptools pipeline but
    automatically injects the pybind11 include directory and sets
    `language="c++"`.

    Attributes:
    :   ****name****str
        :   Always `"custom_pybind11"`.

    Notes

    ****Master user note****: register and use this compiler when building
    pybind11 extension modules without Cython `.pyx` files. You write
    standard C++ with pybind11 macros; this compiler handles the rest:

    ```
    from scikitplot.cython._custom_compiler import PybindCompiler, register_compiler

    register_compiler(PybindCompiler())

    ```

    The compiler requires `pybind11` to be importable. Check with
    [`pybind11_only_prereqs`](scikitplot.cython.pybind11_only_prereqs.html#scikitplot.cython.pybind11_only_prereqs "scikitplot.cython.pybind11_only_prereqs").

    Examples

    Try it in your browser!
    ```
    >>> pc = PybindCompiler()
    >>> pc.name
    'custom_pybind11'
    >>> isinstance(pc, CustomCompilerProtocol)
    True

    ```
    Go BackOpen In Tab

    \_\_call\_\_(**source**, **\***, **build\_dir**, **module\_name**, **include\_dirs=None**, **extra\_compile\_args=None**, **extra\_link\_args=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/cython/_custom_compiler.py#L899)[#](#scikitplot.cython.PybindCompiler.__call__ "Link to this definition")
    :   Compile a pybind11 C++ extension from source text.

        Parameters:
        :   ****source****str
            :   C++ source code with pybind11 bindings.

            ****build\_dir****pathlib.Path
            :   Output directory.

            ****module\_name****str
            :   Python module name for the compiled extension.

            ****include\_dirs****sequence of path-like or None
            :   Additional include directories (pybind11 headers added automatically).

            ****extra\_compile\_args****sequence of str or None
            :   Additional C++ compiler flags (`-std=c++17` added by default).

            ****extra\_link\_args****sequence of str or None
            :   Additional linker flags.

            ****\*\*kwargs****
            :   Ignored extra arguments for forward compatibility.

        Returns:
        :   pathlib.Path
            :   Path to the compiled `.so` / `.pyd` artifact.

        Raises:
        :   ImportError
            :   If pybind11 is not installed.

            RuntimeError
            :   If compilation fails.

        Parameters:
        :   * ****source**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****include\_dirs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")**]** **|** **None**)
            * ****extra\_compile\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****extra\_link\_args**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'custom\_pybind11'[#](#scikitplot.cython.PybindCompiler.name "Link to this definition")