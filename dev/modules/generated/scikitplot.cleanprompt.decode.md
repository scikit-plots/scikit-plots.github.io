# decode[#](#decode "Link to this heading")

scikitplot.cleanprompt.decode(**reply**, **handle**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_api.py#L467)[#](#scikitplot.cleanprompt.decode "Link to this definition")
:   Put the original values back into a model’s reply.

    Parameters:
    :   ****reply****str
        :   Text containing placeholders.

        ****handle****Handle
        :   The handle [`encode`](scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") returned.

        ****strict****bool, default=False
        :   Raise when the reply contains a placeholder the handle never issued.

    Returns:
    :   str
        :   The reply with values restored.

    Raises:
    :   TypeError
        :   If `handle` is not a [`Handle`](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt.Handle").

        PolicyError
        :   If the handle has been cleared.

        RestorationError
        :   Under `strict`, when a placeholder is unknown.

    Parameters:
    :   * ****reply**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****handle**** ([**Handle**](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt._api.Handle"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Notes

    ****User notes.**** `strict` is off by default because a model can invent a
    placeholder that was never issued, and failing the whole reply over one
    hallucinated token is rarely what you want. Use
    [`Session.decode_report`](scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session.decode_report "scikitplot.cleanprompt.Session.decode_report") when you need to know.

    Examples

    Try it in your browser!
    ```
    >>> safe, handle = encode("Call +1 555 010 4477")
    >>> decode("Ring [PHONE-1] tomorrow", handle)
    'Ring +1 555 010 4477 tomorrow'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](../../auto_examples/cleanprompt/plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases