# is\_cjk\_char[#](#is-cjk-char "Link to this heading")

scikitplot.corpus.is\_cjk\_char(**ch**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1197)[#](#scikitplot.corpus.is_cjk_char "Link to this definition")
:   Return `True` if **ch** is a CJK / Japanese / Korean character.

    Parameters:
    :   ****ch****str
        :   Single character.

    Returns:
    :   bool
        :   `True` for CJK ideographs, hiragana, katakana, hangul.

    Parameters:
    :   ****ch**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> is_cjk_char("字")
    True
    >>> is_cjk_char("A")
    False
    >>> is_cjk_char("あ")
    True

    ```
    Go BackOpen In Tab