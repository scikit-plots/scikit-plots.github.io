# RuntimeCapabilities[#](#runtimecapabilities "Link to this heading")

class scikitplot.cython.RuntimeCapabilities(**gil\_enabled**, **free\_threaded\_build**, **in\_main\_interpreter**, **supports\_unload**, **supports\_fork\_after\_load**, **platform**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cython/_profiles.py#L421)[#](#scikitplot.cython.RuntimeCapabilities "Link to this definition")
:   Declared contract for native-extension runtime lifecycle (CYTHON-ABI-001).

    Native extensions cannot generally be unloaded safely, and behavior under a
    free-threaded (GIL-disabled) interpreter, a non-main subinterpreter, or
    after `fork` is not universally guaranteed. Rather than let these
    manifest as opaque crashes or silent state loss, this contract declares them
    explicitly so callers (and [`check_runtime_supported`](scikitplot.cython.check_runtime_supported.html#scikitplot.cython.check_runtime_supported "scikitplot.cython.check_runtime_supported")) can branch and
    fail fast with a clear message.

    Parameters:
    :   ****gil\_enabled****bool
        :   Whether the GIL is currently enabled. `False` on a free-threaded
            (`Py_GIL_DISABLED`) build — where thread-safety of arbitrary
            extensions is not guaranteed.

        ****free\_threaded\_build****bool
        :   Whether CPython was built free-threaded (`Py_GIL_DISABLED`).

        ****in\_main\_interpreter****bool
        :   Whether the current interpreter is the main one. Extensions without
            per-interpreter GIL support must not run in a subinterpreter.

        ****supports\_unload****bool
        :   Whether a loaded extension can be safely unloaded/replaced. Always
            `False`: CPython cannot generally unload native modules.

        ****supports\_fork\_after\_load****bool
        :   Whether `fork` after loading an extension is supported (POSIX only;
            the child must not rely on threads created pre-fork).

        ****platform****str
        :   The value of [`sys.platform`](https://docs.python.org/3/library/sys.html#sys.platform "(in Python v3.15)").

    Parameters:
    :   * ****gil\_enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****free\_threaded\_build**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****in\_main\_interpreter**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****supports\_unload**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****supports\_fork\_after\_load**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****platform**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    > **See also**
    > [`runtime_capabilities`](scikitplot.cython.runtime_capabilities.html#scikitplot.cython.runtime_capabilities "scikitplot.cython.runtime_capabilities")
    :   Construct the contract for the current process.

    [`check_runtime_supported`](scikitplot.cython.check_runtime_supported.html#scikitplot.cython.check_runtime_supported "scikitplot.cython.check_runtime_supported")
    :   Fail fast on an unsupported configuration.

    count(**value**, **/**)[#](#scikitplot.cython.RuntimeCapabilities.count "Link to this definition")
    :   Return number of occurrences of value.

    free\_threaded\_build: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.RuntimeCapabilities.free_threaded_build "Link to this definition")
    :   Alias for field number 1

    gil\_enabled: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.RuntimeCapabilities.gil_enabled "Link to this definition")
    :   Alias for field number 0

    in\_main\_interpreter: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.RuntimeCapabilities.in_main_interpreter "Link to this definition")
    :   Alias for field number 2

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.cython.RuntimeCapabilities.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    platform: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.RuntimeCapabilities.platform "Link to this definition")
    :   Alias for field number 5

    supports\_fork\_after\_load: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.RuntimeCapabilities.supports_fork_after_load "Link to this definition")
    :   Alias for field number 4

    supports\_unload: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cython.RuntimeCapabilities.supports_unload "Link to this definition")
    :   Alias for field number 3