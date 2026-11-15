# BackendOutcome[#](#backendoutcome "Link to this heading")

class scikitplot.corpus.BackendOutcome(**status**, **value**, **backend**, **attempted**, **missed**, **errors**, **skipped=()**, **policy='resilient'**, **selected\_capabilities=()**, **active\_capability=None**, **skip\_details=()**, **requested\_backend=None**, **allow\_fallback=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L592)[#](#scikitplot.corpus.BackendOutcome "Link to this definition")
:   Structured, serialisable outcome from [`run_backend_chain`](scikitplot.corpus.run_backend_chain.html#scikitplot.corpus.run_backend_chain "scikitplot.corpus.run_backend_chain").

    Notes

    ****User.**** The fallback vocabulary (R2-5) shared with the vector backends
    and `SemanticChunker`: `requested_backend` is the first candidate the
    policy allows to run (a candidate the policy skips – network disabled,
    not ready – was never eligible, like an absent backend under
    `"auto"`; `skipped` and `skip_details` record it), `backend` the
    one that produced the value, `allow_fallback` the policy’s switch
    (`False`: no other candidate is attempted), and [`fallback_reason`](#scikitplot.corpus.BackendOutcome.fallback_reason "scikitplot.corpus.BackendOutcome.fallback_reason")
    why they differ: `"failed"` (it raised) or `"no_result"` (it returned
    nothing usable).

    Parameters:
    :   * ****status**** ([**BackendStatus**](scikitplot.corpus.BackendStatus.html#scikitplot.corpus.BackendStatus "scikitplot.corpus._backends.BackendStatus"))
        * ****value**** (**\_T**)
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****attempted**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****missed**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****errors**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")**,** **...****]**)
        * ****skipped**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****policy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****selected\_capabilities**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****active\_capability**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****skip\_details**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**BackendSkip**](scikitplot.corpus.BackendSkip.html#scikitplot.corpus.BackendSkip "scikitplot.corpus._backends.BackendSkip")**,** **...****]**)
        * ****requested\_backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****allow\_fallback**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    active\_capability: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BackendOutcome.active_capability "Link to this definition")

    allow\_fallback: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BackendOutcome.allow_fallback "Link to this definition")

    attempted: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L592)[#](#scikitplot.corpus.BackendOutcome.attempted "Link to this definition")

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L592)[#](#scikitplot.corpus.BackendOutcome.backend "Link to this definition")

    capability\_view(**\***, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L670)[#](#scikitplot.corpus.BackendOutcome.capability_view "Link to this definition")
    :   Return readiness records with selected/active runtime provenance.

        Parameters:
        :   ****registry**** ([**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry") **|** **None**)

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    errors: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L592)[#](#scikitplot.corpus.BackendOutcome.errors "Link to this definition")

    property fallback\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.BackendOutcome.fallback_reason "Link to this definition")
    :   Why `backend` is not `requested_backend`, or `None`.

        Returns:
        :   str or None
            :   `"failed"` or `"no_result"` for the requested candidate’s fate;
                `None` when it produced the value, or when no candidate was
                eligible.

    missed: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L592)[#](#scikitplot.corpus.BackendOutcome.missed "Link to this definition")

    policy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'resilient'[#](#scikitplot.corpus.BackendOutcome.policy "Link to this definition")

    requested\_backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BackendOutcome.requested_backend "Link to this definition")

    selected\_capabilities: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.BackendOutcome.selected_capabilities "Link to this definition")

    skip\_details: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[BackendSkip](scikitplot.corpus.BackendSkip.html#scikitplot.corpus.BackendSkip "scikitplot.corpus._backends.BackendSkip"), ...] = ()[#](#scikitplot.corpus.BackendOutcome.skip_details "Link to this definition")

    skipped: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.BackendOutcome.skipped "Link to this definition")

    status: [BackendStatus](scikitplot.corpus.BackendStatus.html#scikitplot.corpus.BackendStatus "scikitplot.corpus._backends.BackendStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L592)[#](#scikitplot.corpus.BackendOutcome.status "Link to this definition")

    property succeeded: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.BackendOutcome.succeeded "Link to this definition")
    :   Whether some backend completed successfully.

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L652)[#](#scikitplot.corpus.BackendOutcome.to_dict "Link to this definition")
    :   Return a JSON-compatible representation without live exceptions.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    value: \_T[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L592)[#](#scikitplot.corpus.BackendOutcome.value "Link to this definition")