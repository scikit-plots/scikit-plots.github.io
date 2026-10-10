# DEFAULT\_POLICY[#](#default-policy "Link to this heading")

scikitplot.cleanprompt.DEFAULT\_POLICY = RedactionPolicy(kinds=None, allow=(), tag\_style=TagStyle(prefix='[', suffix=']', separator='-', uppercase\_kind=True, style='placeholder'), overlap=<OverlapStrategy.LONGEST\_WINS: 'LONGEST\_WINS'>, limits=Limits(max\_input\_chars=1000000, max\_spans=100000, max\_entries=50000, max\_literal\_terms=10000, max\_literal\_length=4096), case\_insensitive=False, min\_confidence=0.0, preserve\_placeholders=True)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_policy.py#L)[#](#scikitplot.cleanprompt.DEFAULT_POLICY "Link to this definition")
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

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases