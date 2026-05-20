# WebDownloader[#](#webdownloader "Link to this heading")

class scikitplot.corpus.WebDownloader(**input\_url**, **output\_path=None**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**, **max\_retries=3**, **retry\_backoff=1.0**, **headers=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_downloader/_web.py#L41)[#](#scikitplot.corpus.WebDownloader "Link to this definition")
:   Generic HTTP/HTTPS file downloader.

    Delegates all network I/O, SSRF prevention, retry logic, and extension
    inference to `download_url`.
    The extra parameters on this class expose the full `download_url`
    surface area as explicit, named, introspectable attributes.

    Parameters:
    :   ****input\_url****str
        :   HTTP/HTTPS URL to download.

        ****output\_path****pathlib.Path or None, optional
        :   Directory for the downloaded file. Owned temp dir when `None`.
            Default: `None`.

        ****timeout****float, optional
        :   HTTP timeout in seconds. Default: `30.0`.

        ****max\_bytes****int, optional
        :   Download size cap in bytes. Default: `100 MB`.

        ****verify\_ssl****bool, optional
        :   Verify TLS certificates. Default: `True`.

        ****block\_private\_ips****bool, optional
        :   SSRF prevention — block private/reserved IPs. Default: `True`.

        ****max\_redirects****int, optional
        :   Maximum HTTP redirects. Default: `5`.

        ****user\_agent****str, optional
        :   `User-Agent` header value. Default: scikitplot UA string.

        ****max\_retries****int, optional
        :   Maximum retry attempts for transient HTTP errors (429, 500, 502,
            503, 504). Set to `0` to disable retries. Default: `3`.

        ****retry\_backoff****float, optional
        :   Base delay (seconds) for exponential back-off between retries.
            Actual wait before attempt **n** (0-indexed): `retry_backoff * 2^n`.
            Default: `1.0`.

        ****headers****dict or None, optional
        :   Additional HTTP request headers to merge with the default
            `User-Agent`. Useful for `Authorization`, `Accept`, etc.
            Default: `None`.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****max\_retries**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****retry\_backoff**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****headers**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)") **|** **None**)

    Notes

    ****When to use this vs**** [`AnyDownloader`](scikitplot.corpus.AnyDownloader.html#scikitplot.corpus.AnyDownloader "scikitplot.corpus.AnyDownloader"):

    * Use [`WebDownloader`](#scikitplot.corpus.WebDownloader "scikitplot.corpus.WebDownloader") when you **know** the URL is a plain
      HTTP/HTTPS file (not GitHub blob, not GDrive, not YouTube) and want
      to control all parameters explicitly.
    * Use [`AnyDownloader`](scikitplot.corpus.AnyDownloader.html#scikitplot.corpus.AnyDownloader "scikitplot.corpus.AnyDownloader") when you receive an arbitrary URL and
      want automatic routing to the correct specialist.

    ****SSL verification:**** Setting `verify_ssl=False` disables certificate
    validation entirely. This silently exposes the connection to MITM
    attacks. Only disable in controlled, trusted environments (e.g. local
    test servers with self-signed certs).

    Examples

    Try it in your browser!

    Simple download:

    ```
    >>> dl = WebDownloader("https://example.com/paper.pdf")
    >>> result = dl.download()
    >>> result.suffix
    '.pdf'

    ```

    With custom timeout and size cap:

    ```
    >>> dl = WebDownloader(
    ...     "https://example.com/bigfile.zip",
    ...     timeout=120.0,
    ...     max_bytes=500 * 1024 * 1024,
    ...     max_retries=5,
    ... )

    ```

    Context-manager (auto-cleanup of temp dir):

    ```
    >>> with WebDownloader("https://example.com/doc.pdf") as dl:
    ...     result = dl.download()
    ...     text = result.output_path.read_bytes()

    ```
    Go BackOpen In Tab

    block\_private\_ips: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.WebDownloader.block_private_ips "Link to this definition")

    cleanup()[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_downloader/_base.py#L481)[#](#scikitplot.corpus.WebDownloader.cleanup "Link to this definition")
    :   Remove the temporary directory owned by this instance, if any.

        Safe to call multiple times. If `output_path` was supplied at
        construction time (caller-owned), this method is a no-op.

        Return type:
        :   None

    download()[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_downloader/_web.py#L138)[#](#scikitplot.corpus.WebDownloader.download "Link to this definition")
    :   Download the URL to a local file and return a [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult").

        Returns:
        :   DownloadResult
            :   Populated result with `output_path`, `suffix`, `source_url`,
                `content_type`, and `suggested_filename`.

        Raises:
        :   ValueError
            :   If SSRF check fails, or download exceeds `max_bytes`.

            urllib.error.URLError
            :   If all retry attempts fail due to network errors.

            OSError
            :   If the destination directory cannot be created or written.

        Return type:
        :   [**DownloadResult**](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus._downloader._base.DownloadResult")

        Notes

        The SSRF check is applied **before** connecting. After a redirect
        chain, the final URL is re-validated against private IP ranges
        (guarded inside `download_url` via the `requests` path).
        Extension inference order:

        1. URL path extension (cheapest).
        2. `Content-Disposition` filename (RFC 5987 + plain form).
        3. `Content-Type` MIME mapping.
        4. Magic-byte detection on the downloaded file.
        5. `.bin` fallback.

    headers: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WebDownloader.headers "Link to this definition")

    input\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_downloader/_web.py#L41)[#](#scikitplot.corpus.WebDownloader.input_url "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 104857600[#](#scikitplot.corpus.WebDownloader.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5[#](#scikitplot.corpus.WebDownloader.max_redirects "Link to this definition")

    max\_retries: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 3[#](#scikitplot.corpus.WebDownloader.max_retries "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.WebDownloader.output_path "Link to this definition")

    retry\_backoff: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 1.0[#](#scikitplot.corpus.WebDownloader.retry_backoff "Link to this definition")

    timeout: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 30.0[#](#scikitplot.corpus.WebDownloader.timeout "Link to this definition")

    user\_agent: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.WebDownloader.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.WebDownloader.verify_ssl "Link to this definition")