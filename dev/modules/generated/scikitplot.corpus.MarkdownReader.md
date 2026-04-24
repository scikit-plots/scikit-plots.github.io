# MarkdownReader[#](#markdownreader "Link to this heading")

class scikitplot.corpus.MarkdownReader(**input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **encoding=None**, **max\_file\_bytes=524288000**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_text.py#L340)[#](#scikitplot.corpus.MarkdownReader "Link to this definition")
:   Markdown document reader.

    Identical to [`TextReader`](scikitplot.corpus.TextReader.html#scikitplot.corpus.TextReader "scikitplot.corpus.TextReader") in every respect — Markdown files
    are read as plain text without any Markdown-specific parsing.
    Downstream [`ChunkerBase`](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") subclasses
    (e.g. `ParagraphChunker`) operate
    on the raw Markdown source, which is suitable for most NLP corpus
    use cases.

    Parameters:
    :   ****input\_path****pathlib.Path
        :   Path to the `.md` file.

    Attributes:
    :   ****file\_type****str
        :   Class variable. Always `".md"`.

        ****file\_types****list of str
        :   Class variable. Registered extensions:
            `[".md"]`.

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
        * ****encoding**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****max\_file\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    > **See also**
    > [`TextReader`](scikitplot.corpus.TextReader.html#scikitplot.corpus.TextReader "scikitplot.corpus.TextReader")
    :   Base class — all parameters and behaviour inherited.

    [`ReSTReader`](scikitplot.corpus.ReSTReader.html#scikitplot.corpus.ReSTReader "scikitplot.corpus.ReSTReader")
    :   For `.rst` files.

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> reader = MarkdownReader(input_path=Path("README.md"))
    >>> docs = list(reader.get_documents())

    ```
    Go BackOpen In Tab

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MarkdownReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    classmethod create(**\*input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1239)[#](#scikitplot.corpus.MarkdownReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.MarkdownReader.from_url "scikitplot.corpus.MarkdownReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*input\_path****str or pathlib.Path
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.MarkdownReader.from_url "scikitplot.corpus.MarkdownReader.from_url"). ****Must be passed as
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
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.MarkdownReader.from_url "scikitplot.corpus.MarkdownReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.MarkdownReader.create "scikitplot.corpus.MarkdownReader.create").

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

    custom\_extractor: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MarkdownReader.custom_extractor "Link to this definition")
    :   User-supplied extraction callable that ****replaces**** [`get_raw_chunks`](#scikitplot.corpus.MarkdownReader.get_raw_chunks "scikitplot.corpus.MarkdownReader.get_raw_chunks")
        entirely for this reader instance.

        When set, `_iter_raw_chunks` calls
        `custom_extractor(self.input_path, **custom_extractor_kwargs)` and
        normalises the return value through
        `normalize_extractor_output`.
        The built-in [`get_raw_chunks`](#scikitplot.corpus.MarkdownReader.get_raw_chunks "scikitplot.corpus.MarkdownReader.get_raw_chunks") implementation is ****not**** called.

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

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_text.py#L340)[#](#scikitplot.corpus.MarkdownReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.MarkdownReader.custom_extractor "scikitplot.corpus.MarkdownReader.custom_extractor") on every
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

    default\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MarkdownReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    encoding: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MarkdownReader.encoding "Link to this definition")
    :   Explicit encoding override. `None` triggers automatic detection.
        Example values: `"utf-8"`, `"latin-1"`, `"windows-1252"`.

    property file\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.MarkdownReader.file_name "Link to this definition")
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

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] = '.md'[#](#scikitplot.corpus.MarkdownReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] = ['.md'][#](#scikitplot.corpus.MarkdownReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MarkdownReader.filename_override "Link to this definition")
    :   Override for the `input_path` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MarkdownReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` triggers the [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter").

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1556)[#](#scikitplot.corpus.MarkdownReader.from_manifest "Link to this definition")
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

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1752)[#](#scikitplot.corpus.MarkdownReader.from_url "Link to this definition")
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
        [`create`](#scikitplot.corpus.MarkdownReader.create "scikitplot.corpus.MarkdownReader.create") automatically calls [`from_url`](#scikitplot.corpus.MarkdownReader.from_url "scikitplot.corpus.MarkdownReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.MarkdownReader.from_url "scikitplot.corpus.MarkdownReader.from_url") directly.

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

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L940)[#](#scikitplot.corpus.MarkdownReader.get_documents "Link to this definition")
    :   Yield validated [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.MarkdownReader.validate_input "scikitplot.corpus.MarkdownReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.MarkdownReader.get_raw_chunks "scikitplot.corpus.MarkdownReader.get_raw_chunks") — format-specific text extraction.
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

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_text.py#L258)[#](#scikitplot.corpus.MarkdownReader.get_raw_chunks "Link to this definition")
    :   Read the text file and yield a single raw chunk dict.

        Yields:
        :   dict
            :   Single dict with keys `"text"` (full file content as str)
                and `"section_type"` (`SectionType.TEXT`).

        Raises:
        :   ValueError
            :   If the file size exceeds `max_file_bytes`.

            OSError
            :   If the file cannot be opened or read.

            UnicodeDecodeError
            :   If an explicit `encoding` is set and the file is not valid
                in that encoding.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")], None, None]

        Notes

        Only one chunk is yielded regardless of file content. All
        sub-chunking into sentences/paragraphs/windows is delegated to
        the injected [`ChunkerBase`](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase").

    input\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_text.py#L340)[#](#scikitplot.corpus.MarkdownReader.input_path "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    max\_file\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 524288000[#](#scikitplot.corpus.MarkdownReader.max_file_bytes "Link to this definition")
    :   500 MB.

        Type:
        :   Maximum file size in bytes before rejecting. Default

    source\_provenance: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_readers/_text.py#L340)[#](#scikitplot.corpus.MarkdownReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.MarkdownReader.create "scikitplot.corpus.MarkdownReader.create") / [`from_url`](#scikitplot.corpus.MarkdownReader.from_url "scikitplot.corpus.MarkdownReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.MarkdownReader.source_uri "Link to this definition")
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

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1128)[#](#scikitplot.corpus.MarkdownReader.subclass_by_type "Link to this definition")
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

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L1110)[#](#scikitplot.corpus.MarkdownReader.supported_types "Link to this definition")
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

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_base.py#L755)[#](#scikitplot.corpus.MarkdownReader.validate_input "Link to this definition")
    :   Assert that the input file exists and is readable.

        Raises:
        :   ValueError
            :   If `input_path` does not exist or is not a regular file.

        Return type:
        :   None

        Notes

        Called automatically by [`get_documents`](#scikitplot.corpus.MarkdownReader.get_documents "scikitplot.corpus.MarkdownReader.get_documents") before iterating.
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