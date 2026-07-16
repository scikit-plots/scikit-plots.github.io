# is\_windows[#](#is-windows "Link to this heading")

scikitplot.cython.is\_windows()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/cython/_profiles.py#L170)[#](#scikitplot.cython.is_windows "Link to this definition")
:   Return `True` if the host operating system is native Windows.

    > **Warning**
    > This detects the ****host OS****, not the active ****compiler toolchain****, and
    is therefore **not** the correct predicate for selecting compiler flags.
    On a native-Windows host using MinGW-w64 or an MSYS2 `MINGW64` shell,
    the active compiler is GCC, yet this function still returns `True`.
    Passing MSVC flags (e.g. `/O2`) to GCC causes a build failure or a
    silently unoptimized build. Use `_is_msvc` to select flags.

    Returns:
    :   bool
        :   `True` if `os.name == "nt"` or `sys.platform` starts with
            `"win"`; `False` otherwise (including WSL, Cygwin, and
            Linux-to-Windows cross-compilation).

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    > **See also**
    > `_is_msvc`
    :   Toolchain predicate; the correct basis for flag selection.

    Notes

    Retained in the public API for backward compatibility and for callers that
    legitimately need host-OS detection (e.g. path handling). It intentionally
    no longer governs the compiler-flag branches in [`resolve_profile`](scikitplot.cython.resolve_profile.html#scikitplot.cython.resolve_profile "scikitplot.cython.resolve_profile").