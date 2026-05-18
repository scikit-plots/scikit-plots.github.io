# load\_documents[#](#load-documents "Link to this heading")

scikitplot.corpus.load\_documents(**path**, **fmt=None**, **\***, **trusted=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_export/_export.py#L940)[#](#scikitplot.corpus.load_documents "Link to this definition")
:   Load [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") instances
    from a previously exported file.

    Supported round-trip formats: [`ExportFormat.PICKLE`](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat.PICKLE "scikitplot.corpus.ExportFormat.PICKLE"),
    [`ExportFormat.JOBLIB`](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat.JOBLIB "scikitplot.corpus.ExportFormat.JOBLIB"). For all other formats, returns an empty
    list with a warning (full deserialization from CSV/JSON/Parquet is
    handled separately by the pipeline).

    Parameters:
    :   ****path****pathlib.Path
        :   Path to the exported file.

        ****fmt****ExportFormat or None, optional
        :   Format hint. When `None`, the format is inferred from the
            file extension (`.pkl` → PICKLE, `.joblib` → JOBLIB).

        ****trusted****bool
        :   Whether the user has explicitly opted in to unsafe loading.

    Returns:
    :   list of CorpusDocument

    Raises:
    :   ImportError
        :   If `joblib` is not installed and the file is a joblib dump.

        OSError
        :   If the file cannot be read.

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****fmt**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") **|** **None**)
        * ****trusted**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")]

    Examples

    Try it in your browser!
    ```
    >>> docs = load_documents(Path("corpus.pkl"))
    >>> len(docs)
    312

    ```
    Go BackOpen In Tab