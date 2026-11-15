# CapabilitySpec[#](#capabilityspec "Link to this heading")

class scikitplot.corpus.CapabilitySpec(**name**, **role**, **module=None**, **distributions=()**, **assets\_required=False**, **asset\_probe=None**, **may\_download=False**, **requires\_network=False**, **remedy=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_capabilities.py#L363)[#](#scikitplot.corpus.CapabilitySpec "Link to this definition")
:   Declarative probe specification for one optional component.

    A spec deliberately separates **installation** from **readiness**. A Python
    distribution can be installed while a model, corpus, executable, shared
    library, credential, or other runtime asset is still missing.

    Parameters:
    :   ****name****str
        :   Stable capability identifier, for example `"ocr:pytesseract"`.

        ****role****str
        :   Human-readable role such as `"ocr"` or `"asr"`.

        ****module****str or None, optional
        :   Importable module used as a lightweight installation probe.

        ****distributions****tuple[str, …], optional
        :   Distribution names used only for version/provenance discovery.

        ****assets\_required****bool, optional
        :   Whether usability depends on an asset beyond the Python package.

        ****asset\_probe****callable or None, optional
        :   Lightweight, side-effect-free probe. Return `True` when assets are
            ready, `False` when definitely missing, and `None` when readiness
            cannot be known without loading/downloading the component.

        ****may\_download****bool, optional
        :   Whether first use may download models/data.

        ****requires\_network****bool, optional
        :   Whether normal operation requires network access.

        ****remedy****str or None, optional
        :   User-facing guidance for the common unavailable case.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****role**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****module**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****distributions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****assets\_required**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****asset\_probe**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[****]****,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None****]** **|** **None**)
        * ****may\_download**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****requires\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****remedy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    Probes must not download assets, initialise models, or contact the network.
    `UNKNOWN` is preferable to inventing readiness.

    asset\_probe: [Callable](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")[[], [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CapabilitySpec.asset_probe "Link to this definition")

    assets\_required: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.CapabilitySpec.assets_required "Link to this definition")

    distributions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.CapabilitySpec.distributions "Link to this definition")

    may\_download: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.CapabilitySpec.may_download "Link to this definition")

    module: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CapabilitySpec.module "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_capabilities.py#L363)[#](#scikitplot.corpus.CapabilitySpec.name "Link to this definition")

    remedy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CapabilitySpec.remedy "Link to this definition")

    requires\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.CapabilitySpec.requires_network "Link to this definition")

    role: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_capabilities.py#L363)[#](#scikitplot.corpus.CapabilitySpec.role "Link to this definition")