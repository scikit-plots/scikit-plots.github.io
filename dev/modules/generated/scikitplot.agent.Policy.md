# Policy[#](#policy "Link to this heading")

class scikitplot.agent.Policy(**allow\_effects=frozenset({ToolEffect.READ})**, **granted\_scopes=frozenset({})**, **allow\_tools=None**, **deny\_tools=frozenset({})**, **approval\_effects=frozenset({ToolEffect.EXTERNAL, ToolEffect.WRITE})**, **approval\_tools=frozenset({})**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_policy.py#L77)[#](#scikitplot.agent.Policy "Link to this definition")
:   What an agent may do: least privilege unless stated otherwise.

    Parameters:
    :   ****allow\_effects****iterable of ToolEffect or str, default=(“read”,)
        :   Kinds of effect the agent may cause.

        ****granted\_scopes****iterable of str, default=()
        :   Scopes the agent holds; a tool runs only if it needs no other.

        ****allow\_tools****iterable of str or None, default=None
        :   If set, only these tools may run. `None` allows any registered tool
            the other rules allow.

        ****deny\_tools****iterable of str, default=()
        :   Tools that never run, whatever else allows them.

        ****approval\_effects****iterable of ToolEffect or str, default=(“write”, “external”)
        :   Kinds of effect that need a person’s approval before each call.

        ****approval\_tools****iterable of str, default=()
        :   Tools that need approval before each call, whatever their effect.

    Raises:
    :   TypeError, ValueError
        :   If a field is not an iterable of the right kind.

    Parameters:
    :   * ****allow\_effects**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**ToolEffect**](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect")**]**)
        * ****granted\_scopes**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****allow\_tools**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****deny\_tools**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****approval\_effects**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**ToolEffect**](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect")**]**)
        * ****approval\_tools**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Policy
    >>> Policy().allows_effect("write")
    False
    >>> Policy(allow_effects=["read", "write"]).needs_approval_for("write")
    True

    ```
    Go BackOpen In Tab

    allow\_effects: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[ToolEffect](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect")] = frozenset({ToolEffect.READ})[#](#scikitplot.agent.Policy.allow_effects "Link to this definition")

    allow\_tools: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Policy.allow_tools "Link to this definition")

    allows\_effect(**effect**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_policy.py#L139)[#](#scikitplot.agent.Policy.allows_effect "Link to this definition")
    :   Whether the policy allows `effect`.

        Parameters:
        :   ****effect**** ([**ToolEffect**](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    approval\_effects: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[ToolEffect](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect")] = frozenset({ToolEffect.EXTERNAL, ToolEffect.WRITE})[#](#scikitplot.agent.Policy.approval_effects "Link to this definition")

    approval\_tools: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.agent.Policy.approval_tools "Link to this definition")

    deny\_tools: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.agent.Policy.deny_tools "Link to this definition")

    granted\_scopes: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.agent.Policy.granted_scopes "Link to this definition")

    needs\_approval\_for(**effect**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_policy.py#L143)[#](#scikitplot.agent.Policy.needs_approval_for "Link to this definition")
    :   Whether a call with `effect` needs approval.

        Parameters:
        :   ****effect**** ([**ToolEffect**](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/agent/_policy.py#L147)[#](#scikitplot.agent.Policy.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping, every set sorted.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]