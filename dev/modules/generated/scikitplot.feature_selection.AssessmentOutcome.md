# AssessmentOutcome[#](#assessmentoutcome "Link to this heading")

class scikitplot.feature\_selection.AssessmentOutcome(**state**, **reasons=()**, **evidence=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L109)[#](#scikitplot.feature_selection.AssessmentOutcome "Link to this definition")
:   What a provider returns: a state, reason codes and evidence.

    Parameters:
    :   ****state****str
        :   An [`AssessmentState`](scikitplot.feature_selection.AssessmentState.html#scikitplot.feature_selection.AssessmentState "scikitplot.feature_selection.AssessmentState") value.

        ****reasons****tuple of str, default=()
        :   Machine-readable reason codes (`"abs_skewness_ge_threshold"`).

        ****evidence****tuple of (str, scalar) pairs, default=()
        :   Values the decision rests on (`skewness=2.31`).

    Parameters:
    :   * ****state**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****reasons**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****evidence**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)

    evidence: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.feature_selection.AssessmentOutcome.evidence "Link to this definition")

    reasons: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.AssessmentOutcome.reasons "Link to this definition")

    state: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_assessments.py#L109)[#](#scikitplot.feature_selection.AssessmentOutcome.state "Link to this definition")