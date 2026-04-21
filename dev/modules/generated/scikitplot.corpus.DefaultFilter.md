# DefaultFilter[#](#defaultfilter "Link to this heading")

class scikitplot.corpus.DefaultFilter(**min\_words=3**, **min\_chars=10**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_base.py#L335)[#](#scikitplot.corpus.DefaultFilter "Link to this definition")
:   Standard noise filter ported and improved from remarx’s `include_sentence`.

    Rejects a document when ****any**** of the following is true:

    1. The text contains no Unicode letter characters (punctuation/digit-only).
    2. The whitespace-delimited token count is less than `min_words`.
    3. The character count (after stripping) is less than `min_chars`.

    Parameters:
    :   ****min\_words****int, optional
        :   Minimum number of whitespace-delimited tokens. Default: `3`.

        ****min\_chars****int, optional
        :   Minimum number of non-whitespace characters. Default: `10`.

    Parameters:
    :   * ****min\_words**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****min\_chars**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

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

    include(**doc**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/corpus/_base.py#L392)[#](#scikitplot.corpus.DefaultFilter.include "Link to this definition")
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
        :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

        Notes

        Character count is measured on the stripped text to avoid counting
        surrounding whitespace as content.

    min\_chars: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.DefaultFilter.min_chars "Link to this definition")

    min\_words: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.DefaultFilter.min_words "Link to this definition")