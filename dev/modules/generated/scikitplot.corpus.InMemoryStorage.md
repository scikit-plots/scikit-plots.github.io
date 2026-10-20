# InMemoryStorage[#](#inmemorystorage "Link to this heading")

class scikitplot.corpus.InMemoryStorage[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L447)[#](#scikitplot.corpus.InMemoryStorage "Link to this definition")
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

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L553)[#](#scikitplot.corpus.InMemoryStorage.clear "Link to this definition")
    :   Remove all documents from the store.

        Return type:
        :   None

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L329)[#](#scikitplot.corpus.InMemoryStorage.close "Link to this definition")
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

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L548)[#](#scikitplot.corpus.InMemoryStorage.count "Link to this definition")
    :   Return total stored document count in O(1).

        Return type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    get(**doc\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L507)[#](#scikitplot.corpus.InMemoryStorage.get "Link to this definition")
    :   Return the document with the given `doc_id`, or `None`.

        Parameters:
        :   ****doc\_id****str

        Parameters:
        :   ****doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") | None

    query(**q**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L518)[#](#scikitplot.corpus.InMemoryStorage.query "Link to this definition")
    :   Filter documents by the query parameters.

        Full-text search (`q.full_text`) is ****emulated**** by a case-insensitive
        substring scan and reported as [`FilterSupport.EMULATED`](scikitplot.corpus.FilterSupport.html#scikitplot.corpus.FilterSupport.EMULATED "scikitplot.corpus.FilterSupport.EMULATED") – there
        is no stemming, tokenisation or relevance ranking. It is never
        silently ignored (finding F-R07-01).

        Parameters:
        :   ****q****StorageQuery

        Returns:
        :   QueryResult

        Parameters:
        :   ****q**** ([**StorageQuery**](scikitplot.corpus.StorageQuery.html#scikitplot.corpus.StorageQuery "scikitplot.corpus._storage._storage.StorageQuery"))

        Return type:
        :   [**QueryResult**](scikitplot.corpus.QueryResult.html#scikitplot.corpus.QueryResult "scikitplot.corpus._storage._storage.QueryResult")

    save(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L477)[#](#scikitplot.corpus.InMemoryStorage.save "Link to this definition")
    :   Store `doc` by `doc_id`. Overwrites if already present.

        Parameters:
        :   ****doc****CorpusDocument

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   None

    save\_batch(**docs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_storage/_storage.py#L493)[#](#scikitplot.corpus.InMemoryStorage.save_batch "Link to this definition")
    :   Store a batch of documents atomically (single lock acquisition).

        Parameters:
        :   ****docs****sequence of CorpusDocument

        Parameters:
        :   ****docs**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)

        Return type:
        :   None

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus