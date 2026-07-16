# SearchConfig[#](#searchconfig "Link to this heading")

class scikitplot.corpus.SearchConfig(**top\_k=10**, **match\_mode='semantic'**, **semantic\_threshold=0.0**, **keyword\_threshold=0.0**, **hybrid\_alpha=0.5**, **rrf\_k=60**, **use\_normalized\_text=True**, **case\_sensitive=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_similarity/_similarity.py#L77)[#](#scikitplot.corpus.SearchConfig "Link to this definition")
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

    Parameters:
    :   * ****top\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****match\_mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****semantic\_threshold**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****keyword\_threshold**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****hybrid\_alpha**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****rrf\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****case\_sensitive**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Notes

    ****User note:**** For RAG pipelines, `match_mode="hybrid"` with
    default settings provides a good balance. For exact citation
    matching, use `match_mode="strict"`.

    case\_sensitive: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.corpus.SearchConfig.case_sensitive "Link to this definition")

    hybrid\_alpha: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.5[#](#scikitplot.corpus.SearchConfig.hybrid_alpha "Link to this definition")

    keyword\_threshold: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.0[#](#scikitplot.corpus.SearchConfig.keyword_threshold "Link to this definition")

    match\_mode: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'semantic'[#](#scikitplot.corpus.SearchConfig.match_mode "Link to this definition")

    rrf\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 60[#](#scikitplot.corpus.SearchConfig.rrf_k "Link to this definition")

    semantic\_threshold: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)") = 0.0[#](#scikitplot.corpus.SearchConfig.semantic_threshold "Link to this definition")

    top\_k: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 10[#](#scikitplot.corpus.SearchConfig.top_k "Link to this definition")

    use\_normalized\_text: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.SearchConfig.use_normalized_text "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples