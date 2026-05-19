# to\_rag\_tuples[#](#to-rag-tuples "Link to this heading")

scikitplot.corpus.to\_rag\_tuples(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_adapters.py#L444)[#](#scikitplot.corpus.to_rag_tuples "Link to this definition")
:   Convert documents to `(text, metadata, embedding)` tuples.

    Parameters:
    :   ****documents****Sequence[CorpusDocument]
        :   Source documents.

    Returns:
    :   list[tuple[str, dict, Any]]
        :   Each tuple is `(text, metadata_dict, embedding_or_None)`.
            Compatible with most vector store `upsert` interfaces.

    Parameters:
    :   ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")], [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]]

    Notes

    ****User note:**** Feed directly to any vector store:

    ```
    for text, meta, emb in to_rag_tuples(docs):
        vector_store.upsert(id=meta["doc_id"], vector=emb, metadata=meta, text=text)

    ```

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples