# load\_documents[#](#load-documents "Link to this heading")

scikitplot.corpus.load\_documents(**path**, **format=None**, **\***, **trusted=False**, **expected\_sha256=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_export/_export.py#L988)[#](#scikitplot.corpus.load_documents "Link to this definition")
:   Load [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") instances
    from a previously exported file.

    Supported round-trip formats: [`ExportFormat.PICKLE`](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat.PICKLE "scikitplot.corpus.ExportFormat.PICKLE"),
    [`ExportFormat.JOBLIB`](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat.JOBLIB "scikitplot.corpus.ExportFormat.JOBLIB"). For all other formats, returns an empty
    list with a warning (full deserialization from CSV/JSON/Parquet is
    handled separately by the pipeline).

    Parameters:
    :   ****path****pathlib.Path
        :   Path to the exported file.

        ****format****ExportFormat or None, optional
        :   Format hint. When `None`, the format is inferred from the
            file extension (`.pkl` → PICKLE, `.joblib` → JOBLIB).

        ****trusted****bool
        :   Whether the user has explicitly opted in to unsafe loading.

        ****expected\_sha256****str or None, optional
        :   When provided, the artifact’s SHA-256 is verified ****before****
            deserialization; a mismatch raises [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.14)") before any
            pickle code runs (tamper/wrong-artifact detection). Default `None`.

    Returns:
    :   list of CorpusDocument

    Raises:
    :   ImportError
        :   If `joblib` is not installed and the file is a joblib dump.

        OSError
        :   If the file cannot be read.

        ValueError
        :   If loading is not `trusted` for a pickle/joblib file, or if
            `expected_sha256` does not match the artifact.

        TypeError
        :   If the deserialized object is not a list of
            [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") (a trusted-but-wrong
            artifact is rejected rather than returned).

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") **|** **None**)
        * ****trusted**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****expected\_sha256**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")]

    Examples

    Try it in your browser!

    Loading a pickle/joblib export requires an explicit trust decision, because
    deserialization can execute arbitrary code. By default it is refused:

    ```
    >>> load_documents(Path("corpus.pkl"))
    Traceback (most recent call last):
        ...
    ValueError: Loading pickle files is disabled by default ...

    ```

    Opt in only for a source you trust — and, when you have a known-good digest,
    pin it so a tampered artifact is rejected before it is deserialized:

    ```
    >>> docs = load_documents(
    ...     Path("corpus.pkl"),
    ...     trusted=True,
    ...     expected_sha256="e3b0c44298fc1c149afbf4c8996fb924...",
    ... )
    >>> len(docs)
    312

    ```

    Prefer a safe, code-execution-free format (Parquet or JSON) whenever you
    control the export.

    Go BackOpen In Tab