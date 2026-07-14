# resolve\_profile[#](#resolve-profile "Link to this heading")

scikitplot.cython.resolve\_profile(**profile**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/cython/_profiles.py#L233)[#](#scikitplot.cython.resolve_profile "Link to this definition")
:   Resolve a profile name to deterministic defaults.

    Parameters:
    :   ****profile****str or None
        :   One of `"fast-debug"`, `"release"`, `"annotate"`, or `None`.

    Returns:
    :   ProfileDefaults
        :   Deterministic, immutable defaults for the requested profile.

    Raises:
    :   ValueError
        :   If `profile` is not `None` and is not a recognized name.

    Parameters:
    :   ****profile**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**ProfileDefaults**](scikitplot.cython.ProfileDefaults.html#scikitplot.cython.ProfileDefaults "scikitplot.cython._profiles.ProfileDefaults")

    Notes

    Compiler-flag branches key off `_is_msvc` (active toolchain), not
    [`is_windows`](scikitplot.cython.is_windows.html#scikitplot.cython.is_windows "scikitplot.cython.is_windows") (host OS). This is the fix for the toolchain/OS mismatch:
    a native-Windows host using GCC (MinGW/MSYS2) now receives GCC flags instead
    of MSVC flags. On every non-Windows host, and on Windows-with-MSVC, the
    resolved flags are unchanged from the historical behaviour, so existing
    content-addressed cache keys are preserved there.

    Every flag below is a hard-coded literal; no user input flows into flag
    selection, so this function cannot emit an injected argument.