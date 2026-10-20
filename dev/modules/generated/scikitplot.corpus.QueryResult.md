# QueryResult[#](#queryresult "Link to this heading")

class scikitplot.corpus.QueryResult(**documents**, **total**, **query**, **filter\_support=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L174)[#](#scikitplot.corpus.QueryResult "Link to this definition")
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
    :   * ****documents**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)
        * ****total**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****query**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))
        * ****filter\_support**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**FilterSupport**](scikitplot.corpus.FilterSupport.html#scikitplot.corpus.FilterSupport "scikitplot.corpus._storage._storage.FilterSupport")**]**)

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

    documents: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[CorpusDocument](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L174)[#](#scikitplot.corpus.QueryResult.documents "Link to this definition")

    property emulated\_filters: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.corpus.QueryResult.emulated_filters "Link to this definition")
    :   Names of filters answered by a fallback path rather than natively.

    filter\_support: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [FilterSupport](scikitplot.corpus.FilterSupport.html#scikitplot.corpus.FilterSupport "scikitplot.corpus._storage._storage.FilterSupport")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L174)[#](#scikitplot.corpus.QueryResult.filter_support "Link to this definition")

    property has\_more: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.QueryResult.has_more "Link to this definition")
    :   Return `True` if there are more pages beyond this one.

    query: [StorageQuery](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L174)[#](#scikitplot.corpus.QueryResult.query "Link to this definition")

    require\_native()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L222)[#](#scikitplot.corpus.QueryResult.require_native "Link to this definition")
    :   Raise if any requested filter was emulated rather than native.

        Raises:
        :   RuntimeError
            :   If any filter reports [`FilterSupport.EMULATED`](scikitplot.corpus.FilterSupport.html#scikitplot.corpus.FilterSupport.EMULATED "scikitplot.corpus.FilterSupport.EMULATED").

        Return type:
        :   None

        Notes

        ****User.**** Call this when emulation is not acceptable – for example
        when comparing ranking quality across backends, where a substring scan
        and an FTS5 index are not interchangeable.

    total: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L174)[#](#scikitplot.corpus.QueryResult.total "Link to this definition")