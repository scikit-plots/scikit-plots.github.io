# ContextPassage[#](#contextpassage "Link to this heading")

class scikitplot.corpus.ContextPassage(**hit**, **spans**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L325)[#](#scikitplot.corpus.ContextPassage "Link to this definition")
:   The context a compressor kept from one hit.

    Parameters:
    :   ****hit****PlannedHit
        :   The hit.

        ****spans****tuple of (int, int)
        :   Ordered, non-overlapping character ranges of `hit.doc.text`.

    Parameters:
    :   * ****hit**** ([**PlannedHit**](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit"))
        * ****spans**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]****,** **...****]**)

    Notes

    ****User.**** [`text`](#scikitplot.corpus.ContextPassage.text "scikitplot.corpus.ContextPassage.text") is the spans’ text joined by newlines, so every
    character of a passage is a character of its source at a known offset.

    property chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.ContextPassage.chars "Link to this definition")
    :   Characters of source kept (separators not counted).

    hit: [PlannedHit](scikitplot.corpus.PlannedHit.html#scikitplot.corpus.PlannedHit "scikitplot.corpus._execution.PlannedHit")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L325)[#](#scikitplot.corpus.ContextPassage.hit "Link to this definition")

    spans: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_execution.py#L325)[#](#scikitplot.corpus.ContextPassage.spans "Link to this definition")

    property text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.ContextPassage.text "Link to this definition")
    :   each span of the source, joined by newlines.

        Type:
        :   The kept text