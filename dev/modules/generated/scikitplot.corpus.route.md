# route[#](#route "Link to this heading")

scikitplot.corpus.route(**query**, **\***, **has\_dense=True**, **has\_graph=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_agentic.py#L254)[#](#scikitplot.corpus.route "Link to this definition")
:   Choose evidence paths by deterministic rule (autonomy level A1).

    Parameters:
    :   ****query****str


        ****has\_dense****bool, optional
        :   Whether a dense index is available.

        ****has\_graph****bool, optional
        :   Whether a graph view is available.

    Returns:
    :   RoutePlan

    Parameters:
    :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****has\_dense**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****has\_graph**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**RoutePlan**](scikitplot.corpus.RoutePlan.html#scikitplot.corpus.RoutePlan "scikitplot.corpus._agentic.RoutePlan")

    Notes

    ****Developer.**** Rule-based, never model-controlled: the guide forbids
    beginning with a model router, and a deterministic router is also the only
    kind whose behaviour can be regression-tested.

    A quoted phrase routes lexical-only, because a caller who quoted a phrase
    asked for that phrase, not for something semantically nearby.