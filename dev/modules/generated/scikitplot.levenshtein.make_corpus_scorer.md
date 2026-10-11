# make\_corpus\_scorer[#](#make-corpus-scorer "Link to this heading")

scikitplot.levenshtein.make\_corpus\_scorer(**\***, **backend='auto'**, **strict=False**, **use\_normalized\_text=True**, **score\_cutoff=0.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/levenshtein/_core.py#L487)[#](#scikitplot.levenshtein.make_corpus_scorer "Link to this definition")
:   Return a scorer compatible with `corpus.CustomRetrievalIndex`.

    The Corpus import is intentionally lazy so [`scikitplot.levenshtein`](../../apis/scikitplot.levenshtein.html#module-scikitplot.levenshtein "scikitplot.levenshtein")
    remains independently importable.

    Parameters:
    :   * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Return type:
    :   [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_levenshtein_script_thumb.png)

[Use Levenshtein distance with Corpus retrieval](../../auto_examples/corpus/plot_corpus_levenshtein_script.html)

Use Levenshtein distance with Corpus retrieval![](../../_images/sphx_glr_plot_levenshtein_corpus_script_thumb.png)

[Use Levenshtein with Corpus](../../auto_examples/levenshtein/plot_levenshtein_corpus_script.html)

Use Levenshtein with Corpus