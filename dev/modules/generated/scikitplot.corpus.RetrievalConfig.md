# RetrievalConfig[#](#retrievalconfig "Link to this heading")

class scikitplot.corpus.RetrievalConfig(**top\_k=10**, **match\_mode='semantic'**, **semantic\_threshold=0.0**, **keyword\_threshold=0.0**, **hybrid\_alpha=0.5**, **rrf\_k=60**, **use\_normalized\_text=True**, **case\_sensitive=False**, **backend='auto'**, **index\_kwargs=<factory>**, **annoy\_n\_trees=10**, **annoy\_metric='angular'**, **annoy\_search\_k=-1**, **annoy\_impl='auto'**, **annoy\_dtype=None**, **annoy\_index\_dtype=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_similarity/_similarity.py#L142)[#](#scikitplot.corpus.RetrievalConfig "Link to this definition")
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

        ****backend****str or VectorIndexBackend subclass
        :   Dense ANN backend selector for SEMANTIC/HYBRID modes. Built-in string
            names include `"auto"`, `"annoy"`, `"faiss"`, `"voyager"`
            and `"bruteforce"`. A custom `VectorIndexBackend` subclass may be
            supplied directly for an application-local backend without adding
            backend-specific fields to this dataclass.

        ****index\_kwargs****mapping, optional
        :   Generic constructor keyword arguments for the selected vector-index
            backend. Prefer this for new backend-specific tuning, for example
            `index_kwargs={"n_trees": 20, "metric": "angular"}` with Annoy.
            Existing `annoy_*` fields remain supported for compatibility.

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
        * ****backend**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****index\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
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

    annoy\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.RetrievalConfig.annoy_dtype "Link to this definition")

    annoy\_impl: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'auto'[#](#scikitplot.corpus.RetrievalConfig.annoy_impl "Link to this definition")

    annoy\_index\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.RetrievalConfig.annoy_index_dtype "Link to this definition")

    annoy\_metric: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'angular'[#](#scikitplot.corpus.RetrievalConfig.annoy_metric "Link to this definition")

    annoy\_n\_trees: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10[#](#scikitplot.corpus.RetrievalConfig.annoy_n_trees "Link to this definition")

    annoy\_search\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = -1[#](#scikitplot.corpus.RetrievalConfig.annoy_search_k "Link to this definition")

    backend: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = 'auto'[#](#scikitplot.corpus.RetrievalConfig.backend "Link to this definition")

    case\_sensitive: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.RetrievalConfig.case_sensitive "Link to this definition")

    hybrid\_alpha: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.5[#](#scikitplot.corpus.RetrievalConfig.hybrid_alpha "Link to this definition")

    index\_kwargs: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_similarity/_similarity.py#L142)[#](#scikitplot.corpus.RetrievalConfig.index_kwargs "Link to this definition")

    keyword\_threshold: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.0[#](#scikitplot.corpus.RetrievalConfig.keyword_threshold "Link to this definition")

    match\_mode: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'semantic'[#](#scikitplot.corpus.RetrievalConfig.match_mode "Link to this definition")

    rrf\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 60[#](#scikitplot.corpus.RetrievalConfig.rrf_k "Link to this definition")

    semantic\_threshold: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.0[#](#scikitplot.corpus.RetrievalConfig.semantic_threshold "Link to this definition")

    top\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10[#](#scikitplot.corpus.RetrievalConfig.top_k "Link to this definition")

    use\_normalized\_text: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.RetrievalConfig.use_normalized_text "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus