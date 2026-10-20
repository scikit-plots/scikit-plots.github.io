# Toolset[#](#toolset "Link to this heading")

class scikitplot.agent.Toolset(**tools=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L230)[#](#scikitplot.agent.Toolset "Link to this definition")
:   The tools one agent may call, by name.

    Parameters:
    :   ****tools****iterable of Tool, default=()
        :   Names must be distinct.

    Raises:
    :   TypeError
        :   If an item is not a [`Tool`](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent.Tool").

        ValueError
        :   If two tools share a name.

    Parameters:
    :   ****tools**** (**Iterable****[**[**Tool**](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent.Tool")**]**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Tool, Toolset
    >>> tools = Toolset([Tool("ping", lambda: "pong")])
    >>> "ping" in tools, len(tools), tools.names()
    (True, 1, ('ping',))

    ```
    Go BackOpen In Tab

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L287)[#](#scikitplot.agent.Toolset.describe "Link to this definition")
    :   Return [`Tool.describe`](scikitplot.agent.Tool.html#scikitplot.agent.Tool.describe "scikitplot.agent.Tool.describe") of every tool, sorted by name.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    get(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L279)[#](#scikitplot.agent.Toolset.get "Link to this definition")
    :   Return the tool named `name`, or `None`.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Tool**](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent._tools.Tool") | None

    names()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L283)[#](#scikitplot.agent.Toolset.names "Link to this definition")
    :   Return the tool names, sorted.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]