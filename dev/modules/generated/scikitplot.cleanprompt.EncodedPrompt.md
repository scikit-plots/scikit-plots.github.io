# EncodedPrompt[#](#encodedprompt "Link to this heading")

class scikitplot.cleanprompt.EncodedPrompt(**text**, **handle**, **result**, **report=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_api.py#L258)[#](#scikitplot.cleanprompt.EncodedPrompt "Link to this definition")
:   The result of [`encode`](scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode"): a safe text and the handle to undo it.

    Parameters:
    :   ****text****str
        :   Safe to send.

        ****handle****Handle
        :   ****Not**** safe to send.

        ****result****RedactionResult
        :   The full result, for callers that want the detail.

        ****report****dict
        :   What happened, and what was not looking; see
            `describe_outcome`.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****handle**** ([**Handle**](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt._api.Handle"))
        * ****result**** (**RedactionResult**)
        * ****report**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    ****User notes.**** Unpacks as a pair, so the common case reads well:

    ```
    safe, handle = encode(text)

    ```

    Check `report["level"]`: `"alert"` means nothing was redacted **and**
    part of the detection surface is switched off, which is the one case where
    an empty result should not be read as “there was nothing to find”.

    property count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.cleanprompt.EncodedPrompt.count "Link to this definition")
    :   How many distinct values were replaced.

        Type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    handle: [Handle](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt._api.Handle")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_api.py#L258)[#](#scikitplot.cleanprompt.EncodedPrompt.handle "Link to this definition")

    property level: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.cleanprompt.EncodedPrompt.level "Link to this definition")
    :   `"ok"`, `"warning"` or `"alert"`.

        Type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    report: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_api.py#L258)[#](#scikitplot.cleanprompt.EncodedPrompt.report "Link to this definition")

    result: RedactionResult[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_api.py#L258)[#](#scikitplot.cleanprompt.EncodedPrompt.result "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_api.py#L258)[#](#scikitplot.cleanprompt.EncodedPrompt.text "Link to this definition")