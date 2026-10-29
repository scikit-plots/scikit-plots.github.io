# FeatureLineage[#](#featurelineage "Link to this heading")

class scikitplot.feature\_selection.FeatureLineage(**nodes**, **edges**, **stages**, **stage\_inputs**, **input\_ids**, **output\_ids**, **estimator**, **final\_estimator=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage "Link to this definition")
:   Traced feature graph of a fitted pipeline.

    Parameters:
    :   ****nodes, edges, stages****tuples
        :   Graph records (see `FeatureNode`, `LineageEdge`,
            `StageRecord`).

        ****stage\_inputs****tuple of (str, tuple of int)
        :   Input node ids of every stage, in the order of `stages`.

        ****input\_ids, output\_ids****tuple of int
        :   Node ids of the raw inputs and of the final outputs (model inputs).

        ****estimator****str
        :   Class name of the traced object.

        ****final\_estimator****str or None
        :   Class name of a pipeline’s final, non-transformer step.

    Parameters:
    :   * ****nodes**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[****FeatureNode****,** **...****]**)
        * ****edges**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[****LineageEdge****,** **...****]**)
        * ****stages**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[****StageRecord****,** **...****]**)
        * ****stage\_inputs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]****]****,** **...****]**)
        * ****input\_ids**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]**)
        * ****output\_ids**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** **...****]**)
        * ****estimator**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****final\_estimator**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    > **See also**
    > [`trace_pipeline`](scikitplot.feature_selection.trace_pipeline.html#scikitplot.feature_selection.trace_pipeline "scikitplot.feature_selection.trace_pipeline")
    :   Build a lineage.

    attribute(**values**, **\***, **how='sum'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1432)[#](#scikitplot.feature_selection.FeatureLineage.attribute "Link to this definition")
    :   Aggregate per-output values (importances, SHAP values) onto raw inputs.

        Parameters:
        :   ****values****array-like, pandas.Series or mapping
            :   1-D: one value per output (array aligned with
                [`output_names`](#scikitplot.feature_selection.FeatureLineage.output_names "scikitplot.feature_selection.FeatureLineage.output_names"), or a Series/mapping keyed by output name).
                2-D array or DataFrame: `n_samples x n_outputs` (a DataFrame is
                aligned by column name).

            ****how****{“sum”, “abs\_sum”, “mean”, “max”}, default=”sum”
            :   Aggregation over the outputs of one input.

        Returns:
        :   Attribution
            :   Attributed and unattributed parts.

        Raises:
        :   ValueError
            :   If the values do not align with the outputs.

        Parameters:
        :   * ****values**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****how**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Attribution**](scikitplot.feature_selection.Attribution.html#scikitplot.feature_selection.Attribution "scikitplot.feature_selection._lineage.Attribution")

        Notes

        An output is attributed only when it has exactly one raw origin and
        every edge on its paths is `exact`. Polynomial interactions,
        PCA components and unknown steps are reported in
        `Attribution.unattributed` instead of being split by a guess.

    children(**name**, **stage='input'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1191)[#](#scikitplot.feature_selection.FeatureLineage.children "Link to this definition")
    :   Return the immediate successors of a feature.

        Parameters:
        :   ****name****str
            :   Feature name at `stage`.

            ****stage****str, default=”input”
            :   Stage path, `"input"` or `"output"`.

        Returns:
        :   list of (stage, name)
            :   Successor features.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]

    descendants(**name**, **stage='input'**, **\***, **to='output'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1237)[#](#scikitplot.feature_selection.FeatureLineage.descendants "Link to this definition")
    :   Return the features at stage `to` computed from `name`.

        Parameters:
        :   ****name****str
            :   Feature name at `stage`.

            ****stage****str, default=”input”
            :   Stage of `name`.

            ****to****str, default=”output”
            :   Stage to walk forward to.

        Returns:
        :   tuple of str
            :   Descendant names at `to`, in column order.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****to**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    dropped()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1353)[#](#scikitplot.feature_selection.FeatureLineage.dropped "Link to this definition")
    :   Return the raw inputs that reach no output, with the stage that removed them.

        Returns:
        :   dict of str to str
            :   Input name to the path of the stage that received its last
                surviving feature and did not pass it on (a selector, or a
                `ColumnTransformer` whose branches and remainder ignore the
                column).

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    dumps(**format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1690)[#](#scikitplot.feature_selection.FeatureLineage.dumps "Link to this definition")
    :   Serialise the lineage; `"jsonl"` writes one edge record per line.

        Parameters:
        :   ****format****{“json”, “yaml”, “toml”, “jsonl”}, default=”json”
            :   `json`/`yaml`/`toml` hold the complete, reloadable document
                (verified by reading it back); `jsonl`
                holds the edge table ([`to_frame`](#scikitplot.feature_selection.FeatureLineage.to_frame "scikitplot.feature_selection.FeatureLineage.to_frame")) for log pipelines.

        Returns:
        :   str
            :   The document.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    edges: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[LineageEdge, ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage.edges "Link to this definition")

    estimator: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage.estimator "Link to this definition")

    final\_estimator: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureLineage.final_estimator "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1585)[#](#scikitplot.feature_selection.FeatureLineage.from_dict "Link to this definition")
    :   Rebuild a lineage from [`to_dict`](#scikitplot.feature_selection.FeatureLineage.to_dict "scikitplot.feature_selection.FeatureLineage.to_dict") output.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   FeatureLineage
            :   The lineage.

        Raises:
        :   IncompatibleSchemaError
            :   For another generation or artefact type.

            ValueError
            :   For an off-contract record.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**FeatureLineage**](#scikitplot.feature_selection.FeatureLineage "scikitplot.feature_selection._lineage.FeatureLineage")

    history(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1278)[#](#scikitplot.feature_selection.FeatureLineage.history "Link to this definition")
    :   Return every leaf stage that touched the descendants of input `name`.

        Parameters:
        :   ****name****str
            :   Raw input name.

        Returns:
        :   pandas.DataFrame
            :   Columns `stage`, `estimator`, `relation`, `quality` and
                `features` (the names this input became at that stage), in
                pipeline order. Containers (pipelines, column transformers) are
                listed with `estimator` set to their class.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    input\_ids: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage.input_ids "Link to this definition")

    property input\_names: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.FeatureLineage.input_names "Link to this definition")
    :   Raw input names.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    classmethod loads(**text**, **format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1713)[#](#scikitplot.feature_selection.FeatureLineage.loads "Link to this definition")
    :   Parse a document written by [`dumps`](#scikitplot.feature_selection.FeatureLineage.dumps "scikitplot.feature_selection.FeatureLineage.dumps") with `json` or `yaml`.

        Parameters:
        :   ****text****str
            :   The document.

            ****format****{“json”, “yaml”}, default=”json”
            :   Format.

        Returns:
        :   FeatureLineage
            :   The lineage.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FeatureLineage**](#scikitplot.feature_selection.FeatureLineage "scikitplot.feature_selection._lineage.FeatureLineage")

    nodes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[FeatureNode, ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage.nodes "Link to this definition")

    origins(**name**, **stage='output'**, **\***, **to='input'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1211)[#](#scikitplot.feature_selection.FeatureLineage.origins "Link to this definition")
    :   Return the features at stage `to` that `name` is computed from.

        Parameters:
        :   ****name****str
            :   Feature name at `stage`.

            ****stage****str, default=”output”
            :   Stage of `name`.

            ****to****str, default=”input”
            :   Stage to walk back to.

        Returns:
        :   tuple of str
            :   Ancestor names at `to`, in that stage’s column order.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****to**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    output\_ids: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage.output_ids "Link to this definition")

    property output\_names: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.FeatureLineage.output_names "Link to this definition")
    :   Final output names (what the model sees), in column order.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    parents(**name**, **stage='output'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1171)[#](#scikitplot.feature_selection.FeatureLineage.parents "Link to this definition")
    :   Return the immediate predecessors of a feature.

        Parameters:
        :   ****name****str
            :   Feature name at `stage`.

            ****stage****str, default=”output”
            :   Stage path, `"input"` or `"output"`.

        Returns:
        :   list of (stage, name)
            :   Predecessor features, in input order.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]

    quality(**name**, **stage='output'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1260)[#](#scikitplot.feature_selection.FeatureLineage.quality "Link to this definition")
    :   Return the weakest lineage quality on any path from the inputs to `name`.

        Parameters:
        :   ****name****str
            :   Feature name.

            ****stage****str, default=”output”
            :   Its stage.

        Returns:
        :   str
            :   `"exact"`, `"mixed"` or `"unknown"`.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****stage**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    stage\_inputs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), ...]], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage.stage_inputs "Link to this definition")

    property stage\_paths: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.FeatureLineage.stage_paths "Link to this definition")
    :   Paths of every traced stage, in trace order.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    stage\_summary()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1387)[#](#scikitplot.feature_selection.FeatureLineage.stage_summary "Link to this definition")
    :   Return one row per traced stage.

        Returns:
        :   pandas.DataFrame
            :   Columns `path`, `estimator`, `container`, `relation`,
                `quality`, `n_in`, `n_out`, `delta`, `observed_width`,
                `note`.

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    stages: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[StageRecord, ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1027)[#](#scikitplot.feature_selection.FeatureLineage.stages "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1563)[#](#scikitplot.feature_selection.FeatureLineage.to_dict "Link to this definition")
    :   Return the persisted form.

        Returns:
        :   dict
            :   A tree of the shared data model with `schema_version`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    to\_frame()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1404)[#](#scikitplot.feature_selection.FeatureLineage.to_frame "Link to this definition")
    :   Return every edge as a row.

        Returns:
        :   pandas.DataFrame
            :   Columns `stage`, `parent_stage`, `parent`, `child`,
                `relation`, `quality`.

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    treatments()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_lineage.py#L1319)[#](#scikitplot.feature_selection.FeatureLineage.treatments "Link to this definition")
    :   Return, per raw input, the chain of leaf transformers applied to it.

        Returns:
        :   pandas.DataFrame
            :   Indexed by input name with `steps` (tuple of `"path:Class"`),
                `n_outputs` (model inputs derived from it) and `status`
                (`"kept"` or `"dropped"`).

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")