# CorpusIndexRetriever[#](#corpusindexretriever "Link to this heading")

class scikitplot.mcp.CorpusIndexRetriever(**embedder**, **index**, **\***, **match\_mode='hybrid'**, **strict=False**, **filter=None**, **documents=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_corpus_annoy.py#L172)[#](#scikitplot.mcp.CorpusIndexRetriever "Link to this definition")
:   Text-level retriever over a corpus `RetrievalIndex`: hybrid by default.

    Parameters:
    :   ****embedder****Embedder or None
        :   Embeds the query for the dense leg — the **same** model that embedded the
            corpus. `None` only with `match_mode='keyword'`.

        ****index****RetrievalIndex
        :   A built corpus index. Its own configuration (fusion constant, weights,
            backend) is kept; only `match_mode` and `top_k` are set per query.

        ****match\_mode****{‘hybrid’, ‘keyword’, ‘semantic’}, optional
        :   Which evidence paths the corpus runs. Default `'hybrid'`: BM25 and
            dense, fused by rank inside the corpus.

        ****strict****bool, optional
        :   Re-raise failures instead of reporting them as a failed leg.

        ****documents****iterable or None, optional
        :   The documents `index` was built from, for [`get`](#scikitplot.mcp.CorpusIndexRetriever.get "scikitplot.mcp.CorpusIndexRetriever.get") (the
            `docs://chunk/{doc_id}` resource); the factory passes them. They
            are served as given, so pass no others. `None` serves no document
            by id.

        ****filter****Filter, mapping or None, optional
        :   A corpus filter expression ([`Filter`](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus.Filter"), or
            its JSON form) applied to every query: the server’s scope. It is
            checked here by [`validate_filter`](scikitplot.corpus.validate_filter.html#scikitplot.corpus.validate_filter "scikitplot.corpus.validate_filter") and passed
            to `index.search(filter=...)`, where the corpus AND-s it with the
            index’s own `SecurityFilter`; a query can only narrow it. `None`
            (the default) searches the whole index. The same scope applies to
            [`get`](#scikitplot.mcp.CorpusIndexRetriever.get "scikitplot.mcp.CorpusIndexRetriever.get"). The scope is server configuration: responses do not
            echo it.

    Raises:
    :   ValueError
        :   If `match_mode` is not one of the offered modes, or no embedder is
            given for a mode that needs one, or `filter` is malformed.

        TypeError
        :   If `filter` is neither a filter expression nor a mapping.

        RuntimeError
        :   If a `filter` is given and [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") is not installed.

    Parameters:
    :   * ****embedder**** ([**Embedder**](scikitplot.mcp.Embedder.html#scikitplot.mcp.Embedder "scikitplot.mcp.Embedder") **|** **None**)
        * ****index**** (**Any**)
        * ****match\_mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****filter**** (**Any**)
        * ****documents**** (**Any**)

    Notes

    ****User.**** Dense search blurs identifiers and error strings; keyword search
    misses paraphrase. Hybrid runs both and fuses them by rank, which is why a
    query such as `roc_auc_score` and one such as “area under the ROC curve”
    both find the right page.

    ****Developer.**** The server’s Corpus+Annoy backend built an index that
    already holds a BM25 leg (`RetrievalIndex.build` always constructs it)
    and then used only the vector seam, so the MCP surface could never serve
    hybrid retrieval although every piece existed (finding CX-04). Fusion is
    **not** re-implemented here: corpus owns retrieval semantics, and its
    per-leg account is carried into [`RetrievalOutcome`](scikitplot.mcp.RetrievalOutcome.html#scikitplot.mcp.RetrievalOutcome "scikitplot.mcp.RetrievalOutcome"), so a hybrid
    query whose dense leg could not run is reported `degraded` rather than
    passed off as a complete result.

    property filter: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[#](#scikitplot.mcp.CorpusIndexRetriever.filter "Link to this definition")
    :   The scope every query is searched in.

        Type:
        :   [Filter](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus.Filter") or None

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_corpus_annoy.py#L260)[#](#scikitplot.mcp.CorpusIndexRetriever.get "Link to this definition")
    :   Return one indexed document by id, for the MCP resource route.

        Parameters:
        :   ****doc\_id****str
            :   The document’s stable id.

        Returns:
        :   RetrievedChunk or None
            :   `None` when no `documents` were given, the id is unknown, the
                document has no text, or it is outside the scope: the retriever’s
                `filter` or the index’s `security_filter` does not admit it.
                Of several documents with the id, the first in scope is returned.
                An out-of-scope document is indistinguishable from a missing one,
                so the route reveals nothing about what the scope hides.

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk") | None

    property match\_mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.mcp.CorpusIndexRetriever.match_mode "Link to this definition")
    :   The evidence paths every query runs.

        Type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/mcp/_corpus_annoy.py#L316)[#](#scikitplot.mcp.CorpusIndexRetriever.search "Link to this definition")
    :   Search the corpus index and map its hits and legs for MCP.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]