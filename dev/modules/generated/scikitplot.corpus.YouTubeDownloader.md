# YouTubeDownloader[#](#youtubedownloader "Link to this heading")

class scikitplot.corpus.YouTubeDownloader(**input\_url**, **output\_path=None**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**, **mode='transcript'**, **language='en'**, **include\_auto\_generated=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/corpus/_downloader/_youtube.py#L93)[#](#scikitplot.corpus.YouTubeDownloader "Link to this definition")
:   YouTube content downloader.

    Downloads a transcript, audio track, or video from a single YouTube
    video URL. The `mode` parameter selects what is fetched.

    Parameters:
    :   ****input\_url****str
        :   YouTube video URL. Accepted forms:

            * `https://www.youtube.com/watch?v=VIDEO_ID`
            * `https://youtu.be/VIDEO_ID`
            * `https://www.youtube.com/shorts/VIDEO_ID`
            * `https://www.youtube.com/embed/VIDEO_ID`

        ****mode****{“transcript”, “audio”, “video”}, optional
        :   What to download. Default: `"transcript"`.

        ****language****str, optional
        :   BCP-47 language code for transcript fetching (e.g. `"en"`,
            `"fr"`, `"de"`). Falls back to auto-generated captions when
            the requested language is not available. Only used for
            `mode="transcript"`. Default: `"en"`.

        ****include\_auto\_generated****bool, optional
        :   When `True`, include auto-generated transcripts as a fallback
            when no human-reviewed captions exist. Default: `True`.

        ****output\_path****pathlib.Path or None, optional
        :   Directory for the downloaded file. Default: `None` (temp dir).

        ****timeout****float, optional
        :   HTTP timeout in seconds (transcript fetch and yt-dlp).
            Default: `30.0`.

        ****max\_bytes****int, optional
        :   Download size cap in bytes (audio/video modes only; transcripts are
            always small). Default: `100 MB`.

    Raises:
    :   ValueError
        :   If the URL is not a recognised YouTube single-video URL.

        ValueError
        :   If `mode` is not one of `"transcript"`, `"audio"`, `"video"`.

    Parameters:
    :   * ****input\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'transcript'****,** **'audio'****,** **'video'****]**)
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****include\_auto\_generated**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    ****Transcript mode**** uses `youtube-transcript-api` (pip-installable,
    lightweight, no browser). It writes a plain `.txt` file where each
    caption segment is a line.

    ****Audio/video modes**** require `yt-dlp` (`pip install yt-dlp`).
    They invoke `yt-dlp` programmatically via its Python API.

    ****Channels and playlists**** are not supported — pass a single video URL.

    ****SSRF prevention**** is always applied for audio/video modes (network
    calls made by yt-dlp go to YouTube CDN, which is public; the check is a
    defence-in-depth measure). Transcript mode makes its own HTTP calls
    which are also validated.

    Examples

    Try it in your browser!

    Transcript (default):

    ```
    >>> dl = YouTubeDownloader("https://www.youtube.com/watch?v=rwPISgZcYIk")
    >>> result = dl.download()
    >>> result.suffix
    '.txt'

    ```

    Audio download:

    ```
    >>> dl = YouTubeDownloader(
    ...     "https://youtu.be/rwPISgZcYIk",
    ...     mode="audio",
    ... )
    >>> result = dl.download()
    >>> result.suffix in (".mp3", ".m4a", ".webm")
    True

    ```
    Go BackOpen In Tab

    block\_private\_ips: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.YouTubeDownloader.block_private_ips "Link to this definition")

    cleanup()[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/corpus/_downloader/_base.py#L481)[#](#scikitplot.corpus.YouTubeDownloader.cleanup "Link to this definition")
    :   Remove the temporary directory owned by this instance, if any.

        Safe to call multiple times. If `output_path` was supplied at
        construction time (caller-owned), this method is a no-op.

        Return type:
        :   None

    download()[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/corpus/_downloader/_youtube.py#L207)[#](#scikitplot.corpus.YouTubeDownloader.download "Link to this definition")
    :   Download the requested content and return a [`DownloadResult`](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus.DownloadResult").

        Dispatches to `_download_transcript`,
        `_download_audio`, or `_download_video` based on
        `self.mode`.

        Returns:
        :   DownloadResult
            :   Populated result with local file path, extension, source URL.

        Raises:
        :   ImportError
            :   If `youtube-transcript-api` (transcript mode) or `yt-dlp`
                (audio/video modes) is not installed.

            ValueError
            :   If the transcript is not available for the given video/language.

        Return type:
        :   [**DownloadResult**](scikitplot.corpus.DownloadResult.html#scikitplot.corpus.DownloadResult "scikitplot.corpus._downloader._base.DownloadResult")

    include\_auto\_generated: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.YouTubeDownloader.include_auto_generated "Link to this definition")

    input\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/corpus/_downloader/_youtube.py#L93)[#](#scikitplot.corpus.YouTubeDownloader.input_url "Link to this definition")

    language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'en'[#](#scikitplot.corpus.YouTubeDownloader.language "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 104857600[#](#scikitplot.corpus.YouTubeDownloader.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5[#](#scikitplot.corpus.YouTubeDownloader.max_redirects "Link to this definition")

    mode: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")['transcript', 'audio', 'video'] = 'transcript'[#](#scikitplot.corpus.YouTubeDownloader.mode "Link to this definition")

    output\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.YouTubeDownloader.output_path "Link to this definition")

    timeout: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 30.0[#](#scikitplot.corpus.YouTubeDownloader.timeout "Link to this definition")

    user\_agent: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.YouTubeDownloader.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.YouTubeDownloader.verify_ssl "Link to this definition")