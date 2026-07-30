# resolve\_url[#](#resolve-url "Link to this heading")

scikitplot.corpus.resolve\_url(**url**, **kind=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/corpus/_url_handler.py#L761)[#](#scikitplot.corpus.resolve_url "Link to this definition")
:   Resolve a provider-specific URL to a direct-download URL.

    Parameters:
    :   ****url****str
        :   Original URL.

        ****kind****URLKind or None, optional
        :   Pre-computed classification. If `None`, [`classify_url`](scikitplot.corpus.classify_url.html#scikitplot.corpus.classify_url "scikitplot.corpus.classify_url")
            is called. Default: `None`.

    Returns:
    :   str
        :   Direct-download URL. For `WEB_PAGE` and `YOUTUBE` kinds,
            the original URL is returned unchanged (they are not
            download targets). For `DOWNLOADABLE` and `GITHUB_RAW`,
            the URL is returned as-is (already direct). For
            `GOOGLE_DRIVE` and `GITHUB_BLOB`, the resolved URL
            is returned.

    Raises:
    :   ValueError
        :   If the URL cannot be resolved (e.g. malformed Google Drive link).

    Parameters:
    :   * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****kind**** ([**URLKind**](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind "scikitplot.corpus._url_handler.URLKind") **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> resolve_url("https://drive.google.com/file/d/abc123/view")
    'https://drive.google.com/uc?export=download&id=abc123'
    >>> resolve_url("https://github.com/user/repo/blob/main/data.csv")
    'https://raw.githubusercontent.com/user/repo/main/data.csv'

    ```
    Go BackOpen In Tab