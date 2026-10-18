# BudgetPolicy[#](#budgetpolicy "Link to this heading")

class scikitplot.corpus.BudgetPolicy(**max\_iterations=4**, **max\_retrieval\_calls=8**, **max\_subqueries=8**, **max\_evidence\_documents=64**, **max\_graph\_expansions=4**, **max\_wall\_time\_seconds=30.0**, **max\_context\_tokens=None**, **max\_model\_tokens=None**, **token\_counter=None**, **\_iterations=0**, **\_retrieval\_calls=0**, **\_subqueries=0**, **\_graph\_expansions=0**, **\_started=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L111)[#](#scikitplot.corpus.BudgetPolicy "Link to this definition")
:   Deterministic, decrementing limits on an investigation.

    Parameters:
    :   ****max\_iterations****int, optional


        ****max\_retrieval\_calls****int, optional


        ****max\_subqueries****int, optional


        ****max\_evidence\_documents****int, optional


        ****max\_graph\_expansions****int, optional


        ****max\_wall\_time\_seconds****float or None, optional


        ****max\_context\_tokens****int or None, optional


        ****max\_model\_tokens****int or None, optional


        ****token\_counter****callable or None, optional
        :   `str -> int`. Corpus cannot know the consumer’s model, so token
            budgets are ****caller-supplied****.

    Parameters:
    :   * ****max\_iterations**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_retrieval\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_subqueries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_evidence\_documents**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_graph\_expansions**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_wall\_time\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****max\_context\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_model\_tokens**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****token\_counter**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** **None**)
        * ****\_iterations**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****\_retrieval\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****\_subqueries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****\_graph\_expansions**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****\_started**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer.**** The policy is the **sole authority**: a model may propose a
    next step, the policy decides whether it runs (ADR-R10-002). Every check is
    arithmetic on counters and clocks, never a model call, so termination is
    provable.

    When `token_counter` is `None` the two token budgets are reported
    `UNENFORCEABLE` rather than silently treated as unlimited. Guessing with a
    chunking tokenizer would give a budget wrong by an unknown, model-dependent
    factor – a budget that **appears** enforced and is not, which is the same
    silent-partial-evidence shape found elsewhere in this codebase.

    check(**\***, **evidence\_count=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L176)[#](#scikitplot.corpus.BudgetPolicy.check "Link to this definition")
    :   Return a record naming the exhausted budget, or `None`.

        Notes

        Checked **before** an action runs, so the loop never exceeds a budget and
        then reports it.

        Parameters:
        :   ****evidence\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") | None

    debit\_iteration()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L216)[#](#scikitplot.corpus.BudgetPolicy.debit_iteration "Link to this definition")
    :   Record one loop iteration.

        Return type:
        :   None

    debit\_retrieval()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L220)[#](#scikitplot.corpus.BudgetPolicy.debit_retrieval "Link to this definition")
    :   Record one retrieval call.

        Return type:
        :   None

    max\_context\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BudgetPolicy.max_context_tokens "Link to this definition")

    max\_evidence\_documents: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 64[#](#scikitplot.corpus.BudgetPolicy.max_evidence_documents "Link to this definition")

    max\_graph\_expansions: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 4[#](#scikitplot.corpus.BudgetPolicy.max_graph_expansions "Link to this definition")

    max\_iterations: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 4[#](#scikitplot.corpus.BudgetPolicy.max_iterations "Link to this definition")

    max\_model\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BudgetPolicy.max_model_tokens "Link to this definition")

    max\_retrieval\_calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 8[#](#scikitplot.corpus.BudgetPolicy.max_retrieval_calls "Link to this definition")

    max\_subqueries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 8[#](#scikitplot.corpus.BudgetPolicy.max_subqueries "Link to this definition")

    max\_wall\_time\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = 30.0[#](#scikitplot.corpus.BudgetPolicy.max_wall_time_seconds "Link to this definition")

    spent()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L224)[#](#scikitplot.corpus.BudgetPolicy.spent "Link to this definition")
    :   Return what has been consumed so far.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    start()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L159)[#](#scikitplot.corpus.BudgetPolicy.start "Link to this definition")
    :   Begin the wall-clock budget.

        Return type:
        :   None

    token\_counter: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BudgetPolicy.token_counter "Link to this definition")

    unenforceable()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_agentic.py#L163)[#](#scikitplot.corpus.BudgetPolicy.unenforceable "Link to this definition")
    :   Budgets this policy cannot enforce, declared rather than assumed.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]