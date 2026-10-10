# resolve\_spans[#](#resolve-spans "Link to this heading")

scikitplot.cleanprompt.resolve\_spans(**spans**, **policy=RedactionPolicy(kinds=None**, **allow=()**, **tag\_style=TagStyle(prefix='['**, **suffix=']'**, **separator='-'**, **uppercase\_kind=True**, **style='placeholder'**, **surrogates=None)**, **overlap=<OverlapStrategy.LONGEST\_WINS: 'LONGEST\_WINS'>**, **limits=Limits(max\_input\_chars=1000000**, **max\_spans=100000**, **max\_entries=50000**, **max\_literal\_terms=10000**, **max\_literal\_length=4096)**, **case\_insensitive=False**, **min\_confidence=0.0**, **preserve\_placeholders=True)**, **text=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_engine.py#L174)[#](#scikitplot.cleanprompt.resolve_spans "Link to this definition")
:   Reduce possibly overlapping spans to a disjoint, ascending sequence.

    Parameters:
    :   ****spans****iterable of Span
        :   Detections over one text. May overlap in any pattern.

        ****policy****RedactionPolicy, default=DEFAULT\_POLICY
        :   Supplies `overlap`.

        ****text****str, optional
        :   The source text the spans index into. Required only when a cluster has
            to be merged, because the merged span’s
            `text` must be the real
            surface rather than a member’s.

    Returns:
    :   tuple of Span
        :   Pairwise disjoint spans in ascending start order. Every returned span’s
            `text` equals `text[start:end]` when `text` was supplied.

    Raises:
    :   OverlapError
        :   If two spans overlap and the strategy is
            `STRICT`.

        PolicyError
        :   If a cluster must be merged but `text` was not supplied.

    Parameters:
    :   * ****spans**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[****Span****]**)
        * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))
        * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[**Span**, …]

    Notes

    ****Developer notes.**** The guarantee is **coverage preservation**: every
    character covered by any input span is covered by exactly one output span.
    That is what makes the redaction safe under partial overlap, and it is
    checked directly by `test__engine.py::test_resolution_preserves_coverage`.

    Identical duplicate spans from two detectors collapse into one cluster and
    therefore into one output span, so a value matched by both a pattern and a
    literal term is replaced once.

    Examples

    Try it in your browser!
    ```
    >>> a = Span(0, 10, "URL", "x" * 10, "regex:URL")
    >>> b = Span(4, 8, "EMAIL", "x" * 4, "regex:EMAIL")
    >>> [(s.start, s.end, s.kind) for s in resolve_spans([a, b])]
    [(0, 10, 'URL')]

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop