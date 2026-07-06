# CustomDownloader[#](#customdownloader "Link to this heading")

class scikitplot.corpus.CustomDownloader(**input\_url**, **output\_path=None**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**, **handler=<object object>**, **handler\_kwargs=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/corpus/_downloader/_downloader.py#L409)[#](#scikitplot.corpus.CustomDownloader "Link to this definition")
:   Wraps a user-supplied callable as a [`BaseDownloader`](scikitplot.corpus.BaseDownloader.html#scikitplot.corpus.BaseDownloader "scikitplot.corpus.BaseDownloader").

    Parameters:
    :   ****input\_url****str
        :   HTTP/HTTPS URL passed through to `handler`.

        ****handler****callable
        :   `handler(input_url: str, output_path: Path, **kwargs) -> Path`.
            Must write content to `output_path` and return the path.
            Required — raises `TypeError` at construction if not supplied.

        ****handler\_kwargs****dict or None, optional
        :   Extra keyword arguments forwarded to `handler`. Default: `None`.

        ****output\_path****pathlib.Path or None, optional
        :   Directory for the downloaded file. Default: `None` (temp dir).

        ****timeout****float, optional
        :   Forwarded via `handler_kwargs` if not already present.
            Default: `30.0`.

        ****max\_bytes****int, optional
        :   Forwarded via `handler_kwargs` if not already present.
            Default: `100 MB`.

        ****verify\_ssl****bool, optional
        :   Verify TLS certificates. Default: `True`.

        ****block\_private\_ips****bool, optional
        :   SSRF prevention. Default: `True`.

    Raises:
    :   TypeError
        :   If `handler` is not supplied or not callable.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****handler**** ([**object**](https://docs.python.org/3/library/functions.html#object "(in Python v3.14)"))
        * ****handler\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> def my_handler(input_url: str, output_path: Path, **kwargs) -> Path:
    ...     out = output_path / "file.txt"
    ...     out.write_text("content")
    ...     return out
    >>> dl = CustomDownloader("https://example.com/f", handler=my_handler)
    >>> result = dl.download()

    ```
    Go BackOpen In Tab

    block\_private\_ips: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.CustomDownloader.block_private_ips "Link to this definition")

    cleanup()[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/corpus/_downloader/_base.py#L481)[#](#scikitplot.corpus.CustomDownloader.cleanup "Link to this definition")
    :   Remove the temporary directory owned by this instance, if any.

        Safe to call multiple times. If `output_path` was supplied at
        construction time (caller-owned), this method is a no-op.

        Return type:
        :   None

    download()[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/corpus/_downloader/_downloader.py#L470)[#](#scikitplot.corpus.CustomDownloader.download "Link to this definition")
    :   Invoke the user-supplied `handler` and return a [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult").

        Returns:
        :   DownloadResult
            :   Populated from the path returned by `handler`.

        Raises:
        :   ValueError
            :   If SSRF check fails (`block_private_ips=True`).

            TypeError
            :   If `handler` returns something that cannot be coerced to Path.

            FileNotFoundError
            :   If the returned path does not exist.

        Return type:
        :   [**DownloadResult**](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus._downloader._base.DownloadResult")

    handler: [object](https://docs.python.org/3/library/functions.html#object "(in Python v3.14)") = <object object>[#](#scikitplot.corpus.CustomDownloader.handler "Link to this definition")

    handler\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomDownloader.handler_kwargs "Link to this definition")

    input\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/corpus/_downloader/_downloader.py#L409)[#](#scikitplot.corpus.CustomDownloader.input_url "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 104857600[#](#scikitplot.corpus.CustomDownloader.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5[#](#scikitplot.corpus.CustomDownloader.max_redirects "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomDownloader.output_path "Link to this definition")

    timeout: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 30.0[#](#scikitplot.corpus.CustomDownloader.timeout "Link to this definition")

    user\_agent: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.CustomDownloader.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.CustomDownloader.verify_ssl "Link to this definition")