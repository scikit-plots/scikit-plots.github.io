# DriftPolicy[#](#driftpolicy "Link to this heading")

class scikitplot.feature\_selection.DriftPolicy(**n\_bins=10**, **max\_categories=50**, **epsilon=0.0001**, **psi\_warn=0.1**, **psi\_alert=0.25**, **min\_count=30**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L587)[#](#scikitplot.feature_selection.DriftPolicy "Link to this definition")
:   How a drift reference is frozen and judged.

    Parameters:
    :   ****n\_bins****int, default=10
        :   Quantile bins of a numeric reference (ties can merge bins).

        ****max\_categories****int, default=50
        :   Most frequent training categories kept by name; the rest share one
            `"other"` bucket.

        ****epsilon****float, default=1e-4
        :   Floor applied to bucket proportions before the logarithm of the PSI,
            so an empty bucket gives a large finite value instead of infinity.

        ****psi\_warn, psi\_alert****float, default=0.1, 0.25
        :   Population stability index thresholds for the `warn` and `drift`
            statuses (the conventional 0.1 / 0.25 bands).

        ****min\_count****int, default=30
        :   Fewest current non-missing values to judge a feature; below it the
            status is `insufficient`.

    Parameters:
    :   * ****n\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_categories**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****epsilon**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****psi\_warn**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****psi\_alert**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****min\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    epsilon: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0001[#](#scikitplot.feature_selection.DriftPolicy.epsilon "Link to this definition")

    max\_categories: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 50[#](#scikitplot.feature_selection.DriftPolicy.max_categories "Link to this definition")

    min\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 30[#](#scikitplot.feature_selection.DriftPolicy.min_count "Link to this definition")

    n\_bins: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 10[#](#scikitplot.feature_selection.DriftPolicy.n_bins "Link to this definition")

    psi\_alert: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.25[#](#scikitplot.feature_selection.DriftPolicy.psi_alert "Link to this definition")

    psi\_warn: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.1[#](#scikitplot.feature_selection.DriftPolicy.psi_warn "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L645)[#](#scikitplot.feature_selection.DriftPolicy.to_dict "Link to this definition")
    :   Return the config form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]