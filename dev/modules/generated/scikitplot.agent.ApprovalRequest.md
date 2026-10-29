# ApprovalRequest[#](#approvalrequest "Link to this heading")

class scikitplot.agent.ApprovalRequest(**run\_id**, **step**, **decision**, **effect**, **scopes**, **reason**, **head**, **digest**, **gates=()**, **attempt=1**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest "Link to this definition")
:   An action waiting at the Approval gate.

    Parameters:
    :   ****run\_id****str


        ****step****int
        :   The step the action belongs to.

        ****decision****Decision
        :   The planner’s decision that proposed it.

        ****effect****str
        :   The tool’s effect when the request was made.

        ****scopes****tuple of str
        :   The tool’s scopes when the request was made, sorted.

        ****reason****str
        :   Why approval is needed (the effect or the tool the policy names).

        ****head****str
        :   The digest of the run’s last audit record before the request.

        ****digest****str
        :   `approval_digest` of the above; an [`Approval`](scikitplot.agent.Approval.html#scikitplot.agent.Approval "scikitplot.agent.Approval") must name it.

        ****gates****tuple of dict
        :   The gates the action passed before this one.

        ****attempt****int, default=1
        :   Which start of the call this is (an idempotent call retried after a
            crash counts on), so a pause for approval does not reset the count.

    Raises:
    :   TypeError, ValueError
        :   If a field is malformed (ids and digests are 64 hexadecimal digits).

    Parameters:
    :   * ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****step**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****decision**** ([**Decision**](scikitplot.agent.Decision.html#scikitplot.agent.Decision "scikitplot.agent._state.Decision"))
        * ****effect**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****scopes**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****head**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****digest**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****gates**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)
        * ****attempt**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    property action: [Action](scikitplot.agent.Action.html#scikitplot.agent.Action "scikitplot.agent._state.Action")[#](#scikitplot.agent.ApprovalRequest.action "Link to this definition")
    :   The action waiting for approval.

    attempt: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1[#](#scikitplot.agent.ApprovalRequest.attempt "Link to this definition")

    decision: [Decision](scikitplot.agent.Decision.html#scikitplot.agent.Decision "scikitplot.agent._state.Decision")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.decision "Link to this definition")

    digest: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.digest "Link to this definition")

    effect: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.effect "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L450)[#](#scikitplot.agent.ApprovalRequest.from_dict "Link to this definition")
    :   Rebuild a request written by [`to_dict`](#scikitplot.agent.ApprovalRequest.to_dict "scikitplot.agent.ApprovalRequest.to_dict").

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**ApprovalRequest**](#scikitplot.agent.ApprovalRequest "scikitplot.agent._state.ApprovalRequest")

    gates: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.agent.ApprovalRequest.gates "Link to this definition")

    head: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.head "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.reason "Link to this definition")

    run\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.run_id "Link to this definition")

    scopes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.scopes "Link to this definition")

    step: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L362)[#](#scikitplot.agent.ApprovalRequest.step "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L435)[#](#scikitplot.agent.ApprovalRequest.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]