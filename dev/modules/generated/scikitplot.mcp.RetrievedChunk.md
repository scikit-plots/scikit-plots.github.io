# RetrievedChunk[#](#retrievedchunk "Link to this heading")

class scikitplot.mcp.RetrievedChunk(**text**, **source\_uri**, **score=0.0**, **doc\_id=''**, **title=''**, **anchor=''**, **extra=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_core.py#L134)[#](#scikitplot.mcp.RetrievedChunk "Link to this definition")
:   One retrieved passage with the metadata needed to cite it.

    This is the boundary type between retrieval (corpus / annoy) and the MCP
    tool layer. A concrete retriever maps its native result (e.g. a
    `scikitplot.corpus.SearchResult` / `CorpusDocument` or a
    `scikitplot.annoy` neighbour) onto this shape.

    Parameters:
    :   ****text****str
        :   The passage text. Treated as untrusted; truncated and control-stripped
            before entering a tool result.

        ****source\_uri****str
        :   Where the passage came from (page URL or path). Used to build the
            citation link; validated to an http(s)/relative scheme.

        ****score****float
        :   Retrieval score (higher = more relevant). Used for ordering only.

        ****doc\_id****str, optional
        :   Stable identifier of the chunk (for `resources/read` follow-ups).

        ****title****str, optional
        :   Human-readable source title (e.g. page or section heading).

        ****anchor****str, optional
        :   In-page anchor / section id so the citation deep-links to the section.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****source\_uri**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****title**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****anchor**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****extra**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    anchor: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.mcp.RetrievedChunk.anchor "Link to this definition")

    doc\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.mcp.RetrievedChunk.doc_id "Link to this definition")

    extra: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_core.py#L134)[#](#scikitplot.mcp.RetrievedChunk.extra "Link to this definition")

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.mcp.RetrievedChunk.score "Link to this definition")

    source\_uri: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_core.py#L134)[#](#scikitplot.mcp.RetrievedChunk.source_uri "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_core.py#L134)[#](#scikitplot.mcp.RetrievedChunk.text "Link to this definition")

    title: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.mcp.RetrievedChunk.title "Link to this definition")