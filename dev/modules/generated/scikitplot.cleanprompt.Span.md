# Span[#](#span "Link to this heading")

class scikitplot.cleanprompt.Span(**start**, **end**, **kind**, **text**, **detector**, **priority=0**, **confidence=1.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_types.py#L48)[#](#scikitplot.cleanprompt.Span "Link to this definition")
:   A half-open `[start, end)` character interval flagged by one detector.

    Parameters:
    :   ****start****int
        :   Inclusive start offset into the original text. Must be `>= 0`.

        ****end****int
        :   Exclusive end offset. Must be `> start`.

        ****kind****str
        :   Category label used to build the placeholder, for example `"EMAIL"`.
            Must be non-empty and contain no placeholder delimiter characters.

        ****text****str
        :   The matched surface, exactly as it appears in the original.

        ****detector****str
        :   Name of the detector that produced this span.

        ****priority****int, default=0
        :   Arbitration weight. Higher wins under
            `PRIORITY_WINS`.

        ****confidence****float, default=1.0
        :   Detector-reported confidence in `[0.0, 1.0]`. Carried for reporting
            and filtering; it never silently drops a span.

    Raises:
    :   ValueError
        :   If the interval is empty or negative, if `kind` is empty, or if
            `confidence` is outside `[0.0, 1.0]`.

    Parameters:
    :   * ****start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****end**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****detector**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****priority**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    Notes

    ****Developer notes.**** The field order gives a meaningful `order=True`: spans
    sort by start, then by end. Resolution relies on that natural order and then
    applies its own tie-breaks, so sorting is stable and reproducible across
    processes regardless of hash randomisation.

    Examples

    Try it in your browser!
    ```
    >>> Span(0, 5, "EMAIL", "a@b.c", "email").length
    5

    ```
    Go BackOpen In Tab

    confidence: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.cleanprompt.Span.confidence "Link to this definition")

    detector: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_types.py#L48)[#](#scikitplot.cleanprompt.Span.detector "Link to this definition")

    end: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_types.py#L48)[#](#scikitplot.cleanprompt.Span.end "Link to this definition")

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_types.py#L48)[#](#scikitplot.cleanprompt.Span.kind "Link to this definition")

    property length: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.cleanprompt.Span.length "Link to this definition")
    :   Number of characters covered by this span.

        Type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    overlaps(**other**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_types.py#L119)[#](#scikitplot.cleanprompt.Span.overlaps "Link to this definition")
    :   Return whether this span shares at least one character with `other`.

        Parameters:
        :   ****other****Span
            :   The span to test against.

        Returns:
        :   bool
            :   `True` when the half-open intervals intersect.

        Parameters:
        :   ****other**** ([**Span**](#scikitplot.cleanprompt.Span "scikitplot.cleanprompt._types.Span"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    priority: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.cleanprompt.Span.priority "Link to this definition")

    start: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_types.py#L48)[#](#scikitplot.cleanprompt.Span.start "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_types.py#L48)[#](#scikitplot.cleanprompt.Span.text "Link to this definition")