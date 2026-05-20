# classify\_url[#](#classify-url "Link to this heading")

scikitplot.corpus.classify\_url(**url**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_url_handler.py#L379)[#](#scikitplot.corpus.classify_url "Link to this definition")
:   Classify a URL into one of the known [`URLKind`](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind "scikitplot.corpus.URLKind") categories.

    Parameters:
    :   ****url****str
        :   Full URL string. Must start with `http://` or `https://`.

    Returns:
    :   URLKind
        :   Classification result.

    Raises:
    :   ValueError
        :   If **url** does not start with `http://` or `https://`.

    Parameters:
    :   ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [**URLKind**](scikitplot.corpus.URLKind.html#scikitplot.corpus.URLKind "scikitplot.corpus._url_handler.URLKind")

    Notes

    ****Classification order matters.**** The check sequence is:

    1. YouTube channel / handle (checked before video — the `@Handle`
       path would otherwise fall through to the web-page fallback).
    2. YouTube playlist (`/playlist?list=…`).
    3. YouTube single video (`watch`, `shorts`, `embed`, `live`,
       `youtu.be`). A `watch?v=…&list=…` URL is classified as a
       single video — the `list=` param is contextual and the reader
       extracts only the `v=` video ID.
    4. Google Drive share links.
    5. GitHub blob URLs (must check before raw, since blob URLs
       are on `github.com`).
    6. GitHub raw URLs.
    7. Downloadable file (extension-based heuristic on the URL path).
    8. Web page (default fallback).

    Examples

    Try it in your browser!
    ```
    >>> classify_url("https://youtu.be/rwPISgZcYIk")
    <URLKind.YOUTUBE: 'youtube'>
    >>> classify_url("https://www.youtube.com/watch?v=4nMSvDEYl1c")
    <URLKind.YOUTUBE: 'youtube'>
    >>> classify_url("https://www.youtube.com/shorts/-6hoqujlmfU")
    <URLKind.YOUTUBE: 'youtube'>
    >>> classify_url("https://www.youtube.com/watch?v=AAk3pi15Zn4&list=PLL4_zLP7J")
    <URLKind.YOUTUBE: 'youtube'>
    >>> classify_url("https://www.youtube.com/@WHO/videos")
    <URLKind.YOUTUBE_CHANNEL: 'youtube_channel'>
    >>> classify_url("https://www.youtube.com/@WHO/shorts")
    <URLKind.YOUTUBE_CHANNEL: 'youtube_channel'>
    >>> classify_url("https://www.youtube.com/playlist?list=PLL4_zLP7J")
    <URLKind.YOUTUBE_PLAYLIST: 'youtube_playlist'>
    >>> classify_url("https://example.com/report.pdf")
    <URLKind.DOWNLOADABLE: 'downloadable'>
    >>> classify_url("https://drive.google.com/file/d/abc123/view")
    <URLKind.GOOGLE_DRIVE: 'google_drive'>
    >>> classify_url("https://example.com/article")
    <URLKind.WEB_PAGE: 'web_page'>

    ```
    Go BackOpen In Tab