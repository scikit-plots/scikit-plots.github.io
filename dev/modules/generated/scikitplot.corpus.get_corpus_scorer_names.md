# get\_corpus\_scorer\_names[#](#get-corpus-scorer-names "Link to this heading")

scikitplot.corpus.get\_corpus\_scorer\_names()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_scorer.py#L506)[#](#scikitplot.corpus.get_corpus_scorer_names "Link to this definition")
:   Return the names [`get_corpus_scorer`](scikitplot.corpus.get_corpus_scorer.html#scikitplot.corpus.get_corpus_scorer "scikitplot.corpus.get_corpus_scorer") accepts.

    Returns:
    :   list of str
        :   Sorted. Ranking names also take a cutoff, `"<name>@<k>"`, except
            `r_precision`.

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> "ndcg" in get_corpus_scorer_names()
    True

    ```
    Go BackOpen In Tab