# Bm25Retriever[#](#bm25retriever "Link to this heading")

class scikitplot.mcp.Bm25Retriever(**fts\_search**, **doc\_lookup**, **\***, **strict=False**, **close=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_hybrid.py#L366)[#](#scikitplot.mcp.Bm25Retriever "Link to this definition")
:   Lexical retriever (FTS/BM25) leg backed by a full-text search seam.

    Parameters:
    :   ****fts\_search****callable
        :   `(query, k) -> list[(doc_id, score)]` — BM25-ranked hits. In production
            this wraps `scikitplot.corpus.SQLiteStorage` FTS5 (whose default rank
            is BM25).

        ****doc\_lookup****callable
        :   `doc_id -> mapping` with at least `text` and `source_uri`.

        ****strict****bool, default=False
        :   Re-raise a search failure instead of returning no hits.

        ****close****callable or None, default=None
        :   Releases what the seams hold (the store of
            [`from_corpus_sqlite`](#scikitplot.mcp.Bm25Retriever.from_corpus_sqlite "scikitplot.mcp.Bm25Retriever.from_corpus_sqlite")); called once by [`close`](#scikitplot.mcp.Bm25Retriever.close "scikitplot.mcp.Bm25Retriever.close").

    Parameters:
    :   * ****fts\_search**** (**Callable****[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]****,** [**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****]****]**)
        * ****doc\_lookup**** (**Callable****[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]****]**)
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****close**** (**Callable****[****[****]****,** **None****]** **|** **None**)

    Notes

    BM25 complements dense retrieval on exact tokens — API symbols, flags, error
    messages — that embeddings often blur.

    ****User.**** A retriever from [`from_corpus_sqlite`](#scikitplot.mcp.Bm25Retriever.from_corpus_sqlite "scikitplot.mcp.Bm25Retriever.from_corpus_sqlite") holds a SQLite
    connection: use `with Bm25Retriever.from_corpus_sqlite(path) as leg:` or
    call [`close`](#scikitplot.mcp.Bm25Retriever.close "scikitplot.mcp.Bm25Retriever.close") (R3-8; Python 3.13 reports an unclosed connection as a
    `ResourceWarning`).

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_hybrid.py#L408)[#](#scikitplot.mcp.Bm25Retriever.close "Link to this definition")
    :   Release what the retriever holds; safe to call more than once.

        Return type:
        :   None

    classmethod from\_corpus\_sqlite(**storage\_path**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_hybrid.py#L490)[#](#scikitplot.mcp.Bm25Retriever.from_corpus_sqlite "Link to this definition")
    :   Build from a corpus SQLite/FTS5 store (import-guarded).

        Wires [`scikitplot.corpus.SQLiteStorage.search_text`](scikitplot.corpus.SQLiteStorage.html#scikitplot.corpus.SQLiteStorage.search_text "scikitplot.corpus.SQLiteStorage.search_text"): BM25-ranked
        retrieval over free text. Raises [`RuntimeError`](https://docs.python.org/3/builtins/exceptions.html#RuntimeError "(in Python v3.15)") with an
        actionable message if corpus is absent.

        Notes

        ****Developer.**** This leg used to pass the query to
        `StorageQuery.full_text`, which reached FTS5 `MATCH` verbatim as an
        **expression** and required **every** word: `roc_auc_score()`, `C++`,
        `random-state` and any pasted error message were FTS5 syntax errors,
        and a plain question returned nothing, so hybrid search quietly ran on
        its dense leg alone (finding CX-01). `search_text` never reads the
        query as syntax, matches any word, and returns the BM25 score itself
        rather than `1 / rank`.

        Parameters:
        :   * ****storage\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [**Bm25Retriever**](#scikitplot.mcp.Bm25Retriever "scikitplot.mcp._hybrid.Bm25Retriever")

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_hybrid.py#L422)[#](#scikitplot.mcp.Bm25Retriever.search "Link to this definition")
    :   Run FTS5/BM25 and map hits to [`RetrievedChunk`](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp.RetrievedChunk").

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]