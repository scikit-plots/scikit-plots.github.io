# plain[#](#plain "Link to this heading")

scikitplot.agent.plain(**value**, **\***, **what='value'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/agent/_canonical.py#L47)[#](#scikitplot.agent.plain "Link to this definition")
:   Return `value` as a plain JSON value, or raise.

    Parameters:
    :   ****value****object
        :   `None`, `bool`, `int`, `float`, `str`, or a `list`,
            `tuple`, or `dict` of them (`dict` keys must be `str`).

        ****what****str, default=”value”
        :   Names the value in an error message.

    Returns:
    :   object
        :   A new value of plain JSON types: tuples become lists, `dict`
            subclasses become `dict`. Scalars are returned as they are.

    Raises:
    :   TypeError
        :   If the value, or anything inside it, is of another type, or a key is
            not a string.

        ValueError
        :   If a float is not finite, a string holds a lone surrogate, an integer
            has more than `MAX_INT_DIGITS` digits, or the nesting is deeper
            than `MAX_DEPTH`.

    Parameters:
    :   * ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****what**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.agent._canonical import plain
    >>> plain({"a": (1, 2.5, None)})
    {'a': [1, 2.5, None]}

    ```
    Go BackOpen In Tab