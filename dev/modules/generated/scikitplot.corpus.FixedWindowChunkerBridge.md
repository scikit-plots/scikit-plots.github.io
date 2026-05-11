# FixedWindowChunkerBridge[#](#fixedwindowchunkerbridge "Link to this heading")

class scikitplot.corpus.FixedWindowChunkerBridge(**inner**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_chunkers/_chunker_bridge.py#L304)[#](#scikitplot.corpus.FixedWindowChunkerBridge "Link to this definition")
:   Bridge for `FixedWindowChunker` → `ChunkerBase` contract.

    Parameters:
    :   ****inner**** (**Any**)

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_chunkers/_chunker_bridge.py#L159)[#](#scikitplot.corpus.FixedWindowChunkerBridge.chunk "Link to this definition")
    :   Chunk **text** and return a `ChunkedTextList` of `(char_start, chunk_text)` pairs.

        Backward compatible — all existing callers that iterate `(start, text)`
        pairs continue to work unchanged. Additionally, the
        `chunk_metadata_list` attribute on the returned object carries the
        per-chunk `chunk.metadata` dicts (including `"multilang"` when
        `MultilangConfig` is enabled) so
        `_base.DocumentReader.get_documents` can populate
        [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") multilang fields.

        Parameters:
        :   ****text****str
            :   Raw text to chunk.

            ****metadata****dict[str, Any] or None, optional
            :   Raw-chunk metadata dict passed by `get_documents()`.
                Forwarded as `extra_metadata` to the inner chunker
                where supported.

        Returns:
        :   ChunkedTextList
            :   Each element is `(char_offset, chunk_text)`.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   **ChunkedTextList**

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'fixed\_window'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.FixedWindowChunkerBridge.strategy "Link to this definition")