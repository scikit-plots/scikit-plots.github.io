# CHMReader[#](#chmreader "Link to this heading")

class scikitplot.corpus.CHMReader(**input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **max\_text\_chars=None**, **max\_text\_chars\_per\_byte=50**, **on\_text\_limit='refuse'**, **encoding=None**, **extract\_tags=None**, **max\_file\_bytes=1073741824**, **max\_pages=100000**, **max\_page\_bytes=16777216**, **max\_total\_bytes=2147483648**, **coverage\_warn\_share=0.5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_readers/_chm.py#L219)[#](#scikitplot.corpus.CHMReader "Link to this definition")
:   Read a Compiled HTML Help (`.chm`) file into chunks, page by page.

    Pages are read in table-of-contents order, then any page the contents
    do not list, in archive order. Each page is parsed as
    `HTMLReader` parses a file: title,
    headings, paragraphs, list items, table cells, quotes and code, with
    scripts and styles dropped. Images, the index and the full-text search
    data are not read.

    Parameters:
    :   ****input\_path****pathlib.Path
        :   Path to the `.chm` file.

        ****encoding****str or None, optional
        :   Codec for every page. `None` (default) decides per page: byte-order
            mark, strict UTF-8, the `<meta>` charset, the archive locale’s
            Windows code page, then `cp1252`. The codec used is in each
            chunk’s `encoding`.

        ****extract\_tags****list of str or None, optional
        :   HTML tags to extract; `None` uses the
            `WebReader` set.

        ****max\_file\_bytes****int, optional
        :   Larger files are refused. Default: 1 GiB.

        ****max\_pages****int, optional
        :   Pages read at most; later ones are skipped and counted. Default:
            100 000.

        ****max\_page\_bytes****int, optional
        :   A page larger than this is skipped and counted (`"too-large"`).
            Default: 16 MiB.

        ****max\_total\_bytes****int, optional
        :   Most bytes the decompressor may produce for one file, including
            the bytes it decodes only to reach a page. Default: 2 GiB.

        ****max\_text\_chars\_per\_byte****float or None, optional
        :   Ratio limit, as for `ZipReader`:
            the decoding limit in force is the smaller of `max_total_bytes`
            and `4 x max(ratio x file size, 1 Mi)`. Default: 50.

        ****coverage\_warn\_share****float, optional
        :   Share of pages skipped or empty above which one coverage warning
            is logged. Default: `0.5`.

    Attributes:
    :   ****file\_types****list of str
        :   Class variable. `[".chm"]`.

        ****coverage****ReadCoverage
        :   After a read: pages read, empty and skipped (by reason).

    Raises:
    :   ImportError
        :   If `beautifulsoup4` is not installed.

        ValueError
        :   If the file is not a CHM archive, is corrupt, or exceeds a limit
            that refuses (size, decoding).

    Parameters:
    :   * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
        * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
        * ****filename\_override**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****source\_uri**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****source\_provenance**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****custom\_extractor**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**)
        * ****custom\_extractor\_kwargs**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****max\_text\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_text\_chars\_per\_byte**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****on\_text\_limit**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****encoding**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****extract\_tags**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****max\_file\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_pages**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_page\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_total\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****coverage\_warn\_share**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    > **See also**
    > `scikitplot.corpus._readers.HTMLReader`
    :   One local HTML file.

    `scikitplot.corpus._readers.ZipReader`
    :   Archives of other formats.

    Notes

    ****User note:**** Each chunk carries `chm_page` (the page’s path in the
    archive), `page_index` (its reading position), `toc_title` (its
    title in the contents, when listed) and `input_path`
    (`"<file>/<page>"`). `source_type` is
    [`SourceType.DOCUMENTATION`](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType.DOCUMENTATION "scikitplot.corpus.SourceType.DOCUMENTATION").

    ****Developer note:**** The container and the LZX decoder are in
    `_chm_format` (standard library only). A page is decoded from the
    reset point before it, never the whole stream, and each 32 KiB frame
    at most once per read; the decoding limit counts every decoded byte,
    so a decompression bomb stops at the limit. Pure Python decodes
    real help files at about 10 MB/s, since most of their bytes are copies.

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> from scikitplot.corpus._base import DocumentReader
    >>> import scikitplot.corpus._readers
    >>> reader = DocumentReader.create(Path("manual.chm"))
    >>> docs = list(reader.get_documents())
    >>> reader.coverage.summary()
    '312 read, 2 empty of 314 page(s)'

    ```
    Go BackOpen In Tab

    property backend\_reports: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...][#](#scikitplot.corpus.CHMReader.backend_reports "Link to this definition")
    :   Return structured optional-backend reports from the current run.

        Reports are JSON-compatible dictionaries. They intentionally retain
        exception **type/message strings** rather than live exception objects,
        so fail-soft readers remain observable without retaining traceback
        object graphs. [`get_documents`](#scikitplot.corpus.CHMReader.get_documents "scikitplot.corpus.CHMReader.get_documents") clears old reports at the start
        of each run.

        Returns:
        :   tuple of dict
            :   One report per backend operation that opted into central
                orchestration. Empty when no optional backend operation ran.

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    clear\_backend\_reports()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L1345)[#](#scikitplot.corpus.CHMReader.clear_backend_reports "Link to this definition")
    :   Clear structured optional-backend reports on this reader instance.

        Return type:
        :   None

    coverage\_warn\_share: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.5[#](#scikitplot.corpus.CHMReader.coverage_warn_share "Link to this definition")
    :   Share of pages skipped or empty that logs a coverage warning.

    classmethod create(**\*input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L2215)[#](#scikitplot.corpus.CHMReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.CHMReader.from_url "scikitplot.corpus.CHMReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*input\_path****str or pathlib.Path
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.CHMReader.from_url "scikitplot.corpus.CHMReader.from_url"). ****Must be passed as
                  a plain ``str``, not wrapped in**** `pathlib.Path`; wrapping
                  collapses the double-slash (`https://` → `https:/`) and
                  breaks URL detection.
                * `str` not matching the URL pattern — treated as a local
                  file path and converted to [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") internally.
                * [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") — always treated as a local file path
                  and dispatched by extension via the reader registry.

                Pass a single value for the common case; pass multiple values
                to get a `_MultiSourceReader` that chains all their
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
                `_MultiSourceReader` when **input\_path** has more than one
                element — it implements the same `get_documents()` interface
                and chains documents from all sub-readers in order.

        Raises:
        :   ValueError
            :   If **input\_path** is empty, or if a source URL is invalid, or if no
                reader is registered for a file’s extension.

            TypeError
            :   If any element of **input\_path** is not a `str` or
                [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)").

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus.FilterBase") **|** **None**)
            * ****filename\_override**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") **|** [**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") **|** **None****]** **|** **None**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_date**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****doi**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****isbn**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****kwargs**** (**Any**)

        Return type:
        :   Self

        Notes

        ****URL auto-detection:**** A `str` element is treated as a URL when
        it matches `^https?://` (case-insensitive). All other strings
        and all [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") objects are treated as local file
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.CHMReader.from_url "scikitplot.corpus.CHMReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.CHMReader.create "scikitplot.corpus.CHMReader.create").

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

        * `transcribe=True`, `whisper_model="small"`, `strict=False` →
          [`AudioReader`](scikitplot.corpus.AudioReader.html#scikitplot.corpus.AudioReader "scikitplot.corpus.AudioReader"), [`VideoReader`](scikitplot.corpus.VideoReader.html#scikitplot.corpus.VideoReader "scikitplot.corpus.VideoReader")
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

    custom\_extractor: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.custom_extractor "Link to this definition")
    :   User-supplied extraction callable that ****replaces**** [`get_raw_chunks`](#scikitplot.corpus.CHMReader.get_raw_chunks "scikitplot.corpus.CHMReader.get_raw_chunks")
        entirely for this reader instance.

        When set, `_iter_raw_chunks` calls
        `custom_extractor(self.input_path, **custom_extractor_kwargs)` and
        normalises the return value through
        `normalize_extractor_output`.
        The built-in [`get_raw_chunks`](#scikitplot.corpus.CHMReader.get_raw_chunks "scikitplot.corpus.CHMReader.get_raw_chunks") implementation is ****not**** called.

        This hook is available on ****every**** reader class
        (`ALTOReader`, `TextReader`, `PDFReader`, `ImageReader`, etc.)
        without any subclassing — simply pass a callable at construction time.

        Callable contract

        ```
        def my_extractor(path: pathlib.Path, **kwargs) -> ExtractorOutput

        ```

        where `ExtractorOutput` is `str`, `list[str]`, `dict`, or
        `list[dict]` — the same contract as `CustomReader`.

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

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_readers/_chm.py#L219)[#](#scikitplot.corpus.CHMReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.CHMReader.custom_extractor "scikitplot.corpus.CHMReader.custom_extractor") on every
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

    default\_filter[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L748)[#](#scikitplot.corpus.CHMReader.default_filter "Link to this definition")
    :   alias of [`CodeAwareFilter`](scikitplot.corpus.CodeAwareFilter.html#scikitplot.corpus.CodeAwareFilter "scikitplot.corpus._base.CodeAwareFilter")

    default\_language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    encoding: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.encoding "Link to this definition")
    :   Codec for every page; `None` decides per page.

    extract\_tags: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.extract_tags "Link to this definition")
    :   HTML tags to extract. `None` uses the [`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader") set.

    property file\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.CHMReader.file_name "Link to this definition")
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

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = '.chm'[#](#scikitplot.corpus.CHMReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] = ['.chm'][#](#scikitplot.corpus.CHMReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.filename_override "Link to this definition")
    :   Override for the `input_path` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` uses the reader’s
        [`default_filter`](#scikitplot.corpus.CHMReader.default_filter "scikitplot.corpus.CHMReader.default_filter") ([`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter") unless the reader says
        otherwise).

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L2532)[#](#scikitplot.corpus.CHMReader.from_manifest "Link to this definition")
    :   Build a `_MultiSourceReader` from a manifest file.

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
        :   * ****manifest\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") **|** **None**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_date**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****doi**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****isbn**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****encoding**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   **\_MultiSourceReader**

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

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L2728)[#](#scikitplot.corpus.CHMReader.from_url "Link to this definition")
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
        :   * ****url**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus.ChunkerBase") **|** **None**)
            * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus.FilterBase") **|** **None**)
            * ****filename\_override**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****default\_language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") **|** **None**)
            * ****source\_title**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****source\_date**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****doi**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****isbn**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****kwargs**** (**Any**)

        Return type:
        :   Self

        Notes

        ****Prefer :meth:`create` for new code.**** Passing a URL string to
        [`create`](#scikitplot.corpus.CHMReader.create "scikitplot.corpus.CHMReader.create") automatically calls [`from_url`](#scikitplot.corpus.CHMReader.from_url "scikitplot.corpus.CHMReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.CHMReader.from_url "scikitplot.corpus.CHMReader.from_url") directly.

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

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L1684)[#](#scikitplot.corpus.CHMReader.get_documents "Link to this definition")
    :   Yield validated [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.CHMReader.validate_input "scikitplot.corpus.CHMReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.CHMReader.get_raw_chunks "scikitplot.corpus.CHMReader.get_raw_chunks") — format-specific text extraction.
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
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"), None, None]

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

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_readers/_chm.py#L412)[#](#scikitplot.corpus.CHMReader.get_raw_chunks "Link to this definition")
    :   Yield one chunk per text element of each page, in reading order.

        Yields:
        :   dict
            :   The [`HTMLReader`](scikitplot.corpus.HTMLReader.html#scikitplot.corpus.HTMLReader "scikitplot.corpus.HTMLReader") keys plus `chm_page`, `page_index`,
                `toc_title` and `input_path`.

        Raises:
        :   ImportError
            :   If `beautifulsoup4` is not installed.

            ValueError
            :   If the file is not a CHM archive, is corrupt, or exceeds a limit.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], None, None]

    input\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_readers/_chm.py#L219)[#](#scikitplot.corpus.CHMReader.input_path "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    max\_file\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1073741824[#](#scikitplot.corpus.CHMReader.max_file_bytes "Link to this definition")
    :   1 GiB.

        Type:
        :   Larger files are refused. Default

    max\_page\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 16777216[#](#scikitplot.corpus.CHMReader.max_page_bytes "Link to this definition")
    :   16 MiB.

        Type:
        :   Larger pages are skipped and counted. Default

    max\_pages: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 100000[#](#scikitplot.corpus.CHMReader.max_pages "Link to this definition")
    :   100 000.

        Type:
        :   Pages read at most. Default

    max\_text\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.max_text_chars "Link to this definition")
    :   Most characters of text one input may yield, over all its chunks.

        The bound on what a small input can expand into (compressed or
        repeated content). `None` (the default here): no limit, for formats
        whose text cannot outgrow their input, already bounded by their size
        limit. Readers of amplifying formats (`OfficeReader`, `PDFReader`)
        default to 256 Mi characters. Counted as chunks stream, at the one
        place every chunk passes (`_iter_raw_chunks`), custom extractors
        included.

    max\_text\_chars\_per\_byte: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 50[#](#scikitplot.corpus.CHMReader.max_text_chars_per_byte "Link to this definition")
    :   Ratio limit on decoding (and on text, as for every reader).

    max\_total\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2147483648[#](#scikitplot.corpus.CHMReader.max_total_bytes "Link to this definition")
    :   2 GiB.

        Type:
        :   Most bytes decoded for one file. Default

    on\_text\_limit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'refuse'[#](#scikitplot.corpus.CHMReader.on_text_limit "Link to this definition")
    :   What happens past the text limit ([`max_text_chars`](#scikitplot.corpus.CHMReader.max_text_chars "scikitplot.corpus.CHMReader.max_text_chars"),
        [`max_text_chars_per_byte`](#scikitplot.corpus.CHMReader.max_text_chars_per_byte "scikitplot.corpus.CHMReader.max_text_chars_per_byte")): `"refuse"` (default) raises
        `ValueError`; `"truncate"` keeps exactly the first
        `max_text_chars` characters, marks the chunk it cuts
        `text_truncated=True` (none when the limit falls between chunks) and
        logs a warning either way.

    source\_provenance: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_readers/_chm.py#L219)[#](#scikitplot.corpus.CHMReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.CHMReader.create "scikitplot.corpus.CHMReader.create") / [`from_url`](#scikitplot.corpus.CHMReader.from_url "scikitplot.corpus.CHMReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CHMReader.source_uri "Link to this definition")
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

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L2074)[#](#scikitplot.corpus.CHMReader.subclass_by_type "Link to this definition")
    :   Return a copy of the extension → reader class registry.

        Returns:
        :   dict
            :   Mapping of file extension (str) → reader class. Returns a
                shallow copy so callers cannot accidentally mutate the registry.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")[[**DocumentReader**](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")]]

        Examples

        Try it in your browser!
        ```
        >>> registry = DocumentReader.subclass_by_type()
        >>> ".txt" in registry
        True

        ```
        Go BackOpen In Tab

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L2056)[#](#scikitplot.corpus.CHMReader.supported_types "Link to this definition")
    :   Return a sorted list of file extensions supported by registered readers.

        Returns:
        :   list of str
            :   Lowercase file extensions, each including the leading dot.
                E.g. `['.pdf', '.txt', '.xml', '.zip']`.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Examples

        Try it in your browser!
        ```
        >>> DocumentReader.supported_types()
        ['.pdf', '.txt', '.xml', '.zip']

        ```
        Go BackOpen In Tab

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L1379)[#](#scikitplot.corpus.CHMReader.validate_input "Link to this definition")
    :   Assert that the input file exists and is readable.

        Raises:
        :   ValueError
            :   If `input_path` does not exist or is not a regular file.

        Return type:
        :   None

        Notes

        Called automatically by [`get_documents`](#scikitplot.corpus.CHMReader.get_documents "scikitplot.corpus.CHMReader.get_documents") before iterating.
        Can also be called eagerly after construction to fail fast.

        Examples

        Try it in your browser!
        ```
        >>> reader = DocumentReader.create(Path("missing.txt"))
        >>> reader.validate_input()
        Traceback (most recent call last):
            ...
        ValueError: Input file does not exist: missing.txt

        ```
        Go BackOpen In Tab