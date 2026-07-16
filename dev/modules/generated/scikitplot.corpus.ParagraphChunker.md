# ParagraphChunker[#](#paragraphchunker "Link to this heading")

class scikitplot.corpus.ParagraphChunker(**config=None**, **multilang\_config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_chunkers/_paragraph.py#L241)[#](#scikitplot.corpus.ParagraphChunker "Link to this definition")
:   Split a document into paragraph-level `Chunk` objects.

    Paragraph boundaries are blank lines (`\n\n`) — script-universal
    and dependency-free. Within each paragraph the dominant Unicode script
    is detected and reported in `chunk.metadata["multilang"]["script"]`.

    Parameters:
    :   ****config****ParagraphChunkerConfig, optional
        :   Chunker configuration.

        ****multilang\_config****MultilangConfig, optional
        :   Multilang feature flags. Overrides `config.multilang_config`
            when provided explicitly. Default: `MultilangConfig()`
            (script detection + semanteme count only, no raw text / trace).

    Parameters:
    :   * ****config**** ([**ParagraphChunkerConfig**](scikitplot.corpus.ParagraphChunkerConfig.html#scikitplot.corpus.ParagraphChunkerConfig "scikitplot.corpus.ParagraphChunkerConfig") **|** **None**)
        * ****multilang\_config**** (**MultilangConfig** **|** **None**)

    Notes

    ****User note (multilang):**** Blank-line paragraph splitting works for
    every script. Set `multilang_config=MultilangConfig(
    include_raw_text=True, include_preprocessing_trace=True)` to attach
    full preprocessing audit to each chunk. To add embeddings after
    chunking, call [`attach_embedding_batch`](#scikitplot.corpus.ParagraphChunker.attach_embedding_batch "scikitplot.corpus.ParagraphChunker.attach_embedding_batch").

    ****Developer note:**** Inherits `MultilangMixin`. Initialised via
    `self._ml_init()`. The `chunk()` method enriches each paragraph
    chunk with a `MultilangChunkMeta` dict stored under
    `chunk.metadata["multilang"]`.

    Examples

    Try it in your browser!
    ```
    >>> chunker = ParagraphChunker()
    >>> text = "First paragraph.\n\nSecond paragraph."
    >>> result = chunker.chunk(text)
    >>> len(result.chunks)
    2
    >>> chunker_ml = ParagraphChunker(
    ...     multilang_config=MultilangConfig(include_raw_text=True)
    ... )
    >>> result_ml = chunker_ml.chunk("مرحبا.\\n\\nHello.")
    >>> result_ml.chunks[0].metadata["multilang"]["script"]
    'arabic'

    ```
    Go BackOpen In Tab

    attach\_embedding(**chunk**, **vector**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_chunkers/_multilang_mixin.py#L783)[#](#scikitplot.corpus.ParagraphChunker.attach_embedding "Link to this definition")
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
        [`attach_embedding_batch`](#scikitplot.corpus.ParagraphChunker.attach_embedding_batch "scikitplot.corpus.ParagraphChunker.attach_embedding_batch") which avoids per-chunk dict copies.

        ****Developer note:**** Two embedding locations are written:

        1. `chunk.metadata["embedding"]` — top-level key compatible with
           `EmbeddedChunk` and vector store adapters.
        2. `chunk.metadata["multilang"]["embedding"]` — inside the
           multilang bundle for model provenance tracking.

    attach\_embedding\_batch(**chunks**, **vectors**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_chunkers/_multilang_mixin.py#L840)[#](#scikitplot.corpus.ParagraphChunker.attach_embedding_batch "Link to this definition")
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

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_chunkers/_paragraph.py#L339)[#](#scikitplot.corpus.ParagraphChunker.chunk "Link to this definition")
    :   Split **text** into paragraph-level chunks.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str, optional
            :   Document identifier stored in each chunk’s metadata.

            ****extra\_metadata****dict[str, Any], optional
            :   Additional key/value pairs merged into the result metadata.

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

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_chunkers/_paragraph.py#L456)[#](#scikitplot.corpus.ParagraphChunker.chunk_batch "Link to this definition")
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