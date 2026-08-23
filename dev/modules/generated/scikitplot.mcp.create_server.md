# create\_server[#](#create-server "Link to this heading")

scikitplot.mcp.create\_server(**retriever**, **\***, **document\_reader=None**, **max\_concurrency=4**, **version='0.2.4'**, **log\_level='INFO'**, **health\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_server.py#L255)[#](#scikitplot.mcp.create_server "Link to this definition")
:   Create an official MCP Python SDK v2 `MCPServer` instance.

    Importing [`scikitplot.mcp`](../../apis/scikitplot.mcp.html#module-scikitplot.mcp "scikitplot.mcp") remains SDK-independent; the optional MCP
    dependency is imported only when this factory is called.

    Raises:
    :   RuntimeError
        :   If the interpreter is older than Python 3.10 (the MCP SDK v2 floor), or
            if the optional MCP SDK v2 is not installed. The two causes carry
            distinct messages so a 3.8/3.9 user is not told to “install mcp” when the
            real blocker is the interpreter version.

    Parameters:
    :   * ****retriever**** ([**DocsRetriever**](scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp._core.DocsRetriever"))
        * ****document\_reader**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.14)")**[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk") **|** **None****]** **|** **None**)
        * ****max\_concurrency**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****version**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****log\_level**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****health\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    Notes

    The MCP Python SDK v2 requires Python >= 3.10 (verified against the official
    SDK documentation). scikit-plots itself supports Python >= 3.8, so the server
    layer is an optional feature gated on the newer floor.