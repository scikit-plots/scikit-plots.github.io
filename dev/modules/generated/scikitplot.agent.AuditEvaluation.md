# AuditEvaluation[#](#auditevaluation "Link to this heading")

class scikitplot.agent.AuditEvaluation(**runs**, **summary**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_evaluate.py#L97)[#](#scikitplot.agent.AuditEvaluation "Link to this definition")
:   Per-run summaries and aggregate rates.

    Parameters:
    :   ****runs****tuple of RunSummary
        :   Every run in the trail, in order of first appearance.

        ****summary****dict
        :   Over top-level runs (sub-runs excluded): `n_runs`, `n_ended`,
            `completion_rate` (completed / ended), `stop_reasons`,
            `mean_decisions`, `mean_tool_calls`, `denial_rate` (denied /
            steps), `tool_failure_rate` (failed / (executed + failed)),
            `approval_grant_rate` (granted / answered), `total_cost`,
            `total_tokens`; a rate with no denominator is `None`.

    Parameters:
    :   * ****runs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**RunSummary**](scikitplot.agent.RunSummary.html#scikitplot.agent.RunSummary "scikitplot.agent._evaluate.RunSummary")**,** **...****]**)
        * ****summary**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    runs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[RunSummary](scikitplot.agent.RunSummary.html#scikitplot.agent.RunSummary "scikitplot.agent._evaluate.RunSummary"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_evaluate.py#L97)[#](#scikitplot.agent.AuditEvaluation.runs "Link to this definition")

    summary: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_evaluate.py#L97)[#](#scikitplot.agent.AuditEvaluation.summary "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_evaluate.py#L118)[#](#scikitplot.agent.AuditEvaluation.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]