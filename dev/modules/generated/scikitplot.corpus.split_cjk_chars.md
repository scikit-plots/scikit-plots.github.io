# split\_cjk\_chars[#](#split-cjk-chars "Link to this heading")

scikitplot.corpus.split\_cjk\_chars(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1133)[#](#scikitplot.corpus.split_cjk_chars "Link to this definition")
:   Split **text** into individual CJK character tokens.

    Non-CJK runs (Latin words, numbers, spaces) are kept as contiguous
    tokens split on whitespace. This produces a mixed token list where
    each CJK ideograph is its own token and each Latin/numeric word is
    its own token.

    Parameters:
    :   ****text****str
        :   Input text that may contain CJK characters.

    Returns:
    :   list[str]
        :   Mixed token list.

    Parameters:
    :   ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    Notes

    ****User note:**** This is the recommended tokenization strategy for
    Chinese, Japanese (without furigana), and Korean when a dedicated
    morphological analyser (MeCab, jieba, kss) is not available.
    Character-level tokenization loses word-level semantics but ensures
    that CJK text is not treated as one giant “word” by whitespace
    splitters.

    ****Developer note:**** Used by `_tokenize_whitespace`
    when `unit=TOKENS` and the text is detected as CJK.

    Examples

    Try it in your browser!
    ```
    >>> split_cjk_chars("你好 world 再见")
    ['你', '好', 'world', '再', '见']
    >>> split_cjk_chars("Hello world")
    ['Hello', 'world']
    >>> split_cjk_chars("abc 日本語 123")
    ['abc', '日', '本', '語', '123']

    ```
    Go BackOpen In Tab