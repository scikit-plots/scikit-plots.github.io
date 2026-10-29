# PlatformCapabilities[#](#platformcapabilities "Link to this heading")

class scikitplot.cython.PlatformCapabilities(**platform**, **is\_browser\_wasm**, **can\_compile\_at\_runtime**, **prebuilt\_only**, **wasm\_package\_suffix**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_profiles.py#L212)[#](#scikitplot.cython.PlatformCapabilities "Link to this definition")
:   Declarative contract describing what the current platform supports.

    Runtime Cython compilation requires an out-of-process C/C++ compiler. In a
    browser/WASM runtime (Emscripten — e.g. Pyodide / JupyterLite / xeus) there
    is no subprocess compiler, so on-the-fly compilation is unavailable and only
    ****prebuilt**** `emscripten-wasm32` extensions can be imported. Exposing
    this as an explicit contract lets callers branch deterministically instead
    of discovering the limitation through an opaque build failure
    (CYTHON-WASM-001).

    Parameters:
    :   ****platform****str
        :   The value of [`sys.platform`](https://docs.python.org/3/library/sys.html#sys.platform "(in Python v3.15)").

        ****is\_browser\_wasm****bool
        :   `True` on an Emscripten/WASM runtime (browser).

        ****can\_compile\_at\_runtime****bool
        :   `True` when an out-of-process compiler toolchain can be invoked.
            Always `False` on browser/WASM.

        ****prebuilt\_only****bool
        :   `True` when only prebuilt extensions may be imported (no runtime
            build). The complement of [`can_compile_at_runtime`](#scikitplot.cython.PlatformCapabilities.can_compile_at_runtime "scikitplot.cython.PlatformCapabilities.can_compile_at_runtime").

        ****wasm\_package\_suffix****str or None
        :   The platform tag for prebuilt browser packages (`"emscripten-wasm32"`)
            on a browser runtime, else `None`.

    Parameters:
    :   * ****platform**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****is\_browser\_wasm**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****can\_compile\_at\_runtime**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****prebuilt\_only**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****wasm\_package\_suffix**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    > **See also**
    > [`platform_capabilities`](scikitplot.cython.platform_capabilities.html#scikitplot.cython.platform_capabilities "scikitplot.cython.platform_capabilities")
    :   Construct the contract for the current process.

    Examples

    Try it in your browser!
    ```
    >>> caps = platform_capabilities()
    >>> if not caps.can_compile_at_runtime:
    ...     ...  # import a prebuilt artifact instead of compiling

    ```
    Go BackOpen In Tab

    can\_compile\_at\_runtime: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.PlatformCapabilities.can_compile_at_runtime "Link to this definition")
    :   Alias for field number 2

    count(**value**, **/**)[#](#scikitplot.cython.PlatformCapabilities.count "Link to this definition")
    :   Return number of occurrences of value.

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.cython.PlatformCapabilities.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    is\_browser\_wasm: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.PlatformCapabilities.is_browser_wasm "Link to this definition")
    :   Alias for field number 1

    platform: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.PlatformCapabilities.platform "Link to this definition")
    :   Alias for field number 0

    prebuilt\_only: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.PlatformCapabilities.prebuilt_only "Link to this definition")
    :   Alias for field number 3

    wasm\_package\_suffix: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.PlatformCapabilities.wasm_package_suffix "Link to this definition")
    :   Alias for field number 4