# collect\_header\_dirs[#](#collect-header-dirs "Link to this heading")

scikitplot.cython.collect\_header\_dirs(**\*paths**, **recursive=True**, **suffixes=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8f33de/scikitplot/cython/_custom_compiler.py#L784)[#](#scikitplot.cython.collect_header_dirs "Link to this definition")
:   Collect unique directories that contain C/C++ header files.

    This complements [`collect_c_api_sources`](scikitplot.cython.collect_c_api_sources.html#scikitplot.cython.collect_c_api_sources "scikitplot.cython.collect_c_api_sources"):
    given a source tree, automatically discover all directories containing
    `.h` / `.hpp` headers and return them as an `include_dirs` list.

    Parameters:
    :   ****\*paths****str or os.PathLike
        :   Root directories or explicit header file paths to search.

        ****recursive****bool, default=True
        :   If `True`, subdirectories are searched recursively.

        ****suffixes****frozenset[str] or None, default=None
        :   Override the set of header suffixes. Default accepts
            `{".h", ".hpp", ".hxx", ".hh"}`.

    Returns:
    :   list[pathlib.Path]
        :   Deduplicated, sorted, absolute directory paths that contain at
            least one header file.

    Parameters:
    :   * ****paths**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****recursive**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****suffixes**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")]

    Notes

    User note:

    ```
    inc_dirs = collect_header_dirs("include/", "third_party/mylib/")
    result = compile_and_load(code, include_dirs=inc_dirs)

    ```

    Examples

    Try it in your browser!
    ```
    >>> import tempfile, pathlib
    >>> with tempfile.TemporaryDirectory() as td:
    ...     p = pathlib.Path(td)
    ...     (p / "mylib.h").write_text("#pragma once")
    ...     dirs = collect_header_dirs(td)
    ...     len(dirs)
    1

    ```
    Go BackOpen In Tab