# \_split\_cjk\_chars\_legacy[#](#split-cjk-chars-legacy "Link to this heading")

scikitplot.corpus.\_split\_cjk\_chars\_legacy(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1469)[#](#scikitplot.corpus._split_cjk_chars_legacy "Link to this definition")
:   Legacy codepoint-level CJK splitting (pre-Layer-0 implementation).

    Kept as a fallback when the `regex` library is not installed.
    Identical behaviour to the original `split_cjk_chars` — iterates
    raw codepoints and is NOT grapheme-cluster-safe.

    Parameters:
    :   ****text****str
        :   Input text.

    Returns:
    :   list[str]
        :   Mixed token list (CJK chars + non-CJK words).

    Parameters:
    :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Notes

    ****Developer note:**** Do not call this directly in new code.
    [`split_cjk_chars`](scikitplot.corpus.split_cjk_chars.html#scikitplot.corpus.split_cjk_chars "scikitplot.corpus.split_cjk_chars") dispatches here automatically when `regex`
    is unavailable.