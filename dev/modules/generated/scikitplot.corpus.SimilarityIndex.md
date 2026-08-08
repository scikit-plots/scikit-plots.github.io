# SimilarityIndex[#](#similarityindex "Link to this heading")

class scikitplot.corpus.SimilarityIndex(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L298)[#](#scikitplot.corpus.SimilarityIndex "Link to this definition")
:   Multi-mode similarity index over `CorpusDocument` collections.

    Parameters:
    :   ****config****SearchConfig or None, optional
        :   Default search configuration. Can be overridden per query.

    Parameters:
    :   ****config**** ([**SearchConfig**](scikitplot.corpus.SearchConfig.html#scikitplot.corpus.SearchConfig "scikitplot.corpus.SearchConfig") **|** **None**)

    > **See also**
    > [`scikitplot.corpus._schema.MatchMode`](scikitplot.corpus.MatchMode.html#scikitplot.corpus.MatchMode "scikitplot.corpus._schema.MatchMode")
    :   Enum of match modes.

    `scikitplot.corpus._adapters`
    :   Convert results to LangChain / MCP format.

    Notes

    ****User note:**** Build the index once, query many times:

    ```
    index = SimilarityIndex()
    index.build(documents)
    results = index.search("What did Hamlet say about death?")

    ```

    ****Developer note:**** The index stores references to the original
    documents. If documents are mutated after building, results
    are undefined.

    Examples

    Try it in your browser!
    ```
    >>> index = SimilarityIndex()
    >>> # index.build(corpus_documents)
    >>> # results = index.search("quantum computing")

    ```
    Go BackOpen In Tab

    property backend\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.corpus.SimilarityIndex.backend_name "Link to this definition")
    :   Name of the active dense ANN backend, or `None` if unbuilt.

    build(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L347)[#](#scikitplot.corpus.SimilarityIndex.build "Link to this definition")
    :   Build the index from `CorpusDocument` instances.

        Parameters:
        :   ****documents****Sequence[CorpusDocument]
            :   Documents to index. Must have `text` (and optionally
                `embedding`, `tokens`, `normalized_text`).

        Raises:
        :   ValueError
            :   If **documents** is empty.

        Parameters:
        :   ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

        Return type:
        :   None

    property has\_embeddings: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.SimilarityIndex.has_embeddings "Link to this definition")
    :   Whether dense embeddings are indexed.

    property index\_generation: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SimilarityIndex.index_generation "Link to this definition")
    :   Build generation, incremented on every [`build`](#scikitplot.corpus.SimilarityIndex.build "scikitplot.corpus.SimilarityIndex.build").

        Zero before the first build. Every [`SearchResult`](scikitplot.corpus.SearchResult.html#scikitplot.corpus.SearchResult "scikitplot.corpus.SearchResult") produced by
        [`search`](#scikitplot.corpus.SimilarityIndex.search "scikitplot.corpus.SimilarityIndex.search") carries the generation active at query time, so a caller
        can detect results computed against a since-rebuilt index.

    property n\_documents: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SimilarityIndex.n_documents "Link to this definition")
    :   Number of indexed documents.

    query(**vector**, **k=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L708)[#](#scikitplot.corpus.SimilarityIndex.query "Link to this definition")
    :   Vector-level ANN query returning `(doc_id, score)` pairs.

        This is the vector-index seam consumed by
        `scikitplot.mcp` (the `VectorIndex` protocol): it takes a query
        ****vector**** (already embedded) rather than a query string, and returns
        stable document identities instead of [`SearchResult`](scikitplot.corpus.SearchResult.html#scikitplot.corpus.SearchResult "scikitplot.corpus.SearchResult") objects.

        Parameters:
        :   ****vector****array-like
            :   Query embedding of the same dimension as the indexed vectors.

            ****k****int or None, optional
            :   Number of neighbours to return. Defaults to `config.top_k`.

        Returns:
        :   list of (str, float)
            :   `(doc_id, cosine_score)` pairs, best first. `doc_id` is the
                document’s `doc_id` attribute when present, else its stringified
                index. Empty if no dense index was built or the query is zero-norm.

        Raises:
        :   ValueError
            :   If **vector** dimension mismatches the index or is non-finite.

        Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")]]

    search(**query**, **\***, **config=None**, **query\_embedding=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_similarity/_similarity.py#L463)[#](#scikitplot.corpus.SimilarityIndex.search "Link to this definition")
    :   Search the index.

        Parameters:
        :   ****query****str
            :   Query text.

            ****config****SearchConfig or None, optional
            :   Override default config for this query.

            ****query\_embedding****array-like or None, optional
            :   Pre-computed query embedding. Required for SEMANTIC
                mode if no embedding engine is attached.

        Returns:
        :   list[SearchResult]
            :   Results sorted by descending score.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****config**** ([**SearchConfig**](scikitplot.corpus.SearchConfig.html#scikitplot.corpus.SearchConfig "scikitplot.corpus._similarity._similarity.SearchConfig") **|** **None**)
            * ****query\_embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**SearchResult**](scikitplot.corpus.SearchResult.html#scikitplot.corpus.SearchResult "scikitplot.corpus._similarity._similarity.SearchResult")]