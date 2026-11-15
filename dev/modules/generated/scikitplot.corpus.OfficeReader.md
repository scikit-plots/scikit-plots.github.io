# OfficeReader[#](#officereader "Link to this heading")

class scikitplot.corpus.OfficeReader(**input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **max\_text\_chars=268435456**, **max\_text\_chars\_per\_byte=50**, **on\_text\_limit='refuse'**, **notes=True**, **hidden=True**, **rows\_per\_chunk=500**, **headings=True**, **code\_files='refuse'**, **max\_file\_bytes=524288000**, **max\_part\_bytes=268435456**, **max\_part\_bytes\_per\_byte=50**, **max\_parts=100000**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_office.py#L1088)[#](#scikitplot.corpus.OfficeReader "Link to this definition")
:   Read office documents: Office Open XML and OpenDocument.

    Word documents (`.docx`, `.docm`, `.dotx`, `.dotm`) give their
    body in document order, a chunk per run of paragraphs between tables and
    a chunk per table, then footnotes and endnotes. Presentations
    (`.pptx`, `.pptm`, `.potx`, `.potm`, `.ppsx`, `.ppsm`) give
    a chunk per slide in the order of the deck, then, if asked, its notes.
    Workbooks (`.xlsx`, `.xlsm`, `.xltx`, `.xltm`) give each
    worksheet in workbook order, `rows_per_chunk` rows a chunk.

    OpenDocument files read the same way: text documents (`.odt`,
    `.ott`) as paragraphs, tables and notes; spreadsheets (`.ods`,
    `.ots`) as sheets of rows; presentations and drawings (`.odp`,
    `.otp`, `.odg`, `.otg`) as a chunk per page, then its notes; a
    formula (`.odf`) as its annotation text; and the flat single-XML
    forms (`.fodt`, `.fods`, `.fodp`, `.fodg`).

    Parameters:
    :   ****input\_path****pathlib.Path
        :   Path to the file.

        ****notes****bool, optional
        :   Read speaker notes (PowerPoint) and footnotes and endnotes (Word).
            Default: `True`.

        ****hidden****bool, optional
        :   Read slides and sheets marked hidden, and Word text formatted as
            hidden (`w:vanish`). Their chunks carry `hidden=True` (slides,
            sheets) or `has_hidden_text=True` (Word). `False` leaves all of
            them out. Default: `True`.

        ****rows\_per\_chunk****int, optional
        :   Most spreadsheet rows in one chunk; a longer sheet gives several
            chunks. Default: `500`.

        ****headings****bool, optional
        :   Start a new chunk at each heading of a text document and record
            the heading on the chunks under it. `False` reads headings as
            paragraphs. Default: `True`.

        ****code\_files****{“refuse”, “skip”}, optional
        :   What happens to an add-in, macro sheet or workspace: `"refuse"`
            raises `ValueError` saying what the file is; `"skip"` logs that
            warning and yields nothing, so a large folder is read past such
            files. Neither ever reads one. Default: `"refuse"`.

        ****max\_file\_bytes****int, optional
        :   Largest file read. Default: 500 MB.

        ****max\_part\_bytes****int, optional
        :   Largest XML part read, uncompressed: the bound on memory, and on a
            part that a small ZIP inflates into a huge one. Default: 256 MB.

        ****max\_part\_bytes\_per\_byte****float or None, optional
        :   Most uncompressed bytes of one XML part per byte of the file: a
            part may be `max(max_part_bytes_per_byte x file size, 1 Mi)`
            bytes, and never more than `max_part_bytes`. A part is parsed
            whole, at several times its size in memory, and a ZIP can inflate
            one about a thousand times, so this keeps the cost of a file in
            proportion to its size. Not applied to a flat OpenDocument file
            (one XML file, not compressed). Default: 50; `None`: no ratio
            limit.

        ****max\_parts****int, optional
        :   Most parts a package may hold. Default: 100 000.

        ****max\_text\_chars****int or None, optional
        :   Most characters of text one file may yield, over all its chunks:
            the bound on what a small file can expand into (a spreadsheet cell
            repeated across columns and rows stays within each sheet limit, yet
            a 500-byte file could yield 34 billion characters). `None`: no
            limit. Default: 256 Mi characters.

        ****on\_text\_limit****{“refuse”, “truncate”}, optional
        :   What happens past `max_text_chars`, as for every reader (see
            `on_text_limit`).
            Default: `"refuse"`.

        ****chunker, filter\_, filename\_override, default\_language****optional
        :   Inherited from [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

    Attributes:
    :   ****file\_types****list of str
        :   The Office Open XML and OpenDocument extensions above.

    Raises:
    :   ValueError
        :   If a limit is not a positive int; at read time, if the file is too
            large, is not a package or a flat OpenDocument file (a legacy
            `.doc`/`.ppt` or an encrypted file is named as such), has no
            main part the reader knows, holds a part twice, over a limit or not
            well-formed XML, or has a spreadsheet cell past a sheet’s size
            (OpenDocument: repeated past it; Excel: referenced past column
            `XFD`).

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
        * ****notes**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****hidden**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****rows\_per\_chunk**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****headings**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****code\_files**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_file\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_part\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_part\_bytes\_per\_byte**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****max\_parts**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    > **See also**
    > `scikitplot.corpus._readers.PDFReader`
    :   PDF documents.

    `scikitplot.corpus._readers.ZipReader`
    :   Archives of other files.

    Notes

    ****Chunks.**** Every chunk has `text`, `raw_text`, `section_type`,
    `part` (the package part it came from) and `has_macros` (the
    package holds a VBA project; it is never run). Slides add
    `page_number` (0-based position in the deck) and `hidden`; notes
    add `page_number` of their slide. Word tables are `section_type
    "table"`, cells separated by tabs and rows by lines; footnotes and
    endnotes are `"footnote"`. Sheet chunks are `"table"`, rows by line
    and cells by tab at their column, with `page_number` (0-based sheet
    position), `sheet` (its name), `row_start`, `row_end` (1-based
    row numbers) and `hidden`. A cell gives its stored value: the cached
    result of a formula (formulas are never computed), dates as their
    serial number, booleans as `TRUE`/`FALSE`.

    ****Hidden text.**** Word text formatted as hidden is not shown to a
    reader but is in the file; text placed there to steer a model that
    reads the document is one reason to know. A chunk that holds any
    carries `has_hidden_text=True` (the key is absent otherwise), and
    `hidden=False` leaves the hidden runs out. OpenDocument text counts
    the same way: a conditional hidden text (`text:hidden-text`), a
    paragraph marked hidden (`text:hidden-paragraph`) and a section not
    displayed (`text:display="none"`, or `"condition"` while hidden).
    A table in a hidden section is left out with `hidden=False` but not
    flagged otherwise. In Word a style hides text too: a character style,
    the paragraph’s style or the document default with `w:vanish`, each
    through the styles it is based on. In OpenDocument a span or paragraph
    style with `text:display="none"` hides too, through its parent
    styles, from `content.xml` and `styles.xml`.

    ****Headings.**** In Word and OpenDocument text, a heading starts a new
    chunk (its text is the chunk’s first line), and that chunk and the
    tables under it carry `heading` and `heading_level` (1 is the top)
    until the next heading, so a chunk keeps the section it belongs to.
    `heading_path` lists the headings it sits under, from the top down
    (`["Methods", "Sampling"]`). A slide’s chunks, and its notes, carry
    its title (the `title` or `ctrTitle` placeholder) the same way, at
    level 1.
    Word headings are found by outline level, by the built-in `heading
    1` to `heading 9` styles, and by styles based on them.

    ****What decides.**** The content, not the extension: a `.docx` that is
    a presentation reads as one, and the Strict and Transitional
    conformance classes of Office Open XML read alike. The legacy names
    (`.doc`, `.dot`, `.wbk`, `.xls`, `.xlt`, `.ppt`, `.pot`,
    `.pps`) are registered too: a legacy binary file under them is
    refused with the reason, and a modern package saved under such a name
    is read. Add-ins, macro sheets and workspaces (`.wll`, `.wwl`,
    `.xll`, `.xla`, `.xlam`, `.xlm`, `.xlw`, `.ppa`,
    `.ppam` and the Mac variants) are code or settings, not documents,
    and are refused by name.

    ****Order.**** Slides follow the deck’s list (`p:sldIdLst`), not their
    part names, so `slide11.xml` can come before `slide2.xml`.

    ****Security.**** The package is read in memory; part names never become
    paths. Every XML part is parsed with entity declarations and external
    entities refused (`_xml_safety`). Relationships to external
    targets, or to targets above the package root, are not followed.
    Tracked deletions are dropped; fields read as their cached text.

    ****Memory.**** Each part is parsed whole, not streamed, at about eight
    times its uncompressed size, so memory is bounded by the part limit in
    force: the smaller of `max_part_bytes` and
    `max(max_part_bytes_per_byte x file size, 1 Mi)`.

    ****OpenDocument specifics.**** Cells give their displayed text, so dates
    read as shown. Repeated cells and rows are expanded; a repeat of cells
    or rows **with a value** beyond 16 384 columns or 1 048 576 rows is
    refused. Hidden pages and sheets are not told apart (the flag lives in
    a style), so their chunks carry no `hidden` key. A package whose
    manifest lists encrypted parts is refused.

    ****Not read (yet):**** headers and footers, comments, charts, SmartArt,
    embedded images (no OCR), slide masters and layouts; number formats in
    Excel (dates read as numbers); chartsheets; legacy binary files
    (`.doc`, `.xls`, `.ppt`).

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> from scikitplot.corpus._base import DocumentReader
    >>> reader = DocumentReader.create(Path("deck.pptx"), notes=False)
    >>> docs = list(reader.get_documents())

    ```
    Go BackOpen In Tab

    property backend\_reports: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...][#](#scikitplot.corpus.OfficeReader.backend_reports "Link to this definition")
    :   Return structured optional-backend reports from the current run.

        Reports are JSON-compatible dictionaries. They intentionally retain
        exception **type/message strings** rather than live exception objects,
        so fail-soft readers remain observable without retaining traceback
        object graphs. [`get_documents`](#scikitplot.corpus.OfficeReader.get_documents "scikitplot.corpus.OfficeReader.get_documents") clears old reports at the start
        of each run.

        Returns:
        :   tuple of dict
            :   One report per backend operation that opted into central
                orchestration. Empty when no optional backend operation ran.

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.OfficeReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    clear\_backend\_reports()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1171)[#](#scikitplot.corpus.OfficeReader.clear_backend_reports "Link to this definition")
    :   Clear structured optional-backend reports on this reader instance.

        Return type:
        :   None

    code\_files: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'refuse'[#](#scikitplot.corpus.OfficeReader.code_files "Link to this definition")
    :   `"refuse"`.

        Type:
        :   `"refuse"` or `"skip"` an add-in, macro sheet or workspace. Default

    classmethod create(**\*input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L2041)[#](#scikitplot.corpus.OfficeReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.OfficeReader.from_url "scikitplot.corpus.OfficeReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*input\_path****str or pathlib.Path
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.OfficeReader.from_url "scikitplot.corpus.OfficeReader.from_url"). ****Must be passed as
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
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.OfficeReader.from_url "scikitplot.corpus.OfficeReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.OfficeReader.create "scikitplot.corpus.OfficeReader.create").

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

    custom\_extractor: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.OfficeReader.custom_extractor "Link to this definition")
    :   User-supplied extraction callable that ****replaces**** [`get_raw_chunks`](#scikitplot.corpus.OfficeReader.get_raw_chunks "scikitplot.corpus.OfficeReader.get_raw_chunks")
        entirely for this reader instance.

        When set, `_iter_raw_chunks` calls
        `custom_extractor(self.input_path, **custom_extractor_kwargs)` and
        normalises the return value through
        `normalize_extractor_output`.
        The built-in [`get_raw_chunks`](#scikitplot.corpus.OfficeReader.get_raw_chunks "scikitplot.corpus.OfficeReader.get_raw_chunks") implementation is ****not**** called.

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

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_office.py#L1088)[#](#scikitplot.corpus.OfficeReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.OfficeReader.custom_extractor "scikitplot.corpus.OfficeReader.custom_extractor") on every
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

    default\_language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.OfficeReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    property file\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.OfficeReader.file_name "Link to this definition")
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

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_office.py#L1088)[#](#scikitplot.corpus.OfficeReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] = ['.docx', '.docm', '.dotx', '.dotm', '.pptx', '.pptm', '.potx', '.potm', '.ppsx', '.ppsm', '.xlsx', '.xlsm', '.xltx', '.xltm', '.odt', '.ott', '.ods', '.ots', '.odp', '.otp', '.odg', '.otg', '.odf', '.fodt', '.fods', '.fodp', '.fodg', '.doc', '.dot', '.wbk', '.xls', '.xlt', '.ppt', '.pot', '.pps', '.ppa', '.ppam', '.wll', '.wwl', '.xla', '.xla5', '.xla8', '.xla\_', '.xlam', '.xll', '.xll\_', '.xlm', '.xlw'][#](#scikitplot.corpus.OfficeReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.OfficeReader.filename_override "Link to this definition")
    :   Override for the `input_path` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.OfficeReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` triggers the [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter").

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L2358)[#](#scikitplot.corpus.OfficeReader.from_manifest "Link to this definition")
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

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L2554)[#](#scikitplot.corpus.OfficeReader.from_url "Link to this definition")
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
        [`create`](#scikitplot.corpus.OfficeReader.create "scikitplot.corpus.OfficeReader.create") automatically calls [`from_url`](#scikitplot.corpus.OfficeReader.from_url "scikitplot.corpus.OfficeReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.OfficeReader.from_url "scikitplot.corpus.OfficeReader.from_url") directly.

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

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1510)[#](#scikitplot.corpus.OfficeReader.get_documents "Link to this definition")
    :   Yield validated [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.OfficeReader.validate_input "scikitplot.corpus.OfficeReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.OfficeReader.get_raw_chunks "scikitplot.corpus.OfficeReader.get_raw_chunks") — format-specific text extraction.
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

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_office.py#L1375)[#](#scikitplot.corpus.OfficeReader.get_raw_chunks "Link to this definition")
    :   Yield the text of the document, a chunk at a time.

        Yields:
        :   dict
            :   See the Notes of [`OfficeReader`](#scikitplot.corpus.OfficeReader "scikitplot.corpus.OfficeReader").

        Raises:
        :   ValueError
            :   See [`OfficeReader`](#scikitplot.corpus.OfficeReader "scikitplot.corpus.OfficeReader").

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], None, None]

    headings: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.OfficeReader.headings "Link to this definition")
    :   `True`.

        Type:
        :   Split text documents at headings and record them. Default

    hidden: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.OfficeReader.hidden "Link to this definition")
    :   `True`.

        Type:
        :   Read hidden slides, sheets and Word hidden text. Default

    input\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_office.py#L1088)[#](#scikitplot.corpus.OfficeReader.input_path "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    max\_file\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 524288000[#](#scikitplot.corpus.OfficeReader.max_file_bytes "Link to this definition")
    :   500 MB.

        Type:
        :   Largest file read. Default

    max\_part\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 268435456[#](#scikitplot.corpus.OfficeReader.max_part_bytes "Link to this definition")
    :   256 MB.

        Type:
        :   Largest XML part read, uncompressed. Default

    max\_part\_bytes\_per\_byte: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 50[#](#scikitplot.corpus.OfficeReader.max_part_bytes_per_byte "Link to this definition")
    :   1 Mi bytes).

        Default: 50; `None`: no ratio limit.

        Type:
        :   Most uncompressed bytes of a part per byte of the file (floor

    max\_parts: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 100000[#](#scikitplot.corpus.OfficeReader.max_parts "Link to this definition")
    :   100 000.

        Type:
        :   Most parts a package may hold. Default

    max\_text\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 268435456[#](#scikitplot.corpus.OfficeReader.max_text_chars "Link to this definition")
    :   256 Mi.

        Enforced by [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader") with
        `on_text_limit`; this reader only sets the default.

        Type:
        :   Most characters of text one file yields; `None`

        Type:
        :   no limit. Default

    max\_text\_chars\_per\_byte: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 50[#](#scikitplot.corpus.OfficeReader.max_text_chars_per_byte "Link to this definition")
    :   1 Mi characters).

        Default: 50; `None`: no ratio limit. See
        `max_text_chars_per_byte`.

        Type:
        :   Most characters of text per byte of the file (floor

    notes: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.OfficeReader.notes "Link to this definition")
    :   `True`.

        Type:
        :   Read speaker notes, footnotes and endnotes. Default

    on\_text\_limit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'refuse'[#](#scikitplot.corpus.OfficeReader.on_text_limit "Link to this definition")
    :   What happens past the text limit ([`max_text_chars`](#scikitplot.corpus.OfficeReader.max_text_chars "scikitplot.corpus.OfficeReader.max_text_chars"),
        [`max_text_chars_per_byte`](#scikitplot.corpus.OfficeReader.max_text_chars_per_byte "scikitplot.corpus.OfficeReader.max_text_chars_per_byte")): `"refuse"` (default) raises
        `ValueError`; `"truncate"` keeps exactly the first
        `max_text_chars` characters, marks the chunk it cuts
        `text_truncated=True` (none when the limit falls between chunks) and
        logs a warning either way.

    rows\_per\_chunk: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 500[#](#scikitplot.corpus.OfficeReader.rows_per_chunk "Link to this definition")
    :   `500`.

        Type:
        :   Most spreadsheet rows in one chunk. Default

    source\_provenance: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_readers/_office.py#L1088)[#](#scikitplot.corpus.OfficeReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.OfficeReader.create "scikitplot.corpus.OfficeReader.create") / [`from_url`](#scikitplot.corpus.OfficeReader.from_url "scikitplot.corpus.OfficeReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.OfficeReader.source_uri "Link to this definition")
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

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1900)[#](#scikitplot.corpus.OfficeReader.subclass_by_type "Link to this definition")
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

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1882)[#](#scikitplot.corpus.OfficeReader.supported_types "Link to this definition")
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

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L1205)[#](#scikitplot.corpus.OfficeReader.validate_input "Link to this definition")
    :   Assert that the input file exists and is readable.

        Raises:
        :   ValueError
            :   If `input_path` does not exist or is not a regular file.

        Return type:
        :   None

        Notes

        Called automatically by [`get_documents`](#scikitplot.corpus.OfficeReader.get_documents "scikitplot.corpus.OfficeReader.get_documents") before iterating.
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