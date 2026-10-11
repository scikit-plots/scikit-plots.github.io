# CorpusIndexRetriever[#](#corpusindexretriever "Link to this heading")

class scikitplot.mcp.CorpusIndexRetriever(**embedder**, **index**, **\***, **match\_mode='hybrid'**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mcp/_corpus_annoy.py#L172)[#](#scikitplot.mcp.CorpusIndexRetriever "Link to this definition")
:   Text-level retriever over a corpus `RetrievalIndex`: hybrid by default.

    Parameters:
    :   ****embedder****Embedder or None
        :   Embeds the query for the dense leg — the **same** model that embedded the
            corpus. `None` only with `match_mode='keyword'`.

        ****index****RetrievalIndex
        :   A built corpus index. Its own configuration (fusion constant, weights,
            backend) is kept; only `match_mode` and `top_k` are set per query.

        ****match\_mode****{‘hybrid’, ‘keyword’, ‘semantic’}, optional
        :   Which evidence paths the corpus runs. Default `'hybrid'`: BM25 and
            dense, fused by rank inside the corpus.

        ****strict****bool, optional
        :   Re-raise failures instead of reporting them as a failed leg.

    Raises:
    :   ValueError
        :   If `match_mode` is not one of the offered modes, or no embedder is
            given for a mode that needs one.

    Parameters:
    :   * ****embedder**** ([**Embedder**](scikitplot.mcp.Embedder.html#scikitplot.mcp.Embedder "scikitplot.mcp.Embedder") **|** **None**)
        * ****index**** (**Any**)
        * ****match\_mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User.**** Dense search blurs identifiers and error strings; keyword search
    misses paraphrase. Hybrid runs both and fuses them by rank, which is why a
    query such as `roc_auc_score` and one such as “area under the ROC curve”
    both find the right page.

    ****Developer.**** The server’s Corpus+Annoy backend built an index that
    already holds a BM25 leg (`RetrievalIndex.build` always constructs it)
    and then used only the vector seam, so the MCP surface could never serve
    hybrid retrieval although every piece existed (finding CX-04). Fusion is
    **not** re-implemented here: corpus owns retrieval semantics, and its
    per-leg account is carried into [`RetrievalOutcome`](scikitplot.mcp.RetrievalOutcome.html#scikitplot.mcp.RetrievalOutcome "scikitplot.mcp.RetrievalOutcome"), so a hybrid
    query whose dense leg could not run is reported `degraded` rather than
    passed off as a complete result.

    property match\_mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.mcp.CorpusIndexRetriever.match_mode "Link to this definition")
    :   The evidence paths every query runs.

        Type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/mcp/_corpus_annoy.py#L237)[#](#scikitplot.mcp.CorpusIndexRetriever.search "Link to this definition")
    :   Search the corpus index and map its hits and legs for MCP.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]