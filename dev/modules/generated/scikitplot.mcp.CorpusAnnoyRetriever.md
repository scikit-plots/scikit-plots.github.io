# CorpusAnnoyRetriever[#](#corpusannoyretriever "Link to this heading")

class scikitplot.mcp.CorpusAnnoyRetriever(**embedder**, **index**, **doc\_lookup**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_corpus_annoy.py#L165)[#](#scikitplot.mcp.CorpusAnnoyRetriever "Link to this definition")
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
    :   * ****embedder**** (**Embedder**)
        * ****index**** (**VectorIndex**)
        * ****doc\_lookup**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]****]**)
        * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    Read-only. Retrieved text is untrusted and is sanitised downstream by
    `build_search_docs_result`.

    classmethod from\_corpus\_annoy(**docs\_path**, **\***, **metric='angular'**, **n\_trees=10**, **embedding\_model='all-MiniLM-L6-v2'**, **embedder=None**, **backend='annoy'**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_corpus_annoy.py#L296)[#](#scikitplot.mcp.CorpusAnnoyRetriever.from_corpus_annoy "Link to this definition")
    :   Build the real retriever from a docs directory (import-guarded).

        Wires [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") end to end. A single
        [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") pass ingests, embeds, and
        builds an Annoy-backed `SimilarityIndex`
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
                `scikitplot.corpus.HashEmbedder`.

            ****backend****str, optional
            :   Dense ANN backend for the corpus index. `'annoy'` (default) or
                `'auto'` (Annoy first, then FAISS / Voyager / brute-force).

            ****strict****bool, optional
            :   False.

        Returns:
        :   CorpusAnnoyRetriever

        Raises:
        :   RuntimeError
            :   If [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") is unavailable, or the build produced
                no queryable semantic index (e.g. embeddings were unavailable).

            ValueError
            :   Propagated from [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus.CorpusBuilder") when
                **docs\_path** contains no valid input sources.

        Parameters:
        :   * ****docs\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****metric**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****n\_trees**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****embedding\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****embedder**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)
            * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**CorpusAnnoyRetriever**](#scikitplot.mcp.CorpusAnnoyRetriever "scikitplot.mcp._corpus_annoy.CorpusAnnoyRetriever")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_corpus_annoy.py#L199)[#](#scikitplot.mcp.CorpusAnnoyRetriever.get "Link to this definition")
    :   Return one indexed document by stable id for the MCP resource surface.

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk") | None

    search(**query**, **k=5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/mcp/_corpus_annoy.py#L221)[#](#scikitplot.mcp.CorpusAnnoyRetriever.search "Link to this definition")
    :   Embed `query`, ANN-search, and map hits to [`RetrievedChunk`](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp.RetrievedChunk").

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**RetrievedChunk**](scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp._core.RetrievedChunk")]