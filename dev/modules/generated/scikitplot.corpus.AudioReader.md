# AudioReader[#](#audioreader "Link to this heading")

class scikitplot.corpus.AudioReader(**input\_file**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **transcribe=False**, **whisper\_model='base'**, **classify=False**, **classifier=None**, **segment\_duration=5.0**, **segment\_overlap=1.0**, **extract\_features=False**, **txt\_as\_single\_chunk=False**, **max\_file\_bytes=5368709120**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_readers/_audio.py#L1028)[#](#scikitplot.corpus.AudioReader "Link to this definition")
:   Text extraction from audio files via companion transcript/lyrics parsing,
    Whisper ASR, and optional audio classification.

    Three extraction paths are attempted in order:

    1. ****Companion file**** — zero-dependency, instant. The reader looks
       for `.lrc`, `.srt`, `.vtt`, or `.txt` files with the same
       stem as the audio. If found, the companion is parsed; transcription
       is never invoked.
    2. ****Whisper transcription**** — opt-in. Enable with
       `transcribe=True`. Requires `faster-whisper` or
       `openai-whisper`.
    3. ****Audio classification**** — opt-in. Enable with
       `classify=True` and provide a `classifier` callable.
       For non-speech audio (animal sounds, instruments, environmental
       sounds).

    Parameters:
    :   ****input\_file****pathlib.Path
        :   Path to the audio file.

        ****transcribe****bool, optional
        :   When `True`, fall back to Whisper ASR if no companion file is
            found. When `False` (default), a missing companion file causes
            the reader to yield no chunks (unless `classify=True`).

        ****whisper\_model****str, optional
        :   Whisper model size. One of `"tiny"`, `"base"`, `"small"`,
            `"medium"`, `"large"`, `"large-v2"`, `"large-v3"`.
            Default: `"base"`.

        ****classify****bool, optional
        :   When `True`, apply audio classification using the
            `classifier` callable. Can be combined with `transcribe`:
            transcription produces speech text, classification produces
            non-speech labels. Default: `False`.

        ****classifier****callable or None, optional
        :   A callable for audio classification. Signature:

            ```
            classifier(audio_path: Path, offset: float, duration: float)
                -> list[dict[str, Any]]

            ```

            Must return dicts with `"label"` (str) and `"confidence"`
            (float). May include `"text"` (str). Required when
            `classify=True`.

        ****segment\_duration****float, optional
        :   Duration in seconds of each classification window when
            `classify=True`. Default: 5.0.

        ****segment\_overlap****float, optional
        :   Overlap in seconds between consecutive classification windows.
            Default: 1.0.

        ****extract\_features****bool, optional
        :   When `True`, extract audio features (MFCCs, chroma, spectral)
            for each segment and store them in `metadata`. Requires
            `librosa`. Default: `False`.

        ****txt\_as\_single\_chunk****bool, optional
        :   When a `.txt` companion is found, yield the entire file as one
            chunk (`True`) or one chunk per non-empty line (`False`).
            Default: `False`.

        ****max\_file\_bytes****int, optional
        :   Maximum file size in bytes. Default: 5 GB.

        ****chunker****ChunkerBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filter\_****FilterBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filename\_override****str or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****default\_language****str or None, optional
        :   ISO 639-1 language code. Used as language hint for Whisper.
            Default: `None` (auto-detect).

    Attributes:
    :   ****file\_types****list of str
        :   Class variable. Registered extensions:
            `[".mp3", ".wav", ".flac", ".ogg", ".m4a", ".wma", ".aac",
            ".aiff", ".opus", ".wv"]`.

    Raises:
    :   ValueError
        :   If `whisper_model` is not a valid Whisper model size.

        ValueError
        :   If `classify=True` but `classifier` is `None`.

        ValueError
        :   If `segment_duration <= segment_overlap`.

        ImportError
        :   If `transcribe=True` and no Whisper backend is installed.

    Parameters:
    :   * ****input\_file**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
        * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
        * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****custom\_extractor**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****custom\_extractor\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****transcribe**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****whisper\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****classify**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****classifier**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[****...****]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]****]** **|** **None**)
        * ****segment\_duration**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****segment\_overlap**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****extract\_features**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****txt\_as\_single\_chunk**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****max\_file\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    > **See also**
    > `scikitplot.corpus._readers.VideoReader`
    :   Video/subtitle reader.

    `scikitplot.corpus._readers.TextReader`
    :   Plain-text file reader.

    Notes

    ****Scenario 11 — Beethoven MP3 + Music Notes Book:****

    Build a corpus of Beethoven recordings and a book of music notes.
    Use Whisper ASR to transcribe audio segments (or provide companion
    `.lrc` files with lyrics). Each audio segment carries `timecode_start`
    and `timecode_end` for temporal alignment. Use `SimilarityIndex`
    with `MatchMode.SEMANTIC` to find which book passages match which
    audio segments — like Shazam for text-to-audio alignment.

    With `extract_features=True`, chroma features capture harmonic
    content that correlates with musical notation in the book.

    ****Scenario 12 — Animal Sounds + Children’s Book (Bremen):****

    Build a corpus of animal sound recordings using `classify=True`
    with a classifier that labels sounds (`"bird"`, `"donkey"`,
    `"cat"`, `"dog"`, `"rooster"`). Each chunk carries
    `metadata["audio_label"]` and a text description. Use
    `SimilarityIndex` with `MatchMode.KEYWORD` to match labels
    against sentences in **The Town Musicians of Bremen**.

    ****Chunk metadata keys (companion):****

    * `"text"` — lyrics line or transcript text
    * `"section_type"` — `SectionType.LYRICS` (LRC) or
      `SectionType.TEXT` (SRT/VTT/TXT)
    * `"timecode_start"` — start time in seconds (float), if available
    * `"timecode_end"` — end time in seconds (float), if available
    * `"source_type"` — `SourceType.AUDIO`
    * `"companion_format"` — `"lrc"`/`"srt"`/`"vtt"`/`"txt"`

    ****Chunk metadata keys (transcription):****

    * `"text"` — Whisper-generated transcription
    * `"section_type"` — `SectionType.TRANSCRIPT`
    * `"timecode_start"` / `"timecode_end"` — segment timecodes
    * `"confidence"` — ASR confidence (when available)
    * `"source_type"` — `SourceType.AUDIO`

    ****Chunk metadata keys (classification):****

    * `"text"` — label text or description
    * `"section_type"` — `SectionType.TEXT`
    * `"timecode_start"` / `"timecode_end"` — window timecodes
    * `"confidence"` — classification confidence
    * `"audio_label"` — classification label string (in metadata)
    * `"source_type"` — `SourceType.AUDIO`

    Examples

    Companion LRC lyrics:

    ```
    >>> from pathlib import Path
    >>> reader = AudioReader(input_file=Path("beethoven_moonlight.mp3"))
    >>> docs = list(reader.get_documents())
    >>> for d in docs[:3]:
    ...     print(f"{d.timecode_start:.1f}s: {d.text[:50]}")

    ```

    Whisper transcription:

    ```
    >>> reader = AudioReader(
    ...     input_file=Path("lecture.mp3"),
    ...     transcribe=True,
    ...     whisper_model="small",
    ...     default_language="en",
    ... )
    >>> docs = list(reader.get_documents())

    ```

    Audio classification (animal sounds):

    ```
    >>> def my_classifier(path, offset, duration):
    ...     # Your classification model here
    ...     return [{"label": "bird", "confidence": 0.95, "text": "bird chirping"}]
    >>> reader = AudioReader(
    ...     input_file=Path("forest_sounds.wav"),
    ...     classify=True,
    ...     classifier=my_classifier,
    ...     segment_duration=3.0,
    ... )
    >>> docs = list(reader.get_documents())

    ```

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.AudioReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    classifier: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[...], [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]]] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.AudioReader.classifier "Link to this definition")
    :   Audio classification callable. Signature:

        ```
        classifier(audio_path: Path, offset: float, duration: float)
            -> list[dict[str, Any]]

        ```

        Required when `classify=True`.

    classify: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.AudioReader.classify "Link to this definition")
    :   Enable audio classification via `classifier` callable.

    classmethod create(**\*inputs**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L1239)[#](#scikitplot.corpus.AudioReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.AudioReader.from_url "scikitplot.corpus.AudioReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*inputs****pathlib.Path or str
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.AudioReader.from_url "scikitplot.corpus.AudioReader.from_url"). ****Must be passed as
                  a plain ``str``, not wrapped in**** `pathlib.Path`; wrapping
                  collapses the double-slash (`https://` → `https:/`) and
                  breaks URL detection.
                * `str` not matching the URL pattern — treated as a local
                  file path and converted to [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") internally.
                * [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") — always treated as a local file path
                  and dispatched by extension via the reader registry.

                Pass a single value for the common case; pass multiple values
                to get a [`_MultiSourceReader`](scikitplot.corpus._MultiSourceReader.html#scikitplot.corpus._MultiSourceReader "scikitplot.corpus._MultiSourceReader") that chains all their
                documents in order.

            ****chunker****ChunkerBase or None, optional
            :   Chunker injected into every reader. Default: `None`.

            ****filter\_****FilterBase or None, optional
            :   Filter injected into every reader. Default: `None`
                ([`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter")).

            ****filename\_override****str or None, optional
            :   Override the `source_file` label. Only applied when
                **inputs** contains exactly one source. Default: `None`.

            ****default\_language****str or None, optional
            :   ISO 639-1 language code applied to all sources.
                Default: `None`.

            ****source\_type****SourceType, list[SourceType or None], or None, optional
            :   Semantic label for the source kind. When **inputs** has more
                than one element you may pass a list of the same length to
                assign a distinct type per source; `None` entries in the
                list mean “infer from extension / URL”. A single value is
                broadcast to all sources. Default: `None`.

            ****source\_title****str or None, optional
            :   Title propagated into every yielded document. Default: `None`.

            ****source\_author****str or None, optional
            :   Author propagated into every yielded document. Default: `None`.

            ****source\_date****str or None, optional
            :   ISO 8601 publication date. Default: `None`.

            ****collection\_id****str or None, optional
            :   Corpus collection identifier. Default: `None`.

            ****doi****str or None, optional
            :   Digital Object Identifier (file sources only). Default: `None`.

            ****isbn****str or None, optional
            :   ISBN (file sources only). Default: `None`.

            ****\*\*kwargs****Any
            :   Extra keyword arguments forwarded verbatim to each concrete
                reader constructor (e.g. `transcribe=True` for
                [`AudioReader`](#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader"), `backend="easyocr"` for
                [`ImageReader`](scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader")).

        Returns:
        :   DocumentReader
            :   A single reader when **inputs** has exactly one element (backward
                compatible with every existing call site). A
                [`_MultiSourceReader`](scikitplot.corpus._MultiSourceReader.html#scikitplot.corpus._MultiSourceReader "scikitplot.corpus._MultiSourceReader") when **inputs** has more than one
                element — it implements the same `get_documents()` interface
                and chains documents from all sub-readers in order.

        Raises:
        :   ValueError
            :   If **inputs** is empty, or if a source URL is invalid, or if no
                reader is registered for a file’s extension.

            TypeError
            :   If any element of **inputs** is not a `str` or
                [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)").

        Parameters:
        :   * ****inputs**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
            * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_type**** (**SourceType** **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****SourceType** **|** **None****]** **|** **None**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_date**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****doi**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****isbn**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

        Notes

        ****URL auto-detection:**** A `str` element is treated as a URL when
        it matches `^https?://` (case-insensitive). All other strings
        and all [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") objects are treated as local file
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.AudioReader.from_url "scikitplot.corpus.AudioReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.AudioReader.create "scikitplot.corpus.AudioReader.create").

        ****Per-source source\_type:**** When passing multiple inputs with
        different media types, supply a list:

        ```
        DocumentReader.create(
            Path("podcast.mp3"),
            "report.pdf",
            "https://iris.who.int/.../content",  # returns image/jpeg
            source_type=[SourceType.PODCAST, SourceType.RESEARCH, SourceType.IMAGE],
        )

        ```

        ****Reader-specific kwargs**** (forwarded via `**kwargs`):

        * `transcribe=True`, `whisper_model="small"` → [`AudioReader`](#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader"),
          [`VideoReader`](scikitplot.corpus.VideoReader.html#scikitplot.corpus.VideoReader "scikitplot.corpus.VideoReader")
        * `backend="easyocr"` → [`ImageReader`](scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader")
        * `prefer_backend="pypdf"` → [`PDFReader`](scikitplot.corpus.PDFReader.html#scikitplot.corpus.PDFReader "scikitplot.corpus.PDFReader")
        * `classify=True`, `classifier=fn` → [`AudioReader`](#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader")

        Examples

        Single file (backward-compatible):

        ```
        >>> reader = DocumentReader.create(Path("hamlet.txt"))
        >>> docs = list(reader.get_documents())

        ```

        URL string auto-detected — no from\_url() call required:

        ```
        >>> reader = DocumentReader.create(
        ...     "https://en.wikipedia.org/wiki/Python_(programming_language)"
        ... )

        ```

        Mixed multi-source batch:

        ```
        >>> reader = DocumentReader.create(
        ...     Path("podcast.mp3"),
        ...     "report.pdf",
        ...     "https://iris.who.int/api/bitstreams/abc/content",
        ...     source_type=[SourceType.PODCAST, SourceType.RESEARCH, SourceType.IMAGE],
        ... )
        >>> docs = list(reader.get_documents())  # chained stream from all three

        ```

    custom\_extractor: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[...], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.AudioReader.custom_extractor "Link to this definition")
    :   User-supplied audio extraction callable. When set, this callable is
        called ****first**** — before companion-file detection, Whisper ASR, and
        audio classification — and its output is used exclusively.

        Signature:

        ```
        def extractor(path: pathlib.Path, **kwargs) -> ExtractorOutput

        ```

        where `ExtractorOutput` is `str`, `list[str]`, `dict`, or
        `list[dict]`. Every dict must contain a `"text"` key. Dicts may
        also include `"timecode_start"` and `"timecode_end"` (float,
        seconds) to populate the corresponding
        `CorpusDocument` fields.

        Common use-cases: `whisperX` (speaker diarization), proprietary ASR
        APIs (Google Cloud Speech, AWS Transcribe, Azure Speech), or any
        library not supported by the built-in strategies. Default: `None`.

        Examples

        ```
        >>> def whisperx_extract(path, language="en", **kw):
        ...     import whisperx
        ...     model = whisperx.load_model("large-v3", device="cpu")
        ...     result = model.transcribe(str(path), language=language)
        ...     return [{"text": s["text"].strip(),
        ...              "timecode_start": s["start"],
        ...              "timecode_end": s["end"]}
        ...             for s in result["segments"] if s["text"].strip()]
        >>> reader = AudioReader(
        ...     input_file=Path("interview.mp3"),
        ...     custom_extractor=whisperx_extract,
        ...     custom_extractor_kwargs={"language": "de"},
        ... )

        ```

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_readers/_audio.py#L1028)[#](#scikitplot.corpus.AudioReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.AudioReader.custom_extractor "scikitplot.corpus.AudioReader.custom_extractor") on every
        call. Only used when [`custom_extractor`](#scikitplot.corpus.AudioReader.custom_extractor "scikitplot.corpus.AudioReader.custom_extractor") is set. Default: `{}`.

    default\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.AudioReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    extract\_features: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.AudioReader.extract_features "Link to this definition")
    :   Extract audio features (MFCCs, chroma) via librosa.

    property file\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.AudioReader.file_name "Link to this definition")
    :   Effective filename used in document labels.

        Returns `filename_override` when set; otherwise returns
        `input_file.name`.

        Returns:
        :   str
            :   File name string (not a full path).

        Examples

        ```
        >>> from pathlib import Path
        >>> reader = TextReader(input_file=Path("/data/corpus.txt"))
        >>> reader.file_name
        'corpus.txt'

        ```

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] = None[#](#scikitplot.corpus.AudioReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] = ['.mp3', '.wav', '.flac', '.ogg', '.m4a', '.wma', '.aac', '.aiff', '.opus', '.wv'][#](#scikitplot.corpus.AudioReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.AudioReader.filename_override "Link to this definition")
    :   Override for the `source_file` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.AudioReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` triggers the [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter").

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L1556)[#](#scikitplot.corpus.AudioReader.from_manifest "Link to this definition")
    :   Build a [`_MultiSourceReader`](scikitplot.corpus._MultiSourceReader.html#scikitplot.corpus._MultiSourceReader "scikitplot.corpus._MultiSourceReader") from a manifest file.

        The manifest is a text file with one source per line — either a
        file path or a URL. Blank lines and lines starting with `#`
        are ignored. JSON manifests (a list of strings or objects) are
        also supported.

        Parameters:
        :   ****manifest\_path****pathlib.Path or str
            :   Path to the manifest file. Supported formats:

                * `.txt` / `.manifest` — one source per line.
                * `.json` — a JSON array of strings (sources) or objects
                  with at least a `"source"` key (and optional
                  `"source_type"`, `"source_title"` per-entry overrides).

            ****chunker****ChunkerBase or None, optional
            :   Chunker applied to all sources. Default: `None`.

            ****filter\_****FilterBase or None, optional
            :   Filter applied to all sources. Default: `None`.

            ****default\_language****str or None, optional
            :   ISO 639-1 language code. Default: `None`.

            ****source\_type****SourceType or None, optional
            :   Override source type for all sources. Default: `None`.

            ****source\_title****str or None, optional
            :   Override title for all sources. Default: `None`.

            ****source\_author****str or None, optional
            :   Override author for all sources. Default: `None`.

            ****source\_date****str or None, optional
            :   Override date for all sources. Default: `None`.

            ****collection\_id****str or None, optional
            :   Collection identifier. Default: `None`.

            ****doi****str or None, optional
            :   DOI override. Default: `None`.

            ****isbn****str or None, optional
            :   ISBN override. Default: `None`.

            ****encoding****str, optional
            :   Text encoding for `.txt` manifests. Default: `"utf-8"`.

            ****\*\*kwargs****Any
            :   Forwarded to each reader constructor.

        Returns:
        :   \_MultiSourceReader
            :   Multi-source reader chaining all manifest entries.

        Raises:
        :   ValueError
            :   If **manifest\_path** does not exist or is empty after filtering
                blank and comment lines.

            ValueError
            :   If the manifest format is not recognised.

        Parameters:
        :   * ****manifest\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_type**** (**SourceType** **|** **None**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_date**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****doi**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****isbn**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****encoding**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**\_MultiSourceReader**](scikitplot.corpus._MultiSourceReader.html#scikitplot.corpus._MultiSourceReader "scikitplot.corpus._base._MultiSourceReader")

        Notes

        Per-entry overrides in JSON manifests: each entry may be an
        object with:

        ```
        {
            "source": "https://example.com/report.pdf",
            "source_type": "research",
            "source_title": "Annual Report 2024",
        }

        ```

        String-level `source_type` values are coerced via
        `SourceType(value)` and an invalid value raises `ValueError`.

        Examples

        Text manifest `sources.txt`:

        ```
        # WHO corpus
        https://www.who.int/europe/news/item/...
        https://youtu.be/rwPISgZcYIk
        WHO-EURO-2025.pdf
        scan.jpg

        ```

        Usage:

        ```
        reader = DocumentReader.from_manifest(
            Path("sources.txt"),
            collection_id="who-corpus",
        )
        docs = list(reader.get_documents())

        ```

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L1752)[#](#scikitplot.corpus.AudioReader.from_url "Link to this definition")
    :   Instantiate the appropriate reader for a URL source.

        Dispatches to `YouTubeReader`
        for YouTube URLs and to
        `WebReader` for all other
        `http://` / `https://` URLs.

        Parameters:
        :   ****url****str
            :   Full URL string. Must start with `http://` or `https://`.

            ****chunker****ChunkerBase or None, optional
            :   Chunker to inject. Default: `None`.

            ****filter\_****FilterBase or None, optional
            :   Filter to inject. Default: `None` ([`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter")).

            ****filename\_override****str or None, optional
            :   Override for the `source_file` label. Default: `None`.

            ****default\_language****str or None, optional
            :   ISO 639-1 language code. Default: `None`.

            ****source\_type****SourceType or None, optional
            :   Semantic label for the source. Default: `None`.

            ****source\_title****str or None, optional
            :   Title of the source work. Default: `None`.

            ****source\_author****str or None, optional
            :   Primary author. Default: `None`.

            ****source\_date****str or None, optional
            :   Publication date in ISO 8601 format. Default: `None`.

            ****collection\_id****str or None, optional
            :   Corpus collection identifier. Default: `None`.

            ****doi****str or None, optional
            :   Digital Object Identifier. Default: `None`.

            ****isbn****str or None, optional
            :   International Standard Book Number. Default: `None`.

            ****\*\*kwargs****Any
            :   Additional kwargs forwarded to the reader constructor (e.g.
                `include_auto_generated=False` for [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")).

        Returns:
        :   DocumentReader
            :   `YouTubeReader` or
                `WebReader` instance.

        Raises:
        :   ValueError
            :   If `url` does not start with `http://` or `https://`.

            ImportError
            :   If the required reader class is not registered (i.e.
                `scikitplot.corpus._readers` has not been imported yet).

        Parameters:
        :   * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
            * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_type**** (**SourceType** **|** **None**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_date**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****doi**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****isbn**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

        Notes

        ****Prefer :meth:`create` for new code.**** Passing a URL string to
        [`create`](#scikitplot.corpus.AudioReader.create "scikitplot.corpus.AudioReader.create") automatically calls [`from_url`](#scikitplot.corpus.AudioReader.from_url "scikitplot.corpus.AudioReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.AudioReader.from_url "scikitplot.corpus.AudioReader.from_url") directly.

        Examples

        ```
        >>> reader = DocumentReader.from_url("https://en.wikipedia.org/wiki/Python")
        >>> docs = list(reader.get_documents())

        ```
        ```
        >>> yt = DocumentReader.from_url("https://www.youtube.com/watch?v=rwPISgZcYIk")
        >>> docs = list(yt.get_documents())

        ```

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L940)[#](#scikitplot.corpus.AudioReader.get_documents "Link to this definition")
    :   Yield validated `CorpusDocument`
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.AudioReader.validate_input "scikitplot.corpus.AudioReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.AudioReader.get_raw_chunks "scikitplot.corpus.AudioReader.get_raw_chunks") — format-specific text extraction.
        3. Chunker (if set) — sub-segments each raw block.
        4. `CorpusDocument` construction with validated schema.
        5. Filter — discards noise documents.

        Yields:
        :   CorpusDocument
            :   Validated documents that passed the filter.

        Raises:
        :   ValueError
            :   If the input file is missing or the format is invalid.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[**CorpusDocument**, None, None]

        Notes

        The global `chunk_index` counter is monotonically increasing across
        ****all**** raw chunks and sub-chunks for a single file, ensuring that
        `(source_file, chunk_index)` is a unique key within one reader run.

        Omitted-document statistics are logged at INFO level after processing
        each file.

        Examples

        ```
        >>> from pathlib import Path
        >>> reader = DocumentReader.create(Path("corpus.txt"))
        >>> docs = list(reader.get_documents())
        >>> all(isinstance(d, CorpusDocument) for d in docs)
        True

        ```

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_readers/_audio.py#L1359)[#](#scikitplot.corpus.AudioReader.get_raw_chunks "Link to this definition")
    :   Attempts companion detection first. Falls back to Whisper only
        when `transcribe=True` and no companion was found. Classification
        via `classify=True` runs independently (can combine with
        transcription).

        Yields:
        :   dict
            :   Keys always include `"text"` and `"section_type"`.
                May include `"timecode_start"`, `"timecode_end"`,
                `"confidence"`, `"source_type"`, and format-specific keys.

        Raises:
        :   ValueError
            :   If the file exceeds `max_file_bytes`.

            ImportError
            :   If `transcribe=True` and Whisper is not installed.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")], None, None]

    input\_file: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_readers/_audio.py#L1028)[#](#scikitplot.corpus.AudioReader.input_file "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    max\_file\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5368709120[#](#scikitplot.corpus.AudioReader.max_file_bytes "Link to this definition")
    :   5 GB.

        Type:
        :   Maximum audio file size. Default

    segment\_duration: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 5.0[#](#scikitplot.corpus.AudioReader.segment_duration "Link to this definition")
    :   5.0.

        Type:
        :   Classification window duration in seconds. Default

    segment\_overlap: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 1.0[#](#scikitplot.corpus.AudioReader.segment_overlap "Link to this definition")
    :   1.0.

        Type:
        :   Classification window overlap in seconds. Default

    source\_provenance: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_readers/_audio.py#L1028)[#](#scikitplot.corpus.AudioReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.AudioReader.create "scikitplot.corpus.AudioReader.create") / [`from_url`](#scikitplot.corpus.AudioReader.from_url "scikitplot.corpus.AudioReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.AudioReader.source_uri "Link to this definition")
    :   Original URI for URL-based readers (web pages, YouTube videos).

        Set this to the full URL string when `input_file` is a synthetic
        `pathlib.Path` wrapping a URL. File-based readers leave this
        `None`.

        Examples

        ```
        >>> reader = WebReader(
        ...     input_file=Path("https://example.com/article"),
        ...     source_uri="https://example.com/article",
        ... )

        ```

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L1128)[#](#scikitplot.corpus.AudioReader.subclass_by_type "Link to this definition")
    :   Return a copy of the extension → reader class registry.

        Returns:
        :   dict
            :   Mapping of file extension (str) → reader class. Returns a
                shallow copy so callers cannot accidentally mutate the registry.

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [type](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")[[**DocumentReader**](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")]]

        Examples

        ```
        >>> registry = DocumentReader.subclass_by_type()
        >>> ".txt" in registry
        True

        ```

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L1110)[#](#scikitplot.corpus.AudioReader.supported_types "Link to this definition")
    :   Return a sorted list of file extensions supported by registered readers.

        Returns:
        :   list of str
            :   Lowercase file extensions, each including the leading dot.
                E.g. `['.pdf', '.txt', '.xml', '.zip']`.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

        Examples

        ```
        >>> DocumentReader.supported_types()
        ['.pdf', '.txt', '.xml', '.zip']

        ```

    transcribe: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.AudioReader.transcribe "Link to this definition")
    :   Enable Whisper ASR fallback when no companion file is found.

    txt\_as\_single\_chunk: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.AudioReader.txt_as_single_chunk "Link to this definition")
    :   Yield entire `.txt` companion as one chunk if `True`.

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_base.py#L755)[#](#scikitplot.corpus.AudioReader.validate_input "Link to this definition")
    :   Assert that the input file exists and is readable.

        Raises:
        :   ValueError
            :   If `input_file` does not exist or is not a regular file.

        Return type:
        :   None

        Notes

        Called automatically by [`get_documents`](#scikitplot.corpus.AudioReader.get_documents "scikitplot.corpus.AudioReader.get_documents") before iterating.
        Can also be called eagerly after construction to fail fast.

        Examples

        ```
        >>> reader = DocumentReader.create(Path("missing.txt"))
        >>> reader.validate_input()
        Traceback (most recent call last):
            ...
        ValueError: Input file does not exist: missing.txt

        ```

    whisper\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'base'[#](#scikitplot.corpus.AudioReader.whisper_model "Link to this definition")
    :   `"base"`.

        Type:
        :   Whisper model size for transcription. Default