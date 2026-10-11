# GraphResponse[#](#graphresponse "Link to this heading")

class scikitplot.corpus.GraphResponse(**nodes=()**, **edges=()**, **errors=()**, **hops\_completed=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_graph.py#L247)[#](#scikitplot.corpus.GraphResponse "Link to this definition")
:   The outcome of a traversal, including why it stopped.

    Notes

    ****Developer.**** A budget-exhausted traversal is `DEGRADED` with a naming
    [`ErrorRecord`](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus.ErrorRecord"), never a silently truncated result. A truncated
    traversal that looks complete is the same defect class as a filter that
    returns everything (F-R07-01) – and this codebase has now removed that
    shape from six separate sites.

    Parameters:
    :   * ****nodes**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**GraphNode**](scikitplot.corpus.GraphNode.html#scikitplot.corpus.GraphNode "scikitplot.corpus._graph.GraphNode")**,** **...****]**)
        * ****edges**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**GraphEdge**](scikitplot.corpus.GraphEdge.html#scikitplot.corpus.GraphEdge "scikitplot.corpus._graph.GraphEdge")**,** **...****]**)
        * ****errors**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")**,** **...****]**)
        * ****hops\_completed**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    edges: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[GraphEdge](scikitplot.corpus.GraphEdge.html#scikitplot.corpus.GraphEdge "scikitplot.corpus._graph.GraphEdge"), ...] = ()[#](#scikitplot.corpus.GraphResponse.edges "Link to this definition")

    errors: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord"), ...] = ()[#](#scikitplot.corpus.GraphResponse.errors "Link to this definition")

    property exhausted\_budgets: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.corpus.GraphResponse.exhausted_budgets "Link to this definition")
    :   Names of the budgets that stopped this traversal.

    hops\_completed: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.GraphResponse.hops_completed "Link to this definition")

    nodes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[GraphNode](scikitplot.corpus.GraphNode.html#scikitplot.corpus.GraphNode "scikitplot.corpus._graph.GraphNode"), ...] = ()[#](#scikitplot.corpus.GraphResponse.nodes "Link to this definition")

    property status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.GraphResponse.status "Link to this definition")
    :   `"success"`, `"empty"` or `"degraded"`.

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_graph.py#L277)[#](#scikitplot.corpus.GraphResponse.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]