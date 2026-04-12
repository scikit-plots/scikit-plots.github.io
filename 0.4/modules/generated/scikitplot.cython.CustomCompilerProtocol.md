# CustomCompilerProtocol[#](#customcompilerprotocol "Link to this heading")

class scikitplot.cython.CustomCompilerProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/cython/_custom_compiler.py#L131)[#](#scikitplot.cython.CustomCompilerProtocol "Link to this definition")
:   Structural protocol for custom compiler callables.

    Any callable that satisfies this protocol can be registered with
    [`CompilerRegistry`](scikitplot.cython.CompilerRegistry.html#scikitplot.cython.CompilerRegistry "scikitplot.cython.CompilerRegistry") and used as a drop-in replacement or
    supplement to the default Cython/setuptools compiler.

    Returns:
    :   pathlib.Path
        :   Absolute path to the compiled artifact (`.so` / `.pyd`).

    Raises:
    :   RuntimeError
        :   On compilation failure.

    Notes

    ****Naming rule****: register your compiler with a name that starts with
    `custom_` or `Custom`. The registry enforces this.

    ****Stateless is preferred****: make `__call__` a pure function of its
    arguments. If state is needed (e.g., caching an include path), store
    it in constructor-set `frozen` dataclass fields.

    Examples

    Minimal custom compiler:

    ```
    from pathlib import Path
    from scikitplot.cython._custom_compiler import register_compiler

    class custom_nvcc:
        name = "custom_nvcc"

        def __call__(
            self, source: str, *, build_dir: Path, module_name: str, **kwargs
        ) -> Path:
            # ... invoke nvcc here ...
            return build_dir / f"{module_name}.so"

    register_compiler(custom_nvcc())

    ```

    \_\_call\_\_(**source**, **\***, **build\_dir**, **module\_name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/cython/_custom_compiler.py#L202)[#](#scikitplot.cython.CustomCompilerProtocol.__call__ "Link to this definition")
    :   Compile **source** and return the artifact path.

        Parameters:
        :   * ****source**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****build\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****module\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.cython.CustomCompilerProtocol.name "Link to this definition")