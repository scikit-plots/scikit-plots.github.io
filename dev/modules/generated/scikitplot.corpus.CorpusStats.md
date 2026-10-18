# CorpusStats[#](#corpusstats "Link to this heading")

class scikitplot.corpus.CorpusStats(**n\_documents**, **n\_tokens**, **n\_chars**, **mean\_tokens**, **median\_tokens**, **min\_tokens**, **max\_tokens**, **language\_counts**, **section\_type\_counts**, **source\_type\_counts**, **source\_file\_counts**, **collection\_ids**, **has\_embeddings**, **date\_range**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats "Link to this definition")
:   Aggregate statistics over a
    [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") collection.

    Parameters:
    :   ****n\_documents****int
        :   Total document count.

        ****n\_tokens****int
        :   Total whitespace-delimited token count (sum of
            `doc.word_count`).

        ****n\_chars****int
        :   Total character count (sum of `doc.char_count`).

        ****mean\_tokens****float
        :   Average tokens per document. `0.0` when `n_documents == 0`.

        ****median\_tokens****float
        :   Median tokens per document. `0.0` when `n_documents == 0`.

        ****min\_tokens****int
        :   Minimum token count across documents.

        ****max\_tokens****int
        :   Maximum token count across documents.

        ****language\_counts****dict[str, int]
        :   Map of ISO 639-1 code → document count. `None` language stored
            as `"unknown"`.

        ****section\_type\_counts****dict[str, int]
        :   Map of `SectionType.value` → document count.

        ****source\_type\_counts****dict[str, int]
        :   Map of `SourceType.value` → document count.

        ****input\_path\_counts****dict[str, int]
        :   Map of `input_path` → document count.

        ****collection\_ids****list[str]
        :   Sorted unique `collection_id` values (`None` excluded).

        ****has\_embeddings****int
        :   Number of documents where `embedding` is not `None`.

        ****date\_range****tuple[str, str] or None
        :   (earliest, latest) `source_date` values, or `None` if no
            documents have dates.

    Parameters:
    :   * ****n\_documents**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****mean\_tokens**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****median\_tokens**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****min\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****language\_counts**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****section\_type\_counts**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****source\_type\_counts**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****source\_file\_counts**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****collection\_ids**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****has\_embeddings**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****date\_range**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

    collection\_ids: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.collection_ids "Link to this definition")

    date\_range: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.date_range "Link to this definition")

    has\_embeddings: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.has_embeddings "Link to this definition")

    language\_counts: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.language_counts "Link to this definition")

    max\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.max_tokens "Link to this definition")

    mean\_tokens: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.mean_tokens "Link to this definition")

    median\_tokens: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.median_tokens "Link to this definition")

    min\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.min_tokens "Link to this definition")

    n\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.n_chars "Link to this definition")

    n\_documents: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.n_documents "Link to this definition")

    n\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.n_tokens "Link to this definition")

    section\_type\_counts: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.section_type_counts "Link to this definition")

    source\_file\_counts: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.source_file_counts "Link to this definition")

    source\_type\_counts: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L240)[#](#scikitplot.corpus.CorpusStats.source_type_counts "Link to this definition")

    summary()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L321)[#](#scikitplot.corpus.CorpusStats.summary "Link to this definition")
    :   Return a human-readable one-page summary string.

        Returns:
        :   str

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metadata/_metadata.py#L296)[#](#scikitplot.corpus.CorpusStats.to_dict "Link to this definition")
    :   Return a JSON-safe dictionary representation of the stats.

        Returns:
        :   dict[str, Any]

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]