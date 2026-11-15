# BackendPlan[#](#backendplan "Link to this heading")

class scikitplot.corpus.BackendPlan(**policy**, **declared**, **ordered**, **eligible**, **selected**, **skipped=()**, **selected\_capabilities=()**, **skip\_details=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L401)[#](#scikitplot.corpus.BackendPlan "Link to this definition")
:   Side-effect-free preflight of candidate ordering and policy eligibility.

    `BackendPlan` is the discovery counterpart to [`BackendOutcome`](scikitplot.corpus.BackendOutcome.html#scikitplot.corpus.BackendOutcome "scikitplot.corpus.BackendOutcome").
    It executes no backend callable and performs only lightweight capability
    probes. The runtime runner consumes this exact plan-building logic, so
    preflight and execution cannot silently diverge in ordering or policy.

    Parameters:
    :   * ****policy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****declared**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****ordered**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****eligible**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****selected**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****skipped**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****selected\_capabilities**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****skip\_details**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**BackendSkip**](scikitplot.corpus.BackendSkip.html#scikitplot.corpus.BackendSkip "scikitplot.corpus._backends.BackendSkip")**,** **...****]**)

    capability\_view(**\***, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L433)[#](#scikitplot.corpus.BackendPlan.capability_view "Link to this definition")
    :   Return readiness records with this plan’s selection marked.

        Parameters:
        :   ****registry**** ([**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry") **|** **None**)

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    declared: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L401)[#](#scikitplot.corpus.BackendPlan.declared "Link to this definition")

    eligible: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L401)[#](#scikitplot.corpus.BackendPlan.eligible "Link to this definition")

    ordered: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L401)[#](#scikitplot.corpus.BackendPlan.ordered "Link to this definition")

    policy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L401)[#](#scikitplot.corpus.BackendPlan.policy "Link to this definition")

    selected: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L401)[#](#scikitplot.corpus.BackendPlan.selected "Link to this definition")

    selected\_capabilities: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.BackendPlan.selected_capabilities "Link to this definition")

    skip\_details: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[BackendSkip](scikitplot.corpus.BackendSkip.html#scikitplot.corpus.BackendSkip "scikitplot.corpus._backends.BackendSkip"), ...] = ()[#](#scikitplot.corpus.BackendPlan.skip_details "Link to this definition")

    skipped: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.corpus.BackendPlan.skipped "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_backends.py#L420)[#](#scikitplot.corpus.BackendPlan.to_dict "Link to this definition")
    :   Return a JSON-compatible representation.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]