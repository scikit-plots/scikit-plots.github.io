# CorrectionRound[#](#correctionround "Link to this heading")

class scikitplot.corpus.CorrectionRound(**index**, **query**, **grade**, **status**, **hit\_count**, **seconds**, **error=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L275)[#](#scikitplot.corpus.CorrectionRound "Link to this definition")
:   One round: the query run, how it was graded, what came back.

    Parameters:
    :   ****index****int
        :   0-based round number.

        ****query****str
        :   The query this round ran (the original, or a rewrite).

        ****grade****GradeResult
        :   The grade of its hits, against the original query.

        ****status****RetrievalStatus or None
        :   The response’s status; `None` for a response without one.

        ****hit\_count****int
        :   Hits the round returned.

        ****seconds****float
        :   Time the round took (search and grading).

        ****error****ErrorRecord or None, default=None
        :   The round’s first error (its search failed, its response was not
            complete, or its grader failed).

    Parameters:
    :   * ****index**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****grade**** ([**GradeResult**](scikitplot.corpus.GradeResult.html#scikitplot.corpus.GradeResult "scikitplot.corpus._correction.GradeResult"))
        * ****status**** ([**RetrievalStatus**](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus._retrieval.RetrievalStatus") **|** **None**)
        * ****hit\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****seconds**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****error**** ([**ErrorRecord**](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") **|** **None**)

    error: [ErrorRecord](scikitplot.corpus.ErrorRecord.html#scikitplot.corpus.ErrorRecord "scikitplot.corpus._diagnostics.ErrorRecord") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.CorrectionRound.error "Link to this definition")

    grade: [GradeResult](scikitplot.corpus.GradeResult.html#scikitplot.corpus.GradeResult "scikitplot.corpus._correction.GradeResult")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L275)[#](#scikitplot.corpus.CorrectionRound.grade "Link to this definition")

    hit\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L275)[#](#scikitplot.corpus.CorrectionRound.hit_count "Link to this definition")

    index: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L275)[#](#scikitplot.corpus.CorrectionRound.index "Link to this definition")

    query: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L275)[#](#scikitplot.corpus.CorrectionRound.query "Link to this definition")

    seconds: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L275)[#](#scikitplot.corpus.CorrectionRound.seconds "Link to this definition")

    status: [RetrievalStatus](scikitplot.corpus.RetrievalStatus.html#scikitplot.corpus.RetrievalStatus "scikitplot.corpus._retrieval.RetrievalStatus") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L275)[#](#scikitplot.corpus.CorrectionRound.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L307)[#](#scikitplot.corpus.CorrectionRound.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]