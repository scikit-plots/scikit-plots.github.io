# GoogleDriveDownloader[#](#googledrivedownloader "Link to this heading")

class scikitplot.corpus.GoogleDriveDownloader(**input\_url**, **output\_path=None**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_gdrive.py#L129)[#](#scikitplot.corpus.GoogleDriveDownloader "Link to this definition")
:   Google Drive share-link downloader.

    Resolves any public Google Drive share URL to a direct download URL
    and streams the file to a local path. Handles the large-file
    virus-warning interstitial automatically.

    Parameters:
    :   ****input\_url****str
        :   Any supported Google Drive share URL. See module docstring for
            accepted forms.

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
        :   If the file ID cannot be extracted from `input_url` at construction.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Notes

    ****Large-file bypass:**** When Google Drive serves a virus-scan warning
    page instead of the file, this class inspects the response body for
    the `confirm=` token, rebuilds the download URL with the token, and
    re-downloads transparently.

    ****Private files:**** Only publicly shared files are supported. Files
    that require Google account authentication will raise `403 Forbidden`
    from Google’s servers. OAuth2 support is a planned future extension.

    Examples

    Try it in your browser!
    ```
    >>> dl = GoogleDriveDownloader(
    ...     "https://drive.google.com/file/d/1abc-DEF_xyz/view?usp=sharing"
    ... )
    >>> result = dl.download()
    >>> result.suffix  # determined from Content-Disposition / Content-Type
    '.pdf'

    ```

    Already-direct URL form:

    ```
    >>> dl = GoogleDriveDownloader(
    ...     "https://drive.google.com/uc?export=download&id=1abc-DEF_xyz"
    ... )
    >>> result = dl.download()

    ```
    Go BackOpen In Tab

    block\_private\_ips: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.GoogleDriveDownloader.block_private_ips "Link to this definition")

    cleanup()[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_base.py#L481)[#](#scikitplot.corpus.GoogleDriveDownloader.cleanup "Link to this definition")
    :   Remove the temporary directory owned by this instance, if any.

        Safe to call multiple times. If `output_path` was supplied at
        construction time (caller-owned), this method is a no-op.

        Return type:
        :   None

    download()[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_gdrive.py#L220)[#](#scikitplot.corpus.GoogleDriveDownloader.download "Link to this definition")
    :   Download the Google Drive file and return a [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult").

        Handles the large-file virus-warning interstitial by inspecting
        the first response for a `confirm=` token and re-issuing the
        request with the token if needed.

        Returns:
        :   DownloadResult
            :   Populated result with local file path, extension, and source URL.

        Raises:
        :   ValueError
            :   If SSRF check fails, size exceeds `max_bytes`, or the file ID
                cannot be extracted.

            requests.HTTPError
            :   On HTTP 4xx/5xx errors from Google’s servers.

            RuntimeError
            :   If the confirm-bypass loop fails (unexpected response structure).

        Return type:
        :   [**DownloadResult**](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus._downloader._base.DownloadResult")

    input\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_gdrive.py#L129)[#](#scikitplot.corpus.GoogleDriveDownloader.input_url "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 104857600[#](#scikitplot.corpus.GoogleDriveDownloader.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5[#](#scikitplot.corpus.GoogleDriveDownloader.max_redirects "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.GoogleDriveDownloader.output_path "Link to this definition")

    resolve\_download\_url()[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_downloader/_gdrive.py#L202)[#](#scikitplot.corpus.GoogleDriveDownloader.resolve_download_url "Link to this definition")
    :   Resolve the share URL to a direct Google Drive download URL.

        Returns:
        :   str
            :   Direct download URL with `?export=download&id=FILE_ID`.

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> dl = GoogleDriveDownloader("https://drive.google.com/file/d/1abc-DEF/view")
        >>> dl.resolve_download_url()
        'https://drive.google.com/uc?export=download&id=1abc-DEF'

        ```
        Go BackOpen In Tab

    timeout: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 30.0[#](#scikitplot.corpus.GoogleDriveDownloader.timeout "Link to this definition")

    user\_agent: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.GoogleDriveDownloader.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.GoogleDriveDownloader.verify_ssl "Link to this definition")