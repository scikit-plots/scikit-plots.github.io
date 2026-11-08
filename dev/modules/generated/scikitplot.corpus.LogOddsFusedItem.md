# LogOddsFusedItem[#](#logoddsfuseditem "Link to this heading")

class scikitplot.corpus.LogOddsFusedItem(**key**, **probability**, **log\_odds**, **contributions**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L159)[#](#scikitplot.corpus.LogOddsFusedItem "Link to this definition")
:   One item of a probability-fused ranking.

    Parameters:
    :   ****key****str
        :   The item’s identity.

        ****probability****float
        :   `sigmoid(log_odds)`.

        ****log\_odds****float
        :   `logit(base_rate) + fsum(evidence)`.

        ****contributions****tuple of LogOddsContribution
        :   One per leg that listed the item, in leg order.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****probability**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****log\_odds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****contributions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**LogOddsContribution**](scikitplot.corpus.LogOddsContribution.html#scikitplot.corpus.LogOddsContribution "scikitplot.corpus._logodds_fusion.LogOddsContribution")**,** **...****]**)

    contributions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[LogOddsContribution](scikitplot.corpus.LogOddsContribution.html#scikitplot.corpus.LogOddsContribution "scikitplot.corpus._logodds_fusion.LogOddsContribution"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L159)[#](#scikitplot.corpus.LogOddsFusedItem.contributions "Link to this definition")

    key: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L159)[#](#scikitplot.corpus.LogOddsFusedItem.key "Link to this definition")

    log\_odds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L159)[#](#scikitplot.corpus.LogOddsFusedItem.log_odds "Link to this definition")

    probability: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/corpus/_logodds_fusion.py#L159)[#](#scikitplot.corpus.LogOddsFusedItem.probability "Link to this definition")