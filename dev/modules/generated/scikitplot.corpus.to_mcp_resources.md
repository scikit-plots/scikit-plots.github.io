# to\_mcp\_resources[#](#to-mcp-resources "Link to this heading")

scikitplot.corpus.to\_mcp\_resources(**documents**, **\***, **uri\_prefix='corpus://'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_adapters.py#L271)[#](#scikitplot.corpus.to_mcp_resources "Link to this definition")
:   Convert documents to MCP `resources/read` response format.

    Parameters:
    :   ****documents****Sequence[CorpusDocument]
        :   Source documents.

        ****uri\_prefix****str, optional
        :   URI prefix for resource identifiers.

    Returns:
    :   list[dict[str, Any]]
        :   MCP-compatible resource objects with `uri`, `name`,
            `mimeType`, `text`, and `metadata` keys.

    Parameters:
    :   * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****uri\_prefix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]]

    Notes

    ****User note:**** These resources can be served by any MCP server
    implementation. The URI scheme `corpus://{doc_id}` provides
    unique addressability for each chunk.

    References

    [1]

    Model Context Protocol specification,
    <https://modelcontextprotocol.io/>

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples