# CutResult[#](#cutresult "Link to this heading")

class scikitplot.corpus.CutResult(**k**, **mode**, **evidence**, **clamped**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_cut.py#L55)[#](#scikitplot.corpus.CutResult "Link to this definition")
:   Where a list was cut, and why.

    Parameters:
    :   ****k****int
        :   Number of hits kept.

        ****mode****str
        :   The rule applied.

        ****evidence****float or None
        :   The threshold for `"threshold"`, the gap cut at for `"max_gap"`
            (`None` when no gap could be measured), `None` for `"fixed"`.

        ****clamped****bool
        :   Whether `min_k` or `max_k` overrode the rule.

    Parameters:
    :   * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****evidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****clamped**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    clamped: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_cut.py#L55)[#](#scikitplot.corpus.CutResult.clamped "Link to this definition")

    evidence: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_cut.py#L55)[#](#scikitplot.corpus.CutResult.evidence "Link to this definition")

    k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_cut.py#L55)[#](#scikitplot.corpus.CutResult.k "Link to this definition")

    mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_cut.py#L55)[#](#scikitplot.corpus.CutResult.mode "Link to this definition")