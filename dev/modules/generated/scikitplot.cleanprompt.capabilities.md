# capabilities[#](#capabilities "Link to this heading")

scikitplot.cleanprompt.capabilities()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_capabilities.py#L363)[#](#scikitplot.cleanprompt.capabilities "Link to this definition")
:   Probe every optional tier.

    Returns:
    :   dict of str to CapabilityReport
        :   One report per tier, keyed by tier name, in the order of [`TIERS`](scikitplot.cleanprompt.TIERS.html#scikitplot.cleanprompt.TIERS "scikitplot.cleanprompt.TIERS").

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**CapabilityReport**](scikitplot.cleanprompt.CapabilityReport.html#scikitplot.cleanprompt.CapabilityReport "scikitplot.cleanprompt._capabilities.CapabilityReport")]

    Examples

    Try it in your browser!
    ```
    >>> sorted(capabilities())
    ['crypto', 'ner', 'nltk', 'web']

    ```
    Go BackOpen In Tab