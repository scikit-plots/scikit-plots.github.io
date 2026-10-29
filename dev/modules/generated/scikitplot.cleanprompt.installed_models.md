# installed\_models[#](#installed-models "Link to this heading")

scikitplot.cleanprompt.installed\_models()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_languages.py#L272)[#](#scikitplot.cleanprompt.installed_models "Link to this definition")
:   Return the spaCy models installed here, mapped to their versions.

    Returns:
    :   dict of str to str
        :   Model name to version. Empty when spaCy is not installed or no model
            is present.

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Notes

    ****Developer notes.**** Reads distribution metadata rather than importing
    spaCy or loading anything, so this is safe to call from `doctor` and
    costs a directory scan. A spaCy model is an ordinary installed
    distribution, which is what makes that possible.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle