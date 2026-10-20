# JudgeResult[#](#judgeresult "Link to this heading")

class scikitplot.corpus.JudgeResult(**metric**, **score**, **verdict=None**, **completions=()**, **error=None**, **undefined=None**, **details=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_judge.py#L459)[#](#scikitplot.corpus.JudgeResult "Link to this definition")
:   One judged score.

    Parameters:
    :   ****metric****str
        :   Metric name.

        ****score****float
        :   In `[0, 1]`, or `NaN` when `error` or `undefined` is set.

        ****verdict****mapping or None, default=None
        :   The parsed verdict (`None` when the judge failed). For
            `preference`, `{"forward": ..., "reverse": ...}`.

        ****completions****tuple of Completion, default=()
        :   Every model response the score used, in call order.

        ****error****str or None, default=None
        :   Why the judge failed: `"parse: ..."`, `"incomplete: ..."` or
            `"provider: <ExceptionType>: ..."`.

        ****undefined****str or None, default=None
        :   Why a valid verdict has no score (for example, no claims).

        ****details****mapping, default={}
        :   Counts behind the score (`n_claims`, `n_supported` …); for
            `preference`, `winner` and `position_consistent`.

    Parameters:
    :   * ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****score**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****verdict**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****completions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)"))
        * ****error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****undefined**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****details**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    completions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)") = ()[#](#scikitplot.corpus.JudgeResult.completions "Link to this definition")

    details: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_judge.py#L459)[#](#scikitplot.corpus.JudgeResult.details "Link to this definition")

    error: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.JudgeResult.error "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_judge.py#L515)[#](#scikitplot.corpus.JudgeResult.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.corpus.JudgeResult.to_dict "scikitplot.corpus.JudgeResult.to_dict") output (`None` score is `NaN`).

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**JudgeResult**](#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult")

    property input\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.JudgeResult.input_tokens "Link to this definition")
    :   Prompt tokens over [`completions`](#scikitplot.corpus.JudgeResult.completions "scikitplot.corpus.JudgeResult.completions") (`None` if any is unreported).

    metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_judge.py#L459)[#](#scikitplot.corpus.JudgeResult.metric "Link to this definition")

    property output\_tokens: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.corpus.JudgeResult.output_tokens "Link to this definition")
    :   Output tokens over [`completions`](#scikitplot.corpus.JudgeResult.completions "scikitplot.corpus.JudgeResult.completions") (`None` if any is unreported).

    score: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_judge.py#L459)[#](#scikitplot.corpus.JudgeResult.score "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_judge.py#L503)[#](#scikitplot.corpus.JudgeResult.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    undefined: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.JudgeResult.undefined "Link to this definition")

    verdict: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.JudgeResult.verdict "Link to this definition")