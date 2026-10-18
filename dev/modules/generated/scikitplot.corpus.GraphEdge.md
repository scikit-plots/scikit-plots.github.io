# GraphEdge[#](#graphedge "Link to this heading")

class scikitplot.corpus.GraphEdge(**source**, **target**, **relation**, **evidence**, **producer**, **trust**, **generation=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L158)[#](#scikitplot.corpus.GraphEdge "Link to this definition")
:   One relationship, with the provenance every edge must carry.

    Parameters:
    :   ****source****str
        :   Origin `node_id`.

        ****target****str
        :   Destination `node_id`.

        ****relation****RelationType
        :   How the two relate. Never generic.

        ****evidence****str
        :   The field(s) this edge was derived from.

        ****producer****str
        :   Identity and version of the rule, extractor or model that produced it.

        ****trust****EdgeTrust
        :   Which construction tier it belongs to.

        ****generation****str or None, optional
        :   Graph generation this edge belongs to.

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****target**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****relation**** ([**RelationType**](scikitplot.corpus.RelationType.html#scikitplot.corpus.RelationType "scikitplot.corpus._graph.RelationType"))
        * ****evidence**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****producer**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****trust**** ([**EdgeTrust**](scikitplot.corpus.EdgeTrust.html#scikitplot.corpus.EdgeTrust "scikitplot.corpus._graph.EdgeTrust"))
        * ****generation**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    evidence: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L158)[#](#scikitplot.corpus.GraphEdge.evidence "Link to this definition")

    generation: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.GraphEdge.generation "Link to this definition")

    producer: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L158)[#](#scikitplot.corpus.GraphEdge.producer "Link to this definition")

    relation: [RelationType](scikitplot.corpus.RelationType.html#scikitplot.corpus.RelationType "scikitplot.corpus._graph.RelationType")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L158)[#](#scikitplot.corpus.GraphEdge.relation "Link to this definition")

    source: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L158)[#](#scikitplot.corpus.GraphEdge.source "Link to this definition")

    target: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L158)[#](#scikitplot.corpus.GraphEdge.target "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L188)[#](#scikitplot.corpus.GraphEdge.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    trust: [EdgeTrust](scikitplot.corpus.EdgeTrust.html#scikitplot.corpus.EdgeTrust "scikitplot.corpus._graph.EdgeTrust")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_graph.py#L158)[#](#scikitplot.corpus.GraphEdge.trust "Link to this definition")