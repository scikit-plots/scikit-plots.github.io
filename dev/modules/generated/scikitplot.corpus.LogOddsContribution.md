# LogOddsContribution[#](#logoddscontribution "Link to this heading")

class scikitplot.corpus.LogOddsContribution(**leg**, **position**, **score**, **probability**, **weight**, **evidence**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_logodds_fusion.py#L130)[#](#scikitplot.corpus.LogOddsContribution "Link to this definition")
:   One leg’s evidence for one fused item.

    Parameters:
    :   ****leg****str
        :   The leg’s name.

        ****position****int
        :   Zero-based position of the leg in the call.

        ****score****float
        :   The raw score the leg gave the item.

        ****probability****float
        :   The leg’s calibrated probability for that score, before clipping.

        ****weight****float
        :   The leg’s weight.

        ****evidence****float
        :   `weight * (logit(clipped probability) - logit(leg prevalence))`.

    Parameters:
    :   * ****leg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****position**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****probability**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****weight**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****evidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    evidence: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_logodds_fusion.py#L130)[#](#scikitplot.corpus.LogOddsContribution.evidence "Link to this definition")

    leg: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_logodds_fusion.py#L130)[#](#scikitplot.corpus.LogOddsContribution.leg "Link to this definition")

    position: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_logodds_fusion.py#L130)[#](#scikitplot.corpus.LogOddsContribution.position "Link to this definition")

    probability: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_logodds_fusion.py#L130)[#](#scikitplot.corpus.LogOddsContribution.probability "Link to this definition")

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_logodds_fusion.py#L130)[#](#scikitplot.corpus.LogOddsContribution.score "Link to this definition")

    weight: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_logodds_fusion.py#L130)[#](#scikitplot.corpus.LogOddsContribution.weight "Link to this definition")