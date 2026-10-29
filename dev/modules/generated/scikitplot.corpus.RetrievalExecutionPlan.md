# RetrievalExecutionPlan[#](#retrievalexecutionplan "Link to this heading")

class scikitplot.corpus.RetrievalExecutionPlan(**retrieval=None**, **transform=None**, **keep\_original=True**, **max\_queries=8**, **fusion=None**, **rerank=None**, **rerank\_depth=None**, **compress=None**, **top\_k=None**, **budgets=()**, **deadline\_seconds=None**, **on\_error='degrade'**, **clock=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L632)[#](#scikitplot.corpus.RetrievalExecutionPlan "Link to this definition")
:   Run retrieval through typed, bounded stages.

    Parameters:
    :   ****retrieval****object or None, default=None
        :   Passed to `index.search` as `config` (a
            [`RetrievalConfig`](scikitplot.corpus.RetrievalConfig.html#scikitplot.corpus.RetrievalConfig "scikitplot.corpus.RetrievalConfig")); `None` uses the
            index’s own.

        ****transform****callable or None, default=None
        :   `transform(query) -> sequence of str`: rewrites, sub-queries or
            variants. Empty strings are refused, exact duplicates are run once.

        ****keep\_original****bool, default=True
        :   Run the original query first, whatever `transform` returns.

        ****max\_queries****int, default=8
        :   Queries `retrieve` runs at most; further ones are dropped and the
            `transform` stage reports `degraded`.

        ****fusion****FusionPolicy or None, default=None
        :   Fuses the queries’ rankings (the leg of query `i` is named
            `"q{i}"`); `None` is `FusionPolicy()`. Not used with one query.
            A policy with `top_k=0` is refused; one that weighs every query 0
            makes `fuse` report `degraded`.

        ****rerank****callable or None, default=None
        :   `rerank(query, hits) -> sequence of float`, one finite score per
            hit, higher is better; ties keep the fused order.

        ****rerank\_depth****int or None, default=None
        :   Hits passed to `rerank`; `None` passes all. When set, `top_k`
            must be set too and be at most `rerank_depth`, so no returned hit
            is ranked by two scales.

        ****compress****callable or None, default=None
        :   `compress(query, hits) -> sequence`, one entry per hit, each a
            sequence of `(start, end)` character ranges of `hit.doc.text`,
            ordered and non-overlapping; an empty entry keeps nothing of that hit
            (see [`CharBudgetCompressor`](scikitplot.corpus.CharBudgetCompressor.html#scikitplot.corpus.CharBudgetCompressor "scikitplot.corpus.CharBudgetCompressor")).

        ****top\_k****int or None, default=None
        :   Hits returned; `None` returns every hit `retrieve` found.

        ****budgets****mapping of str to StageBudget, default=()
        :   `{"retrieve": StageBudget(...)}`: the one stage that makes several
            calls. The other stages make one call each, which a budget checked
            before calls cannot bound; they are refused here.

        ****deadline\_seconds****float or None, default=None
        :   Seconds after the plan starts beyond which no stage or query starts
            (`fuse`, an in-process computation, always runs).

        ****on\_error****{“degrade”, “raise”}, default=”degrade”
        :   What an exception from a component (or from `index.search`) does:
            `"degrade"` reports the stage `failed` and keeps the previous
            stage’s output; `"raise"` propagates it.

        ****clock****callable or None, default=None
        :   `clock() -> seconds`; `None` is [`time.perf_counter`](https://docs.python.org/3/library/time.html#time.perf_counter "(in Python v3.15)").

    Raises:
    :   TypeError, ValueError
        :   For a field of the wrong type or out of range.

    Parameters:
    :   * ****retrieval**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****transform**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]** **|** **None**)
        * ****keep\_original**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****max\_queries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****fusion**** ([**FusionPolicy**](scikitplot.corpus.FusionPolicy.html#scikitplot.corpus.FusionPolicy "scikitplot.corpus._fusion.FusionPolicy") **|** **None**)
        * ****rerank**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**PlannedHit**](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit")**]****]****,** [**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****]** **|** **None**)
        * ****rerank\_depth**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****compress**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**PlannedHit**](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit")**]****]****,** [**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]** **|** **None**)
        * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****budgets**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**StageBudget**](scikitplot.corpus.StageBudget.html#scikitplot.corpus.StageBudget "scikitplot.corpus._execution.StageBudget")**]** **|** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**StageBudget**](scikitplot.corpus.StageBudget.html#scikitplot.corpus.StageBudget "scikitplot.corpus._execution.StageBudget")**]****,** **...****]**)
        * ****deadline\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****on\_error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****clock**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    > **See also**
    > [`scikitplot.corpus.RetrievalIndex.search`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex.search "scikitplot.corpus.RetrievalIndex.search")
    :   What `retrieve` calls.

    [`scikitplot.corpus.FusionPolicy`](scikitplot.corpus.FusionPolicy.html#scikitplot.corpus.FusionPolicy "scikitplot.corpus.FusionPolicy")
    :   How the queries’ rankings are fused.

    [`scikitplot.corpus.evaluate_retrieval`](scikitplot.corpus.evaluate_retrieval.html#scikitplot.corpus.evaluate_retrieval "scikitplot.corpus.evaluate_retrieval")
    :   Measures `plan.bind(index)`.

    Notes

    ****User.**** An empty plan, `RetrievalExecutionPlan().run(index, q)`,
    returns the hits of `index.search(q)` in the same order, and its status.

    ****Developer.**** A stage with nothing to do is `skipped` (`fuse` with
    one query, `rerank` with no hits), not `success`, so a report never
    claims work that was not done.

    Examples

    Try it in your browser!
    ```
    >>> plan = RetrievalExecutionPlan(
    ...     top_k=3, budgets={"retrieve": StageBudget(max_calls=4)}
    ... )
    >>> plan.budget("retrieve")
    StageBudget(max_calls=4, max_seconds=None)

    ```
    Go BackOpen In Tab

    bind(**index**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L824)[#](#scikitplot.corpus.RetrievalExecutionPlan.bind "Link to this definition")
    :   Return `query -> self.run(index, query, **kwargs)`.

        Parameters:
        :   ****index****object
            :   Anything with `search`.

            ****\*\*kwargs****
            :   Passed to [`run`](#scikitplot.corpus.RetrievalExecutionPlan.run "scikitplot.corpus.RetrievalExecutionPlan.run") on every call.

        Returns:
        :   callable
            :   For [`evaluate_retrieval`](scikitplot.corpus.evaluate_retrieval.html#scikitplot.corpus.evaluate_retrieval "scikitplot.corpus.evaluate_retrieval").

        Parameters:
        :   * ****index**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [**ExecutionResult**](scikitplot.corpus.ExecutionResult.html#scikitplot.corpus.ExecutionResult "scikitplot.corpus._execution.ExecutionResult")]

    budget(**stage**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L818)[#](#scikitplot.corpus.RetrievalExecutionPlan.budget "Link to this definition")
    :   Return the budget of `stage`, or `None`.

        Parameters:
        :   ****stage**** ([**StageKind**](scikitplot.corpus.StageKind.html#scikitplot.corpus.StageKind "scikitplot.corpus._execution.StageKind") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**StageBudget**](scikitplot.corpus.StageBudget.html#scikitplot.corpus.StageBudget "scikitplot.corpus._execution.StageBudget") | None

    budgets: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [StageBudget](scikitplot.corpus.StageBudget.html#scikitplot.corpus.StageBudget "scikitplot.corpus._execution.StageBudget")] | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [StageBudget](scikitplot.corpus.StageBudget.html#scikitplot.corpus.StageBudget "scikitplot.corpus._execution.StageBudget")], ...] = ()[#](#scikitplot.corpus.RetrievalExecutionPlan.budgets "Link to this definition")

    clock: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[], [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.clock "Link to this definition")

    compress: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")[[PlannedHit](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit")]], [Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.compress "Link to this definition")

    deadline\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.deadline_seconds "Link to this definition")

    fusion: [FusionPolicy](scikitplot.corpus.FusionPolicy.html#scikitplot.corpus.FusionPolicy "scikitplot.corpus._fusion.FusionPolicy") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.fusion "Link to this definition")

    keep\_original: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.RetrievalExecutionPlan.keep_original "Link to this definition")

    max\_queries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 8[#](#scikitplot.corpus.RetrievalExecutionPlan.max_queries "Link to this definition")

    on\_error: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'degrade'[#](#scikitplot.corpus.RetrievalExecutionPlan.on_error "Link to this definition")

    rerank: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")[[PlannedHit](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit")]], [Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.rerank "Link to this definition")

    rerank\_depth: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.rerank_depth "Link to this definition")

    retrieval: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.retrieval "Link to this definition")

    run(**index**, **query**, **\***, **query\_embedding=None**, **embed\_query=None**, **filter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L846)[#](#scikitplot.corpus.RetrievalExecutionPlan.run "Link to this definition")
    :   Run the plan for `query`.

        Parameters:
        :   ****index****object
            :   Anything with `search(query, **kwargs)` returning an iterable of
                hits ([`RetrievalIndex`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex "scikitplot.corpus.RetrievalIndex")). Each hit carries
                an identity (`hit.doc.doc_id`, `hit.doc_id` or `hit.node_id`)
                and a real `score`; a query whose hits do not fails. Bare
                `(id, score)` pairs are not hits.

            ****query****str
            :   The query.

            ****query\_embedding****array-like or None, default=None
            :   Embedding of `query` itself, passed with it to `index.search`.

            ****embed\_query****callable or None, default=None
            :   `embed_query(text) -> embedding` for the queries the transform
                produced (and for `query` when `query_embedding` is `None`).
                Without it, those queries are searched with no embedding, and a
                dense leg reports why it could not run.

            ****filter****Filter, mapping or None, default=None
            :   Passed to every `index.search` call.

        Returns:
        :   ExecutionResult

        Raises:
        :   TypeError
            :   If `query` is not a `str` or `index` has no `search`; with
                `on_error="raise"`, a component’s output of the wrong type.

            ValueError
            :   If `query` is empty; with `on_error="raise"`, a component’s
                output out of range.

            Exception
            :   With `on_error="raise"`, whatever a component or
                `index.search` raised.

        Parameters:
        :   * ****index**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****query\_embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****embed\_query**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****filter**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**ExecutionResult**](scikitplot.corpus.ExecutionResult.html#scikitplot.corpus.ExecutionResult "scikitplot.corpus._execution.ExecutionResult")

    top\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.top_k "Link to this definition")

    transform: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [Sequence](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalExecutionPlan.transform "Link to this definition")