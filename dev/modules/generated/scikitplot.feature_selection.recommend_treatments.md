# recommend\_treatments[#](#recommend-treatments "Link to this heading")

scikitplot.feature\_selection.recommend\_treatments(**schema**, **\***, **rule=None**, **role='feature'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_analysis.py#L358)[#](#scikitplot.feature_selection.recommend_treatments "Link to this definition")
:   Recommend an ordered preprocessing chain per feature.

    Parameters:
    :   ****schema****FeatureSchema
        :   Fitted schema.

        ****rule****callable or None, default=None
        :   `rule(spec) -> (steps, reasons)`; `default_treatment` when None.

        ****role****str or sequence of str or None, default=”feature”
        :   Roles to include.

    Returns:
    :   pandas.DataFrame
        :   Indexed by feature with `kind`, `steps` and `reasons` (tuples).

    Parameters:
    :   * ****schema**** ([**FeatureSchema**](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema"))
        * ****rule**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**FeatureSpec**](scikitplot.feature_selection.FeatureSpec.html#scikitplot.feature_selection.FeatureSpec "scikitplot.feature_selection._schema.FeatureSpec")**]****,** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]****]** **|** **None**)
        * ****role**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import profile_features, recommend_treatments
    >>> X = pd.DataFrame({"x": [1.5, 2.5, 3.5, 50.5] * 5, "c": list("abcd") * 5})
    >>> recommend_treatments(profile_features(X))["steps"].to_dict()
    {'x': ("PowerTransformer(method='yeo-johnson')",), 'c': ("OneHotEncoder(handle_unknown='infrequent_if_exist')",)}

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_feature_profiling_and_lineage_thumb.png)

[Profile, route, trace and monitor wide tables](../../auto_examples/feature_selection/plot_feature_profiling_and_lineage.html)

Profile, route, trace and monitor wide tables