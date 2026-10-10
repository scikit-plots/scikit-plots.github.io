# restore[#](#restore "Link to this heading")

scikitplot.cleanprompt.restore(**text**, **vault**, **policy=None**, **strict=False**, **lenient=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_engine.py#L907)[#](#scikitplot.cleanprompt.restore "Link to this definition")
:   Replace placeholders in `text` with the values held in `vault`.

    Parameters:
    :   ****text****str
        :   Text containing placeholders, typically a language model’s reply.

        ****vault****Vault
        :   The vault produced by the matching redaction.

        ****policy****RedactionPolicy, optional
        :   Supplies the placeholder grammar. Defaults to
            `DEFAULT_POLICY`. Its fingerprint
            is checked against the vault’s.

        ****strict****bool, default=False
        :   When `True`, a placeholder that is not in the vault raises.

        ****lenient****bool, default=True
        :   Also match placeholders the model rewrote — a different case, a
            different separator, escaped brackets, a line break inside the label.
            Each one acted on is listed in
            `repaired`. Set
            `False` to match only labels spelled exactly as they were issued.

    Returns:
    :   RestorationResult
        :   The restored text plus which labels were restored, unknown and unused.

    Raises:
    :   TypeError
        :   If `text` is not a string.

        PolicyError
        :   If the vault is closed, or was issued under a different placeholder
            grammar.

        RestorationError
        :   Under `strict` when a placeholder is not in the vault.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****vault**** ([**Vault**](scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt._vault.Vault"))
        * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy") **|** **None**)
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****lenient**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   **RestorationResult**

    Notes

    ****User notes.**** `strict=False` is the default because a reply may
    legitimately contain placeholder-shaped text the vault never issued — for
    instance if your original text already contained one. Unknown labels are
    left exactly as they are and reported in
    `unknown`; check that
    field rather than assuming completeness.

    ****Developer notes.**** One compiled scan, one dictionary lookup per hit, one
    join. Replacing each known label in turn would be O(entries × length) and
    would let a restored value containing a placeholder be re-matched on a later
    iteration.

    The fingerprint checked here is the **grammar** digest
    (`fingerprint`), not the full
    policy digest. Only the grammar can change how a label is spelled, so
    narrowing `kinds` or raising a limit between redaction and restoration is
    legitimate and must not be rejected.

    Examples

    Try it in your browser!
    ```
    >>> result = Redactor().redact("call +1 555 010 4477")
    >>> restore(result.text, result.vault).text
    'call +1 555 010 4477'
    >>> restore("[EMAIL-9] unknown", result.vault).unknown
    ('[EMAIL-9]',)

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