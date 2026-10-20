# Tool[#](#tool "Link to this heading")

class scikitplot.agent.Tool(**name**, **function**, **description=''**, **parameters=None**, **effect=ToolEffect.READ**, **scopes=frozenset({})**, **cost=1.0**, **idempotent=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L57)[#](#scikitplot.agent.Tool "Link to this definition")
:   One callable tool and the facts the gate chain decides on.

    Parameters:
    :   ****name****str
        :   1 to 64 characters, `[A-Za-z_][A-Za-z0-9_-]*`: the name a planner
            uses to call it.

        ****function****callable
        :   Called with the validated arguments as keyword arguments. It must
            return a JSON value (see `plain`);
            anything else is reported as `tool_result_not_json`.

        ****description****str, default=””
        :   What the tool does, for the planner.

        ****parameters****mapping or None, default=None
        :   The JSON Schema of the arguments, in the subset of
            `scikitplot.agent._schema`; its root is a closed object.
            `None` is a tool without arguments.

        ****effect****ToolEffect or str, default=”read”
        :   Its kind of effect.

        ****scopes****iterable of str, default=()
        :   Scopes a policy must grant before the tool runs (`"corpus:read"`).

        ****cost****float, default=1.0
        :   Budget units one call costs, in the caller’s unit (Budget gate).

        ****idempotent****bool or None, default=None
        :   Whether a call may be repeated with the same effect. `None` is
            `True` for a `read` tool and `False` otherwise. A call of a
            non-idempotent tool that was in flight when a run stopped is not
            repeated at resume (`tool_interrupted`).

    Raises:
    :   TypeError
        :   If a field has the wrong type.

        ValueError
        :   If `name` or a scope is malformed, or `cost` is negative or not
            finite.

        SchemaError
        :   If `parameters` is outside the supported subset, or does not fit the
            function’s signature: a property the function cannot take as a
            keyword, or a parameter without a default that the schema does not
            require.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****function**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****...****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****parameters**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****effect**** ([**ToolEffect**](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect"))
        * ****scopes**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****cost**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****idempotent**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent import Tool
    >>> def add(a, b=0):
    ...     return a + b
    >>> tool = Tool(
    ...     "add",
    ...     add,
    ...     parameters={
    ...         "type": "object",
    ...         "properties": {"a": {"type": "integer"}, "b": {"type": "integer"}},
    ...         "required": ["a"],
    ...         "additionalProperties": False,
    ...     },
    ... )
    >>> tool.effect.value, tool.idempotent
    ('read', True)

    ```
    Go BackOpen In Tab

    cost: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.agent.Tool.cost "Link to this definition")

    describe()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L217)[#](#scikitplot.agent.Tool.describe "Link to this definition")
    :   Return what a planner needs to call this tool, as JSON.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    description: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.agent.Tool.description "Link to this definition")

    effect: [ToolEffect](scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent._tools.ToolEffect") = 'read'[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L)[#](#scikitplot.agent.Tool.effect "Link to this definition")

    function: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[...], [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L57)[#](#scikitplot.agent.Tool.function "Link to this definition")

    idempotent: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Tool.idempotent "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/agent/_tools.py#L57)[#](#scikitplot.agent.Tool.name "Link to this definition")

    parameters: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.agent.Tool.parameters "Link to this definition")

    scopes: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.agent.Tool.scopes "Link to this definition")