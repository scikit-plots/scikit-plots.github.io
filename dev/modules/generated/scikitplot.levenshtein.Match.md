# Match[#](#match "Link to this heading")

class scikitplot.levenshtein.Match(**choice**, **distance**, **similarity**, **index**, **backend='python'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/levenshtein/_core.py#L56)[#](#scikitplot.levenshtein.Match "Link to this definition")
:   One ranked fuzzy-match result with actual backend provenance.

    Parameters:
    :   * ****choice**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****distance**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****similarity**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****index**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'python'[#](#scikitplot.levenshtein.Match.backend "Link to this definition")

    choice: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/levenshtein/_core.py#L56)[#](#scikitplot.levenshtein.Match.choice "Link to this definition")

    distance: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/levenshtein/_core.py#L56)[#](#scikitplot.levenshtein.Match.distance "Link to this definition")

    index: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/levenshtein/_core.py#L56)[#](#scikitplot.levenshtein.Match.index "Link to this definition")

    similarity: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/levenshtein/_core.py#L56)[#](#scikitplot.levenshtein.Match.similarity "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/levenshtein/_core.py#L66)[#](#scikitplot.levenshtein.Match.to_dict "Link to this definition")
    :   Return scalar match metadata; `choice` is preserved as-is.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]