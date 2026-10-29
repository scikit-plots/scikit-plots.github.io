# BinningRecommendation[#](#binningrecommendation "Link to this heading")

class scikitplot.feature\_selection.BinningRecommendation(**feature**, **state**, **rule=None**, **n\_bins=None**, **rule\_n\_bins=None**, **strategy=None**, **edges=()**, **reasons=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_binning.py#L67)[#](#scikitplot.feature_selection.BinningRecommendation "Link to this definition")
:   A frozen bin recommendation for one feature.

    Parameters:
    :   ****feature****str
        :   Column name.

        ****state****str
        :   Suitability, an [`AssessmentState`](scikitplot.feature_selection.AssessmentState.html#scikitplot.feature_selection.AssessmentState "scikitplot.feature_selection.AssessmentState") value.

        ****rule****str or None
        :   Count rule used.

        ****n\_bins****int or None
        :   Recommended count (after clipping and quantile merging).

        ****rule\_n\_bins****int or None
        :   Count the rule produced before clipping.

        ****strategy****str or None
        :   `"uniform"` or `"quantile"`.

        ****edges****tuple of float
        :   `n_bins + 1` increasing edges fitted on training data; empty when
            not suitable.

        ****reasons****tuple of str
        :   Reason codes (`"clipped_to_max_bins"`, `"tied_quantiles_merged"`).

    Parameters:
    :   * ****feature**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****state**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****rule**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****n\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****rule\_n\_bins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****strategy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****edges**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**,** **...****]**)
        * ****reasons**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    > **See also**
    > [`BinningPolicy`](scikitplot.feature_selection.BinningPolicy.html#scikitplot.feature_selection.BinningPolicy "scikitplot.feature_selection.BinningPolicy")
    :   The settings that produced this recommendation.

    edges: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.BinningRecommendation.edges "Link to this definition")

    feature: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_binning.py#L67)[#](#scikitplot.feature_selection.BinningRecommendation.feature "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_binning.py#L118)[#](#scikitplot.feature_selection.BinningRecommendation.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.feature_selection.BinningRecommendation.to_dict "scikitplot.feature_selection.BinningRecommendation.to_dict") output, checking every field.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   BinningRecommendation
            :   The recommendation.

        Raises:
        :   ValueError
            :   For an off-contract record.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**BinningRecommendation**](#scikitplot.feature_selection.BinningRecommendation "scikitplot.feature_selection._binning.BinningRecommendation")

    property is\_suitable: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.feature_selection.BinningRecommendation.is_suitable "Link to this definition")
    :   The suitability state is `"true"`.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    n\_bins: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.BinningRecommendation.n_bins "Link to this definition")

    reasons: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.BinningRecommendation.reasons "Link to this definition")

    rule: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.BinningRecommendation.rule "Link to this definition")

    rule\_n\_bins: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.BinningRecommendation.rule_n_bins "Link to this definition")

    state: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_binning.py#L67)[#](#scikitplot.feature_selection.BinningRecommendation.state "Link to this definition")

    strategy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.BinningRecommendation.strategy "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_binning.py#L111)[#](#scikitplot.feature_selection.BinningRecommendation.to_dict "Link to this definition")
    :   Return the shared-data-model form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]