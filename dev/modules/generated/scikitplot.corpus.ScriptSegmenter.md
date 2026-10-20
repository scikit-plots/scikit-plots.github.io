# ScriptSegmenter[#](#scriptsegmenter "Link to this heading")

class scikitplot.corpus.ScriptSegmenter(**\***, **min\_span\_chars=1**, **inherit\_direction=True**, **unknown\_script\_warning=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1603)[#](#scikitplot.corpus.ScriptSegmenter "Link to this definition")
:   Segment NFC-normalised text into contiguous Unicode script spans.

    Uses `regex` Unicode Script property matching (`\p{Script=X}`)
    rather than hard-coded codepoint ranges, so it automatically supports
    new scripts added by future Unicode versions.

    Common and Inherited codepoints (punctuation, combining marks) attach
    to the preceding script span. If no preceding span exists they attach
    to the following span.

    Parameters:
    :   ****min\_span\_chars****int, optional
        :   Minimum grapheme count for a span to be emitted as a standalone
            span. Spans shorter than this are merged into the adjacent
            dominant span. Default 1 (no merging).

        ****inherit\_direction****bool, optional
        :   Common / Inherited codepoints inherit direction from the adjacent
            span. Default `True`.

        ****unknown\_script\_warning****bool, optional
        :   Emit a `logger.warning` when a codepoint’s script property is not
            in the known `ScriptType` enum. Default `True`.
            The span is still produced with [`ScriptType.UNKNOWN`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType.UNKNOWN "scikitplot.corpus.ScriptType.UNKNOWN").

    Raises:
    :   ImportError
        :   If the `regex` (PyPI) library is not installed. Message includes
            the exact `pip install regex` command.

    Parameters:
    :   * ****min\_span\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****inherit\_direction**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****unknown\_script\_warning**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User note:**** Install `regex` with `pip install regex` before using
    this class. It is the only external dependency of Layer 1.

    ****Developer note:**** Uses `regex` Unicode property syntax. All spans
    are produced in logical (storage) order — never reordered.
    `ScriptSegmenter` is stateless; all state lives in local variables
    within [`segment`](#scikitplot.corpus.ScriptSegmenter.segment "scikitplot.corpus.ScriptSegmenter.segment").

    Idempotency guarantee:
    :   Segmenting already-NFC text twice produces identical spans.

    References

    UAX #24 (Script Property): <https://unicode.org/reports/tr24/>
    regex library: <https://pypi.org/project/regex/>

    Examples

    Try it in your browser!
    ```
    >>> seg = ScriptSegmenter()
    >>> spans = seg.segment("Hello مرحبا world")
    >>> [s.script.value for s in spans]
    ['latin', 'arabic', 'latin']

    ```
    Go BackOpen In Tab

    DIRECTION\_MAP: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]] = {'arabic': 'rtl', 'armenian': 'ltr', 'cjk': 'ltr', 'cyrillic': 'ltr', 'devanagari': 'ltr', 'egyptian': 'ltr', 'egyptian\_hieroglyphs': 'ltr', 'emoji': 'ltr', 'ethiopic': 'ltr', 'georgian': 'ltr', 'greek': 'ltr', 'han': 'ltr', 'hangul': 'ltr', 'hebrew': 'rtl', 'hiragana': 'ltr', 'katakana': 'ltr', 'khmer': 'ltr', 'latin': 'ltr', 'mixed': 'ltr', 'mongolian': 'ttb', 'myanmar': 'ltr', 'south\_asian': 'ltr', 'southeast\_asian': 'ltr', 'symbolic': 'ltr', 'thai': 'ltr', 'tibetan': 'ltr', 'unknown': 'ltr'}[#](#scikitplot.corpus.ScriptSegmenter.DIRECTION_MAP "Link to this definition")

    SCRIPT\_PROPERTY\_MAP: [ClassVar](https://docs.python.org/3/library/typing.html#typing.ClassVar "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]] = {'Arabic': 'arabic', 'Armenian': 'armenian', 'Common': '\_common', 'Coptic': 'egyptian', 'Cyrillic': 'cyrillic', 'Devanagari': 'devanagari', 'Egyptian\_Hieroglyphs': 'egyptian\_hieroglyphs', 'Ethiopic': 'ethiopic', 'Georgian': 'georgian', 'Greek': 'greek', 'Han': 'han', 'Hangul': 'hangul', 'Hebrew': 'hebrew', 'Hiragana': 'hiragana', 'Inherited': '\_inherited', 'Kannada': 'south\_asian', 'Katakana': 'katakana', 'Khmer': 'khmer', 'Lao': 'southeast\_asian', 'Latin': 'latin', 'Malayalam': 'south\_asian', 'Mongolian': 'mongolian', 'Myanmar': 'myanmar', 'Sinhala': 'south\_asian', 'Tamil': 'south\_asian', 'Telugu': 'south\_asian', 'Thai': 'thai', 'Tibetan': 'tibetan'}[#](#scikitplot.corpus.ScriptSegmenter.SCRIPT_PROPERTY_MAP "Link to this definition")

    segment(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1795)[#](#scikitplot.corpus.ScriptSegmenter.segment "Link to this definition")
    :   Segment **text** into contiguous [`ScriptSpan`](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus.ScriptSpan") objects.

        Parameters:
        :   ****text****str
            :   NFC-normalised input text. Run
                [`GraphemeClusterNormalizer`](scikitplot.corpus.GraphemeClusterNormalizer.html#scikitplot.corpus.GraphemeClusterNormalizer "scikitplot.corpus._normalizers._normalizer.GraphemeClusterNormalizer")
                first for correctness on non-Latin scripts.

        Returns:
        :   list[ScriptSpan]
            :   Non-empty list of spans in logical order. Returns a single
                [`ScriptType.UNKNOWN`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType.UNKNOWN "scikitplot.corpus.ScriptType.UNKNOWN") span for empty input.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ScriptSpan**](scikitplot.corpus.ScriptSpan.html#scikitplot.corpus.ScriptSpan "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSpan")]

        Notes

        ****Developer note:**** Common / Inherited codepoints (punctuation,
        diacritics) are attributed to the preceding span; if there is no
        preceding span they are deferred and attributed to the next span.
        Whitespace-only spans are attributed to `_common` and merged
        into adjacent spans.