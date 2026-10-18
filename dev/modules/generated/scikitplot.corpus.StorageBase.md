# StorageBase[#](#storagebase "Link to this heading")

class scikitplot.corpus.StorageBase[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_storage/_storage.py#L249)[#](#scikitplot.corpus.StorageBase "Link to this definition")
:   Abstract base class for all corpus storage backends.

    All implementations must be safe to construct and use without holding
    any external resource until the first `save`/`get` call.

    > **See also**
    > [`InMemoryStorage`](scikitplot.corpus.InMemoryStorage.html#scikitplot.corpus.InMemoryStorage "scikitplot.corpus.InMemoryStorage")
    :   Dict-backed, testing only.

    [`JSONLStorage`](scikitplot.corpus.JSONLStorage.html#scikitplot.corpus.JSONLStorage "scikitplot.corpus.JSONLStorage")
    :   Flat JSONL file, zero dependencies.

    [`SQLiteStorage`](scikitplot.corpus.SQLiteStorage.html#scikitplot.corpus.SQLiteStorage "scikitplot.corpus.SQLiteStorage")
    :   SQLite with FTS5, no external dependencies.

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_storage/_storage.py#L329)[#](#scikitplot.corpus.StorageBase.close "Link to this definition")
    :   Release the backend’s resources; safe to call more than once.

        The default holds nothing and does nothing. A backend that holds a
        connection or a file ([`SQLiteStorage`](scikitplot.corpus.SQLiteStorage.html#scikitplot.corpus.SQLiteStorage "scikitplot.corpus.SQLiteStorage")) overrides it.

        Notes

        ****User.**** Prefer `with SQLiteStorage(path) as store: ...`: the
        connection is closed when the block ends, also on an error. An
        unclosed SQLite connection is reported as a `ResourceWarning` by
        Python 3.13 and later when it is garbage-collected (R3-8).

        Return type:
        :   None

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_storage/_storage.py#L316)[#](#scikitplot.corpus.StorageBase.count "Link to this definition")
    :   Return the total number of stored documents.

        Default implementation uses a `StorageQuery` with no filters.
        Override for backends that can compute this more efficiently.

        Returns:
        :   int

        Return type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    abstractmethod get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_storage/_storage.py#L285)[#](#scikitplot.corpus.StorageBase.get "Link to this definition")
    :   Retrieve a document by its identifier.

        Parameters:
        :   ****doc\_id****str
            :   The `CorpusDocument.doc_id` to look up.

        Returns:
        :   CorpusDocument or None
            :   The stored document, or `None` if not found.

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") | None

    abstractmethod query(**q**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_storage/_storage.py#L301)[#](#scikitplot.corpus.StorageBase.query "Link to this definition")
    :   Retrieve documents matching the query parameters.

        Parameters:
        :   ****q****StorageQuery
            :   Query specification.

        Returns:
        :   QueryResult

        Parameters:
        :   ****q**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

        Return type:
        :   [**QueryResult**](scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus._storage._storage.QueryResult")

    abstractmethod save(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_storage/_storage.py#L263)[#](#scikitplot.corpus.StorageBase.save "Link to this definition")
    :   Persist a single document.

        Parameters:
        :   ****doc****CorpusDocument
            :   Document to store. Must be validated before calling.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   None

    abstractmethod save\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_storage/_storage.py#L274)[#](#scikitplot.corpus.StorageBase.save_batch "Link to this definition")
    :   Persist a batch of documents atomically.

        Parameters:
        :   ****docs****sequence of CorpusDocument
            :   Documents to store. May be empty (no-op).

        Parameters:
        :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   None