# GradeResult[#](#graderesult "Link to this heading")

class scikitplot.corpus.GradeResult(**grade**, **score**, **reason=''**, **grader=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L111)[#](#scikitplot.corpus.GradeResult "Link to this definition")
:   One grader’s judgement of one round.

    Parameters:
    :   ****grade****EvidenceGrade or str
        :   The judgement.

        ****score****float
        :   In `[0, 1]`; the grader’s measure (coverage, for
            [`TermCoverageGrader`](scikitplot.corpus.TermCoverageGrader.html#scikitplot.corpus.TermCoverageGrader "scikitplot.corpus.TermCoverageGrader")). Any real number type (`numpy.float32`
            included) is accepted and stored as `float`.

        ****reason****str, default=””
        :   Why, in words.

        ****grader****str or None, default=None
        :   The grader’s identity. A grader may set it (a model and its version);
            when it is `None`, [`CorrectiveRetrieval`](scikitplot.corpus.CorrectiveRetrieval.html#scikitplot.corpus.CorrectiveRetrieval "scikitplot.corpus.CorrectiveRetrieval") fills in the
            grader’s name.

    Raises:
    :   TypeError, ValueError
        :   If `grade` is not an [`EvidenceGrade`](scikitplot.corpus.EvidenceGrade.html#scikitplot.corpus.EvidenceGrade "scikitplot.corpus.EvidenceGrade") (or its value) or
            `score` is not a finite number in `[0, 1]`.

    Parameters:
    :   * ****grade**** ([**EvidenceGrade**](scikitplot.corpus.EvidenceGrade.html#scikitplot.corpus.EvidenceGrade "scikitplot.corpus._correction.EvidenceGrade"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****grader**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    grade: [EvidenceGrade](scikitplot.corpus.EvidenceGrade.html#scikitplot.corpus.EvidenceGrade "scikitplot.corpus._correction.EvidenceGrade")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L111)[#](#scikitplot.corpus.GradeResult.grade "Link to this definition")

    grader: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.GradeResult.grader "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.corpus.GradeResult.reason "Link to this definition")

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L111)[#](#scikitplot.corpus.GradeResult.score "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_correction.py#L162)[#](#scikitplot.corpus.GradeResult.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]