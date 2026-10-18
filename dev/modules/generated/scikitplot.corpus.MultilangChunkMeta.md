# MultilangChunkMeta[#](#multilangchunkmeta "Link to this heading")

class scikitplot.corpus.MultilangChunkMeta(**script=None**, **script\_direction=None**, **is\_mixed\_script=None**, **chunking\_unit=None**, **grapheme\_count=None**, **codepoint\_count=None**, **semantemes=None**, **semanteme\_count=None**, **morphemes=None**, **script\_spans=None**, **script\_model\_version=None**, **preprocessing\_trace=None**, **raw\_text=None**, **embedding=None**, **language\_hint=None**, **model\_name=None**, **chunking\_duration\_ms=None**, **preprocessing\_duration\_ms=None**, **layer2\_strategy=None**, **pipeline\_id=None**, **created\_at\_utc=None**, **char\_offset\_start=None**, **char\_offset\_end=None**, **token\_count=None**, **stopword\_count=None**, **unique\_token\_count=None**, **char\_count=None**, **avg\_token\_length=None**, **is\_rtl=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L1523)[#](#scikitplot.corpus.MultilangChunkMeta "Link to this definition")
:   Per-chunk multilang analysis bundle — stored in `chunk.metadata`.

    Collects all Layer 0-3 artefacts for a single chunk in one place
    so downstream consumers have a uniform access pattern regardless of
    which chunker produced the chunk.

    Parameters:
    :   ****script****str or None
        :   Dominant [`ScriptType`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType") value
            string for this chunk.

        ****script\_direction****str or None
        :   Writing direction: `"ltr"`, `"rtl"`, `"ttb"`.

        ****is\_mixed\_script****bool or None
        :   `True` if the chunk contains codepoints from more than one script.

        ****chunking\_unit****str or None
        :   Granularity: `"word"`, `"sentence"`, `"paragraph"`,
            `"fixed_window"`, `"grapheme_cluster"`, `"semanteme"`.

        ****grapheme\_count****int or None
        :   UAX #29 grapheme cluster count for `chunk.text`.

        ****codepoint\_count****int or None
        :   `len(chunk.text)` — stored explicitly for comparison.

        ****semantemes****list[SemantemeInfo] or None
        :   Per-semanteme analysis list. `None` when semantic analysis
            was not applied.

        ****semanteme\_count****int or None
        :   `len(semantemes)` pre-computed for fast access.

        ****morphemes****list[str] or None
        :   Flat morpheme surface list (deduplicated from `semantemes`).

        ****script\_spans****list[dict] or None
        :   [`ScriptSpan`](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan") dicts for
            mixed-script chunks.

        ****script\_model\_version****str or None
        :   Embedding model version used, format `"name@version"`.

        ****preprocessing\_trace****PreprocessingTrace or None
        :   Full audit trail of preprocessing steps. `None` when
            `include_preprocessing_trace=False`.

        ****raw\_text****str or None
        :   Original pre-processing text for this chunk’s span.
            `None` when `include_raw_text=False`.

        ****embedding****list[float] or None
        :   Dense chunk-level embedding vector. `None` until an embedder
            is applied. Use [`with_embedding`](#scikitplot.corpus.MultilangChunkMeta.with_embedding "scikitplot.corpus.MultilangChunkMeta.with_embedding") to attach one.

        ****language\_hint****str or None
        :   ISO 639-1 / BCP-47 detected language code.

        ****model\_name****str or None
        :   Name of the embedding model (e.g.
            `"paraphrase-multilingual-mpnet-base-v2"`).

    Parameters:
    :   * ****script**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****script\_direction**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****is\_mixed\_script**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****chunking\_unit**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****grapheme\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****codepoint\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****semantemes**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**SemantemeInfo**](scikitplot.corpus.SemantemeInfo.html#scikitplot.corpus.SemantemeInfo "scikitplot.corpus._types.SemantemeInfo")**]** **|** **None**)
        * ****semanteme\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****morphemes**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****script\_spans**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]** **|** **None**)
        * ****script\_model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****preprocessing\_trace**** ([**PreprocessingTrace**](scikitplot.corpus.PreprocessingTrace.html#scikitplot.corpus.PreprocessingTrace "scikitplot.corpus._types.PreprocessingTrace") **|** **None**)
        * ****raw\_text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****embedding**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)
        * ****language\_hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****chunking\_duration\_ms**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****preprocessing\_duration\_ms**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****layer2\_strategy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****pipeline\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****created\_at\_utc**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****char\_offset\_start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****char\_offset\_end**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****token\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****stopword\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****unique\_token\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****char\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****avg\_token\_length**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****is\_rtl**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    Notes

    ****User note:**** Access via `chunk.metadata.get("multilang")` — it is
    stored as a dict (via [`to_dict`](#scikitplot.corpus.MultilangChunkMeta.to_dict "scikitplot.corpus.MultilangChunkMeta.to_dict")). If you need to attach an
    embedding later, call [`with_embedding`](#scikitplot.corpus.MultilangChunkMeta.with_embedding "scikitplot.corpus.MultilangChunkMeta.with_embedding") which returns a new
    frozen instance without mutating the original.

    ****Developer note:**** All chunkers populate this via
    `_build_multilang_meta`.
    The mixin’s `_build_multilang_meta` is the single authority for
    constructing these objects — do not construct them inline in chunker code.

    avg\_token\_length: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.avg_token_length "Link to this definition")
    :   Average token length in grapheme clusters.

    char\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.char_count "Link to this definition")
    :   Character count of `chunk.text` (`len(chunk.text)`).

    char\_offset\_end: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.char_offset_end "Link to this definition")
    :   End character offset of this chunk in the **raw** (pre-NFC) text.

    char\_offset\_start: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.char_offset_start "Link to this definition")
    :   Start character offset of this chunk in the **raw** (pre-NFC) text.
        Allows exact re-location of the original source span for comparison.

    chunking\_duration\_ms: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.chunking_duration_ms "Link to this definition")
    :   Wall-clock time in milliseconds to produce this chunk. Populated by
        the chunker’s `MultilangMixin._ml_build_meta`.

    chunking\_unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.chunking_unit "Link to this definition")

    codepoint\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.codepoint_count "Link to this definition")

    created\_at\_utc: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.created_at_utc "Link to this definition")
    :   ISO-8601 UTC timestamp of when this chunk was produced,
        format `YYYY-MM-DDTHH:MM:SS.ffffffZ`. `None` when not tracked.

    embedding: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.embedding "Link to this definition")

    grapheme\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.grapheme_count "Link to this definition")

    is\_mixed\_script: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.is_mixed_script "Link to this definition")

    is\_rtl: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.is_rtl "Link to this definition")
    :   `True` when `script_direction == "rtl"`; precomputed for fast
        dataframe filtering.

    language\_hint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.language_hint "Link to this definition")

    layer2\_strategy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.layer2_strategy "Link to this definition")
    :   Name of the Layer 2 [`SegmentationStrategy`](scikitplot.corpus.SegmentationStrategy.html#scikitplot.corpus.SegmentationStrategy "scikitplot.corpus._chunkers._writing_system.SegmentationStrategy")
        class that produced this chunk (e.g. `"JapaneseStrategy"`,
        `"ArabicMorphologicalStrategy"`, `"GraphemeClusterStrategy"`).

    model\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.model_name "Link to this definition")

    morphemes: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.morphemes "Link to this definition")

    pipeline\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.pipeline_id "Link to this definition")
    :   Optional pipeline run identifier injected by the caller for
        correlation across large batch runs.

    preprocessing\_duration\_ms: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.preprocessing_duration_ms "Link to this definition")
    :   Wall-clock time in milliseconds for all preprocessing steps combined
        (BOM strip + control strip + NFC normalisation).

    preprocessing\_trace: [PreprocessingTrace](scikitplot.corpus.PreprocessingTrace.html#scikitplot.corpus.PreprocessingTrace "scikitplot.corpus._types.PreprocessingTrace") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.preprocessing_trace "Link to this definition")

    raw\_text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.raw_text "Link to this definition")

    script: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.script "Link to this definition")

    script\_direction: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.script_direction "Link to this definition")

    script\_model\_version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.script_model_version "Link to this definition")

    script\_spans: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.script_spans "Link to this definition")

    semanteme\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.semanteme_count "Link to this definition")

    semantemes: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[SemantemeInfo](scikitplot.corpus.SemantemeInfo.html#scikitplot.corpus.SemantemeInfo "scikitplot.corpus._types.SemantemeInfo")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.semantemes "Link to this definition")

    stopword\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.stopword_count "Link to this definition")
    :   Number of stopwords among the tokens (if stopword analysis was run).

    to\_dict(**\***, **include\_raw\_text=False**, **include\_preprocessing\_trace=False**, **include\_embedding=False**, **include\_semanteme\_detail=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L1703)[#](#scikitplot.corpus.MultilangChunkMeta.to_dict "Link to this definition")
    :   Serialise to a JSON-safe dict for `chunk.metadata["multilang"]`.

        Parameters:
        :   ****include\_raw\_text****bool
            :   Include `raw_text` in output. Default `False`.

            ****include\_preprocessing\_trace****bool
            :   Include the full preprocessing trace. Default `False`.

            ****include\_embedding****bool
            :   Include the dense embedding vector. Default `False`.

            ****include\_semanteme\_detail****bool
            :   Include full `semantemes` list. Default `True`.
                Set to `False` to include only `semanteme_count`.

        Returns:
        :   MetadataDict
            :   All non-None fields populated per the flag settings.

        Parameters:
        :   * ****include\_raw\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****include\_preprocessing\_trace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****include\_embedding**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****include\_semanteme\_detail**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    token\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.token_count "Link to this definition")
    :   Number of whitespace tokens in `chunk.text` after normalisation.

    unique\_token\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.MultilangChunkMeta.unique_token_count "Link to this definition")
    :   Number of unique tokens (type count, not token count).

    with\_embedding(**vector**, **\***, **model\_name=None**, **model\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_types.py#L1659)[#](#scikitplot.corpus.MultilangChunkMeta.with_embedding "Link to this definition")
    :   Return a copy with an embedding vector and optional model metadata.

        Parameters:
        :   ****vector****list[float]
            :   Dense embedding produced by any encoder.

            ****model\_name****str, optional
            :   Name of the model used (e.g.
                `"paraphrase-multilingual-mpnet-base-v2"`).

            ****model\_version****str, optional
            :   Model version string (e.g. `"1.2.0"`).

        Returns:
        :   MultilangChunkMeta
            :   New frozen instance.

        Parameters:
        :   * ****vector**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
            * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
            * ****model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**MultilangChunkMeta**](#scikitplot.corpus.MultilangChunkMeta "scikitplot.corpus._types.MultilangChunkMeta")

        Notes

        CRITICAL-04 fix: uses `dataclasses.replace` so all fields not
        explicitly named here are propagated automatically. Any new fields
        added to [`MultilangChunkMeta`](#scikitplot.corpus.MultilangChunkMeta "scikitplot.corpus.MultilangChunkMeta") will never be silently dropped.