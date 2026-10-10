# SQLiteStorage[#](#sqlitestorage "Link to this heading")

class scikitplot.corpus.SQLiteStorage(**db\_path=':memory:'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L897)[#](#scikitplot.corpus.SQLiteStorage "Link to this definition")
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
    :   ****db\_path**** ([**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

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

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L1262)[#](#scikitplot.corpus.SQLiteStorage.close "Link to this definition")
    :   Close the database connection.

        Return type:
        :   None

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L1255)[#](#scikitplot.corpus.SQLiteStorage.count "Link to this definition")
    :   Return total stored document count via fast SQL COUNT.

        Return type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L1071)[#](#scikitplot.corpus.SQLiteStorage.get "Link to this definition")
    :   Retrieve a document by `doc_id`.

        Parameters:
        :   ****doc\_id****str

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") | None

    query(**q**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L1177)[#](#scikitplot.corpus.SQLiteStorage.query "Link to this definition")
    :   Query documents with optional full-text search (FTS5).

        Parameters:
        :   ****q****StorageQuery

        Parameters:
        :   ****q**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

        Return type:
        :   [**QueryResult**](scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus._storage._storage.QueryResult")

    save(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L1017)[#](#scikitplot.corpus.SQLiteStorage.save "Link to this definition")
    :   Persist a single document (upsert by `doc_id`).

        Parameters:
        :   ****doc****CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   None

    save\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L1032)[#](#scikitplot.corpus.SQLiteStorage.save_batch "Link to this definition")
    :   Persist a batch of documents atomically (all-or-nothing).

        All rows are serialized and validated before any write; the documents
        and FTS rows are then committed inside one explicit transaction, so a
        failure at any point leaves the database exactly as before the batch
        (CORPUS-STO-001). If a `doc_id` occurs more than once, the final
        occurrence wins consistently in both tables.

        Parameters:
        :   ****docs****sequence of CorpusDocument

        Parameters:
        :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   None

    search\_text(**text**, **limit=10**, **\***, **collection\_id=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_storage/_storage.py#L1089)[#](#scikitplot.corpus.SQLiteStorage.search_text "Link to this definition")
    :   Rank documents against free text with BM25, best first.

        Parameters:
        :   ****text****str
            :   Free text: a question, an identifier, an error message. Never
                interpreted as FTS5 syntax.

            ****limit****int, optional
            :   Most results to return; must be a positive integer. Default `10`.

            ****collection\_id****str or None, optional
            :   Restrict to one collection. Default: `None`.

        Returns:
        :   list of (CorpusDocument, float)
            :   Each document with its BM25 score, higher meaning more relevant.
                Empty when `text` has no word or nothing matches.

        Raises:
        :   TypeError
            :   If `text` is not a string or `limit` is not an integer.

            ValueError
            :   If `limit` is below one.

            RuntimeError
            :   If this SQLite build has no FTS5, so no BM25 ranking exists.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****limit**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****collection\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]]

        Notes

        ****User.**** Unlike `StorageQuery.full_text` — a filter that asks for
        the whole string — this is ranked retrieval: a document containing
        some of the words is returned, ordered by how strongly it matches.
        That is what a lexical leg of hybrid search needs; `what is
        roc_auc_score()` finds the document about `roc_auc_score`.

        ****Developer.**** Built from `_fts5_any`, so it is never an FTS5
        syntax error (finding CX-01). The score is `-bm25(corpus_fts)`:
        SQLite reports stronger matches as more negative, and a leg that feeds
        fusion or a reader should see “higher is better”.