# CacheError[#](#cacheerror "Link to this heading")

exception scikitplot.corpus.CacheError[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_llm.py#L153)[#](#scikitplot.corpus.CacheError "Link to this definition")
:   The response cache failed (a configuration problem, not a model failure).

    Notes

    A `shelve` file opened on Python 3.13 or later uses SQLite, whose
    connection works only in the thread that opened it; with `n_jobs > 1`
    use a `dict` or another mapping that any thread may use.

    Annotation:
    :   Unrecognized objtype: `exception`