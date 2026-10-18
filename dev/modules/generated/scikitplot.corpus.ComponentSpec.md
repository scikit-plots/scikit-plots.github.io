# ComponentSpec[#](#componentspec "Link to this heading")

class scikitplot.corpus.ComponentSpec(**name**, **category**, **implementation**, **status=CapabilityStatus.UNKNOWN**, **reason\_code=None**, **aliases=()**, **optional\_dependencies=()**, **capabilities=<factory>**, **config\_type=None**, **version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_catalog.py#L105)[#](#scikitplot.corpus.ComponentSpec "Link to this definition")
:   Everything the catalog knows about one component.

    Parameters:
    :   ****name****str
        :   Registry key, e.g. `"sentence"` or `"annoy"`.

        ****category****str
        :   Component category, e.g. `"chunker"`, `"index"`, `"reader"`.

        ****implementation****str
        :   Fully-qualified class path, for provenance.

        ****status****CapabilityStatus, optional
        :   Whether the component is usable. `UNKNOWN` when the registry offers no
            probe – which is honest, and different from claiming availability.

        ****reason\_code****str or None, optional
        :   Stable machine-readable reason, `None` when `AVAILABLE`.

        ****aliases****tuple of str, optional
        :   Alternative names accepted at call sites but not separate entries.

        ****optional\_dependencies****tuple of str, optional
        :   Distributions this component needs.

        ****capabilities****dict, optional
        :   Declared properties, e.g. an index backend’s `metric` and
            `score_semantics`.

        ****config\_type****str or None, optional
        :   Name of the configuration class this component accepts.

        ****version****str or None, optional
        :   Version of the providing distribution.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****category**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****implementation**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**CapabilityStatus**](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus._capabilities.CapabilityStatus"))
        * ****reason\_code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****aliases**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****optional\_dependencies**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****capabilities**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****config\_type**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer.**** `frozen=True`: a spec describes a registration as observed
    at snapshot time. Mutating it would let a catalog disagree with the
    registry it was built from.

    aliases: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.ComponentSpec.aliases "Link to this definition")

    property available: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.ComponentSpec.available "Link to this definition")
    :   Whether the component is usable now.

        Notes

        Derived from [`status`](#scikitplot.corpus.ComponentSpec.status "scikitplot.corpus.ComponentSpec.status"), which is the authority. `UNKNOWN` is
        ****not**** available: an unprobed component must not be reported as usable.

    capabilities: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_catalog.py#L105)[#](#scikitplot.corpus.ComponentSpec.capabilities "Link to this definition")

    category: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_catalog.py#L105)[#](#scikitplot.corpus.ComponentSpec.category "Link to this definition")

    config\_type: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ComponentSpec.config_type "Link to this definition")

    implementation: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_catalog.py#L105)[#](#scikitplot.corpus.ComponentSpec.implementation "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_catalog.py#L105)[#](#scikitplot.corpus.ComponentSpec.name "Link to this definition")

    optional\_dependencies: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.ComponentSpec.optional_dependencies "Link to this definition")

    reason\_code: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ComponentSpec.reason_code "Link to this definition")

    status: [CapabilityStatus](scikitplot.corpus.CapabilityStatus.html#scikitplot.corpus.CapabilityStatus "scikitplot.corpus._capabilities.CapabilityStatus") = 'unknown'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_capabilities.py#L)[#](#scikitplot.corpus.ComponentSpec.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_catalog.py#L163)[#](#scikitplot.corpus.ComponentSpec.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.ComponentSpec.version "Link to this definition")