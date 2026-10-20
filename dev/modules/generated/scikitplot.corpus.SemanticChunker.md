# SemanticChunker[#](#semanticchunker "Link to this heading")

class scikitplot.corpus.SemanticChunker(**config=None**, **\***, **adapter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_semantic.py#L213)[#](#scikitplot.corpus.SemanticChunker "Link to this definition")
:   Embedding-aware, writing-system-aware semantic chunker (Layer 3).

    Combines Layer 1 ([`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSegmenter")) and
    Layer 2 ([`WritingSystemAdapter`](scikitplot.corpus.WritingSystemAdapter.html#scikitplot.corpus.WritingSystemAdapter "scikitplot.corpus._chunkers._writing_system.WritingSystemAdapter")) for
    linguistically correct segmentation across all Unicode scripts, then
    optionally refines boundaries with sentence-transformers embeddings.

    Parameters:
    :   ****config****SemanticChunkerConfig, optional
        :   Full configuration. Default: HYBRID backend, multilingual mpnet.

        ****adapter****WritingSystemAdapter or None, optional
        :   Layer 2 adapter injected via Dependency Injection (Q5).
            When `None`, a default adapter is constructed from
            `config.adapter_unit`. Pass a custom adapter to swap
            per-script strategies without subclassing.

    Parameters:
    :   * ****config**** ([**SemanticChunkerConfig**](scikitplot.corpus.SemanticChunkerConfig.html#scikitplot.corpus.SemanticChunkerConfig "scikitplot.corpus.SemanticChunkerConfig") **|** **None**)
        * ****adapter**** ([**WritingSystemAdapter**](scikitplot.corpus.WritingSystemAdapter.html#scikitplot.corpus.WritingSystemAdapter "scikitplot.corpus.WritingSystemAdapter") **|** **None**)

    Notes

    ****User note:**** Install `sentence-transformers` and `regex` for
    full HYBRID functionality:

    ```
    pip install sentence-transformers regex

    ```

    For MORPHOLOGICAL-only mode (no embeddings, fully offline), set
    `backend=SemanticBackend.MORPHOLOGICAL`.

    ****User note (raw text):**** Set
    `multilang_config=MultilangConfig(include_raw_text=True,
    include_preprocessing_trace=True)` to preserve the pre-NFC raw text
    alongside the normalised text in each chunk for comparison.

    ****Developer note (Q5 — Dependency Injection):**** `adapter` is a
    constructor parameter, not an internal attribute. This makes
    [`SemanticChunker`](#scikitplot.corpus.SemanticChunker "scikitplot.corpus.SemanticChunker") fully testable without touching the global
    strategy registry, and composable with custom strategies.

    ****Developer note (embedding hook):**** Call
    [`attach_embedding_batch`](#scikitplot.corpus.SemanticChunker.attach_embedding_batch "scikitplot.corpus.SemanticChunker.attach_embedding_batch") after chunking to add vectors to
    existing chunks without re-running the full pipeline.

    Examples

    Try it in your browser!
    ```
    >>> chunker = SemanticChunker()
    >>> result = chunker.chunk("Hello world. مرحبا بالعالم。")
    >>> result.chunks[0].metadata["multilang"]["script"]
    'latin'

    ```
    ```
    >>> # MORPHOLOGICAL only — no network, no GPU
    >>> from ._semantic import SemanticBackend, SemanticChunkerConfig
    >>> cfg = SemanticChunkerConfig(backend=SemanticBackend.MORPHOLOGICAL)
    >>> chunker_morph = SemanticChunker(cfg)

    ```
    ```
    >>> # Inject custom adapter
    >>> from ._writing_system import WritingSystemAdapter, WritingSystemAdapterConfig
    >>> adapter = WritingSystemAdapter(WritingSystemAdapterConfig(unit="sentence"))
    >>> chunker_sent = SemanticChunker(adapter=adapter)

    ```
    Go BackOpen In Tab

    attach\_embedding(**chunk**, **vector**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_multilang_mixin.py#L788)[#](#scikitplot.corpus.SemanticChunker.attach_embedding "Link to this definition")
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
        :   * ****chunk**** ([**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk"))
            * ****vector**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")

        Notes

        ****User note:**** For batch embedding, use
        [`attach_embedding_batch`](#scikitplot.corpus.SemanticChunker.attach_embedding_batch "scikitplot.corpus.SemanticChunker.attach_embedding_batch") which avoids per-chunk dict copies.

        ****Developer note:**** Two embedding locations are written:

        1. `chunk.metadata["embedding"]` — top-level key compatible with
           `EmbeddedChunk` and vector store adapters.
        2. `chunk.metadata["multilang"]["embedding"]` — inside the
           multilang bundle for model provenance tracking.

    attach\_embedding\_batch(**chunks**, **vectors**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_multilang_mixin.py#L845)[#](#scikitplot.corpus.SemanticChunker.attach_embedding_batch "Link to this definition")
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
        :   * ****chunks**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")**]**)
            * ****vectors**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****]**)
            * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]

    chunk(**text**, **doc\_id=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_semantic.py#L577)[#](#scikitplot.corpus.SemanticChunker.chunk "Link to this definition")
    :   Segment **text** using Layer 1 → Layer 2 → optional Layer 3.

        Parameters:
        :   ****text****str
            :   NFC-normalised (or raw, will be normalised internally) text.

            ****doc\_id****str, optional
            :   Document identifier stored in each chunk’s metadata.

            ****extra\_metadata****dict[str, Any], optional
            :   Extra key/value pairs merged into result metadata.

        Returns:
        :   ChunkResult
            :   Ordered chunks with multilang metadata.

        Raises:
        :   TypeError
            :   If **text** is not a `str`.

            ValueError
            :   If **text** is empty or whitespace-only, or contains NUL bytes
                or lone surrogates.

            ImportError
            :   If EMBEDDING or HYBRID is configured, `sentence-transformers`
                is not installed and `allow_fallback=False`.

            RuntimeError
            :   If the model failed to load and `allow_fallback=False` (chained
                from the load error).

            Exception
            :   Whatever the embedding model raised while encoding, when
                `allow_fallback=False`.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**ChunkResult**](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult")

        Notes

        ****Algorithm:****

        1. Input validation (NUL / surrogate guard).
        2. Multilang preprocessing trace (BOM strip → control strip → NFC).
        3. Layer 1: ScriptSegmenter → ScriptSpan list.
        4. Layer 2: WritingSystemAdapter → per-script Chunk list.
        5. Min/max token filtering and enforcement.
        6. EMBEDDING / HYBRID: boundary refinement via cosine similarity; a
           missing package, a model that fails to load or a model that fails
           to encode falls back to MORPHOLOGICAL (see
           `SemanticChunkerConfig.allow_fallback`).
        7. MultilangMixin: enrich each chunk with MultilangChunkMeta; the
           model is recorded only when it was called for this text.

    chunk\_batch(**texts**, **doc\_ids=None**, **extra\_metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_semantic.py#L908)[#](#scikitplot.corpus.SemanticChunker.chunk_batch "Link to this definition")
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
        :   * ****texts**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****doc\_ids**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****extra\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ChunkResult**](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult")]

    property config: [SemanticChunkerConfig](scikitplot.corpus.SemanticChunkerConfig.html#scikitplot.corpus.SemanticChunkerConfig "scikitplot.corpus._chunkers._semantic.SemanticChunkerConfig")[#](#scikitplot.corpus.SemanticChunker.config "Link to this definition")
    :   The resolved [`SemanticChunkerConfig`](scikitplot.corpus.SemanticChunkerConfig.html#scikitplot.corpus.SemanticChunkerConfig "scikitplot.corpus.SemanticChunkerConfig") for this instance (read-only).

    config\_class[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_semantic.py#L121)[#](#scikitplot.corpus.SemanticChunker.config_class "Link to this definition")
    :   alias of [`SemanticChunkerConfig`](scikitplot.corpus.SemanticChunkerConfig.html#scikitplot.corpus.SemanticChunkerConfig "scikitplot.corpus._chunkers._semantic.SemanticChunkerConfig")

    text\_is\_source\_slice = True[#](#scikitplot.corpus.SemanticChunker.text_is_source_slice "Link to this definition")
    :   Whether each chunk’s text is `source[context_span]` (R3-3).

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text