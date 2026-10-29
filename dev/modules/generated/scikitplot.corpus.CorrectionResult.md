# CorrectionResult[#](#correctionresult "Link to this heading")

class scikitplot.corpus.CorrectionResult(**query**, **verdict**, **rounds**, **hits**, **stop\_reason**, **errors=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L322)[#](#scikitplot.corpus.CorrectionResult "Link to this definition")
:   The returned hits, the verdict, and every round.

    Iterating it yields the hits, so it is read like a search response.

    Parameters:
    :   ****query****str
        :   The query as given.

        ****verdict****CorrectionVerdict
        :   What the retrieval came to.

        ****rounds****tuple of CorrectionRound
        :   Every round run, in order.

        ****hits****tuple
        :   The accepted round’s hits; the fused ambiguous rounds’ hits for
            `partial`; none for `abstained`.

        ****stop\_reason****str
        :   `"accepted"`, `"max_rounds"`, `"no_rewrite"` (the rewrite
            proposed no new query), `"deadline"` or `"rewrite_failed"`.

        ****errors****tuple of ErrorRecord, default=()
        :   Every error: a round whose search failed or whose response was not
            complete, a grader or rewrite that failed, a fusion that could not
            run, the deadline.

    Parameters:
    :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****verdict**** ([**CorrectionVerdict**](scikitplot.corpus.CorrectionVerdict.html#scikitplot.corpus.CorrectionVerdict "scikitplot.corpus._correction.CorrectionVerdict"))
        * ****rounds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**CorrectionRound**](scikitplot.corpus.CorrectionRound.html#scikitplot.corpus.CorrectionRound "scikitplot.corpus._correction.CorrectionRound")**,** **...****]**)
        * ****hits**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**,** **...****]**)
        * ****stop\_reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****errors**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")**,** **...****]**)

    error\_records()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L386)[#](#scikitplot.corpus.CorrectionResult.error_records "Link to this definition")
    :   Return the errors, as a search response does.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord")]

    errors: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord"), ...] = ()[#](#scikitplot.corpus.CorrectionResult.errors "Link to this definition")

    hits: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L322)[#](#scikitplot.corpus.CorrectionResult.hits "Link to this definition")

    query: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L322)[#](#scikitplot.corpus.CorrectionResult.query "Link to this definition")

    rounds: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[CorrectionRound](scikitplot.corpus.CorrectionRound.html#scikitplot.corpus.CorrectionRound "scikitplot.corpus._correction.CorrectionRound"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L322)[#](#scikitplot.corpus.CorrectionResult.rounds "Link to this definition")

    property status: [RetrievalStatus](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus._retrieval.RetrievalStatus")[#](#scikitplot.corpus.CorrectionResult.status "Link to this definition")
    :   Return the status a search response would have.

        Returns:
        :   RetrievalStatus
            :   `cancelled` when every round was cancelled (no hit is then
                returned: a cancelled round is not graded); `degraded` when any
                error was recorded (every incomplete round response records
                one); otherwise `success` with hits and `empty` without.

    stop\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L322)[#](#scikitplot.corpus.CorrectionResult.stop_reason "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L390)[#](#scikitplot.corpus.CorrectionResult.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    verdict: [CorrectionVerdict](scikitplot.corpus.CorrectionVerdict.html#scikitplot.corpus.CorrectionVerdict "scikitplot.corpus._correction.CorrectionVerdict")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_correction.py#L322)[#](#scikitplot.corpus.CorrectionResult.verdict "Link to this definition")