# check\_runtime\_supported[#](#check-runtime-supported "Link to this heading")

scikitplot.cython.check\_runtime\_supported(**\***, **allow\_free\_threaded=False**, **allow\_subinterpreter=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cython/_profiles.py#L489)[#](#scikitplot.cython.check_runtime_supported "Link to this definition")
:   Fail fast on an unsupported runtime configuration (CYTHON-ABI-001).

    Safe default: raise [`UnsupportedRuntimeError`](scikitplot.cython.UnsupportedRuntimeError.html#scikitplot.cython.UnsupportedRuntimeError "scikitplot.cython.UnsupportedRuntimeError") on a free-threaded
    interpreter or in a non-main subinterpreter, because arbitrary compiled
    extensions do not universally support those. Callers who have verified
    their extensions can opt in via the `allow_*` flags.

    Parameters:
    :   ****allow\_free\_threaded****bool, default=False
        :   Permit running under a free-threaded (GIL-disabled) interpreter.

        ****allow\_subinterpreter****bool, default=False
        :   Permit running in a non-main subinterpreter.

    Raises:
    :   UnsupportedRuntimeError
        :   If the current runtime is unsupported and not explicitly allowed.

    Parameters:
    :   * ****allow\_free\_threaded**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****allow\_subinterpreter**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   None