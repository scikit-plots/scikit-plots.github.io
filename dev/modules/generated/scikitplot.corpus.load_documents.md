# load\_documents[#](#load-documents "Link to this heading")

scikitplot.corpus.load\_documents(**path**, **format=None**, **\***, **trusted=False**, **expected\_sha256=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_export/_export.py#L1263)[#](#scikitplot.corpus.load_documents "Link to this definition")
:   Load [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") instances
    from a previously exported file.

    Parameters:
    :   ****path****pathlib.Path or str
        :   Path to the exported file.

        ****format****ExportFormat, str or None, optional
        :   The export format, or its string value (`"jsonl"`). When `None`,
            it is inferred from the suffix:
            `.json`, `.jsonl`/`.ndjson`, `.yaml`/`.yml`, `.toml`,
            `.pkl`/`.pickle`, `.joblib`.

        ****trusted****bool, default=False
        :   Required for pickle and joblib, whose loading can execute code.
            JSON, JSON Lines, YAML and TOML never need it.

        ****expected\_sha256****str or None, optional
        :   When provided, the file’s SHA-256 is verified ****before**** it is
            parsed or deserialized; a mismatch raises [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)").

    Returns:
    :   list of CorpusDocument
        :   In file order. Embeddings come back as NumPy arrays of the recorded
            `embedding_dtype` (`float64` when a record names none).

    Raises:
    :   ValueError
        :   If the format cannot be inferred or cannot be loaded back (CSV,
            pandas, Parquet, polars, NumPy, HuggingFace; for MLflow, load the
            downloaded `corpus_documents.jsonl`); if loading pickle or joblib
            is not `trusted`; if `expected_sha256` does not match; if the
            file is not valid in its format (the message names the file); or if
            a record breaks the record contract: an unknown key, a field of the
            wrong type, a YAML or TOML date where a string belongs, an embedding
            value that overflows its dtype (the message names the record).

        IncompatibleSchemaError
        :   A subclass of [`ValueError`](https://docs.python.org/3/builtins/exceptions.html#ValueError "(in Python v3.15)"), if the file was written by another
            major generation of the document schema: a text record or a pickle or
            joblib mapping with another `schema_version`, or a pickle or joblib
            bare list (written before schema 3.0). Rebuild and export again.

        ImportError
        :   If the library a format needs is not installed.

        OSError
        :   If the file cannot be read.

        TypeError
        :   If a trusted pickle or joblib file does not hold a list of
            [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument").

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat") **|** **None**)
        * ****trusted**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****expected\_sha256**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")]

    > **See also**
    > [`export_documents`](scikitplot.corpus.export_documents.html#scikitplot.corpus.export_documents "scikitplot.corpus.export_documents")
    :   The writer.

    Notes

    ****User note.**** Text formats are the safe way to keep a corpus: loading
    runs no code, the files are diffable, and every field the exporter wrote
    comes back. Tabular and directory formats cannot rebuild every field
    (metadata is flattened, embeddings are dropped), so loading them is
    refused instead of returning a partial or empty result.

    Examples

    Try it in your browser!
    ```
    >>> import tempfile
    >>> from pathlib import Path
    >>> from scikitplot.corpus import CorpusDocument, ExportFormat, export_documents
    >>> doc = CorpusDocument.create("notes.txt", 0, "Hello.")
    >>> out = export_documents(
    ...     [doc], Path(tempfile.mkdtemp()) / "corpus.jsonl", ExportFormat.JSONL
    ... )
    >>> [d.text for d in load_documents(out)]
    ['Hello.']

    ```

    Loading a pickle/joblib export requires an explicit trust decision, because
    deserialization can execute arbitrary code. Pin a known digest when you
    have one:

    ```
    >>> docs = load_documents(
    ...     Path("corpus.pkl"),
    ...     trusted=True,
    ...     expected_sha256="e3b0c44298fc1c149afbf4c8996fb924...",
    ... )

    ```
    Go BackOpen In Tab