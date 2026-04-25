# ImageReader[#](#imagereader "Link to this heading")

class scikitplot.corpus.ImageReader(**input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **backend='tesseract'**, **ocr\_lang=None**, **min\_confidence=None**, **max\_file\_bytes=104857600**, **preprocess\_grayscale=False**, **yield\_raw=False**, **yield\_raw\_bytes=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_readers/_image.py#L255)[#](#scikitplot.corpus.ImageReader "Link to this definition")
:   OCR-based text extraction from raster image files.

    Iterates over all frames in the image (for multi-frame GIF and TIFF),
    runs OCR on each, and yields one raw chunk dict per frame. Single-frame
    images yield exactly one chunk.

    Parameters:
    :   ****input\_path****pathlib.Path
        :   Path to the image file.

        ****backend****str, optional
        :   OCR backend to use. One of `"tesseract"` (default) or
            `"easyocr"`. `"tesseract"` requires the Tesseract binary on
            `PATH` plus `pip install pytesseract`. `"easyocr"`
            requires `pip install easyocr` and downloads model weights on
            first use.

        ****ocr\_lang****str or None, optional
        :   Language hint for the OCR engine.

            * For Tesseract: standard Tesseract language string, e.g.
              `"eng"`, `"deu"`, `"eng+deu"`.
            * For easyocr: ISO 639-1 language code, e.g. `"en"`, `"de"`.

            `None` uses each backend’s default (usually English).

        ****min\_confidence****float, optional
        :   Minimum mean OCR confidence in `[0.0, 1.0]` (both backends).
            Chunks with lower confidence are still yielded but logged at
            `DEBUG` with a warning flag. Set to `None` to disable
            threshold-based logging. Default: `None`.

        ****max\_file\_bytes****int, optional
        :   Maximum file size in bytes. Files larger than this limit raise
            `ValueError` before any bytes are read. Default: 100 MB.

        ****preprocess\_grayscale****bool, optional
        :   When `True`, convert each frame to grayscale (`"L"` mode)
            before OCR. This often improves Tesseract accuracy on coloured
            backgrounds. Default: `False`.

        ****chunker****ChunkerBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filter\_****FilterBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filename\_override****str or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****default\_language****str or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

    Attributes:
    :   ****file\_types****list of str
        :   Class variable. Registered extensions:
            `[".png", ".jpg", ".jpeg", ".gif", ".webp", ".tiff", ".tif", ".bmp"]`.

    Raises:
    :   ValueError
        :   If `backend` is not one of the supported values.

        ValueError
        :   If the file exceeds `max_file_bytes`.

        ImportError
        :   If the required OCR library (or Pillow) is not installed.

    Parameters:
    :   * ****input\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****chunker**** ([**ChunkerBase**](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") **|** **None**)
        * ****filter\_**** ([**FilterBase**](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") **|** **None**)
        * ****filename\_override**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****default\_language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****custom\_extractor**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****custom\_extractor\_kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****ocr\_lang**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****min\_confidence**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****max\_file\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****preprocess\_grayscale**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****yield\_raw**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****yield\_raw\_bytes**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    > **See also**
    > `scikitplot.corpus._readers.VideoReader`
    :   Video transcription reader.

    `scikitplot.corpus._readers.PDFReader`
    :   PDF text extraction reader.

    Notes

    ****Tesseract accuracy tips:****

    * Use `preprocess_grayscale=True` for images with coloured text
      backgrounds.
    * Install additional Tesseract language packs for non-English corpora:
      `apt-get install tesseract-ocr-deu` (German), etc.
    * Very low-resolution images (< 150 DPI) tend to produce poor results.
      Consider upscaling with Pillow before passing to the reader.

    ****easyocr note:**** Model weights (~100 MB per language) are downloaded
    automatically on first use. This is a side effect; in CI/Docker
    pipelines, pre-cache the weights or use Tesseract instead.

    Examples

    Try it in your browser!

    Default Tesseract backend:

    ```
    >>> from pathlib import Path
    >>> reader = ImageReader(input_path=Path("scan.png"), ocr_lang="eng")
    >>> docs = list(reader.get_documents())
    >>> print(docs[0].text[:100])

    ```

    Multi-page TIFF:

    ```
    >>> reader = ImageReader(input_path=Path("document.tiff"))
    >>> docs = list(reader.get_documents())
    >>> print(f"Extracted {len(docs)} pages")

    ```
    Go BackOpen In Tab

    backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'tesseract'[#](#scikitplot.corpus.ImageReader.backend "Link to this definition")
    :   OCR backend. One of `"tesseract"` (default) or `"easyocr"`.

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    classmethod create(**\*input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L1238)[#](#scikitplot.corpus.ImageReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.ImageReader.from_url "scikitplot.corpus.ImageReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*input\_path****str or pathlib.Path
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.ImageReader.from_url "scikitplot.corpus.ImageReader.from_url"). ****Must be passed as
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
                [`ImageReader`](#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader")).

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
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.ImageReader.from_url "scikitplot.corpus.ImageReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.ImageReader.create "scikitplot.corpus.ImageReader.create").

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
        * `backend="easyocr"` → [`ImageReader`](#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader")
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

    custom\_extractor: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")[[...], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.custom_extractor "Link to this definition")
    :   User-supplied image extraction callable, active only when
        `backend="custom"`.

        Signature:

        ```
        def extractor(path: pathlib.Path, **kwargs) -> ExtractorOutput

        ```

        where `ExtractorOutput` is `str`, `list[str]`, `dict`, or
        `list[dict]`. Every dict must contain a `"text"` key.

        Common use-cases: `surya` (document layout + OCR), `docling`,
        `azure-cognitiveservices-vision`, AWS Textract clients, or any
        library not supported by Tesseract / easyocr. Ignored when
        `backend` is not `"custom"`. Default: `None`.

        Examples

        Try it in your browser!
        ```
        >>> def surya_extract(path, **kw):
        ...     from surya.ocr import run_ocr
        ...     result = run_ocr([str(path)], langs=[["en"]])[0]
        ...     return [{"text": line.text, "confidence": line.confidence}
        ...             for line in result.text_lines]
        >>> reader = ImageReader(
        ...     input_path=Path("scan.png"),
        ...     backend="custom",
        ...     custom_extractor=surya_extract,
        ... )

        ```
        Go BackOpen In Tab

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_readers/_image.py#L255)[#](#scikitplot.corpus.ImageReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.ImageReader.custom_extractor "scikitplot.corpus.ImageReader.custom_extractor") on every
        call. Only used when `backend="custom"`. Default: `{}`.

    default\_language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    property file\_name: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.ImageReader.file_name "Link to this definition")
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

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] = None[#](#scikitplot.corpus.ImageReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")] = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.tiff', '.tif', '.bmp'][#](#scikitplot.corpus.ImageReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.filename_override "Link to this definition")
    :   Override for the `input_path` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` triggers the [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter").

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L1555)[#](#scikitplot.corpus.ImageReader.from_manifest "Link to this definition")
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

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L1751)[#](#scikitplot.corpus.ImageReader.from_url "Link to this definition")
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
        [`create`](#scikitplot.corpus.ImageReader.create "scikitplot.corpus.ImageReader.create") automatically calls [`from_url`](#scikitplot.corpus.ImageReader.from_url "scikitplot.corpus.ImageReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.ImageReader.from_url "scikitplot.corpus.ImageReader.from_url") directly.

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

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L939)[#](#scikitplot.corpus.ImageReader.get_documents "Link to this definition")
    :   Yield validated [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.ImageReader.validate_input "scikitplot.corpus.ImageReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.ImageReader.get_raw_chunks "scikitplot.corpus.ImageReader.get_raw_chunks") — format-specific text extraction.
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

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_readers/_image.py#L466)[#](#scikitplot.corpus.ImageReader.get_raw_chunks "Link to this definition")
    :   Run OCR on each frame of the image and yield one chunk per frame.

        When `backend="custom"` and [`custom_extractor`](#scikitplot.corpus.ImageReader.custom_extractor "scikitplot.corpus.ImageReader.custom_extractor") is set,
        delegates entirely to the callable and normalises its output via
        `normalize_extractor_output`.
        The custom path bypasses PIL frame extraction and all OCR engines.

        Yields:
        :   dict
            :   Keys:

                `"source_type"`
                :   Always `IMAGE`.
                    Promoted to [`CorpusDocument.source_type`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument.source_type "scikitplot.corpus.CorpusDocument.source_type").

                `"text"`
                :   OCR-extracted text for this frame.

                `"section_type"`
                :   Always `TEXT`.

                `"page_number"`
                :   Zero-based frame/page index within the file.
                    Promoted to [`CorpusDocument.page_number`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument.page_number "scikitplot.corpus.CorpusDocument.page_number").

                `"image_width"`
                :   Width of the frame in pixels (goes to `metadata`).

                `"image_height"`
                :   Height of the frame in pixels (goes to `metadata`).

                `"confidence"`
                :   Mean confidence score in `[0.0, 1.0]` (both backends).
                    Promoted to [`CorpusDocument.confidence`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument.confidence "scikitplot.corpus.CorpusDocument.confidence").

                `"ocr_engine"`
                :   Name of the backend that produced this chunk.
                    Promoted to [`CorpusDocument.ocr_engine`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument.ocr_engine "scikitplot.corpus.CorpusDocument.ocr_engine").

                `"total_frames"`
                :   Total number of frames/pages in the image file
                    (goes to `metadata`).

        Raises:
        :   ValueError
            :   If the file exceeds `max_file_bytes`.

            ImportError
            :   If Pillow or the OCR library is not installed.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")], None, None]

    input\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_readers/_image.py#L255)[#](#scikitplot.corpus.ImageReader.input_path "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    max\_file\_bytes: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 104857600[#](#scikitplot.corpus.ImageReader.max_file_bytes "Link to this definition")
    :   100 MB.

        Type:
        :   Maximum file size in bytes. Default

    min\_confidence: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.min_confidence "Link to this definition")
    :   Minimum OCR confidence for debug logging. `None` disables logging.

    ocr\_lang: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.ocr_lang "Link to this definition")
    :   Language hint for the OCR engine. `None` uses the backend default.

    preprocess\_grayscale: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.ImageReader.preprocess_grayscale "Link to this definition")
    :   Convert frames to grayscale before OCR when `True`.

    source\_provenance: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_readers/_image.py#L255)[#](#scikitplot.corpus.ImageReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.ImageReader.create "scikitplot.corpus.ImageReader.create") / [`from_url`](#scikitplot.corpus.ImageReader.from_url "scikitplot.corpus.ImageReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.ImageReader.source_uri "Link to this definition")
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

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L1127)[#](#scikitplot.corpus.ImageReader.subclass_by_type "Link to this definition")
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

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L1109)[#](#scikitplot.corpus.ImageReader.supported_types "Link to this definition")
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

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/corpus/_base.py#L754)[#](#scikitplot.corpus.ImageReader.validate_input "Link to this definition")
    :   Assert that the input file exists and is readable.

        Raises:
        :   ValueError
            :   If `input_path` does not exist or is not a regular file.

        Return type:
        :   None

        Notes

        Called automatically by [`get_documents`](#scikitplot.corpus.ImageReader.get_documents "scikitplot.corpus.ImageReader.get_documents") before iterating.
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

    yield\_raw: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.ImageReader.yield_raw "Link to this definition")
    :   Include raw pixel array in output chunks.

        When `True`, each chunk includes `"raw_tensor"` (numpy ndarray,
        shape `(H, W, C)` uint8 RGB) and sets `"modality"` to
        `"multimodal"` (when OCR text is also present) or `"image"`
        (when text is empty). Requires numpy (always available with Pillow).
        Default: `False`.

    yield\_raw\_bytes: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.ImageReader.yield_raw_bytes "Link to this definition")
    :   Include raw encoded file bytes in output chunks.

        When `True`, each chunk includes `"raw_bytes"` containing the
        compressed image bytes (JPEG/PNG/etc.) — useful for
        `tf.io.decode_image` or CV2 `imdecode`. Default: `False`.