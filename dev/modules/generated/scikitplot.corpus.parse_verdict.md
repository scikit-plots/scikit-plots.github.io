# parse\_verdict[#](#parse-verdict "Link to this heading")

scikitplot.corpus.parse\_verdict(**text**, **schema**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_judge.py#L317)[#](#scikitplot.corpus.parse_verdict "Link to this definition")
:   Parse a judge response strictly.

    Parameters:
    :   ****text****str
        :   The response.

        ****schema****mapping
        :   Required fields: name to spec, where a spec is `("bool",)`,
            `("str",)`, `("int", low, high)`, `("enum", values)`,
            `("list", item_spec)` or `("obj", {name: spec})`.

    Returns:
    :   dict
        :   The verdict restricted to the schema’s fields, at every depth; fields
            beyond the schema are validated as JSON and then dropped, so a
            stored verdict holds only typed, finite, storable values.

    Raises:
    :   JudgeParseError
        :   If the response is not exactly one JSON object (optionally inside one
            fenced code block); has duplicate keys, `NaN`/`Infinity`, a number
            that overflows to infinity, or nesting deeper than 128 containers; or a
            required field is missing, of another JSON type or range, or a
            string with a lone surrogate.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****schema**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> parse_verdict('{"score": 4, "reason": "ok"}', {"score": ("int", 1, 5)})
    {'score': 4}

    ```
    Go BackOpen In Tab