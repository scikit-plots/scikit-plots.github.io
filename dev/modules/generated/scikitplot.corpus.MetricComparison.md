# MetricComparison[#](#metriccomparison "Link to this heading")

class scikitplot.corpus.MetricComparison(**metric**, **candidate**, **baseline**, **delta**, **wins**, **ties**, **losses**, **n\_pairs**, **p\_value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison "Link to this definition")
:   One metric of an [`EvaluationComparison`](scikitplot.corpus.EvaluationComparison.html#scikitplot.corpus.EvaluationComparison "scikitplot.corpus.EvaluationComparison").

    Parameters:
    :   ****metric****str
        :   Metric name.

        ****candidate, baseline****float
        :   Means over the paired queries.

        ****delta****float
        :   `candidate - baseline`.

        ****wins, ties, losses****int
        :   Queries where the candidate is higher, equal, lower.

        ****n\_pairs****int
        :   Queries where both values are defined.

        ****p\_value****float
        :   Two-sided paired sign-flip randomisation p-value; `NaN` without pairs.

    Parameters:
    :   * ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****candidate**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****baseline**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****delta**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****wins**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****ties**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****losses**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_pairs**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****p\_value**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    baseline: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.baseline "Link to this definition")

    candidate: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.candidate "Link to this definition")

    delta: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.delta "Link to this definition")

    losses: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.losses "Link to this definition")

    metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.metric "Link to this definition")

    n\_pairs: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.n_pairs "Link to this definition")

    p\_value: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.p_value "Link to this definition")

    ties: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.ties "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L225)[#](#scikitplot.corpus.MetricComparison.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping (`NaN` stays a float).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    wins: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L194)[#](#scikitplot.corpus.MetricComparison.wins "Link to this definition")