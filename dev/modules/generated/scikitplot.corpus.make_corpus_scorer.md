# make\_corpus\_scorer[#](#make-corpus-scorer "Link to this heading")

scikitplot.corpus.make\_corpus\_scorer(**score\_func**, **\***, **response\_method='predict'**, **greater\_is\_better=True**, **id\_getter=None**, **on\_degraded='raise'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_scorer.py#L407)[#](#scikitplot.corpus.make_corpus_scorer "Link to this definition")
:   Make a scikit-learn compatible scorer from a corpus metric.

    Parameters:
    :   ****score\_func****callable
        :   `score_func(y_true, y_pred, **kwargs) -> float`, for example
            [`recall_at_k`](scikitplot.corpus.recall_at_k.html#scikitplot.corpus.recall_at_k "scikitplot.corpus.recall_at_k") or [`token_f1_score`](scikitplot.corpus.token_f1_score.html#scikitplot.corpus.token_f1_score "scikitplot.corpus.token_f1_score").

        ****response\_method****{“predict”, “search”}, default=”predict”
        :   How predictions are obtained (see the module documentation).

        ****greater\_is\_better****bool, default=True
        :   `False` for a loss; the scorer then negates it, as scikit-learn does.

        ****id\_getter****callable or None, default=None
        :   `response_method="search"` only: `id_getter(result)` maps a search
            result to the identifier used by `y_true` (for example a chunk to its
            source document). `None` applies the rule of [`ranked_ids`](scikitplot.corpus.ranked_ids.html#scikitplot.corpus.ranked_ids "scikitplot.corpus.ranked_ids").

        ****on\_degraded****{“raise”, “ignore”}, default=”raise”
        :   `response_method="search"` only: what a response whose requested leg
            did not run does.

        ****\*\*kwargs****dict
        :   Passed to `score_func` on every call, such as `k=10`.

    Returns:
    :   scorer
        :   A `_BaseScorer` subclass instance (scikit-learn’s, or the vendored
            copy; see [`scorer_backend_info`](scikitplot.corpus.scorer_backend_info.html#scikitplot.corpus.scorer_backend_info "scikitplot.corpus.scorer_backend_info")). It pickles.

    Raises:
    :   TypeError
        :   If `score_func` or `id_getter` is not callable, or `kwargs` do not
            fit the signature of `score_func`.

        ValueError
        :   For an unknown `response_method` or `on_degraded`, or `id_getter`
            with `response_method="predict"`.

    Parameters:
    :   * ****score\_func**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****response\_method**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****greater\_is\_better**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****id\_getter**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****on\_degraded**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    > **See also**
    > [`get_corpus_scorer`](scikitplot.corpus.get_corpus_scorer.html#scikitplot.corpus.get_corpus_scorer "scikitplot.corpus.get_corpus_scorer")
    :   The same from a name such as `"ndcg@10"`.

    [`sklearn.metrics.make_scorer`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.make_scorer.html#sklearn.metrics.make_scorer "(in scikit-learn v1.10)")
    :   The scikit-learn original.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus import make_corpus_scorer, recall_at_k
    >>> scorer = make_corpus_scorer(recall_at_k, response_method="search", k=2)
    >>> class Index:
    ...     def search(self, query):
    ...         return [("d1", 0.9), ("d2", 0.5)]
    >>> scorer(Index(), ["first query", "second query"], [["d2"], ["d3"]])
    0.5

    ```
    Go BackOpen In Tab