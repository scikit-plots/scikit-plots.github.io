# analysis\_plan[#](#analysis-plan "Link to this heading")

scikitplot.feature\_selection.analysis\_plan(**schema**, **target=None**, **\***, **rules=None**, **role='feature'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_analysis.py#L184)[#](#scikitplot.feature_selection.analysis_plan "Link to this definition")
:   Route every feature to the plots, summaries and tests that fit its kind.

    Parameters:
    :   ****schema****FeatureSchema
        :   Fitted schema.

        ****target****str or None, default=None
        :   A target column of the schema, or a target kind
            (`"binary"`, `"numeric_continuous"` …). None omits the
            bivariate columns’ content.

        ****rules****mapping or None, default=None
        :   Replacement for [`DEFAULT_ANALYSIS_RULES`](scikitplot.feature_selection.DEFAULT_ANALYSIS_RULES.html#scikitplot.feature_selection.DEFAULT_ANALYSIS_RULES "scikitplot.feature_selection.DEFAULT_ANALYSIS_RULES") (same keys).

        ****role****str or sequence of str or None, default=”feature”
        :   Roles to include.

    Returns:
    :   pandas.DataFrame
        :   Indexed by feature with `kind`, `plots`, `summaries`,
            `target_tests`, `target_plots` and `notes` (tuples of names).

    Parameters:
    :   * ****schema**** ([**FeatureSchema**](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema"))
        * ****target**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****rules**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****role**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import analysis_plan, profile_features
    >>> X = pd.DataFrame({"x": [1.5, 2.5, 3.5, 50.5] * 5, "y": [0, 1] * 10})
    >>> plan = analysis_plan(profile_features(X, {"roles": {"target": ["y"]}}), "y")
    >>> plan.loc["x", "target_tests"], plan.loc["x", "notes"]
    (('mannwhitneyu', 'ttest_ind'), ('has_outliers: robust_summaries', 'skewed: log_scale_axis'))

    ```
    Go BackOpen In Tab