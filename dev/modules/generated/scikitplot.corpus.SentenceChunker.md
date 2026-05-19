# SentenceChunker[#](#sentencechunker "Link to this heading")

class scikitplot.corpus.SentenceChunker(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/corpus/_chunkers/_sentence.py#L581)[#](#scikitplot.corpus.SentenceChunker "Link to this definition")
:   Split a document into sentence-level `Chunk` objects.

    Parameters:
    :   ****config****str or SentenceChunkerConfig or None, optional
        :   Three accepted forms:

            `None` (default)
            :   Constructs a [`SentenceChunkerConfig`](scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus.SentenceChunkerConfig") with all defaults:
                `REGEX` backend, `min_length=10`, no overlap.

            `str`
            :   Shorthand for the `SPACY` backend. The string is interpreted
                as the spaCy model name, equivalent to:

                ```
                SentenceChunkerConfig(
                    backend=SentenceBackend.SPACY,
                    spacy_model=<value>,
                )

                ```

            [`SentenceChunkerConfig`](scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus.SentenceChunkerConfig")
            :   Full explicit configuration.

    Raises:
    :   TypeError
        :   If **config** is not `str`, [`SentenceChunkerConfig`](scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus.SentenceChunkerConfig"), or `None`.

        ValueError
        :   If the resolved configuration is invalid (negative lengths, missing
            model name for SPACY backend, etc.).

    Parameters:
    :   ****config**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**SentenceChunkerConfig**](scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus.SentenceChunkerConfig") **|** **None**)

    Notes

    ****spaCy model caching**** — the loaded `nlp` object is stored in
    `self._nlp_cache` (a plain `dict`) keyed by model name. The cache
    is passed into `_split_spacy` on every call, so `spacy.load`
    is invoked at most once per model per chunker instance.

    Examples

    Try it in your browser!

    Default REGEX backend:

    ```
    >>> chunker = SentenceChunker()
    >>> result = chunker.chunk("Hello world. How are you? Fine thanks.")
    >>> len(result.chunks)
    3
    >>> result.chunks[0].text
    'Hello world.'

    ```

    spaCy shorthand (model name as string):

    ```
    >>> chunker = SentenceChunker("en_core_web_sm")
    >>> chunker.config.backend
    <SentenceBackend.SPACY: 'spacy'>
    >>> chunker.config.spacy_model
    'en_core_web_sm'

    ```

    Explicit config:

    ```
    >>> from scikitplot.corpus._chunkers._sentence import SentenceChunkerConfig
    >>> cfg = SentenceChunkerConfig(backend=SentenceBackend.NLTK, min_length=5)
    >>> chunker = SentenceChunker(cfg)

    ```
    Go BackOpen In Tab

    attach\_embedding(**chunk**, **vector**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/corpus/_chunkers/_multilang_mixin.py#L783)[#](#scikitplot.corpus.SentenceChunker.attach_embedding "Link to this definition")
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
        [`attach_embedding_batch`](#scikitplot.corpus.SentenceChunker.attach_embedding_batch "scikitplot.corpus.SentenceChunker.attach_embedding_batch") which avoids per-chunk dict copies.

        ****Developer note:**** Two embedding locations are written:

        1. `chunk.metadata["embedding"]` — top-level key compatible with
           `EmbeddedChunk` and vector store adapters.
        2. `chunk.metadata["multilang"]["embedding"]` — inside the
           multilang bundle for model provenance tracking.

    attach\_embedding\_batch(**chunks**, **vectors**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/corpus/_chunkers/_multilang_mixin.py#L840)[#](#scikitplot.corpus.SentenceChunker.attach_embedding_batch "Link to this definition")
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

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/corpus/_chunkers/_sentence.py#L790)[#](#scikitplot.corpus.SentenceChunker.chunk "Link to this definition")
    :   Split **text** into sentence-level chunks.

        Parameters:
        :   ****text****str
            :   Raw document text.

            ****doc\_id****str, optional
            :   Document identifier stored in chunk metadata.

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

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/corpus/_chunkers/_sentence.py#L902)[#](#scikitplot.corpus.SentenceChunker.chunk_batch "Link to this definition")
    :   Chunk a list of documents.

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
            :   If **doc\_ids** length does not match **texts** length.

        Parameters:
        :   * ****texts**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****doc\_ids**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[**ChunkResult**]

    property config: [SentenceChunkerConfig](scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus._chunkers._sentence.SentenceChunkerConfig")[#](#scikitplot.corpus.SentenceChunker.config "Link to this definition")
    :   The resolved [`SentenceChunkerConfig`](scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus.SentenceChunkerConfig") for this instance.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](../../auto_examples/corpus/plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](../../auto_examples/corpus/plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples