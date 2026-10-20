# StageOutcome[#](#stageoutcome "Link to this heading")

class scikitplot.corpus.StageOutcome(**stage**, **status**, **component=None**, **items\_in=0**, **items\_out=0**, **calls=0**, **seconds=0.0**, **budget=None**, **error=None**, **details=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L211)[#](#scikitplot.corpus.StageOutcome "Link to this definition")
:   How one stage fared.

    Parameters:
    :   ****stage****StageKind
        :   Which stage.

        ****status****StageStatus
        :   Its outcome.

        ****component****str or None, default=None
        :   Name of the configured callable, for provenance.

        ****items\_in, items\_out****int, default=0
        :   Queries (`transform`, `retrieve`) or hits (the other stages) the
            stage received and produced.

        ****calls****int, default=0
        :   Calls the stage started.

        ****seconds****float, default=0.0
        :   Time the stage took.

        ****budget****StageBudget or None, default=None
        :   The budget it ran under.

        ****error****ErrorRecord or None, default=None
        :   Required when `status` is `DEGRADED`, `FAILED` or `CANCELLED`.

        ****details****tuple of (str, object) pairs, default=()
        :   Stage-specific facts (queries dropped, rerank depth, …).

    Raises:
    :   ValueError
        :   If `status` is `DEGRADED`, `FAILED` or `CANCELLED` and
            `error` is `None`.

    Parameters:
    :   * ****stage**** ([**StageKind**](scikitplot.corpus.StageKind.html#scikitplot.corpus.StageKind "scikitplot.corpus._execution.StageKind"))
        * ****status**** ([**StageStatus**](scikitplot.corpus.StageStatus.html#scikitplot.corpus.StageStatus "scikitplot.corpus._execution.StageStatus"))
        * ****component**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****items\_in**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****items\_out**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****budget**** ([**StageBudget**](scikitplot.corpus.StageBudget.html#scikitplot.corpus.StageBudget "scikitplot.corpus._execution.StageBudget") **|** **None**)
        * ****error**** ([**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") **|** **None**)
        * ****details**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)

    budget: [StageBudget](scikitplot.corpus.StageBudget.html#scikitplot.corpus.StageBudget "scikitplot.corpus._execution.StageBudget") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.StageOutcome.budget "Link to this definition")

    calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.StageOutcome.calls "Link to this definition")

    component: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.StageOutcome.component "Link to this definition")

    details: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.corpus.StageOutcome.details "Link to this definition")

    error: [ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.StageOutcome.error "Link to this definition")

    items\_in: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.StageOutcome.items_in "Link to this definition")

    items\_out: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.StageOutcome.items_out "Link to this definition")

    property ran: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.StageOutcome.ran "Link to this definition")
    :   Whether the stage produced its output in full.

    seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.corpus.StageOutcome.seconds "Link to this definition")

    stage: [StageKind](scikitplot.corpus.StageKind.html#scikitplot.corpus.StageKind "scikitplot.corpus._execution.StageKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L211)[#](#scikitplot.corpus.StageOutcome.stage "Link to this definition")

    status: [StageStatus](scikitplot.corpus.StageStatus.html#scikitplot.corpus.StageStatus "scikitplot.corpus._execution.StageStatus")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L211)[#](#scikitplot.corpus.StageOutcome.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_execution.py#L268)[#](#scikitplot.corpus.StageOutcome.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]