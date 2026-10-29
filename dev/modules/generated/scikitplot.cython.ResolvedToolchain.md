# ResolvedToolchain[#](#resolvedtoolchain "Link to this heading")

class scikitplot.cython.ResolvedToolchain(**compiler\_type**, **cc**, **cxx**, **linker**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_profiles.py#L324)[#](#scikitplot.cython.ResolvedToolchain "Link to this definition")
:   The compiler the build backend **actually** selects (CYTHON-PORT-001).

    Host/toolchain detection based on `PATH` (e.g. “is `cl` present?”) is a
    guess, not the effective contract: setuptools/distutils decides the real
    compiler. This queries that decision so cache entries can be keyed from the
    resolved plan rather than a heuristic.

    Parameters:
    :   ****compiler\_type****str
        :   The distutils compiler type actually selected (`"unix"`, `"msvc"`,
            `"mingw32"`, …), or `"unknown"` if it could not be determined.

        ****cc****str
        :   The resolved C compiler executable (argv[0] of the compile command), or
            `""` if unavailable.

        ****cxx****str
        :   The resolved C++ compiler executable, or `""` if unavailable.

        ****linker****str
        :   The resolved shared linker executable, or `""` if unavailable.

    Parameters:
    :   * ****compiler\_type**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****cc**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****cxx**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****linker**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    > **See also**
    > [`resolved_toolchain`](scikitplot.cython.resolved_toolchain.html#scikitplot.cython.resolved_toolchain "scikitplot.cython.resolved_toolchain")
    :   Construct the contract for the current backend.

    Notes

    This inspects the backend’s configured commands; it does ****not**** invoke the
    compiler, so it has no side effects. It degrades gracefully to
    `ResolvedToolchain("unknown", "", "", "")` if the backend cannot be
    interrogated.

    cc: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.ResolvedToolchain.cc "Link to this definition")
    :   Alias for field number 1

    compiler\_type: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.ResolvedToolchain.compiler_type "Link to this definition")
    :   Alias for field number 0

    count(**value**, **/**)[#](#scikitplot.cython.ResolvedToolchain.count "Link to this definition")
    :   Return number of occurrences of value.

    cxx: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.ResolvedToolchain.cxx "Link to this definition")
    :   Alias for field number 2

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.cython.ResolvedToolchain.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    linker: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.ResolvedToolchain.linker "Link to this definition")
    :   Alias for field number 3