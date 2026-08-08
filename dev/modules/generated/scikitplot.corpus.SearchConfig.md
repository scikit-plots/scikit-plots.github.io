# SearchConfig[#](#searchconfig "Link to this heading")

class scikitplot.corpus.SearchConfig(**top\_k=10**, **match\_mode='semantic'**, **semantic\_threshold=0.0**, **keyword\_threshold=0.0**, **hybrid\_alpha=0.5**, **rrf\_k=60**, **use\_normalized\_text=True**, **case\_sensitive=False**, **backend='auto'**, **annoy\_n\_trees=10**, **annoy\_metric='angular'**, **annoy\_search\_k=-1**, **annoy\_impl='auto'**, **annoy\_dtype=None**, **annoy\_index\_dtype=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/corpus/_similarity/_similarity.py#L101)[#](#scikitplot.corpus.SearchConfig "Link to this definition")
:   Configuration for similarity search.

    Parameters:
    :   ****top\_k****int
        :   Maximum results to return.

        ****match\_mode****str
        :   One of `"strict"`, `"keyword"`, `"semantic"`,
            `"hybrid"`.

        ****semantic\_threshold****float
        :   Minimum cosine similarity for SEMANTIC results.

        ****keyword\_threshold****float
        :   Minimum keyword overlap for KEYWORD results.

        ****hybrid\_alpha****float
        :   Weight for semantic scores in HYBRID mode (0 = pure keyword,
            1 = pure semantic). Default 0.5 (equal weight).

        ****rrf\_k****int
        :   Reciprocal rank fusion constant. Default 60 (standard).

        ****use\_normalized\_text****bool
        :   Use `normalized_text` for matching when available.

        ****case\_sensitive****bool
        :   Case-sensitive matching in STRICT mode.

        ****backend****str
        :   Dense ANN backend selector for SEMANTIC/HYBRID modes. One of
            `"auto"` (default; resolves to Annoy when available, else FAISS,
            Voyager, or exact brute-force), `"annoy"`, `"faiss"`,
            `"voyager"`, `"bruteforce"`. An explicitly named backend that is
            not installed raises at build time rather than silently degrading.

        ****annoy\_n\_trees****int
        :   Annoy tree count (accuracy/size trade-off) when the Annoy backend is
            used. Higher is more accurate and larger. Default 10.

        ****annoy\_metric****str
        :   Annoy distance metric. Default `"angular"` (cosine-like); scores are
            always reported as cosine similarity regardless of metric.

        ****annoy\_search\_k****int
        :   Annoy query-time node budget. `-1` (default) lets Annoy choose.

        ****annoy\_impl****str
        :   Which Annoy index class to use: `"auto"` (default; high-level
            `scikitplot.annoy.Index` first, else the Cython
            `scikitplot.annoy._annoy.Index`), `"highlevel"`, or `"cython"`.

        ****annoy\_dtype****str or None
        :   Embedding precision for the Cython Annoy class (e.g. `"float32"`,
            `"float64"`). Ignored by the high-level class. Default `None`.

        ****annoy\_index\_dtype****str or None
        :   Item-id integer width for the Cython Annoy class (e.g. `"int32"`,
            `"uint64"`) for very large corpora. Ignored otherwise. Default
            `None`.

    Parameters:
    :   * ****top\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****semantic\_threshold**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****keyword\_threshold**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****hybrid\_alpha**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****rrf\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****case\_sensitive**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****annoy\_n\_trees**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****annoy\_metric**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****annoy\_search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****annoy\_impl**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****annoy\_dtype**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****annoy\_index\_dtype**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Notes

    ****User note:**** For RAG pipelines, `match_mode="hybrid"` with
    default settings provides a good balance. For exact citation
    matching, use `match_mode="strict"`. To force a specific ANN
    library, set e.g. `backend="annoy"` and tune `annoy_n_trees`.

    annoy\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.SearchConfig.annoy_dtype "Link to this definition")

    annoy\_impl: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'auto'[#](#scikitplot.corpus.SearchConfig.annoy_impl "Link to this definition")

    annoy\_index\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.SearchConfig.annoy_index_dtype "Link to this definition")

    annoy\_metric: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'angular'[#](#scikitplot.corpus.SearchConfig.annoy_metric "Link to this definition")

    annoy\_n\_trees: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10[#](#scikitplot.corpus.SearchConfig.annoy_n_trees "Link to this definition")

    annoy\_search\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = -1[#](#scikitplot.corpus.SearchConfig.annoy_search_k "Link to this definition")

    backend: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'auto'[#](#scikitplot.corpus.SearchConfig.backend "Link to this definition")

    case\_sensitive: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.SearchConfig.case_sensitive "Link to this definition")

    hybrid\_alpha: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.5[#](#scikitplot.corpus.SearchConfig.hybrid_alpha "Link to this definition")

    keyword\_threshold: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.0[#](#scikitplot.corpus.SearchConfig.keyword_threshold "Link to this definition")

    match\_mode: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'semantic'[#](#scikitplot.corpus.SearchConfig.match_mode "Link to this definition")

    rrf\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 60[#](#scikitplot.corpus.SearchConfig.rrf_k "Link to this definition")

    semantic\_threshold: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.0[#](#scikitplot.corpus.SearchConfig.semantic_threshold "Link to this definition")

    top\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10[#](#scikitplot.corpus.SearchConfig.top_k "Link to this definition")

    use\_normalized\_text: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.SearchConfig.use_normalized_text "Link to this definition")