# Usage[#](#usage "Link to this heading")

class scikitplot.agent.Usage(**tokens=0**, **cost=0.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L137)[#](#scikitplot.agent.Usage "Link to this definition")
:   What producing one decision cost, as the planner reports it.

    Parameters:
    :   ****tokens****int, default=0
        :   Model tokens (input and output) used for the decision.

        ****cost****float, default=0.0
        :   Cost in the caller’s budget unit (the same unit as `Tool.cost`).

    Parameters:
    :   * ****tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****cost**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    cost: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.agent.Usage.cost "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L157)[#](#scikitplot.agent.Usage.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.agent.Usage.tokens "Link to this definition")