# query\_tokens[#](#query-tokens "Link to this heading")

scikitplot.corpus.query\_tokens(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_routing.py#L90)[#](#scikitplot.corpus.query_tokens "Link to this definition")
:   Return the words a routing rule matches against.

    Parameters:
    :   ****query****str
        :   The query text.

    Returns:
    :   tuple of str
        :   Lowercase `[a-z0-9]+('[a-z]+)?` tokens, in order.

    Raises:
    :   TypeError
        :   If `query` is not a string.

    Parameters:
    :   ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    Examples

    Try it in your browser!
    ```
    >>> query_tokens("Isn't it in Section 2?")
    ("isn't", 'it', 'in', 'section', '2')

    ```
    Go BackOpen In Tab