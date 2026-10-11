# AnyDownloader[#](#anydownloader "Link to this heading")

class scikitplot.corpus.AnyDownloader(**input\_url**, **output\_path=None**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**, **youtube\_mode='transcript'**, **youtube\_language='en'**, **youtube\_include\_auto=True**, **github\_token=None**, **headers=None**, **max\_retries=3**, **retry\_backoff=1.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_downloader.py#L91)[#](#scikitplot.corpus.AnyDownloader "Link to this definition")
:   Auto-dispatching downloader with multi-URL and per-parameter list support.

    Accepts one URL ****or**** a list of URLs. All parameters support
    `T | list[T] | None`:

    * `None` → use the parameter’s built-in default for every URL.
    * Scalar → broadcast to every URL.
    * `list` → applied element-wise; must be the same length as **input\_url**.

    Parameters:
    :   ****input\_url****str or list[str]
        :   One URL or a list of URLs. When a list is supplied,
            [`download`](#scikitplot.corpus.AnyDownloader.download "scikitplot.corpus.AnyDownloader.download") returns `list[DownloadResult]`.

        ****output\_path****pathlib.Path or None, optional
        :   Directory shared across all URLs. Default: `None` (temp dir).

        ****timeout****float or list[float] or None, optional
        :   HTTP timeout in seconds. Default: `30.0`.

        ****max\_bytes****int or list[int] or None, optional
        :   Download size cap in bytes. Default: `100 MB`.

        ****verify\_ssl****bool or list[bool] or None, optional
        :   Verify TLS certificates. Default: `True`.

        ****block\_private\_ips****bool or list[bool] or None, optional
        :   SSRF prevention. Default: `True`.

        ****max\_redirects****int or list[int] or None, optional
        :   Maximum HTTP redirects. Default: `5`.

        ****user\_agent****str or list[str] or None, optional
        :   `User-Agent` header value. Default: scikitplot UA string.

        ****youtube\_mode****str or list[str] or None, optional
        :   Mode for YouTubeDownloader: `"transcript"`, `"audio"`, or
            `"video"`. Default: `"transcript"`.

        ****youtube\_language****str or list[str] or None, optional
        :   BCP-47 language code for transcript fetching. Default: `"en"`.

        ****youtube\_include\_auto****bool or list[bool] or None, optional
        :   Include auto-generated captions as fallback. Default: `True`.

        ****github\_token****str or list[str or None] or None, optional
        :   PAT for GitHubDownloader (private repos). Per-URL `None`
            allowed. ****Never logged.**** Default: `None`.

        ****headers****dict or list[dict or None] or None, optional
        :   Extra HTTP headers for WebDownloader. Per-URL `None` allowed.
            Default: `None`.

        ****max\_retries****int or list[int] or None, optional
        :   Retry attempts for WebDownloader. Default: `3`.

        ****retry\_backoff****float or list[float] or None, optional
        :   Exponential back-off base for WebDownloader. Default: `1.0`.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****youtube\_mode**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))
        * ****youtube\_language**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))
        * ****youtube\_include\_auto**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))
        * ****github\_token**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))
        * ****headers**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))
        * ****max\_retries**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))
        * ****retry\_backoff**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)"))

    Notes

    ****Single vs batch:****

    ```
    # Single URL — returns DownloadResult
    result = AnyDownloader("https://example.com/paper.pdf").download()

    # Batch — returns list[DownloadResult]
    results = AnyDownloader(
        [
            "https://example.com/paper.pdf",
            "https://github.com/org/repo/blob/main/data.csv",
            "https://www.youtube.com/watch?v=abc123",
        ]
    ).download()

    ```

    ****Per-URL parameters:****

    ```
    dl = AnyDownloader(
        input_url=[
            "https://github.com/org/priv/blob/main/secret.csv",
            "https://example.com/public.pdf",
        ],
        github_token=["ghp_token", None],  # None = public, no token needed
        timeout=[120.0, 30.0],  # per-URL timeouts
        max_bytes=200 * 1024 * 1024,  # broadcast to all
    )
    results = dl.download()

    ```

    Examples

    Try it in your browser!

    Single URL:

    ```
    >>> dl = AnyDownloader("https://example.com/report.pdf")
    >>> isinstance(dl.download(), DownloadResult)
    True

    ```

    Batch:

    ```
    >>> dl = AnyDownloader(
    ...     ["https://example.com/a.pdf", "https://example.com/b.pdf"],
    ...     timeout=60.0,
    ... )
    >>> len(dl.download())
    2

    ```
    Go BackOpen In Tab

    block\_private\_ips: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.AnyDownloader.block_private_ips "Link to this definition")

    cleanup()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_base.py#L482)[#](#scikitplot.corpus.AnyDownloader.cleanup "Link to this definition")
    :   Remove the temporary directory owned by this instance, if any.

        Safe to call multiple times. If `output_path` was supplied at
        construction time (caller-owned), this method is a no-op.

        Return type:
        :   None

    download()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_downloader.py#L480)[#](#scikitplot.corpus.AnyDownloader.download "Link to this definition")
    :   Download one URL or all URLs and return the result(s).

        Returns:
        :   DownloadResult
            :   When `input_url` was a single `str`.

            list[DownloadResult]
            :   When `input_url` was a `list[str]`. Preserves input order.

        Notes

        Batch downloads are sequential. For parallel execution, call
        `download_single` per URL in your own thread/process pool.

    download\_all()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_downloader.py#L500)[#](#scikitplot.corpus.AnyDownloader.download_all "Link to this definition")
    :   Download all URLs and always return `list[DownloadResult]`.

        Normalises the return type so callers never need to branch on
        `isinstance(result, list)`.

        Returns:
        :   list[DownloadResult]
            :   One [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult") per URL, in input order.

        Examples

        Try it in your browser!
        ```
        >>> dl = AnyDownloader("https://example.com/doc.pdf")
        >>> results = dl.download_all()
        >>> len(results)
        1

        ```
        Go BackOpen In Tab

    classmethod from\_policy(**input\_url**, **policy='secure'**, **/**, **\*\*overrides**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_downloader.py#L200)[#](#scikitplot.corpus.AnyDownloader.from_policy "Link to this definition")
    :   Construct with a `DownloadPolicy` plus explicit overrides.

        Credentials, headers, destination paths and service-specific options are
        intentionally not part of `DownloadPolicy` and remain ordinary
        explicit keyword arguments.

    github\_token: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") = None[#](#scikitplot.corpus.AnyDownloader.github_token "Link to this definition")

    headers: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") = None[#](#scikitplot.corpus.AnyDownloader.headers "Link to this definition")

    input\_url: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_downloader.py#L91)[#](#scikitplot.corpus.AnyDownloader.input_url "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 104857600[#](#scikitplot.corpus.AnyDownloader.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 5[#](#scikitplot.corpus.AnyDownloader.max_redirects "Link to this definition")

    max\_retries: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") = 3[#](#scikitplot.corpus.AnyDownloader.max_retries "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.AnyDownloader.output_path "Link to this definition")

    plan()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_downloader.py#L406)[#](#scikitplot.corpus.AnyDownloader.plan "Link to this definition")
    :   Return side-effect-free dispatch plan(s) matching [`download`](#scikitplot.corpus.AnyDownloader.download "scikitplot.corpus.AnyDownloader.download").

        This is a string/classification preflight only. It intentionally does
        not perform SSRF DNS resolution or content-type probing because those
        operations can touch external state.

    plan\_all()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_downloader/_downloader.py#L417)[#](#scikitplot.corpus.AnyDownloader.plan_all "Link to this definition")
    :   Return one `DownloadPlan` per input URL, always as a list.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[**DownloadPlan**]

    retry\_backoff: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") = 1.0[#](#scikitplot.corpus.AnyDownloader.retry_backoff "Link to this definition")

    timeout: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 30.0[#](#scikitplot.corpus.AnyDownloader.timeout "Link to this definition")

    user\_agent: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.AnyDownloader.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.AnyDownloader.verify_ssl "Link to this definition")

    youtube\_include\_auto: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") = True[#](#scikitplot.corpus.AnyDownloader.youtube_include_auto "Link to this definition")

    youtube\_language: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") = 'en'[#](#scikitplot.corpus.AnyDownloader.youtube_language "Link to this definition")

    youtube\_mode: [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") = 'transcript'[#](#scikitplot.corpus.AnyDownloader.youtube_mode "Link to this definition")