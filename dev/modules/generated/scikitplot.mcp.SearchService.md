# SearchService[#](#searchservice "Link to this heading")

class scikitplot.mcp.SearchService(**retriever**, **\***, **max\_concurrency=4**, **acquire\_timeout\_seconds=0.05**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/mcp/_server.py#L144)[#](#scikitplot.mcp.SearchService "Link to this definition")
:   Wire adapter: bounded, validated search returning pydantic tool models.

    Parameters:
    :   ****retriever****DocsRetriever
        :   Any object implementing `search(query, k)`.

        ****max\_concurrency****int, optional
        :   Maximum number of in-flight searches (1-128, default 4).

        ****acquire\_timeout\_seconds****float, optional
        :   How long to wait for a concurrency slot (default 0.05).

    Parameters:
    :   * ****retriever**** ([**DocsRetriever**](scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp.DocsRetriever"))
        * ****max\_concurrency**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****acquire\_timeout\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    > **See also**
    > [`scikitplot.mcp.SearchCoordinator`](scikitplot.mcp.SearchCoordinator.html#scikitplot.mcp.SearchCoordinator "scikitplot.mcp.SearchCoordinator")
    :   The Tier-L orchestration this wraps.

    Notes

    ****Developer-focused.**** Run M05 decided Option A: the neutral orchestration
    lives at Tier-L in [`SearchCoordinator`](scikitplot.mcp.SearchCoordinator.html#scikitplot.mcp.SearchCoordinator "scikitplot.mcp.SearchCoordinator"), and this class
    is the server-tier adapter that turns its plain dictionaries into
    `pydantic` models for the MCP wire. Validation and concurrency bounds are
    **not** reimplemented here — behaviour is inherited from the coordinator, so
    the two cannot drift.

    Callers that do not need wire models (framework integrations, the Legacy
    Retrieval tier) should use [`SearchCoordinator`](scikitplot.mcp.SearchCoordinator.html#scikitplot.mcp.SearchCoordinator "scikitplot.mcp.SearchCoordinator")
    directly and avoid the `[mcp]` extra entirely.

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/mcp/_server.py#L187)[#](#scikitplot.mcp.SearchService.search "Link to this definition")
    :   Search and return the validated wire model.

        Parameters:
        :   ****query****str
            :   Query text.

            ****k****int, optional
            :   Maximum passages to return.

        Returns:
        :   SearchDocsOutput

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**SearchDocsOutput**](scikitplot.mcp.SearchDocsOutput.html#scikitplot.mcp.SearchDocsOutput "scikitplot.mcp._server.SearchDocsOutput")