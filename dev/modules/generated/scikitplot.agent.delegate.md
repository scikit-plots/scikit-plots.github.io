# delegate[#](#delegate "Link to this heading")

scikitplot.agent.delegate(**name**, **child**, **\***, **description=''**, **max\_steps=8**, **max\_tool\_calls=None**, **max\_cost=None**, **max\_tokens=None**, **max\_seconds=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_delegate.py#L78)[#](#scikitplot.agent.delegate "Link to this definition")
:   Return a tool that runs `child` toward the goal it is called with.

    Parameters:
    :   ****name****str
        :   The tool’s name.

        ****child****Agent
        :   The agent to run. Its tools, planner and policy are used as they are;
            its limits are replaced by these, capped by the parent’s remaining
            budget at each call; its audit sink and state store become the
            parent’s.

        ****description****str, default=””
        :   For the parent’s planner.

        ****max\_steps****int, default=8
        :   Decisions the child may make. Steps are not shared: each run counts
            its own decisions.

        ****max\_tool\_calls, max\_cost, max\_tokens, max\_seconds****number or None
        :   The child’s own caps; `None` leaves only the parent’s remaining
            budget.

    Returns:
    :   DelegateTool

    Raises:
    :   TypeError
        :   If `child` is not an [`Agent`](scikitplot.agent.Agent.html#scikitplot.agent.Agent "scikitplot.agent.Agent").

        ValueError
        :   For a limit outside its domain, or a child with no tools.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****child**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_steps**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_tool\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_cost**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****max\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**DelegateTool**](scikitplot.agent.DelegateTool.html#scikitplot.agent.DelegateTool "scikitplot.agent._delegate.DelegateTool")