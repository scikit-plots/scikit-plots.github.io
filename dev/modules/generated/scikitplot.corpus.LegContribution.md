# LegContribution[#](#legcontribution "Link to this heading")

class scikitplot.corpus.LegContribution(**leg**, **rank**, **native\_score=None**, **native\_metric=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L69)[#](#scikitplot.corpus.LegContribution "Link to this definition")
:   One leg’s contribution to a fused hit.

    Parameters:
    :   ****leg****LegKind
        :   Which evidence path contributed.

        ****rank****int
        :   Zero-based position within that leg.

        ****native\_score****float or None
        :   The score that leg assigned, on its own scale.

        ****native\_metric****str or None
        :   The scale, so a consumer can verify no cross-metric comparison happened.

    Parameters:
    :   * ****leg**** ([**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"))
        * ****rank**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****native\_score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****native\_metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer.**** This is propagation, not new computation: the fusion loop
    already had all four values.

    leg: [LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L69)[#](#scikitplot.corpus.LegContribution.leg "Link to this definition")

    native\_metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegContribution.native_metric "Link to this definition")

    native\_score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegContribution.native_score "Link to this definition")

    rank: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L69)[#](#scikitplot.corpus.LegContribution.rank "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrievers.py#L95)[#](#scikitplot.corpus.LegContribution.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]