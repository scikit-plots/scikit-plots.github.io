# LangChainCorpusRetriever[#](#langchaincorpusretriever "Link to this heading")

class scikitplot.corpus.LangChainCorpusRetriever(**index**, **embedding\_fn=None**, **config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_adapters.py#L519)[#](#scikitplot.corpus.LangChainCorpusRetriever "Link to this definition")
:   LangChain-compatible retriever backed by `SimilarityIndex`.

    Parameters:
    :   ****index****SimilarityIndex
        :   A built similarity index.

        ****embedding\_fn****Callable[[str], list[float]] or None, optional
        :   Function to embed query text. Required for SEMANTIC mode.

        ****config****SearchConfig or None, optional
        :   Default search configuration.

    Parameters:
    :   * ****index**** (**Any**)
        * ****embedding\_fn**** (**Any**)
        * ****config**** (**Any**)

    > **See also**
    > `scikitplot.corpus._similarity.SimilarityIndex`
    :   The underlying search engine.

    Notes

    ****User note:**** Plug into any LangChain chain:

    ```
    retriever = LangChainCorpusRetriever(index, embedding_fn)
    chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=retriever,
    )

    ```

    This class implements the `BaseRetriever` interface if
    `langchain_core` is installed, otherwise it provides a
    compatible `get_relevant_documents` method.

    get\_relevant\_documents(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_adapters.py#L576)[#](#scikitplot.corpus.LangChainCorpusRetriever.get_relevant_documents "Link to this definition")
    :   Retrieve documents relevant to **query**.

        Parameters:
        :   ****query****str
            :   Natural language query.

        Returns:
        :   list[langchain\_core.documents.Document] or list[dict]
            :   LangChain-compatible documents.

        Parameters:
        :   ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    invoke(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_adapters.py#L576)[#](#scikitplot.corpus.LangChainCorpusRetriever.invoke "Link to this definition")
    :   Retrieve documents relevant to **query**.

        Parameters:
        :   ****query****str
            :   Natural language query.

        Returns:
        :   list[langchain\_core.documents.Document] or list[dict]
            :   LangChain-compatible documents.

        Parameters:
        :   ****query**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]