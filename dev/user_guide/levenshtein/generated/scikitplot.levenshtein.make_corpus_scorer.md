# scikitplot.levenshtein.make\_corpus\_scorer[#](#scikitplot-levenshtein-make-corpus-scorer "Link to this heading")

scikitplot.levenshtein.make\_corpus\_scorer(**\***, **backend='auto'**, **strict=False**, **use\_normalized\_text=True**, **score\_cutoff=0.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/levenshtein/_core.py#L487)[#](#scikitplot.levenshtein.make_corpus_scorer "Link to this definition")
:   Return a scorer compatible with `corpus.CustomRetrievalIndex`.

    The Corpus import is intentionally lazy so [`scikitplot.levenshtein`](../../../apis/scikitplot.levenshtein.html#module-scikitplot.levenshtein "scikitplot.levenshtein")
    remains independently importable.

    Parameters:
    :   * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****use\_normalized\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Return type:
    :   [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]