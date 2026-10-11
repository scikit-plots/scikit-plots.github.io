# BatchBuildResult[#](#batchbuildresult "Link to this heading")

class scikitplot.cython.BatchBuildResult(**successes**, **failures**, **committed**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cython/_result.py#L405)[#](#scikitplot.cython.BatchBuildResult "Link to this definition")
:   Structured result of a batch compile/import (CYTHON-BATCH-001).

    `cython_import_all` was fail-fast: a mid-batch failure left earlier
    compiled artifacts and imported modules committed but returned no report of
    what had already succeeded. This type makes the partial outcome explicit:
    ordered successes, ordered failures, and the list of side effects that were
    committed before the batch stopped (or completed).

    Parameters:
    :   ****successes****Mapping[str, BuildResult]
        :   Ordered mapping of batch key → [`BuildResult`](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython.BuildResult") for each item that
            built and imported successfully.

        ****failures****Sequence[BatchFailure]
        :   Ordered failures (empty when every item succeeded).

        ****committed****Sequence[str]
        :   Ordered batch keys whose native side effects (compiled artifact +
            imported module) were committed. Equal to `list(successes)`; provided
            explicitly so callers can reason about what to roll back or resume.

        ****policy****str
        :   The batch policy that produced this result: `"fail_fast"` (stop at the
            first failure) or `"collect"` (attempt every item).

    Parameters:
    :   * ****successes**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**BuildResult**](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")**]**)
        * ****failures**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**BatchFailure**](scikitplot.cython.BatchFailure.html#scikitplot.cython.BatchFailure "scikitplot.cython._result.BatchFailure")**]**)
        * ****committed**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****policy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    * `ok` is `True` only when there were no failures.
    * `resume_token` is the sorted tuple of keys still to attempt after a
      fail-fast stop; feed it back via the `only` argument to resume.

    committed: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cython/_result.py#L405)[#](#scikitplot.cython.BatchBuildResult.committed "Link to this definition")

    failures: [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")[[BatchFailure](scikitplot.cython.BatchFailure.html#scikitplot.cython.BatchFailure "scikitplot.cython._result.BatchFailure")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cython/_result.py#L405)[#](#scikitplot.cython.BatchBuildResult.failures "Link to this definition")

    property n\_failed: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.cython.BatchBuildResult.n_failed "Link to this definition")
    :   Number of items that failed.

    property n\_succeeded: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.cython.BatchBuildResult.n_succeeded "Link to this definition")
    :   Number of items that built and imported successfully.

    property ok: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.cython.BatchBuildResult.ok "Link to this definition")
    :   Whether the batch completed with no failures.

    policy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cython/_result.py#L405)[#](#scikitplot.cython.BatchBuildResult.policy "Link to this definition")

    successes: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [BuildResult](scikitplot.cython.BuildResult.html#scikitplot.cython.BuildResult "scikitplot.cython._result.BuildResult")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cython/_result.py#L405)[#](#scikitplot.cython.BatchBuildResult.successes "Link to this definition")