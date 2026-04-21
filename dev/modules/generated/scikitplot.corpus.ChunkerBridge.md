# ChunkerBridge[#](#chunkerbridge "Link to this heading")

class scikitplot.corpus.ChunkerBridge(**inner**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_chunkers/_chunker_bridge.py#L59)[#](#scikitplot.corpus.ChunkerBridge "Link to this definition")
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

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_chunkers/_chunker_bridge.py#L98)[#](#scikitplot.corpus.ChunkerBridge.chunk "Link to this definition")
    :   Chunk **text** and return `(char_start, chunk_text)` pairs.

        Parameters:
        :   ****text****str
            :   Raw text to chunk.

            ****metadata****dict[str, Any] or None, optional
            :   Raw-chunk metadata dict passed by `get_documents()`.
                Forwarded as `extra_metadata` to the inner chunker
                where supported.

        Returns:
        :   list[tuple[int, str]]
            :   Each element is `(char_offset, chunk_text)`.
                If the inner chunker does not provide offsets, a
                forward-cursor scan computes them.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]]

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")][#](#scikitplot.corpus.ChunkerBridge.strategy "Link to this definition")