# HybridRetriever[#](#hybridretriever "Link to this heading")

class scikitplot.mcp.HybridRetriever(**retrievers**, **\***, **weights=None**, **rrf\_k=60**, **fanout=4**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_hybrid.py#L144)[#](#scikitplot.mcp.HybridRetriever "Link to this definition")
:   Fuse several retrievers into one via Reciprocal Rank Fusion.

    Parameters:
    :   ****retrievers****sequence of DocsRetriever
        :   The legs to fuse (e.g. dense, BM25, graph).

        ****weights****sequence of float, optional
        :   Per-leg weight (default all `1.0`). Length must match `retrievers`.

        ****rrf\_k****int, optional
        :   RRF constant (default `DEFAULT_RRF_K`).

        ****fanout****int, optional
        :   Over-fetch factor: each leg is asked for `fanout * k` candidates so
            fusion has depth to work with (default `4`).

        ****strict****bool, optional
        :   False.

    Parameters:
    :   * ****retrievers**** (**Sequence****[**[**DocsRetriever**](scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp.DocsRetriever")**]**)
        * ****weights**** (**Sequence****[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]** **|** **None**)
        * ****rrf\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****fanout**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    Resilient: a leg that raises is skipped, not fatal — one broken backend must
    not take down retrieval. Read-only; results are sanitised downstream by
    `build_search_docs_result`.

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_hybrid.py#L201)[#](#scikitplot.mcp.HybridRetriever.search "Link to this definition")
    :   Query every leg, fuse by RRF, and return the top-`k` fused chunks.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]