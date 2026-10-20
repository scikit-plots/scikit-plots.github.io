# LiteralDetector[#](#literaldetector "Link to this heading")

class scikitplot.cleanprompt.LiteralDetector(**terms**, **kind='CUSTOM'**, **name=None**, **priority=75**, **word\_boundary=False**, **ignore\_case=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L332)[#](#scikitplot.cleanprompt.LiteralDetector "Link to this definition")
:   Detector for exact strings the caller names.

    Parameters:
    :   ****terms****iterable of str
        :   Strings to hide. Empty and whitespace-only terms are rejected.

        ****kind****str, default=’CUSTOM’
        :   Category for every match.

        ****name****str, optional
        :   Detector name. Defaults to `"literal:<kind>"`.

        ****priority****int, default=75
        :   Arbitration weight. Above the structural patterns by default, because a
            caller naming a term explicitly has expressed stronger intent than a
            generic pattern.

        ****word\_boundary****bool, default=False
        :   When `True`, a term matches only at word boundaries.

        ****ignore\_case****bool, default=False
        :   When `True`, terms match regardless of case. Normally supplied from
            `case_insensitive`
            so that one setting governs both halves of “case is not significant”:
            which surfaces **match**, and which surfaces **share a label**. Implementing
            only the second half would silently ignore `--hide acme` against the
            text `Acme`.

    Raises:
    :   PolicyError
        :   If a term is empty or whitespace-only.

    Parameters:
    :   * ****terms**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****priority**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****word\_boundary**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****ignore\_case**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User notes.**** This is the “additional words to hide” feature. Terms are
    matched literally, not as regular expressions, so `a.b` matches exactly
    `a.b` and not `axb`.

    ****Developer notes.**** Two properties matter here, and both were absent
    upstream.

    **Longest-first alternation.** Terms are sorted by descending length inside
    one alternation, so scanning `"Ann met Anna"` for `["Ann", "Anna"]`
    matches `Anna` at its position rather than `Ann` followed by a stranded
    `a`. Upstream rewrote the string once per term with [`str.replace`](https://docs.python.org/3/builtins/stdtypes.html#str.replace "(in Python v3.15)")
    and produced `"[ADDITIONAL-1] met [ADDITIONAL-1]a"` — defect `CP-001`,
    which both corrupts the text and leaks the final `a` of the secret.

    **One pass.** All terms are scanned in a single alternation, so cost is linear
    in the text rather than linear in `len(text) * len(terms)`.

    Examples

    Try it in your browser!
    ```
    >>> from ._policy import DEFAULT_POLICY
    >>> detector = LiteralDetector(["Ann", "Anna"])
    >>> [(s.start, s.text) for s in detector.detect("Ann met Anna", DEFAULT_POLICY)]
    [(0, 'Ann'), (8, 'Anna')]

    ```
    Go BackOpen In Tab

    confidence[#](#scikitplot.cleanprompt.LiteralDetector.confidence "Link to this definition")
    :   !! processed by numpydoc !!

    detect(**text**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L437)[#](#scikitplot.cleanprompt.LiteralDetector.detect "Link to this definition")
    :   Yield one span per literal occurrence.

        Parameters:
        :   ****text****str
            :   The original text.

            ****policy****RedactionPolicy
            :   The active policy. Unused; present for protocol conformance.

        Yields:
        :   Span
            :   Matches in ascending start order, longest alternative first at any
                given position.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.15)")[**Span**]

    ignore\_case[#](#scikitplot.cleanprompt.LiteralDetector.ignore_case "Link to this definition")
    :   !! processed by numpydoc !!

    kind[#](#scikitplot.cleanprompt.LiteralDetector.kind "Link to this definition")
    :   !! processed by numpydoc !!

    name[#](#scikitplot.cleanprompt.LiteralDetector.name "Link to this definition")
    :   !! processed by numpydoc !!

    priority[#](#scikitplot.cleanprompt.LiteralDetector.priority "Link to this definition")
    :   !! processed by numpydoc !!

    reads\_view = True[#](#scikitplot.cleanprompt.LiteralDetector.reads_view "Link to this definition")
    :   may read the detection view.

        Type:
        :   Offsets index the text given to `detect`

    terms: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][#](#scikitplot.cleanprompt.LiteralDetector.terms "Link to this definition")
    :   !! processed by numpydoc !!

    word\_boundary[#](#scikitplot.cleanprompt.LiteralDetector.word_boundary "Link to this definition")
    :   !! processed by numpydoc !!