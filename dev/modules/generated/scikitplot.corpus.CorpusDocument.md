# CorpusDocument[#](#corpusdocument "Link to this heading")

class scikitplot.corpus.CorpusDocument(**doc\_id**, **input\_path**, **chunk\_index**, **text**, **section\_type=SectionType.TEXT**, **chunking\_strategy=ChunkingStrategy.SENTENCE**, **language=None**, **char\_start=None**, **char\_end=None**, **embedding=None**, **modality=<factory>**, **raw\_bytes=None**, **raw\_tensor=None**, **raw\_shape=None**, **raw\_dtype=None**, **frame\_index=None**, **content\_hash=None**, **metadata=<factory>**, **source\_type=SourceType.UNKNOWN**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **url=None**, **doi=None**, **isbn=None**, **page\_number=None**, **paragraph\_index=None**, **line\_number=None**, **parent\_doc\_id=None**, **act=None**, **scene\_number=None**, **timecode\_start=None**, **timecode\_end=None**, **confidence=None**, **ocr\_engine=None**, **bbox=None**, **normalized\_text=None**, **tokens=None**, **lemmas=None**, **stems=None**, **keywords=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L900)[#](#scikitplot.corpus.CorpusDocument "Link to this definition")
:   Canonical representation of a single text chunk in a processed corpus.

    A `CorpusDocument` is the unit of data that flows between every stage of
    the pipeline: readers produce them, chunkers subdivide them, filters
    accept or reject them, embedders enrich them, and exporters serialise them.

    Parameters:
    :   ****doc\_id****str
        :   Stable 16-character hex identifier. Generated deterministically from
            `(source_type, input_path, chunk_index, text[:64])` via
            [`make_doc_id`](#scikitplot.corpus.CorpusDocument.make_doc_id "scikitplot.corpus.CorpusDocument.make_doc_id") if not supplied. Must be non-empty.

        ****input\_path****str
        :   Name or relative path of the original source file. Must be non-empty.
            Set from `input_path.name` by readers; do ****not**** include absolute
            paths to keep corpora portable across machines.

        ****chunk\_index****int
        :   Zero-based ordinal of this chunk within the source document. Must be
            >= 0. Unique per `(input_path, chunking_strategy)` pair.

        ****text****str
        :   Cleaned, segmented text content of this chunk. Must be non-empty after
            stripping whitespace.

        ****section\_type****SectionType, optional
        :   Semantic role of this chunk within its source document. Default:
            `SectionType.TEXT`.

        ****chunking\_strategy****ChunkingStrategy, optional
        :   Strategy used to produce this chunk. Default:
            `ChunkingStrategy.SENTENCE`.

        ****language****str or None, optional
        :   ISO 639-1 language code. Default: `None`.

        ****char\_start****int or None, optional
        :   Character offset of chunk start within the original document. Default:
            `None`.

        ****char\_end****int or None, optional
        :   Character offset of chunk end (exclusive). Default: `None`.

        ****embedding****array-like or None, optional
        :   Dense vector representation of `text`. Stored as `Any` at runtime;
            the `.pyi` stub provides `NDArray[float32]` for type checkers.
            Default: `None`.

        ****metadata****dict, optional
        :   Open-ended key-value store for truly ad-hoc or format-specific fields
            (ISBN edition, translator, speaker, etc.). All keys must be strings.
            Default: empty dict.

        ****source\_type****SourceType, optional
        :   Kind of source (BOOK, MOVIE, RESEARCH, WIKI, …). Used as a typed
            pre-filter column. Default: `SourceType.UNKNOWN`.

        ****source\_title****str or None, optional
        :   Title of the source work. Default: `None`.

        ****source\_author****str or None, optional
        :   Primary author. Default: `None`.

        ****source\_date****str or None, optional
        :   Publication date in ISO 8601 format. Default: `None`.

        ****collection\_id****str or None, optional
        :   Identifier grouping related sources into one corpus. Default: `None`.

        ****url****str or None, optional
        :   Source URL for web-fetched documents. Default: `None`.

        ****doi****str or None, optional
        :   Digital Object Identifier. Default: `None`.

        ****isbn****str or None, optional
        :   International Standard Book Number. Default: `None`.

        ****page\_number****int or None, optional
        :   Zero-based page index. Default: `None`.

        ****paragraph\_index****int or None, optional
        :   Zero-based paragraph index within the page or document. Default:
            `None`.

        ****line\_number****int or None, optional
        :   Zero-based line number. Default: `None`.

        ****parent\_doc\_id****str or None, optional
        :   doc\_id of the parent chunk when this is a sub-division. Default:
            `None`.

        ****act****int or None, optional
        :   Act number (one-based) in a dramatic source. Default: `None`.

        ****scene\_number****int or None, optional
        :   Scene number (one-based) within an act. Default: `None`.

        ****timecode\_start****float or None, optional
        :   Start timecode in seconds (>= 0). Default: `None`.

        ****timecode\_end****float or None, optional
        :   End timecode in seconds (>= timecode\_start). Default: `None`.

        ****confidence****float or None, optional
        :   OCR or ASR confidence in [0.0, 1.0]. Default: `None`.

        ****ocr\_engine****str or None, optional
        :   Name of the OCR engine used. Default: `None`.

        ****bbox****tuple of float or None, optional
        :   Bounding box (x0, y0, x1, y1). Must be a 4-tuple of floats. Default:
            `None`.

        ****normalized\_text****str or None, optional
        :   Normalised text used by the embedding engine. Default: `None`.

        ****tokens****list of str or None, optional
        :   Tokenised word list (not included in repr or equality). Default:
            `None`.

        ****lemmas****list of str or None, optional
        :   Lemmatised tokens (not included in repr or equality). Default: `None`.

        ****stems****list of str or None, optional
        :   Stemmed tokens (not included in repr or equality). Default: `None`.

        ****keywords****list of str or None, optional
        :   Extracted keyphrases (not included in repr or equality). Default:
            `None`.

    Attributes:
    :   ****REQUIRED\_FIELDS****tuple of str
        :   Class-level tuple of field names that must be non-empty/non-negative
            for [`validate`](#scikitplot.corpus.CorpusDocument.validate "scikitplot.corpus.CorpusDocument.validate") to pass.

    Raises:
    :   ValueError
        :   If [`validate`](#scikitplot.corpus.CorpusDocument.validate "scikitplot.corpus.CorpusDocument.validate") is called and any invariant is violated.

    Parameters:
    :   * ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****chunk\_index**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****section\_type**** ([**SectionType**](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType"))
        * ****chunking\_strategy**** ([**ChunkingStrategy**](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy"))
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****char\_start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****char\_end**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)
        * ****modality**** ([**Modality**](scikitplot.corpus.Modality.html#scikitplot.corpus.Modality "scikitplot.corpus._schema.Modality"))
        * ****raw\_bytes**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** **None**)
        * ****raw\_tensor**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****raw\_shape**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** **...****]** **|** **None**)
        * ****raw\_dtype**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****frame\_index**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****content\_hash**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType"))
        * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_date**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****doi**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****isbn**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****page\_number**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****paragraph\_index**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****line\_number**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****parent\_doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****act**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****scene\_number**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****timecode\_start**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****timecode\_end**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****confidence**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
        * ****ocr\_engine**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****bbox**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**,** **...****]** **|** **None**)
        * ****normalized\_text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****tokens**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****lemmas**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****stems**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****keywords**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    > **See also**
    > [`scikitplot.corpus._base.DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader")
    :   Produces CorpusDocuments.

    [`scikitplot.corpus._pipeline.CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline")
    :   Orchestrates the full flow.

    Notes

    ****Immutability convention:**** `CorpusDocument` is a mutable dataclass for
    performance, but pipeline stages must not mutate documents in-place after
    yielding them. Use [`replace`](#scikitplot.corpus.CorpusDocument.replace "scikitplot.corpus.CorpusDocument.replace") to create modified copies.

    ****Embedding storage:**** When exporting to CSV or JSON, the embedding array
    is serialised as a flat list of floats. When exporting to Parquet or
    HuggingFace format, the array is stored natively.

    ****NLP list fields**** (`tokens`, `lemmas`, `stems`, `keywords`) are
    excluded from `__repr__` and equality comparisons because they are large
    derived views of `text`.

    Examples

    Try it in your browser!

    Creating from factory with auto-generated id:

    ```
    >>> doc = CorpusDocument.create(
    ...     input_path="corpus.xml",
    ...     chunk_index=3,
    ...     text="Das Kapital ist ein Werk von Marx.",
    ...     source_type=SourceType.BOOK,
    ...     source_author="Marx, Karl",
    ...     source_title="Das Kapital",
    ...     language="de",
    ...     page_number=42,
    ... )
    >>> len(doc.doc_id)
    16

    ```

    Round-tripping to dict and back:

    ```
    >>> d = doc.to_dict()
    >>> restored = CorpusDocument.from_dict(d)
    >>> restored.doc_id == doc.doc_id
    True

    ```
    Go BackOpen In Tab

    REQUIRED\_FIELDS: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), ...]] = ('doc\_id', 'input\_path')[#](#scikitplot.corpus.CorpusDocument.REQUIRED_FIELDS "Link to this definition")
    :   Fields that must be non-empty strings for [`validate`](#scikitplot.corpus.CorpusDocument.validate "scikitplot.corpus.CorpusDocument.validate") to pass.

        Notes

        `text` is intentionally excluded from this tuple. For TEXT-modality
        documents, `validate()` enforces non-empty text directly. For
        raw-media documents (`modality` is IMAGE, AUDIO, or VIDEO), `text`
        may legitimately be `None` — the document carries its content in
        `raw_tensor` or `raw_bytes` instead.

    act: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.act "Link to this definition")
    :   Act number (one-based) in a dramatic source.

    bbox: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"), ...] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.bbox "Link to this definition")
    :   Bounding box (x0, y0, x1, y1) of the text region.

    property char\_count: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.CorpusDocument.char_count "Link to this definition")
    :   Length of [`text`](#scikitplot.corpus.CorpusDocument.text "scikitplot.corpus.CorpusDocument.text") in characters.

        Returns:
        :   int
            :   Character count.

    char\_end: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.char_end "Link to this definition")
    :   Character offset of chunk end (exclusive) in source, or `None`.

    char\_start: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.char_start "Link to this definition")
    :   Character offset of chunk start in source, or `None`.

    chunk\_index: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L900)[#](#scikitplot.corpus.CorpusDocument.chunk_index "Link to this definition")
    :   Zero-based position of this chunk within the source document.

    chunking\_strategy: [ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy") = 'sentence'[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.CorpusDocument.chunking_strategy "Link to this definition")
    :   Strategy used to produce this chunk.

    collection\_id: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.collection_id "Link to this definition")
    :   Identifier grouping related sources into one corpus.

    confidence: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.confidence "Link to this definition")
    :   OCR or ASR confidence score in [0.0, 1.0].

    content\_hash: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.content_hash "Link to this definition")
    :   SHA-256 hex digest (32 chars) of canonical content. Dedup key.

    classmethod create(**input\_path**, **chunk\_index**, **text**, **section\_type=SectionType.TEXT**, **chunking\_strategy=ChunkingStrategy.SENTENCE**, **language=None**, **char\_start=None**, **char\_end=None**, **embedding=None**, **metadata=None**, **doc\_id=None**, **source\_type=SourceType.UNKNOWN**, **source\_title=None**, **source\_author=None**, **source\_date=None**, **collection\_id=None**, **url=None**, **doi=None**, **isbn=None**, **page\_number=None**, **paragraph\_index=None**, **line\_number=None**, **parent\_doc\_id=None**, **act=None**, **scene\_number=None**, **timecode\_start=None**, **timecode\_end=None**, **confidence=None**, **ocr\_engine=None**, **bbox=None**, **normalized\_text=None**, **tokens=None**, **lemmas=None**, **stems=None**, **keywords=None**, **modality=None**, **raw\_bytes=None**, **raw\_tensor=None**, **raw\_shape=None**, **raw\_dtype=None**, **frame\_index=None**, **content\_hash=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L1605)[#](#scikitplot.corpus.CorpusDocument.create "Link to this definition")
    :   Validate factory constructor for [`CorpusDocument`](#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument").

        Preferred over direct dataclass instantiation because it
        auto-generates `doc_id` when not supplied and calls
        [`validate`](#scikitplot.corpus.CorpusDocument.validate "scikitplot.corpus.CorpusDocument.validate") before returning.

        Parameters:
        :   ****input\_path****str
            :   Name of the source file.

            ****chunk\_index****int
            :   Zero-based chunk position.

            ****text****str
            :   Text content of the chunk.

            ****section\_type****SectionType, optional
            :   Semantic section label. Default: `SectionType.TEXT`.

            ****chunking\_strategy****ChunkingStrategy, optional
            :   Segmentation strategy used. Default: `ChunkingStrategy.SENTENCE`.

            ****language****str or None, optional
            :   ISO 639-1 language code. Default: `None`.

            ****char\_start****int or None, optional
            :   Character start offset. Default: `None`.

            ****char\_end****int or None, optional
            :   Character end offset (exclusive). Default: `None`.

            ****embedding****array-like or None, optional
            :   Pre-computed embedding vector. Default: `None`.

            ****metadata****dict or None, optional
            :   Ad-hoc metadata. `None` is treated as empty dict. Default:
                `None`.

            ****doc\_id****str or None, optional
            :   Explicit document id. Auto-generated if `None`. Default: `None`.

            ****source\_type****SourceType, optional
            :   Kind of source. Default: `SourceType.UNKNOWN`.

            ****source\_title****str or None, optional
            :   Title of the source work. Default: `None`.

            ****source\_author****str or None, optional
            :   Primary author. Default: `None`.

            ****source\_date****str or None, optional
            :   Publication date (ISO 8601). Default: `None`.

            ****collection\_id****str or None, optional
            :   Corpus collection identifier. Default: `None`.

            ****url****str or None, optional
            :   Source URL. Default: `None`.

            ****doi****str or None, optional
            :   Digital Object Identifier. Default: `None`.

            ****isbn****str or None, optional
            :   International Standard Book Number. Default: `None`.

            ****page\_number****int or None, optional
            :   Zero-based page index. Default: `None`.

            ****paragraph\_index****int or None, optional
            :   Zero-based paragraph index. Default: `None`.

            ****line\_number****int or None, optional
            :   Zero-based line number. Default: `None`.

            ****parent\_doc\_id****str or None, optional
            :   doc\_id of parent chunk. Default: `None`.

            ****act****int or None, optional
            :   Act number (one-based). Default: `None`.

            ****scene\_number****int or None, optional
            :   Scene number (one-based). Default: `None`.

            ****timecode\_start****float or None, optional
            :   Start timecode in seconds (>= 0). Default: `None`.

            ****timecode\_end****float or None, optional
            :   End timecode in seconds. Default: `None`.

            ****confidence****float or None, optional
            :   OCR/ASR confidence in [0.0, 1.0]. Default: `None`.

            ****ocr\_engine****str or None, optional
            :   OCR engine name. Default: `None`.

            ****bbox****tuple of float or None, optional
            :   Bounding box (x0, y0, x1, y1). Default: `None`.

            ****normalized\_text****str or None, optional
            :   Pre-normalised text. Default: `None`.

            ****tokens****list of str or None, optional
            :   Tokenised words. Default: `None`.

            ****lemmas****list of str or None, optional
            :   Lemmatised tokens. Default: `None`.

            ****stems****list of str or None, optional
            :   Stemmed tokens. Default: `None`.

            ****keywords****list of str or None, optional
            :   Extracted keyphrases. Default: `None`.

        Returns:
        :   CorpusDocument
            :   Validated document instance.

        Raises:
        :   ValueError
            :   If any invariant from [`validate`](#scikitplot.corpus.CorpusDocument.validate "scikitplot.corpus.CorpusDocument.validate") is violated.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****chunk\_index**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****section\_type**** ([**SectionType**](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType"))
            * ****chunking\_strategy**** ([**ChunkingStrategy**](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus._schema.ChunkingStrategy"))
            * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****char\_start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****char\_end**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****embedding**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)
            * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
            * ****doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType"))
            * ****source\_title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****source\_date**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****doi**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****isbn**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****page\_number**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****paragraph\_index**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****line\_number**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****parent\_doc\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****act**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****scene\_number**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****timecode\_start**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
            * ****timecode\_end**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
            * ****confidence**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") **|** **None**)
            * ****ocr\_engine**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****bbox**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**,** **...****]** **|** **None**)
            * ****normalized\_text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****tokens**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****lemmas**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****stems**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****keywords**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****modality**** ([**Modality**](scikitplot.corpus.Modality.html#scikitplot.corpus.Modality "scikitplot.corpus._schema.Modality") **|** **None**)
            * ****raw\_bytes**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** **None**)
            * ****raw\_tensor**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****raw\_shape**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** **...****]** **|** **None**)
            * ****raw\_dtype**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****frame\_index**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****content\_hash**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**CorpusDocument**](#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")

        Examples

        Try it in your browser!
        ```
        >>> doc = CorpusDocument.create(
        ...     input_path="corpus.txt",
        ...     chunk_index=0,
        ...     text="Hello world.",
        ...     source_type=SourceType.BOOK,
        ...     language="en",
        ... )
        >>> doc.validate()
        >>> doc.has_embedding
        False

        ```
        Go BackOpen In Tab

    doc\_id: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L900)[#](#scikitplot.corpus.CorpusDocument.doc_id "Link to this definition")
    :   Stable 16-character hex identifier for this chunk.

    doi: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.doi "Link to this definition")
    :   Digital Object Identifier of the source.

    embedding: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.embedding "Link to this definition")
    :   Dense vector embedding, or `None` if not yet computed.

    frame\_index: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.frame_index "Link to this definition")
    :   `None`.

        Type:
        :   Zero-based frame index in a video or multi-frame image. Default

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L2104)[#](#scikitplot.corpus.CorpusDocument.from_dict "Link to this definition")
    :   Reconstruct a [`CorpusDocument`](#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") from a plain dictionary.

        Parameters:
        :   ****data****dict
            :   Dictionary as returned by [`to_dict`](#scikitplot.corpus.CorpusDocument.to_dict "scikitplot.corpus.CorpusDocument.to_dict"). Enum fields are
                coerced from string values. `bbox` is restored from list to
                tuple. `metadata` defaults to empty dict if absent.

        Returns:
        :   CorpusDocument
            :   Validated reconstructed document.

        Raises:
        :   ValueError
            :   If required fields are missing or values are invalid.

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> doc = CorpusDocument.create("f.txt", 0, "Hello.")
        >>> d = doc.to_dict()
        >>> restored = CorpusDocument.from_dict(d)
        >>> restored.doc_id == doc.doc_id
        True

        ```
        Go BackOpen In Tab

    property has\_embedding: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.CorpusDocument.has_embedding "Link to this definition")
    :   Return `True` if an embedding has been attached to this document.

        Returns:
        :   bool
            :   `True` when `embedding` is not `None`.

        Examples

        Try it in your browser!
        ```
        >>> doc = CorpusDocument.create("f.txt", 0, "Hello.")
        >>> doc.has_embedding
        False

        ```
        Go BackOpen In Tab

    input\_path: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L900)[#](#scikitplot.corpus.CorpusDocument.input_path "Link to this definition")
    :   Name of the original source file (not an absolute path).

    isbn: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.isbn "Link to this definition")
    :   International Standard Book Number of the source.

    keywords: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.keywords "Link to this definition")
    :   Extracted keyphrases for topic-level matching.

    language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.language "Link to this definition")
    :   ISO 639-1 language code, or `None` if unknown.

    lemmas: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.lemmas "Link to this definition")
    :   Lemmatised token list.

    line\_number: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.line_number "Link to this definition")
    :   Zero-based line number within the document.

    static make\_content\_hash(**text=None**, **raw\_bytes=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L1571)[#](#scikitplot.corpus.CorpusDocument.make_content_hash "Link to this definition")
    :   Compute a 32-char SHA-256 hex digest for deduplication.

        Parameters:
        :   ****text****str or None
            :   Text content. Used when `raw_bytes` is `None`.

            ****raw\_bytes****bytes or None
            :   Raw media bytes. Preferred over `text` when set.

        Returns:
        :   str
            :   32-character hex SHA-256 prefix.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****raw\_bytes**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        Notes

        Empty / `None` inputs return a fixed sentinel value
        `"0" * 32` (32 zeros) to ensure `content_hash` is always
        populated and the dedup logic is deterministic.

    classmethod make\_doc\_id(**input\_path**, **chunk\_index**, **text**, **source\_type=SourceType.UNKNOWN**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L1508)[#](#scikitplot.corpus.CorpusDocument.make_doc_id "Link to this definition")
    :   Compute a deterministic 16-character hex document identifier.

        The id is a SHA-1 prefix of
        `"{source_type}:{input_path}:{chunk_index}:{text[:64]}"`.
        Identical inputs always produce the same id.

        Parameters:
        :   ****input\_path****str
            :   Name of the source file (not a full path).

            ****chunk\_index****int
            :   Zero-based chunk position within the document.

            ****text****str
            :   Raw text content of the chunk (only the first 64 characters
                are used to keep hashing fast).

            ****source\_type****SourceType, optional
            :   Source kind. Including this in the hash preimage prevents
                collisions when a BOOK chapter and a MOVIE subtitle share the
                same filename, chunk index, and opening text (Issue S-7).
                Default: `SourceType.UNKNOWN`.

        Returns:
        :   str
            :   16-character lowercase hexadecimal string.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****chunk\_index**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****source\_type**** ([**SourceType**](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        Notes

        Adding `source_type` to the hash preimage is a one-time breaking
        change for corpora built before this version. Existing corpora must
        be re-indexed when upgrading.

        Examples

        Try it in your browser!
        ```
        >>> CorpusDocument.make_doc_id("file.txt", 0, "Hello world.")
        '...'  # deterministic 16-char hex
        >>> (
        ...     CorpusDocument.make_doc_id("f.txt", 0, "Hi", SourceType.BOOK)
        ...     != CorpusDocument.make_doc_id("f.txt", 0, "Hi", SourceType.MOVIE)
        ... )
        True

        ```
        Go BackOpen In Tab

    metadata: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L900)[#](#scikitplot.corpus.CorpusDocument.metadata "Link to this definition")
    :   Truly ad-hoc format-specific metadata.

    modality: [Modality](scikitplot.corpus.Modality.html#scikitplot.corpus.Modality "scikitplot.corpus._schema.Modality")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L900)[#](#scikitplot.corpus.CorpusDocument.modality "Link to this definition")
    :   [`Modality.TEXT`](scikitplot.corpus.Modality.html#scikitplot.corpus.Modality.TEXT "scikitplot.corpus.Modality.TEXT").

        Type:
        :   Primary content modality. Default

    normalized\_text: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.normalized_text "Link to this definition")
    :   Normalised text used by the embedding engine.

    ocr\_engine: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.ocr_engine "Link to this definition")
    :   Name of the OCR engine used.

    page\_number: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.page_number "Link to this definition")
    :   Zero-based page index within the source document.

    paragraph\_index: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.paragraph_index "Link to this definition")
    :   Zero-based paragraph index within the page or document.

    parent\_doc\_id: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.parent_doc_id "Link to this definition")
    :   doc\_id of the parent chunk when this is a sub-division.

    raw\_bytes: [bytes](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.raw_bytes "Link to this definition")
    :   Raw encoded media bytes (e.g. JPEG bytes). `None` for text-only.

    raw\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.raw_dtype "Link to this definition")
    :   `None`.

        Type:
        :   String dtype of `raw_tensor` (e.g. `"uint8"`). Default

    raw\_shape: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), ...] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.raw_shape "Link to this definition")
    :   `None`.

        Type:
        :   Shape of `raw_tensor` as a plain Python tuple. Default

    raw\_tensor: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.raw_tensor "Link to this definition")
    :   Decoded media array ready for model input. Shape conventions:
        image `(H,W,C)` uint8; audio `(samples,)` float32;
        video `(T,H,W,C)` uint8. `None` for text-only.

    replace(**\*\*changes**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L1843)[#](#scikitplot.corpus.CorpusDocument.replace "Link to this definition")
    :   Return a new [`CorpusDocument`](#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") with the specified fields
        replaced.

        Parameters:
        :   ****\*\*changes****Any
            :   Field names and new values. Only fields defined on
                [`CorpusDocument`](#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") are accepted.

        Returns:
        :   CorpusDocument
            :   New instance with changed fields; original is unchanged.

        Raises:
        :   ValueError
            :   If an unknown field name is given.

        Parameters:
        :   ****changes**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> import numpy as np
        >>> doc = CorpusDocument.create("f.txt", 0, "Hello.")
        >>> enriched = doc.replace(embedding=np.zeros(768, dtype=np.float32))
        >>> enriched.has_embedding
        True
        >>> doc.has_embedding  # original unchanged
        False

        ```
        Go BackOpen In Tab

    scene\_number: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.scene_number "Link to this definition")
    :   Scene number (one-based) within an act.

    section\_type: [SectionType](scikitplot.corpus.SectionType.html#scikitplot.corpus.SectionType "scikitplot.corpus._schema.SectionType") = 'text'[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.CorpusDocument.section_type "Link to this definition")
    :   Semantic role of this chunk.

    source\_author: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.source_author "Link to this definition")
    :   Primary author of the source.

    source\_date: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.source_date "Link to this definition")
    :   Publication or creation date in ISO 8601 format.

    source\_title: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.source_title "Link to this definition")
    :   Title of the source work.

    source\_type: [SourceType](scikitplot.corpus.SourceType.html#scikitplot.corpus.SourceType "scikitplot.corpus._schema.SourceType") = 'unknown'[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.CorpusDocument.source_type "Link to this definition")
    :   Kind of source (BOOK, MOVIE, RESEARCH, WIKI, …).

    stems: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.stems "Link to this definition")
    :   Stemmed token list.

    text: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L900)[#](#scikitplot.corpus.CorpusDocument.text "Link to this definition")
    :   Cleaned, segmented text content.

    timecode\_end: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.timecode_end "Link to this definition")
    :   End timecode in seconds.

    timecode\_start: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.timecode_start "Link to this definition")
    :   Start timecode in seconds for subtitle / video / audio sources.

    to\_dict(**\***, **include\_embedding=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L1900)[#](#scikitplot.corpus.CorpusDocument.to_dict "Link to this definition")
    :   Serialise to a plain Python dictionary.

        Parameters:
        :   ****include\_embedding****bool, optional
            :   When `True`, include the `embedding` field serialised as a
                flat list of floats (if present). Default: `False` — embeddings
                are excluded to keep dicts JSON-safe by default.

        Returns:
        :   dict
            :   Shallow copy of all fields. Enum fields serialised as string
                values. `bbox` serialised as a list (JSON-compatible).
                `metadata` is a shallow copy.

        Parameters:
        :   ****include\_embedding**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Notes

        This method does ****not**** call [`validate`](#scikitplot.corpus.CorpusDocument.validate "scikitplot.corpus.CorpusDocument.validate") — it is designed to
        be fast and usable even on partially-constructed documents during
        debugging.

        Examples

        Try it in your browser!
        ```
        >>> doc = CorpusDocument.create("f.txt", 0, "Hello.")
        >>> d = doc.to_dict()
        >>> isinstance(d["section_type"], str)
        True
        >>> d["source_type"]
        'unknown'

        ```
        Go BackOpen In Tab

    to\_flat\_dict(**\***, **include\_embedding=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L2001)[#](#scikitplot.corpus.CorpusDocument.to_flat_dict "Link to this definition")
    :   Serialise to a flat dictionary with metadata fields promoted to the
        top level.

        Unlike [`to_dict`](#scikitplot.corpus.CorpusDocument.to_dict "scikitplot.corpus.CorpusDocument.to_dict"), the `metadata` sub-dict is merged into
        the top level. Core fields take precedence over metadata fields with
        the same key name.

        Parameters:
        :   ****include\_embedding****bool, optional
            :   When `True`, include `embedding` as a list of floats.
                Default: `False`.

        Returns:
        :   dict
            :   Flat dict suitable for a single row in a tabular export.

        Parameters:
        :   ****include\_embedding**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Notes

        Metadata key collisions with core fields are logged as warnings.

        Examples

        Try it in your browser!
        ```
        >>> doc = CorpusDocument.create(
        ...     "f.txt", 0, "Hello.", metadata={"custom_key": "v"}
        ... )
        >>> flat = doc.to_flat_dict()
        >>> flat["custom_key"]
        'v'

        ```
        Go BackOpen In Tab

    to\_pandas\_row(**\***, **include\_embedding=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L2045)[#](#scikitplot.corpus.CorpusDocument.to_pandas_row "Link to this definition")
    :   Return a dict formatted for a single row in a `pandas.DataFrame`.

        Parameters:
        :   ****include\_embedding****bool, optional
            :   When `True`, include the embedding as a numpy array (not a
                list), allowing `pandas` to store it as an object column.
                Default: `False`.

        Returns:
        :   dict
            :   Row dict with enums as strings. Embedding kept as-is when
                present and `include_embedding=True`.

        Parameters:
        :   ****include\_embedding**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Examples

        Try it in your browser!
        ```
        >>> import pandas as pd
        >>> doc = CorpusDocument.create("f.txt", 0, "Hello.")
        >>> row = doc.to_pandas_row()
        >>> pd.DataFrame([row])["text"][0]
        'Hello.'

        ```
        Go BackOpen In Tab

    to\_polars\_row(**\***, **include\_embedding=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L2075)[#](#scikitplot.corpus.CorpusDocument.to_polars_row "Link to this definition")
    :   Return a dict formatted for a single row in a `polars.DataFrame`.

        Parameters:
        :   ****include\_embedding****bool, optional
            :   When `True`, include the embedding as a list of floats (polars
                does not accept numpy arrays directly in dict-based construction).
                Default: `False`.

        Returns:
        :   dict
            :   Row dict. Embedding serialised as `list[float]` when present.

        Parameters:
        :   ****include\_embedding**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Examples

        Try it in your browser!
        ```
        >>> import polars as pl
        >>> doc = CorpusDocument.create("f.txt", 0, "Hello.")
        >>> pl.DataFrame([doc.to_polars_row()])["text"][0]
        'Hello.'

        ```
        Go BackOpen In Tab

    tokens: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.tokens "Link to this definition")
    :   Whitespace-tokenised word list for STRICT / KEYWORD matching.

    url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusDocument.url "Link to this definition")
    :   Source URL for web-fetched documents.

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_schema.py#L1287)[#](#scikitplot.corpus.CorpusDocument.validate "Link to this definition")
    :   Assert that all invariants hold. Raises on the first violation.

        Raises:
        :   ValueError
            :   With an actionable message identifying the violated invariant and
                the offending value.

        Warns:
        :   UserWarning
            :   When `doi` does not match the `10.XXXX/` prefix pattern.
                A warning (not a raise) is used because real-world DOIs are not
                always well-formed, and hard rejection would discard valid papers.

        Return type:
        :   None

        Notes

        Call `validate()` explicitly after constructing a document via the
        dataclass constructor. The [`create`](#scikitplot.corpus.CorpusDocument.create "scikitplot.corpus.CorpusDocument.create") factory calls it
        automatically.

        Examples

        Try it in your browser!
        ```
        >>> doc = CorpusDocument.create("f.txt", 0, "Hello world.")
        >>> doc.validate()  # no exception

        ```
        ```
        >>> bad = CorpusDocument(
        ...     doc_id="", input_path="f.txt", chunk_index=0, text="Hello."
        ... )
        >>> bad.validate()
        Traceback (most recent call last):
            ...
        ValueError: CorpusDocument.doc_id must be a non-empty string; got ''

        ```
        Go BackOpen In Tab

    property word\_count: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.CorpusDocument.word_count "Link to this definition")
    :   Number of whitespace-delimited tokens in [`text`](#scikitplot.corpus.CorpusDocument.text "scikitplot.corpus.CorpusDocument.text").

        Returns:
        :   int
            :   Token count; 0 for empty text.

        Examples

        Try it in your browser!
        ```
        >>> doc = CorpusDocument.create("f.txt", 0, "One two three.")
        >>> doc.word_count
        3

        ```
        Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples