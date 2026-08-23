# DocsRetriever[#](#docsretriever "Link to this heading")

class scikitplot.mcp.DocsRetriever(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_core.py#L125)[#](#scikitplot.mcp.DocsRetriever "Link to this definition")
:   Structural contract every retrieval backend must satisfy.

    Implemented by the corpus+annoy adapter (`_corpus_annoy.py`) and by test
    doubles. Keeping it a [`typing.Protocol`](https://docs.python.org/3/library/typing.html#typing.Protocol "(in Python v3.14)") means backends need not
    import this module or subclass anything.

    Methods

    |  |  |
    | --- | --- |
    | ****search(query, k)**** | Return up to `k` [`RetrievedChunk`](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp.RetrievedChunk") for `query`, best first. |

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_core.py#L140)[#](#scikitplot.mcp.DocsRetriever.search "Link to this definition")
    :   Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]