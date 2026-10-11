# rank[#](#rank "Link to this heading")

scikitplot.levenshtein.rank(**query**, **choices**, **\***, **key=None**, **limit=None**, **score\_cutoff=0.0**, **backend='auto'**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/levenshtein/_core.py#L408)[#](#scikitplot.levenshtein.rank "Link to this definition")
:   Rank choices from most to least similar to **query**.

    `score_cutoff` is backend-neutral normalized similarity in `[0, 1]`.
    It is applied after exact distance computation so every backend preserves
    identical ranking semantics and provenance.

    Parameters:
    :   * ****query**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****choices**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****key**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****limit**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Match**](scikitplot.levenshtein.Match.html#scikitplot.levenshtein.Match "scikitplot.levenshtein._core.Match")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_levenshtein_script_thumb.png)

[Use Levenshtein distance with Corpus retrieval](../../auto_examples/corpus/plot_corpus_levenshtein_script.html)

Use Levenshtein distance with Corpus retrieval![](../../_images/sphx_glr_plot_levenshtein_ranking_script_thumb.png)

[Rank fuzzy matches](../../auto_examples/levenshtein/plot_levenshtein_ranking_script.html)

Rank fuzzy matches![](../../_images/sphx_glr_plot_levenshtein_sequences_script_thumb.png)

[Sequences and explicit normalization](../../auto_examples/levenshtein/plot_levenshtein_sequences_script.html)

Sequences and explicit normalization