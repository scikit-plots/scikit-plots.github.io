# probe\_url\_kind[#](#probe-url-kind "Link to this heading")

scikitplot.corpus.probe\_url\_kind(**url**, **\***, **timeout=15**, **skip\_ssrf\_check=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/corpus/_url_handler.py#L492)[#](#scikitplot.corpus.probe_url_kind "Link to this definition")
:   Probe a URL with a HEAD request to classify by Content-Type.

    Use this when [`classify_url`](scikitplot.corpus.classify_url.html#scikitplot.corpus.classify_url "scikitplot.corpus.classify_url") returns [`URLKind.WEB_PAGE`](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind.WEB_PAGE "scikitplot.corpus.URLKind.WEB_PAGE")
    but the URL has no file extension in the path (e.g. API endpoints
    like `/content`, `/download`, `/bitstream`). A HEAD request
    is sent first; if that fails a GET with `stream=True` is attempted
    (some servers reject HEAD). The `Content-Type` response header is
    read and mapped to the correct [`URLKind`](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind "scikitplot.corpus.URLKind").

    Parameters:
    :   ****url****str
        :   HTTP/HTTPS URL to probe.

        ****timeout****int, optional
        :   Connection + read timeout in seconds. Default: 15.

        ****skip\_ssrf\_check****bool, optional
        :   Skip SSRF prevention check. Only for trusted internal URLs.
            Default: `False`.

    Returns:
    :   URLKind
        :   The inferred classification:

            * [`URLKind.DOWNLOADABLE`](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind.DOWNLOADABLE "scikitplot.corpus.URLKind.DOWNLOADABLE") — Content-Type indicates a
              non-HTML binary or structured file (PDF, image, audio, video,
              archive, CSV, JSON, plain text, etc.).
            * [`URLKind.WEB_PAGE`](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind.WEB_PAGE "scikitplot.corpus.URLKind.WEB_PAGE") — Content-Type is `text/html` or
              the probe failed (fail-safe: treat as web page so the caller
              can still attempt WebReader).

    Raises:
    :   ValueError
        :   If **url** does not start with `http://` or `https://`.

    Parameters:
    :   * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****timeout**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****skip\_ssrf\_check**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**URLKind**](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind "scikitplot.corpus._url_handler.URLKind")

    Notes

    ****When to call this****: Only when [`classify_url`](scikitplot.corpus.classify_url.html#scikitplot.corpus.classify_url "scikitplot.corpus.classify_url") returns
    `WEB_PAGE` **and** the URL path has no recognisable file extension.
    For URLs that already have a known extension or are already
    classified as YOUTUBE / GOOGLE\_DRIVE / GITHUB\_\*, call the faster
    [`classify_url`](scikitplot.corpus.classify_url.html#scikitplot.corpus.classify_url "scikitplot.corpus.classify_url") directly.

    ****Network cost****: One HEAD request (no body download). Adds
    ~50-500 ms of latency depending on server and network.

    ****Thread safety****: This function is stateless and safe to call
    from multiple threads.

    Developer note:

    The function tries `requests` first (better redirect + timeout
    handling). It falls back to `urllib.request` if requests is not
    installed. The SSRF check is applied before connecting when
    `skip_ssrf_check=False`.

    Examples

    Try it in your browser!
    ```
    >>> # An API endpoint returning a PDF with no extension in path
    >>> kind = probe_url_kind(
    ...     "https://iris.who.int/server/api/core/bitstreams/abc/content"
    ... )
    >>> kind == URLKind.DOWNLOADABLE
    True  # Content-Type: application/pdf

    ```
    ```
    >>> # A normal web page
    >>> kind = probe_url_kind("https://www.example.com/about")
    >>> kind == URLKind.WEB_PAGE
    True  # Content-Type: text/html

    ```
    Go BackOpen In Tab