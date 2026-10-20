# Redactor[#](#redactor "Link to this heading")

class scikitplot.cleanprompt.Redactor(**policy=None**, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_engine.py#L349)[#](#scikitplot.cleanprompt.Redactor "Link to this definition")
:   Reusable, stateless redactor.

    Parameters:
    :   ****policy****RedactionPolicy, optional
        :   Configuration. Defaults to
            `DEFAULT_POLICY`.

        ****registry****DetectorRegistry, optional
        :   Detectors to run. Defaults to
            `default_registry` restricted
            to the policy’s kinds.

    Raises:
    :   PolicyError
        :   If the policy names a kind the registry cannot produce.

    Parameters:
    :   * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy") **|** **None**)
        * ****registry**** ([**DetectorRegistry**](scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt.DetectorRegistry") **|** **None**)

    Notes

    ****User notes.**** One redactor may be reused for any number of documents, from
    any number of threads. Each call returns its own result and its own vault;
    nothing carries over between documents.

    ****Developer notes.**** Statelessness is the contract, not an implementation
    detail. Upstream kept `counters` and `found_items` on the instance and
    never reset them, so a second document continued the first document’s
    numbering — and the web tier shared one instance across every HTTP request,
    which made one visitor’s data influence another’s output. Every counter here
    lives in a local of [`redact`](#scikitplot.cleanprompt.Redactor.redact "scikitplot.cleanprompt.Redactor.redact").

    Examples

    Try it in your browser!
    ```
    >>> redactor = Redactor()
    >>> first = redactor.redact("mail a@b.co")
    >>> second = redactor.redact("mail c@d.co")
    >>> first.text, second.text
    ('mail [EMAIL-1]', 'mail [EMAIL-1]')
    >>> restore(first.text, first.vault).text
    'mail a@b.co'

    ```
    Go BackOpen In Tab

    policy[#](#scikitplot.cleanprompt.Redactor.policy "Link to this definition")
    :   !! processed by numpydoc !!

    redact(**text**, **extra\_terms=None**, **extra\_kind='CUSTOM'**, **word\_boundary=False**, **seed=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_engine.py#L405)[#](#scikitplot.cleanprompt.Redactor.redact "Link to this definition")
    :   Replace sensitive values in `text` with stable placeholders.

        Parameters:
        :   ****text****str
            :   The text to redact.

            ****extra\_terms****iterable of str, optional
            :   Additional exact strings to hide in this call only. They are
                detected in the same pass as everything else.

            ****extra\_kind****str, default=’CUSTOM’
            :   Category for `extra_terms`.

            ****word\_boundary****bool, default=False
            :   Whether `extra_terms` match only at word boundaries.

            ****seed****iterable of Entry, optional
            :   Label assignments from an earlier pass. A value that already has a
                label keeps it, and fresh values are numbered after the highest
                ordinal already used for their kind.

        Returns:
        :   RedactionResult
            :   The redacted text, the ordered entries, the vault and the stats.

        Raises:
        :   TypeError
            :   If `text` is not a string.

            LimitExceededError
            :   If a policy bound is exceeded.

            PolicyError
            :   If `extra_terms` contains an empty or non-string entry.

            OverlapError
            :   Under [`OverlapStrategy.STRICT`](scikitplot.cleanprompt.OverlapStrategy.html#scikitplot.cleanprompt.OverlapStrategy.STRICT "scikitplot.cleanprompt.OverlapStrategy.STRICT") when detections overlap.

            DetectorError
            :   If a detector raises.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****extra\_terms**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****extra\_kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****word\_boundary**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****seed**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[****Entry****]** **|** **None**)

        Return type:
        :   **RedactionResult**

        Notes

        ****User notes.**** `seed` is what makes a multi-turn conversation
        coherent: pass the previous result’s entries and the same person keeps
        the same placeholder across every prompt, so a model reading the thread
        sees one consistent participant rather than a new stranger each turn.

        ****Developer notes.**** `seed` is an **argument**, not instance state, and
        that distinction is the whole point. Statelessness (invariant I4) means
        this object carries nothing between calls, not that continuity is
        impossible; making the caller pass the history explicitly keeps two
        documents independent unless someone deliberately links them. Holding
        it on the instance instead is precisely the upstream defect `CP-003`.

        ****User notes.**** Allowlisted surfaces
        (`allow`) are
        dropped here, before overlap resolution. Filtering at this point rather
        than afterwards means an allowed value cannot be swept into a merged
        span by a neighbour, which would have redacted it anyway and made the
        allowlist look unreliable.

        ****User notes.**** `extra_terms` is the “additional words to hide”
        feature, and it composes with everything else in one pass. Upstream had
        a separate code path for it which re-ran the wrong method and silently
        skipped email, phone and URL detection entirely — so supplying an extra
        term made the result **less** redacted. There is one pipeline here, and
        adding a term can only add detections.

        Examples

        Try it in your browser!
        ```
        >>> result = Redactor().redact("Ann met Anna", extra_terms=["Ann", "Anna"])
        >>> result.text
        '[CUSTOM-1] met [CUSTOM-2]'
        >>> restore(result.text, result.vault).text
        'Ann met Anna'

        ```
        Go BackOpen In Tab

    registry[#](#scikitplot.cleanprompt.Redactor.registry "Link to this definition")
    :   !! processed by numpydoc !!

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases