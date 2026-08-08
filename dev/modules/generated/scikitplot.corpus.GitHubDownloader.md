# GitHubDownloader[#](#githubdownloader "Link to this heading")

class scikitplot.corpus.GitHubDownloader(**input\_url**, **output\_path=None**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**, **token=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_downloader/_github.py#L73)[#](#scikitplot.corpus.GitHubDownloader "Link to this definition")
:   GitHub URL downloader with automatic blob → raw normalisation.

    Accepts both `github.com/.../blob/...` and
    `raw.githubusercontent.com/...` URLs. Blob URLs are silently
    rewritten to their raw equivalent before downloading.

    Parameters:
    :   ****input\_url****str
        :   GitHub blob or raw URL.
            Accepted forms:

            * `https://github.com/OWNER/REPO/blob/REF/path/to/file`
            * `https://raw.githubusercontent.com/OWNER/REPO/REF/path/to/file`
            * `https://raw.githubusercontent.com/OWNER/REPO/refs/heads/BRANCH/path`

        ****token****str or None, optional
        :   GitHub personal access token (PAT) or fine-grained token.
            When provided, sent as `Authorization: Bearer <token>` so that
            private repositories can be accessed.
            ****Never logged or included in repr.****
            Default: `None` (anonymous access, public repos only).

        ****output\_path****pathlib.Path or None, optional
        :   Directory for the downloaded file. Default: `None` (temp dir).

        ****timeout****float, optional
        :   HTTP timeout in seconds. Default: `30.0`.

        ****max\_bytes****int, optional
        :   Download size cap in bytes. Default: `100 MB`.

        ****verify\_ssl****bool, optional
        :   Verify TLS certificates. Default: `True`.

        ****block\_private\_ips****bool, optional
        :   SSRF prevention. Default: `True`.

        ****max\_redirects****int, optional
        :   Maximum HTTP redirects. Default: `5`.

    Raises:
    :   ValueError
        :   If the URL is not a recognised GitHub blob or raw URL at
            construction time.

        ValueError
        :   If the URL points to a directory tree (`/tree/`), which is
            not a downloadable file.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****token**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Notes

    ****Blob → raw rewrite rule:****

    ```
    https://github.com/OWNER/REPO/blob/REF/path/to/file.md
          ↓
    https://raw.githubusercontent.com/OWNER/REPO/REF/path/to/file.md

    ```

    The `refs/heads/` prefix used by the GitHub UI for branch refs is
    preserved when already present in raw URLs and not added for blob URLs
    (blob URLs do not carry it).

    ****Private repo access:**** Tokens are passed as HTTP headers, never as
    URL query parameters. Tokens are redacted from all log output.

    Examples

    Try it in your browser!

    Public repo — blob URL:

    ```
    >>> dl = GitHubDownloader(
    ...     "https://github.com/scikit-plots/scikit-plots/blob/main/README.md"
    ... )
    >>> result = dl.download()
    >>> result.suffix
    '.md'

    ```

    Public repo — raw URL:

    ```
    >>> dl = GitHubDownloader(
    ...     "https://raw.githubusercontent.com/scikit-plots/scikit-plots"
    ...     "/refs/heads/main/README.md"
    ... )
    >>> result = dl.download()

    ```

    Private repo with PAT:

    ```
    >>> dl = GitHubDownloader(
    ...     "https://github.com/myorg/private-repo/blob/main/data.csv",
    ...     token="ghp_xxxxxxxxxxxxxxxxxxxx",
    ... )
    >>> result = dl.download()

    ```
    Go BackOpen In Tab

    block\_private\_ips: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.GitHubDownloader.block_private_ips "Link to this definition")

    cleanup()[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_downloader/_base.py#L481)[#](#scikitplot.corpus.GitHubDownloader.cleanup "Link to this definition")
    :   Remove the temporary directory owned by this instance, if any.

        Safe to call multiple times. If `output_path` was supplied at
        construction time (caller-owned), this method is a no-op.

        Return type:
        :   None

    download()[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_downloader/_github.py#L255)[#](#scikitplot.corpus.GitHubDownloader.download "Link to this definition")
    :   Download the GitHub file and return a [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult").

        The blob URL (if given) is normalised to a raw URL first, then
        downloaded via `download_url`
        with an optional `Authorization` header for private repos.

        Returns:
        :   DownloadResult
            :   Populated result with local file path, extension, and source URL.

        Raises:
        :   ValueError
            :   If SSRF check fails or size exceeds `max_bytes`.

            urllib.error.URLError
            :   On network errors.

        Return type:
        :   [**DownloadResult**](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus._downloader._base.DownloadResult")

        Notes

        The `source_url` in the returned [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult") is always
        the **original** URL passed at construction time, not the resolved raw
        URL. This preserves the provenance label shown to end users.

    input\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_downloader/_github.py#L73)[#](#scikitplot.corpus.GitHubDownloader.input_url "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 104857600[#](#scikitplot.corpus.GitHubDownloader.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5[#](#scikitplot.corpus.GitHubDownloader.max_redirects "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.GitHubDownloader.output_path "Link to this definition")

    resolve\_raw\_url()[[source]](https://github.com/scikit-plots/scikit-plots/blob/8ec94fe1/scikitplot/corpus/_downloader/_github.py#L217)[#](#scikitplot.corpus.GitHubDownloader.resolve_raw_url "Link to this definition")
    :   Normalise a GitHub blob URL to its raw.githubusercontent.com equivalent.

        Returns:
        :   str
            :   Raw content URL. If the input is already a raw URL, it is
                returned unchanged.

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> dl = GitHubDownloader("https://github.com/user/repo/blob/main/data.csv")
        >>> dl.resolve_raw_url()
        'https://raw.githubusercontent.com/user/repo/main/data.csv'

        ```
        ```
        >>> dl2 = GitHubDownloader(
        ...     "https://raw.githubusercontent.com/user/repo/main/data.csv"
        ... )
        >>> dl2.resolve_raw_url() == dl2.input_url
        True

        ```
        Go BackOpen In Tab

    timeout: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 30.0[#](#scikitplot.corpus.GitHubDownloader.timeout "Link to this definition")

    token: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.GitHubDownloader.token "Link to this definition")

    user\_agent: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.GitHubDownloader.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.GitHubDownloader.verify_ssl "Link to this definition")