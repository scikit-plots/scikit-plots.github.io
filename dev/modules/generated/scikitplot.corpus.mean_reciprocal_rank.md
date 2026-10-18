# mean\_reciprocal\_rank[#](#mean-reciprocal-rank "Link to this heading")

scikitplot.corpus.mean\_reciprocal\_rank(**y\_true**, **y\_pred**, **\***, **k=None**, **sample\_weight=None**, **relevance\_threshold=1**, **duplicates='raise'**, **zero\_division='warn'**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_ranking.py#L631)[#](#scikitplot.corpus.mean_reciprocal_rank "Link to this definition")
:   Mean of `1 / rank` of the first relevant identifier (MRR).

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Relevance judgments per query.

        ****y\_pred****sequence or mapping
        :   Rankings per query, best first.

        ****k****int or None, default=None
        :   Cutoff (MRR@k); a first relevant identifier beyond it scores 0.

        ****sample\_weight****array-like of shape (n\_queries,), default=None
        :   Per-query weights of the mean.

        ****relevance\_threshold****float, default=1
        :   Grade from which a judged identifier is relevant.

        ****duplicates****{“raise”, “first”}, default=”raise”
        :   What a repeated identifier in a ranking does.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Accepted for a uniform signature; this metric is never undefined.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns the per-query reciprocal ranks.

    Returns:
    :   float or numpy.ndarray

    Parameters:
    :   * ****y\_true**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****y\_pred**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****sample\_weight**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****relevance\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****duplicates**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****zero\_division**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****average**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    > **See also**
    > [`hit_rate_at_k`](scikitplot.corpus.hit_rate_at_k.html#scikitplot.corpus.hit_rate_at_k "scikitplot.corpus.hit_rate_at_k"), [`mean_average_precision`](scikitplot.corpus.mean_average_precision.html#scikitplot.corpus.mean_average_precision "scikitplot.corpus.mean_average_precision")

    Examples

    Try it in your browser!
    ```
    >>> mean_reciprocal_rank([["a"], ["b"]], [["a", "x"], ["x", "b"]])
    0.75

    ```
    Go BackOpen In Tab