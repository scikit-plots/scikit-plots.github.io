# FusionContribution[#](#fusioncontribution "Link to this heading")

class scikitplot.corpus.FusionContribution(**leg**, **position**, **rank**, **weight**, **value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_fusion.py#L113)[#](#scikitplot.corpus.FusionContribution "Link to this definition")
:   One leg’s share of a fused item’s score.

    Parameters:
    :   ****leg****str
        :   The leg’s name.

        ****position****int
        :   Zero-based position of the leg in the fused call, which tells two legs
            of the same name apart.

        ****rank****int
        :   One-based rank at which the leg first listed the item.

        ****weight****float
        :   The leg’s weight.

        ****value****float
        :   `weight / (k + rank)`, correctly rounded.

    Parameters:
    :   * ****leg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****position**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****rank**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****weight**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****value**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    leg: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_fusion.py#L113)[#](#scikitplot.corpus.FusionContribution.leg "Link to this definition")

    position: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_fusion.py#L113)[#](#scikitplot.corpus.FusionContribution.position "Link to this definition")

    rank: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_fusion.py#L113)[#](#scikitplot.corpus.FusionContribution.rank "Link to this definition")

    value: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_fusion.py#L113)[#](#scikitplot.corpus.FusionContribution.value "Link to this definition")

    weight: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_fusion.py#L113)[#](#scikitplot.corpus.FusionContribution.weight "Link to this definition")