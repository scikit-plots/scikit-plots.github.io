# FanOut[#](#fanout "Link to this heading")

class scikitplot.agent.FanOut(**name**, **branches**, **mode='ordered'**, **max\_workers=None**, **into=None**, **update=None**, **max\_visits=None**, **on\_exhausted=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_workflow.py#L278)[#](#scikitplot.agent.FanOut "Link to this definition")
:   A node that calls several tools, then joins their results.

    Parameters:
    :   ****name****str
        :   Node name, unique in the graph; also the tool name of a concurrent
            fan-out, so it must not be the name of any tool in the graph.

        ****branches****sequence of Branch
        :   At least two, with unique names.

        ****mode****{“ordered”, “concurrent”}, default=”ordered”
        :   One audited step per branch in declared order, or one step running
            every branch at the same time.

        ****max\_workers****int or None, default=None
        :   Threads for a concurrent fan-out; `None` is one per branch.

        ****into, update, max\_visits, on\_exhausted****
        :   As for [`Task`](scikitplot.agent.Task.html#scikitplot.agent.Task "scikitplot.agent.Task"); the result is `{branch: result}` of the
            branches that executed, in declared order.

    Raises:
    :   WorkflowError
        :   If a field is malformed.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****branches**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Branch**](scikitplot.agent.Branch.html#scikitplot.agent.Branch "scikitplot.agent._workflow.Branch")**,** **...****]**)
        * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_workers**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****into**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****update**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]** **|** **None**)
        * ****max\_visits**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****on\_exhausted**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    branches: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Branch](scikitplot.agent.Branch.html#scikitplot.agent.Branch "scikitplot.agent._workflow.Branch"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_workflow.py#L278)[#](#scikitplot.agent.FanOut.branches "Link to this definition")

    into: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.FanOut.into "Link to this definition")

    max\_visits: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.FanOut.max_visits "Link to this definition")

    max\_workers: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.FanOut.max_workers "Link to this definition")

    mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'ordered'[#](#scikitplot.agent.FanOut.mode "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_workflow.py#L278)[#](#scikitplot.agent.FanOut.name "Link to this definition")

    on\_exhausted: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.FanOut.on_exhausted "Link to this definition")

    update: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[...], [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.FanOut.update "Link to this definition")