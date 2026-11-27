# check\_schema[#](#check-schema "Link to this heading")

scikitplot.agent.check\_schema(**schema**, **\***, **what='parameters'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_schema.py#L76)[#](#scikitplot.agent.check_schema "Link to this definition")
:   Check that a tool’s argument schema is in the supported subset.

    Parameters:
    :   ****schema****mapping
        :   The schema of a tool’s arguments: `{"type": "object", "properties":
            {...}, "required": [...], "additionalProperties": False}`.

        ****what****str, default=”parameters”
        :   Names the schema in an error message.

    Returns:
    :   dict
        :   A plain copy of `schema`.

    Raises:
    :   SchemaError
        :   If the schema uses a keyword outside the subset, gives a keyword a
            value of the wrong kind, is unsatisfiable by construction (`minLength`
            above `maxLength`, a required property it does not declare while
            refusing others), or its root is not a closed object.

    Parameters:
    :   * ****schema**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****what**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent._schema import check_schema
    >>> schema = check_schema(
    ...     {
    ...         "type": "object",
    ...         "properties": {"query": {"type": "string", "minLength": 1}},
    ...         "required": ["query"],
    ...         "additionalProperties": False,
    ...     }
    ... )
    >>> sorted(schema)
    ['additionalProperties', 'properties', 'required', 'type']

    ```
    Go BackOpen In Tab