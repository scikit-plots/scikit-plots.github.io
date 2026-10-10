# InvestigationOutcome[#](#investigationoutcome "Link to this heading")

class scikitplot.corpus.InvestigationOutcome(**status**, **stop\_reason**, **hits=()**, **signals=None**, **session=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_agentic.py#L407)[#](#scikitplot.corpus.InvestigationOutcome "Link to this definition")
:   The result of a bounded investigation.

    Parameters:
    :   * ****status**** ([**InvestigationStatus**](scikitplot.corpus.InvestigationStatus.html#scikitplot.corpus.InvestigationStatus "scikitplot.corpus._agentic.InvestigationStatus"))
        * ****stop\_reason**** ([**StopReason**](scikitplot.corpus.StopReason.html#scikitplot.corpus.StopReason "scikitplot.corpus._agentic.StopReason"))
        * ****hits**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** **...****]**)
        * ****signals**** ([**SufficiencySignals**](scikitplot.corpus.SufficiencySignals.html#scikitplot.corpus.SufficiencySignals "scikitplot.corpus._agentic.SufficiencySignals") **|** **None**)
        * ****session**** ([**AgenticRetrievalSession**](scikitplot.corpus.AgenticRetrievalSession.html#scikitplot.corpus.AgenticRetrievalSession "scikitplot.corpus._agentic.AgenticRetrievalSession") **|** **None**)

    hits: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.InvestigationOutcome.hits "Link to this definition")

    session: [AgenticRetrievalSession](scikitplot.corpus.AgenticRetrievalSession.html#scikitplot.corpus.AgenticRetrievalSession "scikitplot.corpus._agentic.AgenticRetrievalSession") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.InvestigationOutcome.session "Link to this definition")

    signals: [SufficiencySignals](scikitplot.corpus.SufficiencySignals.html#scikitplot.corpus.SufficiencySignals "scikitplot.corpus._agentic.SufficiencySignals") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.InvestigationOutcome.signals "Link to this definition")

    status: [InvestigationStatus](scikitplot.corpus.InvestigationStatus.html#scikitplot.corpus.InvestigationStatus "scikitplot.corpus._agentic.InvestigationStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_agentic.py#L407)[#](#scikitplot.corpus.InvestigationOutcome.status "Link to this definition")

    stop\_reason: [StopReason](scikitplot.corpus.StopReason.html#scikitplot.corpus.StopReason "scikitplot.corpus._agentic.StopReason")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_agentic.py#L407)[#](#scikitplot.corpus.InvestigationOutcome.stop_reason "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_agentic.py#L417)[#](#scikitplot.corpus.InvestigationOutcome.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]