# context\_texts[#](#context-texts "Link to this heading")

scikitplot.corpus.context\_texts(**contexts**, **\***, **label='contexts'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_judge.py#L399)[#](#scikitplot.corpus.context_texts "Link to this definition")
:   Return the texts of retrieved contexts, in order.

    Parameters:
    :   ****contexts****iterable
        :   Strings, search hits (`hit.doc.text`), documents (`doc.text`) or
            mappings with a `"text"` key. A single `str` is refused: it would
            otherwise be read one character at a time.

        ****label****str, default=”contexts”
        :   Name used in error messages.

    Returns:
    :   tuple of str

    Raises:
    :   TypeError
        :   For a `str`, a non-iterable, or an item without text.

    Parameters:
    :   * ****contexts**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****label**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    Examples

    Try it in your browser!
    ```
    >>> context_texts(["Paris is in France.", {"text": "Lyon too."}])
    ('Paris is in France.', 'Lyon too.')

    ```
    Go BackOpen In Tab