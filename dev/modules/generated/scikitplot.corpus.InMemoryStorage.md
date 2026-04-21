# InMemoryStorage[#](#inmemorystorage "Link to this heading")

class scikitplot.corpus.InMemoryStorage[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_storage/_storage.py#L251)[#](#scikitplot.corpus.InMemoryStorage "Link to this definition")
:   Thread-safe in-memory dict store.

    Stores documents as [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
    objects directly in a `dict` keyed by `doc_id`. Insertion order is
    preserved (Python 3.7+ dict guarantee).

    > **Warning**
    > This backend is intended for testing and prototyping only. Data is
    lost when the process exits.

    Parameters:
    :   ****None****

    Examples

    Try it in your browser!
    ```
    >>> store = InMemoryStorage()
    >>> store.save(doc)
    >>> store.count()
    1
    >>> store.get(doc.doc_id).text == doc.text
    True

    ```
    Go BackOpen In Tab

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_storage/_storage.py#L350)[#](#scikitplot.corpus.InMemoryStorage.clear "Link to this definition")
    :   Remove all documents from the store.

        Return type:
        :   None

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_storage/_storage.py#L345)[#](#scikitplot.corpus.InMemoryStorage.count "Link to this definition")
    :   Return total stored document count in O(1).

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_storage/_storage.py#L311)[#](#scikitplot.corpus.InMemoryStorage.get "Link to this definition")
    :   Return the document with the given `doc_id`, or `None`.

        Parameters:
        :   ****doc\_id****str

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") | None

    query(**q**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_storage/_storage.py#L322)[#](#scikitplot.corpus.InMemoryStorage.query "Link to this definition")
    :   Filter documents by the query parameters.

        Full-text search (`q.full_text`) is not supported — the
        `full_text` field is ignored silently.

        Parameters:
        :   ****q****StorageQuery

        Returns:
        :   QueryResult

        Parameters:
        :   ****q**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

        Return type:
        :   [**QueryResult**](scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus._storage._storage.QueryResult")

    save(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_storage/_storage.py#L281)[#](#scikitplot.corpus.InMemoryStorage.save "Link to this definition")
    :   Store `doc` by `doc_id`. Overwrites if already present.

        Parameters:
        :   ****doc****CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   None

    save\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_storage/_storage.py#L297)[#](#scikitplot.corpus.InMemoryStorage.save_batch "Link to this definition")
    :   Store a batch of documents atomically (single lock acquisition).

        Parameters:
        :   ****docs****sequence of CorpusDocument

        Parameters:
        :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   None