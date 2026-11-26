# RedactionResult[#](#redactionresult "Link to this heading")

class scikitplot.cleanprompt.RedactionResult(**text**, **entries**, **vault**, **stats**, **policy\_fingerprint**, **truncated=False**, **reported=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L214)[#](#scikitplot.cleanprompt.RedactionResult "Link to this definition")
:   Output of a redaction pass.

    Parameters:
    :   ****text****str
        :   The redacted text. Safe to transmit.

        ****entries****tuple of Entry
        :   Ordered record of every value replaced, sorted by first occurrence.

        ****vault****Vault
        :   The label-to-secret mapping needed to restore. ****Not**** safe to transmit.

        ****stats****Stats
        :   Counters for this pass.

        ****policy\_fingerprint****str
        :   Stable digest of the policy that produced this result. Restoration
            checks it, so a vault cannot be applied under a different placeholder
            grammar than the one that created it.

        ****truncated****bool, default=False
        :   Always `False`. Present so that callers can assert the pipeline never
            truncates; a bound is exceeded by raising, not by dropping content.

        ****reported****tuple of Span, default=()
        :   Values left in `text` because their kind’s action is `report`
            ([`Action`](scikitplot.cleanprompt.Action.html#scikitplot.cleanprompt.Action "scikitplot.cleanprompt._policy.Action")), in text order. Empty unless a policy asks
            for it; they are ****not**** hidden, and the text is not safe to transmit
            while this is non-empty.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****entries**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Entry**](scikitplot.cleanprompt.Entry.html#scikitplot.cleanprompt.Entry "scikitplot.cleanprompt._types.Entry")**,** **...****]**)
        * ****vault**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****stats**** ([**Stats**](scikitplot.cleanprompt.Stats.html#scikitplot.cleanprompt.Stats "scikitplot.cleanprompt._types.Stats"))
        * ****policy\_fingerprint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****truncated**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****reported**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Span**](scikitplot.cleanprompt.Span.html#scikitplot.cleanprompt.Span "scikitplot.cleanprompt._types.Span")**,** **...****]**)

    > **See also**
    > `scikitplot.cleanprompt._engine.restore`
    :   The inverse operation.

    entries: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Entry](scikitplot.cleanprompt.Entry.html#scikitplot.cleanprompt.Entry "scikitplot.cleanprompt._types.Entry"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L214)[#](#scikitplot.cleanprompt.RedactionResult.entries "Link to this definition")

    property labels: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][#](#scikitplot.cleanprompt.RedactionResult.labels "Link to this definition")
    :   Every placeholder label issued, in order.

        Type:
        :   Tuple of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    policy\_fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L214)[#](#scikitplot.cleanprompt.RedactionResult.policy_fingerprint "Link to this definition")

    reported: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Span](scikitplot.cleanprompt.Span.html#scikitplot.cleanprompt.Span "scikitplot.cleanprompt._types.Span"), ...] = ()[#](#scikitplot.cleanprompt.RedactionResult.reported "Link to this definition")

    stats: [Stats](scikitplot.cleanprompt.Stats.html#scikitplot.cleanprompt.Stats "scikitplot.cleanprompt._types.Stats")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L214)[#](#scikitplot.cleanprompt.RedactionResult.stats "Link to this definition")

    summary()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L260)[#](#scikitplot.cleanprompt.RedactionResult.summary "Link to this definition")
    :   Return a one-line, secret-free description of this pass.

        Returns:
        :   str
            :   A summary naming counts and categories but never the secrets.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

        Notes

        ****Developer notes.**** Upstream printed
        `"Removed sensitive information: " + ", ".join(mapping.keys())`, which
        echoes every secret to the terminal and therefore into shell history and
        any captured log. This deliberately names categories and counts only.

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L214)[#](#scikitplot.cleanprompt.RedactionResult.text "Link to this definition")

    truncated: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.cleanprompt.RedactionResult.truncated "Link to this definition")

    vault: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L214)[#](#scikitplot.cleanprompt.RedactionResult.vault "Link to this definition")