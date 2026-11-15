# DelegateTool[#](#delegatetool "Link to this heading")

class scikitplot.agent.DelegateTool(**name**, **function**, **description=''**, **parameters=None**, **effect=ToolEffect.READ**, **scopes=frozenset({})**, **cost=1.0**, **idempotent=None**, **child=None**, **child\_limits=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_delegate.py#L66)[#](#scikitplot.agent.DelegateTool "Link to this definition")
:   A tool whose call is a bounded run of [`child`](#scikitplot.agent.DelegateTool.child "scikitplot.agent.DelegateTool.child").

    Build it with [`delegate`](scikitplot.agent.delegate.html#scikitplot.agent.delegate "scikitplot.agent.delegate").

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****function**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****parameters**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****effect**** ([**ToolEffect**](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect"))
        * ****scopes**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****cost**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****idempotent**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****child**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****child\_limits**** ([**Limits**](scikitplot.agent.Limits.html#scikitplot.agent.Limits "scikitplot.agent._policy.Limits") **|** **None**)

    child: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.agent.DelegateTool.child "Link to this definition")

    child\_limits: [Limits](scikitplot.agent.Limits.html#scikitplot.agent.Limits "scikitplot.agent._policy.Limits") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.DelegateTool.child_limits "Link to this definition")

    cost: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.agent.DelegateTool.cost "Link to this definition")

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_tools.py#L217)[#](#scikitplot.agent.DelegateTool.describe "Link to this definition")
    :   Return what a planner needs to call this tool, as JSON.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    description: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.agent.DelegateTool.description "Link to this definition")

    effect: [ToolEffect](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect") = 'read'[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_tools.py#L)[#](#scikitplot.agent.DelegateTool.effect "Link to this definition")

    function: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[...], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_delegate.py#L66)[#](#scikitplot.agent.DelegateTool.function "Link to this definition")

    idempotent: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.DelegateTool.idempotent "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_delegate.py#L66)[#](#scikitplot.agent.DelegateTool.name "Link to this definition")

    parameters: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.DelegateTool.parameters "Link to this definition")

    scopes: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.agent.DelegateTool.scopes "Link to this definition")