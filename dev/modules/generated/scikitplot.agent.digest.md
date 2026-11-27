# digest[#](#digest "Link to this heading")

scikitplot.agent.digest(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/agent/_canonical.py#L154)[#](#scikitplot.agent.digest "Link to this definition")
:   Return the SHA-256 of a plain value’s canonical JSON, as 64 hex digits.

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
    >>> from scikitplot.agent._canonical import digest
    >>> digest({"a": 1}) == digest({"a": 1})
    True
    >>> len(digest([]))
    64

    ```
    Go BackOpen In Tab