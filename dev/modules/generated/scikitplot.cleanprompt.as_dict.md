# as\_dict[#](#as-dict "Link to this heading")

scikitplot.cleanprompt.as\_dict(**obj**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_types.py#L329)[#](#scikitplot.cleanprompt.as_dict "Link to this definition")
:   Return a JSON-safe, secret-free dictionary for a result object.

    Parameters:
    :   ****obj****RedactionResult or RestorationResult or Stats
        :   The value to describe.

    Returns:
    :   dict
        :   A plain dictionary. Secrets are never included: [`Entry`](scikitplot.cleanprompt.Entry.html#scikitplot.cleanprompt.Entry "scikitplot.cleanprompt.Entry") is
            rendered without its `original` field.

    Raises:
    :   TypeError
        :   If `obj` is not one of the supported result types.

    Parameters:
    :   ****obj**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Notes

    ****Developer notes.**** This is the only sanctioned serializer for results.
    [`dataclasses.asdict`](https://docs.python.org/3/library/dataclasses.html#dataclasses.asdict "(in Python v3.15)") would walk into [`Entry.original`](scikitplot.cleanprompt.Entry.html#scikitplot.cleanprompt.Entry.original "scikitplot.cleanprompt.Entry.original") and emit
    the secrets, which is exactly the mistake that made the upstream web tier
    ship personal data to the browser.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases