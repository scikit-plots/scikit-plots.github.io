# evaluate\_retrieval[#](#evaluate-retrieval "Link to this heading")

scikitplot.corpus.evaluate\_retrieval(**retriever**, **queries**, **qrels**, **\***, **metrics=('hit\_rate@10', 'precision@10', 'recall@10', 'mrr@10', 'ndcg@10')**, **id\_getter=None**, **relevance\_threshold=1**, **duplicates='raise'**, **zero\_division='warn'**, **gain='linear'**, **on\_degraded='raise'**, **keep\_rankings=True**, **metadata=None**, **clock=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L715)[#](#scikitplot.corpus.evaluate_retrieval "Link to this definition")
:   Run `retriever` on every query and score the rankings.

    Parameters:
    :   ****retriever****object
        :   Anything with `search(query)` (`RetrievalIndex`,
            `CustomRetrievalIndex`) or a callable `retriever(query)`. The
            result is read by [`ranked_ids`](scikitplot.corpus.ranked_ids.html#scikitplot.corpus.ranked_ids "scikitplot.corpus.ranked_ids").

        ****queries****mapping
        :   Query identifier to query (usually text), passed to the retriever.

        ****qrels****mapping
        :   Query identifier to judgments (`{doc_id: grade}` or a collection of
            relevant identifiers), with exactly the keys of `queries`. Its order
            is the evaluation order.

        ****metrics****iterable of str, default=DEFAULT\_METRICS
        :   Names as in [`ranking_metrics`](scikitplot.corpus.ranking_metrics.html#scikitplot.corpus.ranking_metrics "scikitplot.corpus.ranking_metrics").

        ****id\_getter****callable or None, default=None
        :   Maps a result to its identifier (see [`ranked_ids`](scikitplot.corpus.ranked_ids.html#scikitplot.corpus.ranked_ids "scikitplot.corpus.ranked_ids")).

        ****relevance\_threshold****float, default=1
        :   Grade from which a judged identifier is relevant.

        ****duplicates****{“raise”, “first”}, default=”raise”
        :   What a repeated identifier in a ranking does; `"first"` when several
            chunks map to one document through `id_getter`.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Value of an undefined metric.

        ****gain****{“linear”, “exponential”}, default=”linear”
        :   nDCG gain.

        ****on\_degraded****{“raise”, “warn”, “ignore”}, default=”raise”
        :   What a degraded or failed response does (see the module notes).

        ****keep\_rankings****bool, default=True
        :   Keep each ranking in the report, so it can be re-scored later.

        ****metadata****mapping or None, default=None
        :   Description stored with the report (system name, corpus version…).

        ****clock****callable or None, default=None
        :   `clock() -> seconds`; `None` uses [`time.perf_counter`](https://docs.python.org/3/library/time.html#time.perf_counter "(in Python v3.15)").

    Returns:
    :   RetrievalEvaluation

    Raises:
    :   TypeError
        :   For a retriever that cannot be called, or malformed inputs.

        ValueError
        :   If `queries` and `qrels` have different keys, a ranking repeats an
            identifier under `duplicates="raise"`, or a response is degraded
            under `on_degraded="raise"`.

    Parameters:
    :   * ****retriever**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****queries**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****qrels**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****metrics**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****id\_getter**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****relevance\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****duplicates**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****zero\_division**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****gain**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****on\_degraded**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****keep\_rankings**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****clock**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [**RetrievalEvaluation**](scikitplot.corpus.RetrievalEvaluation.html#scikitplot.corpus.RetrievalEvaluation "scikitplot.corpus._metrics._evaluate.RetrievalEvaluation")

    > **See also**
    > [`ranking_metrics`](scikitplot.corpus.ranking_metrics.html#scikitplot.corpus.ranking_metrics "scikitplot.corpus.ranking_metrics")
    :   The same metrics over precomputed rankings.

    [`make_corpus_scorer`](scikitplot.corpus.make_corpus_scorer.html#scikitplot.corpus.make_corpus_scorer "scikitplot.corpus.make_corpus_scorer")
    :   One metric as a scikit-learn scorer.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus import evaluate_retrieval
    >>> def retriever(query):
    ...     return [("d1", 0.9), ("d2", 0.4)] if "cat" in query else [("d3", 0.7)]
    >>> report = evaluate_retrieval(
    ...     retriever,
    ...     queries={"q1": "cat food", "q2": "dog toys"},
    ...     qrels={"q1": ["d2"], "q2": ["d4"]},
    ...     metrics=["recall@2", "mrr"],
    ... )
    >>> report.metrics
    {'recall@2': 0.5, 'mrr': 0.25}

    ```
    Go BackOpen In Tab