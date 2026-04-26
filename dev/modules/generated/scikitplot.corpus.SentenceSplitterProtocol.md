# SentenceSplitterProtocol[#](#sentencesplitterprotocol "Link to this heading")

class scikitplot.corpus.SentenceSplitterProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L159)[#](#scikitplot.corpus.SentenceSplitterProtocol "Link to this definition")
:   Structural protocol for sentence segmenters.

    Any object with a `split(text: str) -> list[str]` method satisfies
    this protocol.

    Examples

    Try it in your browser!
    ```
    >>> class MySplitter:
    ...     def split(self, text: str) -> list:
    ...         return text.split(". ")
    >>> isinstance(MySplitter(), SentenceSplitterProtocol)
    True

    ```
    Go BackOpen In Tab

    split(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L175)[#](#scikitplot.corpus.SentenceSplitterProtocol.split "Link to this definition")
    :   Split **text** into sentences.

        Parameters:
        :   ****text****str
            :   Raw document text.

        Returns:
        :   list[str]
            :   Sentence strings.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]