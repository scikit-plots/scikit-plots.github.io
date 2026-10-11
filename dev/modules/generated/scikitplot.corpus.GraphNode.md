# GraphNode[#](#graphnode "Link to this heading")

class scikitplot.corpus.GraphNode(**node\_id**, **kind**, **label=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_graph.py#L145)[#](#scikitplot.corpus.GraphNode "Link to this definition")
:   One node in the derived graph.

    Parameters:
    :   * ****node\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**NodeKind**](scikitplot.corpus.NodeKind.html#scikitplot.corpus.NodeKind "scikitplot.corpus._graph.NodeKind"))
        * ****label**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    kind: [NodeKind](scikitplot.corpus.NodeKind.html#scikitplot.corpus.NodeKind "scikitplot.corpus._graph.NodeKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_graph.py#L145)[#](#scikitplot.corpus.GraphNode.kind "Link to this definition")

    label: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.GraphNode.label "Link to this definition")

    node\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_graph.py#L145)[#](#scikitplot.corpus.GraphNode.node_id "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_graph.py#L153)[#](#scikitplot.corpus.GraphNode.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]