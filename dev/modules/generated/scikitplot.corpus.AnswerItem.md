# AnswerItem[#](#answeritem "Link to this heading")

class scikitplot.corpus.AnswerItem(**item\_id**, **question**, **answer**, **scores**, **n\_contexts=None**, **latency\_s=0.0**, **error=None**, **judgments=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L277)[#](#scikitplot.corpus.AnswerItem "Link to this definition")
:   One item of an [`AnswerEvaluation`](scikitplot.corpus.AnswerEvaluation.html#scikitplot.corpus.AnswerEvaluation "scikitplot.corpus.AnswerEvaluation").

    Parameters:
    :   ****item\_id****str or int
        :   Item identifier.

        ****question****str
        :   The question.

        ****answer****str or None
        :   The evaluated answer; `None` when the system failed.

        ****scores****mapping
        :   Metric name to score (`NaN` when undefined or failed).

        ****n\_contexts****int or None, default=None
        :   Contexts the judges saw (`None`: no contexts).

        ****latency\_s****float, default=0.0
        :   Seconds the system took (`0.0` for stored answers).

        ****error****str or None, default=None
        :   Why the system produced no answer.

        ****judgments****mapping, default={}
        :   `{metric: {judge: JudgeResult}}`, when verdicts are kept.

    Parameters:
    :   * ****item\_id**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****question**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****answer**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****scores**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
        * ****n\_contexts**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****latency\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****judgments**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**JudgeResult**](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")**]****]**)

    answer: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L277)[#](#scikitplot.corpus.AnswerItem.answer "Link to this definition")

    error: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.AnswerItem.error "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L327)[#](#scikitplot.corpus.AnswerItem.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.corpus.AnswerItem.to_dict "scikitplot.corpus.AnswerItem.to_dict") output.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**AnswerItem**](#scikitplot.corpus.AnswerItem "scikitplot.corpus._metrics._answers.AnswerItem")

    item\_id: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L277)[#](#scikitplot.corpus.AnswerItem.item_id "Link to this definition")

    judgments: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [JudgeResult](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")]][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L277)[#](#scikitplot.corpus.AnswerItem.judgments "Link to this definition")

    latency\_s: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.0[#](#scikitplot.corpus.AnswerItem.latency_s "Link to this definition")

    n\_contexts: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.AnswerItem.n_contexts "Link to this definition")

    question: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L277)[#](#scikitplot.corpus.AnswerItem.question "Link to this definition")

    scores: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L277)[#](#scikitplot.corpus.AnswerItem.scores "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L311)[#](#scikitplot.corpus.AnswerItem.to_dict "Link to this definition")
    :   Return a mapping in the report schema.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]