# CustomReader[#](#customreader "Link to this heading")

class scikitplot.corpus.CustomReader(**input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **extractor=None**, **extensions=None**, **reader\_kwargs=<factory>**, **default\_source\_type=SourceType.UNKNOWN**, **default\_section\_type=SectionType.TEXT**, **validate\_file=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L295)[#](#scikitplot.corpus.CustomReader "Link to this definition")
:   Fully user-customizable reader for any file extension and resource type.

    [`CustomReader`](#scikitplot.corpus.CustomReader "scikitplot.corpus.CustomReader") accepts **any** file extension and a caller-supplied
    **extractor** callable as its text-extraction engine. This lets users
    integrate arbitrary third-party or proprietary extraction libraries —
    `pdfplumber`, `surya`, `docling`, proprietary ASR/OCR APIs,
    in-memory streams — without writing a full [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus.DocumentReader")
    subclass.

    Two usage modes are supported:

    ****Direct use**** (bypass the extension registry):

    ```
    reader = CustomReader(
        input_path=Path("report.xyz"),
        extractor=my_extractor_fn,
    )
    docs = list(reader.get_documents())

    ```

    ****Registered use**** (wire into `DocumentReader.create()`):

    ```
    CustomReader.register(
        name="XYZReader",
        extensions=[".xyz"],
        extractor=my_extractor_fn,
    )
    # DocumentReader.create(Path("report.xyz")) now works automatically.

    ```

    Parameters:
    :   ****input\_path****pathlib.Path
        :   Path to the source file (or a synthetic path for non-filesystem
            resources — set `validate_file=False` in that case).

        ****extractor****callable or None, optional
        :   User-supplied extraction function. Signature:

            ```
            def extractor(path: pathlib.Path, **kwargs) -> ExtractorOutput

            ```

            where `ExtractorOutput` is one of:

            * `str` — full-file text as one chunk.
            * `list[str]` — one string per logical segment.
            * `dict` — single chunk with `"text"` key and optional metadata.
            * `list[dict]` — multiple chunks, each with a `"text"` key.

            `None` is accepted so that [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register")-produced subclasses
            can be instantiated without explicitly passing an extractor (the
            bound extractor is injected by `__post_init__` in the subclass).
            Raises [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.14)") at extraction time if still `None`.
            Default: `None`.

        ****extensions****list of str or None, optional
        :   File extensions this instance handles (e.g. `[".abc"]`). Used
            only by [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register") to label the generated subclass; has no
            effect in single-instance usage. Default: `None`.

        ****reader\_kwargs****dict, optional
        :   Extra keyword arguments forwarded to `extractor` on every call.
            Default: `{}` (empty).

        ****default\_source\_type****SourceType, optional
        :   Fallback source type for chunks where the extractor does not set
            `"source_type"`.
            Default: `UNKNOWN`.

        ****default\_section\_type****SectionType, optional
        :   Fallback section type for chunks where the extractor does not set
            `"section_type"`.
            Default: `TEXT`.

        ****validate\_file****bool, optional
        :   When `True` (default), [`validate_input`](#scikitplot.corpus.CustomReader.validate_input "scikitplot.corpus.CustomReader.validate_input") checks that
            `input_path` exists and is a regular file before extraction.
            Set to `False` for non-filesystem sources (network streams,
            in-memory paths) where `input_path` is a synthetic path.
            Default: `True`.

        ****chunker****ChunkerBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filter\_****FilterBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filename\_override****str or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****default\_language****str or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

    Attributes:
    :   ****file\_type****ClassVar[None]
        :   Always `None`. [`CustomReader`](#scikitplot.corpus.CustomReader "scikitplot.corpus.CustomReader") does not auto-register for
            any extension. Use [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register") to create a registered subclass.

    Raises:
    :   TypeError
        :   If `extractor` is not callable (and not `None`).

        ValueError
        :   If any element of `extensions` does not start with `'.'` or
            `':'`.

        ValueError
        :   If `extractor` is `None` when [`get_raw_chunks`](#scikitplot.corpus.CustomReader.get_raw_chunks "scikitplot.corpus.CustomReader.get_raw_chunks") is called.

    Parameters:
    :   * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
        * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
        * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****custom\_extractor**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)
        * ****custom\_extractor\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****extractor**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****extensions**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****reader\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****default\_source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType"))
        * ****default\_section\_type**** ([**SectionType**](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType"))
        * ****validate\_file**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    > **See also**
    > [`CustomReader.register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register")
    :   Dynamically register a named subclass.

    [`normalize_extractor_output`](scikitplot.corpus.normalize_extractor_output.html#scikitplot.corpus.normalize_extractor_output "scikitplot.corpus.normalize_extractor_output")
    :   Coerce extractor return values.

    `scikitplot.corpus._readers.PDFReader`
    :   Built-in PDF reader with `prefer_backend="custom"` option.

    `scikitplot.corpus._readers.ImageReader`
    :   Built-in image reader with `backend="custom"` option.

    [`scikitplot.corpus._base.DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")
    :   Abstract base class.

    Notes

    ****Extractor kwargs**** — `reader_kwargs` is forwarded as
    `**reader_kwargs` to the extractor. Use it to pass library-specific
    options (e.g. `{"password": "hunter2"}` for an encrypted PDF extractor,
    or `{"language": "en"}` for an ASR extractor).

    ****Thread safety**** — [`CustomReader`](#scikitplot.corpus.CustomReader "scikitplot.corpus.CustomReader") instances are not thread-safe.
    Create one instance per thread when parallelising.

    ****Empty chunks**** — the downstream [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter") discards
    whitespace-only chunks, consistent with all other readers. Empty strings
    returned by the extractor are silently skipped.

    Examples

    Try it in your browser!

    Plug in `pdfplumber` as a custom PDF backend:

    ```
    >>> import pdfplumber
    >>> from pathlib import Path
    >>> from scikitplot.corpus._readers._custom import CustomReader
    >>>
    >>> def pdfplumber_extract(path, **kw):
    ...     with pdfplumber.open(path) as pdf:
    ...         return [
    ...             {"text": page.extract_text() or "", "page_number": i}
    ...             for i, page in enumerate(pdf.pages)
    ...         ]
    >>>
    >>> reader = CustomReader(
    ...     input_path=Path("report.pdf"),
    ...     extractor=pdfplumber_extract,
    ... )
    >>> docs = list(reader.get_documents())

    ```

    Register globally and use via factory:

    ```
    >>> CustomReader.register(
    ...     name="PdfPlumberReader",
    ...     extensions=[".pdf"],
    ...     extractor=pdfplumber_extract,
    ...     default_source_type=SourceType.RESEARCH,
    ... )
    >>> reader = DocumentReader.create(Path("report.pdf"))
    >>> docs = list(reader.get_documents())

    ```

    Custom audio transcription (e.g. a proprietary ASR API):

    ```
    >>> def my_asr(path, language="en", **kw):
    ...     result = my_asr_client.transcribe(path, lang=language)
    ...     return [
    ...         {"text": seg.text, "timecode_start": seg.start, "timecode_end": seg.end}
    ...         for seg in result.segments
    ...     ]
    >>>
    >>> CustomReader.register(
    ...     name="MyASRReader",
    ...     extensions=[".mp3", ".wav", ".flac"],
    ...     extractor=my_asr,
    ...     reader_kwargs={"language": "de"},
    ...     default_source_type=SourceType.PODCAST,
    ... )

    ```

    Non-filesystem source (validate\_file=False):

    ```
    >>> def stream_extractor(path, **kw):
    ...     # path is a synthetic Path wrapping a stream identifier
    ...     data = fetch_from_stream(str(path))
    ...     return data.decode("utf-8")
    >>>
    >>> reader = CustomReader(
    ...     input_path=Path("stream://channel/42"),
    ...     extractor=stream_extractor,
    ...     validate_file=False,
    ... )

    ```
    Go BackOpen In Tab

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    classmethod create(**\*input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1239)[#](#scikitplot.corpus.CustomReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.CustomReader.from_url "scikitplot.corpus.CustomReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*input\_path****str or pathlib.Path
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.CustomReader.from_url "scikitplot.corpus.CustomReader.from_url"). ****Must be passed as
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
            :   Override the `input_path` label. Only applied when
                **input\_path** contains exactly one source. Default: `None`.

            ****default\_language****str or None, optional
            :   ISO 639-1 language code applied to all sources.
                Default: `None`.

            ****source\_type****SourceType, list[SourceType or None], or None, optional
            :   Semantic label for the source kind. When **input\_path** has more
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
                [`AudioReader`](scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader"), `backend="easyocr"` for
                [`ImageReader`](scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader")).

        Returns:
        :   DocumentReader
            :   A single reader when **input\_path** has exactly one element (backward
                compatible with every existing call site). A
                [`_MultiSourceReader`](scikitplot.corpus._MultiSourceReader.html#scikitplot.corpus._MultiSourceReader "scikitplot.corpus._MultiSourceReader") when **input\_path** has more than one
                element — it implements the same `get_documents()` interface
                and chains documents from all sub-readers in order.

        Raises:
        :   ValueError
            :   If **input\_path** is empty, or if a source URL is invalid, or if no
                reader is registered for a file’s extension.

            TypeError
            :   If any element of **input\_path** is not a `str` or
                [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)").

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
            * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") **|** **None****]** **|** **None**)
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
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.CustomReader.from_url "scikitplot.corpus.CustomReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.CustomReader.create "scikitplot.corpus.CustomReader.create").

        ****Per-source source\_type:**** When passing multiple input\_path with
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

        * `transcribe=True`, `whisper_model="small"` → [`AudioReader`](scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader"),
          [`VideoReader`](scikitplot.corpus.VideoReader.html#scikitplot.corpus.VideoReader "scikitplot.corpus.VideoReader")
        * `backend="easyocr"` → [`ImageReader`](scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader")
        * `prefer_backend="pypdf"` → [`PDFReader`](scikitplot.corpus.PDFReader.html#scikitplot.corpus.PDFReader "scikitplot.corpus.PDFReader")
        * `classify=True`, `classifier=fn` → [`AudioReader`](scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader")

        Examples

        Try it in your browser!

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
        Go BackOpen In Tab

    custom\_extractor: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.custom_extractor "Link to this definition")
    :   User-supplied extraction callable that ****replaces**** [`get_raw_chunks`](#scikitplot.corpus.CustomReader.get_raw_chunks "scikitplot.corpus.CustomReader.get_raw_chunks")
        entirely for this reader instance.

        When set, `_iter_raw_chunks` calls
        `custom_extractor(self.input_path, **custom_extractor_kwargs)` and
        normalises the return value through
        `normalize_extractor_output`.
        The built-in [`get_raw_chunks`](#scikitplot.corpus.CustomReader.get_raw_chunks "scikitplot.corpus.CustomReader.get_raw_chunks") implementation is ****not**** called.

        This hook is available on ****every**** reader class
        (`ALTOReader`, `TextReader`, `PDFReader`, `ImageReader`, etc.)
        without any subclassing — simply pass a callable at construction time.

        Examples

        Try it in your browser!

        Override PDF extraction with `pdfplumber` for a single reader:

        ```
        import pdfplumber
        from pathlib import Path
        from scikitplot.corpus._base import DocumentReader

        def plumber_fn(path, **kw):
            with pdfplumber.open(path) as pdf:
                return [{"text": p.extract_text() or "", "page_number": i}
                        for i, p in enumerate(pdf.pages)]

        reader = DocumentReader.create(
            Path("report.pdf"),
            custom_extractor=plumber_fn,
        )
        docs = list(reader.get_documents())

        ```
        Go BackOpen In Tab

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L295)[#](#scikitplot.corpus.CustomReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.CustomReader.custom_extractor "scikitplot.corpus.CustomReader.custom_extractor") on every
        invocation. Merged into the call as `**custom_extractor_kwargs`.

        Examples

        Try it in your browser!
        ```
        reader = DocumentReader.create(
            Path("report.pdf"),
            custom_extractor=my_fn,
            custom_extractor_kwargs={"password": "s3cret", "pages": [0, 1, 2]},
        )

        ```
        Go BackOpen In Tab

    default\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    default\_section\_type: [SectionType](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType") = 'text'[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.CustomReader.default_section_type "Link to this definition")
    :   Fallback [`SectionType`](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType") for chunks
        where the extractor does not set `"section_type"`.

    default\_source\_type: [SourceType](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") = 'unknown'[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.CustomReader.default_source_type "Link to this definition")
    :   Fallback [`SourceType`](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") for chunks
        where the extractor does not set `"source_type"`.

    extensions: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.extensions "Link to this definition")
    :   Extensions this instance handles. Informational only for single-instance
        usage; meaningful for [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register") where it controls which extensions
        are wired into the [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")
        registry.

    extractor: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[...], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.extractor "Link to this definition")
    :   User-supplied extraction callable. Accepts [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") plus
        any `**reader_kwargs` and must return a value normalizable by
        [`normalize_extractor_output`](scikitplot.corpus.normalize_extractor_output.html#scikitplot.corpus.normalize_extractor_output "scikitplot.corpus.normalize_extractor_output"). `None` is allowed here so that
        [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register")-generated subclasses can be instantiated through the
        `create` factory without
        explicitly passing an extractor. Raises [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.14)") at
        extraction time if still `None`.

    property file\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.CustomReader.file_name "Link to this definition")
    :   Effective filename used in document labels.

        Returns `filename_override` when set; otherwise returns
        `input_path.name`.

        Returns:
        :   str
            :   File name string (not a full path).

        Examples

        Try it in your browser!
        ```
        >>> from pathlib import Path
        >>> reader = TextReader(input_path=Path("/data/corpus.txt"))
        >>> reader.file_name
        'corpus.txt'

        ```
        Go BackOpen In Tab

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] = None[#](#scikitplot.corpus.CustomReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L295)[#](#scikitplot.corpus.CustomReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.filename_override "Link to this definition")
    :   Override for the `input_path` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` triggers the [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter").

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1556)[#](#scikitplot.corpus.CustomReader.from_manifest "Link to this definition")
    :   Build a [`_MultiSourceReader`](scikitplot.corpus._MultiSourceReader.html#scikitplot.corpus._MultiSourceReader "scikitplot.corpus._MultiSourceReader") from a manifest file.

        The manifest is a text file with one source per line — either a
        file path or a URL. Blank lines and lines starting with `#`
        are ignored. JSON manifests (a list of strings or objects) are
        also supported.

        Parameters:
        :   ****manifest\_path****str or pathlib.Path
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
        :   * ****manifest\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") **|** **None**)
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

        Try it in your browser!

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
        Go BackOpen In Tab

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1752)[#](#scikitplot.corpus.CustomReader.from_url "Link to this definition")
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
            :   Override for the `input_path` label. Default: `None`.

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
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") **|** **None**)
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
        [`create`](#scikitplot.corpus.CustomReader.create "scikitplot.corpus.CustomReader.create") automatically calls [`from_url`](#scikitplot.corpus.CustomReader.from_url "scikitplot.corpus.CustomReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.CustomReader.from_url "scikitplot.corpus.CustomReader.from_url") directly.

        Examples

        Try it in your browser!
        ```
        >>> reader = DocumentReader.from_url("https://en.wikipedia.org/wiki/Python")
        >>> docs = list(reader.get_documents())

        ```
        ```
        >>> yt = DocumentReader.from_url("https://www.youtube.com/watch?v=rwPISgZcYIk")
        >>> docs = list(yt.get_documents())

        ```
        Go BackOpen In Tab

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L940)[#](#scikitplot.corpus.CustomReader.get_documents "Link to this definition")
    :   Yield validated [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.CustomReader.validate_input "scikitplot.corpus.CustomReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.CustomReader.get_raw_chunks "scikitplot.corpus.CustomReader.get_raw_chunks") — format-specific text extraction.
        3. Chunker (if set) — sub-segments each raw block.
        4. [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") construction with validated schema.
        5. Filter — discards noise documents.

        Yields:
        :   CorpusDocument
            :   Validated documents that passed the filter.

        Raises:
        :   ValueError
            :   If the input file is missing or the format is invalid.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"), None, None]

        Notes

        The global `chunk_index` counter is monotonically increasing across
        ****all**** raw chunks and sub-chunks for a single file, ensuring that
        `(input_path, chunk_index)` is a unique key within one reader run.

        Omitted-document statistics are logged at INFO level after processing
        each file.

        Examples

        Try it in your browser!
        ```
        >>> from pathlib import Path
        >>> reader = DocumentReader.create(Path("corpus.txt"))
        >>> docs = list(reader.get_documents())
        >>> all(isinstance(d, CorpusDocument) for d in docs)
        True

        ```
        Go BackOpen In Tab

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L600)[#](#scikitplot.corpus.CustomReader.get_raw_chunks "Link to this definition")
    :   Call the user-supplied extractor and yield normalised raw chunk dicts.

        Calls `self.extractor(self.input_path, **self.reader_kwargs)`
        and normalises the return value with [`normalize_extractor_output`](scikitplot.corpus.normalize_extractor_output.html#scikitplot.corpus.normalize_extractor_output "scikitplot.corpus.normalize_extractor_output").

        Yields:
        :   dict
            :   Each dict has at least `{"text": str}`, with `"section_type"`
                and `"source_type"` defaults filled in, plus any metadata
                returned by the extractor.

        Raises:
        :   ValueError
            :   If [`extractor`](#scikitplot.corpus.CustomReader.extractor "scikitplot.corpus.CustomReader.extractor") is `None` at call time.

            TypeError
            :   If the extractor returns an unsupported type.

            ValueError
            :   If any dict returned by the extractor lacks a `"text"` key.

            RuntimeError
            :   If the extractor raises an unexpected exception. The original
                exception is chained via `from`.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")], None, None]

        Notes

        Logging at `INFO` level records the extractor name, file name,
        and chunk count. `DEBUG` records the kwargs forwarded.

    input\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L295)[#](#scikitplot.corpus.CustomReader.input_path "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    reader\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L295)[#](#scikitplot.corpus.CustomReader.reader_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`extractor`](#scikitplot.corpus.CustomReader.extractor "scikitplot.corpus.CustomReader.extractor") on every call.

    classmethod register(**\***, **name**, **extensions**, **extractor**, **reader\_kwargs=None**, **default\_source\_type=SourceType.UNKNOWN**, **default\_section\_type=SectionType.TEXT**, **validate\_file=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L674)[#](#scikitplot.corpus.CustomReader.register "Link to this definition")
    :   Create a named [`CustomReader`](#scikitplot.corpus.CustomReader "scikitplot.corpus.CustomReader") subclass and register it by
        extension.

        After calling [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register"), `DocumentReader.create` automatically
        dispatches files with any of the given `extensions` to
        `extractor`.

        Parameters:
        :   ****name****str
            :   Class name for the generated subclass (e.g.
                `"PdfPlumberReader"`). Must be a valid Python identifier.

            ****extensions****list of str
            :   File extensions to register (e.g. `[".pdf"]`). Each must
                start with `'.'` (file extension) or `':'` (URL-scheme
                key). Existing registrations for these extensions emit a
                warning and are replaced, consistent with the base-class
                registry behaviour.

            ****extractor****callable
            :   Extraction callable. Signature:

                ```
                def extractor(path: pathlib.Path, **kwargs) -> ExtractorOutput

                ```

            ****reader\_kwargs****dict or None, optional
            :   Default keyword arguments forwarded to `extractor`. Instance-
                level `reader_kwargs` (passed directly to the constructor)
                are merged on top: instance kwargs override registered defaults.
                Default: `{}` (empty).

            ****default\_source\_type****SourceType, optional
            :   Source type applied to chunks that do not set `"source_type"`.
                Default: `UNKNOWN`.

            ****default\_section\_type****SectionType, optional
            :   Section type applied to chunks that do not set
                `"section_type"`.
                Default: `TEXT`.

            ****validate\_file****bool, optional
            :   When `False`, skip the filesystem existence check.
                Default: `True`.

        Returns:
        :   type[CustomReader]
            :   The newly created and registered subclass. The caller can
                keep a reference to it for type-checking or documentation,
                but it is not required — the subclass is also stored in
                `_registry`.

        Raises:
        :   ValueError
            :   If `name` is not a valid Python identifier.

            ValueError
            :   If `extensions` is empty or any element has an invalid prefix.

            TypeError
            :   If `extractor` is not callable.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****extensions**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****extractor**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****reader\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
            * ****default\_source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType"))
            * ****default\_section\_type**** ([**SectionType**](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType"))
            * ****validate\_file**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [type](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")[[**CustomReader**](#scikitplot.corpus.CustomReader "scikitplot.corpus._readers._custom.CustomReader")]

        Notes

        ****Subclass lifetime**** — each call to [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register") creates a
        **new** class object. Calling [`register`](#scikitplot.corpus.CustomReader.register "scikitplot.corpus.CustomReader.register") again with the same
        `name` produces a distinct class object. The last registration
        for a given extension wins (matching the general registry policy).

        ****reader\_kwargs merging**** — instance-level kwargs (passed when
        constructing the reader) are merged on top of the registered
        defaults:

        ```
        # Registered defaults: {"language": "en"}
        # Instance override: {"language": "de"}
        reader = DocumentReader.create(
            Path("file.mp3"),
            reader_kwargs={"language": "de"},  # forwarded via **kwargs
        )
        # extractor receives language="de"

        ```

        ****Type annotation**** — the returned class is typed as
        `type[CustomReader]`. If you need the precise subclass type,
        assign it directly:

        ```
        MyReader = CustomReader.register(name="MyReader", ...)

        ```

        Examples

        Try it in your browser!

        Register a `pdfplumber`-based PDF reader:

        ```
        >>> import pdfplumber
        >>> from pathlib import Path
        >>> from scikitplot.corpus._readers._custom import CustomReader
        >>> from scikitplot.corpus._schema import SourceType
        >>>
        >>> def pdfplumber_extract(path, **kw):
        ...     with pdfplumber.open(path) as pdf:
        ...         return [
        ...             {"text": p.extract_text() or "", "page_number": i}
        ...             for i, p in enumerate(pdf.pages)
        ...         ]
        >>>
        >>> PdfPlumberReader = CustomReader.register(
        ...     name="PdfPlumberReader",
        ...     extensions=[".pdf"],
        ...     extractor=pdfplumber_extract,
        ...     default_source_type=SourceType.RESEARCH,
        ... )
        >>> docs = list(DocumentReader.create(Path("paper.pdf")).get_documents())

        ```

        Register a multi-extension audio reader using a proprietary API:

        ```
        >>> MyASRReader = CustomReader.register(
        ...     name="MyASRReader",
        ...     extensions=[".mp3", ".wav", ".flac"],
        ...     extractor=my_asr_fn,
        ...     reader_kwargs={"model": "large-v3", "language": "en"},
        ...     default_source_type=SourceType.PODCAST,
        ... )

        ```
        Go BackOpen In Tab

    source\_provenance: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L295)[#](#scikitplot.corpus.CustomReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.CustomReader.create "scikitplot.corpus.CustomReader.create") / [`from_url`](#scikitplot.corpus.CustomReader.from_url "scikitplot.corpus.CustomReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CustomReader.source_uri "Link to this definition")
    :   Original URI for URL-based readers (web pages, YouTube videos).

        Set this to the full URL string when `input_path` is a synthetic
        `pathlib.Path` wrapping a URL. File-based readers leave this
        `None`.

        Examples

        Try it in your browser!
        ```
        >>> reader = WebReader(
        ...     input_path=Path("https://example.com/article"),
        ...     source_uri="https://example.com/article",
        ... )

        ```
        Go BackOpen In Tab

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1128)[#](#scikitplot.corpus.CustomReader.subclass_by_type "Link to this definition")
    :   Return a copy of the extension → reader class registry.

        Returns:
        :   dict
            :   Mapping of file extension (str) → reader class. Returns a
                shallow copy so callers cannot accidentally mutate the registry.

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [type](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")[[**DocumentReader**](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")]]

        Examples

        Try it in your browser!
        ```
        >>> registry = DocumentReader.subclass_by_type()
        >>> ".txt" in registry
        True

        ```
        Go BackOpen In Tab

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1110)[#](#scikitplot.corpus.CustomReader.supported_types "Link to this definition")
    :   Return a sorted list of file extensions supported by registered readers.

        Returns:
        :   list of str
            :   Lowercase file extensions, each including the leading dot.
                E.g. `['.pdf', '.txt', '.xml', '.zip']`.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

        Examples

        Try it in your browser!
        ```
        >>> DocumentReader.supported_types()
        ['.pdf', '.txt', '.xml', '.zip']

        ```
        Go BackOpen In Tab

    validate\_file: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.CustomReader.validate_file "Link to this definition")
    :   When `False`, skip the filesystem existence check in
        [`validate_input`](#scikitplot.corpus.CustomReader.validate_input "scikitplot.corpus.CustomReader.validate_input"). Use for non-filesystem resources where
        [`input_path`](#scikitplot.corpus.CustomReader.input_path "scikitplot.corpus.CustomReader.input_path") is a synthetic path.

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_custom.py#L579)[#](#scikitplot.corpus.CustomReader.validate_input "Link to this definition")
    :   Check source accessibility.

        Delegates to the parent implementation when [`validate_file`](#scikitplot.corpus.CustomReader.validate_file "scikitplot.corpus.CustomReader.validate_file")
        is `True`; skips the filesystem check entirely when it is
        `False` (for non-filesystem sources).

        Raises:
        :   ValueError
            :   If [`validate_file`](#scikitplot.corpus.CustomReader.validate_file "scikitplot.corpus.CustomReader.validate_file") is `True` and the file does not
                exist or is not a regular file.

        Return type:
        :   None