# RunSummary[#](#runsummary "Link to this heading")

class scikitplot.agent.RunSummary(**run\_id**, **goal**, **parent**, **status**, **stop\_reason**, **decisions**, **tool\_calls**, **outcomes**, **denials**, **approvals\_requested**, **approvals\_granted**, **approvals\_refused**, **subruns**, **plan\_changes**, **tokens**, **cost**, **wall\_seconds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary "Link to this definition")
:   What one run did, read from its audit records.

    Parameters:
    :   ****run\_id****str


        ****goal****str


        ****parent****str or None
        :   The parent run’s id, for a sub-run.

        ****status, stop\_reason****str or None
        :   From the run’s last `run_ended` record; `None` while it has not
            ended.

        ****decisions****int


        ****tool\_calls****int
        :   Calls started, retries included.

        ****outcomes****dict of str to int
        :   Steps by outcome (`executed`, `failed`, `denied`, …).

        ****denials****dict of str to int
        :   Denied and failed steps by error code.

        ****approvals\_requested, approvals\_granted, approvals\_refused****int


        ****subruns****int


        ****plan\_changes****int
        :   Decisions that carried a plan.

        ****tokens****int or None


        ****cost****float or None
        :   From the `run_ended` record.

        ****wall\_seconds****float
        :   Last record time minus first.

    Parameters:
    :   * ****run\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****goal**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****parent**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****stop\_reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****decisions**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****tool\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****outcomes**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****denials**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****approvals\_requested**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****approvals\_granted**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****approvals\_refused**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****subruns**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****plan\_changes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****cost**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****wall\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    approvals\_granted: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.approvals_granted "Link to this definition")

    approvals\_refused: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.approvals_refused "Link to this definition")

    approvals\_requested: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.approvals_requested "Link to this definition")

    cost: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.cost "Link to this definition")

    decisions: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.decisions "Link to this definition")

    denials: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.denials "Link to this definition")

    goal: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.goal "Link to this definition")

    outcomes: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.outcomes "Link to this definition")

    parent: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.parent "Link to this definition")

    plan\_changes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.plan_changes "Link to this definition")

    run\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.run_id "Link to this definition")

    status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.status "Link to this definition")

    stop\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.stop_reason "Link to this definition")

    subruns: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.subruns "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L92)[#](#scikitplot.agent.RunSummary.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.tokens "Link to this definition")

    tool\_calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.tool_calls "Link to this definition")

    wall\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/agent/_evaluate.py#L42)[#](#scikitplot.agent.RunSummary.wall_seconds "Link to this definition")