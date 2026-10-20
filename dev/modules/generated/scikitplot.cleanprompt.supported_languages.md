# supported\_languages[#](#supported-languages "Link to this heading")

scikitplot.cleanprompt.supported\_languages()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_languages.py#L162)[#](#scikitplot.cleanprompt.supported_languages "Link to this definition")
:   Return every language code with a dedicated model.

    Returns:
    :   tuple of str
        :   Sorted codes. `"xx"` is not listed: it is the fallback, not a
            language.

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    Examples

    Try it in your browser!
    ```
    >>> "en" in supported_languages() and "de" in supported_languages()
    True

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle