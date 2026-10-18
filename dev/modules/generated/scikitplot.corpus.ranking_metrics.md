# ranking\_metrics[#](#ranking-metrics "Link to this heading")

scikitplot.corpus.ranking\_metrics(**y\_true**, **y\_pred**, **\***, **metrics=('hit\_rate@10', 'precision@10', 'recall@10', 'mrr@10', 'ndcg@10')**, **sample\_weight=None**, **relevance\_threshold=1**, **duplicates='raise'**, **zero\_division='warn'**, **gain='linear'**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_ranking.py#L883)[#](#scikitplot.corpus.ranking_metrics "Link to this definition")
:   Compute several ranking metrics in one validated pass.

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Relevance judgments per query.

        ****y\_pred****sequence or mapping
        :   Rankings per query, best first.

        ****metrics****iterable of str, optional
        :   Default `("hit_rate@10", "precision@10", "recall@10", "mrr@10",
            "ndcg@10")`. Names `"<base>"` or `"<base>@<k>"`; bases are `precision`,
            `recall`, `hit_rate`, `mrr`, `map`, `ndcg` and
            `r_precision` (no cutoff). Without `@k` the whole ranking is used.

        ****sample\_weight****array-like of shape (n\_queries,), default=None
        :   Per-query weights of the means.

        ****relevance\_threshold****float, default=1
        :   Grade from which a judged identifier is relevant.

        ****duplicates****{“raise”, “first”}, default=”raise”
        :   What a repeated identifier in a ranking does.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Value of an undefined metric.

        ****gain****{“linear”, “exponential”}, default=”linear”
        :   nDCG gain.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns per-query arrays.

    Returns:
    :   dict
        :   Metric name to value (or array), in the order requested.

    Raises:
    :   TypeError, ValueError
        :   For malformed inputs, an unknown name or a repeated name.

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****metrics**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****relevance\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****duplicates**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****zero\_division**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****gain**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> ranking_metrics([["a"]], [["x", "a"]], metrics=["recall@1", "mrr"])
    {'recall@1': 0.0, 'mrr': 0.5}

    ```
    Go BackOpen In Tab