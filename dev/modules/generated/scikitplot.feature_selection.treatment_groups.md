# treatment\_groups[#](#treatment-groups "Link to this heading")

scikitplot.feature\_selection.treatment\_groups(**treatments**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_analysis.py#L407)[#](#scikitplot.feature_selection.treatment_groups "Link to this definition")
:   Group features that share the same recommended chain.

    Parameters:
    :   ****treatments****pandas.DataFrame
        :   Output of [`recommend_treatments`](scikitplot.feature_selection.recommend_treatments.html#scikitplot.feature_selection.recommend_treatments "scikitplot.feature_selection.recommend_treatments").

    Returns:
    :   dict of tuple to list of str
        :   Chain to features, in first-seen order: one `ColumnTransformer`
            branch per key.

    Parameters:
    :   ****treatments**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …], [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]