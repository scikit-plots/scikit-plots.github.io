# CapabilityReport[#](#capabilityreport "Link to this heading")

class scikitplot.cleanprompt.CapabilityReport(**tier**, **status**, **distribution**, **version**, **supported**, **detail**, **install\_hint**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_capabilities.py#L154)[#](#scikitplot.cleanprompt.CapabilityReport "Link to this definition")
:   Outcome of probing one tier.

    Attributes:
    :   ****tier****str
        :   Tier name, one of the keys of [`TIERS`](scikitplot.cleanprompt.TIERS.html#scikitplot.cleanprompt.TIERS "scikitplot.cleanprompt.TIERS").

        ****status****CapabilityStatus
        :   Seven-state result.

        ****distribution****str
        :   The distribution that was probed.

        ****version****str or None
        :   Installed version, when it could be determined.

        ****supported****str
        :   Human-readable supported range.

        ****detail****str
        :   Why this status was reached.

        ****install\_hint****str
        :   The exact command that would make the tier available.

    Parameters:
    :   * ****tier**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**CapabilityStatus**](scikitplot.cleanprompt.CapabilityStatus.html#scikitplot.cleanprompt.CapabilityStatus "scikitplot.cleanprompt._capabilities.CapabilityStatus"))
        * ****distribution**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****supported**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****detail**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****install\_hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    property available: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.cleanprompt.CapabilityReport.available "Link to this definition")
    :   `True` only when [`status`](#scikitplot.cleanprompt.CapabilityReport.status "scikitplot.cleanprompt.CapabilityReport.status") is `AVAILABLE`.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    count(**value**, **/**)[#](#scikitplot.cleanprompt.CapabilityReport.count "Link to this definition")
    :   Return number of occurrences of value.

    detail: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cleanprompt.CapabilityReport.detail "Link to this definition")
    :   Alias for field number 5

    distribution: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cleanprompt.CapabilityReport.distribution "Link to this definition")
    :   Alias for field number 2

    index(**value**, **start=0**, **stop=sys.maxsize**, **/**)[#](#scikitplot.cleanprompt.CapabilityReport.index "Link to this definition")
    :   Return first index of value.

        Raises ValueError if the value is not present.

    install\_hint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cleanprompt.CapabilityReport.install_hint "Link to this definition")
    :   Alias for field number 6

    status: [CapabilityStatus](scikitplot.cleanprompt.CapabilityStatus.html#scikitplot.cleanprompt.CapabilityStatus "scikitplot.cleanprompt._capabilities.CapabilityStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cleanprompt.CapabilityReport.status "Link to this definition")
    :   Alias for field number 1

    supported: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cleanprompt.CapabilityReport.supported "Link to this definition")
    :   Alias for field number 4

    tier: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cleanprompt.CapabilityReport.tier "Link to this definition")
    :   Alias for field number 0

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/../../collections/__init__.py#L)[#](#scikitplot.cleanprompt.CapabilityReport.version "Link to this definition")
    :   Alias for field number 3