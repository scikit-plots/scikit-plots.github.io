# BaseDownloader[#](#basedownloader "Link to this heading")

class scikitplot.corpus.BaseDownloader(**input\_url**, **output\_path=None**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_base.py#L222)[#](#scikitplot.corpus.BaseDownloader "Link to this definition")
:   Abstract base class for all format-specific URL downloaders.

    Mirrors the [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader") design —
    a `@dataclass` ABC so all parameters are explicit and subclasses add
    only what they specialise.

    Parameters:
    :   ****input\_url****str
        :   Fully-qualified HTTP/HTTPS URL to download.
            Validated in `__post_init__`.

        ****output\_path****pathlib.Path or None, optional
        :   Directory to write the downloaded file into. If `None`, a fresh
            temporary directory is created on the first [`download`](#scikitplot.corpus.BaseDownloader.download "scikitplot.corpus.BaseDownloader.download") call and
            owned by this instance (cleaned up on [`cleanup`](#scikitplot.corpus.BaseDownloader.cleanup "scikitplot.corpus.BaseDownloader.cleanup") / context-manager
            exit). Default: `None`.

        ****timeout****float, optional
        :   HTTP connection + read timeout in seconds. Default: `30.0`.

        ****max\_bytes****int, optional
        :   Maximum acceptable download size in bytes. Downloads that exceed
            this limit are aborted and the partial file is deleted.
            Default: `100 * 1024 * 1024` (100 MB).

        ****verify\_ssl****bool, optional
        :   Verify TLS/SSL certificates. ****Never set to**** `False` ****in
            production**** — doing so silently disables MITM protection.
            Default: `True`.

        ****block\_private\_ips****bool, optional
        :   Resolve the hostname before connecting and refuse to connect if any
            resolved address is RFC-1918 private, loopback, link-local, or
            reserved. This is the primary SSRF defence. Default: `True`.

        ****max\_redirects****int, optional
        :   Maximum number of HTTP 3xx redirects to follow. Default: `5`.

        ****user\_agent****str, optional
        :   Value for the `User-Agent` HTTP request header.
            Default: scikitplot corpus bot string.

    Attributes:
    :   ****\_tmp\_dir****pathlib.Path or None
        :   Temporary directory created by this instance, if any. `None` when
            **output\_path** was supplied by the caller.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    > **See also**
    > [`scikitplot.corpus._downloader._web.WebDownloader`](scikitplot.corpus.WebDownloader.html#scikitplot.corpus.WebDownloader "scikitplot.corpus._downloader._web.WebDownloader")
    :   Generic HTTP/HTTPS downloader.

    [`scikitplot.corpus._downloader._github.GitHubDownloader`](scikitplot.corpus.GitHubDownloader.html#scikitplot.corpus.GitHubDownloader "scikitplot.corpus._downloader._github.GitHubDownloader")
    :   GitHub blob / raw URL downloader with automatic normalisation.

    [`scikitplot.corpus._downloader._gdrive.GoogleDriveDownloader`](scikitplot.corpus.GoogleDriveDownloader.html#scikitplot.corpus.GoogleDriveDownloader "scikitplot.corpus._downloader._gdrive.GoogleDriveDownloader")
    :   Google Drive share-link downloader.

    [`scikitplot.corpus._downloader._youtube.YouTubeDownloader`](scikitplot.corpus.YouTubeDownloader.html#scikitplot.corpus.YouTubeDownloader "scikitplot.corpus._downloader._youtube.YouTubeDownloader")
    :   YouTube transcript downloader.

    [`scikitplot.corpus._downloader._downloader.AnyDownloader`](scikitplot.corpus.AnyDownloader.html#scikitplot.corpus.AnyDownloader "scikitplot.corpus._downloader._downloader.AnyDownloader")
    :   Auto-dispatching downloader — routes to the correct specialist.

    [`scikitplot.corpus._downloader._downloader.CustomDownloader`](scikitplot.corpus.CustomDownloader.html#scikitplot.corpus.CustomDownloader "scikitplot.corpus._downloader._downloader.CustomDownloader")
    :   User-supplied callable as a downloader.

    Notes

    ****Subclassing contract:****

    1. Decorate the subclass with `@dataclass`.
    2. Call `super().__post_init__()` explicitly (or rely on the MRO if
       using cooperative multiple inheritance).
    3. Override [`download`](#scikitplot.corpus.BaseDownloader.download "scikitplot.corpus.BaseDownloader.download") and call `self._resolve_dest_dir()` to
       obtain the write destination before streaming bytes to disk.
    4. Never log credentials (tokens, passwords) at any log level.

    ****Security checklist enforced in**** `__post_init__`:

    * Scheme must be `http` or `https` — no `file://`, `ftp://`, etc.
    * Hostname must not be empty.
    * (At download time) hostname is resolved and checked against private
      ranges when `block_private_ips=True`.

    Examples

    Try it in your browser!

    Subclassing (minimal):

    ```
    >>> @dataclass
    ... class EchoDownloader(BaseDownloader):
    ...     def download(self) -> DownloadResult:
    ...         dest = self._resolve_dest_dir() / "echo.txt"
    ...         dest.write_text(self.input_url)
    ...         return DownloadResult(
    ...             input_url=self.input_url, output_path=dest, suffix=".txt"
    ...         )

    ```

    Context-manager usage (automatic cleanup):

    ```
    >>> with WebDownloader("https://example.com/doc.pdf") as dl:
    ...     result = dl.download()
    ...     reader = DocumentReader.create(result.path)

    ```
    Go BackOpen In Tab

    block\_private\_ips: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.BaseDownloader.block_private_ips "Link to this definition")

    cleanup()[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_base.py#L481)[#](#scikitplot.corpus.BaseDownloader.cleanup "Link to this definition")
    :   Remove the temporary directory owned by this instance, if any.

        Safe to call multiple times. If `output_path` was supplied at
        construction time (caller-owned), this method is a no-op.

        Return type:
        :   None

    abstractmethod download()[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_base.py#L392)[#](#scikitplot.corpus.BaseDownloader.download "Link to this definition")
    :   Download the resource and return a [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult").

        Returns:
        :   DownloadResult
            :   Populated result object. `result.path` is a readable local
                file; the caller must not delete it while using it.

        Raises:
        :   ValueError
            :   On SSRF violation, size exceeded, unsupported scheme.

            OSError
            :   On filesystem errors (no space, permission denied).

            urllib.error.URLError
            :   On network errors.

        Return type:
        :   [**DownloadResult**](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus._downloader._base.DownloadResult")

    input\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_base.py#L222)[#](#scikitplot.corpus.BaseDownloader.input_url "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 104857600[#](#scikitplot.corpus.BaseDownloader.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5[#](#scikitplot.corpus.BaseDownloader.max_redirects "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BaseDownloader.output_path "Link to this definition")

    timeout: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 30.0[#](#scikitplot.corpus.BaseDownloader.timeout "Link to this definition")

    user\_agent: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.BaseDownloader.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.BaseDownloader.verify_ssl "Link to this definition")