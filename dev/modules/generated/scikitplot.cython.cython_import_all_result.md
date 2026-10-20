# cython\_import\_all\_result[#](#cython-import-all-result "Link to this heading")

scikitplot.cython.cython\_import\_all\_result(**directory**, **\***, **pattern='\*.pyx'**, **recursive=False**, **collect=False**, **only=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cython/_public.py#L1280)[#](#scikitplot.cython.cython_import_all_result "Link to this definition")
:   Compile and import all `.pyx` files in a directory, with a partial report.

    Unlike [`cython_import_all`](scikitplot.cython.cython_import_all.html#scikitplot.cython.cython_import_all "scikitplot.cython.cython_import_all"), this always returns a structured
    [`BatchBuildResult`](scikitplot.cython.BatchBuildResult.html#scikitplot.cython.BatchBuildResult "scikitplot.cython.BatchBuildResult") describing ordered successes, ordered failures,
    and the committed native side effects — so a mid-batch failure no longer
    leaves the caller without a report (CYTHON-BATCH-001).

    Parameters:
    :   ****directory****str or pathlib.Path
        :   Directory containing `.pyx` files.

        ****pattern****str, default=’[\*](#id1).pyx’
        :   Glob pattern to match files.

        ****recursive****bool, default=False
        :   If True, search recursively.

        ****collect****bool, default=False
        :   Batch policy. `False` is **fail-fast**: stop at the first failure and
            raise [`BatchBuildError`](scikitplot.cython.BatchBuildError.html#scikitplot.cython.BatchBuildError "scikitplot.cython.BatchBuildError") (whose `result` carries the partial
            outcome, including a resume token). `True` is **collect**: attempt every
            item and return a [`BatchBuildResult`](scikitplot.cython.BatchBuildResult.html#scikitplot.cython.BatchBuildResult "scikitplot.cython.BatchBuildResult") with all failures recorded.

        ****only****Sequence[str] or None, default=None
        :   If given, restrict the batch to these stems (e.g. a resume token from a
            prior [`BatchBuildError`](scikitplot.cython.BatchBuildError.html#scikitplot.cython.BatchBuildError "scikitplot.cython.BatchBuildError")).

        ****\*\*kwargs****dict
        :   Passed to [`cython_import_result`](scikitplot.cython.cython_import_result.html#scikitplot.cython.cython_import_result "scikitplot.cython.cython_import_result").

    Returns:
    :   BatchBuildResult
        :   Structured batch result (always, under the `collect` policy).

    Raises:
    :   FileNotFoundError
        :   If `directory` does not exist.

        BatchBuildError
        :   Under the fail-fast policy (`collect=False`) when an item fails; the
            exception’s `result` attribute holds the partial [`BatchBuildResult`](scikitplot.cython.BatchBuildResult.html#scikitplot.cython.BatchBuildResult "scikitplot.cython.BatchBuildResult").

    Parameters:
    :   * ****directory**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****pattern**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****recursive**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****collect**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****only**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**BatchBuildResult**](scikitplot.cython.BatchBuildResult.html#scikitplot.cython.BatchBuildResult "scikitplot.cython._result.BatchBuildResult")