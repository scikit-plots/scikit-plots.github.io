# CorpusAnnoyRetriever[#](#corpusannoyretriever "Link to this heading")

class scikitplot.mcp.CorpusAnnoyRetriever(**embedder**, **index**, **doc\_lookup**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_corpus_annoy.py#L323)[#](#scikitplot.mcp.CorpusAnnoyRetriever "Link to this definition")
:   Docs dense retriever backed by an embedder + a vector index + a document lookup.

    Parameters:
    :   ****embedder****Embedder
        :   Query embedder (the **same** model used to embed the corpus).

        ****index****VectorIndex
        :   Vector index returning `(doc_id, score)` for a query vector.

        ****doc\_lookup****callable
        :   `doc_id -> mapping` returning at least `text` and `source_uri`,
            optionally `title` / `anchor`. In production this reads the
            `CorpusDocument` from corpus storage.

    Parameters:
    :   * ****embedder**** ([**Embedder**](scikitplot.mcp.Embedder.html#scikitplot.mcp.Embedder "scikitplot.mcp.Embedder"))
        * ****index**** ([**VectorIndex**](scikitplot.mcp.VectorIndex.html#scikitplot.mcp.VectorIndex "scikitplot.mcp.VectorIndex"))
        * ****doc\_lookup**** (**Callable****[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]****]**)
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    Read-only. Retrieved text is untrusted and is sanitised downstream by
    `build_search_docs_result`.

    classmethod from\_corpus\_annoy(**docs\_path**, **\***, **metric='angular'**, **n\_trees=10**, **embedding\_model='all-MiniLM-L6-v2'**, **embedder=None**, **backend='annoy'**, **strict=False**, **mode='semantic'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_corpus_annoy.py#L454)[#](#scikitplot.mcp.CorpusAnnoyRetriever.from_corpus_annoy "Link to this definition")
    :   Build the real retriever from a docs directory (import-guarded).

        Wires [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") end to end. A single
        [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") pass ingests, embeds, and
        builds an Annoy-backed [`RetrievalIndex`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex "scikitplot.corpus.RetrievalIndex")
        (selected through `index_kwargs`), and this retriever consumes that
        index’s vector-level `query` seam directly. There is no second,
        ad-hoc Annoy index and no bespoke distance-to-score arithmetic — the
        corpus owns both the vector backend and the cosine score contract.

        Parameters:
        :   ****docs\_path****str
            :   Directory of documentation sources (RST / MyST / Markdown / HTML).

            ****metric****str, optional
            :   Annoy metric (`'angular'` for cosine-like on normalised vectors).

            ****n\_trees****int, optional
            :   Annoy tree count (accuracy/size trade-off).

            ****embedding\_model****str, optional
            :   Sentence-embedding model used when **embedder** is `None`. The query
                embedder uses the same model so query and corpus vectors share one
                space.

            ****embedder****callable or object with `embed(list[str])`, optional
            :   Explicit local batch embedder. When provided, the corpus is ingested
                without model embeddings, this callable supplies document vectors,
                and the same callable embeds queries. This is suitable for
                deterministic/offline helpers such as
                [`scikitplot.corpus.HashEmbedder`](scikitplot.corpus.HashEmbedder.html#scikitplot.corpus.HashEmbedder "scikitplot.corpus.HashEmbedder").

            ****backend****str, optional
            :   Dense ANN backend for the corpus index. `'annoy'` (default) or
                `'auto'` (Annoy first, then FAISS / Voyager / brute-force).

            ****strict****bool, optional
            :   False.

            ****mode****{‘semantic’, ‘hybrid’, ‘keyword’}, optional
            :   `'semantic'` (default) returns a [`CorpusAnnoyRetriever`](#scikitplot.mcp.CorpusAnnoyRetriever "scikitplot.mcp.CorpusAnnoyRetriever")
                over the vector seam, as before. `'hybrid'` and `'keyword'`
                return a [`CorpusIndexRetriever`](scikitplot.mcp.CorpusIndexRetriever.html#scikitplot.mcp.CorpusIndexRetriever "scikitplot.mcp.CorpusIndexRetriever") over the same index, which
                already holds a BM25 leg: hybrid fuses BM25 and dense by rank
                inside the corpus (finding CX-04).

        Returns:
        :   CorpusAnnoyRetriever or CorpusIndexRetriever

        Raises:
        :   RuntimeError
            :   If [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") is unavailable, or the build produced
                no queryable semantic index (e.g. embeddings were unavailable).

            ValueError
            :   If **mode** is not one of the accepted values (checked before any
                build), or propagated from [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder")
                when **docs\_path** contains no valid input sources.

        Parameters:
        :   * ****docs\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****n\_trees**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****embedding\_model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****embedder**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**)
            * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**DocsRetriever**](scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp._core.DocsRetriever")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_corpus_annoy.py#L357)[#](#scikitplot.mcp.CorpusAnnoyRetriever.get "Link to this definition")
    :   Return one indexed document by stable id for the MCP resource surface.

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk") | None

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_corpus_annoy.py#L379)[#](#scikitplot.mcp.CorpusAnnoyRetriever.search "Link to this definition")
    :   Embed `query`, ANN-search, and map hits to [`RetrievedChunk`](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp.RetrievedChunk").

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_mcp_corpus_annoy_hamlet_script_thumb.png)

[Serve a Real Hamlet Corpus over MCP with Annoy](../../auto_examples/mcp/plot_mcp_corpus_annoy_hamlet_script.html)

Serve a Real Hamlet Corpus over MCP with Annoy