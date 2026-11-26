# CapabilityReport[#](#capabilityreport "Link to this heading")

class scikitplot.corpus.CapabilityReport(**name**, **role**, **status**, **installed**, **assets\_ready**, **ready**, **selected=False**, **active=False**, **version=None**, **reason\_code=None**, **remedy=None**, **may\_download=False**, **requires\_network=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L419)[#](#scikitplot.corpus.CapabilityReport "Link to this definition")
:   Read-only readiness state for one optional component.

    `installed` means Python can locate the package/module. `assets_ready`
    answers the second question when it can be observed cheaply. `ready` is
    the combined preflight answer. `selected` and `active` are contextual:
    selection means policy chose the component; active means the caller has
    evidence it actually completed work successfully.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****role**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**CapabilityStatus**](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus._capabilities.CapabilityStatus"))
        * ****installed**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****assets\_ready**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****ready**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****selected**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****active**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****reason\_code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****remedy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****may\_download**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****requires\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    active: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.CapabilityReport.active "Link to this definition")

    assets\_ready: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L419)[#](#scikitplot.corpus.CapabilityReport.assets_ready "Link to this definition")

    property available: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.CapabilityReport.available "Link to this definition")
    :   Whether this capability is known usable now.

    installed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L419)[#](#scikitplot.corpus.CapabilityReport.installed "Link to this definition")

    may\_download: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.CapabilityReport.may_download "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L419)[#](#scikitplot.corpus.CapabilityReport.name "Link to this definition")

    ready: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L419)[#](#scikitplot.corpus.CapabilityReport.ready "Link to this definition")

    reason\_code: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CapabilityReport.reason_code "Link to this definition")

    remedy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CapabilityReport.remedy "Link to this definition")

    requires\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.CapabilityReport.requires_network "Link to this definition")

    role: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L419)[#](#scikitplot.corpus.CapabilityReport.role "Link to this definition")

    selected: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.CapabilityReport.selected "Link to this definition")

    status: [CapabilityStatus](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus._capabilities.CapabilityStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L419)[#](#scikitplot.corpus.CapabilityReport.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_capabilities.py#L449)[#](#scikitplot.corpus.CapabilityReport.to_dict "Link to this definition")
    :   Return a JSON-compatible representation.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CapabilityReport.version "Link to this definition")