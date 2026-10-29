# EvaluationComparison[#](#evaluationcomparison "Link to this heading")

class scikitplot.corpus.EvaluationComparison(**metrics**, **n\_queries**, **n\_resamples**, **seed**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L240)[#](#scikitplot.corpus.EvaluationComparison "Link to this definition")
:   Paired comparison of two evaluations of the same queries.

    Parameters:
    :   ****metrics****tuple of MetricComparison
        :   One entry per metric both evaluations report, in the candidate’s order.

        ****n\_queries****int
        :   Queries (or answer items) in both evaluations.

        ****n\_resamples****int
        :   Random sign flips drawn when the pairs exceed
            `EXACT_SIGN_FLIP_LIMIT` (otherwise every flip is enumerated).

        ****seed****int
        :   Seed of those draws.

    Parameters:
    :   * ****metrics**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)"))
        * ****n\_queries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_resamples**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****seed**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    dumps(**format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L275)[#](#scikitplot.corpus.EvaluationComparison.dumps "Link to this definition")
    :   Serialise to `"json"`, `"jsonl"` (one row per metric), `"yaml"` or `"toml"`.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    metrics: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L240)[#](#scikitplot.corpus.EvaluationComparison.metrics "Link to this definition")

    n\_queries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L240)[#](#scikitplot.corpus.EvaluationComparison.n_queries "Link to this definition")

    n\_resamples: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L240)[#](#scikitplot.corpus.EvaluationComparison.n_resamples "Link to this definition")

    seed: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L240)[#](#scikitplot.corpus.EvaluationComparison.seed "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L263)[#](#scikitplot.corpus.EvaluationComparison.to_dict "Link to this definition")
    :   Return a mapping in the comparison schema.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    write(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_metrics/_evaluate.py#L281)[#](#scikitplot.corpus.EvaluationComparison.write "Link to this definition")
    :   Write atomically; the format defaults to the path suffix.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")