# canonical\_json[#](#canonical-json "Link to this heading")

scikitplot.agent.canonical\_json(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_canonical.py#L123)[#](#scikitplot.agent.canonical_json "Link to this definition")
:   Return the canonical JSON text of a plain value.

    Keys are sorted, separators carry no whitespace, non-ASCII text is kept
    as is, and `NaN` or infinity raise.

    Parameters:
    :   ****value****object
        :   A value [`plain`](scikitplot.agent.plain.html#scikitplot.agent.plain "scikitplot.agent.plain") accepts.

    Returns:
    :   str

    Parameters:
    :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent._canonical import canonical_json
    >>> canonical_json({"b": 1, "a": [True, None]})
    '{"a":[true,null],"b":1}'

    ```
    Go BackOpen In Tab