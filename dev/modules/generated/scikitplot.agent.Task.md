# Task[#](#task "Link to this heading")

class scikitplot.agent.Task(**name**, **tool**, **arguments=None**, **into=None**, **update=None**, **max\_visits=None**, **on\_exhausted=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L204)[#](#scikitplot.agent.Task "Link to this definition")
:   A node that calls one tool.

    Parameters:
    :   ****name****str
        :   Node name, unique in the graph.

        ****tool****Tool
        :   The tool to call.

        ****arguments****mapping, callable or None, default=None
        :   The call’s arguments, or `arguments(view) -> mapping`. `None` is
            no arguments.

        ****into****str or None, default=None
        :   Channel the result is reduced into when the call executed.

        ****update****callable or None, default=None
        :   `update(view, result) -> {channel: value}`, each value reduced into
            its channel, instead of `into`.

        ****max\_visits****int or None, default=None
        :   How many times the node may be entered; required on every loop.

        ****on\_exhausted****str or None, default=None
        :   Node entered instead once `max_visits` is reached. `None` makes
            reaching the bound an error.

    Raises:
    :   WorkflowError
        :   If a field is malformed.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****tool**** ([**Tool**](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent._tools.Tool"))
        * ****arguments**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****into**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****update**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]** **|** **None**)
        * ****max\_visits**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****on\_exhausted**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    arguments: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.agent.Task.arguments "Link to this definition")

    into: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Task.into "Link to this definition")

    max\_visits: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Task.max_visits "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L204)[#](#scikitplot.agent.Task.name "Link to this definition")

    on\_exhausted: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Task.on_exhausted "Link to this definition")

    tool: [Tool](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent._tools.Tool")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L204)[#](#scikitplot.agent.Task.tool "Link to this definition")

    update: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[...], [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Task.update "Link to this definition")