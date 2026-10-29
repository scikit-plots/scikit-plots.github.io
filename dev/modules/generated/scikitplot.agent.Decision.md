# Decision[#](#decision "Link to this heading")

class scikitplot.agent.Decision(**kind**, **action=None**, **answer=None**, **rationale=''**, **usage=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L198)[#](#scikitplot.agent.Decision "Link to this definition")
:   What the planner decided: call a tool, or finish with an answer.

    Build one with [`act`](#scikitplot.agent.Decision.act "scikitplot.agent.Decision.act") or [`finish`](#scikitplot.agent.Decision.finish "scikitplot.agent.Decision.finish").

    Parameters:
    :   ****kind****{“act”, “finish”}
        :   Call a tool, or finish with an answer.

        ****action****Action or None, default=None
        :   The call, for an `act` decision.

        ****answer****object, default=None
        :   The answer, a JSON value, for a `finish` decision.

        ****rationale****str, default=””
        :   Why, in the planner’s words; recorded, never acted on.

        ****usage****Usage or None, default=None
        :   What the decision cost. Required when the run has a token limit.

    Parameters:
    :   * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****action**** ([**Action**](scikitplot.agent.Action.html#scikitplot.agent.Action "scikitplot.agent._state.Action") **|** **None**)
        * ****answer**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****rationale**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****usage**** ([**Usage**](scikitplot.agent.Usage.html#scikitplot.agent.Usage "scikitplot.agent._state.Usage") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Decision
    >>> Decision.act("search", {"query": "spans"}).kind
    'act'
    >>> Decision.finish("42", rationale="found it").kind
    'finish'

    ```
    Go BackOpen In Tab

    classmethod act(**tool**, **arguments=None**, **\***, **rationale=''**, **usage=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L251)[#](#scikitplot.agent.Decision.act "Link to this definition")
    :   Decide to call `tool` with `arguments`.

        Parameters:
        :   * ****tool**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****arguments**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
            * ****rationale**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****usage**** ([**Usage**](scikitplot.agent.Usage.html#scikitplot.agent.Usage "scikitplot.agent._state.Usage") **|** **None**)

        Return type:
        :   [**Decision**](#scikitplot.agent.Decision "scikitplot.agent._state.Decision")

    action: [Action](scikitplot.agent.Action.html#scikitplot.agent.Action "scikitplot.agent._state.Action") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Decision.action "Link to this definition")

    answer: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.agent.Decision.answer "Link to this definition")

    classmethod finish(**answer**, **\***, **rationale=''**, **usage=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L268)[#](#scikitplot.agent.Decision.finish "Link to this definition")
    :   Decide to finish with `answer` (a JSON value).

        Parameters:
        :   * ****answer**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****rationale**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****usage**** ([**Usage**](scikitplot.agent.Usage.html#scikitplot.agent.Usage "scikitplot.agent._state.Usage") **|** **None**)

        Return type:
        :   [**Decision**](#scikitplot.agent.Decision "scikitplot.agent._state.Decision")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L285)[#](#scikitplot.agent.Decision.from_dict "Link to this definition")
    :   Rebuild a decision written by [`to_dict`](#scikitplot.agent.Decision.to_dict "scikitplot.agent.Decision.to_dict").

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**Decision**](#scikitplot.agent.Decision "scikitplot.agent._state.Decision")

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L198)[#](#scikitplot.agent.Decision.kind "Link to this definition")

    rationale: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.agent.Decision.rationale "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_state.py#L275)[#](#scikitplot.agent.Decision.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    usage: [Usage](scikitplot.agent.Usage.html#scikitplot.agent.Usage "scikitplot.agent._state.Usage") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Decision.usage "Link to this definition")