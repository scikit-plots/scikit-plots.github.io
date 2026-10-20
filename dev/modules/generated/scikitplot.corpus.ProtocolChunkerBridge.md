# ProtocolChunkerBridge[#](#protocolchunkerbridge "Link to this heading")

class scikitplot.corpus.ProtocolChunkerBridge(**inner**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_chunker_bridge.py#L388)[#](#scikitplot.corpus.ProtocolChunkerBridge "Link to this definition")
:   Bridge for any chunker satisfying `ChunkerProtocol` (R3-1).

    A chunker registered in the `ComponentRegistry` is checked against
    `ChunkerProtocol` (`chunk(text, doc_id=None, extra_metadata=None)`
    returning a `ChunkResult`). This bridge lets every such chunker run in
    the pipeline; a class with a specific bridge (or a subclass of one) gets
    that bridge instead.

    Notes

    The strategy is the inner chunker’s own `strategy` when it declares one
    (a [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus.ChunkingStrategy") member or value), else `CUSTOM`: nothing is
    known about the boundaries a third-party chunker draws.

    Parameters:
    :   ****inner**** (**Any**)

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_chunker_bridge.py#L161)[#](#scikitplot.corpus.ProtocolChunkerBridge.chunk "Link to this definition")
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
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**ChunkResult**](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult")

        Notes

        Use `_to_tuples` to convert to the legacy
        `list[tuple[int, str]]` format if needed for backward compat.

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'custom'[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.ProtocolChunkerBridge.strategy "Link to this definition")