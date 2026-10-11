# RedactionPolicy[#](#redactionpolicy "Link to this heading")

class scikitplot.cleanprompt.RedactionPolicy(**kinds=None**, **allow=()**, **tag\_style=TagStyle(prefix='[', suffix=']', separator='-', uppercase\_kind=True, style='placeholder', surrogates=None)**, **overlap=OverlapStrategy.LONGEST\_WINS**, **limits=Limits(max\_input\_chars=1000000, max\_spans=100000, max\_entries=50000, max\_literal\_terms=10000, max\_literal\_length=4096)**, **case\_insensitive=False**, **min\_confidence=0.0**, **preserve\_placeholders=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_policy.py#L564)[#](#scikitplot.cleanprompt.RedactionPolicy "Link to this definition")
:   Complete, declarative configuration for a redaction pass.

    Parameters:
    :   ****kinds****tuple of str, optional
        :   Categories to detect, naming entries of the pattern library. `None`
            means “every pattern enabled by default”.

        ****tag\_style****TagStyle, optional
        :   Placeholder grammar. Defaults to [`DEFAULT_TAG_STYLE`](scikitplot.cleanprompt.DEFAULT_TAG_STYLE.html#scikitplot.cleanprompt.DEFAULT_TAG_STYLE "scikitplot.cleanprompt.DEFAULT_TAG_STYLE").

        ****overlap****OverlapStrategy, default=OverlapStrategy.LONGEST\_WINS
        :   Arbitration rule for overlapping detections.

        ****limits****Limits, optional
        :   Hard bounds. Defaults to [`DEFAULT_LIMITS`](scikitplot.cleanprompt.DEFAULT_LIMITS.html#scikitplot.cleanprompt.DEFAULT_LIMITS "scikitplot.cleanprompt.DEFAULT_LIMITS").

        ****case\_insensitive****bool, default=False
        :   Whether two surfaces that differ only in case share one label.

        ****min\_confidence****float, default=0.0
        :   Detections below this confidence are discarded before resolution.

        ****allow****tuple of str, default=()
        :   Surfaces that must never be redacted, compared exactly against a
            detection’s own text. An allowlist is the necessary complement to a
            denylist: without it the only way to stop a false positive is to
            disable the whole pattern, which silently removes cover for everything
            else that pattern would have caught.

        ****preserve\_placeholders****bool, default=True
        :   Whether text already matching the placeholder grammar is protected from
            re-detection, making redaction idempotent.

    Raises:
    :   PolicyError
        :   If `kinds` is empty, contains a non-string or a duplicate, or if
            `min_confidence` is outside `[0.0, 1.0]`.

    Parameters:
    :   * ****kinds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]** **|** **None**)
        * ****allow**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****tag\_style**** ([**TagStyle**](scikitplot.cleanprompt.TagStyle.html#scikitplot.cleanprompt.TagStyle "scikitplot.cleanprompt._policy.TagStyle"))
        * ****overlap**** ([**OverlapStrategy**](scikitplot.cleanprompt.OverlapStrategy.html#scikitplot.cleanprompt.OverlapStrategy "scikitplot.cleanprompt._policy.OverlapStrategy"))
        * ****limits**** ([**Limits**](scikitplot.cleanprompt.Limits.html#scikitplot.cleanprompt.Limits "scikitplot.cleanprompt._policy.Limits"))
        * ****case\_insensitive**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****min\_confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****preserve\_placeholders**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User notes.**** `case_insensitive=True` is the right choice for names that
    appear in mixed case (“Acme” and “ACME” become one label). Leave it off for
    identifiers where case is meaningful, such as API keys.

    ****Developer notes.**** `preserve_placeholders` is what gives invariant I7.
    Before detection runs, the engine finds every substring matching the active
    placeholder grammar and treats those ranges as reserved; detectors may still
    report spans there, but resolution drops them. Without this, feeding an
    already-redacted text back through the pipeline lets a detector tag the
    inside of a placeholder and destroy it — which is the reproduced upstream
    defect `CP-006`.

    Examples

    Try it in your browser!
    ```
    >>> policy = DEFAULT_POLICY.evolve(case_insensitive=True)
    >>> policy.case_insensitive
    True
    >>> policy is DEFAULT_POLICY
    False
    >>> len(policy.fingerprint)
    16

    ```
    Go BackOpen In Tab

    allow: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.RedactionPolicy.allow "Link to this definition")

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_policy.py#L763)[#](#scikitplot.cleanprompt.RedactionPolicy.as_dict "Link to this definition")
    :   Return a JSON-safe dictionary of this policy.

        Returns:
        :   dict
            :   Field names to JSON-safe values, with `kinds` sorted so that two
                policies differing only in the order they were written produce the
                same rendering.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    case\_insensitive: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.cleanprompt.RedactionPolicy.case_insensitive "Link to this definition")

    evolve(**\*\*changes**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_policy.py#L679)[#](#scikitplot.cleanprompt.RedactionPolicy.evolve "Link to this definition")
    :   Return a copy of this policy with `changes` applied.

        Parameters:
        :   ****\*\*changes****
            :   Field names to new values. `kinds` accepts any iterable of strings
                and is normalised to a tuple.

        Returns:
        :   RedactionPolicy
            :   A new, validated policy. This policy is unchanged.

        Raises:
        :   PolicyError
            :   If a name is not a field of this class, or the result is invalid.

        Parameters:
        :   ****changes**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**RedactionPolicy**](#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy")

        Examples

        Try it in your browser!
        ```
        >>> DEFAULT_POLICY.evolve(kinds=["EMAIL"]).kinds
        ('EMAIL',)

        ```
        Go BackOpen In Tab

    property fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.cleanprompt.RedactionPolicy.fingerprint "Link to this definition")
    :   Stable 16-character digest of this policy.

        Notes

        ****Developer notes.**** Computed from canonical JSON with sorted keys, so
        it is identical across processes, platforms and Python versions.
        [`hash`](https://docs.python.org/3/builtins/functions.html#hash "(in Python v3.15)") is unsuitable: `PYTHONHASHSEED` randomises string hashing
        per process, so a hash-derived fingerprint would fail to match a vault
        written by an earlier run.

        Type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    kinds: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.RedactionPolicy.kinds "Link to this definition")

    limits: [Limits](scikitplot.cleanprompt.Limits.html#scikitplot.cleanprompt.Limits "scikitplot.cleanprompt._policy.Limits") = Limits(max\_input\_chars=1000000, max\_spans=100000, max\_entries=50000, max\_literal\_terms=10000, max\_literal\_length=4096)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_policy.py#L)[#](#scikitplot.cleanprompt.RedactionPolicy.limits "Link to this definition")

    min\_confidence: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.cleanprompt.RedactionPolicy.min_confidence "Link to this definition")

    overlap: [OverlapStrategy](scikitplot.cleanprompt.OverlapStrategy.html#scikitplot.cleanprompt.OverlapStrategy "scikitplot.cleanprompt._policy.OverlapStrategy") = 'LONGEST\_WINS'[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_policy.py#L)[#](#scikitplot.cleanprompt.RedactionPolicy.overlap "Link to this definition")

    preserve\_placeholders: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.cleanprompt.RedactionPolicy.preserve_placeholders "Link to this definition")

    selected\_kinds(**available**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_policy.py#L727)[#](#scikitplot.cleanprompt.RedactionPolicy.selected_kinds "Link to this definition")
    :   Resolve [`kinds`](#scikitplot.cleanprompt.RedactionPolicy.kinds "scikitplot.cleanprompt.RedactionPolicy.kinds") against the kinds a registry offers.

        Parameters:
        :   ****available****iterable of str
            :   Kinds the registry can provide.

        Returns:
        :   frozenset of str
            :   The kinds to run.

        Raises:
        :   PolicyError
            :   If a requested kind is not available. The message lists what is.

        Parameters:
        :   ****available**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Notes

        ****Developer notes.**** Requesting an unknown kind raises rather than being
        ignored. A silently dropped category is a redaction that did not happen,
        and the caller would have no way to notice before transmitting.

    tag\_style: [TagStyle](scikitplot.cleanprompt.TagStyle.html#scikitplot.cleanprompt.TagStyle "scikitplot.cleanprompt._policy.TagStyle") = TagStyle(prefix='[', suffix=']', separator='-', uppercase\_kind=True, style='placeholder', surrogates=None)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_policy.py#L)[#](#scikitplot.cleanprompt.RedactionPolicy.tag_style "Link to this definition")