# HybridRetriever[#](#hybridretriever "Link to this heading")

class scikitplot.mcp.HybridRetriever(**retrievers**, **\***, **weights=None**, **rrf\_k=60**, **fanout=4**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_hybrid.py#L161)[#](#scikitplot.mcp.HybridRetriever "Link to this definition")
:   Fuse several retrievers into one via Reciprocal Rank Fusion.

    Parameters:
    :   ****retrievers****sequence of DocsRetriever
        :   The legs to fuse (e.g. dense, BM25, graph).

        ****weights****sequence of float, optional
        :   Per-leg weight (default all `1.0`). Length must match `retrievers`.

        ****rrf\_k****int, optional
        :   RRF constant (default [`DEFAULT_RRF_K`](scikitplot.mcp.DEFAULT_RRF_K.html#scikitplot.mcp.DEFAULT_RRF_K "scikitplot.mcp.DEFAULT_RRF_K")).

        ****fanout****int, optional
        :   Over-fetch factor: each leg is asked for `fanout * k` candidates so
            fusion has depth to work with (default `4`).

        ****strict****bool, optional
        :   False.

    Parameters:
    :   * ****retrievers**** (**Sequence****[**[**DocsRetriever**](scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp.DocsRetriever")**]**)
        * ****weights**** (**Sequence****[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)
        * ****rrf\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****fanout**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    Resilient: a leg that raises is skipped, not fatal — one broken backend must
    not take down retrieval. Read-only; results are sanitised downstream by
    `build_search_docs_result`.

    ****User.**** [`close`](#scikitplot.mcp.HybridRetriever.close "scikitplot.mcp.HybridRetriever.close") (or `with`) closes every leg that has a
    `close` (a [`Bm25Retriever`](scikitplot.mcp.Bm25Retriever.html#scikitplot.mcp.Bm25Retriever "scikitplot.mcp.Bm25Retriever") built on a SQLite store, R3-8).

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_hybrid.py#L189)[#](#scikitplot.mcp.HybridRetriever.close "Link to this definition")
    :   Close every leg that has a `close`; safe to call more than once.

        Notes

        ****Developer.**** Every leg is closed even when one raises; the first
        error is then re-raised.

        Return type:
        :   None

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/mcp/_hybrid.py#L257)[#](#scikitplot.mcp.HybridRetriever.search "Link to this definition")
    :   Query every leg, fuse by RRF, and return the top-`k` fused chunks.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]