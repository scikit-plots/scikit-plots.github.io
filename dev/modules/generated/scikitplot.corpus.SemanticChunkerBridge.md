# SemanticChunkerBridge[#](#semanticchunkerbridge "Link to this heading")

class scikitplot.corpus.SemanticChunkerBridge(**inner**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_chunkers/_chunker_bridge.py#L342)[#](#scikitplot.corpus.SemanticChunkerBridge "Link to this definition")
:   Bridge for `SemanticChunker` → `ChunkerBase` contract.

    The [`SemanticChunker`](scikitplot.corpus.SemanticChunker.html#scikitplot.corpus.SemanticChunker "scikitplot.corpus._chunkers._semantic.SemanticChunker") (Layer 3) is a new-style
    chunker that returns [`ChunkResult`](scikitplot.corpus.ChunkResult.html#scikitplot.corpus.ChunkResult "scikitplot.corpus._types.ChunkResult") objects. This
    bridge adapts it to the `ChunkerBase` interface so it can be
    passed directly to [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline") and
    [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader") without modification.

    `SEMANTIC` is used as the strategy value. If
    [`ChunkingStrategy`](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy") does not yet define a
    `SEMANTIC` member, `CUSTOM` is used as a fallback so the
    bridge never raises an [`AttributeError`](https://docs.python.org/3/builtins/exceptions.html#AttributeError "(in Python v3.15)").

    Notes

    ****User note:**** Pass `SemanticChunker(...)` directly to
    [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline") — the bridge is applied
    automatically via [`bridge_chunker`](scikitplot.corpus.bridge_chunker.html#scikitplot.corpus.bridge_chunker "scikitplot.corpus.bridge_chunker").

    ****Developer note:**** Multilang metadata in `chunk.metadata["multilang"]`
    flows through [`ChunkedTextList`](scikitplot.corpus.ChunkedTextList.html#scikitplot.corpus.ChunkedTextList "scikitplot.corpus.ChunkedTextList") to
    `_base.DocumentReader.get_documents` which maps it to
    [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") fields.

    Parameters:
    :   ****inner**** (**Any**)

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_chunkers/_chunker_bridge.py#L160)[#](#scikitplot.corpus.SemanticChunkerBridge.chunk "Link to this definition")
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

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'semantic'[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SemanticChunkerBridge.strategy "Link to this definition")