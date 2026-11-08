# LogOddsFusionResult[#](#logoddsfusionresult "Link to this heading")

class scikitplot.corpus.LogOddsFusionResult(**items**, **evidence\_correlation**, **shared\_counts**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L182)[#](#scikitplot.corpus.LogOddsFusionResult "Link to this definition")
:   A fused ranking and the diagnostics needed to trust it.

    Parameters:
    :   ****items****tuple of LogOddsFusedItem
        :   Descending log-odds, ties by key, at most `top_k`.

        ****evidence\_correlation****dict
        :   For every pair of legs `(a, b)` (positions, `a < b`): marginal
            Pearson correlation of their evidence over the items both listed, or
            `None` when fewer than three items are shared or either side is
            constant. Not a test of conditional independence (see the module
            notes); near 1 means near-duplicate legs.

        ****shared\_counts****dict
        :   For the same pairs, how many items both legs listed.

    Parameters:
    :   * ****items**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**LogOddsFusedItem**](scikitplot.corpus.LogOddsFusedItem.html#scikitplot.corpus.LogOddsFusedItem "scikitplot.corpus._logodds_fusion.LogOddsFusedItem")**,** **...****]**)
        * ****evidence\_correlation**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None****]**)
        * ****shared\_counts**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]****,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    evidence\_correlation: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")], [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L182)[#](#scikitplot.corpus.LogOddsFusionResult.evidence_correlation "Link to this definition")

    items: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[LogOddsFusedItem](scikitplot.corpus.LogOddsFusedItem.html#scikitplot.corpus.LogOddsFusedItem "scikitplot.corpus._logodds_fusion.LogOddsFusedItem"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L182)[#](#scikitplot.corpus.LogOddsFusionResult.items "Link to this definition")

    shared\_counts: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")], [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L182)[#](#scikitplot.corpus.LogOddsFusionResult.shared_counts "Link to this definition")