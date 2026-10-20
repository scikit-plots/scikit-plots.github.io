# Agent[#](#agent "Link to this heading")

class scikitplot.agent.Agent(**tools**, **planner**, **\***, **policy=None**, **limits=None**, **approver=None**, **done=None**, **audit=None**, **store=None**, **clock=None**, **now=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_loop.py#L79)[#](#scikitplot.agent.Agent "Link to this definition")
:   Run a goal with a planner and tools, within a policy and limits.

    Parameters:
    :   ****tools****Toolset or iterable of Tool
        :   What the agent may call.

        ****planner****callable
        :   `planner(state, tools) -> Decision`: `state` is a copy of the
            [`RunState`](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent.RunState") and `tools` the toolset’s
            [`describe`](scikitplot.agent.Toolset.html#scikitplot.agent.Toolset.describe "scikitplot.agent.Toolset.describe"). A model adapter or a rule.

        ****policy****Policy or None, default=None
        :   `None` is `Policy()`: `read` tools without scopes only.

        ****limits****Limits or None, default=None
        :   `None` is `Limits()`: at most 16 decisions.

        ****approver****callable or None, default=None
        :   `approver(request) -> Approval or None`, asked when an action needs
            approval. `None` (or an answer of `None`) pauses the run with
            status `awaiting_approval`; [`resume`](#scikitplot.agent.Agent.resume "scikitplot.agent.Agent.resume") it with an
            [`Approval`](scikitplot.agent.Approval.html#scikitplot.agent.Approval "scikitplot.agent.Approval").

        ****done****callable or None, default=None
        :   `done(answer, state) -> bool or str`: the task’s completion
            criterion. `True` accepts the planner’s answer; `False` or a
            reason rejects it, and the run goes on. `None` accepts any answer.

        ****audit****AuditSink or None, default=None
        :   Where audit records go; `None` is a new
            [`MemoryAuditSink`](scikitplot.agent.MemoryAuditSink.html#scikitplot.agent.MemoryAuditSink "scikitplot.agent.MemoryAuditSink"), kept as `audit`.

        ****store****StateStore or None, default=None
        :   Where the state is saved after each step; `None` keeps it only in
            the returned state.

        ****clock****callable or None, default=None
        :   Seconds, for limits and step times; `None` is
            [`time.monotonic`](https://docs.python.org/3/library/time.html#time.monotonic "(in Python v3.15)").

        ****now****callable or None, default=None
        :   Wall-clock time written in audit records; `None` is [`time.time`](https://docs.python.org/3/library/time.html#time.time "(in Python v3.15)").

    Raises:
    :   TypeError
        :   If an argument has the wrong type.

    Parameters:
    :   * ****tools**** ([**Toolset**](scikitplot.agent.Toolset.html#scikitplot.agent.Toolset "scikitplot.agent.Toolset") **|** **Iterable****[**[**Tool**](scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent.Tool")**]**)
        * ****planner**** (**Planner**)
        * ****policy**** ([**Policy**](scikitplot.agent.Policy.html#scikitplot.agent.Policy "scikitplot.agent.Policy") **|** **None**)
        * ****limits**** ([**Limits**](scikitplot.agent.Limits.html#scikitplot.agent.Limits "scikitplot.agent.Limits") **|** **None**)
        * ****approver**** (**Callable****[****[**[**ApprovalRequest**](scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest "scikitplot.agent.ApprovalRequest")**]****,** [**Approval**](scikitplot.agent.Approval.html#scikitplot.agent.Approval "scikitplot.agent.Approval") **|** **None****]** **|** **None**)
        * ****done**** (**Callable****[****[****Any****,** [**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent.RunState")**]****,** **Any****]** **|** **None**)
        * ****audit**** ([**AuditSink**](scikitplot.agent.AuditSink.html#scikitplot.agent.AuditSink "scikitplot.agent.AuditSink") **|** **None**)
        * ****store**** ([**StateStore**](scikitplot.agent.StateStore.html#scikitplot.agent.StateStore "scikitplot.agent.StateStore") **|** **None**)
        * ****clock**** (**Callable****[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)
        * ****now**** (**Callable****[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Agent, Decision, Tool
    >>> def planner(state, tools):
    ...     if not state.steps:
    ...         return Decision.act("ping")
    ...     return Decision.finish(state.steps[-1].result)
    >>> agent = Agent([Tool("ping", lambda: "pong")], planner)
    >>> state = agent.run("check the line")
    >>> state.status.value, state.answer, len(agent.audit.records) > 0
    ('completed', 'pong', True)

    ```
    Go BackOpen In Tab

    resume(**state**, **\***, **approvals=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_loop.py#L221)[#](#scikitplot.agent.Agent.resume "Link to this definition")
    :   Continue a paused or interrupted run.

        Parameters:
        :   ****state****RunState or str
            :   The saved state, or its run id (read from `store`).

            ****approvals****iterable of Approval, default=()
            :   Answers to the pending [`ApprovalRequest`](scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest "scikitplot.agent.ApprovalRequest").
                The one whose digest names the request is used; at resume the
                action’s digest is recomputed from the tools as they are now and
                every gate is run again, so an approval of an action that changed
                authorises nothing (`approval_stale`).

        Returns:
        :   RunState
            :   The last state. A run that has ended is returned unchanged; a
                paused run with no matching approval stays paused.

        Raises:
        :   StateError
            :   If a store is set and holds a newer state of the run than the one
                given: resuming an old copy again would repeat what the newer
                state already records (an approved call, for one).

            ValueError
            :   If two approvals name the request and disagree, or a run id is
                given without a store.

        Parameters:
        :   * ****state**** ([**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****approvals**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Approval**](scikitplot.agent.Approval.html#scikitplot.agent.Approval "scikitplot.agent._state.Approval")**]**)

        Return type:
        :   [**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState")

        Notes

        ****User.**** With a store, give the run id: the latest state is read
        from it, and a second resume of a finished run is a no-op. Without a
        store, the caller holds the states, and resuming the same copy twice
        is the caller’s own replay. Every resume writes audit records, so the
        state it returns replaces the one given, even when a paused run stays
        paused: resume that one next.

    run(**goal**, **\***, **run\_id=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_loop.py#L174)[#](#scikitplot.agent.Agent.run "Link to this definition")
    :   Start a run toward `goal` and drive it until it ends or pauses.

        Parameters:
        :   ****goal****str
            :   What the run is for; the planner reads it from the state.

            ****run\_id****str or None, default=None
            :   64 hexadecimal digits; `None` draws a random one.

        Returns:
        :   RunState
            :   The last state: `completed`, `stopped`, `failed`, or
                `awaiting_approval`.

        Raises:
        :   ValueError
            :   If `run_id` names a run the store or the audit sink already
                holds: a run id is used once, so an approval or a trail of one run
                can never be taken for another’s.

        Parameters:
        :   * ****goal**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**RunState**](scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent._state.RunState")