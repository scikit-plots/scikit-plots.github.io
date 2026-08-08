# split\_cjk\_chars[#](#split-cjk-chars "Link to this heading")

scikitplot.corpus.split\_cjk\_chars(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1314)[#](#scikitplot.corpus.split_cjk_chars "Link to this definition")
:   Split **text** into individual CJK character tokens.

    Non-CJK runs (Latin words, numbers, spaces) are kept as contiguous
    tokens split on whitespace. This produces a mixed token list where
    each CJK ideograph is its own token and each Latin/numeric word is
    its own token.

    When the `regex` library (PyPI) is installed, iteration is over
    grapheme clusters (`\X`), which is safe for ZWJ emoji sequences,
    Devanagari conjuncts, and any multi-codepoint grapheme that might
    occur in mixed-script text. When `regex` is unavailable the
    legacy codepoint-level implementation is used automatically via
    `_split_cjk_chars_legacy`.

    Parameters:
    :   ****text****str
        :   Input text that may contain CJK characters (NFC normalized for
            best results when non-CJK grapheme clusters are present).

    Returns:
    :   list[str]
        :   Mixed token list; external API is unchanged from the legacy version.

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

    ****Developer note:**** Bug 3 fix — the original implementation iterated
    raw codepoints via `for ch in text:`, which is not grapheme-cluster-
    safe. After Layer 0 (GraphemeClusterNormalizer) is applied, use the
    `regex` path. The legacy path is preserved as
    `_split_cjk_chars_legacy` for environments without `regex`.

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