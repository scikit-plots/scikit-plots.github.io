# CapabilityRegistry[#](#capabilityregistry "Link to this heading")

class scikitplot.corpus.CapabilityRegistry(**specs=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L616)[#](#scikitplot.corpus.CapabilityRegistry "Link to this definition")
:   Explicit, side-effect-free registry for component readiness probes.

    The registry is intentionally an object rather than hidden global plugin
    magic. Applications may copy/extend the default registry or construct a
    fully custom registry for private backends.

    Parameters:
    :   ****specs**** (**Iterable****[**[**CapabilitySpec**](scikitplot.corpus.CapabilitySpec.html#scikitplot.corpus.CapabilitySpec "scikitplot.corpus.CapabilitySpec")**]**)

    copy()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L692)[#](#scikitplot.corpus.CapabilityRegistry.copy "Link to this definition")
    :   Return an independent registry containing the same immutable specs.

        Return type:
        :   [**CapabilityRegistry**](#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry")

    get(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L639)[#](#scikitplot.corpus.CapabilityRegistry.get "Link to this definition")
    :   Return a registered spec.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**CapabilitySpec**](scikitplot.corpus.CapabilitySpec.html#scikitplot.corpus.CapabilitySpec "scikitplot.corpus._capabilities.CapabilitySpec")

    names(**\***, **role=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L648)[#](#scikitplot.corpus.CapabilityRegistry.names "Link to this definition")
    :   Return stable capability names, optionally filtered by role.

        Parameters:
        :   ****role**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    probe(**name**, **\***, **selected=False**, **active=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L662)[#](#scikitplot.corpus.CapabilityRegistry.probe "Link to this definition")
    :   Probe one capability without loading/downloading heavy assets.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****selected**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****active**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [**CapabilityReport**](scikitplot.corpus.CapabilityReport.html#scikitplot.corpus.CapabilityReport "scikitplot.corpus._capabilities.CapabilityReport")

    register(**spec**, **\***, **replace=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L629)[#](#scikitplot.corpus.CapabilityRegistry.register "Link to this definition")
    :   Register **spec**; refuse accidental replacement by default.

        Parameters:
        :   * ****spec**** ([**CapabilitySpec**](scikitplot.corpus.CapabilitySpec.html#scikitplot.corpus.CapabilitySpec "scikitplot.corpus._capabilities.CapabilitySpec"))
            * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   None

    roles()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L658)[#](#scikitplot.corpus.CapabilityRegistry.roles "Link to this definition")
    :   Return the stable set of registered capability roles.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    snapshot(**names=None**, **\***, **selected=()**, **active=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L672)[#](#scikitplot.corpus.CapabilityRegistry.snapshot "Link to this definition")
    :   Probe several capabilities in stable name order.

        Parameters:
        :   * ****names**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****selected**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****active**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**CapabilityReport**](scikitplot.corpus.CapabilityReport.html#scikitplot.corpus.CapabilityReport "scikitplot.corpus._capabilities.CapabilityReport")]

    unregister(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_capabilities.py#L635)[#](#scikitplot.corpus.CapabilityRegistry.unregister "Link to this definition")
    :   Remove **name**; raise `KeyError` when it is unknown.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   None