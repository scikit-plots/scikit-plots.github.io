# DiscoveryOutcome[#](#discoveryoutcome "Link to this heading")

class scikitplot.corpus.DiscoveryOutcome(**source**, **status**, **count=0**, **reason=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_catalog.py#L81)[#](#scikitplot.corpus.DiscoveryOutcome "Link to this definition")
:   What happened when one source was asked for its components.

    Parameters:
    :   ****source****str
        :   Import path of the source consulted.

        ****status****DiscoveryStatus
        :   Terminal outcome.

        ****count****int
        :   Components contributed. Always `0` unless the status is `OK`.

        ****reason****str or None
        :   Why a `BROKEN` source could not be consulted, as the exception type
            and message. `None` for the other statuses, because there is nothing
            to explain about a source that worked.

    Parameters:
    :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****status**** ([**DiscoveryStatus**](scikitplot.corpus.DiscoveryStatus.html#scikitplot.corpus.DiscoveryStatus "scikitplot.corpus._catalog.DiscoveryStatus"))
        * ****count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.DiscoveryOutcome.count "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.DiscoveryOutcome.reason "Link to this definition")

    source: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_catalog.py#L81)[#](#scikitplot.corpus.DiscoveryOutcome.source "Link to this definition")

    status: [DiscoveryStatus](scikitplot.corpus.DiscoveryStatus.html#scikitplot.corpus.DiscoveryStatus "scikitplot.corpus._catalog.DiscoveryStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_catalog.py#L81)[#](#scikitplot.corpus.DiscoveryOutcome.status "Link to this definition")