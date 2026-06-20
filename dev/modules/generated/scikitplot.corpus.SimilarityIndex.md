# SimilarityIndex[#](#similarityindex "Link to this heading")

class scikitplot.corpus.SimilarityIndex(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/corpus/_similarity/_similarity.py#L229)[#](#scikitplot.corpus.SimilarityIndex "Link to this definition")
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

    build(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/corpus/_similarity/_similarity.py#L277)[#](#scikitplot.corpus.SimilarityIndex.build "Link to this definition")
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

    property n\_documents: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SimilarityIndex.n_documents "Link to this definition")
    :   Number of indexed documents.

    search(**query**, **\***, **config=None**, **query\_embedding=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/corpus/_similarity/_similarity.py#L371)[#](#scikitplot.corpus.SimilarityIndex.search "Link to this definition")
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

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples