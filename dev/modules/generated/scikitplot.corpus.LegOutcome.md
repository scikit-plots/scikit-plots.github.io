# LegOutcome[#](#legoutcome "Link to this heading")

class scikitplot.corpus.LegOutcome(**leg**, **status**, **hit\_count=0**, **generation=None**, **backend=None**, **error=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrieval.py#L150)[#](#scikitplot.corpus.LegOutcome "Link to this definition")
:   How one evidence path fared.

    Parameters:
    :   ****leg****LegKind
        :   Which evidence path this describes.

        ****status****LegStatus
        :   Outcome for this leg.

        ****hit\_count****int, optional
        :   Hits contributed **before** fusion.

        ****generation****int or None, optional
        :   Index generation the leg ran against, for provenance.

        ****backend****str or None, optional
        :   Backend that served the leg, when applicable.

        ****error****ErrorRecord or None, optional
        :   Required when `status` is `DEGRADED` or `FAILED`.

    Raises:
    :   ValueError
        :   If `status` is `DEGRADED` or `FAILED` and `error` is `None`.

    Parameters:
    :   * ****leg**** ([**LegKind**](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind"))
        * ****status**** ([**LegStatus**](scikitplot.corpus.LegStatus.html#scikitplot.corpus.LegStatus "scikitplot.corpus._retrieval.LegStatus"))
        * ****hit\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****generation**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****error**** ([**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") **|** **None**)

    Notes

    ****Developer.**** The `error`-required invariant is enforced in
    `__post_init__` rather than documented, because an unexplained degradation
    is exactly as unhelpful as no degradation signal at all.

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.backend "Link to this definition")

    error: [ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.error "Link to this definition")

    generation: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.LegOutcome.generation "Link to this definition")

    hit\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.LegOutcome.hit_count "Link to this definition")

    leg: [LegKind](scikitplot.corpus.LegKind.html#scikitplot.corpus.LegKind "scikitplot.corpus._retrieval.LegKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrieval.py#L150)[#](#scikitplot.corpus.LegOutcome.leg "Link to this definition")

    property ran: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.LegOutcome.ran "Link to this definition")
    :   Whether the leg actually executed.

    status: [LegStatus](scikitplot.corpus.LegStatus.html#scikitplot.corpus.LegStatus "scikitplot.corpus._retrieval.LegStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrieval.py#L150)[#](#scikitplot.corpus.LegOutcome.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_retrieval.py#L201)[#](#scikitplot.corpus.LegOutcome.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]