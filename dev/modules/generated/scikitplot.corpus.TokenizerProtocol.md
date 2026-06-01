# TokenizerProtocol[#](#tokenizerprotocol "Link to this heading")

class scikitplot.corpus.TokenizerProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/829d7a7/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L142)[#](#scikitplot.corpus.TokenizerProtocol "Link to this definition")
:   Structural protocol for word tokenizers.

    Any object with a `tokenize(text: str) -> list[str]` method satisfies
    this protocol, regardless of inheritance. This includes MeCab wrappers,
    jieba objects, camel-tools tokenizers, Stanza pipelines, HuggingFace
    fast tokenizers, and plain callable wrappers via [`FunctionTokenizer`](scikitplot.corpus.FunctionTokenizer.html#scikitplot.corpus.FunctionTokenizer "scikitplot.corpus.FunctionTokenizer").

    Parameters:
    :   ****(none at construction time — protocols define the \*call\* interface)****

    Examples

    Try it in your browser!
    ```
    >>> class MyTok:
    ...     def tokenize(self, text: str) -> list:
    ...         return text.split()
    >>> isinstance(MyTok(), TokenizerProtocol)
    True

    ```
    Go BackOpen In Tab

    tokenize(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/829d7a7/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L164)[#](#scikitplot.corpus.TokenizerProtocol.tokenize "Link to this definition")
    :   Tokenize **text** into a list of token strings.

        Parameters:
        :   ****text****str
            :   Raw input text.

        Returns:
        :   list[str]
            :   Token list. Empty list for empty input.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]