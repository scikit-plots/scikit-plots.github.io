# check\_plan\_change[#](#check-plan-change "Link to this heading")

scikitplot.agent.check\_plan\_change(**current**, **proposed**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_plan.py#L158)[#](#scikitplot.agent.check_plan_change "Link to this definition")
:   Refuse a plan change that would hide or rewrite progress.

    Parameters:
    :   ****current****sequence of PlanItem
        :   The plan in force.

        ****proposed****sequence of PlanItem
        :   The replacement, already validated by `normalize_plan`.

    Raises:
    :   ValueError
        :   If an item of `current` is missing from `proposed`, or a `done`
            or `dropped` item changes status or text.

    Parameters:
    :   * ****current**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**PlanItem**](scikitplot.agent.PlanItem.html#scikitplot.agent.PlanItem "scikitplot.agent._plan.PlanItem")**]**)
        * ****proposed**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**PlanItem**](scikitplot.agent.PlanItem.html#scikitplot.agent.PlanItem "scikitplot.agent._plan.PlanItem")**]**)

    Return type:
    :   None

    Examples

    Try it in your browser!
    ```
    >>> old = [PlanItem("a", "read", "done")]
    >>> check_plan_change(old, [PlanItem("a", "read", "done"), PlanItem("b", "write")])
    >>> check_plan_change(old, [PlanItem("b", "write")])
    Traceback (most recent call last):
    ...
    ValueError: plan items ['a'] are missing; mark an item dropped instead of removing it.

    ```
    Go BackOpen In Tab