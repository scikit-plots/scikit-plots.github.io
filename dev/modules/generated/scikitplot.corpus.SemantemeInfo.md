# SemantemeInfo[#](#semantemeinfo "Link to this heading")

class scikitplot.corpus.SemantemeInfo(**surface**, **script=None**, **direction=None**, **morphemes=None**, **lemma=None**, **pos\_tag=None**, **stem=None**, **grapheme\_count=None**, **codepoint\_count=None**, **is\_stopword=None**, **language\_hint=None**, **determinative=None**, **raw\_surface=None**, **embedding=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L1115)[#](#scikitplot.corpus.SemantemeInfo "Link to this definition")
:   Rich semantic unit descriptor attached to each multilang chunk.

    A **semanteme** is the smallest unit of meaning in a language. Depending
    on the script and chunking backend this may be a morpheme, a syllabic
    aksara, a Han ideograph, or a grapheme cluster.

    All fields are optional so that callers that do not have the full
    analysis available can still populate a partial record.

    Parameters:
    :   ****surface****str
        :   The surface form as it appears in the normalised text.

        ****script****str or None
        :   [`ScriptType`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType") value string of
            this semanteme (e.g. `"latin"`, `"han"`).

        ****direction****str or None
        :   Writing direction: `"ltr"`, `"rtl"`, or `"ttb"`.

        ****morphemes****list[str] or None
        :   Morpheme decomposition (e.g. MeCab or camel-tools output).
            `None` when morphological analysis was not run.

        ****lemma****str or None
        :   Dictionary lemma of this semanteme. `None` if unavailable.

        ****pos\_tag****str or None
        :   Part-of-speech tag (language-specific tagset string).

        ****stem****str or None
        :   Stemmed form (Porter, Snowball, etc.).

        ****grapheme\_count****int or None
        :   Number of UAX #29 grapheme clusters in `surface`.

        ****codepoint\_count****int or None
        :   Number of Unicode codepoints in `surface`.

        ****is\_stopword****bool or None
        :   `True` if this semanteme is a stopword in its detected language.

        ****language\_hint****str or None
        :   ISO 639-1 / BCP-47 language code hint (e.g. `"ja"`, `"ar"`).

        ****determinative****str or None
        :   For Egyptian hieroglyphs: the determinative sign glyph.

        ****raw\_surface****str or None
        :   Pre-normalisation surface form. `None` when no normalisation
            changed the text (idempotent normalisation).

        ****embedding****list[float] or None
        :   Per-semanteme dense embedding vector (if computed). Allows
            fine-grained semantic search at morpheme/aksara level.

    Parameters:
    :   * ****surface**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****script**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****direction**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****morphemes**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****lemma**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****pos\_tag**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****stem**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****grapheme\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****codepoint\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****is\_stopword**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****language\_hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****determinative**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****raw\_surface**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****embedding**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    Notes

    ****Developer note:**** `SemantemeInfo` is stored as a list in
    `MultilangChunkMeta.semantemes` and serialised to
    `CorpusDocument.morphemes` (list of surface strings) and
    `chunk.metadata["semantemes"]` (list of dicts).

    Examples

    Try it in your browser!
    ```
    >>> info = SemantemeInfo(
    ...     surface="run", script="latin", lemma="run", stem="run", morphemes=["run"]
    ... )
    >>> info.surface
    'run'

    ```
    Go BackOpen In Tab

    codepoint\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.codepoint_count "Link to this definition")

    determinative: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.determinative "Link to this definition")

    direction: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.direction "Link to this definition")

    embedding: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.embedding "Link to this definition")

    grapheme\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.grapheme_count "Link to this definition")

    is\_stopword: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.is_stopword "Link to this definition")

    language\_hint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.language_hint "Link to this definition")

    lemma: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.lemma "Link to this definition")

    morphemes: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.morphemes "Link to this definition")

    pos\_tag: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.pos_tag "Link to this definition")

    raw\_surface: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.raw_surface "Link to this definition")

    script: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.script "Link to this definition")

    stem: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.SemantemeInfo.stem "Link to this definition")

    surface: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L1115)[#](#scikitplot.corpus.SemantemeInfo.surface "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L1195)[#](#scikitplot.corpus.SemantemeInfo.to_dict "Link to this definition")
    :   Serialise to a JSON-safe dict for `chunk.metadata` storage.

        Returns:
        :   MetadataDict
            :   All fields; fields that are `None` are omitted to minimise
                payload size.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    with\_embedding(**vector**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_types.py#L1226)[#](#scikitplot.corpus.SemantemeInfo.with_embedding "Link to this definition")
    :   Return a copy of this record with an embedding vector attached.

        Parameters:
        :   ****vector****list[float]
            :   Dense embedding from any encoder (sentence-transformers, etc.).

        Returns:
        :   SemantemeInfo
            :   New frozen instance.

        Parameters:
        :   ****vector**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)

        Return type:
        :   [**SemantemeInfo**](#scikitplot.corpus.SemantemeInfo "scikitplot.corpus._types.SemantemeInfo")

        Notes

        CRITICAL-04 fix: uses `dataclasses.replace` so that any field
        added to [`SemantemeInfo`](#scikitplot.corpus.SemantemeInfo "scikitplot.corpus.SemantemeInfo") in the future is automatically
        preserved without updating this method.