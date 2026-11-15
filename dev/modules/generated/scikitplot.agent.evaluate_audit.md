# evaluate\_audit[#](#evaluate-audit "Link to this heading")

scikitplot.agent.evaluate\_audit(**records**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_evaluate.py#L127)[#](#scikitplot.agent.evaluate_audit "Link to this definition")
:   Summarise every run in an audit trail.

    Parameters:
    :   ****records****iterable of mapping
        :   Audit records as written; several runs may be interleaved.

    Returns:
    :   AuditEvaluation

    Raises:
    :   StateError
        :   If the trail does not verify ([`verify_audit`](scikitplot.agent.verify_audit.html#scikitplot.agent.verify_audit "scikitplot.agent.verify_audit") reports a
            problem), naming the first problem.

    Parameters:
    :   ****records**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)

    Return type:
    :   [**AuditEvaluation**](scikitplot.agent.AuditEvaluation.html#scikitplot.agent.AuditEvaluation "scikitplot.agent._evaluate.AuditEvaluation")