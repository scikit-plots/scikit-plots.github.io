# infer\_extension[#](#infer-extension "Link to this heading")

scikitplot.corpus.infer\_extension(**headers**, **url**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/corpus/_url_handler.py#L1237)[#](#scikitplot.corpus.infer_extension "Link to this definition")
:   Infer a file extension from HTTP response headers and URL path.

    Public wrapper around `_infer_extension_from_headers`. Call
    this when you already hold response headers (e.g. after a manual
    `requests.head()`) and want to know what extension to use for the
    downloaded file.

    The resolution order is:

    1. URL path extension (cheapest, most reliable when present).
    2. `Content-Disposition` `filename*=` (RFC 5987 encoded form).
    3. `Content-Disposition` `filename=` (plain form).
    4. `Content-Type` MIME mapping (skips `application/octet-stream`).
    5. `mimetypes.guess_extension` stdlib fallback.
    6. `".bin"` when nothing can be inferred.

    Parameters:
    :   ****headers****dict-like or http.client.HTTPMessage
        :   HTTP response headers that support `.get(key, default)`.

        ****url****str
        :   Original request URL. Used for path-based extension lookup
            and as a logging label.

    Returns:
    :   str
        :   File extension including leading dot, e.g. `".pdf"`.
            Returns `".bin"` if nothing can be inferred.

    Parameters:
    :   * ****headers**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> infer_extension({"Content-Type": "audio/mpeg"}, "https://host/dl")
    '.mp3'
    >>> infer_extension({}, "https://host/report.pdf")
    '.pdf'
    >>> infer_extension(
    ...     {"Content-Disposition": "attachment; filename*=UTF-8''report%20final.pdf"},
    ...     "https://host/dl",
    ... )
    '.pdf'

    ```
    Go BackOpen In Tab