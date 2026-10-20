# AnswerEvaluation[#](#answerevaluation "Link to this heading")

class scikitplot.corpus.AnswerEvaluation(**metrics**, **items**, **judges**, **agreement**, **usage**, **errors**, **settings**, **metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation "Link to this definition")
:   Result of [`evaluate_answers`](scikitplot.corpus.evaluate_answers.html#scikitplot.corpus.evaluate_answers "scikitplot.corpus.evaluate_answers").

    Parameters:
    :   ****metrics****mapping
        :   Metric name to the mean over items where it is defined.

        ****items****tuple of AnswerItem
        :   Per-item results, in dataset order.

        ****judges****mapping
        :   Judge name to `identity`.

        ****agreement****mapping
        :   Judge metric to Krippendorff’s alpha (interval) between the judges,
            when there are at least two; `NaN` when undefined.

        ****usage****mapping
        :   Judge name to `responses` (model responses received),
            `cached_responses`, `input_tokens` and `output_tokens` (summed
            over responses that were not cached, so a cached rerun costs 0) and
            `responses_without_token_counts`.

        ****errors****mapping
        :   Failures by kind: `"system"` (items without an answer), then one
            count per judge (failed judgements), whether or not verdicts are kept.

        ****settings****mapping
        :   The options the evaluation ran with.

        ****metadata****mapping, default={}
        :   Free-form, JSON-compatible description supplied by the caller.

    Parameters:
    :   * ****metrics**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
        * ****items**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)"))
        * ****judges**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****agreement**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]**)
        * ****usage**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]****]**)
        * ****errors**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)
        * ****settings**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    agreement: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.agreement "Link to this definition")

    compare(**baseline**, **\***, **n\_resamples=10000**, **seed=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L560)[#](#scikitplot.corpus.AnswerEvaluation.compare "Link to this definition")
    :   Compare with `baseline` over the same items (paired sign-flip test).

        Parameters:
        :   ****baseline****AnswerEvaluation
            :   Evaluation of the same item identifiers (another system, or
                another prompt of the same model).

            ****n\_resamples, seed****int
            :   As in [`RetrievalEvaluation.compare`](scikitplot.corpus.RetrievalEvaluation.html#scikitplot.corpus.RetrievalEvaluation.compare "scikitplot.corpus.RetrievalEvaluation.compare").

        Returns:
        :   EvaluationComparison

        Raises:
        :   TypeError
            :   If `baseline` is not an [`AnswerEvaluation`](#scikitplot.corpus.AnswerEvaluation "scikitplot.corpus.AnswerEvaluation").

            ValueError
            :   If the item sets differ or no metric is shared.

        Parameters:
        :   * ****baseline**** ([**AnswerEvaluation**](#scikitplot.corpus.AnswerEvaluation "scikitplot.corpus._metrics._answers.AnswerEvaluation"))
            * ****n\_resamples**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****seed**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**EvaluationComparison**](scikitplot.corpus.EvaluationComparison.html#scikitplot.corpus.EvaluationComparison "scikitplot.corpus._metrics._evaluate.EvaluationComparison")

        Notes

        Compare evaluations scored by the same judges: a judge identity that
        differs between the two reports makes the difference partly the
        judges’. [`compare`](#scikitplot.corpus.AnswerEvaluation.compare "scikitplot.corpus.AnswerEvaluation.compare") does not refuse it; check `judges`.

    property coverage: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][#](#scikitplot.corpus.AnswerEvaluation.coverage "Link to this definition")
    :   Metric name to the number of items where it is defined.

    dumps(**format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L367)[#](#scikitplot.corpus.AnswerEvaluation.dumps "Link to this definition")
    :   Serialise to `"json"`, `"jsonl"` (one row per item), `"yaml"` or `"toml"`.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    errors: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.errors "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L522)[#](#scikitplot.corpus.AnswerEvaluation.from_dict "Link to this definition")
    :   Rebuild a report from [`to_dict`](#scikitplot.corpus.AnswerEvaluation.to_dict "scikitplot.corpus.AnswerEvaluation.to_dict") output.

        Raises:
        :   ValueError
            :   If the schema or its version is not this one.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**AnswerEvaluation**](#scikitplot.corpus.AnswerEvaluation "scikitplot.corpus._metrics._answers.AnswerEvaluation")

    items: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.items "Link to this definition")

    judges: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.judges "Link to this definition")

    metadata: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.metadata "Link to this definition")

    metrics: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.metrics "Link to this definition")

    property n\_items: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.AnswerEvaluation.n_items "Link to this definition")
    :   Number of evaluated items.

    per\_item(**metric**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L474)[#](#scikitplot.corpus.AnswerEvaluation.per_item "Link to this definition")
    :   Return one metric’s per-item values, in dataset order.

        Raises:
        :   KeyError
            :   If the evaluation did not compute `metric`.

        Parameters:
        :   ****metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    classmethod read(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L551)[#](#scikitplot.corpus.AnswerEvaluation.read "Link to this definition")
    :   Read a report written by [`write`](#scikitplot.corpus.AnswerEvaluation.write "scikitplot.corpus.AnswerEvaluation.write") in JSON, YAML or TOML.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**AnswerEvaluation**](#scikitplot.corpus.AnswerEvaluation "scikitplot.corpus._metrics._answers.AnswerEvaluation")

    settings: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.settings "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L489)[#](#scikitplot.corpus.AnswerEvaluation.to_dict "Link to this definition")
    :   Return the full report as a mapping (schema versioned).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    to\_rows()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L506)[#](#scikitplot.corpus.AnswerEvaluation.to_rows "Link to this definition")
    :   One flat row per item: identifier, answer, each score, latency, error.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    usage: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")]][[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L416)[#](#scikitplot.corpus.AnswerEvaluation.usage "Link to this definition")

    write(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_metrics/_answers.py#L371)[#](#scikitplot.corpus.AnswerEvaluation.write "Link to this definition")
    :   Write atomically; the format defaults to the path suffix.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")