# RetrievalQuery[#](#retrievalquery "Link to this heading")

class scikitplot.corpus.RetrievalQuery(**query\_id**, **text**, **top\_k=10**, **filters=<factory>**, **embedding=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L605)[#](#scikitplot.corpus.RetrievalQuery "Link to this definition")
:   A query submitted to the corpus retrieval layer.

    Parameters:
    :   ****query\_id****str
        :   Unique query identifier.

        ****text****str
        :   Raw query text.

        ****top\_k****int
        :   Maximum number of results to return.

        ****filters****MetadataDict
        :   Metadata filter predicates (e.g. `{"doc_id": "d1"}`).

        ****embedding****EmbeddingVector or None
        :   Pre-computed query embedding. When `None`, the retrieval
            backend is responsible for encoding the query text.

    Parameters:
    :   * ****query\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****filters**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****embedding**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    embedding: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalQuery.embedding "Link to this definition")

    filters: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L605)[#](#scikitplot.corpus.RetrievalQuery.filters "Link to this definition")

    query\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L605)[#](#scikitplot.corpus.RetrievalQuery.query_id "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_types.py#L605)[#](#scikitplot.corpus.RetrievalQuery.text "Link to this definition")

    top\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 10[#](#scikitplot.corpus.RetrievalQuery.top_k "Link to this definition")