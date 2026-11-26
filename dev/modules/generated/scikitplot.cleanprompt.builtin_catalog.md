# builtin\_catalog[#](#builtin-catalog "Link to this heading")

scikitplot.cleanprompt.builtin\_catalog()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_catalog.py#L849)[#](#scikitplot.cleanprompt.builtin_catalog "Link to this definition")
:   Return the built-in catalog, read from the compiled JSON.

    Returns:
    :   Catalog
        :   Cached for the life of the process.

    Raises:
    :   CleanPromptError
        :   If the compiled file is missing or malformed — which is a packaging
            defect, reported as one rather than as an empty catalog.

    Return type:
    :   [**Catalog**](scikitplot.cleanprompt.Catalog.html#scikitplot.cleanprompt.Catalog "scikitplot.cleanprompt._catalog.Catalog")

    Notes

    ****Developer notes.**** Standard library only. Every definition is validated
    again on load, which executes every pattern’s examples; this costs a few
    milliseconds once per process and means a corrupted or hand-edited file is
    refused rather than trusted.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../../auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders