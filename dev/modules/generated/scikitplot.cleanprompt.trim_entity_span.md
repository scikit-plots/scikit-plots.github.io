# trim\_entity\_span[#](#trim-entity-span "Link to this heading")

scikitplot.cleanprompt.trim\_entity\_span(**text**, **start**, **end**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_engines.py#L236)[#](#scikitplot.cleanprompt.trim_entity_span "Link to this definition")
:   Shrink an entity span until it carries no unmatched bracket.

    Parameters:
    :   ****text****str
        :   The original text.

        ****start, end****int
        :   The span an engine reported, as offsets into `text`.

    Returns:
    :   tuple of int
        :   The adjusted `(start, end)`. Equal offsets mean the span held nothing
            once the brackets were removed and should be dropped.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****end**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")]

    Notes

    ****Developer notes — why entity spans need validating at all.****

    Every structural pattern carries a validator: a card number passes Luhn, an
    IBAN passes mod-97, a dotted quad has octets in range. Entity spans came
    from a model and were taken verbatim, with nothing checked. That asymmetry
    produced a measured defect.

    On `Mustafa Kemal Atatürk[e] (c. 1881)` spaCy returns the person as
    `'Mustafa Kemal Atatürk[e'` — it swallows the opening bracket and the
    footnote letter and leaves the closing one behind. Two things go wrong at
    once. The vault records the person’s name **with** `[e` on the end, which
    is simply the wrong value and would be restored into any later text. And
    the prompt goes out carrying `[PERSON-1]]`, a malformed placeholder,
    which a language model is then more likely to rewrite or drop — the very
    failure that [`restore`](scikitplot.cleanprompt.restore.html#scikitplot.cleanprompt.restore "scikitplot.cleanprompt.restore") has to be lenient
    about further down the pipeline.

    The rule is structural, not a guess about meaning: **a value may not contain
    an unmatched bracket**. A span is truncated at its first unmatched opener
    and started after its last unmatched closer. Balanced brackets inside a
    span — `Acme (Europe) Ltd` — are left alone, because there is nothing
    malformed about them.

    Only brackets. Trailing full stops are not trimmed, because `Inc.` and
    `St.` end in one legitimately and deciding which is which would be the
    kind of guess this submodule does not make.

    Examples

    Try it in your browser!
    ```
    >>> text = "Mustafa Kemal Atatürk[e] founded it"
    >>> start, end = trim_entity_span(text, 0, 23)
    >>> text[start:end]
    'Mustafa Kemal Atatürk'
    >>> text = "Acme (Europe) Ltd is here"
    >>> start, end = trim_entity_span(text, 0, 17)
    >>> text[start:end]
    'Acme (Europe) Ltd'

    ```
    Go BackOpen In Tab