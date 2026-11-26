# reserved\_label\_spans[#](#reserved-label-spans "Link to this heading")

scikitplot.cleanprompt.reserved\_label\_spans(**text**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_engine.py#L107)[#](#scikitplot.cleanprompt.reserved_label_spans "Link to this definition")
:   Find substrings of `text` that already match the placeholder grammar.

    Parameters:
    :   ****text****str
        :   The original text.

        ****policy****RedactionPolicy
        :   Supplies the placeholder grammar.

    Returns:
    :   ****ranges****tuple of tuple of int
        :   `(start, end)` pairs to exclude from detection, ascending.

        ****labels****set of str
        :   The label strings occupying those ranges, excluded from allocation.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")], …], [set](https://docs.python.org/3/builtins/stdtypes.html#set "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]

    Notes

    ****Developer notes.**** Both halves matter and they solve different problems.
    Excluding the **ranges** gives idempotence: a detector cannot tag the inside of
    a placeholder. Excluding the **labels** prevents an aliasing bug: for the input
    `"[EMAIL-1] and bob@example.com"` the real address would otherwise be
    issued `[EMAIL-1]` as well, and restoration would then rewrite both
    occurrences to the same value.

    ****Rewritten spellings in the source (``CP-112``).**** Restoration also
    repairs labels a model rewrote ([`TagStyle.lenient_pattern`](scikitplot.cleanprompt.TagStyle.html#scikitplot.cleanprompt.TagStyle.lenient_pattern "scikitplot.cleanprompt.TagStyle.lenient_pattern")), so a
    source that already holds such a spelling (`[email_1]`,
    `[EMAIL<U+2028>-1]`) was restored as the value later issued that label,
    and the round trip was not exact. The label each one normalises to is
    therefore reserved too, so no value is ever issued it: restoring the
    spelling then finds nothing in the vault and leaves it as written, while
    a model’s rewrite of a label that **was** issued is still repaired. Only
    the label is reserved, not the range: a lenient match such as
    `[PHONE 5550104477]` can hold a real value, and detection must still
    see it.