# WordChunker[#](#wordchunker "Link to this heading")

class scikitplot.corpus.WordChunker(**config=None**, **gensim\_dictionary=None**, **multilang\_config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_chunkers/_word.py#L1068)[#](#scikitplot.corpus.WordChunker "Link to this definition")
:   Process a document at word level, producing normalised token chunks.

    Each output `Chunk` contains:

    * `text` — space-joined normalised tokens (with optional n-grams).
    * `metadata` — token list, n-grams, token count, processing flags,
      optional Gensim BoW vector.
    * `metadata["multilang"]` — script detection, semanteme analysis,
      stopword counts, grapheme counts, preprocessing trace, timing, and
      raw text (when `MultilangConfig` is set).

    Parameters:
    :   ****config****WordChunkerConfig, optional
        :   Processing configuration.

        ****gensim\_dictionary****gensim.corpora.Dictionary, optional
        :   Pre-built Gensim dictionary. When provided (and
            `cfg.build_gensim_corpus` is `True`), each chunk’s metadata
            includes a `"bow"` Gensim BoW vector.

        ****multilang\_config****MultilangConfig, optional
        :   Multilang feature flags. Overrides `config.multilang_config`
            when provided explicitly.

    Parameters:
    :   * ****config**** ([**WordChunkerConfig**](scikitplot.corpus.WordChunkerConfig.html#scikitplot.corpus.WordChunkerConfig "scikitplot.corpus.WordChunkerConfig") **|** **None**)
        * ****gensim\_dictionary**** (**Any** **|** **None**)
        * ****multilang\_config**** (**MultilangConfig** **|** **None**)

    Notes

    ****User note (multilang):**** Set `multilang_config=MultilangConfig(
    include_semantemes=True, include_raw_text=True,
    include_preprocessing_trace=True)` to get the full per-token
    semanteme analysis dict, preprocessing audit trail, and raw-vs-normalised
    text comparison in every chunk.

    ****Developer note:**** Inherits `MultilangMixin`. Token-level
    metadata (`token_count`, `stopword_count`, `unique_token_count`)
    is computed directly from the processed token list and forwarded to
    `_ml_build_meta`.

    Examples

    Try it in your browser!
    ```
    >>> cfg = WordChunkerConfig(stemmer=StemmingBackend.PORTER)
    >>> chunker = WordChunker(cfg)
    >>> result = chunker.chunk("The quick brown foxes are jumping over lazy dogs.")
    >>> "token_count" in result.chunks[0].metadata
    True

    ```
    Go BackOpen In Tab

    attach\_embedding(**chunk**, **vector**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_chunkers/_multilang_mixin.py#L783)[#](#scikitplot.corpus.WordChunker.attach_embedding "Link to this definition")
    :   Return a new `Chunk` with an embedding attached.

        Does NOT mutate the original `Chunk` (frozen dataclass).

        Parameters:
        :   ****chunk****Chunk
            :   Any chunk produced by this chunker.

            ****vector****list[float]
            :   Dense embedding vector.

            ****model\_name****str, optional
            :   Encoder model name.

            ****model\_version****str, optional
            :   Encoder model version.

        Returns:
        :   Chunk
            :   New frozen instance with `metadata["multilang"]["embedding"]`
                populated and `metadata["embedding"]` set at top level for
                compatibility with `EmbeddedChunk`.

        Parameters:
        :   * ****chunk**** (**Chunk**)
            * ****vector**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]**)
            * ****model\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****model\_version**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   **Chunk**

        Notes

        ****User note:**** For batch embedding, use
        [`attach_embedding_batch`](#scikitplot.corpus.WordChunker.attach_embedding_batch "scikitplot.corpus.WordChunker.attach_embedding_batch") which avoids per-chunk dict copies.

        ****Developer note:**** Two embedding locations are written:

        1. `chunk.metadata["embedding"]` — top-level key compatible with
           `EmbeddedChunk` and vector store adapters.
        2. `chunk.metadata["multilang"]["embedding"]` — inside the
           multilang bundle for model provenance tracking.

    attach\_embedding\_batch(**chunks**, **vectors**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_chunkers/_multilang_mixin.py#L840)[#](#scikitplot.corpus.WordChunker.attach_embedding_batch "Link to this definition")
    :   Return a new list of chunks with embeddings attached.

        Parameters:
        :   ****chunks****list[Chunk]
            :   Chunks from this chunker.

            ****vectors****list[list[float]]
            :   One embedding vector per chunk. Must have same length as
                `chunks`.

            ****model\_name****str, optional
            :   Encoder model name.

            ****model\_version****str, optional
            :   Encoder model version.

        Returns:
        :   list[Chunk]
            :   New list; originals are unmodified.

        Raises:
        :   ValueError
            :   If `len(chunks) != len(vectors)`.

        Parameters:
        :   * ****chunks**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Chunk****]**)
            * ****vectors**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]**)
            * ****model\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****model\_version**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[**Chunk**]

    static build\_gensim\_dictionary(**token\_lists**, **no\_below=2**, **no\_above=0.9**, **keep\_n=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_chunkers/_word.py#L1533)[#](#scikitplot.corpus.WordChunker.build_gensim_dictionary "Link to this definition")
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

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_chunkers/_word.py#L1397)[#](#scikitplot.corpus.WordChunker.chunk "Link to this definition")
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

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_chunkers/_word.py#L1484)[#](#scikitplot.corpus.WordChunker.chunk_batch "Link to this definition")
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

    static vocabulary\_stats(**token\_lists**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_chunkers/_word.py#L1586)[#](#scikitplot.corpus.WordChunker.vocabulary_stats "Link to this definition")
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

[Compare Corpus Chunking Strategies on OCR Text](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text