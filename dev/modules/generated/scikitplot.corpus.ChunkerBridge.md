# ChunkerBridge[#](#chunkerbridge "Link to this heading")

class scikitplot.corpus.ChunkerBridge(**inner**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_chunkers/_chunker_bridge.py#L121)[#](#scikitplot.corpus.ChunkerBridge "Link to this definition")
:   Adapter that wraps a new-style chunker as a `ChunkerBase`-
    compatible object.

    Parameters:
    :   ****inner****object
        :   The new-style chunker instance (`SentenceChunker`,
            `ParagraphChunker`, `FixedWindowChunker`, or
            `WordChunker`).

    Attributes:
    :   ****strategy****ChunkingStrategy
        :   Required by `_base.py:get_documents()` line 739.

        ****inner****object
        :   The wrapped chunker — retained for direct access to the
            richer `ChunkResult` API when needed.

    Parameters:
    :   ****inner**** (**Any**)

    Notes

    ****Developer note:**** `_base.py` calls exactly two things on a
    chunker:

    1. `self.chunker.strategy` — a `ChunkingStrategy` enum value.
    2. `self.chunker.chunk(text, metadata=raw_chunk)`
       → `list[tuple[int, str]]` where `int` is `char_start`
       and `str` is the chunk text.

    This bridge satisfies both without touching `ChunkerBase` or
    the new chunkers.

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_chunkers/_chunker_bridge.py#L160)[#](#scikitplot.corpus.ChunkerBridge.chunk "Link to this definition")
    :   Chunk **text** and return a `ChunkResult`.

        ****CRITICAL-02 (Phase 2):**** Returns `ChunkResult` directly.
        [`DocumentReader.get_documents`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.get_documents "scikitplot.corpus.DocumentReader.get_documents") now iterates
        `chunk_result.chunks` instead of `(char_start, chunk_text)`
        tuples.

        Parameters:
        :   ****text****str
            :   Raw text to chunk.

            ****metadata****dict[str, Any] or None, optional
            :   Raw-chunk metadata dict passed by `get_documents()`.
                Forwarded as `extra_metadata` to the inner chunker.

        Returns:
        :   ChunkResult
            :   Ordered list of `Chunk` objects with
                `text`, `start_char`, `end_char`, and `metadata`.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   **ChunkResult**

        Notes

        Use `_to_tuples` to convert to the legacy
        `list[tuple[int, str]]` format if needed for backward compat.

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")][#](#scikitplot.corpus.ChunkerBridge.strategy "Link to this definition")