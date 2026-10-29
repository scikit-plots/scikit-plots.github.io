# fuse\_by\_rank[#](#fuse-by-rank "Link to this heading")

scikitplot.corpus.fuse\_by\_rank(**results**, **\***, **rrf\_k=60**, **weights=None**, **top\_k=10**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_retrievers.py#L265)[#](#scikitplot.corpus.fuse_by_rank "Link to this definition")
:   Combine leg results by weighted reciprocal rank fusion.

    Parameters:
    :   ****results****iterable of LegResult
        :   One entry per leg. Failed legs contribute nothing but are harmless.

        ****rrf\_k****int, optional
        :   The standard RRF constant, at least 1. Default 60.

        ****weights****dict, optional
        :   Per-leg weight, finite and non-negative; unlisted legs weigh `1.0`.
            A weight-0 leg contributes nothing and adds no document.

        ****top\_k****int, optional
        :   Number of fused hits to return.

    Returns:
    :   list of (hit, fused\_score, contributions)
        :   Descending fused score; ties by ascending identity (`doc_id` or
            `node_id`). `hit` is the first hit seen for that identity.

    Raises:
    :   ValueError
        :   If a hit has neither a `doc_id` nor a `node_id`, or a weight or
            `rrf_k` is out of range.

        TypeError
        :   If a weight or `rrf_k` has the wrong type.

    Parameters:
    :   * ****results**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**LegResult**](scikitplot.corpus.LegResult.html#scikitplot.corpus.LegResult "scikitplot.corpus._retrievers.LegResult")**]**)
        * ****rrf\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****weights**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)
        * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**LegContribution**](scikitplot.corpus.LegContribution.html#scikitplot.corpus.LegContribution "scikitplot.corpus._retrievers.LegContribution"), …]]]

    Notes

    ****Developer.**** R2-1: the arithmetic and the tie-break are
    [`FusionPolicy`](scikitplot.corpus.FusionPolicy.html#scikitplot.corpus.FusionPolicy "scikitplot.corpus.FusionPolicy"), the one rule shared with
    [`RetrievalIndex.search`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex.search "scikitplot.corpus.RetrievalIndex.search") and the MCP hybrid retriever. Rank fusion is
    the default combiner because score-space fusion needs a validated
    normalization that does not exist for most metrics (ADR-R07-003). Each
    hit’s contributions are returned, so the fused score can be recomputed and
    explained from the result.

    Fusion keys on `doc_id`, never on a row offset – the property that kept
    F-R01-07’s positional coupling out of the fusion path. A hit without an
    identity is refused: an object address is not stable across processes.