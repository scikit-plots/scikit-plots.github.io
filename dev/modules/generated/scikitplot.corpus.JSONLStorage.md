# JSONLStorage[#](#jsonlstorage "Link to this heading")

class scikitplot.corpus.JSONLStorage(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L567)[#](#scikitplot.corpus.JSONLStorage "Link to this definition")
:   Append-friendly JSONL (newline-delimited JSON) flat-file store.

    Documents are written one JSON object per line. On construction the
    file is read into an in-memory index keyed by `doc_id` for O(1)
    `get` performance. Writes append to the file and update the index.

    > **Warning**
    > `save_batch` writes all documents atomically to a temporary file
    then renames it over the original. This reorders existing documents
    on disk (puts new documents at the end). Concurrent writers would
    corrupt the file; use one writer at a time.

    Parameters:
    :   ****path****pathlib.Path or str
        :   Path to the `.jsonl` file. Created if absent.

    Parameters:
    :   ****path**** ([**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> store = JSONLStorage(Path("corpus.jsonl"))
    >>> store.save(doc)
    >>> store.count()
    1

    ```
    Go BackOpen In Tab

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L329)[#](#scikitplot.corpus.JSONLStorage.close "Link to this definition")
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

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L769)[#](#scikitplot.corpus.JSONLStorage.count "Link to this definition")
    :   Return total stored document count in O(1).

        Return type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L718)[#](#scikitplot.corpus.JSONLStorage.get "Link to this definition")
    :   Retrieve a document by `doc_id`.

        Parameters:
        :   ****doc\_id****str

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") | None

    query(**q**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L732)[#](#scikitplot.corpus.JSONLStorage.query "Link to this definition")
    :   Filter documents by query parameters.

        Full-text search is not supported and is ignored.

        Parameters:
        :   ****q****StorageQuery

        Parameters:
        :   ****q**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

        Return type:
        :   [**QueryResult**](scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus._storage._storage.QueryResult")

    save(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L661)[#](#scikitplot.corpus.JSONLStorage.save "Link to this definition")
    :   Append or update a document.

        If the `doc_id` already exists, the file is rewritten (update
        semantics). If new, the doc is appended (O(1) write).

        Parameters:
        :   ****doc****CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   None

    save\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_storage/_storage.py#L696)[#](#scikitplot.corpus.JSONLStorage.save_batch "Link to this definition")
    :   Save a batch, rewriting the file atomically once.

        Parameters:
        :   ****docs****sequence of CorpusDocument

        Parameters:
        :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   None