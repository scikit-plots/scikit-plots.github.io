# WorkflowView[#](#workflowview "Link to this heading")

class scikitplot.agent.WorkflowView(**goal**, **node**, **channels**, **visits**, **last=None**, **branches=<factory>**, **finished=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L435)[#](#scikitplot.agent.WorkflowView "Link to this definition")
:   Where a run stands in its workflow, rebuilt from the recorded steps.

    Parameters:
    :   ****goal****str
        :   The run’s goal.

        ****node****str or None
        :   The node the run is at; `None` once it finished.

        ****channels****mapping
        :   Every channel’s current value (a read-only copy).

        ****visits****mapping of str to int
        :   How many times each node has been entered.

        ****last****StepSummary or None
        :   The most recent step.

        ****branches****mapping of str to StepSummary
        :   The branches of the most recent fan-out, by branch name.

        ****finished****bool
        :   Whether a [`Finish`](scikitplot.agent.Finish.html#scikitplot.agent.Finish "scikitplot.agent.Finish") node’s answer was accepted.

    Parameters:
    :   * ****goal**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****node**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****channels**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****visits**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****last**** ([**StepSummary**](scikitplot.agent.StepSummary.html#scikitplot.agent.StepSummary "scikitplot.agent._workflow.StepSummary") **|** **None**)
        * ****branches**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**StepSummary**](scikitplot.agent.StepSummary.html#scikitplot.agent.StepSummary "scikitplot.agent._workflow.StepSummary")**]**)
        * ****finished**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    branches: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [StepSummary](scikitplot.agent.StepSummary.html#scikitplot.agent.StepSummary "scikitplot.agent._workflow.StepSummary")][[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L435)[#](#scikitplot.agent.WorkflowView.branches "Link to this definition")

    channels: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L435)[#](#scikitplot.agent.WorkflowView.channels "Link to this definition")

    digest()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L468)[#](#scikitplot.agent.WorkflowView.digest "Link to this definition")
    :   Return the digest of this position: node, channels and visit counts.

        Returns:
        :   str
            :   64 hexadecimal digits; equal for equal positions.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    finished: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.agent.WorkflowView.finished "Link to this definition")

    goal: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L435)[#](#scikitplot.agent.WorkflowView.goal "Link to this definition")

    last: [StepSummary](scikitplot.agent.StepSummary.html#scikitplot.agent.StepSummary "scikitplot.agent._workflow.StepSummary") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.WorkflowView.last "Link to this definition")

    node: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L435)[#](#scikitplot.agent.WorkflowView.node "Link to this definition")

    visits: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_workflow.py#L435)[#](#scikitplot.agent.WorkflowView.visits "Link to this definition")