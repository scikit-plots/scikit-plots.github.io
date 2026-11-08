# PlanItem[#](#planitem "Link to this heading")

class scikitplot.agent.PlanItem(**id**, **text**, **status=PlanStatus.PENDING**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_plan.py#L77)[#](#scikitplot.agent.PlanItem "Link to this definition")
:   One item of a plan.

    Parameters:
    :   ****id****str
        :   Stable identity: 1-64 characters of letters, digits, `_`, `.`,
            `-`, starting with a letter or digit.

        ****text****str
        :   What the item is, non-empty, at most 500 characters.

        ****status****PlanStatus or str, default=”pending”

    Parameters:
    :   * ****id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**PlanStatus**](scikitplot.agent.PlanStatus.html#scikitplot.agent.PlanStatus "scikitplot.agent._plan.PlanStatus"))

    Examples

    Try it in your browser!
    ```
    >>> PlanItem("search", "find the chunker docs", "in_progress").status.value
    'in_progress'

    ```
    Go BackOpen In Tab

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_plan.py#L117)[#](#scikitplot.agent.PlanItem.from_dict "Link to this definition")
    :   Rebuild an item written by [`to_dict`](#scikitplot.agent.PlanItem.to_dict "scikitplot.agent.PlanItem.to_dict").

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**PlanItem**](#scikitplot.agent.PlanItem "scikitplot.agent._plan.PlanItem")

    id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_plan.py#L77)[#](#scikitplot.agent.PlanItem.id "Link to this definition")

    status: [PlanStatus](scikitplot.agent.PlanStatus.html#scikitplot.agent.PlanStatus "scikitplot.agent._plan.PlanStatus") = 'pending'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_plan.py#L)[#](#scikitplot.agent.PlanItem.status "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_plan.py#L77)[#](#scikitplot.agent.PlanItem.text "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/agent/_plan.py#L113)[#](#scikitplot.agent.PlanItem.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]