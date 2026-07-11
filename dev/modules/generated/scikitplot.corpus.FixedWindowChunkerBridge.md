# FixedWindowChunkerBridge[#](#fixedwindowchunkerbridge "Link to this heading")

class scikitplot.corpus.FixedWindowChunkerBridge(**inner**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/corpus/_chunkers/_chunker_bridge.py#L307)[#](#scikitplot.corpus.FixedWindowChunkerBridge "Link to this definition")
:   Bridge for `FixedWindowChunker` → `ChunkerBase` contract.

    Parameters:
    :   ****inner**** (**Any**)

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/corpus/_chunkers/_chunker_bridge.py#L160)[#](#scikitplot.corpus.FixedWindowChunkerBridge.chunk "Link to this definition")
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

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'fixed\_window'[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.FixedWindowChunkerBridge.strategy "Link to this definition")