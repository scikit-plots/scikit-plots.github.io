# EmbeddedChunk[#](#embeddedchunk "Link to this heading")

class scikitplot.corpus.EmbeddedChunk(**chunk**, **embedding**, **model\_name**, **embedding\_dim**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L639)[#](#scikitplot.corpus.EmbeddedChunk "Link to this definition")
:   A [`Chunk`](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus.Chunk") decorated with a dense embedding vector.

    Parameters:
    :   ****chunk****Chunk
        :   The original text chunk.

        ****embedding****EmbeddingVector
        :   Dense float vector produced by an encoder model.

        ****model\_name****str
        :   Name / identifier of the encoder model used.

        ****embedding\_dim****int
        :   Dimensionality of the embedding vector.

    Parameters:
    :   * ****chunk**** ([**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk"))
        * ****embedding**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
        * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****embedding\_dim**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    `embedding_dim` is stored explicitly so consumers can validate
    without computing `len(embedding)` repeatedly.

    chunk: [Chunk](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L639)[#](#scikitplot.corpus.EmbeddedChunk.chunk "Link to this definition")

    embedding: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L639)[#](#scikitplot.corpus.EmbeddedChunk.embedding "Link to this definition")

    embedding\_dim: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L639)[#](#scikitplot.corpus.EmbeddedChunk.embedding_dim "Link to this definition")

    model\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L639)[#](#scikitplot.corpus.EmbeddedChunk.model_name "Link to this definition")

    validate\_dimension()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L665)[#](#scikitplot.corpus.EmbeddedChunk.validate_dimension "Link to this definition")
    :   Raise if `len(embedding) != embedding_dim`.

        Raises:
        :   ValueError
            :   If the embedding length does not match `embedding_dim`.

        Return type:
        :   None