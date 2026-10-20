# require[#](#require "Link to this heading")

scikitplot.cleanprompt.require(**tier**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_capabilities.py#L380)[#](#scikitplot.cleanprompt.require "Link to this definition")
:   Return the report for `tier`, raising when it is not usable.

    Parameters:
    :   ****tier****str
        :   Tier name; one of the keys of [`TIERS`](scikitplot.cleanprompt.TIERS.html#scikitplot.cleanprompt.TIERS "scikitplot.cleanprompt.TIERS").

    Returns:
    :   CapabilityReport
        :   The report, guaranteed to be `AVAILABLE`.

    Raises:
    :   CapabilityError
        :   If the tier is not usable. The message names the tier’s purpose, the
            observed status, and the exact install command.

    Parameters:
    :   ****tier**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [**CapabilityReport**](scikitplot.cleanprompt.CapabilityReport.html#scikitplot.cleanprompt.CapabilityReport "scikitplot.cleanprompt._capabilities.CapabilityReport")

    Notes

    ****Developer notes.**** Call this **before** importing the tier’s dependency, not
    after. An actionable message placed below a module-scope third-party import
    is unreachable, because the import raises first.