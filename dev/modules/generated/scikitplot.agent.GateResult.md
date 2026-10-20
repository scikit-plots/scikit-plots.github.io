# GateResult[#](#gateresult "Link to this heading")

class scikitplot.agent.GateResult(**gate**, **passed**, **error=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_policy.py#L235)[#](#scikitplot.agent.GateResult "Link to this definition")
:   One gate’s answer for one action.

    Parameters:
    :   * ****gate**** ([**GateKind**](scikitplot.agent.GateKind.html#scikitplot.agent.GateKind "scikitplot.agent._policy.GateKind"))
        * ****passed**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****error**** ([**AgentError**](scikitplot.agent.AgentError.html#scikitplot.agent.AgentError "scikitplot.agent._errors.AgentError") **|** **None**)

    error: [AgentError](scikitplot.agent.AgentError.html#scikitplot.agent.AgentError "scikitplot.agent._errors.AgentError") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.GateResult.error "Link to this definition")

    gate: [GateKind](scikitplot.agent.GateKind.html#scikitplot.agent.GateKind "scikitplot.agent._policy.GateKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_policy.py#L235)[#](#scikitplot.agent.GateResult.gate "Link to this definition")

    passed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_policy.py#L235)[#](#scikitplot.agent.GateResult.passed "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_policy.py#L243)[#](#scikitplot.agent.GateResult.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]