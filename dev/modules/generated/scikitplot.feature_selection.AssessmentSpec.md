# AssessmentSpec[#](#assessmentspec "Link to this heading")

class scikitplot.feature\_selection.AssessmentSpec(**provider**, **params=()**, **enabled=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L384)[#](#scikitplot.feature_selection.AssessmentSpec "Link to this definition")
:   Which provider answers one assessment question, with which parameters.

    Parameters:
    :   ****provider****str
        :   Name of a registered provider (see
            [`list_assessment_providers`](scikitplot.feature_selection.list_assessment_providers.html#scikitplot.feature_selection.list_assessment_providers "scikitplot.feature_selection.list_assessment_providers")).

        ****params****mapping of str to scalar or list of scalars, default=()
        :   Provider parameters; unknown names are refused when profiling. A
            `None` value means “use the provider default” and is not stored, so
            every format (TOML has no null) holds the same spec.

        ****enabled****bool, default=True
        :   False switches the assessment off without removing it.

    Parameters:
    :   * ****provider**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****params**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)
        * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****Developer note.**** `params` is stored as a sorted tuple of
    `(name, value)` pairs so the spec stays hashable; use [`params_dict`](#scikitplot.feature_selection.AssessmentSpec.params_dict "scikitplot.feature_selection.AssessmentSpec.params_dict")
    to read it as a mapping.

    enabled: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.feature_selection.AssessmentSpec.enabled "Link to this definition")

    classmethod from\_value(**value**, **\***, **field='assessment'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L440)[#](#scikitplot.feature_selection.AssessmentSpec.from_value "Link to this definition")
    :   Build a spec from its config form.

        Parameters:
        :   ****value****mapping or AssessmentSpec
            :   `{"provider": ..., "params": {...}, "enabled": ...}`.

            ****field****str, default=”assessment”
            :   Name used in error messages.

        Returns:
        :   AssessmentSpec
            :   The spec.

        Parameters:
        :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****field**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**AssessmentSpec**](#scikitplot.feature_selection.AssessmentSpec "scikitplot.feature_selection._policy.AssessmentSpec")

    params: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.feature_selection.AssessmentSpec.params "Link to this definition")

    property params\_dict: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][#](#scikitplot.feature_selection.AssessmentSpec.params_dict "Link to this definition")
    :   The parameters as a mapping (tuples stay tuples).

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    provider: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L384)[#](#scikitplot.feature_selection.AssessmentSpec.provider "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L471)[#](#scikitplot.feature_selection.AssessmentSpec.to_dict "Link to this definition")
    :   Return the config form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]