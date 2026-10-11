# ScriptSpan[#](#scriptspan "Link to this heading")

class scikitplot.corpus.ScriptSpan(**text**, **script**, **direction**, **start**, **end**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1493)[#](#scikitplot.corpus.ScriptSpan "Link to this definition")
:   A contiguous span of text in a single Unicode script.

    Produced by [`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus.ScriptSegmenter") from NFC-normalised text.
    All index fields refer to grapheme cluster indices (as produced by
    `regex.findall(r'\X', nfc_text)`), not raw codepoint offsets.

    Parameters:
    :   ****text****str
        :   The span text (NFC normalised).

        ****script****ScriptType
        :   Detected script for this span.

        ****direction****str
        :   Writing direction: `"ltr"` | `"rtl"` | `"ttb"`.

        ****start****int
        :   Grapheme cluster index in the parent document (inclusive).

        ****end****int
        :   Grapheme cluster index in the parent document (exclusive).

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****script**** ([**ScriptType**](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType"))
        * ****direction**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****end**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    ****Developer note:**** Grapheme cluster indices (start, end) refer to the
    `regex.findall(r'\\X', nfc_text)` list produced by
    [`GraphemeClusterNormalizer`](scikitplot.corpus.GraphemeClusterNormalizer.html#scikitplot.corpus.GraphemeClusterNormalizer "scikitplot.corpus._normalizers._normalizer.GraphemeClusterNormalizer"), not
    codepoint offsets. A single emoji with ZWJ may span 3+ codepoints
    but occupies exactly 1 grapheme cluster index slot.

    Examples

    Try it in your browser!
    ```
    >>> span = ScriptSpan(
    ...     text="Hello", script=ScriptType.LATIN, direction="ltr", start=0, end=5
    ... )
    >>> span.script
    <ScriptType.LATIN: 'latin'>

    ```
    Go BackOpen In Tab

    direction: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1493)[#](#scikitplot.corpus.ScriptSpan.direction "Link to this definition")

    end: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1493)[#](#scikitplot.corpus.ScriptSpan.end "Link to this definition")

    script: [ScriptType](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1493)[#](#scikitplot.corpus.ScriptSpan.script "Link to this definition")

    start: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1493)[#](#scikitplot.corpus.ScriptSpan.start "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1493)[#](#scikitplot.corpus.ScriptSpan.text "Link to this definition")