# PreferenceEvaluation[#](#preferenceevaluation "Link to this heading")

class scikitplot.corpus.PreferenceEvaluation(**names**, **summary**, **items**, **judges**, **agreement**, **settings**, **metadata=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation "Link to this definition")
:   Result of [`evaluate_preference`](scikitplot.corpus.evaluate_preference.html#scikitplot.corpus.evaluate_preference "scikitplot.corpus.evaluate_preference").

    Parameters:
    :   ****names****tuple of str
        :   The two systems, `(a, b)`.

        ****summary****mapping
        :   Per judge and for the panel: `wins`, `ties`, `losses` (for
            `a`), `win_rate` (`(wins + ties / 2) / judged`),
            `position_consistency` and `judged`.

        ****items****tuple of mapping
        :   Per item: `item_id`, `question`, the panel `score` for `a` and,
            per judge, the [`JudgeResult`](scikitplot.corpus.JudgeResult.html#scikitplot.corpus.JudgeResult "scikitplot.corpus._metrics._judge.JudgeResult") as a mapping.

        ****judges****mapping
        :   Judge identities.

        ****agreement****float
        :   Krippendorff’s alpha (nominal) over the judges’ winners; `NaN` with
            fewer than two judges or when undefined.

        ****settings, metadata****mapping

    Parameters:
    :   * ****names**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)"))
        * ****summary**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)
        * ****items**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)"))
        * ****judges**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****agreement**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****settings**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    agreement: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation.agreement "Link to this definition")

    dumps(**format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L367)[#](#scikitplot.corpus.PreferenceEvaluation.dumps "Link to this definition")
    :   Serialise to `"json"`, `"jsonl"` (one row per item), `"yaml"` or `"toml"`.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L1012)[#](#scikitplot.corpus.PreferenceEvaluation.from_dict "Link to this definition")
    :   Rebuild a report from [`to_dict`](#scikitplot.corpus.PreferenceEvaluation.to_dict "scikitplot.corpus.PreferenceEvaluation.to_dict") output.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**PreferenceEvaluation**](#scikitplot.corpus.PreferenceEvaluation "scikitplot.corpus._metrics._answers.PreferenceEvaluation")

    items: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation.items "Link to this definition")

    judges: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation.judges "Link to this definition")

    metadata: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation.metadata "Link to this definition")

    names: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation.names "Link to this definition")

    classmethod read(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L1044)[#](#scikitplot.corpus.PreferenceEvaluation.read "Link to this definition")
    :   Read a report written by [`write`](#scikitplot.corpus.PreferenceEvaluation.write "scikitplot.corpus.PreferenceEvaluation.write") in JSON, YAML or TOML.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**PreferenceEvaluation**](#scikitplot.corpus.PreferenceEvaluation "scikitplot.corpus._metrics._answers.PreferenceEvaluation")

    settings: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation.settings "Link to this definition")

    summary: [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Mapping](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L954)[#](#scikitplot.corpus.PreferenceEvaluation.summary "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L988)[#](#scikitplot.corpus.PreferenceEvaluation.to_dict "Link to this definition")
    :   Return the full report as a mapping (schema versioned).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    to\_rows()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L1002)[#](#scikitplot.corpus.PreferenceEvaluation.to_rows "Link to this definition")
    :   One row per item: identifier, panel score for `a`, each judge’s winner.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

    write(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_answers.py#L371)[#](#scikitplot.corpus.PreferenceEvaluation.write "Link to this definition")
    :   Write atomically; the format defaults to the path suffix.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")