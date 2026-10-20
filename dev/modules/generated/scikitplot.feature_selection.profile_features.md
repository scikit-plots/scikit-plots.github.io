# profile\_features[#](#profile-features "Link to this heading")

scikitplot.feature\_selection.profile\_features(**X**, **policy=None**, **\***, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L1115)[#](#scikitplot.feature_selection.profile_features "Link to this definition")
:   Fit a [`FeatureSchema`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection.FeatureSchema") on training data.

    Parameters:
    :   ****X****pandas.DataFrame
        :   Training data with unique string column labels. Target and other
            non-feature columns may be included and are given their roles by the
            policy.

        ****policy****FeaturePolicy, mapping, path or None, default=None
        :   Policy, its config form, or a TOML/YAML/JSON file; None uses defaults.

        ****registry****AssessmentRegistry or None, default=None
        :   Provider registry; the shared default when None.

    Returns:
    :   FeatureSchema
        :   The fitted schema.

    Raises:
    :   TypeError, ValueError
        :   For a non-DataFrame, non-string or duplicated labels.

        PolicyError
        :   For a policy that names missing columns (unless ignored), an unknown
            provider or invalid provider parameters.

    Parameters:
    :   * ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))
        * ****policy**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****registry**** ([**AssessmentRegistry**](scikitplot.feature_selection.AssessmentRegistry.html#scikitplot.feature_selection.AssessmentRegistry "scikitplot.feature_selection._assessments.AssessmentRegistry") **|** **None**)

    Return type:
    :   [**FeatureSchema**](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema")

    > **See also**
    > [`FeatureProfiler`](scikitplot.feature_selection.FeatureProfiler.html#scikitplot.feature_selection.FeatureProfiler "scikitplot.feature_selection.FeatureProfiler")
    :   The same inside a scikit-learn pipeline.

    Notes

    ****User note.**** Call it on the training split only. Profiling validation or
    test data separately can classify columns differently and leaks their
    statistics into preprocessing decisions; use
    [`FeatureSchema.audit`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema.audit "scikitplot.feature_selection.FeatureSchema.audit") and
    [`ReferenceProfile`](scikitplot.feature_selection.ReferenceProfile.html#scikitplot.feature_selection.ReferenceProfile "scikitplot.feature_selection.ReferenceProfile") for later data.

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import profile_features
    >>> X = pd.DataFrame({"id": [f"c{i}" for i in range(30)], "x": [0.5] * 30})
    >>> schema = profile_features(X)
    >>> schema["id"].is_("identifier_like"), schema["x"].is_("constant")
    (True, True)

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_feature_profiling_and_lineage_thumb.png)

[Profile, route, trace and monitor wide tables](../../auto_examples/feature_selection/plot_feature_profiling_and_lineage.html)

Profile, route, trace and monitor wide tables