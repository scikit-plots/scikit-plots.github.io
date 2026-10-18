# RoutePlan[#](#routeplan "Link to this heading")

class scikitplot.corpus.RoutePlan(**legs**, **reason**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L235)[#](#scikitplot.corpus.RoutePlan "Link to this definition")
:   A deterministic decision about which evidence paths to use.

    Notes

    `legs` may be ****empty****, which is a legitimate outcome rather than an
    error: deciding **not** to retrieve is a valid deterministic answer.

    Parameters:
    :   * ****legs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")**,** **...****]**)
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    legs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L235)[#](#scikitplot.corpus.RoutePlan.legs "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L235)[#](#scikitplot.corpus.RoutePlan.reason "Link to this definition")

    property retrieves: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.RoutePlan.retrieves "Link to this definition")
    :   Whether this plan calls for any retrieval at all.