# list\_assessment\_providers[#](#list-assessment-providers "Link to this heading")

scikitplot.feature\_selection.list\_assessment\_providers(**registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L616)[#](#scikitplot.feature_selection.list_assessment_providers "Link to this definition")
:   Tabulate registered providers.

    Parameters:
    :   ****registry****AssessmentRegistry or None, default=None
        :   Registry to list; [`default_registry`](scikitplot.feature_selection.default_registry.html#scikitplot.feature_selection.default_registry "scikitplot.feature_selection.default_registry") when None.

    Returns:
    :   pandas.DataFrame
        :   Columns `name`, `version`, `parameters`, `description`.

    Parameters:
    :   ****registry**** ([**AssessmentRegistry**](scikitplot.feature_selection.AssessmentRegistry.html#scikitplot.feature_selection.AssessmentRegistry "scikitplot.feature_selection._assessments.AssessmentRegistry") **|** **None**)

    Return type:
    :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.feature_selection import list_assessment_providers
    >>> "skewed" in set(list_assessment_providers()["name"])
    True

    ```
    Go BackOpen In Tab