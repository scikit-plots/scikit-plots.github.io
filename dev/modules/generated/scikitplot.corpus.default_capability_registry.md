# default\_capability\_registry[#](#default-capability-registry "Link to this heading")

scikitplot.corpus.default\_capability\_registry(**\***, **copy=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_capabilities.py#L882)[#](#scikitplot.corpus.default_capability_registry "Link to this definition")
:   Return the built-in component readiness registry.

    `copy=True` (default) prevents one caller’s registrations from mutating
    process-wide discovery for unrelated callers.

    Parameters:
    :   ****copy**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry")