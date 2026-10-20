# RegexDetector[#](#regexdetector "Link to this heading")

class scikitplot.cleanprompt.RegexDetector(**spec**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L140)[#](#scikitplot.cleanprompt.RegexDetector "Link to this definition")
:   Detector backed by one entry of the pattern library.

    Parameters:
    :   ****spec****PatternSpec
        :   The pattern specification. Its `kind`, `priority` and `confidence`
            become the detector’s.

    Parameters:
    :   ****spec**** ([**PatternSpec**](scikitplot.cleanprompt.PatternSpec.html#scikitplot.cleanprompt.PatternSpec "scikitplot.cleanprompt.PatternSpec"))

    Notes

    ****Developer notes.**** A zero-width match cannot produce a
    `Span`, which requires `end > start`.
    Rather than let a pattern that can match empty silently produce nothing,
    such matches are skipped explicitly and the scan advances, so a pattern
    author sees “no detections” rather than an infinite loop.

    ****Validated patterns are not scanned with**** [`re.Pattern.finditer`](https://docs.python.org/3/library/re.html#re.Pattern.finditer "(in Python v3.15)").
    `finditer` consumes each match before the caller sees it and resumes from
    its end, so a match the validator later **rejects** has already swallowed the
    text it covered. Every shorter or later candidate beginning inside that
    span is then never tried.

    That is not a cosmetic difference; it loses detections and therefore leaks.
    Scanning `"123-45-6789 4242 4242 4242 4242"` for phone numbers, the greedy
    expression first matches `"123-45-6789 4242 4242"`, which the validator
    rejects for having nineteen digits. `finditer` then resumes past it, and
    the trailing `"4242 4242"` — a perfectly good match — is never offered, so
    those characters survive into the redacted output in the clear.

    So a validated pattern is scanned with [`re.Pattern.search`](https://docs.python.org/3/library/re.html#re.Pattern.search "(in Python v3.15)") from an
    explicit cursor, and at each start position the scanner looks for the
    longest match the validator **accepts**, not merely the longest match. When
    the greedy match is rejected, the window is shortened and the attempt is
    repeated at the same start before the start is advanced.

    That second step matters as much as the first, because a greedy expression
    over `digits separator digits` glues independent numbers together across
    a space. Scanning `"4477 555 010 4477 2024-01-15"`, the greedy match
    spans the whole string and is rejected for digit count; advancing past it
    finds `"010 4477 2024-01-15"`, which validates, and strands `"4477 555"`
    in the clear. Retrying shorter windows at the earliest start finds the
    intended number instead.

    ****Window boundaries are re-verified.**** Limiting a match with `endpos`
    makes the engine treat that offset as the end of the string, so a trailing
    `\b` or `(?!\w)` succeeds there even when the real text continues with
    a word character. Accepting such a match would cut a number in half and
    leave its tail in the clear. Each candidate ending before the end of the
    text is therefore re-matched with one further character visible, and is
    kept only if the engine still ends at the same offset. That is exact for
    the single-character trailing assertions this library uses — `\b`,
    `(?!\w)` and `(?![\w.])`; a pattern needing wider trailing context
    would have to widen this probe with it.

    Unvalidated patterns keep the cheaper `finditer`, since nothing can
    reject their matches.

    Examples

    Try it in your browser!
    ```
    >>> from ._patterns import get_pattern
    >>> from ._policy import DEFAULT_POLICY
    >>> detector = RegexDetector(get_pattern("EMAIL"))
    >>> [span.text for span in detector.detect("write to a@b.co", DEFAULT_POLICY)]
    ['a@b.co']

    ```
    Go BackOpen In Tab

    confidence[#](#scikitplot.cleanprompt.RegexDetector.confidence "Link to this definition")
    :   !! processed by numpydoc !!

    detect(**text**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L222)[#](#scikitplot.cleanprompt.RegexDetector.detect "Link to this definition")
    :   Yield one span per accepted match.

        Parameters:
        :   ****text****str
            :   The original text.

            ****policy****RedactionPolicy
            :   The active policy. Unused; present for protocol conformance.

        Yields:
        :   Span
            :   Accepted matches, in ascending start order.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.15)")[**Span**]

    kind[#](#scikitplot.cleanprompt.RegexDetector.kind "Link to this definition")
    :   !! processed by numpydoc !!

    name[#](#scikitplot.cleanprompt.RegexDetector.name "Link to this definition")
    :   !! processed by numpydoc !!

    priority[#](#scikitplot.cleanprompt.RegexDetector.priority "Link to this definition")
    :   !! processed by numpydoc !!

    reads\_view = True[#](#scikitplot.cleanprompt.RegexDetector.reads_view "Link to this definition")
    :   may read the detection view.

        Type:
        :   Offsets index the text given to `detect`

    spec[#](#scikitplot.cleanprompt.RegexDetector.spec "Link to this definition")
    :   !! processed by numpydoc !!

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases