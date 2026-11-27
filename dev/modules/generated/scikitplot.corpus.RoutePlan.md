# RoutePlan[#](#routeplan "Link to this heading")

class scikitplot.corpus.RoutePlan(**legs**, **reason**, **shapes=()**, **unavailable=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_agentic.py#L236)[#](#scikitplot.corpus.RoutePlan "Link to this definition")
:   A deterministic decision about which evidence paths to use.

    Parameters:
    :   ****legs****tuple of LegKind
        :   The evidence paths to run, in order.

        ****reason****str
        :   Why, in words.

        ****shapes****tuple of str, default=()
        :   Query shapes the routing policy detected (`"negation"`, …).

        ****unavailable****tuple of LegKind, default=()
        :   Paths a detected shape needs that the index does not have.

    Parameters:
    :   * ****legs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")**,** **...****]**)
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****shapes**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****unavailable**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")**,** **...****]**)

    Notes

    `legs` may be ****empty****, which is a legitimate outcome rather than an
    error: deciding **not** to retrieve is a valid deterministic answer.

    legs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_agentic.py#L236)[#](#scikitplot.corpus.RoutePlan.legs "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_agentic.py#L236)[#](#scikitplot.corpus.RoutePlan.reason "Link to this definition")

    property retrieves: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.RoutePlan.retrieves "Link to this definition")
    :   Whether this plan calls for any retrieval at all.

    shapes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.RoutePlan.shapes "Link to this definition")

    unavailable: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"), ...] = ()[#](#scikitplot.corpus.RoutePlan.unavailable "Link to this definition")