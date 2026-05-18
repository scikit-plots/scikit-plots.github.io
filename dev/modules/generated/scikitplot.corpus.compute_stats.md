# compute\_stats[#](#compute-stats "Link to this heading")

scikitplot.corpus.compute\_stats(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7ef1ffb/scikitplot/corpus/_metadata/_metadata.py#L355)[#](#scikitplot.corpus.compute_stats "Link to this definition")
:   Compute aggregate statistics over a document collection.

    Parameters:
    :   ****docs****sequence of CorpusDocument
        :   Documents to analyse. May be empty.

    Returns:
    :   CorpusStats
        :   Frozen statistics object.

    Parameters:
    :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

    Return type:
    :   [**CorpusStats**](scikitplot.corpus.CorpusStats.html#scikitplot.corpus.CorpusStats "scikitplot.corpus._metadata._metadata.CorpusStats")

    Notes

    This is a pure function: same input → same output, no I/O, no
    mutation. Safe to call from multiple threads concurrently.

    Median is computed without NumPy using a sort-based O(n log n)
    algorithm so that this module has zero optional dependencies.

    Examples

    Try it in your browser!
    ```
    >>> stats = compute_stats(docs)
    >>> print(stats.summary())
    CorpusStats
      Documents  : 487
      Tokens     : 42,310 total (mean 86.9, ...)

    ```
    Go BackOpen In Tab