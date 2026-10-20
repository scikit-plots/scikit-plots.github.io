# Action[#](#action "Link to this heading")

class scikitplot.agent.Action(**tool**, **arguments=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L162)[#](#scikitplot.agent.Action "Link to this definition")
:   A call the planner proposes: a tool name and its arguments.

    Parameters:
    :   ****tool****str
        :   The tool’s name.

        ****arguments****mapping, default={}
        :   JSON arguments; converted to plain JSON (a tuple becomes a list).

    Parameters:
    :   * ****tool**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****arguments**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    arguments: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L162)[#](#scikitplot.agent.Action.arguments "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L193)[#](#scikitplot.agent.Action.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    tool: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_state.py#L162)[#](#scikitplot.agent.Action.tool "Link to this definition")