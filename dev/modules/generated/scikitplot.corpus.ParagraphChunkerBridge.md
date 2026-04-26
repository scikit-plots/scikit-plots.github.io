# ParagraphChunkerBridge[#](#paragraphchunkerbridge "Link to this heading")

class scikitplot.corpus.ParagraphChunkerBridge(**inner**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_chunker_bridge.py#L209)[#](#scikitplot.corpus.ParagraphChunkerBridge "Link to this definition")
:   Bridge for `ParagraphChunker` → `ChunkerBase` contract.

    Parameters:
    :   ****inner**** (**Any**)

    chunk(**text**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_chunker_bridge.py#L98)[#](#scikitplot.corpus.ParagraphChunkerBridge.chunk "Link to this definition")
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

    strategy: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy")] = 'paragraph'[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.ParagraphChunkerBridge.strategy "Link to this definition")