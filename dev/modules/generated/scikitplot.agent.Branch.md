# Branch[#](#branch "Link to this heading")

class scikitplot.agent.Branch(**name**, **tool**, **arguments=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L252)[#](#scikitplot.agent.Branch "Link to this definition")
:   One branch of a [`FanOut`](scikitplot.agent.FanOut.html#scikitplot.agent.FanOut "scikitplot.agent.FanOut"): a tool and its arguments.

    Parameters:
    :   ****name****str
        :   Branch name, unique in its fan-out; the key of its result.

        ****tool****Tool
        :   The tool to call.

        ****arguments****mapping, callable or None, default=None
        :   As for [`Task`](scikitplot.agent.Task.html#scikitplot.agent.Task "scikitplot.agent.Task").

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****tool**** ([**Tool**](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent._tools.Tool"))
        * ****arguments**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    arguments: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.agent.Branch.arguments "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L252)[#](#scikitplot.agent.Branch.name "Link to this definition")

    tool: [Tool](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent._tools.Tool")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L252)[#](#scikitplot.agent.Branch.tool "Link to this definition")