# ChunkerBase[#](#chunkerbase "Link to this heading")

class scikitplot.corpus.ChunkerBase[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/corpus/_base.py#L234)[#](#scikitplot.corpus.ChunkerBase "Link to this definition")
:   Abstract base class for all text chunkers.

    A chunker receives a block of raw text (one logical unit from the
    source document — a page, paragraph block, section, etc.) and returns
    a list of `(char_start, chunk_text)` tuples. The `char_start`
    offset is relative to the beginning of the input text block, enabling
    downstream code to reconstruct absolute character positions.

    Parameters:
    :   ****None — subclasses define their own parameters.****

    Attributes:
    :   ****strategy****ChunkingStrategy
        :   Class variable. Identifies which [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus.ChunkingStrategy") enum
            member this chunker implements. Must be defined by every concrete
            subclass.

    > **See also**
    > `scikitplot.corpus._chunkers.SentenceChunker`
    :   spaCy sentence segmentation.

    `scikitplot.corpus._chunkers.ParagraphChunker`
    :   Blank-line paragraph split.

    `scikitplot.corpus._chunkers.FixedWindowChunker`
    :   Sliding-window with overlap.

    Notes

    Chunkers must be ****stateless**** between `chunk()` calls. Any state
    required for a single call (e.g. a loaded language model) must be
    initialised inside `chunk()` or cached as an instance attribute that
    is never mutated after first assignment.

    Examples

    Try it in your browser!

    Implementing a trivial single-chunk chunker (no splitting):

    ```
    >>> class NullChunker(ChunkerBase):
    ...     strategy = ChunkingStrategy.NONE
    ...
    ...     def chunk(self, text, metadata=None):
    ...         return [(0, text)] if text.strip() else []

    ```
    Go BackOpen In Tab

    assert\_modality(**doc\_modality**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/corpus/_base.py#L352)[#](#scikitplot.corpus.ChunkerBase.assert_modality "Link to this definition")
    :   Raise `ValueError` if this chunker cannot handle **doc\_modality**.

        Parameters:
        :   ****doc\_modality****Modality
            :   The modality of the document about to be chunked.

        Raises:
        :   ValueError
            :   If **doc\_modality** is not in [`supported_modalities`](#scikitplot.corpus.ChunkerBase.supported_modalities "scikitplot.corpus.ChunkerBase.supported_modalities").

        Parameters:
        :   ****doc\_modality**** ([**Modality**](scikitplot.corpus.Modality.html#scikitplot.corpus.Modality "scikitplot.corpus._schema.Modality"))

        Return type:
        :   None

        Notes

        HIGH-03c fix: call this at the start of [`chunk`](#scikitplot.corpus.ChunkerBase.chunk "scikitplot.corpus.ChunkerBase.chunk") to prevent
        silent garbage output when the wrong chunker is applied to a
        non-TEXT document. Example:

        ```
        def chunk(self, text, metadata=None):
            self.assert_modality(
                Modality((metadata or {}).get("modality", Modality.TEXT))
            )
            ...

        ```

    abstractmethod chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/corpus/_base.py#L304)[#](#scikitplot.corpus.ChunkerBase.chunk "Link to this definition")
    :   Segment `text` into a `ChunkResult`.

        ****CRITICAL-02 (Phase 2):**** Return type unified to `ChunkResult`
        across all implementations. Callers iterate `result.chunks`
        directly; the intermediate `list[tuple[int, str]]` contract
        has been retired.

        Parameters:
        :   ****text****str
            :   Raw text to segment. Must not be `None`. Empty string input
                must return a `ChunkResult` with an empty `chunks` list
                (never raise).

            ****metadata****dict or None, optional
            :   Chunk-level metadata from the reader (e.g. page number, section
                type). Available so chunkers that need context can access it.
                Default: `None`.

        Returns:
        :   ChunkResult
            :   Ordered list of `Chunk` objects.
                Each chunk carries `text`, `start_char`, `end_char`, and
                `metadata`. The list must be non-empty only when **text**
                contains meaningful content.

        Raises:
        :   ValueError
            :   If `text` is `None` (not just empty).

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   **ChunkResult**

        Notes

        ****Backward compat:**** [`ChunkerBridge`](scikitplot.corpus.ChunkerBridge.html#scikitplot.corpus.ChunkerBridge "scikitplot.corpus._chunkers._chunker_bridge.ChunkerBridge")
        wraps all new-style standalone chunkers and returns `ChunkResult`
        from its `chunk()` method. Pre-CRITICAL-02 user subclasses of
        `ChunkerBase` that return `list[tuple[int, str]]` should migrate
        to `ChunkResult`; the pipeline will raise `AttributeError` if
        `chunk_result.chunks` is not accessible.

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")][#](#scikitplot.corpus.ChunkerBase.strategy "Link to this definition")
    :   Identifies which [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")
        this implementation provides. ****Must**** be defined on every concrete subclass.

    supported\_modalities: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")[[Modality](scikitplot.corpus.Modality.html#scikitplot.corpus.Modality "scikitplot.corpus._schema.Modality")]] = frozenset({Modality.TEXT})[#](#scikitplot.corpus.ChunkerBase.supported_modalities "Link to this definition")
    :   `{Modality.TEXT}`.
        Subclasses that support additional modalities (e.g. AUDIO transcripts)
        must override this set.

        Type:
        :   Modalities this chunker can handle. Default

    version: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] = '1.0.0'[#](#scikitplot.corpus.ChunkerBase.version "Link to this definition")
    :   `"1.0.0"`.
        Subclasses must override to reflect their actual version so that corpus
        snapshots remain reproducible after upgrades.

        Type:
        :   SemVer string for this chunker implementation. Default