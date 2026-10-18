# Limits[#](#limits "Link to this heading")

class scikitplot.cleanprompt.Limits(**max\_input\_chars=1000000**, **max\_spans=100000**, **max\_entries=50000**, **max\_literal\_terms=10000**, **max\_literal\_length=4096**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_policy.py#L486)[#](#scikitplot.cleanprompt.Limits "Link to this definition")
:   Hard bounds on one redaction pass.

    Parameters:
    :   ****max\_input\_chars****int, default=1\_000\_000
        :   Longest text accepted. Exceeding it raises
            `LimitExceededError`.

        ****max\_spans****int, default=100\_000
        :   Most detections accepted before overlap resolution.

        ****max\_entries****int, default=50\_000
        :   Most distinct values newly detected in one text. Values carried in
            from earlier turns or pieces (a `seed`) do not count.

        ****max\_literal\_terms****int, default=10\_000
        :   Most user-supplied literal terms accepted.

        ****max\_literal\_length****int, default=4\_096
        :   Longest single literal term accepted.

    Raises:
    :   PolicyError
        :   If any bound is not a positive integer.

    Parameters:
    :   * ****max\_input\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_spans**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_entries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_literal\_terms**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_literal\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    ****Developer notes.**** Bounds exist so that adversarial input fails loudly and
    early rather than consuming the process. They are policy, not constants, so
    a caller who genuinely needs a larger document can raise them explicitly and
    own that decision. Nothing in this submodule silently truncates: the
    `truncated` field on
    `RedactionResult` is always `False`
    and exists so a caller can assert that.

    The default `max_input_chars` matches the default document ceiling of the
    optional spaCy tier, so the base tier and the NER tier fail at the same
    size rather than at two different, surprising ones.

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_policy.py#L546)[#](#scikitplot.cleanprompt.Limits.as_dict "Link to this definition")
    :   Return a JSON-safe dictionary of these limits.

        Returns:
        :   dict
            :   Field names to values.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    max\_entries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 50000[#](#scikitplot.cleanprompt.Limits.max_entries "Link to this definition")

    max\_input\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1000000[#](#scikitplot.cleanprompt.Limits.max_input_chars "Link to this definition")

    max\_literal\_length: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 4096[#](#scikitplot.cleanprompt.Limits.max_literal_length "Link to this definition")

    max\_literal\_terms: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 10000[#](#scikitplot.cleanprompt.Limits.max_literal_terms "Link to this definition")

    max\_spans: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 100000[#](#scikitplot.cleanprompt.Limits.max_spans "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases