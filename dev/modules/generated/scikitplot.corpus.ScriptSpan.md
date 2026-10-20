# ScriptSpan[#](#scriptspan "Link to this heading")

class scikitplot.corpus.ScriptSpan(**text**, **script**, **direction**, **start**, **end**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1558)[#](#scikitplot.corpus.ScriptSpan "Link to this definition")
:   A contiguous span of text in a single Unicode script.

    Produced by [`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus.ScriptSegmenter") from NFC-normalised text. The
    index fields are character (codepoint) offsets into the segmented text.

    Parameters:
    :   ****text****str
        :   The span text (NFC normalised).

        ****script****ScriptType
        :   Detected script for this span.

        ****direction****str
        :   Writing direction: `"ltr"` | `"rtl"` | `"ttb"`.

        ****start****int
        :   Character offset of the span in the segmented text (inclusive).

        ****end****int
        :   Character offset of the span in the segmented text (exclusive);
            `text == segmented_text[start:end]`.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****script**** ([**ScriptType**](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType"))
        * ****direction**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****end**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    ****Developer note:**** The offsets are character (codepoint) offsets, the
    unit every `Chunk` built from a span uses. They used to
    be documented as grapheme-cluster indices, which no consumer used as
    such: a span after an emoji or a combining mark pointed at the wrong
    characters. A span never splits a grapheme cluster.

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

    direction: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1558)[#](#scikitplot.corpus.ScriptSpan.direction "Link to this definition")

    end: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1558)[#](#scikitplot.corpus.ScriptSpan.end "Link to this definition")

    script: [ScriptType](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1558)[#](#scikitplot.corpus.ScriptSpan.script "Link to this definition")

    start: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1558)[#](#scikitplot.corpus.ScriptSpan.start "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1558)[#](#scikitplot.corpus.ScriptSpan.text "Link to this definition")