# ChunkHit[#](#chunkhit "Link to this heading")

class scikitplot.corpus.ChunkHit(**chunk**, **score**, **rank**, **retrieval\_metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L706)[#](#scikitplot.corpus.ChunkHit "Link to this definition")
:   A single result returned from the corpus retrieval layer.

    Parameters:
    :   ****chunk****Chunk
        :   The matched text chunk.

        ****score****float
        :   Similarity / relevance score (higher is better for cosine).

        ****rank****int
        :   Zero-based rank within the result set.

        ****retrieval\_metadata****MetadataDict
        :   Backend-specific metadata (distance, recall@k, …).

    Parameters:
    :   * ****chunk**** ([**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****rank**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****retrieval\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    chunk: [Chunk](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L706)[#](#scikitplot.corpus.ChunkHit.chunk "Link to this definition")

    rank: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L706)[#](#scikitplot.corpus.ChunkHit.rank "Link to this definition")

    retrieval\_metadata: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L706)[#](#scikitplot.corpus.ChunkHit.retrieval_metadata "Link to this definition")

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L706)[#](#scikitplot.corpus.ChunkHit.score "Link to this definition")