# Assessment[#](#assessment "Link to this heading")

class scikitplot.feature\_selection.Assessment(**name**, **state**, **provider**, **version**, **params=()**, **reasons=()**, **evidence=()**, **origin='inferred'**, **inferred\_state=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L129)[#](#scikitplot.feature_selection.Assessment "Link to this definition")
:   The recorded answer to one assessment for one feature.

    Parameters:
    :   ****name****str
        :   Assessment name, as in the policy (`"skewed"`).

        ****state****str
        :   Final [`AssessmentState`](scikitplot.feature_selection.AssessmentState.html#scikitplot.feature_selection.AssessmentState "scikitplot.feature_selection.AssessmentState") value.

        ****provider****str
        :   Provider that answered.

        ****version****str
        :   Provider version.

        ****params****tuple of (str, value) pairs
        :   Parameters used.

        ****reasons****tuple of str
        :   Reason codes.

        ****evidence****tuple of (str, scalar) pairs
        :   Evidence values.

        ****origin****{“inferred”, “manual”}, default=”inferred”
        :   `"manual"` when a policy override set [`state`](#scikitplot.feature_selection.Assessment.state "scikitplot.feature_selection.Assessment.state").

        ****inferred\_state****str or None, default=None
        :   For a manual override, the state the provider inferred; kept so the
            override never erases evidence.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****state**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****provider**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****params**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)
        * ****reasons**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****evidence**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)
        * ****origin**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****inferred\_state**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    > **See also**
    > [`FeatureSpec.assess`](scikitplot.feature_selection.FeatureSpec.html#scikitplot.feature_selection.FeatureSpec.assess "scikitplot.feature_selection.FeatureSpec.assess")
    :   Read an assessment of a fitted feature.

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import profile_features
    >>> schema = profile_features(pd.DataFrame({"x": [1.0, 1.0, 2.0, 50.0] * 5}))
    >>> a = schema["x"].assess("skewed")
    >>> a.state, a.reasons
    ('true', ('abs_skewness_ge_threshold',))

    ```
    Go BackOpen In Tab

    evidence: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.feature_selection.Assessment.evidence "Link to this definition")

    property evidence\_dict: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][#](#scikitplot.feature_selection.Assessment.evidence_dict "Link to this definition")
    :   Evidence as a mapping.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L206)[#](#scikitplot.feature_selection.Assessment.from_dict "Link to this definition")
    :   Rebuild an assessment from [`to_dict`](#scikitplot.feature_selection.Assessment.to_dict "scikitplot.feature_selection.Assessment.to_dict") output, checking every field.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   Assessment
            :   The assessment.

        Raises:
        :   ValueError
            :   If a field is unknown, missing or wrongly typed.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**Assessment**](#scikitplot.feature_selection.Assessment "scikitplot.feature_selection._assessments.Assessment")

    inferred\_state: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.Assessment.inferred_state "Link to this definition")

    property is\_true: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.feature_selection.Assessment.is_true "Link to this definition")
    :   The state is `"true"` (`unknown` is not true).

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L129)[#](#scikitplot.feature_selection.Assessment.name "Link to this definition")

    origin: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'inferred'[#](#scikitplot.feature_selection.Assessment.origin "Link to this definition")

    params: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.feature_selection.Assessment.params "Link to this definition")

    provider: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L129)[#](#scikitplot.feature_selection.Assessment.provider "Link to this definition")

    reasons: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.Assessment.reasons "Link to this definition")

    state: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L129)[#](#scikitplot.feature_selection.Assessment.state "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L190)[#](#scikitplot.feature_selection.Assessment.to_dict "Link to this definition")
    :   Return the shared-data-model form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_assessments.py#L129)[#](#scikitplot.feature_selection.Assessment.version "Link to this definition")