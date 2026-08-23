# Bm25Retriever[#](#bm25retriever "Link to this heading")

class scikitplot.mcp.Bm25Retriever(**fts\_search**, **doc\_lookup**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_hybrid.py#L311)[#](#scikitplot.mcp.Bm25Retriever "Link to this definition")
:   Lexical retriever (FTS/BM25) leg backed by a full-text search seam.

    Parameters:
    :   ****fts\_search****callable
        :   `(query, k) -> list[(doc_id, score)]` — BM25-ranked hits. In production
            this wraps `scikitplot.corpus.SQLiteStorage` FTS5 (whose default rank
            is BM25).

        ****doc\_lookup****callable
        :   `doc_id -> mapping` with at least `text` and `source_uri`.

    Parameters:
    :   * ****fts\_search**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]****]**)
        * ****doc\_lookup**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]****]**)
        * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    BM25 complements dense retrieval on exact tokens — API symbols, flags, error
    messages — that embeddings often blur.

    classmethod from\_corpus\_sqlite(**storage\_path**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_hybrid.py#L409)[#](#scikitplot.mcp.Bm25Retriever.from_corpus_sqlite "Link to this definition")
    :   Build from a corpus SQLite/FTS5 store (import-guarded).

        Wires `scikitplot.corpus.SQLiteStorage` FTS5 search. Raises
        [`RuntimeError`](https://docs.python.org/3/library/exceptions.html#RuntimeError "(in Python v3.14)") with an actionable message if corpus is absent.
        The exact `query`/`StorageQuery` field access is corpus-version
        specific — verify against the installed source (see DESIGN.md §Hybrid).

        Parameters:
        :   * ****storage\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Bm25Retriever**](#scikitplot.mcp.Bm25Retriever "scikitplot.mcp._hybrid.Bm25Retriever")

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_hybrid.py#L341)[#](#scikitplot.mcp.Bm25Retriever.search "Link to this definition")
    :   Run FTS5/BM25 and map hits to [`RetrievedChunk`](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp.RetrievedChunk").

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]