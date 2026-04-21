# DownloadResult[#](#downloadresult "Link to this heading")

class scikitplot.corpus.DownloadResult(**input\_url**, **output\_path**, **suffix**, **content\_type=''**, **suggested\_filename=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_downloader/_base.py#L56)[#](#scikitplot.corpus.DownloadResult "Link to this definition")
:   Immutable result object returned by every [`BaseDownloader`](scikitplot.corpus.BaseDownloader.html#scikitplot.corpus.BaseDownloader "scikitplot.corpus.BaseDownloader").

    Parameters:
    :   ****input\_url****str
        :   The original URL that was downloaded.

        ****output\_path****pathlib.Path
        :   Absolute path to the downloaded local file. The file exists and is
            readable when this object is returned.

        ****suffix****str
        :   File extension including the leading dot, e.g. `".pdf"`. Always
            lower-cased. Used by [`DocumentReader.create`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader.create "scikitplot.corpus.DocumentReader.create") to dispatch the
            file to the correct reader. May differ from `path.suffix` when
            the extension was inferred from `Content-Type` or
            `Content-Disposition` rather than the URL path.

        ****content\_type****str, optional
        :   MIME type from the HTTP `Content-Type` header, lower-cased and
            stripped of parameters (e.g. `"application/pdf"`).
            Empty string when not available (local files, custom handlers).

        ****suggested\_filename****str, optional
        :   Filename suggested by the server via `Content-Disposition`, or the
            last URL path segment. Empty string when not available.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****suffix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****content\_type**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****suggested\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Notes

    ****Why carry**** `suffix` ****separately from**** `output_path.suffix`? The URL
    path may have no extension (API endpoints, GDrive share links). In those
    cases the downloader infers the correct suffix from the `Content-Type`
    header and stores a file with a synthetic name. `suffix` is the
    **authoritative** extension; `output_path.suffix` is implementation detail.

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> r = DownloadResult(
    ...     input_url="https://example.com/paper",
    ...     output_path=Path("/tmp/skplt_abc123.pdf"),
    ...     suffix=".pdf",
    ...     content_type="application/pdf",
    ...     suggested_filename="paper.pdf",
    ... )
    >>> r.suffix
    '.pdf'

    ```
    Go BackOpen In Tab

    content\_type: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = ''[#](#scikitplot.corpus.DownloadResult.content_type "Link to this definition")

    input\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_downloader/_base.py#L56)[#](#scikitplot.corpus.DownloadResult.input_url "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_downloader/_base.py#L56)[#](#scikitplot.corpus.DownloadResult.output_path "Link to this definition")

    suffix: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_downloader/_base.py#L56)[#](#scikitplot.corpus.DownloadResult.suffix "Link to this definition")

    suggested\_filename: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = ''[#](#scikitplot.corpus.DownloadResult.suggested_filename "Link to this definition")