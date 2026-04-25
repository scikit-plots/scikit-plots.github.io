# \_MultiSourceReader[#](#multisourcereader "Link to this heading")

class scikitplot.corpus.\_MultiSourceReader(**readers**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L2071)[#](#scikitplot.corpus._MultiSourceReader "Link to this definition")
:   Chains multiple [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus.DocumentReader") instances into one stream.

    Returned by [`DocumentReader.create`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.create "scikitplot.corpus.DocumentReader.create") when more than one source
    is supplied, and by [`DocumentReader.from_manifest`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.from_manifest "scikitplot.corpus.DocumentReader.from_manifest").

    Also acts as a context manager ensuring temporary directories from
    `from_url()` downloads are cleaned up on exit.

    Parameters:
    :   ****readers****list[DocumentReader]
        :   Ordered list of sub-readers. Documents are yielded in order.

    Parameters:
    :   ****readers**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**DocumentReader**](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")**]**)

    Notes

    ****Context manager usage**** (ensures temp-file cleanup):

    ```
    with DocumentReader.create(
        "https://iris.who.int/.../content",
        Path("report.pdf"),
    ) as reader:
        docs = list(reader.get_documents())

    ```

    ****Duck-typed interface**** — exposes `get_documents()` matching
    [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus.DocumentReader") so it works anywhere a single reader is
    accepted.

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> import scikitplot.corpus._readers
    >>> reader = DocumentReader.create(Path("a.txt"), Path("b.pdf"))
    >>> type(reader).__name__
    '_MultiSourceReader'
    >>> docs = list(reader.get_documents())

    ```
    Go BackOpen In Tab

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L2177)[#](#scikitplot.corpus._MultiSourceReader.close "Link to this definition")
    :   Release temporary directories created by `from_url()` downloads.

        Each sub-reader that downloaded a file has a `_from_url_tmp_dir`
        attribute set by [`DocumentReader.from_url`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.from_url "scikitplot.corpus.DocumentReader.from_url"). This method
        deletes those directories. Called automatically when used as a
        context manager; call manually otherwise.

        Return type:
        :   None

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L2131)[#](#scikitplot.corpus._MultiSourceReader.get_documents "Link to this definition")
    :   Yield all documents from all sub-readers in order.

        Yields:
        :   CorpusDocument
            :   Documents from each sub-reader, chained sequentially.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), None, None]

    property n\_readers: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus._MultiSourceReader.n_readers "Link to this definition")
    :   Number of constituent readers.

        Returns:
        :   int
            :   `len(self.readers)`.

    readers: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[DocumentReader](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")][#](#scikitplot.corpus._MultiSourceReader.readers "Link to this definition")