# QueryEvaluation[#](#queryevaluation "Link to this heading")

class scikitplot.corpus.QueryEvaluation(**query\_id**, **metrics**, **n\_retrieved**, **n\_relevant**, **latency\_s**, **status=None**, **retrieved=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L126)[#](#scikitplot.corpus.QueryEvaluation "Link to this definition")
:   One query of a [`RetrievalEvaluation`](scikitplot.corpus.RetrievalEvaluation.html#scikitplot.corpus.RetrievalEvaluation "scikitplot.corpus.RetrievalEvaluation").

    Parameters:
    :   ****query\_id****str or int
        :   Query identifier.

        ****metrics****mapping
        :   Metric name to value; `NaN` when undefined under
            `zero_division=np.nan`.

        ****n\_retrieved****int
        :   Ranking length after duplicate handling.

        ****n\_relevant****int
        :   Relevant identifiers in the judgments.

        ****latency\_s****float
        :   Seconds to obtain the ranking: the retriever call and the consumption
            of its results (a lazy retriever does its work while they are read).

        ****status****str or None, default=None
        :   Response status (`"success"`, `"empty"`, `"degraded"` …), or
            `None` when the retriever returned none.

        ****retrieved****tuple or None, default=None
        :   The ranking, when kept.

    Parameters:
    :   * ****query\_id**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****metrics**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
        * ****n\_retrieved**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_relevant**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****latency\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****retrieved**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)") **|** **None**)

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L172)[#](#scikitplot.corpus.QueryEvaluation.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.corpus.QueryEvaluation.to_dict "scikitplot.corpus.QueryEvaluation.to_dict") output (`None` metric values are `NaN`).

        Raises:
        :   KeyError
            :   If a required field is missing.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**QueryEvaluation**](#scikitplot.corpus.QueryEvaluation "scikitplot.corpus._metrics._evaluate.QueryEvaluation")

    latency\_s: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L126)[#](#scikitplot.corpus.QueryEvaluation.latency_s "Link to this definition")

    metrics: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L126)[#](#scikitplot.corpus.QueryEvaluation.metrics "Link to this definition")

    n\_relevant: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L126)[#](#scikitplot.corpus.QueryEvaluation.n_relevant "Link to this definition")

    n\_retrieved: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L126)[#](#scikitplot.corpus.QueryEvaluation.n_retrieved "Link to this definition")

    query\_id: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L126)[#](#scikitplot.corpus.QueryEvaluation.query_id "Link to this definition")

    retrieved: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.QueryEvaluation.retrieved "Link to this definition")

    status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.QueryEvaluation.status "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_evaluate.py#L160)[#](#scikitplot.corpus.QueryEvaluation.to_dict "Link to this definition")
    :   Return a mapping in the report schema.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]