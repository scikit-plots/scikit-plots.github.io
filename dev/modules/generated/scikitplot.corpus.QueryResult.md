# QueryResult[#](#queryresult "Link to this heading")

class scikitplot.corpus.QueryResult(**documents**, **total**, **query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_storage/_storage.py#L102)[#](#scikitplot.corpus.QueryResult "Link to this definition")
:   Result container returned by [`StorageBase.query`](scikitplot.corpus.StorageBase.html#scikitplot.corpus.StorageBase.query "scikitplot.corpus.StorageBase.query").

    Parameters:
    :   ****documents****list[CorpusDocument]
        :   Page of results matching the query.

        ****total****int
        :   Total number of matching documents (before `limit`/`offset`).

        ****query****StorageQuery
        :   The query that produced this result (for traceability).

    Parameters:
    :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)
        * ****total**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****query**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

    documents: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[CorpusDocument](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")][[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_storage/_storage.py#L102)[#](#scikitplot.corpus.QueryResult.documents "Link to this definition")

    property has\_more: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.QueryResult.has_more "Link to this definition")
    :   Return `True` if there are more pages beyond this one.

    query: [StorageQuery](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery")[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_storage/_storage.py#L102)[#](#scikitplot.corpus.QueryResult.query "Link to this definition")

    total: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_storage/_storage.py#L102)[#](#scikitplot.corpus.QueryResult.total "Link to this definition")