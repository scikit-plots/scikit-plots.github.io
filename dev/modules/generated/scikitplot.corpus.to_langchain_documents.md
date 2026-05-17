# to\_langchain\_documents[#](#to-langchain-documents "Link to this heading")

scikitplot.corpus.to\_langchain\_documents(**documents**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/corpus/_adapters.py#L165)[#](#scikitplot.corpus.to_langchain_documents "Link to this definition")
:   Convert `CorpusDocument` instances to LangChain `Document`.

    Parameters:
    :   ****documents****Sequence[CorpusDocument]
        :   Source documents.

    Returns:
    :   list[langchain\_core.documents.Document] or list[dict]
        :   LangChain Document objects. Falls back to equivalent dicts
            if `langchain_core` is not installed.

    Parameters:
    :   ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    Notes

    ****User note:**** These documents are directly usable with any
    LangChain retriever, chain, or agent:

    ```
    from langchain.chains import RetrievalQA

    lc_docs = to_langchain_documents(corpus_docs)
    # Feed to vector store, retriever, etc.

    ```

    Examples

    Try it in your browser!
    ```
    >>> lc_docs = to_langchain_documents(corpus_docs)
    >>> type(lc_docs[0]).__name__
    'Document'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples