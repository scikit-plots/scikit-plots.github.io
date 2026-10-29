# Limits[#](#limits "Link to this heading")

class scikitplot.agent.Limits(**max\_steps=16**, **max\_tool\_calls=None**, **max\_cost=None**, **max\_tokens=None**, **max\_seconds=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_policy.py#L173)[#](#scikitplot.agent.Limits "Link to this definition")
:   Stopping conditions: when a run stops, whatever the planner proposes.

    Parameters:
    :   ****max\_steps****int, default=16
        :   Planner decisions. Required and finite: it is what makes every run
            end (invariant I1).

        ****max\_tool\_calls****int or None, default=None
        :   Tool calls; an action beyond them is denied at the Budget gate.

        ****max\_cost****float or None, default=None
        :   Budget units: tool costs plus the cost the planner reports. An action
            whose tool would pass it is denied; at or past it, no further
            decision is asked for.

        ****max\_tokens****int or None, default=None
        :   Model tokens the planner reports. Every decision must then report
            its [`Usage`](scikitplot.agent.Usage.html#scikitplot.agent.Usage "scikitplot.agent.Usage") (invariant I7).

        ****max\_seconds****float or None, default=None
        :   Running time, summed over the run’s sessions (time waiting for an
            approval does not count). Checked before each decision and each tool
            call; a call already running is not interrupted.

    Raises:
    :   TypeError, ValueError
        :   If a limit is not a positive finite number of the right kind.

    Parameters:
    :   * ****max\_steps**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_tool\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_cost**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****max\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Limits
    >>> Limits(max_steps=8, max_cost=10.0).max_cost
    10.0

    ```
    Go BackOpen In Tab

    max\_cost: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Limits.max_cost "Link to this definition")

    max\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Limits.max_seconds "Link to this definition")

    max\_steps: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 16[#](#scikitplot.agent.Limits.max_steps "Link to this definition")

    max\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Limits.max_tokens "Link to this definition")

    max\_tool\_calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Limits.max_tool_calls "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_policy.py#L230)[#](#scikitplot.agent.Limits.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]