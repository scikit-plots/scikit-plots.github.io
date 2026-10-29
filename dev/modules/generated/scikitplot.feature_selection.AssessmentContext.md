# AssessmentContext[#](#assessmentcontext "Link to this heading")

class scikitplot.feature\_selection.AssessmentContext(**name**, **stats**, **series=None**, **declared\_kind=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L276)[#](#scikitplot.feature_selection.AssessmentContext "Link to this definition")
:   What a provider may read about one feature.

    Parameters:
    :   ****name****str
        :   Column name.

        ****stats****FeatureStats
        :   Training statistics.

        ****series****pandas.Series or None
        :   The training column; None when re-assessing from stored stats.

        ****declared\_kind****str or None
        :   Kind declared in the policy, if any.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****stats**** ([**FeatureStats**](scikitplot.feature_selection.FeatureStats.html#scikitplot.feature_selection.FeatureStats "scikitplot.feature_selection._stats.FeatureStats"))
        * ****series**** ([**Series**](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.2)") **|** **None**)
        * ****declared\_kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    declared\_kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.AssessmentContext.declared_kind "Link to this definition")

    property family: [DtypeFamily](scikitplot.feature_selection.DtypeFamily.html#scikitplot.feature_selection.DtypeFamily "scikitplot.feature_selection._types.DtypeFamily")[#](#scikitplot.feature_selection.AssessmentContext.family "Link to this definition")
    :   Physical family of the column.

        Type:
        :   [DtypeFamily](scikitplot.feature_selection.DtypeFamily.html#scikitplot.feature_selection.DtypeFamily "scikitplot.feature_selection.DtypeFamily")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L276)[#](#scikitplot.feature_selection.AssessmentContext.name "Link to this definition")

    result(**state**, **\*reasons**, **\*\*evidence**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L303)[#](#scikitplot.feature_selection.AssessmentContext.result "Link to this definition")
    :   Build an [`AssessmentOutcome`](scikitplot.feature_selection.AssessmentOutcome.html#scikitplot.feature_selection.AssessmentOutcome "scikitplot.feature_selection.AssessmentOutcome").

        Parameters:
        :   ****state****str or AssessmentState
            :   The answer.

            ****\*reasons****str
            :   Reason codes.

            ****\*\*evidence****scalar
            :   Evidence values.

        Returns:
        :   AssessmentOutcome
            :   The outcome.

        Parameters:
        :   * ****state**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****reasons**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****evidence**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**AssessmentOutcome**](scikitplot.feature_selection.AssessmentOutcome.html#scikitplot.feature_selection.AssessmentOutcome "scikitplot.feature_selection._assessments.AssessmentOutcome")

    series: [Series](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.2)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.AssessmentContext.series "Link to this definition")

    stats: [FeatureStats](scikitplot.feature_selection.FeatureStats.html#scikitplot.feature_selection.FeatureStats "scikitplot.feature_selection._stats.FeatureStats")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L276)[#](#scikitplot.feature_selection.AssessmentContext.stats "Link to this definition")