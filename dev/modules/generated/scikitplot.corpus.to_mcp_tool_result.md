# to\_mcp\_tool\_result[#](#to-mcp-tool-result "Link to this heading")

scikitplot.corpus.to\_mcp\_tool\_result(**documents**, **\***, **tool\_name='corpus\_search'**, **is\_error=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_adapters.py#L324)[#](#scikitplot.corpus.to_mcp_tool_result "Link to this definition")
:   Format documents as an MCP `tools/call` response.

    Parameters:
    :   ****documents****Sequence[CorpusDocument]
        :   Search results.

        ****tool\_name****str, optional
        :   Name of the MCP tool that produced these results.

        ****is\_error****bool, optional
        :   Whether this response represents an error.

    Returns:
    :   dict[str, Any]
        :   MCP tool result with `content` array and `isError` flag.

    Parameters:
    :   * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****tool\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****is\_error**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****User note:**** Return this from your MCP server’s
    `tools/call` handler:

    ```
    @server.tool("corpus_search")
    async def search(query: str) -> dict:
        results = builder.search(query)
        return to_mcp_tool_result([r.doc for r in results])

    ```

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples