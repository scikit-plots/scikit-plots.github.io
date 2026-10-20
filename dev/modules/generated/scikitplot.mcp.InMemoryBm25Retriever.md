# InMemoryBm25Retriever[#](#inmemorybm25retriever "Link to this heading")

class scikitplot.mcp.InMemoryBm25Retriever(**documents**, **\***, **k1=1.5**, **b=0.75**, **title\_weight=2.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/mcp/_demo.py#L81)[#](#scikitplot.mcp.InMemoryBm25Retriever "Link to this definition")
:   A compact BM25 implementation suitable for demos and small corpora.

    The index is immutable after construction, making concurrent reads safe.
    Search complexity is linear in the number of documents; production-scale
    deployments should use FTS5, a dedicated search engine, or the hybrid
    corpus/Annoy adapters instead.

    Parameters:
    :   * ****documents**** (**Iterable****[**[**DemoDocument**](scikitplot.mcp.DemoDocument.html#scikitplot.mcp.DemoDocument "scikitplot.mcp.DemoDocument")**]**)
        * ****k1**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****b**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****title\_weight**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    classmethod from\_jsonl(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/mcp/_demo.py#L233)[#](#scikitplot.mcp.InMemoryBm25Retriever.from_jsonl "Link to this definition")
    :   Load bounded UTF-8 JSON Lines records.

        Each line must contain `doc_id` and `text`. Optional fields are
        `source_uri`, `title`, and `anchor`. The loader rejects duplicate
        IDs and oversized inputs instead of partially accepting ambiguous data.

        Parameters:
        :   ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [**InMemoryBm25Retriever**](#scikitplot.mcp.InMemoryBm25Retriever "scikitplot.mcp._demo.InMemoryBm25Retriever")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/mcp/_demo.py#L219)[#](#scikitplot.mcp.InMemoryBm25Retriever.get "Link to this definition")
    :   Return a document by stable identifier for the MCP resource layer.

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk") | None

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/mcp/_demo.py#L171)[#](#scikitplot.mcp.InMemoryBm25Retriever.search "Link to this definition")
    :   Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]