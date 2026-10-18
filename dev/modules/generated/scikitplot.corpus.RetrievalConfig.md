# RetrievalConfig[#](#retrievalconfig "Link to this heading")

class scikitplot.corpus.RetrievalConfig(**top\_k=10**, **match\_mode='semantic'**, **semantic\_threshold=0.0**, **keyword\_threshold=0.0**, **hybrid\_alpha=0.5**, **rrf\_k=60**, **use\_normalized\_text=True**, **case\_sensitive=False**, **backend='auto'**, **index\_kwargs=<factory>**, **annoy\_n\_trees=10**, **annoy\_metric='angular'**, **annoy\_search\_k=-1**, **annoy\_impl='auto'**, **annoy\_dtype=None**, **annoy\_index\_dtype=None**, **allow\_fallback=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_similarity.py#L151)[#](#scikitplot.corpus.RetrievalConfig "Link to this definition")
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
        :   Dense share in HYBRID mode, shorthand for the two leg weights
            `{lexical: 1 - alpha, dense: alpha}` of
            [`FusionPolicy`](scikitplot.corpus.FusionPolicy.html#scikitplot.corpus.FusionPolicy "scikitplot.corpus.FusionPolicy") (R2-1): `0` returns the
            lexical leg alone and `1` the dense leg alone, exactly. Default 0.5.

        ****rrf\_k****int
        :   Reciprocal rank fusion constant, an `int` of at least 1. Default 60
            (standard).

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
        :   Which Annoy index class to use: `"auto"` (default; a class that
            accepts every requested option, the high-level
            `scikitplot.annoy.Index` first, else the Cython
            `scikitplot.annoy._annoy.Index`), `"highlevel"`, or `"cython"`.

        ****annoy\_dtype****str or None
        :   Embedding precision for the Cython Annoy class (e.g. `"float32"`,
            `"float64"`); `annoy_impl="auto"` picks that class when it is set.
            The high-level class cannot honour it (see `allow_fallback`).
            Default `None`.

        ****annoy\_index\_dtype****str or None
        :   Item-id integer width for the Cython Annoy class (e.g. `"int32"`,
            `"uint64"`) for very large corpora. Default `None`.

        ****allow\_fallback****bool
        :   What happens when the dense backend cannot run as configured (R2-5):
            under `backend="auto"` an installed backend that fails to load is
            skipped, and an Annoy option the running binding cannot honour is
            dropped, both reported on the dense leg (`requested_backend`,
            `fallback_reason`) and in [`RetrievalIndex.backend_provenance`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex.backend_provenance "scikitplot.corpus.RetrievalIndex.backend_provenance")
            (`True`, default); `False` raises at build instead.

    Parameters:
    :   * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****match\_mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****semantic\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****keyword\_threshold**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****hybrid\_alpha**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****rrf\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****case\_sensitive**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****backend**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****index\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****annoy\_n\_trees**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****annoy\_metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****annoy\_search\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****annoy\_impl**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****annoy\_dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****annoy\_index\_dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****allow\_fallback**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User note:**** For RAG pipelines, `match_mode="hybrid"` with
    default settings provides a good balance. For exact citation
    matching, use `match_mode="strict"`. To force a specific ANN
    library, set e.g. `backend="annoy"` and tune `annoy_n_trees`.

    allow\_fallback: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.RetrievalConfig.allow_fallback "Link to this definition")

    annoy\_dtype: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalConfig.annoy_dtype "Link to this definition")

    annoy\_impl: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'auto'[#](#scikitplot.corpus.RetrievalConfig.annoy_impl "Link to this definition")

    annoy\_index\_dtype: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.RetrievalConfig.annoy_index_dtype "Link to this definition")

    annoy\_metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'angular'[#](#scikitplot.corpus.RetrievalConfig.annoy_metric "Link to this definition")

    annoy\_n\_trees: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 10[#](#scikitplot.corpus.RetrievalConfig.annoy_n_trees "Link to this definition")

    annoy\_search\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = -1[#](#scikitplot.corpus.RetrievalConfig.annoy_search_k "Link to this definition")

    backend: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = 'auto'[#](#scikitplot.corpus.RetrievalConfig.backend "Link to this definition")

    case\_sensitive: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.RetrievalConfig.case_sensitive "Link to this definition")

    hybrid\_alpha: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.5[#](#scikitplot.corpus.RetrievalConfig.hybrid_alpha "Link to this definition")

    index\_kwargs: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_similarity/_similarity.py#L151)[#](#scikitplot.corpus.RetrievalConfig.index_kwargs "Link to this definition")

    keyword\_threshold: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.corpus.RetrievalConfig.keyword_threshold "Link to this definition")

    match\_mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'semantic'[#](#scikitplot.corpus.RetrievalConfig.match_mode "Link to this definition")

    rrf\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 60[#](#scikitplot.corpus.RetrievalConfig.rrf_k "Link to this definition")

    semantic\_threshold: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.corpus.RetrievalConfig.semantic_threshold "Link to this definition")

    top\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 10[#](#scikitplot.corpus.RetrievalConfig.top_k "Link to this definition")

    use\_normalized\_text: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.RetrievalConfig.use_normalized_text "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_levenshtein_script_thumb.png)

[Use Levenshtein distance with Corpus retrieval](../../auto_examples/corpus/plot_corpus_levenshtein_script.html)

Use Levenshtein distance with Corpus retrieval![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[Build a Multi-Source WHO Corpus](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

Build a Multi-Source WHO Corpus![](../../_images/sphx_glr_plot_levenshtein_corpus_script_thumb.png)

[Use Levenshtein with Corpus](../../auto_examples/levenshtein/plot_levenshtein_corpus_script.html)

Use Levenshtein with Corpus