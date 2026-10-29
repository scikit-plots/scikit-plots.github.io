# Step[#](#step "Link to this heading")

class scikitplot.agent.Step(**index**, **decision**, **outcome**, **gates=()**, **result=None**, **error=None**, **key=None**, **seconds=0.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L527)[#](#scikitplot.agent.Step "Link to this definition")
:   One completed step: a decision and what came of it.

    Parameters:
    :   ****index****int
        :   0-based; the order of the planner’s decisions.

        ****decision****Decision


        ****outcome****StepOutcome


        ****gates****tuple of dict
        :   Each gate’s result, in order (`{"gate": ..., "passed": ...}`).

        ****result****object, default=None
        :   The tool’s JSON result, for an executed step.

        ****error****AgentError or None, default=None
        :   Why the step did not execute, failed, or was rejected.

        ****key****str or None, default=None
        :   The call’s idempotency key (`call_key`), for an act step.

        ****seconds****float, default=0.0
        :   Time the tool call took.

    Parameters:
    :   * ****index**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****decision**** ([**Decision**](scikitplot.agent.Decision.html#scikitplot.agent.Decision "scikitplot.agent._state.Decision"))
        * ****outcome**** ([**StepOutcome**](scikitplot.agent.StepOutcome.html#scikitplot.agent.StepOutcome "scikitplot.agent._state.StepOutcome"))
        * ****gates**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)
        * ****result**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****error**** ([**AgentError**](scikitplot.agent.AgentError.html#scikitplot.agent.AgentError "scikitplot.agent._errors.AgentError") **|** **None**)
        * ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    decision: [Decision](scikitplot.agent.Decision.html#scikitplot.agent.Decision "scikitplot.agent._state.Decision")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L527)[#](#scikitplot.agent.Step.decision "Link to this definition")

    error: [AgentError](scikitplot.agent.AgentError.html#scikitplot.agent.AgentError "scikitplot.agent._errors.AgentError") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Step.error "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L603)[#](#scikitplot.agent.Step.from_dict "Link to this definition")
    :   Rebuild a step written by [`to_dict`](#scikitplot.agent.Step.to_dict "scikitplot.agent.Step.to_dict").

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**Step**](#scikitplot.agent.Step "scikitplot.agent._state.Step")

    gates: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.agent.Step.gates "Link to this definition")

    index: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L527)[#](#scikitplot.agent.Step.index "Link to this definition")

    key: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Step.key "Link to this definition")

    outcome: [StepOutcome](scikitplot.agent.StepOutcome.html#scikitplot.agent.StepOutcome "scikitplot.agent._state.StepOutcome")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L527)[#](#scikitplot.agent.Step.outcome "Link to this definition")

    result: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.agent.Step.result "Link to this definition")

    seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.agent.Step.seconds "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L590)[#](#scikitplot.agent.Step.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]