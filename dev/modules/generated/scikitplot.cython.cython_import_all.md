# cython\_import\_all[#](#cython-import-all "Link to this heading")

scikitplot.cython.cython\_import\_all(**directory**, **\***, **pattern='\*.pyx'**, **recursive=False**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/cython/_public.py#L1350)[#](#scikitplot.cython.cython_import_all "Link to this definition")
:   Compile and import all `.pyx` files in a directory.

    This is the backward-compatible convenience wrapper: it returns a plain
    `{stem: BuildResult}` mapping and is fail-fast. For a structured partial
    report (ordered successes/failures, committed side effects, resume token) or
    a collect-all policy, use `cython_import_all_result`.

    Parameters:
    :   ****directory****str or pathlib.Path
        :   Directory containing `.pyx` files.

        ****pattern****str, default=’[\*](#id1).pyx’
        :   Glob pattern to match files.

        ****recursive****bool, default=False
        :   If True, search recursively.

        ****\*\*kwargs****dict
        :   Passed to [`cython_import_result`](scikitplot.cython.cython_import_result.html#scikitplot.cython.cython_import_result "scikitplot.cython.cython_import_result").

    Returns:
    :   dict[str, BuildResult]
        :   Mapping of file stem to build result.

    Raises:
    :   FileNotFoundError
        :   If `directory` does not exist.

        BatchBuildError
        :   If any file fails; the exception’s `result` attribute holds the
            partial `BatchBuildResult` describing what was already committed.

    Parameters:
    :   * ****directory**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****pattern**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****recursive**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")]