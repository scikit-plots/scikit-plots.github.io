# validate[#](#validate "Link to this heading")

scikitplot.agent.validate(**schema**, **instance**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_schema.py#L248)[#](#scikitplot.agent.validate "Link to this definition")
:   Return the reasons `instance` does not match `schema`.

    Parameters:
    :   ****schema****mapping
        :   A schema accepted by [`check_schema`](scikitplot.agent.check_schema.html#scikitplot.agent.check_schema "scikitplot.agent.check_schema").

        ****instance****object
        :   A plain JSON value.

    Returns:
    :   list of str
        :   Empty when the instance matches. Each reason starts with the JSON
            Pointer of the value it is about (`/query`, `/ids/2`); at most
            `MAX_REPORTED` are listed, then how many more there were.

    Parameters:
    :   * ****schema**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****instance**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent._schema import validate
    >>> schema = {
    ...     "type": "object",
    ...     "properties": {"k": {"type": "integer", "minimum": 1}},
    ...     "required": ["k"],
    ...     "additionalProperties": False,
    ... }
    >>> validate(schema, {"k": 3})
    []
    >>> validate(schema, {"k": 0, "x": 1})
    ['/k: 0 is less than the minimum 1', "/: property 'x' is not allowed"]

    ```
    Go BackOpen In Tab