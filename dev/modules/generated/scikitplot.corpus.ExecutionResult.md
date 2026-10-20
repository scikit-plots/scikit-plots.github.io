# ExecutionResult[#](#executionresult "Link to this heading")

class scikitplot.corpus.ExecutionResult(**hits**, **stages**, **queries**, **responses**, **passages=None**, **query=None**, **status=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L367)[#](#scikitplot.corpus.ExecutionResult "Link to this definition")
:   Ranked hits plus the account of every stage.

    Parameters:
    :   ****hits****tuple of PlannedHit
        :   Final ranking, best first, at most the plan’s `top_k`.

        ****stages****tuple of StageOutcome
        :   One per stage, in execution order.

        ****queries****tuple of str
        :   The queries `retrieve` was asked to run, the original first unless
            the transform dropped it.

        ****responses****tuple
        :   `index.search`’s response for each query, aligned with
            `queries`; `None` where the query was not started (a budget) or
            its search or embedding raised (see the `retrieve` stage’s error).

        ****passages****tuple of ContextPassage or None, default=None
        :   The compressed context, when `compress` ran.

        ****query****str or None, default=None
        :   The query the plan was run with.

        ****status****RetrievalStatus or None, default=None
        :   Leave `None`: it is derived (see `_derive_status`).

    Parameters:
    :   * ****hits**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**PlannedHit**](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit")**,** **...****]**)
        * ****stages**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**StageOutcome**](scikitplot.corpus.StageOutcome.html#scikitplot.corpus.StageOutcome "scikitplot.corpus._execution.StageOutcome")**,** **...****]**)
        * ****queries**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****responses**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** **...****]**)
        * ****passages**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**ContextPassage**](scikitplot.corpus.ContextPassage.html#scikitplot.corpus.ContextPassage "scikitplot.corpus._execution.ContextPassage")**,** **...****]** **|** **None**)
        * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****status**** ([**RetrievalStatus**](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus._retrieval.RetrievalStatus") **|** **None**)

    Notes

    ****User.**** Like a [`RetrievalResponse`](scikitplot.corpus.RetrievalResponse.html#scikitplot.corpus.RetrievalResponse "scikitplot.corpus.RetrievalResponse"), this
    iterates, indexes and lens like its hits, so code that consumed a
    response consumes a plan’s result.

    error\_records()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L468)[#](#scikitplot.corpus.ExecutionResult.error_records "Link to this definition")
    :   Return every diagnostic: the stages’ first, then the responses’.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")]

    hits: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[PlannedHit](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L367)[#](#scikitplot.corpus.ExecutionResult.hits "Link to this definition")

    passages: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[ContextPassage](scikitplot.corpus.ContextPassage.html#scikitplot.corpus.ContextPassage "scikitplot.corpus._execution.ContextPassage"), ...] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ExecutionResult.passages "Link to this definition")

    queries: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L367)[#](#scikitplot.corpus.ExecutionResult.queries "Link to this definition")

    query: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ExecutionResult.query "Link to this definition")

    responses: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L367)[#](#scikitplot.corpus.ExecutionResult.responses "Link to this definition")

    stage(**kind**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L463)[#](#scikitplot.corpus.ExecutionResult.stage "Link to this definition")
    :   Return the outcome of one stage.

        Parameters:
        :   ****kind**** ([**StageKind**](scikitplot.corpus.StageKind.html#scikitplot.corpus.StageKind "scikitplot.corpus._execution.StageKind") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**StageOutcome**](scikitplot.corpus.StageOutcome.html#scikitplot.corpus.StageOutcome "scikitplot.corpus._execution.StageOutcome") | None

    stages: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[StageOutcome](scikitplot.corpus.StageOutcome.html#scikitplot.corpus.StageOutcome "scikitplot.corpus._execution.StageOutcome"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L367)[#](#scikitplot.corpus.ExecutionResult.stages "Link to this definition")

    status: [RetrievalStatus](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus._retrieval.RetrievalStatus") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ExecutionResult.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L477)[#](#scikitplot.corpus.ExecutionResult.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping of the outcome (not the hits).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]