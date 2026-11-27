# WorkflowGraph[#](#workflowgraph "Link to this heading")

class scikitplot.agent.WorkflowGraph(**start**, **nodes**, **edges=()**, **\***, **channels=None**, **initial=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_workflow.py#L574)[#](#scikitplot.agent.WorkflowGraph "Link to this definition")
:   A checked, immutable workflow: nodes, edges and channels.

    Parameters:
    :   ****start****str
        :   The first node.

        ****nodes****sequence of Task, FanOut or Finish
        :   Every node, with unique names.

        ****edges****sequence of Edge
        :   Transitions; a source’s edges are tried in order. At most one edge of a
            source is unconditional, and it is the last.

        ****channels****mapping of str to str or callable, default=None
        :   Channel name to reducer: a name in [`REDUCERS`](scikitplot.agent.REDUCERS.html#scikitplot.agent.REDUCERS "scikitplot.agent.REDUCERS") or a callable
            `(old, new) -> value`.

        ****initial****mapping, default=None
        :   Initial channel values (JSON); a channel not given starts at its
            reducer’s empty value (`None` for a custom reducer).

    Raises:
    :   WorkflowError
        :   If the graph is malformed, has a node unreachable from `start` or one
            from which no [`Finish`](scikitplot.agent.Finish.html#scikitplot.agent.Finish "scikitplot.agent.Finish") is reachable, has a cycle through no
            node with `max_visits`, or an `on_exhausted` target that leads back
            to its node.

    Parameters:
    :   * ****start**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****nodes**** (**Sequence****[****Any****]**)
        * ****edges**** (**Sequence****[**[**Edge**](scikitplot.agent.Edge.html#scikitplot.agent.Edge "scikitplot.agent.Edge")**]**)
        * ****channels**** (**Mapping****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]** **|** **None**)
        * ****initial**** (**Mapping****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]** **|** **None**)

    > **See also**
    > [`WorkflowGraph.sequence`](#scikitplot.agent.WorkflowGraph.sequence "scikitplot.agent.WorkflowGraph.sequence")
    :   A graph that runs its nodes in order.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Edge, Finish, Task, Tool, WorkflowGraph
    >>> count = Tool("count", lambda: 1)
    >>> graph = WorkflowGraph(
    ...     "tick",
    ...     [
    ...         Task("tick", count, into="n", max_visits=3, on_exhausted="done"),
    ...         Finish("done", answer=lambda view: view.channels["n"]),
    ...     ],
    ...     [Edge("tick", "tick")],
    ...     channels={"n": "add"},
    ... )
    >>> [tool.name for tool in graph.tools()]
    ['count']

    ```
    Go BackOpen In Tab

    property fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.agent.WorkflowGraph.fingerprint "Link to this definition")
    :   Digest of the graph’s structure.

        Notes

        ****Developer.**** Names, kinds, tools, modes, bounds and edge order are
        covered; callbacks are not (a function has no stable digest), so two
        graphs that differ only in a callback share a fingerprint.

    property nodes: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][#](#scikitplot.agent.WorkflowGraph.nodes "Link to this definition")
    :   Every node, by name.

    planner(**\***, **artifacts=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_workflow.py#L896)[#](#scikitplot.agent.WorkflowGraph.planner "Link to this definition")
    :   Return the planner that walks this graph.

        Parameters:
        :   ****artifacts****ArtifactStore or None, default=None
            :   Where offloaded results are read from; needed when the agent
                offloads results (`offload_results_over`).

        Returns:
        :   callable
            :   `planner(state, tools) -> Decision`, as
                [`Agent`](scikitplot.agent.Agent.html#scikitplot.agent.Agent "scikitplot.agent.Agent") expects.

        Parameters:
        :   ****artifacts**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[…], [**Decision**](scikitplot.agent.Decision.html#scikitplot.agent.Decision "scikitplot.agent._state.Decision")]

    replay(**state**, **\***, **artifacts=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_workflow.py#L921)[#](#scikitplot.agent.WorkflowGraph.replay "Link to this definition")
    :   Rebuild where `state` stands in this graph.

        Parameters:
        :   ****state****RunState
            :   A run’s state.

            ****artifacts****ArtifactStore or None, default=None
            :   As for [`planner`](#scikitplot.agent.WorkflowGraph.planner "scikitplot.agent.WorkflowGraph.planner").

        Returns:
        :   WorkflowView

        Raises:
        :   WorkflowError
            :   If a recorded step is not the one this graph would have taken.

        Parameters:
        :   * ****state**** ([**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState"))
            * ****artifacts**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**WorkflowView**](scikitplot.agent.WorkflowView.html#scikitplot.agent.WorkflowView "scikitplot.agent._workflow.WorkflowView")

    classmethod sequence(**\*nodes**, **channels=None**, **initial=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_workflow.py#L798)[#](#scikitplot.agent.WorkflowGraph.sequence "Link to this definition")
    :   Return a graph that runs `nodes` in order and ends at the last one.

        Parameters:
        :   ****\*nodes****Task, FanOut or Finish
            :   At least one; the last must be a [`Finish`](scikitplot.agent.Finish.html#scikitplot.agent.Finish "scikitplot.agent.Finish").

            ****channels, initial****
            :   As for [`WorkflowGraph`](#scikitplot.agent.WorkflowGraph "scikitplot.agent.WorkflowGraph").

        Returns:
        :   WorkflowGraph

        Raises:
        :   WorkflowError
            :   If no node is given or the last is not a [`Finish`](scikitplot.agent.Finish.html#scikitplot.agent.Finish "scikitplot.agent.Finish").

        Parameters:
        :   * ****nodes**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****channels**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****initial**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**WorkflowGraph**](#scikitplot.agent.WorkflowGraph "scikitplot.agent._workflow.WorkflowGraph")

    property start: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.agent.WorkflowGraph.start "Link to this definition")
    :   The first node’s name.

    tools()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_workflow.py#L884)[#](#scikitplot.agent.WorkflowGraph.tools "Link to this definition")
    :   Return every tool the graph calls, for the agent’s toolset.

        Returns:
        :   list of Tool
            :   Task and ordered-branch tools, then one tool per concurrent
                fan-out, each name once.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Tool**](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent._tools.Tool")]