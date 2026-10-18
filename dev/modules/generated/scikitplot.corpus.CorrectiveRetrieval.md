# CorrectiveRetrieval[#](#correctiveretrieval "Link to this heading")

class scikitplot.corpus.CorrectiveRetrieval(**plan=None**, **grader=None**, **rewrite=None**, **max\_rounds=2**, **fusion=None**, **deadline\_seconds=None**, **on\_error='degrade'**, **clock=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_correction.py#L407)[#](#scikitplot.corpus.CorrectiveRetrieval "Link to this definition")
:   Grade, then accept, retry with a rewritten query, or abstain (CRAG).

    Parameters:
    :   ****plan****RetrievalExecutionPlan or None, default=None
        :   How one round retrieves: `plan.run(index, query)`. `None` is
            `index.search(query, **search_kwargs)`.

        ****grader****callable or None, default=None
        :   `grader(query, hits) -> GradeResult`. `None` is
            `TermCoverageGrader()`.

        ****rewrite****callable or None, default=None
        :   `rewrite(query, rounds) -> str or None`: the next round’s query,
            given the original query and the rounds so far. The proposal is
            stripped of surrounding whitespace; `None` (or a rewrite returning
            `None` or a query already run) means no retry. It is called only
            while rounds remain and the deadline has not passed.

        ****max\_rounds****int, default=2
        :   Rounds at most, the first included: the call budget.

        ****fusion****FusionPolicy or None, default=None
        :   Fuses the ambiguous rounds (one or more) for a `partial` result;
            `None` is `FusionPolicy()`. The leg of round `i` is named
            `"r{i}"`. A fusion that keeps no hit (every leg weighed 0) makes
            the result `abstained`. Fusing several rounds needs each hit’s
            identity (`doc_id`); without one, the first ambiguous round is
            returned unfused and `FUSE_FAILED` is recorded. One round is cut
            and weighed by the policy without needing an identity.

        ****deadline\_seconds****float or None, default=None
        :   No rewrite is asked for and no further round starts after this many
            seconds (checked before the rewrite and again before the round); a
            stop by the deadline is recorded (`DEADLINE_EXCEEDED`), so the
            result is `degraded`. Without a rewrite there is no further round,
            and no deadline stop.

        ****on\_error****{“degrade”, “raise”}, default=”degrade”
        :   A search, grader or rewrite that raises, whatever the reason (a
            keyword argument the index does not take included): recorded, with
            the round graded `incorrect` (`"degrade"`), or propagated. A
            failed or cancelled round is never graded: it is not evidence.

        ****clock****callable or None, default=None
        :   Seconds; `None` is [`time.perf_counter`](https://docs.python.org/3/library/time.html#time.perf_counter "(in Python v3.15)").

    Raises:
    :   TypeError, ValueError
        :   If a field is of the wrong type or out of range.

    Parameters:
    :   * ****plan**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****grader**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**GradeResult**](scikitplot.corpus.GradeResult.html#scikitplot.corpus.GradeResult "scikitplot.corpus._correction.GradeResult")**]** **|** **None**)
        * ****rewrite**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**CorrectionRound**](scikitplot.corpus.CorrectionRound.html#scikitplot.corpus.CorrectionRound "scikitplot.corpus._correction.CorrectionRound")**,** **...****]****]****,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None****]** **|** **None**)
        * ****max\_rounds**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****fusion**** ([**FusionPolicy**](scikitplot.corpus.FusionPolicy.html#scikitplot.corpus.FusionPolicy "scikitplot.corpus._fusion.FusionPolicy") **|** **None**)
        * ****deadline\_seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****on\_error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****clock**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****]****,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** **None**)

    Examples

    Try it in your browser!

    An index that returns only documents holding every query word finds
    nothing for the first query; the rewrite drops a word:

    ```
    >>> from types import SimpleNamespace as NS
    >>> from scikitplot.corpus import CorrectiveRetrieval, TermCoverageGrader
    >>> docs = {"a": "spans are slices", "b": "the cache key is a digest"}
    >>> class Index:
    ...     def search(self, query):
    ...         return [
    ...             NS(doc=NS(doc_id=k, text=t), score=1.0)
    ...             for k, t in docs.items()
    ...             if set(query.split()) <= set(t.split())
    ...         ]
    >>> corrective = CorrectiveRetrieval(
    ...     grader=TermCoverageGrader(accept=0.6),
    ...     rewrite=lambda query, rounds: " ".join(query.split()[:-1]) or None,
    ... )
    >>> result = corrective.run(Index(), "cache key size")
    >>> result.verdict.value, [r.grade.grade.value for r in result.rounds]
    ('corrected', ['incorrect', 'correct'])
    >>> [h.doc.doc_id for h in result]
    ['b']

    ```
    Go BackOpen In Tab

    bind(**index**, **\*\*search\_kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_correction.py#L523)[#](#scikitplot.corpus.CorrectiveRetrieval.bind "Link to this definition")
    :   Return `query -> self.run(index, query, **search_kwargs)`.

        Parameters:
        :   ****index****object
            :   What every round searches.

            ****\*\*search\_kwargs****
            :   Passed to every round.

        Returns:
        :   callable
            :   For [`evaluate_retrieval`](scikitplot.corpus.evaluate_retrieval.html#scikitplot.corpus.evaluate_retrieval "scikitplot.corpus.evaluate_retrieval").

        Parameters:
        :   * ****index**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****search\_kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [**CorrectionResult**](scikitplot.corpus.CorrectionResult.html#scikitplot.corpus.CorrectionResult "scikitplot.corpus._correction.CorrectionResult")]

    clock: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[], [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorrectiveRetrieval.clock "Link to this definition")

    deadline\_seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorrectiveRetrieval.deadline_seconds "Link to this definition")

    fusion: [FusionPolicy](scikitplot.corpus.FusionPolicy.html#scikitplot.corpus.FusionPolicy "scikitplot.corpus._fusion.FusionPolicy") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorrectiveRetrieval.fusion "Link to this definition")

    grader: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], [GradeResult](scikitplot.corpus.GradeResult.html#scikitplot.corpus.GradeResult "scikitplot.corpus._correction.GradeResult")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorrectiveRetrieval.grader "Link to this definition")

    max\_rounds: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2[#](#scikitplot.corpus.CorrectiveRetrieval.max_rounds "Link to this definition")

    on\_error: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'degrade'[#](#scikitplot.corpus.CorrectiveRetrieval.on_error "Link to this definition")

    plan: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.CorrectiveRetrieval.plan "Link to this definition")

    rewrite: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[CorrectionRound](scikitplot.corpus.CorrectionRound.html#scikitplot.corpus.CorrectionRound "scikitplot.corpus._correction.CorrectionRound"), ...]], [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorrectiveRetrieval.rewrite "Link to this definition")

    run(**index**, **query**, **\*\*search\_kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_correction.py#L548)[#](#scikitplot.corpus.CorrectiveRetrieval.run "Link to this definition")
    :   Run up to `max_rounds` graded rounds for `query`.

        Parameters:
        :   ****index****object
            :   Anything with `search` (or what `plan.run` takes).

            ****query****str
            :   A non-empty query.

            ****\*\*search\_kwargs****
            :   Passed to `index.search` (or `plan.run`) in every round.

        Returns:
        :   CorrectionResult

        Parameters:
        :   * ****index**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****search\_kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**CorrectionResult**](scikitplot.corpus.CorrectionResult.html#scikitplot.corpus.CorrectionResult "scikitplot.corpus._correction.CorrectionResult")