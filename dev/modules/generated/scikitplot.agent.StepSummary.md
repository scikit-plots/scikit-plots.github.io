# StepSummary[#](#stepsummary "Link to this heading")

class scikitplot.agent.StepSummary(**node**, **outcome**, **result=None**, **error\_code=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_workflow.py#L407)[#](#scikitplot.agent.StepSummary "Link to this definition")
:   What one recorded step came to, as a callback sees it.

    Parameters:
    :   ****node****str
        :   The node (`node.branch` for a branch of an ordered fan-out).

        ****outcome****StepOutcome
        :   The step’s outcome.

        ****result****object
        :   The tool’s result, when it executed; otherwise `None`.

        ****error\_code****str or None
        :   The step’s error code, when it has one.

    Parameters:
    :   * ****node**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****outcome**** ([**StepOutcome**](scikitplot.agent.StepOutcome.html#scikitplot.agent.StepOutcome "scikitplot.agent._state.StepOutcome"))
        * ****result**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****error\_code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    error\_code: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.StepSummary.error_code "Link to this definition")

    node: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_workflow.py#L407)[#](#scikitplot.agent.StepSummary.node "Link to this definition")

    property ok: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.agent.StepSummary.ok "Link to this definition")
    :   Whether the tool executed.

    outcome: [StepOutcome](scikitplot.agent.StepOutcome.html#scikitplot.agent.StepOutcome "scikitplot.agent._state.StepOutcome")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/agent/_workflow.py#L407)[#](#scikitplot.agent.StepSummary.outcome "Link to this definition")

    result: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.agent.StepSummary.result "Link to this definition")