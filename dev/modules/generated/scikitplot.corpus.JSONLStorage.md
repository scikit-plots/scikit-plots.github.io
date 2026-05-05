# JSONLStorage[#](#jsonlstorage "Link to this heading")

class scikitplot.corpus.JSONLStorage(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_storage/_storage.py#L364)[#](#scikitplot.corpus.JSONLStorage "Link to this definition")
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
    :   ****path**** ([**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Examples

    Try it in your browser!
    ```
    >>> store = JSONLStorage(Path("corpus.jsonl"))
    >>> store.save(doc)
    >>> store.count()
    1

    ```
    Go BackOpen In Tab

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_storage/_storage.py#L533)[#](#scikitplot.corpus.JSONLStorage.count "Link to this definition")
    :   Return total stored document count in O(1).

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_storage/_storage.py#L489)[#](#scikitplot.corpus.JSONLStorage.get "Link to this definition")
    :   Retrieve a document by `doc_id`.

        Parameters:
        :   ****doc\_id****str

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") | None

    query(**q**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_storage/_storage.py#L503)[#](#scikitplot.corpus.JSONLStorage.query "Link to this definition")
    :   Filter documents by query parameters.

        Full-text search is not supported and is ignored.

        Parameters:
        :   ****q****StorageQuery

        Parameters:
        :   ****q**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

        Return type:
        :   [**QueryResult**](scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus._storage._storage.QueryResult")

    save(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_storage/_storage.py#L449)[#](#scikitplot.corpus.JSONLStorage.save "Link to this definition")
    :   Append or update a document.

        If the `doc_id` already exists, the file is rewritten (update
        semantics). If new, the doc is appended (O(1) write).

        Parameters:
        :   ****doc****CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   None

    save\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/corpus/_storage/_storage.py#L473)[#](#scikitplot.corpus.JSONLStorage.save_batch "Link to this definition")
    :   Save a batch, rewriting the file atomically once.

        Parameters:
        :   ****docs****sequence of CorpusDocument

        Parameters:
        :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   None