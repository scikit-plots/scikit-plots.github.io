# resolved\_toolchain[#](#resolved-toolchain "Link to this heading")

scikitplot.cython.resolved\_toolchain()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cython/_profiles.py#L373)[#](#scikitplot.cython.resolved_toolchain "Link to this definition")
:   Return the compiler the build backend actually selects (CYTHON-PORT-001).

    Returns:
    :   ResolvedToolchain
        :   The resolved compiler type and executables. Never raises: on any
            failure it returns `ResolvedToolchain("unknown", "", "", "")`.

    Return type:
    :   [**ResolvedToolchain**](scikitplot.cython.ResolvedToolchain.html#scikitplot.cython.ResolvedToolchain "scikitplot.cython._profiles.ResolvedToolchain")

    Notes

    Reads the configured commands from a fresh, customised distutils compiler;
    no subprocess is spawned. On Windows this reports `"msvc"` and the real
    `cl`/`link` rather than whatever happens to be on `PATH`.