# plan\_backend\_chain[#](#plan-backend-chain "Link to this heading")

scikitplot.corpus.plan\_backend\_chain(**candidates**, **\***, **policy=None**, **capability\_registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_backends.py#L452)[#](#scikitplot.corpus.plan_backend_chain "Link to this definition")
:   Resolve backend order/readiness without executing a backend.

    This is suitable for diagnostics, galleries, CI preflight and user-facing
    explain tooling. Capability probes must remain side-effect-free; unknown
    model-cache state therefore stays `UNKNOWN` instead of triggering a
    download merely to answer a readiness question.

    Parameters:
    :   * ****candidates**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**BackendCandidate**](scikitplot.corpus.BackendCandidate.html#scikitplot.corpus.BackendCandidate "scikitplot.corpus._backends.BackendCandidate")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)
        * ****policy**** ([**BackendPolicy**](scikitplot.corpus.BackendPolicy.html#scikitplot.corpus.BackendPolicy "scikitplot.corpus._backends.BackendPolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****capability\_registry**** ([**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry") **|** **None**)

    Return type:
    :   [**BackendPlan**](scikitplot.corpus.BackendPlan.html#scikitplot.corpus.BackendPlan "scikitplot.corpus._backends.BackendPlan")