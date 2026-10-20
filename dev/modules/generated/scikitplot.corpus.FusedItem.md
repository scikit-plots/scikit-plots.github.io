# FusedItem[#](#fuseditem "Link to this heading")

class scikitplot.corpus.FusedItem(**key**, **score**, **contributions**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_fusion.py#L140)[#](#scikitplot.corpus.FusedItem "Link to this definition")
:   One item of a fused ranking.

    Parameters:
    :   ****key****str
        :   The item’s identity, as the legs listed it.

        ****score****float
        :   The fused score: [`math.fsum`](https://docs.python.org/3/library/math.html#math.fsum "(in Python v3.15)") of the contributions’ values.

        ****contributions****tuple of FusionContribution
        :   One entry per leg that listed the item, in leg order.

    Parameters:
    :   * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****contributions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**FusionContribution**](scikitplot.corpus.FusionContribution.html#scikitplot.corpus.FusionContribution "scikitplot.corpus._fusion.FusionContribution")**,** **...****]**)

    contributions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[FusionContribution](scikitplot.corpus.FusionContribution.html#scikitplot.corpus.FusionContribution "scikitplot.corpus._fusion.FusionContribution"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_fusion.py#L140)[#](#scikitplot.corpus.FusedItem.contributions "Link to this definition")

    key: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_fusion.py#L140)[#](#scikitplot.corpus.FusedItem.key "Link to this definition")

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_fusion.py#L140)[#](#scikitplot.corpus.FusedItem.score "Link to this definition")