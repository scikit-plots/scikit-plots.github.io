# FunctionTokenizer[#](#functiontokenizer "Link to this heading")

class scikitplot.corpus.FunctionTokenizer(**fn**, **name='custom'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L279)[#](#scikitplot.corpus.FunctionTokenizer "Link to this definition")
:   Wrap any `Callable[[str], list[str]]` as a [`TokenizerProtocol`](scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus.TokenizerProtocol").

    Parameters:
    :   ****fn****Callable[[str], list[str]]
        :   Tokenization function. Must accept a single `str` argument
            and return a `list[str]`.

        ****name****str, optional
        :   Human-readable name for logging and `repr`.

    Parameters:
    :   * ****fn**** (**Callable****[****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****,** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]**)
        * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Notes

    ****User note:**** Use this to plug in any tokenization library:

    ```
    import MeCab

    tagger = MeCab.Tagger("-Owakati")
    tok = FunctionTokenizer(lambda text: tagger.parse(text).strip().split())

    import jieba

    tok = FunctionTokenizer(lambda text: list(jieba.cut(text)))

    ```

    ****Developer note:**** The wrapper stores only the callable; no model
    loading happens at construction time.

    Examples

    Try it in your browser!
    ```
    >>> tok = FunctionTokenizer(str.split)
    >>> tok.tokenize("hello world")
    ['hello', 'world']
    >>> tok = FunctionTokenizer(lambda t: list(t), name="char_splitter")
    >>> tok.tokenize("abc")
    ['a', 'b', 'c']

    ```
    Go BackOpen In Tab

    tokenize(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L330)[#](#scikitplot.corpus.FunctionTokenizer.tokenize "Link to this definition")
    :   Tokenize **text** using the wrapped callable.

        Parameters:
        :   ****text****str
            :   Input text.

        Returns:
        :   list[str]
            :   Token list.

        Raises:
        :   TypeError
            :   If the wrapped callable does not return a list.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]