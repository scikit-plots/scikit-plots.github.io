# RunState[#](#runstate "Link to this heading")

class scikitplot.agent.RunState(**run\_id**, **goal**, **status=RunStatus.RUNNING**, **stop\_reason=None**, **steps=<factory>**, **spent=<factory>**, **answer=None**, **pending=None**, **in\_flight=None**, **error=None**, **audit\_head=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L716)[#](#scikitplot.agent.RunState "Link to this definition")
:   The whole of one run, saved after every step.

    Parameters:
    :   ****run\_id****str
        :   64 hexadecimal digits.

        ****goal****str
        :   What the run is for, as given to [`Agent.run`](scikitplot.agent.Agent.html#scikitplot.agent.Agent.run "scikitplot.agent.Agent.run").

        ****status****RunStatus, default=”running”


        ****stop\_reason****StopReason or None, default=None
        :   Set whenever `status` is not `running`.

        ****steps****list of Step


        ****spent****Spent


        ****answer****object, default=None
        :   The accepted answer, for a completed run.

        ****pending****ApprovalRequest or None, default=None
        :   The action waiting for approval, for a paused run.

        ****in\_flight****dict or None, default=None
        :   `{"step", "key", "idempotent", "attempt", "decision", "gates"}`
            while a tool call runs; a state saved with it set is a run that
            stopped during the call.

        ****error****AgentError or None, default=None
        :   Why the run failed or stopped.

        ****audit\_head****dict or None, default=None
        :   `{"seq", "digest"}` of the run’s last audit record, so a resumed
            run continues the same hash chain.

    Parameters:
    :   * ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****goal**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**RunStatus**](scikitplot.agent.RunStatus.html#scikitplot.agent.RunStatus "scikitplot.agent._state.RunStatus"))
        * ****stop\_reason**** ([**StopReason**](scikitplot.agent.StopReason.html#scikitplot.agent.StopReason "scikitplot.agent._state.StopReason") **|** **None**)
        * ****steps**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**Step**](scikitplot.agent.Step.html#scikitplot.agent.Step "scikitplot.agent._state.Step")**]**)
        * ****spent**** ([**Spent**](scikitplot.agent.Spent.html#scikitplot.agent.Spent "scikitplot.agent._state.Spent"))
        * ****answer**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****pending**** ([**ApprovalRequest**](scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest "scikitplot.agent._state.ApprovalRequest") **|** **None**)
        * ****in\_flight**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****error**** ([**AgentError**](scikitplot.agent.AgentError.html#scikitplot.agent.AgentError "scikitplot.agent._errors.AgentError") **|** **None**)
        * ****audit\_head**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    Notes

    ****User.**** A planner receives a copy of the state rebuilt from its JSON
    form, so it reads exactly what was saved and cannot change the run.

    answer: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.agent.RunState.answer "Link to this definition")

    audit\_head: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.RunState.audit_head "Link to this definition")

    check()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L773)[#](#scikitplot.agent.RunState.check "Link to this definition")
    :   Check that the state is one a run can be in.

        Raises:
        :   StateError
            :   If the status and the stop reason disagree; the steps are not
                numbered 0, 1, …; a pending request or an in-flight call is not
                for the next step of this run; a completed run does not end with
                its accepted answer; or `spent.steps` is not the number of
                decisions the steps account for.

        Return type:
        :   None

    copy()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L941)[#](#scikitplot.agent.RunState.copy "Link to this definition")
    :   Return an independent copy, rebuilt from [`to_dict`](#scikitplot.agent.RunState.to_dict "scikitplot.agent.RunState.to_dict").

        Return type:
        :   [**RunState**](#scikitplot.agent.RunState "scikitplot.agent._state.RunState")

    property done: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.agent.RunState.done "Link to this definition")
    :   Whether the run has ended (completed, stopped or failed).

    error: [AgentError](scikitplot.agent.AgentError.html#scikitplot.agent.AgentError "scikitplot.agent._errors.AgentError") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.RunState.error "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L893)[#](#scikitplot.agent.RunState.from_dict "Link to this definition")
    :   Rebuild a state written by [`to_dict`](#scikitplot.agent.RunState.to_dict "scikitplot.agent.RunState.to_dict").

        Raises:
        :   StateError
            :   If a key is missing or unknown, the schema version is not
                `SCHEMA_VERSION`, or a field is malformed.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**RunState**](#scikitplot.agent.RunState "scikitplot.agent._state.RunState")

    goal: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L716)[#](#scikitplot.agent.RunState.goal "Link to this definition")

    in\_flight: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.RunState.in_flight "Link to this definition")

    observations()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L842)[#](#scikitplot.agent.RunState.observations "Link to this definition")
    :   Return each step as a planner reads it, in order.

        Returns:
        :   list of dict
            :   `{"index", "kind", "tool", "arguments", "outcome", "result",
                "error"}` per step; `error` is `{"code", "message"}` or
                `None`.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    pending: [ApprovalRequest](scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest "scikitplot.agent._state.ApprovalRequest") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.RunState.pending "Link to this definition")

    run\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L716)[#](#scikitplot.agent.RunState.run_id "Link to this definition")

    spent: [Spent](scikitplot.agent.Spent.html#scikitplot.agent.Spent "scikitplot.agent._state.Spent")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L716)[#](#scikitplot.agent.RunState.spent "Link to this definition")

    status: [RunStatus](scikitplot.agent.RunStatus.html#scikitplot.agent.RunStatus "scikitplot.agent._state.RunStatus") = 'running'[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L)[#](#scikitplot.agent.RunState.status "Link to this definition")

    steps: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[Step](scikitplot.agent.Step.html#scikitplot.agent.Step "scikitplot.agent._state.Step")][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L716)[#](#scikitplot.agent.RunState.steps "Link to this definition")

    stop\_reason: [StopReason](scikitplot.agent.StopReason.html#scikitplot.agent.StopReason "scikitplot.agent._state.StopReason") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.RunState.stop_reason "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L876)[#](#scikitplot.agent.RunState.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping (schema version `SCHEMA_VERSION`).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]