# ndcg\_at\_k[#](#ndcg-at-k "Link to this heading")

scikitplot.corpus.ndcg\_at\_k(**y\_true**, **y\_pred**, **\***, **k=10**, **gain='linear'**, **sample\_weight=None**, **relevance\_threshold=1**, **duplicates='raise'**, **zero\_division='warn'**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_ranking.py#L811)[#](#scikitplot.corpus.ndcg_at_k "Link to this definition")
:   Normalised discounted cumulative gain (nDCG@k) over graded judgments.

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Relevance judgments per query; grades are the gains.

        ****y\_pred****sequence or mapping
        :   Rankings per query, best first.

        ****k****int or None, default=10
        :   Cutoff of both DCG and the ideal DCG; `None` uses everything.

        ****gain****{“linear”, “exponential”}, default=”linear”
        :   `grade` or `2 ** grade - 1`.

        ****sample\_weight****array-like of shape (n\_queries,), default=None
        :   Per-query weights of the mean.

        ****relevance\_threshold****float, default=1
        :   Accepted for a uniform signature; nDCG uses the grades, not the
            threshold.

        ****duplicates****{“raise”, “first”}, default=”raise”
        :   What a repeated identifier in a ranking does.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Value for a query whose judged grades are all zero.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns the per-query values.

    Returns:
    :   float or numpy.ndarray
        :   Values in [0, 1] (up to floating-point rounding).

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****gain**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****relevance\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****duplicates**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****zero\_division**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    > **See also**
    > [`mean_average_precision`](scikitplot.corpus.mean_average_precision.html#scikitplot.corpus.mean_average_precision "scikitplot.corpus.mean_average_precision"), [`ranking_metrics`](scikitplot.corpus.ranking_metrics.html#scikitplot.corpus.ranking_metrics "scikitplot.corpus.ranking_metrics")

    Notes

    This takes rankings of identifiers and graded judgments, the form a
    retrieval system produces. [`sklearn.metrics.ndcg_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.ndcg_score.html#sklearn.metrics.ndcg_score "(in scikit-learn v1.10)") takes score
    matrices over a fixed label set instead.

    Examples

    Try it in your browser!
    ```
    >>> round(ndcg_at_k([{"a": 3, "b": 1}], [["b", "a"]], k=2), 4)
    0.7967

    ```
    Go BackOpen In Tab