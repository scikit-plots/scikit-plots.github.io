# Spent[#](#spent "Link to this heading")

class scikitplot.agent.Spent(**steps=0**, **tool\_calls=0**, **cost=0.0**, **tokens=0**, **seconds=0.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L673)[#](#scikitplot.agent.Spent "Link to this definition")
:   What a run has used so far, against its [`Limits`](scikitplot.agent.Limits.html#scikitplot.agent.Limits "scikitplot.agent.Limits").

    Parameters:
    :   * ****steps**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****tool\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****cost**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    cost: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.agent.Spent.cost "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L687)[#](#scikitplot.agent.Spent.from_dict "Link to this definition")
    :   Rebuild what [`to_dict`](#scikitplot.agent.Spent.to_dict "scikitplot.agent.Spent.to_dict") wrote.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**Spent**](#scikitplot.agent.Spent "scikitplot.agent._state.Spent")

    seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.agent.Spent.seconds "Link to this definition")

    steps: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.agent.Spent.steps "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L683)[#](#scikitplot.agent.Spent.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.agent.Spent.tokens "Link to this definition")

    tool\_calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.agent.Spent.tool_calls "Link to this definition")