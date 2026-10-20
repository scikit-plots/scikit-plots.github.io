# run\_investigation[#](#run-investigation "Link to this heading")

scikitplot.corpus.run\_investigation(**session**, **retrieve**, **\***, **plan=None**, **min\_evidence=2**, **required\_entities=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_agentic.py#L428)[#](#scikitplot.corpus.run_investigation "Link to this definition")
:   Run the bounded retrieve/evaluate/refine loop (autonomy level A2).

    Parameters:
    :   ****session****AgenticRetrievalSession


        ****retrieve****callable
        :   `str -> RetrievalResponse`. Supplied by the caller, so this loop
            performs no I/O of its own.

        ****plan****RoutePlan or None, optional
        :   Defaults to [`route`](scikitplot.corpus.route.html#scikitplot.corpus.route "scikitplot.corpus.route").

        ****min\_evidence****int, optional
        :   Distinct documents required for sufficiency.

        ****required\_entities****iterable of str, optional

    Returns:
    :   InvestigationOutcome
        :   Always carrying a [`StopReason`](scikitplot.corpus.StopReason.html#scikitplot.corpus.StopReason "scikitplot.corpus.StopReason").

    Parameters:
    :   * ****session**** ([**AgenticRetrievalSession**](scikitplot.corpus.AgenticRetrievalSession.html#scikitplot.corpus.AgenticRetrievalSession "scikitplot.corpus._agentic.AgenticRetrievalSession"))
        * ****retrieve**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****plan**** ([**RoutePlan**](scikitplot.corpus.RoutePlan.html#scikitplot.corpus.RoutePlan "scikitplot.corpus._agentic.RoutePlan") **|** **None**)
        * ****min\_evidence**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****required\_entities**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Return type:
    :   [**InvestigationOutcome**](scikitplot.corpus.InvestigationOutcome.html#scikitplot.corpus.InvestigationOutcome "scikitplot.corpus._agentic.InvestigationOutcome")

    Notes

    ****Developer.**** No-progress detection compares the `doc_id` ****set**** between
    rounds – free, because `doc_id` is stable and content-derived, and it
    gives a provable upper bound on iterations independent of budget exhaustion.
    A loop whose stopping condition depends on a model call is one whose
    termination cannot be proven.