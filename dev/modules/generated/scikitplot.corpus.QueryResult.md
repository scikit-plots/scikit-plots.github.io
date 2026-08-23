# QueryResult[#](#queryresult "Link to this heading")

class scikitplot.corpus.QueryResult(**documents**, **total**, **query**, **filter\_support=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_storage/_storage.py#L158)[#](#scikitplot.corpus.QueryResult "Link to this definition")
:   Result container returned by [`StorageBase.query`](scikitplot.corpus.StorageBase.html#scikitplot.corpus.StorageBase.query "scikitplot.corpus.StorageBase.query").

    Parameters:
    :   ****documents****list[CorpusDocument]
        :   Page of results matching the query.

        ****total****int
        :   Total number of matching documents (before `limit`/`offset`).

        ****query****StorageQuery
        :   The query that produced this result (for traceability).

        ****filter\_support****dict[str, FilterSupport], optional
        :   Per-filter account of how each **requested** filter was handled. Filters
            the caller did not set do not appear.

    Parameters:
    :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)
        * ****total**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****query**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))
        * ****filter\_support**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **FilterSupport****]**)

    Notes

    ****Developer.**** `filter_support` is a required part of the result rather
    than an optional courtesy, so a backend cannot quietly drop a filter it does
    not implement (ADR-R07-002).

    Examples

    Try it in your browser!
    ```
    >>> # a caller can assert the filter actually ran
    >>> # result.filter_support["full_text"] is FilterSupport.EMULATED

    ```
    Go BackOpen In Tab

    documents: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[CorpusDocument](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")][[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_storage/_storage.py#L158)[#](#scikitplot.corpus.QueryResult.documents "Link to this definition")

    property emulated\_filters: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][#](#scikitplot.corpus.QueryResult.emulated_filters "Link to this definition")
    :   Names of filters answered by a fallback path rather than natively.

    filter\_support: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), FilterSupport][[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_storage/_storage.py#L158)[#](#scikitplot.corpus.QueryResult.filter_support "Link to this definition")

    property has\_more: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.QueryResult.has_more "Link to this definition")
    :   Return `True` if there are more pages beyond this one.

    query: [StorageQuery](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery")[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_storage/_storage.py#L158)[#](#scikitplot.corpus.QueryResult.query "Link to this definition")

    require\_native()[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_storage/_storage.py#L206)[#](#scikitplot.corpus.QueryResult.require_native "Link to this definition")
    :   Raise if any requested filter was emulated rather than native.

        Raises:
        :   RuntimeError
            :   If any filter reports `FilterSupport.EMULATED`.

        Return type:
        :   None

        Notes

        ****User.**** Call this when emulation is not acceptable – for example
        when comparing ranking quality across backends, where a substring scan
        and an FTS5 index are not interchangeable.

    total: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/71eae2e/scikitplot/corpus/_storage/_storage.py#L158)[#](#scikitplot.corpus.QueryResult.total "Link to this definition")