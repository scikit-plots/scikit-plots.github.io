# BinningPolicy[#](#binningpolicy "Link to this heading")

class scikitplot.feature\_selection.BinningPolicy(**enabled=True**, **rule='auto'**, **n\_bins=None**, **min\_bins=2**, **max\_bins=64**, **min\_count=30**, **strategy='uniform'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_policy.py#L511)[#](#scikitplot.feature_selection.BinningPolicy "Link to this definition")
:   How bin recommendations are computed for numeric features.

    Parameters:
    :   ****enabled****bool, default=True
        :   Compute a [`BinningRecommendation`](scikitplot.feature_selection.BinningRecommendation.html#scikitplot.feature_selection.BinningRecommendation "scikitplot.feature_selection.BinningRecommendation")
            for each feature while profiling.

        ****rule****{“auto”, “knuth”, “fd”, “scott”, “sturges”, “doane”, “rice”, “sqrt”, “stone”, “fixed”}, default=”auto”
        :   Bin-count rule. `"knuth"` maximises Knuth’s Bayesian posterior over
            every integer count in `[min_bins, max_bins]` (an exhaustive, exact
            search); `"fixed"` uses `n_bins`; the others are the rules of
            [`numpy.histogram_bin_edges`](https://numpy.org/devdocs/reference/generated/numpy.histogram_bin_edges.html#numpy.histogram_bin_edges "(in NumPy v2.6.dev0)").

        ****n\_bins****int or None, default=None
        :   Bin count for `rule="fixed"`; must be None for other rules.

        ****min\_bins, max\_bins****int, default=2, 64
        :   Bounds applied to every rule’s count (a clipped count is reported).

        ****min\_count****int, default=30
        :   Fewest finite values for a recommendation; below it the suitability is
            `unknown`.

        ****strategy****{“uniform”, “quantile”}, default=”uniform”
        :   Edge placement. The data-driven rules assume equal widths; with
            `"quantile"` their count is used with quantile edges, and tied
            quantiles can reduce the count (reported).

    Parameters:
    :   * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****rule**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****n\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****min\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****min\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****strategy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****User note.**** A recommendation is advice: it never changes your data.
    Turn it into a transformer with
    [`binning_plan`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema.binning_plan "scikitplot.feature_selection.FeatureSchema.binning_plan").

    enabled: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.feature_selection.BinningPolicy.enabled "Link to this definition")

    max\_bins: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 64[#](#scikitplot.feature_selection.BinningPolicy.max_bins "Link to this definition")

    min\_bins: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2[#](#scikitplot.feature_selection.BinningPolicy.min_bins "Link to this definition")

    min\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 30[#](#scikitplot.feature_selection.BinningPolicy.min_count "Link to this definition")

    n\_bins: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.BinningPolicy.n_bins "Link to this definition")

    rule: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'auto'[#](#scikitplot.feature_selection.BinningPolicy.rule "Link to this definition")

    strategy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'uniform'[#](#scikitplot.feature_selection.BinningPolicy.strategy "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_policy.py#L582)[#](#scikitplot.feature_selection.BinningPolicy.to_dict "Link to this definition")
    :   Return the config form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]