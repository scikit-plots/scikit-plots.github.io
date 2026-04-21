# CustomSimilarityIndex[#](#customsimilarityindex "Link to this heading")

class scikitplot.corpus.CustomSimilarityIndex(**config=None**, **\***, **custom\_scorer\_fn=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_custom_hooks.py#L1648)[#](#scikitplot.corpus.CustomSimilarityIndex "Link to this definition")
:   `SimilarityIndex` extended with a
    fully-replaceable custom scorer callable.

    When `custom_scorer_fn` is provided, [`search`](#scikitplot.corpus.CustomSimilarityIndex.search "scikitplot.corpus.CustomSimilarityIndex.search") calls it instead of
    the built-in strict / keyword / semantic / hybrid modes. The callable
    receives the query string, the full document list, and the
    `SearchConfig` object.

    Parameters:
    :   ****config****SearchConfig or None, optional
        :   Default search configuration.

        ****custom\_scorer\_fn****callable or None, optional
        :   Custom scoring callable. When set, completely replaces the built-in
            match modes for every [`search`](#scikitplot.corpus.CustomSimilarityIndex.search "scikitplot.corpus.CustomSimilarityIndex.search") call. Signature:

            ```
            def custom_scorer_fn(
                query: str,
                documents: list[CorpusDocument],
                config: SearchConfig,
            ) -> list[SearchResult]: ...

            ```

            The callable must return a list of
            `SearchResult` instances.

    Raises:
    :   TypeError
        :   If `custom_scorer_fn` is provided but not callable.

    Parameters:
    :   * ****config**** (**Any** **|** **None**)
        * ****custom\_scorer\_fn**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]****,** **Any****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]****]** **|** **None**)

    Notes

    ****User note:**** Use this to plug in a reranker (Cohere, BGE, ColBERT),
    a dense retrieval backend (Weaviate, Qdrant, Pinecone), or any other
    scoring logic that requires access to the full document list at query time.

    ****Developer note:**** The built-in index (`SimilarityIndex`)
    is wrapped, not subclassed, to avoid MRO conflicts with its lazy-import
    dependencies. All `build()`, property, and `__repr__` calls are
    delegated to the inner index.

    Examples

    Try it in your browser!

    Plug in a Cohere reranker:

    ```
    import cohere

    co = cohere.Client("API_KEY")

    def cohere_rerank(query, docs, cfg):
        texts = [d.text[:512] for d in docs]
        resp = co.rerank(query=query, documents=texts, top_n=cfg.top_k)
        return [
            SearchResult(
                doc=docs[r.index], score=r.relevance_score, match_mode="cohere"
            )
            for r in resp.results
        ]

    index = CustomSimilarityIndex(custom_scorer_fn=cohere_rerank)
    index.build(corpus_documents)
    results = index.search("clinical trial outcomes")

    ```
    Go BackOpen In Tab

    build(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_custom_hooks.py#L1761)[#](#scikitplot.corpus.CustomSimilarityIndex.build "Link to this definition")
    :   Build the index from documents.

        Parameters:
        :   ****documents****Sequence[CorpusDocument]
            :   documents.

        Raises:
        :   ValueError
            :   If `documents` is empty.

        Parameters:
        :   ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

        Return type:
        :   None

    property has\_embeddings: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.CustomSimilarityIndex.has_embeddings "Link to this definition")
    :   Whether dense embeddings are indexed.

    property n\_documents: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.CustomSimilarityIndex.n_documents "Link to this definition")
    :   Number of indexed documents.

    search(**query**, **\***, **config=None**, **query\_embedding=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_custom_hooks.py#L1781)[#](#scikitplot.corpus.CustomSimilarityIndex.search "Link to this definition")
    :   Search the index using the custom scorer or built-in modes.

        When `custom_scorer_fn` is set it is called with
        `(query, documents, resolved_config)` and its return value is
        used directly. Otherwise `search`
        is called on the inner index.

        Parameters:
        :   ****query****str
            :   Query string.

            ****config****SearchConfig or None, optional
            :   Per-query config override.

            ****query\_embedding****array-like or None, optional
            :   Pre-computed query embedding for semantic/hybrid modes.

        Returns:
        :   list[SearchResult]
            :   Results sorted by descending score.

        Raises:
        :   RuntimeError
            :   If `custom_scorer_fn` raises an unexpected exception.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)
            * ****query\_embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]