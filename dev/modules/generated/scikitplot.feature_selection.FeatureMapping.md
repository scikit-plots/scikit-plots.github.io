# FeatureMapping[#](#featuremapping "Link to this heading")

class scikitplot.feature\_selection.FeatureMapping(**parents**, **relation**, **quality='exact'**, **output\_qualities=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L94)[#](#scikitplot.feature_selection.FeatureMapping "Link to this definition")
:   How one transformer’s outputs derive from its inputs.

    Return it from `get_feature_lineage(input_features)` on your own
    transformer to make it exactly traceable.

    Parameters:
    :   ****parents****tuple of tuple of int
        :   For every output, the positions of the inputs it is computed from.

        ****relation****str
        :   A [`Relation`](scikitplot.feature_selection.Relation.html#scikitplot.feature_selection.Relation "scikitplot.feature_selection.Relation") value.

        ****quality****str, default=”exact”
        :   A [`LineageQuality`](scikitplot.feature_selection.LineageQuality.html#scikitplot.feature_selection.LineageQuality "scikitplot.feature_selection.LineageQuality") value.

        ****output\_qualities****tuple of str, default=()
        :   Per-output qualities when they differ (an imputer whose filled
            values use other columns, `mixed`, beside exact missing indicators);
            empty means every output has `quality`.

    Parameters:
    :   * ****parents**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]****,** **...****]**)
        * ****relation**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****quality**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****output\_qualities**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.feature_selection import FeatureMapping
    >>> FeatureMapping(parents=((0,), (0,), (1,)), relation="expand").n_outputs
    3

    ```
    Go BackOpen In Tab

    classmethod all\_to\_all(**n\_in**, **n\_out**, **quality**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L159)[#](#scikitplot.feature_selection.FeatureMapping.all_to_all "Link to this definition")
    :   Return a mapping where every output depends on every input.

        Parameters:
        :   * ****n\_in**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****n\_out**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****quality**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FeatureMapping**](#scikitplot.feature_selection.FeatureMapping "scikitplot.feature_selection._lineage.FeatureMapping")

    classmethod identity(**n**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L149)[#](#scikitplot.feature_selection.FeatureMapping.identity "Link to this definition")
    :   Return the one-to-one mapping of `n` features.

        Parameters:
        :   ****n**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**FeatureMapping**](#scikitplot.feature_selection.FeatureMapping "scikitplot.feature_selection._lineage.FeatureMapping")

    property n\_outputs: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.feature_selection.FeatureMapping.n_outputs "Link to this definition")
    :   Number of outputs.

        Type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    output\_qualities: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.FeatureMapping.output_qualities "Link to this definition")

    parents: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), ...], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L94)[#](#scikitplot.feature_selection.FeatureMapping.parents "Link to this definition")

    quality: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'exact'[#](#scikitplot.feature_selection.FeatureMapping.quality "Link to this definition")

    quality\_of(**output**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L140)[#](#scikitplot.feature_selection.FeatureMapping.quality_of "Link to this definition")
    :   Return the lineage quality of output `output`.

        Parameters:
        :   ****output**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    relation: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L94)[#](#scikitplot.feature_selection.FeatureMapping.relation "Link to this definition")

    classmethod subset(**indices**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L154)[#](#scikitplot.feature_selection.FeatureMapping.subset "Link to this definition")
    :   Return a mapping that keeps the inputs at `indices`, in that order.

        Parameters:
        :   ****indices**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

        Return type:
        :   [**FeatureMapping**](#scikitplot.feature_selection.FeatureMapping "scikitplot.feature_selection._lineage.FeatureMapping")