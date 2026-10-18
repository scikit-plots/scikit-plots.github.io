# LegOutcome[#](#legoutcome "Link to this heading")

class scikitplot.corpus.LegOutcome(**leg**, **status**, **hit\_count=0**, **generation=None**, **backend=None**, **error=None**, **filter\_capability=None**, **requested\_backend=None**, **fallback\_reason=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_retrieval.py#L151)[#](#scikitplot.corpus.LegOutcome "Link to this definition")
:   How one evidence path fared.

    Parameters:
    :   ****leg****LegKind
        :   Which evidence path this describes.

        ****status****LegStatus
        :   Outcome for this leg.

        ****hit\_count****int, optional
        :   Hits contributed **before** fusion.

        ****generation****IndexGeneration or None, optional
        :   Index generation the leg ran against, for provenance;
            [`to_dict`](#scikitplot.corpus.LegOutcome.to_dict "scikitplot.corpus.LegOutcome.to_dict") writes its own `to_dict()`.

        ****backend****str or None, optional
        :   Backend that served the leg, when applicable.

        ****error****ErrorRecord or None, optional
        :   Required when `status` is `DEGRADED` or `FAILED`.

        ****filter\_capability****FilterCapability or None, optional
        :   How the leg answered the query’s filter (R2-2): every operator
            `SUPPORTED` or `EMULATED`; `None` when no filter was applied or
            the leg did not run. A leg never runs with a filter it ignored.

        ****requested\_backend****str or None, optional
        :   What the configuration asked to serve the leg (`"auto"`, a backend
            name), when a backend served it (R2-5).

        ****fallback\_reason****str or None, optional
        :   Why `backend` is not what was requested, when it is not: a closed
            vocabulary of the backend (`"annoy_broken"`,
            `"option_unsupported"`, …); `None` otherwise.

    Raises:
    :   ValueError
        :   If `status` is `DEGRADED` or `FAILED` and `error` is `None`.

    Parameters:
    :   * ****leg**** ([**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"))
        * ****status**** ([**LegStatus**](scikitplot.corpus.LegStatus.html#scikitplot.corpus.LegStatus "scikitplot.corpus._retrieval.LegStatus"))
        * ****hit\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****generation**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****error**** ([**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") **|** **None**)
        * ****filter\_capability**** ([**FilterCapability**](scikitplot.corpus.FilterCapability.html#scikitplot.corpus.FilterCapability "scikitplot.corpus._filters.FilterCapability") **|** **None**)
        * ****requested\_backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****fallback\_reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer.**** The `error`-required invariant is enforced in
    `__post_init__` rather than documented, because an unexplained degradation
    is exactly as unhelpful as no degradation signal at all.

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.backend "Link to this definition")

    error: [ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.error "Link to this definition")

    fallback\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.fallback_reason "Link to this definition")

    filter\_capability: [FilterCapability](scikitplot.corpus.FilterCapability.html#scikitplot.corpus.FilterCapability "scikitplot.corpus._filters.FilterCapability") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.filter_capability "Link to this definition")

    generation: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.generation "Link to this definition")

    hit\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.LegOutcome.hit_count "Link to this definition")

    leg: [LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_retrieval.py#L151)[#](#scikitplot.corpus.LegOutcome.leg "Link to this definition")

    property ran: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.LegOutcome.ran "Link to this definition")
    :   Whether the leg actually executed.

    requested\_backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.requested_backend "Link to this definition")

    status: [LegStatus](scikitplot.corpus.LegStatus.html#scikitplot.corpus.LegStatus "scikitplot.corpus._retrieval.LegStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_retrieval.py#L151)[#](#scikitplot.corpus.LegOutcome.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_retrieval.py#L217)[#](#scikitplot.corpus.LegOutcome.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]