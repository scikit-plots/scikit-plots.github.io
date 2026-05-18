# FixedWindowChunker[#](#fixedwindowchunker "Link to this heading")

class scikitplot.corpus.FixedWindowChunker(**config=None**, **multilang\_config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_chunkers/_fixed_window.py#L259)[#](#scikitplot.corpus.FixedWindowChunker "Link to this definition")
:   Produce fixed-size sliding-window chunks over a document.

    Handles all scripts via `detect_script` and
    `split_cjk_chars` for no-space East Asian scripts.
    Multilang metadata is attached to each chunk when enabled.

    Parameters:
    :   ****config****FixedWindowChunkerConfig, optional
        :   Chunker configuration.

        ****multilang\_config****MultilangConfig, optional
        :   Multilang feature flags.

    Parameters:
    :   * ****config**** ([**FixedWindowChunkerConfig**](scikitplot.corpus.FixedWindowChunkerConfig.html#scikitplot.corpus.FixedWindowChunkerConfig "scikitplot.corpus.FixedWindowChunkerConfig") **|** **None**)
        * ****multilang\_config**** (**MultilangConfig** **|** **None**)

    Notes

    ****User note (multilang):**** Fixed-window chunking is script-aware for
    token-unit mode (`unit=TOKENS`): CJK / Hiragana / Katakana text is
    split at character level rather than whitespace. Char-unit mode
    (`unit=CHARS`) is strictly grapheme-cluster agnostic (raw codepoint
    slices), which is safe for RAG pipelines that only need byte-aligned
    embedding windows.

    ****Developer note:**** Inherits `MultilangMixin`. Every chunk
    produced by [`chunk`](#scikitplot.corpus.FixedWindowChunker.chunk "scikitplot.corpus.FixedWindowChunker.chunk") carries `metadata["multilang"]` when
    `multilang_config.enabled=True`.

    Examples

    Try it in your browser!
    ```
    >>> cfg = FixedWindowChunkerConfig(
    ...     window_size=20, step_size=10, unit=WindowUnit.CHARS
    ... )
    >>> chunker = FixedWindowChunker(cfg)
    >>> result = chunker.chunk("The quick brown fox jumps over the lazy dog")
    >>> result.chunks[0].text
    'The quick brown fox '

    ```
    Go BackOpen In Tab

    attach\_embedding(**chunk**, **vector**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_chunkers/_multilang_mixin.py#L783)[#](#scikitplot.corpus.FixedWindowChunker.attach_embedding "Link to this definition")
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
        [`attach_embedding_batch`](#scikitplot.corpus.FixedWindowChunker.attach_embedding_batch "scikitplot.corpus.FixedWindowChunker.attach_embedding_batch") which avoids per-chunk dict copies.

        ****Developer note:**** Two embedding locations are written:

        1. `chunk.metadata["embedding"]` — top-level key compatible with
           `EmbeddedChunk` and vector store adapters.
        2. `chunk.metadata["multilang"]["embedding"]` — inside the
           multilang bundle for model provenance tracking.

    attach\_embedding\_batch(**chunks**, **vectors**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_chunkers/_multilang_mixin.py#L840)[#](#scikitplot.corpus.FixedWindowChunker.attach_embedding_batch "Link to this definition")
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

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_chunkers/_fixed_window.py#L349)[#](#scikitplot.corpus.FixedWindowChunker.chunk "Link to this definition")
    :   Split **text** into fixed-window chunks.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str, optional
            :   Document identifier stored in metadata.

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

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_chunkers/_fixed_window.py#L452)[#](#scikitplot.corpus.FixedWindowChunker.chunk_batch "Link to this definition")
    :   Chunk a list of documents.

        Parameters:
        :   ****texts****list[str]
            :   Input documents.

            ****doc\_ids****list[str], optional
            :   Parallel document identifiers.

            ****extra\_metadata****dict[str, Any], optional
            :   Shared metadata for every result.

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

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples