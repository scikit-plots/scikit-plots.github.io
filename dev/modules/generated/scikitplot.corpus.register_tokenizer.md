# register\_tokenizer[#](#register-tokenizer "Link to this heading")

scikitplot.corpus.register\_tokenizer(**name**, **tokenizer**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L709)[#](#scikitplot.corpus.register_tokenizer "Link to this definition")
:   Register a named [`TokenizerProtocol`](scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus.TokenizerProtocol") implementation.

    Parameters:
    :   ****name****str
        :   Registry key.

        ****tokenizer****TokenizerProtocol
        :   Tokenizer instance.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****tokenizer**** ([**TokenizerProtocol**](scikitplot.corpus.TokenizerProtocol.html#scikitplot.corpus.TokenizerProtocol "scikitplot.corpus._chunkers._custom_tokenizer.TokenizerProtocol"))

    Return type:
    :   None

    Examples

    Try it in your browser!
    ```
    >>> register_tokenizer("jieba", FunctionTokenizer(lambda t: t.split()))
    >>> get_tokenizer("jieba").tokenize("hello world")
    ['hello', 'world']

    ```
    Go BackOpen In Tab