# LeanReader[#](#leanreader "Link to this heading")

class scikitplot.corpus.LeanReader(**input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_uri=None**, **source\_provenance=<factory>**, **custom\_extractor=None**, **custom\_extractor\_kwargs=<factory>**, **max\_text\_chars=None**, **max\_text\_chars\_per\_byte=None**, **on\_text\_limit='refuse'**, **encoding=None**, **max\_file\_bytes=52428800**, **lines\_per\_chunk=200**, **language=None**, **proofs='keep'**, **kinds=None**, **watch=()**, **commands=()**, **dialect='lean4'**, **max\_scope\_depth=256**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_readers/_lean.py#L1331)[#](#scikitplot.corpus.LeanReader "Link to this definition")
:   Read a Lean source file one command at a time, each chunk naming its declaration.

    Parameters:
    :   ****input\_path****pathlib.Path
        :   Path to the `.lean` file.

        ****proofs****{“keep”, “drop”}, optional
        :   `"keep"` (default) keeps every line. `"drop"` leaves out the
            proofs of `theorem`, `lemma` and `example`: the chunk holds
            the statement (doc comment and attributes included) and names the
            proof’s lines in `proof_line_start` and `proof_line_end`. A
            statement index of a large development is a fraction of its size.

        ****kinds****collection of str or None, optional
        :   Only chunks whose `lean_kind` is in this collection are yielded,
            for example `{"theorem", "lemma"}`. `None` (default): all.

        ****watch****collection of str, optional
        :   Identifiers to find: each chunk lists in `watched` those it uses
            in code. A name matches whole, or as the last components of a
            dotted name (`keyLemma` matches `Main.keyLemma` and the
            `keyLemma` of `keyLemma.symm`). Default: none.

        ****commands****collection of str, optional
        :   Further command keywords that start a chunk of their own at column
            0, for commands a project defines. Default: none.

        ****dialect****{“lean4”, “lean3”}, optional
        :   `"lean3"` also reads Lean 3’s `begin ... end` and
            `match ... end` blocks, whose `end` closes no namespace, and
            its `| pattern := proof` equations. Default: `"lean4"`.

        ****max\_scope\_depth****int, optional
        :   Most namespaces and sections open at once; deeper nesting is
            refused. Default: 256.

        ****lines\_per\_chunk****int or None, optional
        :   A command longer than this is yielded in parts of at most this many
            lines, each with `part` (1, 2, …). `None`: one chunk per
            command. Default: 200.

        ****encoding, max\_file\_bytes, language****
        :   As for `CodeReader`.

    Attributes:
    :   ****flag\_tokens****Mapping of str to str
        :   Class variable: code token to audit flag, [`LEAN_FLAGS`](scikitplot.corpus.LEAN_FLAGS.html#scikitplot.corpus.LEAN_FLAGS "scikitplot.corpus.LEAN_FLAGS").
            Subclass to change it.

    Raises:
    :   TypeError
        :   If `kinds`, `watch` or `commands` is not a collection of str.

        ValueError
        :   If an option’s value is invalid, the file is too large or binary,
            or it nests more than `max_scope_depth` scopes.

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
        * ****encoding**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]****,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****max\_file\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****lines\_per\_chunk**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****proofs**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kinds**** ([**Collection**](https://docs.python.org/3/library/typing.html#typing.Collection "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****watch**** ([**Collection**](https://docs.python.org/3/library/typing.html#typing.Collection "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****commands**** ([**Collection**](https://docs.python.org/3/library/typing.html#typing.Collection "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****dialect**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_scope\_depth**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    > **See also**
    > `scikitplot.corpus._readers.CodeReader`
    :   Other source code, in line blocks.

    Notes

    ****User note.**** Each chunk carries `language` (`"lean"`),
    `line_start` and `line_end` (1-based, inclusive, the file’s own
    line numbers), `encoding`, and:

    * `lean_kind`: the command keyword (`"theorem"`, `"def"`,
      `"instance"`, `"#eval"`, …); `"import"` for the module
      header, `"context"` for a run of `open`, `variable`,
      `namespace`, `section`, `end`, `set_option` …;
      `"moduledoc"` for a `/-! -/` comment; `"comment"` for comments
      apart from any command; `"command"` for code before any known
      command.
    * `declaration`: the fully qualified name, namespaces included
      (`_root_.` removed); absent for unnamed declarations
      (`example`, an unnamed `instance`).
    * `namespace`, `modifiers` (`private`, `noncomputable`, …),
      `attributes` (`simp`, `implemented_by`, …) and `imports`,
      when present.
    * `flags`: audit marks found in the chunk’s code (see
      [`LEAN_FLAGS`](scikitplot.corpus.LEAN_FLAGS.html#scikitplot.corpus.LEAN_FLAGS "scikitplot.corpus.LEAN_FLAGS")); with `proofs="drop"` the dropped proof’s
      marks are on its statement.
    * `watched`, `part`, `proof_line_start`, `proof_line_end`:
      see the options.

    With `proofs="keep"` and `kinds=None` every non-blank line of the
    file is in exactly one chunk, in order: the line ranges never overlap.

    ****What starts a command.**** A known command keyword at column 0, after
    any attributes and modifiers (`@[simp] private theorem`); a
    declaration keyword (`theorem`, `def`, `instance`, …) or a
    scope keyword at any indentation, since those never begin a line of a
    proof; inside `mutual`, the indentation of its first declaration. A
    doc comment, an attribute line and comments directly above a command
    belong to it; `open Foo in` and `set_option o v in` join the
    command they prefix, so its flags include the option. Any other line
    continues the command before it: a command a project defines with
    `syntax` is read as part of the preceding chunk unless it is named
    in `commands`. A declaration’s name is read from its keyword’s
    line.

    ****Lexical audit, not proof checking.**** `flags` say what the text
    contains, outside comments and strings. A macro that expands to
    `sorry` is flagged where it is defined, not where it is used, and an
    axiom is flagged where it is declared, not in the theorems that use
    it. Whether a theorem is proved from Lean’s standard axioms alone is
    what `#print axioms` (and an independent kernel replay) answers.

    ****Statement and proof.**** With `proofs="drop"` the statement ends at
    the first `:=` outside brackets that is not a `let`’s or a
    `have`’s, at a `where`, or at a line that starts with `|` and
    holds `=>` (`:=` in Lean 3): the equations of a proof by pattern
    matching. Definitions keep their bodies; their values are their
    meaning.

    ****Developer note.**** The file is decoded as
    `TextReader` decodes it, then read
    line by line through a lexer that blanks comments, strings and
    character literals (Lean’s rules: nested `/- -/`, `/--` and
    `/-!` docs, escapes and gaps, `s!` interpolation, `r#"..."#` raw
    strings, `'` primes, «names» over lines). Every pattern moves
    forward, so time is linear in the file’s size, and memory is one
    command (a long one is emitted in parts as it is read) plus at most
    `max(lines_per_chunk, 256)` comment lines waiting for the next
    command.

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> reader = LeanReader(input_path=Path("Main.lean"))
    >>> [
    ...     c.get("declaration")
    ...     for c in reader.get_raw_chunks()
    ...     if c["lean_kind"] == "theorem"
    ... ]
    ['mainTheorem', ...]

    ```

    Statements only, with every use of a name located:

    ```
    >>> reader = LeanReader(
    ...     input_path=Path("Main.lean"), proofs="drop", watch=["keyLemma"]
    ... )

    ```
    Go BackOpen In Tab

    property backend\_reports: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...][#](#scikitplot.corpus.LeanReader.backend_reports "Link to this definition")
    :   Return structured optional-backend reports from the current run.

        Reports are JSON-compatible dictionaries. They intentionally retain
        exception **type/message strings** rather than live exception objects,
        so fail-soft readers remain observable without retaining traceback
        object graphs. [`get_documents`](#scikitplot.corpus.LeanReader.get_documents "scikitplot.corpus.LeanReader.get_documents") clears old reports at the start
        of each run.

        Returns:
        :   tuple of dict
            :   One report per backend operation that opted into central
                orchestration. Empty when no optional backend operation ran.

    chunker: [ChunkerBase](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.chunker "Link to this definition")
    :   Chunker to apply to each raw text block. `None` means each raw chunk
        is used as-is (one CorpusDocument per raw chunk).

    clear\_backend\_reports()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L1262)[#](#scikitplot.corpus.LeanReader.clear_backend_reports "Link to this definition")
    :   Clear structured optional-backend reports on this reader instance.

        Return type:
        :   None

    commands: [Collection](https://docs.python.org/3/library/typing.html#typing.Collection "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = ()[#](#scikitplot.corpus.LeanReader.commands "Link to this definition")
    :   Further command keywords that start a chunk at column 0.

    classmethod create(**\*input\_path**, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L2132)[#](#scikitplot.corpus.LeanReader.create "Link to this definition")
    :   Instantiate the appropriate reader for one or more sources.

        Accepts any mix of file paths, URL strings, and
        [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)") objects — in any order. URL strings (those
        starting with `http://` or `https://`) are automatically
        detected and routed to [`from_url`](#scikitplot.corpus.LeanReader.from_url "scikitplot.corpus.LeanReader.from_url"); everything else is treated
        as a local file path and dispatched by extension via the registry.

        Parameters:
        :   ****\*input\_path****str or pathlib.Path
            :   One or more source paths or URL strings. Each element is
                classified independently:

                * `str` matching `^https?://` (case-insensitive) — treated
                  as a URL and routed to [`from_url`](#scikitplot.corpus.LeanReader.from_url "scikitplot.corpus.LeanReader.from_url"). ****Must be passed as
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
        paths. This means you no longer need to call [`from_url`](#scikitplot.corpus.LeanReader.from_url "scikitplot.corpus.LeanReader.from_url")
        explicitly — just pass the URL string to [`create`](#scikitplot.corpus.LeanReader.create "scikitplot.corpus.LeanReader.create").

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

    custom\_extractor: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.custom_extractor "Link to this definition")
    :   User-supplied extraction callable that ****replaces**** [`get_raw_chunks`](#scikitplot.corpus.LeanReader.get_raw_chunks "scikitplot.corpus.LeanReader.get_raw_chunks")
        entirely for this reader instance.

        When set, `_iter_raw_chunks` calls
        `custom_extractor(self.input_path, **custom_extractor_kwargs)` and
        normalises the return value through
        `normalize_extractor_output`.
        The built-in [`get_raw_chunks`](#scikitplot.corpus.LeanReader.get_raw_chunks "scikitplot.corpus.LeanReader.get_raw_chunks") implementation is ****not**** called.

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

    custom\_extractor\_kwargs: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_readers/_lean.py#L1331)[#](#scikitplot.corpus.LeanReader.custom_extractor_kwargs "Link to this definition")
    :   Extra keyword arguments forwarded to [`custom_extractor`](#scikitplot.corpus.LeanReader.custom_extractor "scikitplot.corpus.LeanReader.custom_extractor") on every
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

    default\_language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.default_language "Link to this definition")
    :   ISO 639-1 language code to assign when the source has no language info.

    dialect: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'lean4'[#](#scikitplot.corpus.LeanReader.dialect "Link to this definition")
    :   `"lean4"` or `"lean3"`.

    encoding: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [Sequence](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[bytes](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")], [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.encoding "Link to this definition")
    :   `None` (detect, see the Notes), a codec
        name, a list of candidate codecs, `"chardet"`, or a callable
        `(raw: bytes) -> codec`. Default: `None`.

        Type:
        :   How the file is decoded

    property file\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.LeanReader.file_name "Link to this definition")
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

    file\_type: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = '.lean'[#](#scikitplot.corpus.LeanReader.file_type "Link to this definition")
    :   Single file extension this reader handles (lowercase, including leading
        dot). E.g. `".txt"`, `".xml"`, `".zip"`.

        For readers that handle multiple extensions, define `file_types`
        (plural) instead. ****Exactly one**** of `file_type` or `file_types`
        must be defined on every concrete subclass.

    file\_types: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] = ['.lean'][#](#scikitplot.corpus.LeanReader.file_types "Link to this definition")
    :   List of file extensions this reader handles (lowercase, leading dot).
        Use instead of `file_type` when a single reader class should be
        registered for several extensions — e.g. an image reader for
        `[".png", ".jpg", ".jpeg", ".gif", ".webp"]`.

        When both `file_type` and `file_types` are defined on the same
        class, `file_types` takes precedence and `file_type` is ignored.

    filename\_override: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.filename_override "Link to this definition")
    :   Override for the `input_path` label in generated documents.

    filter\_: [FilterBase](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.filter_ "Link to this definition")
    :   Filter applied after chunking. `None` triggers the [`DefaultFilter`](scikitplot.corpus.DefaultFilter.html#scikitplot.corpus.DefaultFilter "scikitplot.corpus.DefaultFilter").

    flag\_tokens: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]] = mappingproxy({'sorry': 'sorry', 'sorryAx': 'sorry', 'admit': 'admit', 'native\_decide': 'native', 'ofReduceBool': 'native', '+native': 'native', 'unsafe': 'unsafe', 'implemented\_by': 'implemented\_by', 'extern': 'extern', 'skipKernelTC': 'skip\_kernel\_tc', 'addDecl': 'add\_decl', 'addAndCompile': 'add\_decl'})[#](#scikitplot.corpus.LeanReader.flag_tokens "Link to this definition")

    classmethod from\_manifest(**manifest\_path**, **\***, **chunker=None**, **filter\_=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **encoding='utf-8'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L2449)[#](#scikitplot.corpus.LeanReader.from_manifest "Link to this definition")
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

    classmethod from\_url(**url**, **\***, **chunker=None**, **filter\_=None**, **filename\_override=None**, **default\_language=None**, **source\_type=None**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **doi=None**, **isbn=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L2645)[#](#scikitplot.corpus.LeanReader.from_url "Link to this definition")
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
        [`create`](#scikitplot.corpus.LeanReader.create "scikitplot.corpus.LeanReader.create") automatically calls [`from_url`](#scikitplot.corpus.LeanReader.from_url "scikitplot.corpus.LeanReader.from_url") — you rarely
        need to call [`from_url`](#scikitplot.corpus.LeanReader.from_url "scikitplot.corpus.LeanReader.from_url") directly.

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

    get\_documents()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L1601)[#](#scikitplot.corpus.LeanReader.get_documents "Link to this definition")
    :   Yield validated [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
        instances for the input file.

        Orchestrates the full per-file pipeline:

        1. [`validate_input`](#scikitplot.corpus.LeanReader.validate_input "scikitplot.corpus.LeanReader.validate_input") — fail fast if file is missing.
        2. [`get_raw_chunks`](#scikitplot.corpus.LeanReader.get_raw_chunks "scikitplot.corpus.LeanReader.get_raw_chunks") — format-specific text extraction.
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

    get\_raw\_chunks()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_readers/_lean.py#L1523)[#](#scikitplot.corpus.LeanReader.get_raw_chunks "Link to this definition")
    :   Yield the file’s commands, each with its line range and declaration.

        Yields:
        :   dict
            :   `text`, `section_type`, `source_type`, `language`,
                `encoding`, `line_start`, `line_end`, `lean_kind` and,
                when they apply, `declaration`, `namespace`, `modifiers`,
                `attributes`, `imports`, `flags`, `watched`, `part`,
                `proof_line_start` and `proof_line_end`.

        Raises:
        :   ValueError
            :   If the file is too large or binary, or nests more than
                `max_scope_depth` scopes.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], None, None]

    input\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_readers/_lean.py#L1331)[#](#scikitplot.corpus.LeanReader.input_path "Link to this definition")
    :   Path to the source file.

        For URL-based readers ([`WebReader`](scikitplot.corpus.WebReader.html#scikitplot.corpus.WebReader "scikitplot.corpus.WebReader"), [`YouTubeReader`](scikitplot.corpus.YouTubeReader.html#scikitplot.corpus.YouTubeReader "scikitplot.corpus.YouTubeReader")),
        pass `pathlib.Path(url_string)` here and set `source_uri` to the
        original URL string. `validate_input()` is overridden in those
        subclasses to skip the file-existence check.

    kinds: [Collection](https://docs.python.org/3/library/typing.html#typing.Collection "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.kinds "Link to this definition")
    :   all.

        Type:
        :   Only these `lean_kind` values are yielded; `None`

    language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.language "Link to this definition")
    :   Language name to record; `None` takes it from the extension.

    languages: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]] = mappingproxy({'.lean': 'lean'})[#](#scikitplot.corpus.LeanReader.languages "Link to this definition")

    lines\_per\_chunk: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 200[#](#scikitplot.corpus.LeanReader.lines_per_chunk "Link to this definition")
    :   Lines in one chunk; `None` for the whole file.

    max\_file\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 52428800[#](#scikitplot.corpus.LeanReader.max_file_bytes "Link to this definition")
    :   50 MB.

        Type:
        :   Larger files are refused. Default

    max\_scope\_depth: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 256[#](#scikitplot.corpus.LeanReader.max_scope_depth "Link to this definition")
    :   Most namespaces and sections open at once.

    max\_text\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.max_text_chars "Link to this definition")
    :   Most characters of text one input may yield, over all its chunks.

        The bound on what a small input can expand into (compressed or
        repeated content). `None` (the default here): no limit, for formats
        whose text cannot outgrow their input, already bounded by their size
        limit. Readers of amplifying formats (`OfficeReader`, `PDFReader`)
        default to 256 Mi characters. Counted as chunks stream, at the one
        place every chunk passes (`_iter_raw_chunks`), custom extractors
        included.

    max\_text\_chars\_per\_byte: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.max_text_chars_per_byte "Link to this definition")
    :   Most characters of text per byte of the input file.

        Keeps the output, and so the work of extracting it, in proportion to
        the input: with it, the limit is the smaller of [`max_text_chars`](#scikitplot.corpus.LeanReader.max_text_chars "scikitplot.corpus.LeanReader.max_text_chars")
        and `max(max_text_chars_per_byte x file size, 1 Mi)` characters (a
        small file may always yield 1 Mi). It covers compression, shared and
        repeated content alike. `None` (the default here): no ratio limit;
        `OfficeReader` and `PDFReader` default to 50 (ordinary documents
        yield under 10 characters per byte). Not applied when the input is not
        a file on disk.

    on\_text\_limit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'refuse'[#](#scikitplot.corpus.LeanReader.on_text_limit "Link to this definition")
    :   What happens past the text limit ([`max_text_chars`](#scikitplot.corpus.LeanReader.max_text_chars "scikitplot.corpus.LeanReader.max_text_chars"),
        [`max_text_chars_per_byte`](#scikitplot.corpus.LeanReader.max_text_chars_per_byte "scikitplot.corpus.LeanReader.max_text_chars_per_byte")): `"refuse"` (default) raises
        `ValueError`; `"truncate"` keeps exactly the first
        `max_text_chars` characters, marks the chunk it cuts
        `text_truncated=True` (none when the limit falls between chunks) and
        logs a warning either way.

    proofs: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'keep'[#](#scikitplot.corpus.LeanReader.proofs "Link to this definition")
    :   `"keep"` every line, or `"drop"` the proofs of theorems.

    source\_provenance: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_readers/_lean.py#L1331)[#](#scikitplot.corpus.LeanReader.source_provenance "Link to this definition")
    :   Provenance overrides propagated into every yielded `CorpusDocument`.

        Keys may include `"source_type"`, `"source_title"`,
        `"source_author"`, and `"collection_id"`.
        Populated by [`create`](#scikitplot.corpus.LeanReader.create "scikitplot.corpus.LeanReader.create") / [`from_url`](#scikitplot.corpus.LeanReader.from_url "scikitplot.corpus.LeanReader.from_url") from their keyword
        arguments.

    source\_uri: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LeanReader.source_uri "Link to this definition")
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

    classmethod subclass\_by\_type()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L1991)[#](#scikitplot.corpus.LeanReader.subclass_by_type "Link to this definition")
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

    classmethod supported\_types()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L1973)[#](#scikitplot.corpus.LeanReader.supported_types "Link to this definition")
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

    validate\_input()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_base.py#L1296)[#](#scikitplot.corpus.LeanReader.validate_input "Link to this definition")
    :   Assert that the input file exists and is readable.

        Raises:
        :   ValueError
            :   If `input_path` does not exist or is not a regular file.

        Return type:
        :   None

        Notes

        Called automatically by [`get_documents`](#scikitplot.corpus.LeanReader.get_documents "scikitplot.corpus.LeanReader.get_documents") before iterating.
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

    watch: [Collection](https://docs.python.org/3/library/typing.html#typing.Collection "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = ()[#](#scikitplot.corpus.LeanReader.watch "Link to this definition")
    :   Identifiers to locate; each chunk lists those it uses in `watched`.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_lean_reader_script_thumb.png)

[Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development](../../auto_examples/corpus/plot_corpus_lean_reader_script.html)

Read Lean Proofs with LeanReader: Tracing Every Line of a Formal Development