# compiler\_capabilities[#](#compiler-capabilities "Link to this heading")

scikitplot.cython.compiler\_capabilities(**compiler**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cython/_custom_compiler.py#L286)[#](#scikitplot.cython.compiler_capabilities "Link to this definition")
:   Return the [`CompilerCapabilities`](scikitplot.cython.CompilerCapabilities.html#scikitplot.cython.CompilerCapabilities "scikitplot.cython.CompilerCapabilities") a compiler declares.

    A compiler may declare capabilities via a `capabilities` attribute (a
    [`CompilerCapabilities`](scikitplot.cython.CompilerCapabilities.html#scikitplot.cython.CompilerCapabilities "scikitplot.cython.CompilerCapabilities") instance) or a `capabilities()` method. A
    compiler that declares nothing (e.g. a legacy bare callable) gets a
    conservative default: C-only, any platform, non-C++ (CYTHON-COMP-001).

    Parameters:
    :   ****compiler****CustomCompilerProtocol
        :   Any registered compiler callable.

    Returns:
    :   CompilerCapabilities
        :   The declared capabilities, or a conservative default.

    Parameters:
    :   ****compiler**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**CompilerCapabilities**](scikitplot.cython.CompilerCapabilities.html#scikitplot.cython.CompilerCapabilities "scikitplot.cython._custom_compiler.CompilerCapabilities")