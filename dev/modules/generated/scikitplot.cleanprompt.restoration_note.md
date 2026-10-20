# restoration\_note[#](#restoration-note "Link to this heading")

scikitplot.cleanprompt.restoration\_note(**result**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_render.py#L205)[#](#scikitplot.cleanprompt.restoration_note "Link to this definition")
:   Return a one-line, secret-free description of a restoration.

    Parameters:
    :   ****result****RestorationResult
        :   The pass to describe.

    Returns:
    :   str
        :   A summary naming counts, and any unknown labels. Labels are not
            secrets, so naming them is safe and actionable.

    Parameters:
    :   ****result**** (**RestorationResult**)

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> restoration_note(RestorationResult("x", ("[EMAIL-1]",)))
    'restored 1 placeholder(s)'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop