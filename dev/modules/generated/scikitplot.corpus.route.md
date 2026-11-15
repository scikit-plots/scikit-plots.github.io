# route[#](#route "Link to this heading")

scikitplot.corpus.route(**query**, **\***, **has\_dense=True**, **has\_graph=False**, **has\_metadata=False**, **policy=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_agentic.py#L268)[#](#scikitplot.corpus.route "Link to this definition")
:   Choose evidence paths by deterministic rule (autonomy level A1).

    Parameters:
    :   ****query****str


        ****has\_dense****bool, optional
        :   Whether a dense index is available.

        ****has\_graph****bool, optional
        :   Whether a graph view is available.

        ****has\_metadata****bool, optional
        :   Whether structured metadata filters are available.

        ****policy****RoutingPolicy or None, optional
        :   Query-shape rules; `None` is [`DEFAULT_ROUTING_POLICY`](scikitplot.corpus.DEFAULT_ROUTING_POLICY.html#scikitplot.corpus.DEFAULT_ROUTING_POLICY "scikitplot.corpus.DEFAULT_ROUTING_POLICY"). Pass
            `RoutingPolicy()` to detect no shapes.

    Returns:
    :   RoutePlan

    Raises:
    :   TypeError
        :   If `query` is not a string or `policy` is not a
            [`RoutingPolicy`](scikitplot.corpus.RoutingPolicy.html#scikitplot.corpus.RoutingPolicy "scikitplot.corpus.RoutingPolicy").

    Parameters:
    :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****has\_dense**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****has\_graph**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****has\_metadata**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****policy**** ([**RoutingPolicy**](scikitplot.corpus.RoutingPolicy.html#scikitplot.corpus.RoutingPolicy "scikitplot.corpus._routing.RoutingPolicy") **|** **None**)

    Return type:
    :   [**RoutePlan**](scikitplot.corpus.RoutePlan.html#scikitplot.corpus.RoutePlan "scikitplot.corpus._agentic.RoutePlan")

    Notes

    ****User.**** A plain query routes lexical plus dense (plus graph when
    `has_graph`), as before. A query with a detected shape – counting,
    negation, a date, a multi-hop relation, a containment – also gets the
    paths that shape needs, when the index has them; `plan.shapes` names
    what was detected and `plan.unavailable` the paths that were missing.

    ****Developer.**** Rule-based, never model-controlled: the guide forbids
    beginning with a model router, and a deterministic router is also the only
    kind whose behaviour can be regression-tested; the labelled routing set in
    `tests/data/routing_set.json` pins it.

    A quoted phrase routes lexical-only and detects no shape, because a caller
    who quoted a phrase asked for that phrase, not for something semantically
    nearby.