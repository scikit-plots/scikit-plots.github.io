# MCPCorpusServer[#](#mcpcorpusserver "Link to this heading")

class scikitplot.corpus.MCPCorpusServer(**index**, **embedding\_fn=None**, **server\_name='corpus-search'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_adapters.py#L620)[#](#scikitplot.corpus.MCPCorpusServer "Link to this definition")
:   MCP server adapter for corpus search.

    Provides a structured interface for building MCP servers that
    expose corpus search as tools and resources.

    Parameters:
    :   ****index****SimilarityIndex
        :   A built similarity index.

        ****embedding\_fn****Callable[[str], list[float]] or None, optional
        :   Function to embed query text.

        ****server\_name****str, optional
        :   Name of the MCP server.

    Parameters:
    :   * ****index**** (**Any**)
        * ****embedding\_fn**** (**Any**)
        * ****server\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Notes

    ****User note:**** Use with any MCP server framework:

    ```
    from mcp.server import Server

    mcp_adapter = MCPCorpusServer(index, embedding_fn)

    server = Server("corpus-search")

    @server.tool("search")
    async def search(query: str, top_k: int = 10):
        return mcp_adapter.handle_search(query, top_k=top_k)

    @server.resource("corpus://{doc_id}")
    async def get_doc(doc_id: str):
        return mcp_adapter.handle_resource(doc_id)

    ```

    References

    [1]

    Model Context Protocol,
    <https://modelcontextprotocol.io/>

    handle\_resource(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_adapters.py#L712)[#](#scikitplot.corpus.MCPCorpusServer.handle_resource "Link to this definition")
    :   Handle an MCP `resources/read` request.

        Returns:
        :   dict[str, Any] or None
            :   MCP resource, or `None` if not found.

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | None

    handle\_search(**query**, **\***, **top\_k=10**, **match\_mode='hybrid'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_adapters.py#L684)[#](#scikitplot.corpus.MCPCorpusServer.handle_search "Link to this definition")
    :   Handle an MCP `tools/call` request.

        Returns:
        :   dict[str, Any]
            :   MCP tool result.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****top\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    list\_tools()[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_adapters.py#L726)[#](#scikitplot.corpus.MCPCorpusServer.list_tools "Link to this definition")
    :   Return MCP tool definitions for this server.

        Returns:
        :   list[dict]
            :   Tool schemas compatible with MCP `tools/list`.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]]