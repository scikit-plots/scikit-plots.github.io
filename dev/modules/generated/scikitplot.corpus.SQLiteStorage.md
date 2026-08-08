# SQLiteStorage[#](#sqlitestorage "Link to this heading")

class scikitplot.corpus.SQLiteStorage(**db\_path=':memory:'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_storage/_storage.py#L631)[#](#scikitplot.corpus.SQLiteStorage "Link to this definition")
:   SQLite-backed corpus store with FTS5 full-text search.

    Uses stdlib `sqlite3` — no external dependencies. Full-text search
    is available via FTS5 (`StorageQuery.full_text`).

    The database uses WAL (Write-Ahead Logging) mode for better concurrent
    read throughput. A single connection is held per `SQLiteStorage`
    instance; use separate instances for multiple threads if needed.

    Parameters:
    :   ****db\_path****pathlib.Path or str
        :   Path to the SQLite database file. Created if absent.
            Pass `\":memory:\"` for a purely in-memory database.

    Parameters:
    :   ****db\_path**** ([**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> store = SQLiteStorage(Path("corpus.db"))
    >>> store.save_batch(docs)
    >>> result = store.query(StorageQuery(source_type="book", limit=10))
    >>> result.total
    487

    ```
    Go BackOpen In Tab

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_storage/_storage.py#L882)[#](#scikitplot.corpus.SQLiteStorage.close "Link to this definition")
    :   Close the database connection.

        Return type:
        :   None

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_storage/_storage.py#L875)[#](#scikitplot.corpus.SQLiteStorage.count "Link to this definition")
    :   Return total stored document count via fast SQL COUNT.

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_storage/_storage.py#L795)[#](#scikitplot.corpus.SQLiteStorage.get "Link to this definition")
    :   Retrieve a document by `doc_id`.

        Parameters:
        :   ****doc\_id****str

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") | None

    query(**q**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_storage/_storage.py#L813)[#](#scikitplot.corpus.SQLiteStorage.query "Link to this definition")
    :   Query documents with optional full-text search (FTS5).

        Parameters:
        :   ****q****StorageQuery

        Parameters:
        :   ****q**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

        Return type:
        :   [**QueryResult**](scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus._storage._storage.QueryResult")

    save(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_storage/_storage.py#L741)[#](#scikitplot.corpus.SQLiteStorage.save "Link to this definition")
    :   Persist a single document (upsert by `doc_id`).

        Parameters:
        :   ****doc****CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   None

    save\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_storage/_storage.py#L756)[#](#scikitplot.corpus.SQLiteStorage.save_batch "Link to this definition")
    :   Persist a batch of documents atomically (all-or-nothing).

        All rows are serialized and validated before any write; the documents
        and FTS rows are then committed inside one explicit transaction, so a
        failure at any point leaves the database exactly as before the batch
        (CORPUS-STO-001). If a `doc_id` occurs more than once, the final
        occurrence wins consistently in both tables.

        Parameters:
        :   ****docs****sequence of CorpusDocument

        Parameters:
        :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   None