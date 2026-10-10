# fuse\_by\_rank[#](#fuse-by-rank "Link to this heading")

scikitplot.corpus.fuse\_by\_rank(**results**, **\***, **rrf\_k=60**, **weights=None**, **top\_k=10**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_retrievers.py#L246)[#](#scikitplot.corpus.fuse_by_rank "Link to this definition")
:   Combine leg results by reciprocal rank fusion.

    Parameters:
    :   ****results****iterable of LegResult
        :   One entry per leg. Failed legs contribute nothing but are harmless.

        ****rrf\_k****int, optional
        :   The standard RRF constant. Default 60.

        ****weights****dict, optional
        :   Per-leg weight; unlisted legs weigh `1.0`.

        ****top\_k****int, optional
        :   Number of fused hits to return.

    Returns:
    :   list of (hit, fused\_score, contributions)
        :   Sorted by descending fused score.

    Parameters:
    :   * ****results**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**LegResult**](scikitplot.corpus.LegResult.html#scikitplot.corpus.LegResult "scikitplot.corpus._retrievers.LegResult")**]**)
        * ****rrf\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****weights**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)
        * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**LegContribution**](scikitplot.corpus.LegContribution.html#scikitplot.corpus.LegContribution "scikitplot.corpus._retrievers.LegContribution"), …]]]

    Notes

    ****Developer.**** Rank fusion is the default combiner because score-space
    fusion needs a validated normalization that does not exist for most metrics
    (ADR-R07-003). The arithmetic is unchanged from the implementation review
    run R09 verified; what is new is that each hit’s contributions are
    ****returned**** rather than discarded, so the fused score can be recomputed and
    explained from the result.

    Fusion keys on `doc_id`, never on a row offset – the property that kept
    F-R01-07’s positional coupling out of the fusion path.