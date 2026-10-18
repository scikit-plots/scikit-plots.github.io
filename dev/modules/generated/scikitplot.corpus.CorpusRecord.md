# CorpusRecord[#](#corpusrecord "Link to this heading")

class scikitplot.corpus.CorpusRecord(**record\_id**, **chunk**, **doc\_id**, **collection**, **created\_at**, **embedding=None**, **storage\_metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L733)[#](#scikitplot.corpus.CorpusRecord "Link to this definition")
:   A persisted record combining a [`Chunk`](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus.Chunk") with storage metadata.

    Parameters:
    :   ****record\_id****str
        :   Unique storage record identifier (e.g. UUID or hash).

        ****chunk****Chunk
        :   The stored text chunk.

        ****doc\_id****str
        :   Parent document identifier.

        ****collection****str
        :   Storage collection / table / index name.

        ****created\_at****str
        :   ISO-8601 creation timestamp (`YYYY-MM-DDTHH:MM:SSZ`).

        ****embedding****EmbeddingVector or None
        :   Optional pre-computed embedding for this record.

        ****storage\_metadata****MetadataDict
        :   Backend-specific storage metadata.

    Parameters:
    :   * ****record\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****chunk**** ([**Chunk**](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk"))
        * ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****collection**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****created\_at**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****embedding**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)
        * ****storage\_metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    `created_at` is stored as a string to avoid importing `datetime`
    and to remain fully JSON-serialisable without extra encoders.

    chunk: [Chunk](scikitplot.corpus.Chunk.html#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L733)[#](#scikitplot.corpus.CorpusRecord.chunk "Link to this definition")

    collection: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L733)[#](#scikitplot.corpus.CorpusRecord.collection "Link to this definition")

    created\_at: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L733)[#](#scikitplot.corpus.CorpusRecord.created_at "Link to this definition")

    doc\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L733)[#](#scikitplot.corpus.CorpusRecord.doc_id "Link to this definition")

    embedding: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorpusRecord.embedding "Link to this definition")

    record\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L733)[#](#scikitplot.corpus.CorpusRecord.record_id "Link to this definition")

    storage\_metadata: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L733)[#](#scikitplot.corpus.CorpusRecord.storage_metadata "Link to this definition")