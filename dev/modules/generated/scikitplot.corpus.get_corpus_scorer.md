# get\_corpus\_scorer[#](#get-corpus-scorer "Link to this heading")

scikitplot.corpus.get\_corpus\_scorer(**name**, **\***, **response\_method='predict'**, **id\_getter=None**, **on\_degraded='raise'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_scorer.py#L524)[#](#scikitplot.corpus.get_corpus_scorer "Link to this definition")
:   Return a new scorer for a metric name.

    Parameters:
    :   ****name****str
        :   A name from [`get_corpus_scorer_names`](scikitplot.corpus.get_corpus_scorer_names.html#scikitplot.corpus.get_corpus_scorer_names "scikitplot.corpus.get_corpus_scorer_names"); ranking names take an
            optional cutoff, `"recall@10"`. A ranking name without a cutoff uses
            the whole ranking.

        ****response\_method****{“predict”, “search”}, default=”predict”
        :   See [`make_corpus_scorer`](scikitplot.corpus.make_corpus_scorer.html#scikitplot.corpus.make_corpus_scorer "scikitplot.corpus.make_corpus_scorer").

        ****id\_getter****callable or None, default=None
        :   See [`make_corpus_scorer`](scikitplot.corpus.make_corpus_scorer.html#scikitplot.corpus.make_corpus_scorer "scikitplot.corpus.make_corpus_scorer").

        ****on\_degraded****{“raise”, “ignore”}, default=”raise”
        :   See [`make_corpus_scorer`](scikitplot.corpus.make_corpus_scorer.html#scikitplot.corpus.make_corpus_scorer "scikitplot.corpus.make_corpus_scorer").

        ****\*\*kwargs****dict
        :   Further arguments of the metric, such as `zero_division`.

    Returns:
    :   scorer
        :   A new instance on every call, as [`sklearn.metrics.get_scorer`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.get_scorer.html#sklearn.metrics.get_scorer "(in scikit-learn v1.10)").

    Raises:
    :   ValueError
        :   For an unknown name, or `k` given both in the name and as a keyword.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****response\_method**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****id\_getter**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****on\_degraded**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> get_corpus_scorer("ndcg@10", response_method="search")
    make_corpus_scorer(ndcg_at_k, response_method='search', k=10)

    ```
    Go BackOpen In Tab