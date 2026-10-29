# recall\_at\_k[#](#recall-at-k "Link to this heading")

scikitplot.corpus.recall\_at\_k(**y\_true**, **y\_pred**, **\***, **k=10**, **sample\_weight=None**, **relevance\_threshold=1**, **duplicates='raise'**, **zero\_division='warn'**, **average='mean'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_ranking.py#L502)[#](#scikitplot.corpus.recall_at_k "Link to this definition")
:   Fraction of the relevant identifiers found in the first `k`.

    Parameters:
    :   ****y\_true****sequence or mapping
        :   Relevance judgments per query.

        ****y\_pred****sequence or mapping
        :   Rankings per query, best first.

        ****k****int or None, default=10
        :   Cutoff; `None` uses the whole ranking.

        ****sample\_weight****array-like of shape (n\_queries,), default=None
        :   Per-query weights of the mean.

        ****relevance\_threshold****float, default=1
        :   Grade from which a judged identifier is relevant.

        ****duplicates****{“raise”, “first”}, default=”raise”
        :   What a repeated identifier in a ranking does.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Value for a query without a relevant identifier.

        ****average****{“mean”, None}, default=”mean”
        :   `None` returns the per-query values.

    Returns:
    :   float or numpy.ndarray

    Raises:
    :   TypeError, ValueError
        :   For malformed inputs; the message names the query.

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
    > [`precision_at_k`](scikitplot.corpus.precision_at_k.html#scikitplot.corpus.precision_at_k "scikitplot.corpus.precision_at_k"), [`hit_rate_at_k`](scikitplot.corpus.hit_rate_at_k.html#scikitplot.corpus.hit_rate_at_k "scikitplot.corpus.hit_rate_at_k"), [`ranking_metrics`](scikitplot.corpus.ranking_metrics.html#scikitplot.corpus.ranking_metrics "scikitplot.corpus.ranking_metrics")

    Examples

    Try it in your browser!
    ```
    >>> recall_at_k([{"a", "b"}], [["a", "x", "b"]], k=2)
    0.5
    >>> recall_at_k({"q1": ["a"], "q2": ["b"]}, {"q1": ["a"], "q2": []}, average=None)
    array([1., 0.])

    ```
    Go BackOpen In Tab