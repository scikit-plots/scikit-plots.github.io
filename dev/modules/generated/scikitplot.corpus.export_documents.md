# export\_documents[#](#export-documents "Link to this heading")

scikitplot.corpus.export\_documents(**documents**, **output\_path**, **format**, **\***, **include\_embedding=True**, **json\_indent=2**, **parquet\_compression='snappy'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_export/_export.py#L143)[#](#scikitplot.corpus.export_documents "Link to this definition")
:   Export a list of documents to `output_path` in the given format.

    Parameters:
    :   ****documents****list of CorpusDocument
        :   Documents to export. May be empty (produces an empty file/dataset).

        ****output\_path****pathlib.Path
        :   Destination file or directory path.

            * File formats (CSV, JSON, JSONL, Pickle, Joblib, NumPy, pandas,
              Parquet, Polars): path to the output file.
            * Directory formats (HuggingFace, MLflow): path to the root
              directory / artifact path.

        ****format****ExportFormat
        :   Target export format.

        ****include\_embedding****bool, optional
        :   When `True` (default), embedding vectors are included in the
            output where the format supports them (JSONL, JSON, Pickle,
            Joblib, NumPy). Embeddings are always included for NumPy.
            For CSV and Parquet (tabular), embeddings are excluded regardless
            of this flag to avoid storing variable-length arrays in cells.

        ****json\_indent****int or None, optional
        :   Indentation for JSON output. `None` produces compact JSON.
            Default: `2`.

        ****parquet\_compression****str, optional
        :   Compression codec for Parquet output (`"snappy"`, `"gzip"`,
            `"brotli"`, `"zstd"`, `"none"`). Default: `"snappy"`.

    Returns:
    :   pathlib.Path
        :   The path that was written to (same as `output_path`).

    Raises:
    :   ValueError
        :   If `format` is [`ExportFormat.NUMPY`](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat.NUMPY "scikitplot.corpus.ExportFormat.NUMPY") and no documents have
            embeddings, or if the embedding dimensions are inconsistent.

        ImportError
        :   If the required optional library for the format is not installed.

        OSError
        :   If the output directory cannot be created or the file cannot be
            written.

    Parameters:
    :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****format**** ([**ExportFormat**](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat"))
        * ****include\_embedding**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****json\_indent**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****parquet\_compression**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    > **See also**
    > [`scikitplot.corpus._schema.ExportFormat`](scikitplot.corpus.ExportFormat.html#scikitplot.corpus.ExportFormat "scikitplot.corpus._schema.ExportFormat")
    :   Enumeration of all formats.

    Notes

    ****Atomic writes:**** All file-based formats are written to a `.tmp`
    sibling first, then renamed atomically. Interrupted exports leave no
    partial files at the final path.

    ****Embedding in tabular formats:**** CSV and Parquet omit embeddings
    because storing a float32 vector per row in a tabular cell is
    impractical. Use PICKLE, JOBLIB, or NUMPY to preserve embeddings.

    Examples

    Try it in your browser!

    CSV export (zero dependencies):

    ```
    >>> from pathlib import Path
    >>> export_documents(docs, Path("corpus.csv"), ExportFormat.CSV)
    PosixPath('corpus.csv')

    ```

    JSONL with embeddings:

    ```
    >>> export_documents(
    ...     docs,
    ...     Path("corpus.jsonl"),
    ...     ExportFormat.JSONL,
    ...     include_embedding=True,
    ... )

    ```

    NumPy embedding matrix:

    ```
    >>> export_documents(docs, Path("embeddings.npy"), ExportFormat.NUMPY)
    PosixPath('embeddings.npy')

    ```
    Go BackOpen In Tab