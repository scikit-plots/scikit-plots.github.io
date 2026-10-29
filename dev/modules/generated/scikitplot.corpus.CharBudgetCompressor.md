# CharBudgetCompressor[#](#charbudgetcompressor "Link to this heading")

class scikitplot.corpus.CharBudgetCompressor(**max\_chars**, **whole\_words=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L523)[#](#scikitplot.corpus.CharBudgetCompressor "Link to this definition")
:   Keep each hit’s text, best first, until a character budget is spent.

    Parameters:
    :   ****max\_chars****int
        :   Characters of source text the context may hold in total.

        ****whole\_words****bool, default=True
        :   Cut a partly kept hit at its last whitespace character
            ([`str.isspace`](https://docs.python.org/3/builtins/stdtypes.html#str.isspace "(in Python v3.15)")) within the budget, so no word is split; a hit
            whose first word does not fit keeps nothing. Text without whitespace
            (Chinese, Japanese) is then kept only whole: use `False` for it.

    Parameters:
    :   * ****max\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****whole\_words**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User.**** Deterministic and order-preserving: hits are kept in rank order
    and each keeps one span from the start of its text. Hits after the budget
    is spent keep nothing.

    Examples

    Try it in your browser!
    ```
    >>> class Doc:
    ...     def __init__(self, text):
    ...         self.text = text
    >>> class Hit:
    ...     def __init__(self, text):
    ...         self.doc = Doc(text)
    >>> CharBudgetCompressor(12)("q", [Hit("alpha beta"), Hit("gamma delta")])
    [((0, 10),), ()]

    ```
    Go BackOpen In Tab

    \_\_call\_\_(**query**, **hits**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L564)[#](#scikitplot.corpus.CharBudgetCompressor.__call__ "Link to this definition")
    :   Return one tuple of spans per hit.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****hits**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")], …]]

    max\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L523)[#](#scikitplot.corpus.CharBudgetCompressor.max_chars "Link to this definition")

    whole\_words: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.CharBudgetCompressor.whole_words "Link to this definition")