# AgenticRetrievalSession[#](#agenticretrievalsession "Link to this heading")

class scikitplot.corpus.AgenticRetrievalSession(**query**, **budgets=<factory>**, **steps=<factory>**, **evidence\_ids=<factory>**, **errors=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L375)[#](#scikitplot.corpus.AgenticRetrievalSession "Link to this definition")
:   Ephemeral state for one investigation.

    Notes

    ****Developer.**** Not persisted, no storage backend, and ****not**** a fourth role
    alongside document storage, vector store and graph store. Ephemerality is
    what lets durable agent memory be deferred honestly rather than half-built.

    Parameters:
    :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****budgets**** ([**BudgetPolicy**](scikitplot.corpus.BudgetPolicy.html#scikitplot.corpus.BudgetPolicy "scikitplot.corpus._agentic.BudgetPolicy"))
        * ****steps**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****evidence\_ids**** ([**set**](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****errors**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")**]**)

    budgets: [BudgetPolicy](scikitplot.corpus.BudgetPolicy.html#scikitplot.corpus.BudgetPolicy "scikitplot.corpus._agentic.BudgetPolicy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L375)[#](#scikitplot.corpus.AgenticRetrievalSession.budgets "Link to this definition")

    errors: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L375)[#](#scikitplot.corpus.AgenticRetrievalSession.errors "Link to this definition")

    evidence\_ids: [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L375)[#](#scikitplot.corpus.AgenticRetrievalSession.evidence_ids "Link to this definition")

    query: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L375)[#](#scikitplot.corpus.AgenticRetrievalSession.query "Link to this definition")

    record(**step**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L392)[#](#scikitplot.corpus.AgenticRetrievalSession.record "Link to this definition")
    :   Append a step to the trace.

        Parameters:
        :   ****step**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   None

    steps: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L375)[#](#scikitplot.corpus.AgenticRetrievalSession.steps "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_agentic.py#L396)[#](#scikitplot.corpus.AgenticRetrievalSession.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]