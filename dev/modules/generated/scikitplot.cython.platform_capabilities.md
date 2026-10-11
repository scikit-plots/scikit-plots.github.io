# platform\_capabilities[#](#platform-capabilities "Link to this heading")

scikitplot.cython.platform\_capabilities()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_profiles.py#L257)[#](#scikitplot.cython.platform_capabilities "Link to this definition")
:   Return the [`PlatformCapabilities`](scikitplot.cython.PlatformCapabilities.html#scikitplot.cython.PlatformCapabilities "scikitplot.cython.PlatformCapabilities") contract for this process.

    Browser/WASM is detected via [`sys.platform`](https://docs.python.org/3/library/sys.html#sys.platform "(in Python v3.15)") (`"emscripten"` or a
    `"wasm"` prefix) and the presence of the Emscripten build sysconfig
    platform. Detection never executes a subprocess.

    Returns:
    :   PlatformCapabilities
        :   The capability contract for the current runtime.

    Return type:
    :   [**PlatformCapabilities**](scikitplot.cython.PlatformCapabilities.html#scikitplot.cython.PlatformCapabilities "scikitplot.cython._profiles.PlatformCapabilities")

    > **See also**
    > [`PlatformCapabilities`](scikitplot.cython.PlatformCapabilities.html#scikitplot.cython.PlatformCapabilities "scikitplot.cython.PlatformCapabilities")
    :   The returned contract type.