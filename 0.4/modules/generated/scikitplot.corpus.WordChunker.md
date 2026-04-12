# WordChunker[#](#wordchunker "Link to this heading")

class scikitplot.corpus.WordChunker(**config=None**, **gensim\_dictionary=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_chunkers/_word.py#L1035)[#](#scikitplot.corpus.WordChunker "Link to this definition")
:   Process a document at word level, producing normalised token chunks.

    Each output `Chunk` contains:

    * `text` — space-joined normalised tokens (with optional n-grams).
    * `metadata` — token list, n-grams, token count, processing flags,
      optional Gensim BoW vector.

    Parameters:
    :   ****config****WordChunkerConfig, optional
        :   Processing configuration.

        ****gensim\_dictionary****gensim.corpora.Dictionary, optional
        :   Pre-built Gensim dictionary. When provided (and
            `cfg.build_gensim_corpus` is `True`), each chunk’s metadata
            includes a `"bow"` Gensim BoW vector.

    Parameters:
    :   * ****config**** ([**WordChunkerConfig**](scikitplot.corpus.WordChunkerConfig.html#scikitplot.corpus.WordChunkerConfig "scikitplot.corpus.WordChunkerConfig") **|** **None**)
        * ****gensim\_dictionary**** (**Any** **|** **None**)

    Examples

    ```
    >>> cfg = WordChunkerConfig(stemmer=StemmingBackend.PORTER)
    >>> chunker = WordChunker(cfg)
    >>> result = chunker.chunk("The quick brown foxes are jumping over lazy dogs.")
    >>> "token_count" in result.chunks[0].metadata
    True

    ```

    static build\_gensim\_dictionary(**token\_lists**, **no\_below=2**, **no\_above=0.9**, **keep\_n=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_chunkers/_word.py#L1395)[#](#scikitplot.corpus.WordChunker.build_gensim_dictionary "Link to this definition")
    :   Build a `gensim.corpora.Dictionary` from token lists.

        Parameters:
        :   ****token\_lists****list[list[str]]
            :   Processed token lists (one per document).

            ****no\_below****int
            :   Filter tokens appearing in fewer than **no\_below** documents.

            ****no\_above****float
            :   Filter tokens appearing in more than **no\_above** fraction of
                documents (0.0-1.0).

            ****keep\_n****int, optional
            :   Retain only the top **keep\_n** most frequent tokens after filtering.

        Returns:
        :   gensim.corpora.Dictionary
            :   Built and filtered dictionary.

        Raises:
        :   ImportError
            :   If Gensim is not installed.

            ValueError
            :   If **token\_lists** is empty.

        Parameters:
        :   * ****token\_lists**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]**)
            * ****no\_below**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****no\_above**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
            * ****keep\_n**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_chunkers/_word.py#L1277)[#](#scikitplot.corpus.WordChunker.chunk "Link to this definition")
    :   Process **text** into word-level chunks.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str, optional
            :   Document identifier stored in each chunk’s metadata.

            ****extra\_metadata****dict[str, Any], optional
            :   Additional key/value pairs merged into result metadata.

        Returns:
        :   ChunkResult
            :   Chunks and aggregate metadata.

        Raises:
        :   TypeError
            :   If **text** is not a `str`.

            ValueError
            :   If **text** is empty or whitespace-only.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   **ChunkResult**

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_chunkers/_word.py#L1346)[#](#scikitplot.corpus.WordChunker.chunk_batch "Link to this definition")
    :   Process a list of documents into word-level chunks.

        Parameters:
        :   ****texts****list[str]
            :   Input documents.

            ****doc\_ids****list[str], optional
            :   Parallel document identifiers.

            ****extra\_metadata****dict[str, Any], optional
            :   Shared metadata merged into every result.

        Returns:
        :   list[ChunkResult]
            :   One result per document.

        Raises:
        :   TypeError
            :   If **texts** is not a list.

            ValueError
            :   If **doc\_ids** length mismatches **texts**.

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****doc\_ids**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[**ChunkResult**]

    static vocabulary\_stats(**token\_lists**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/corpus/_chunkers/_word.py#L1448)[#](#scikitplot.corpus.WordChunker.vocabulary_stats "Link to this definition")
    :   Compute vocabulary statistics over a corpus.

        Parameters:
        :   ****token\_lists****list[list[str]]
            :   Processed token lists, one per document.

        Returns:
        :   dict[str, Any]
            :   Dictionary with keys:
                `vocab_size`, `total_tokens`, `unique_tokens`,
                `avg_tokens_per_doc`, `top_20_tokens`.

        Raises:
        :   ValueError
            :   If **token\_lists** is empty.

        Parameters:
        :   ****token\_lists**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]**)

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples