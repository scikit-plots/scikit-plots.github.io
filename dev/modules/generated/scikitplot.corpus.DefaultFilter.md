# DefaultFilter[#](#defaultfilter "Link to this heading")

class scikitplot.corpus.DefaultFilter(**min\_words=3**, **min\_chars=10**, **word\_count='script'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L628)[#](#scikitplot.corpus.DefaultFilter "Link to this definition")
:   Standard noise filter ported and improved from remarx’s `include_sentence`.

    Rejects a document when ****any**** of the following is true:

    1. The text contains no Unicode letter characters (punctuation/digit-only).
    2. The word count is less than `min_words`.
    3. The character count (after stripping) is less than `min_chars`.

    Parameters:
    :   ****min\_words****int, optional
        :   Minimum number of words, counted as `word_count` says. Default:
            `3`.

        ****min\_chars****int, optional
        :   Minimum number of non-whitespace characters. Default: `10`.

        ****word\_count****{“script”, “whitespace”} or callable, optional
        :   How words are counted. `"script"` uses `_count_words`: the
            whitespace tokens of scripts that separate words with spaces, and
            one word per character of Chinese, Japanese, Thai, Lao, Khmer,
            Myanmar and Tibetan, which do not. `"whitespace"` counts
            `str.split()` tokens, so a document in those scripts counts as
            one word and is dropped. A callable `word_count(text) -> int`
            counts in its own way (a word segmenter, for example). Default:
            `"script"`.

    Parameters:
    :   * ****min\_words**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****min\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****word\_count**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    Notes

    The letter check uses `re.compile(r'[^\\W\\d_]', re.UNICODE)` which
    matches any Unicode letter (including accented and non-Latin characters)
    while excluding digits and underscore. This is more robust than
    remarx’s original `^[\\W\\d]+$` which could pass on some Unicode input\_path.

    Examples

    Try it in your browser!
    ```
    >>> f = DefaultFilter(min_words=3, min_chars=10)
    >>> doc_ok = CorpusDocument.create("f.txt", 0, "Hello world test.")
    >>> doc_noise = CorpusDocument.create("f.txt", 1, "p. 56, 57.")
    >>> f.include(doc_ok)
    True
    >>> f.include(doc_noise)
    False

    ```
    Go BackOpen In Tab

    include(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_base.py#L724)[#](#scikitplot.corpus.DefaultFilter.include "Link to this definition")
    :   Return `True` if `doc` passes all noise checks.

        Parameters:
        :   ****doc****CorpusDocument
            :   Document to evaluate.

        Returns:
        :   bool
            :   `True` to include; `False` to discard.

        Parameters:
        :   ****doc**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

        Notes

        Character count is measured on the stripped text to avoid counting
        surrounding whitespace as content.

    min\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.DefaultFilter.min_chars "Link to this definition")

    min\_words: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.DefaultFilter.min_words "Link to this definition")

    word\_count: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][#](#scikitplot.corpus.DefaultFilter.word_count "Link to this definition")