# probe[#](#probe "Link to this heading")

scikitplot.cleanprompt.probe(**tier**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_capabilities.py#L260)[#](#scikitplot.cleanprompt.probe "Link to this definition")
:   Report whether one optional tier is usable.

    Parameters:
    :   ****tier****str
        :   Tier name; one of the keys of [`TIERS`](scikitplot.cleanprompt.TIERS.html#scikitplot.cleanprompt.TIERS "scikitplot.cleanprompt.TIERS").

    Returns:
    :   CapabilityReport
        :   The seven-state report. Never raises for an unusable tier.

    Raises:
    :   KeyError
        :   If `tier` is not a known tier name.

    Parameters:
    :   ****tier**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**CapabilityReport**](scikitplot.cleanprompt.CapabilityReport.html#scikitplot.cleanprompt.CapabilityReport "scikitplot.cleanprompt._capabilities.CapabilityReport")

    Notes

    ****Developer notes.**** The target distribution is never imported here. Metadata
    lookup is a filesystem operation; it answers the presence and version
    questions without executing third-party code, which is what keeps
    `import scikitplot.cleanprompt` free of optional dependencies.

    Examples

    Try it in your browser!
    ```
    >>> report = probe("ner")
    >>> report.tier
    'ner'
    >>> report.status in set(CapabilityStatus)
    True

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop