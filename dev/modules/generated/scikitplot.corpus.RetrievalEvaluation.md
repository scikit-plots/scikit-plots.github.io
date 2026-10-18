# RetrievalEvaluation[#](#retrievalevaluation "Link to this heading")

class scikitplot.corpus.RetrievalEvaluation(**metrics**, **queries**, **settings**, **metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L292)[#](#scikitplot.corpus.RetrievalEvaluation "Link to this definition")
:   Result of [`evaluate_retrieval`](scikitplot.corpus.evaluate_retrieval.html#scikitplot.corpus.evaluate_retrieval "scikitplot.corpus.evaluate_retrieval").

    Parameters:
    :   ****metrics****mapping
        :   Metric name to the mean over queries (undefined values excluded under
            `zero_division=np.nan`).

        ****queries****tuple of QueryEvaluation
        :   Per-query results, in evaluation order.

        ****settings****mapping
        :   The options the evaluation ran with.

        ****metadata****mapping, default={}
        :   Free-form, JSON-compatible description supplied by the caller.

    Parameters:
    :   * ****metrics**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
        * ****queries**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)"))
        * ****settings**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Notes

    ****User note.**** [`write`](#scikitplot.corpus.RetrievalEvaluation.write "scikitplot.corpus.RetrievalEvaluation.write") picks the format from the file suffix:
    `.json`, `.jsonl`/`.ndjson` (one row per query), `.yaml`/`.yml`
    or `.toml`. [`read`](#scikitplot.corpus.RetrievalEvaluation.read "scikitplot.corpus.RetrievalEvaluation.read") restores a report from JSON, YAML or TOML.

    compare(**baseline**, **\***, **n\_resamples=10000**, **seed=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L486)[#](#scikitplot.corpus.RetrievalEvaluation.compare "Link to this definition")
    :   Compare this evaluation with `baseline` over the same queries.

        Parameters:
        :   ****baseline****RetrievalEvaluation
            :   Evaluation of the same query identifiers.

            ****n\_resamples****int, default=10000
            :   Random sign flips when the pairs exceed
                `EXACT_SIGN_FLIP_LIMIT`; below it every flip is enumerated.

            ****seed****int, default=0
            :   Non-negative seed of the random flips, so the p-value is
                reproducible.

        Returns:
        :   EvaluationComparison

        Raises:
        :   TypeError
            :   If `baseline` is not a [`RetrievalEvaluation`](#scikitplot.corpus.RetrievalEvaluation "scikitplot.corpus.RetrievalEvaluation").

            ValueError
            :   If the query sets differ or no metric is shared.

        Parameters:
        :   * ****baseline**** ([**RetrievalEvaluation**](#scikitplot.corpus.RetrievalEvaluation "scikitplot.corpus._metrics._evaluate.RetrievalEvaluation"))
            * ****n\_resamples**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****seed**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**EvaluationComparison**](scikitplot.corpus.EvaluationComparison.html#scikitplot.corpus.EvaluationComparison "scikitplot.corpus._metrics._evaluate.EvaluationComparison")

        Notes

        Per metric, only queries defined in both evaluations are paired. The
        statistic is `|sum(d)|` over the per-query differences `d` (the
        mean up to the constant number of pairs); the p-value counts sign flips
        whose statistic reaches the observed one (`+1` in numerator and
        denominator when flips are sampled). A flip within
        `4 * n * eps * sum(|d|)` of the observed statistic counts as reaching
        it, so flips equal for the values the metrics represent are not lost to
        floating-point rounding; the p-value errs on the conservative side.

    dumps(**format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L433)[#](#scikitplot.corpus.RetrievalEvaluation.dumps "Link to this definition")
    :   Serialise to `"json"`, `"jsonl"`, `"yaml"` or `"toml"`.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L406)[#](#scikitplot.corpus.RetrievalEvaluation.from_dict "Link to this definition")
    :   Rebuild a report from [`to_dict`](#scikitplot.corpus.RetrievalEvaluation.to_dict "scikitplot.corpus.RetrievalEvaluation.to_dict") output.

        Raises:
        :   ValueError
            :   If the schema or its version is not this one.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**RetrievalEvaluation**](#scikitplot.corpus.RetrievalEvaluation "scikitplot.corpus._metrics._evaluate.RetrievalEvaluation")

    property latency: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")][#](#scikitplot.corpus.RetrievalEvaluation.latency "Link to this definition")
    :   mean, p50, p95, max and total.

        Type:
        :   Latency summary in seconds

    metadata: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L292)[#](#scikitplot.corpus.RetrievalEvaluation.metadata "Link to this definition")

    metrics: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L292)[#](#scikitplot.corpus.RetrievalEvaluation.metrics "Link to this definition")

    property n\_queries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.RetrievalEvaluation.n_queries "Link to this definition")
    :   Number of evaluated queries.

    per\_query(**metric**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L355)[#](#scikitplot.corpus.RetrievalEvaluation.per_query "Link to this definition")
    :   Return one metric’s per-query values, in evaluation order.

        Raises:
        :   KeyError
            :   If the evaluation did not compute `metric`.

        Parameters:
        :   ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    queries: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L292)[#](#scikitplot.corpus.RetrievalEvaluation.queries "Link to this definition")

    classmethod read(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L463)[#](#scikitplot.corpus.RetrievalEvaluation.read "Link to this definition")
    :   Read a report written by [`write`](#scikitplot.corpus.RetrievalEvaluation.write "scikitplot.corpus.RetrievalEvaluation.write") in JSON, YAML or TOML.

        Raises:
        :   ValueError
            :   For JSON Lines, which holds the per-query rows only.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**RetrievalEvaluation**](#scikitplot.corpus.RetrievalEvaluation "scikitplot.corpus._metrics._evaluate.RetrievalEvaluation")

    settings: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L292)[#](#scikitplot.corpus.RetrievalEvaluation.settings "Link to this definition")

    property status\_counts: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][#](#scikitplot.corpus.RetrievalEvaluation.status_counts "Link to this definition")
    :   Number of queries per response status (`"unreported"` for none).

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L368)[#](#scikitplot.corpus.RetrievalEvaluation.to_dict "Link to this definition")
    :   Return the full report as a mapping (schema versioned).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    to\_rows()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L382)[#](#scikitplot.corpus.RetrievalEvaluation.to_rows "Link to this definition")
    :   Return one flat row per query: identifier, each metric, counts, status.

        Returns:
        :   list of dict
            :   The JSON Lines payload.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    write(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_metrics/_evaluate.py#L445)[#](#scikitplot.corpus.RetrievalEvaluation.write "Link to this definition")
    :   Write the report atomically.

        Parameters:
        :   ****path****str or os.PathLike
            :   Destination; its suffix names the format unless `format` does.

            ****format****{“json”, “jsonl”, “yaml”, “toml”} or None, default=None
            :   Explicit format.

        Returns:
        :   pathlib.Path

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")