# Entry[#](#entry "Link to this heading")

class scikitplot.cleanprompt.Entry(**label**, **kind**, **ordinal**, **original**, **occurrences**, **detector**, **confidence=1.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L136)[#](#scikitplot.cleanprompt.Entry "Link to this definition")
:   One resolved detection and the placeholder label assigned to it.

    Parameters:
    :   ****label****str
        :   The rendered placeholder, for example `"[EMAIL-1]"`.

        ****kind****str
        :   Category of the detection.

        ****ordinal****int
        :   1-based index within `kind`, in first-appearance order.

        ****original****str
        :   The secret surface this label stands for.

        ****occurrences****tuple of tuple of int
        :   Every `(start, end)` offset in the original text that this label
            replaced, in ascending order.

        ****detector****str
        :   Name of the detector that produced the first occurrence.

        ****confidence****float
        :   Confidence of the first occurrence.

    Parameters:
    :   * ****label**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****ordinal**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****original**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****occurrences**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]****,** **...****]**)
        * ****detector**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Notes

    ****Developer notes.**** One [`Entry`](#scikitplot.cleanprompt.Entry "scikitplot.cleanprompt.Entry") per **distinct value**, not per
    occurrence: repeating a name ten times yields one entry with ten
    occurrences and one label. That is what makes the redacted text readable to
    a language model, and it is why `occurrences` is a tuple rather than a
    single offset pair.

    confidence: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.cleanprompt.Entry.confidence "Link to this definition")

    property count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.cleanprompt.Entry.count "Link to this definition")
    :   How many times this value was replaced.

        Type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    detector: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L136)[#](#scikitplot.cleanprompt.Entry.detector "Link to this definition")

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L136)[#](#scikitplot.cleanprompt.Entry.kind "Link to this definition")

    label: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L136)[#](#scikitplot.cleanprompt.Entry.label "Link to this definition")

    occurrences: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L136)[#](#scikitplot.cleanprompt.Entry.occurrences "Link to this definition")

    ordinal: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L136)[#](#scikitplot.cleanprompt.Entry.ordinal "Link to this definition")

    original: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L136)[#](#scikitplot.cleanprompt.Entry.original "Link to this definition")