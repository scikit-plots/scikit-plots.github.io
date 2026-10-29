# FeatureSpec[#](#featurespec "Link to this heading")

class scikitplot.feature\_selection.FeatureSpec(**name**, **position**, **role**, **family**, **kind**, **kind\_origin**, **stats**, **assessments=()**, **tags=()**, **binning=None**, **aliases=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec "Link to this definition")
:   Everything a fitted schema knows about one column.

    Parameters:
    :   ****name****str
        :   Current column name.

        ****position****int
        :   Column position in the training frame.

        ****role****str
        :   [`FeatureRole`](scikitplot.feature_selection.FeatureRole.html#scikitplot.feature_selection.FeatureRole "scikitplot.feature_selection.FeatureRole") value.

        ****family****str
        :   [`DtypeFamily`](scikitplot.feature_selection.DtypeFamily.html#scikitplot.feature_selection.DtypeFamily "scikitplot.feature_selection.DtypeFamily") value.

        ****kind****str
        :   [`FeatureKind`](scikitplot.feature_selection.FeatureKind.html#scikitplot.feature_selection.FeatureKind "scikitplot.feature_selection.FeatureKind") value.

        ****kind\_origin****{“inferred”, “declared”}
        :   Where the kind came from.

        ****stats****FeatureStats
        :   Training statistics.

        ****assessments****tuple of Assessment
        :   Sorted by name.

        ****tags****tuple of str, default=()
        :   User tags.

        ****binning****BinningRecommendation or None, default=None
        :   Bin recommendation, when binning is enabled.

        ****aliases****tuple of str, default=()
        :   Earlier names, oldest first (see [`FeatureSchema.rename`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema.rename "scikitplot.feature_selection.FeatureSchema.rename")).

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****position**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****role**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****family**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind\_origin**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****stats**** ([**FeatureStats**](scikitplot.feature_selection.FeatureStats.html#scikitplot.feature_selection.FeatureStats "scikitplot.feature_selection._stats.FeatureStats"))
        * ****assessments**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Assessment**](scikitplot.feature_selection.Assessment.html#scikitplot.feature_selection.Assessment "scikitplot.feature_selection._assessments.Assessment")**,** **...****]**)
        * ****tags**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****binning**** ([**BinningRecommendation**](scikitplot.feature_selection.BinningRecommendation.html#scikitplot.feature_selection.BinningRecommendation "scikitplot.feature_selection._binning.BinningRecommendation") **|** **None**)
        * ****aliases**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    > **See also**
    > [`FeatureSchema`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection.FeatureSchema")
    :   The collection of specs.

    aliases: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.FeatureSpec.aliases "Link to this definition")

    assess(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L234)[#](#scikitplot.feature_selection.FeatureSpec.assess "Link to this definition")
    :   Return the recorded answer to assessment `name`.

        Parameters:
        :   ****name****str
            :   Assessment name (`"skewed"`, `"discrete"` …).

        Returns:
        :   Assessment
            :   State, reasons, evidence and provenance.

        Raises:
        :   KeyError
            :   If the schema’s policy did not run that assessment; the message
                lists the available names.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Assessment**](scikitplot.feature_selection.Assessment.html#scikitplot.feature_selection.Assessment "scikitplot.feature_selection._assessments.Assessment")

    property assessment\_names: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][#](#scikitplot.feature_selection.FeatureSpec.assessment_names "Link to this definition")
    :   Names of the recorded assessments.

        Type:
        :   Tuple of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    assessments: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Assessment](scikitplot.feature_selection.Assessment.html#scikitplot.feature_selection.Assessment "scikitplot.feature_selection._assessments.Assessment"), ...] = ()[#](#scikitplot.feature_selection.FeatureSpec.assessments "Link to this definition")

    binning: [BinningRecommendation](scikitplot.feature_selection.BinningRecommendation.html#scikitplot.feature_selection.BinningRecommendation "scikitplot.feature_selection._binning.BinningRecommendation") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureSpec.binning "Link to this definition")

    explain()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L300)[#](#scikitplot.feature_selection.FeatureSpec.explain "Link to this definition")
    :   Return a short, human-readable description of the feature.

        Returns:
        :   str
            :   Several lines: role, kind, key statistics, true assessments, and
                the binning recommendation.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    family: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec.family "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L364)[#](#scikitplot.feature_selection.FeatureSpec.from_dict "Link to this definition")
    :   Rebuild a spec from [`to_dict`](#scikitplot.feature_selection.FeatureSpec.to_dict "scikitplot.feature_selection.FeatureSpec.to_dict") output, checking every field.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   FeatureSpec
            :   The spec.

        Raises:
        :   ValueError
            :   For an off-contract record.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**FeatureSpec**](#scikitplot.feature_selection.FeatureSpec "scikitplot.feature_selection._schema.FeatureSpec")

    is\_(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L278)[#](#scikitplot.feature_selection.FeatureSpec.is_ "Link to this definition")
    :   Answer “am I `name`?” strictly.

        Parameters:
        :   ****name****str
            :   Assessment name.

        Returns:
        :   bool
            :   True only when the state is `"true"`; `unknown` and
                `not_applicable` give False. Use [`state`](#scikitplot.feature_selection.FeatureSpec.state "scikitplot.feature_selection.FeatureSpec.state") to tell them apart.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    property is\_model\_input: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.feature_selection.FeatureSpec.is_model_input "Link to this definition")
    :   The role is `"feature"`.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec.kind "Link to this definition")

    kind\_origin: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec.kind_origin "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec.name "Link to this definition")

    position: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec.position "Link to this definition")

    role: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec.role "Link to this definition")

    state(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L262)[#](#scikitplot.feature_selection.FeatureSpec.state "Link to this definition")
    :   Return the state of assessment `name`.

        Parameters:
        :   ****name****str
            :   Assessment name.

        Returns:
        :   str
            :   `"true"`, `"false"`, `"unknown"` or `"not_applicable"`.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    stats: [FeatureStats](scikitplot.feature_selection.FeatureStats.html#scikitplot.feature_selection.FeatureStats "scikitplot.feature_selection._stats.FeatureStats")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L180)[#](#scikitplot.feature_selection.FeatureSpec.stats "Link to this definition")

    tags: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.FeatureSpec.tags "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_schema.py#L348)[#](#scikitplot.feature_selection.FeatureSpec.to_dict "Link to this definition")
    :   Return the shared-data-model form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]