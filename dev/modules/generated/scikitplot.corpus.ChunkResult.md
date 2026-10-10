# ChunkResult[#](#chunkresult "Link to this heading")

class scikitplot.corpus.ChunkResult(**chunks**, **metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_types.py#L380)[#](#scikitplot.corpus.ChunkResult "Link to this definition")
:   Container returned by every [`ChunkerProtocol`](scikitplot.corpus.ChunkerProtocol.html#scikitplot.corpus.ChunkerProtocol "scikitplot.corpus.ChunkerProtocol") implementation.

    Parameters:
    :   ****chunks****list[Chunk]
        :   Ordered list of chunks produced from a single document.
            May be empty if no content passes filtering.

        ****metadata****MetadataDict
        :   Aggregate metadata for the entire chunking run (e.g.
            `chunker`, `backend`, `total_chunks`, `doc_id`).

    Parameters:
    :   * ****chunks**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")**]**)
        * ****metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    `chunks` is a plain list stored by value. Because
    `frozen=True` prevents re-assignment of the `chunks` attribute,
    the list itself must not be mutated after construction.

    chunks: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[Chunk](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_types.py#L380)[#](#scikitplot.corpus.ChunkResult.chunks "Link to this definition")

    is\_empty()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_types.py#L403)[#](#scikitplot.corpus.ChunkResult.is_empty "Link to this definition")
    :   Return `True` if no chunks were produced.

        Returns:
        :   bool

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    iter\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_types.py#L431)[#](#scikitplot.corpus.ChunkResult.iter_chunks "Link to this definition")
    :   Yield chunks one at a time.

        Yields:
        :   Chunk

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.15)")[[**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")]

    metadata: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_types.py#L380)[#](#scikitplot.corpus.ChunkResult.metadata "Link to this definition")

    texts()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_types.py#L422)[#](#scikitplot.corpus.ChunkResult.texts "Link to this definition")
    :   Return the text of every chunk as a plain list.

        Returns:
        :   list[str]

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    total\_chars()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_types.py#L412)[#](#scikitplot.corpus.ChunkResult.total_chars "Link to this definition")
    :   Return the total character count across all chunks.

        Returns:
        :   int
            :   Sum of `len(c.text)` for all chunks.

        Return type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")