# PDFReader[#](#pdfreader "Link to this heading")

class scikitplot.corpus.PDFReader(**input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **max\_text\_chars=268435456**, **max\_text\_chars\_per\_byte=50**, **on\_text\_limit='refuse'**, **password=''**, **max\_file\_bytes=2147483648**, **prefer\_backend=None**, **pdfminer\_kwargs=None**, **pdfminer\_ties='stable'**, **ocr='off'**, **ocr\_min\_chars=1**, **ocr\_max\_pages=64**, **ocr\_engine='tesseract'**, **ocr\_lang=None**, **ocr\_dpi=300**, **pypdfium2\_kwargs=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_pdf.py#L1028)[#](#scikitplot.corpus.PDFReader "Link to this definition")
:   PDF document reader with pdfminer.six → pypdf cascade.

    Yields one raw chunk per PDF page. Pages that produce no extractable
    text after stripping are silently skipped (logged at DEBUG level).

    Parameters:
    :   ****input\_path****pathlib.Path
        :   Path to the `.pdf` file.

        ****password****str, optional
        :   Decryption password for encrypted PDFs. Default: `""` (none).

        ****max\_file\_bytes****int, optional
        :   Maximum file size in bytes before raising `ValueError`. Default:
            2 GB.

        ****prefer\_backend****str or None, optional
        :   Force a specific extraction backend. One of `"pdfminer"`,
            `"pypdf"`, or `None` (auto: try pdfminer first). Default:
            `None`.

        ****pdfminer\_kwargs****Mapping or None, optional
        :   Keyword arguments for `pdfminer.high_level.extract_pages`, used
            when pdfminer.six reads a page; pypdf ignores them. A mapping under
            `"laparams"` is turned into a `pdfminer.layout.LAParams`, so
            the layout analysis can be set without importing pdfminer.
            `password`, `page_numbers` and `maxpages` are set by the
            reader and are not accepted. `None` uses pdfminer’s defaults.
            Default: `None`.

        ****pdfminer\_ties****{“stable”, “pdfminer”}, optional
        :   How pdfminer.six’s layout groups text boxes that are equally far
            apart. `"stable"`: in the order the boxes were found, so a page
            gives the same text on every read. `"pdfminer"`: pdfminer.six’s
            own order, by memory address, which can change from one read to the
            next; for comparing with pdfminer.six itself. Pages without such
            ties are the same either way. See the Notes. Default: `"stable"`.

        ****ocr****{“off”, “auto”, “always”} or callable, optional
        :   Which pages are rendered and read with OCR. `"off"` reads the text
            layer only. `"auto"` reads a page with OCR when its text layer has
            fewer than `ocr_min_chars` characters: scanned pages, slides
            exported as pictures. `"always"` reads every page with OCR. A
            callable `policy(page_number, text) -> bool` decides per page from
            the zero-based page number and the stripped text layer. The OCR text
            replaces the text layer when it is not empty. Default: `"off"`.

        ****ocr\_min\_chars****int, optional
        :   Under `ocr="auto"`, a text layer shorter than this is not trusted.
            Raise it for scans that carry only a page label as text. Default: 1
            (only pages with no text).

        ****ocr\_max\_pages****int or None, optional
        :   Most pages read with OCR per file. Pages past the limit keep their
            text layer and are named in one warning. `None` for no limit.
            Default: 64.

        ****ocr\_engine****{“tesseract”, “easyocr”} or callable, optional
        :   OCR engine, as in [`ImageReader`](scikitplot.corpus.ImageReader.html#scikitplot.corpus.ImageReader "scikitplot.corpus.ImageReader"), or a callable taking a PIL
            image and returning its text or `(text, confidence)` with the
            confidence in `[0, 1]`. Recorded in each OCR chunk’s
            `ocr_engine` (`"custom"` for a callable). Default:
            `"tesseract"`.

        ****ocr\_lang****str or None, optional
        :   Language hint for a built-in engine (`"eng"`, `"eng+deu"` for
            Tesseract; `"en"` for easyocr). Default: `None`.

        ****ocr\_dpi****int, optional
        :   Resolution pages are rendered at, from 1 to 1200. Default: 300.

        ****pypdfium2\_kwargs****Mapping or None, optional
        :   Keyword arguments for pypdfium2’s `PdfPage.render`, which renders
            pages for OCR (for example `{"grayscale": True}`). `scale` is set
            from `ocr_dpi` and is not accepted. Default: `None`.

        ****chunker****ChunkerBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filter\_****FilterBase or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****filename\_override****str or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        ****default\_language****str or None, optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

    Attributes:
    :   ****file\_type****str
        :   Class variable. Always `".pdf"`.

        ****file\_types****list of str
        :   Class variable. Registered extensions:
            `[".pdf"]`.

    Raises:
    :   ValueError
        :   If `prefer_backend` is not a recognised value.

        ValueError
        :   If the file exceeds `max_file_bytes`.

        ImportError
        :   If neither pdfminer.six nor pypdf is installed.

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
        * ****password**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_file\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****prefer\_backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****pdfminer\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****pdfminer\_ties**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****ocr**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]**)
        * ****ocr\_min\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****ocr\_max\_pages**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****ocr\_engine**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****ocr\_lang**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****ocr\_dpi**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****pypdfium2\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    > **See also**
    > `scikitplot.corpus._readers.ALTOReader`
    :   ALTO XML in ZIP reader.

    `scikitplot.corpus._readers.ImageReader`
    :   OCR reader for raster images.

    Notes

    ****Backend selection:****

    * `pdfminer.six` preserves reading order better than pypdf for
      multi-column layouts and PDFs with complex glyph mappings.
    * `pypdf` is lighter and faster for simple single-column PDFs.
    * When `prefer_backend=None`, pdfminer is tried first; if it yields
      no text for a page, pypdf is tried as fallback on that page.

    ****Promoted fields in each raw chunk dict:****

    * `"page_number"` — zero-based page index (int).
    * `"section_type"` — always `SectionType.TEXT`.

    ****Scanned pages (OCR):**** A PDF of scanned pages has no text layer, and
    one exported from slides may carry only page labels. With `ocr="auto"`
    such pages are rendered with pypdfium2 (`pip install pypdfium2`) and
    read by the OCR engine. A chunk read with OCR carries `ocr_engine` and,
    from the built-in engines, `confidence`. OCR takes about one to two
    seconds per page at 300 dpi with Tesseract, hence `ocr_max_pages`. With
    `ocr="off"` a file whose pages hold no text gives one warning that
    names the option. The images a page lists as resources are not used: a
    page can list images it does not draw. PDFium is not thread-safe, so
    readers running in parallel threads (`CorpusBuilder(max_workers=...)`)
    render one page at a time; the OCR engine runs in parallel.

    ****Reproducible text:**** The same file and settings give the same text for
    every page on every read. pdfminer.six orders text boxes that are
    equally far apart by their address in memory, so a page with many such
    boxes (a figure with repeated labels, a grid) could come out in a
    different order on another read; the reader breaks those ties by the
    order in which the boxes were found. Pages without ties, and pdfminer’s
    grouping of boxes into columns, are as pdfminer.six lays them out.
    `pdfminer_ties="pdfminer"` reads in pdfminer.six’s own order instead.
    `pdfminer_kwargs={"laparams": {"boxes_flow": None}}` orders the boxes
    by position without grouping them into columns: reproducible either way.

    ****Encrypted PDFs:**** Supply `password` when constructing the reader.
    If the password is wrong, affected pages are skipped with a warning.

    Examples

    Try it in your browser!

    Default usage (auto backend):

    ```
    >>> from pathlib import Path
    >>> reader = PDFReader(input_path=Path("paper.pdf"))
    >>> docs = list(reader.get_documents())
    >>> print(f"Extracted {len(docs)} chunks from {reader.file_name}")

    ```

    Encrypted PDF with forced pypdf backend:

    ```
    >>> reader = PDFReader(
    ...     input_path=Path("secure.pdf"),
    ...     password="hunter2",
    ...     prefer_backend="pypdf",
    ... )
    >>> docs = list(reader.get_documents())

    ```

    Research PDF with provenance:

    ```
    >>> from scikitplot.corpus._base import DocumentReader
    >>> from scikitplot.corpus._schema import SourceType
    >>> reader = DocumentReader.create(
    ...     Path("arxiv_paper.pdf"),
    ...     source_type=SourceType.RESEARCH,
    ...     doi="10.1038/s41586-021-00099-z",
    ... )
    >>> docs = list(reader.get_documents())

    ```
    Go BackOpen In Tab

    property backend\_reports: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...][#](#scikitplot.corpus.PDFReader.backend_reports "Link to this definition")
    :   Return structured optional-backend reports from the current run.

        Reports are JSON-compatible dictionaries. They intentionally retain
        exception **type/message strings** rather than live exception objects,
        so fail-soft readers remain observable without retaining traceback
        object graphs. [`get_documents`](#scikitplot.corpus.PDFReader.get_documents "scikitplot.corpus.PDFReader.get_documents") clears old reports at the start
        of each run.

        Returns:
        :   tuple of dict
            :   One report per backend operation that opted into central
                orchestration. Empty when no optional backend operation ran.

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    clear\_backend\_reports()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1171)[#](#scikitplot.corpus.PDFReader.clear_backend_reports "Link to this definition")
    :   Clear structured optional-backend reports on this reader instance.

        Return type:
        :   None

    classmethod create(**\*input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L2041)[#](#scikitplot.corpus.PDFReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.PDFReader.from_url "scikitplot.corpus.PDFReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*input\_path****str or pathlib.Path
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.PDFReader.from_url "scikitplot.corpus.PDFReader.from_url"). ****Must be passed as
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
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.PDFReader.from_url "scikitplot.corpus.PDFReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.PDFReader.create "scikitplot.corpus.PDFReader.create").

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
        * `prefer_backend="pypdf"` → [`PDFReader`](#scikitplot.corpus.PDFReader "scikitplot.corpus.PDFReader")
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

    custom\_extractor: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.custom_extractor "Link to this definition")
    :   User-supplied extraction callable that ****replaces**** [`get_raw_chunks`](#scikitplot.corpus.PDFReader.get_raw_chunks "scikitplot.corpus.PDFReader.get_raw_chunks")
        entirely for this reader instance.

        When set, `_iter_raw_chunks` calls
        `custom_extractor(self.input_path, **custom_extractor_kwargs)` and
        normalises the return value through
        `normalize_extractor_output`.
        The built-in [`get_raw_chunks`](#scikitplot.corpus.PDFReader.get_raw_chunks "scikitplot.corpus.PDFReader.get_raw_chunks") implementation is ****not**** called.

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

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_pdf.py#L1028)[#](#scikitplot.corpus.PDFReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.PDFReader.custom_extractor "scikitplot.corpus.PDFReader.custom_extractor") on every
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

    default\_language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    property file\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.PDFReader.file_name "Link to this definition")
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

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_pdf.py#L1028)[#](#scikitplot.corpus.PDFReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] = ['.pdf'][#](#scikitplot.corpus.PDFReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.filename_override "Link to this definition")
    :   Override for the `input_path` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` triggers the [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter").

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L2358)[#](#scikitplot.corpus.PDFReader.from_manifest "Link to this definition")
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

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L2554)[#](#scikitplot.corpus.PDFReader.from_url "Link to this definition")
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
        [`create`](#scikitplot.corpus.PDFReader.create "scikitplot.corpus.PDFReader.create") automatically calls [`from_url`](#scikitplot.corpus.PDFReader.from_url "scikitplot.corpus.PDFReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.PDFReader.from_url "scikitplot.corpus.PDFReader.from_url") directly.

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

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1510)[#](#scikitplot.corpus.PDFReader.get_documents "Link to this definition")
    :   Yield validated [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.PDFReader.validate_input "scikitplot.corpus.PDFReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.PDFReader.get_raw_chunks "scikitplot.corpus.PDFReader.get_raw_chunks") — format-specific text extraction.
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

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_pdf.py#L1427)[#](#scikitplot.corpus.PDFReader.get_raw_chunks "Link to this definition")
    :   Yield one raw chunk dict per PDF page.

        When `prefer_backend="custom"` and [`custom_extractor`](#scikitplot.corpus.PDFReader.custom_extractor "scikitplot.corpus.PDFReader.custom_extractor") is
        set, delegates entirely to the extractor callable and normalises
        its return value via
        `normalize_extractor_output`.
        Otherwise, attempts pdfminer.six first; falls back to pypdf on
        pages where pdfminer returns no text. Pages with no extractable
        text are skipped.

        A page no backend can read is skipped, and the skipped pages are
        named in one warning after the last page. A file whose pages are
        read but hold no text (scanned images) gives no chunk and one
        warning.

        Yields:
        :   dict
            :   Keys:

                `"text"`
                :   Page text with whitespace preserved from the PDF layout.

                `"section_type"`
                :   Always `TEXT`.

                `"page_number"`
                :   Zero-based page index (promoted to first-class field).

        Raises:
        :   ValueError
            :   If the file exceeds `max_file_bytes`.

            ValueError
            :   If no backend can read any page: the file is not a complete
                PDF, or it is encrypted and `password` is wrong.

            ValueError
            :   If pdfminer.six does not accept `pdfminer_kwargs`.

            ImportError
            :   If neither pdfminer.six nor pypdf is installed (built-in path).

            ImportError
            :   If `ocr` is not `"off"`, a page needs OCR, and pypdfium2 or
                the engine’s library is not installed.

            RuntimeError
            :   If `prefer_backend="custom"` and the extractor raises.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], None, None]

    input\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_pdf.py#L1028)[#](#scikitplot.corpus.PDFReader.input_path "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    max\_file\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2147483648[#](#scikitplot.corpus.PDFReader.max_file_bytes "Link to this definition")
    :   2 GB.

        Type:
        :   Maximum file size in bytes. Default

    max\_text\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 268435456[#](#scikitplot.corpus.PDFReader.max_text_chars "Link to this definition")
    :   256 Mi.

        Content streams are compressed and pages may share one, so a few
        kilobytes can yield millions of characters per page. Enforced by
        [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader") with `on_text_limit`.

        Type:
        :   Most characters of text one file yields; `None`

        Type:
        :   no limit. Default

    max\_text\_chars\_per\_byte: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 50[#](#scikitplot.corpus.PDFReader.max_text_chars_per_byte "Link to this definition")
    :   1 Mi characters).

        Default: 50; `None`: no ratio limit. See
        `max_text_chars_per_byte`.

        Type:
        :   Most characters of text per byte of the file (floor

    ocr: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")] = 'off'[#](#scikitplot.corpus.PDFReader.ocr "Link to this definition")
    :   `"off"`, `"auto"` (pages whose text
        layer has fewer than [`ocr_min_chars`](#scikitplot.corpus.PDFReader.ocr_min_chars "scikitplot.corpus.PDFReader.ocr_min_chars") characters), `"always"`, or
        `policy(page_number, text) -> bool`. Default: `"off"`.

        Type:
        :   Which pages are read with OCR

    ocr\_dpi: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 300[#](#scikitplot.corpus.PDFReader.ocr_dpi "Link to this definition")
    :   Type:
        :   Resolution pages are rendered at for OCR, 1 to 1200. Default

    ocr\_engine: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] = 'tesseract'[#](#scikitplot.corpus.PDFReader.ocr_engine "Link to this definition")
    :   `"tesseract"`.

        Type:
        :   `"tesseract"`, `"easyocr"`, or `engine(image)`. Default

    ocr\_lang: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.ocr_lang "Link to this definition")
    :   `None`.

        Type:
        :   Language hint for a built-in OCR engine. Default

    ocr\_max\_pages: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 64[#](#scikitplot.corpus.PDFReader.ocr_max_pages "Link to this definition")
    :   Type:
        :   Most pages read with OCR per file; `None` for no limit. Default

    ocr\_min\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.corpus.PDFReader.ocr_min_chars "Link to this definition")
    :   Type:
        :   Under `ocr="auto"`, the text layer length below which OCR runs. Default

    on\_text\_limit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'refuse'[#](#scikitplot.corpus.PDFReader.on_text_limit "Link to this definition")
    :   What happens past the text limit ([`max_text_chars`](#scikitplot.corpus.PDFReader.max_text_chars "scikitplot.corpus.PDFReader.max_text_chars"),
        [`max_text_chars_per_byte`](#scikitplot.corpus.PDFReader.max_text_chars_per_byte "scikitplot.corpus.PDFReader.max_text_chars_per_byte")): `"refuse"` (default) raises
        `ValueError`; `"truncate"` keeps exactly the first
        `max_text_chars` characters, marks the chunk it cuts
        `text_truncated=True` (none when the limit falls between chunks) and
        logs a warning either way.

    password: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.corpus.PDFReader.password "Link to this definition")
    :   Decryption password for encrypted PDFs. Empty string means unencrypted.

    pdfminer\_kwargs: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.pdfminer_kwargs "Link to this definition")
    :   Keyword arguments for `pdfminer.high_level.extract_pages`; `None`
        uses pdfminer’s defaults. Default: `None`.

    pdfminer\_ties: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'stable'[#](#scikitplot.corpus.PDFReader.pdfminer_ties "Link to this definition")
    :   `"stable"` (same text on every read) or `"pdfminer"` (pdfminer.six’s
        own order of equally distant text boxes). Default: `"stable"`.

    prefer\_backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.prefer_backend "Link to this definition")
    :   Force a specific extraction backend. One of `"pdfminer"`, `"pypdf"`,
        `"custom"`, or `None` (auto: try pdfminer first, pypdf fallback).
        Default: `None`.

        When `"custom"`, [`custom_extractor`](#scikitplot.corpus.PDFReader.custom_extractor "scikitplot.corpus.PDFReader.custom_extractor") ****must**** be provided.

    pypdfium2\_kwargs: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.pypdfium2_kwargs "Link to this definition")
    :   Keyword arguments for pypdfium2’s `PdfPage.render`, used for OCR;
        `scale` is set from [`ocr_dpi`](#scikitplot.corpus.PDFReader.ocr_dpi "scikitplot.corpus.PDFReader.ocr_dpi"). Default: `None`.

    source\_provenance: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_pdf.py#L1028)[#](#scikitplot.corpus.PDFReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.PDFReader.create "scikitplot.corpus.PDFReader.create") / [`from_url`](#scikitplot.corpus.PDFReader.from_url "scikitplot.corpus.PDFReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.PDFReader.source_uri "Link to this definition")
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

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1900)[#](#scikitplot.corpus.PDFReader.subclass_by_type "Link to this definition")
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

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1882)[#](#scikitplot.corpus.PDFReader.supported_types "Link to this definition")
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

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1205)[#](#scikitplot.corpus.PDFReader.validate_input "Link to this definition")
    :   Assert that the input file exists and is readable.

        Raises:
        :   ValueError
            :   If `input_path` does not exist or is not a regular file.

        Return type:
        :   None

        Notes

        Called automatically by [`get_documents`](#scikitplot.corpus.PDFReader.get_documents "scikitplot.corpus.PDFReader.get_documents") before iterating.
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