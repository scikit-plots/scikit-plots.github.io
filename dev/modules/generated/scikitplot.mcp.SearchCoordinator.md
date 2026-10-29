# SearchCoordinator[#](#searchcoordinator "Link to this heading")

class scikitplot.mcp.SearchCoordinator(**retriever**, **\***, **max\_concurrency=4**, **acquire\_timeout\_seconds=0.05**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_core.py#L513)[#](#scikitplot.mcp.SearchCoordinator "Link to this definition")
:   Validated, concurrency-bounded search orchestration, free of wire models.

    This is the Legacy Retrieval tier (Python 3.8+, no `pydantic`, no MCP SDK)
    half of what used to live entirely inside
    [`scikitplot.mcp._server.SearchService`](scikitplot.mcp.SearchService.html#scikitplot.mcp.SearchService "scikitplot.mcp._server.SearchService").

    Parameters:
    :   ****retriever****DocsRetriever
        :   Any object implementing `search(query, k)`.

        ****max\_concurrency****int, optional
        :   Maximum number of in-flight searches (1-128, default 4).

        ****acquire\_timeout\_seconds****float, optional
        :   How long to wait for a concurrency slot before reporting the service
            busy (default 0.05).

    Raises:
    :   TypeError
        :   If `retriever` does not implement [`DocsRetriever`](scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp.DocsRetriever"), or if the
            bounds are not numbers.

        ValueError
        :   If the bounds are outside their permitted ranges.

    Parameters:
    :   * ****retriever**** ([**DocsRetriever**](scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp.DocsRetriever"))
        * ****max\_concurrency**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****acquire\_timeout\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    > **See also**
    > [`scikitplot.mcp._server.SearchService`](scikitplot.mcp.SearchService.html#scikitplot.mcp.SearchService "scikitplot.mcp._server.SearchService")
    :   Wire adapter that returns pydantic models built from this coordinator’s output.

    Notes

    ****User-focused.**** Use this when you want scikit-plots’ documentation search
    without installing the `[mcp]` extra — for example inside an agent
    framework adapter. It returns plain dictionaries.

    ****Developer-focused.**** Run M05 decided that the neutral orchestration
    (argument validation, bounded concurrency, retriever invocation and result
    shaping) belongs at Tier-L, and that `SearchService` is a wire/model
    adapter over it. Keeping the two separate is what allows
    `integrations/` to depend on the public Tier-L surface without pulling
    `pydantic` into a base install.

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_core.py#L623)[#](#scikitplot.mcp.SearchCoordinator.search "Link to this definition")
    :   Run one bounded, validated search and return the neutral result.

        Parameters:
        :   ****query****str
            :   Query text.

            ****k****int, optional
            :   Maximum passages to return.

        Returns:
        :   dict
            :   The full tool result, i.e. `{"content", "structuredContent",
                "isError"}` as produced by [`build_search_docs_result`](scikitplot.mcp.build_search_docs_result.html#scikitplot.mcp.build_search_docs_result "scikitplot.mcp.build_search_docs_result").

        Raises:
        :   ValueError
            :   If the arguments are invalid.

            RuntimeError
            :   If no concurrency slot is available, or the retriever failed.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    validate(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_core.py#L583)[#](#scikitplot.mcp.SearchCoordinator.validate "Link to this definition")
    :   Validate and normalise tool arguments.

        Parameters:
        :   ****query****str
            :   Raw query text.

            ****k****int, optional
            :   Requested number of passages.

        Returns:
        :   tuple of (str, int)
            :   The stripped query and the validated limit.

        Raises:
        :   ValueError
            :   If `query` is not a non-empty string within
                [`MAX_QUERY_CHARS`](scikitplot.mcp.MAX_QUERY_CHARS.html#scikitplot.mcp.MAX_QUERY_CHARS "scikitplot.mcp.MAX_QUERY_CHARS"), or `k` is not an integer within
                `1..`[`MAX_RESULTS`](scikitplot.mcp.MAX_RESULTS.html#scikitplot.mcp.MAX_RESULTS "scikitplot.mcp.MAX_RESULTS").

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")]