# reserved\_label\_spans[#](#reserved-label-spans "Link to this heading")

scikitplot.cleanprompt.reserved\_label\_spans(**text**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_engine.py#L98)[#](#scikitplot.cleanprompt.reserved_label_spans "Link to this definition")
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