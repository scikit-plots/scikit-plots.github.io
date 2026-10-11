# CompilerCapabilities[#](#compilercapabilities "Link to this heading")

class scikitplot.cython.CompilerCapabilities(**name**, **spec\_version=1**, **version=None**, **supported\_languages=frozenset({'c'})**, **platforms=None**, **requires\_cpp=False**, **deterministic=True**, **features=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_custom_compiler.py#L232)[#](#scikitplot.cython.CompilerCapabilities "Link to this definition")
:   Versioned, declarative description of a custom compiler’s capabilities.

    A registered compiler may expose one of these (via a `capabilities`
    attribute or a `capabilities()` method) so consumers can reason about what
    it supports — languages, platforms/ABI, and feature flags — **without**
    invoking it (CYTHON-COMP-001). Bare callables that declare nothing get a
    conservative default from [`compiler_capabilities`](scikitplot.cython.compiler_capabilities.html#scikitplot.cython.compiler_capabilities "scikitplot.cython.compiler_capabilities").

    Parameters:
    :   ****name****str
        :   The compiler’s registered name.

        ****spec\_version****int, default=COMPILER\_SPEC\_VERSION
        :   Schema version of this descriptor.

        ****version****str or None, default=None
        :   The compiler plugin’s own version string, if any.

        ****supported\_languages****frozenset of str, default=frozenset({“c”})
        :   Source languages the compiler can build (e.g. `"c"`, `"c++"`,
            `"cython"`).

        ****platforms****frozenset of str or None, default=None
        :   `sys.platform` values the compiler supports; `None` means “any”.

        ****requires\_cpp****bool, default=False
        :   Whether the compiler requires a C++ toolchain.

        ****deterministic****bool, default=True
        :   Whether repeated builds of identical inputs yield identical artifacts.

        ****features****Mapping[str, Any], default empty
        :   Free-form capability flags for forward-compatible extension.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****spec\_version**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****supported\_languages**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****platforms**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****requires\_cpp**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****deterministic**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****features**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    > **See also**
    > [`compiler_capabilities`](scikitplot.cython.compiler_capabilities.html#scikitplot.cython.compiler_capabilities "scikitplot.cython.compiler_capabilities")
    :   Read the capabilities of any registered compiler.

    deterministic: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.cython.CompilerCapabilities.deterministic "Link to this definition")

    features: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_custom_compiler.py#L232)[#](#scikitplot.cython.CompilerCapabilities.features "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_custom_compiler.py#L232)[#](#scikitplot.cython.CompilerCapabilities.name "Link to this definition")

    platforms: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cython.CompilerCapabilities.platforms "Link to this definition")

    requires\_cpp: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.cython.CompilerCapabilities.requires_cpp "Link to this definition")

    spec\_version: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.cython.CompilerCapabilities.spec_version "Link to this definition")

    supported\_languages: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({'c'})[#](#scikitplot.cython.CompilerCapabilities.supported_languages "Link to this definition")

    supports\_language(**language**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_custom_compiler.py#L281)[#](#scikitplot.cython.CompilerCapabilities.supports_language "Link to this definition")
    :   Return whether `language` is in [`supported_languages`](#scikitplot.cython.CompilerCapabilities.supported_languages "scikitplot.cython.CompilerCapabilities.supported_languages").

        Parameters:
        :   ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    supports\_platform(**platform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_custom_compiler.py#L276)[#](#scikitplot.cython.CompilerCapabilities.supports_platform "Link to this definition")
    :   Return whether `platform` (default: current) is supported.

        Parameters:
        :   ****platform**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cython.CompilerCapabilities.version "Link to this definition")