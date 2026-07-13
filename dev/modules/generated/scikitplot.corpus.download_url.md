# download\_url[#](#download-url "Link to this heading")

scikitplot.corpus.download\_url(**url**, **\***, **output\_path=None**, **max\_bytes=524288000**, **timeout=120**, **max\_redirects=10**, **max\_retries=3**, **retry\_backoff=1.0**, **skip\_ssrf\_check=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_url_handler.py#L1309)[#](#scikitplot.corpus.download_url "Link to this definition")
:   Download a URL to a local file.

    Parameters:
    :   ****url****str
        :   URL to download. Must be `http://` or `https://`.

        ****output\_path****str, Path, or None, optional
        :   Directory to write the downloaded file into. If `None`,
            `tempfile.gettempdir()` is used. Default: `None`.

        ****max\_bytes****int, optional
        :   Maximum download size in bytes. Default: 500 MB.

        ****timeout****int, optional
        :   HTTP timeout in seconds. Default: 120.

        ****max\_redirects****int, optional
        :   Maximum number of HTTP redirects to follow. Default: 10.

        ****max\_retries****int, optional
        :   Maximum retry attempts for transient HTTP errors (429, 500,
            502, 503, 504). Each attempt waits
            `retry_backoff * 2 ** attempt` seconds before retrying.
            Set to `0` to disable retries. Default: 3.

        ****retry\_backoff****float, optional
        :   Base delay in seconds for exponential back-off. The actual
            wait before attempt **n** (0-indexed) is
            `retry_backoff * 2 ** n` seconds. Default: 1.0.

        ****skip\_ssrf\_check****bool, optional
        :   Skip SSRF prevention check. ****Only**** for trusted internal
            URLs. Default: `False`.

    Returns:
    :   pathlib.Path
        :   Path to the downloaded file. The caller is responsible for
            cleanup.

    Raises:
    :   ValueError
        :   If the URL is invalid, targets a private IP (SSRF), or the
            response exceeds **max\_bytes**.

        urllib.error.URLError
        :   If the download fails due to a network error and all retries
            are exhausted.

        TimeoutError
        :   If the download exceeds **timeout** seconds.

    Parameters:
    :   * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****timeout**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_retries**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****retry\_backoff**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****skip\_ssrf\_check**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

    Notes

    ****Security:**** The URL is validated against private IP ranges before
    connecting. This prevents SSRF attacks where an attacker’s URL
    redirects to an internal service.

    ****Deterministic filenames:**** The downloaded file uses a SHA-256
    prefix of the URL as the filename stem, so repeated downloads of
    the same URL produce the same filename.

    ****Retry policy:**** Only transient server-side errors trigger a retry
    (HTTP 429, 500, 502, 503, 504). Client errors (4xx except 429) and
    `ValueError` (SSRF, size exceeded) are **not** retried.

    Examples

    Try it in your browser!
    ```
    >>> path = download_url("https://example.com/report.pdf")
    >>> path.suffix
    '.pdf'
    >>> path.exists()
    True

    ```
    Go BackOpen In Tab