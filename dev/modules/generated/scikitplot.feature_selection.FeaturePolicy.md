# FeaturePolicy[#](#featurepolicy "Link to this heading")

class scikitplot.feature\_selection.FeaturePolicy(**roles=()**, **kinds=()**, **tags=()**, **assessments=()**, **overrides=()**, **binning=<factory>**, **drift=<factory>**, **on\_missing\_column='raise'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L676)[#](#scikitplot.feature_selection.FeaturePolicy "Link to this definition")
:   Complete, declarative description of how to profile a table.

    Parameters:
    :   ****roles****mapping of role to ColumnRule-like, default=()
        :   Columns with a role other than `"feature"` (`target`, `drop`,
            `identifier`, `weight`, `group`, `time`). A column matched by
            two roles is an error.

        ****kinds****mapping of column to kind, default=()
        :   Explicit semantic kinds that replace inference (for example a numeric
            `zip_code` declared `"categorical_nominal"`, or `"text"`).

        ****tags****mapping of tag to ColumnRule-like, default=()
        :   Free user labels (`"one_hot"`, `"engineered"`, `"sensitive"`); a
            column can carry many tags. Tags never change inference.

        ****assessments****mapping of name to AssessmentSpec-like, default=()
        :   Merged over [`DEFAULT_ASSESSMENTS`](scikitplot.feature_selection.DEFAULT_ASSESSMENTS.html#scikitplot.feature_selection.DEFAULT_ASSESSMENTS "scikitplot.feature_selection.DEFAULT_ASSESSMENTS") by name.

        ****overrides****mapping of column to mapping of assessment to bool, default=()
        :   Manual answers. The inferred answer is kept next to the override.

        ****binning****BinningPolicy or mapping, default=BinningPolicy()
        :   Bin recommendation settings.

        ****drift****DriftPolicy or mapping, default=DriftPolicy()
        :   Drift reference settings.

        ****on\_missing\_column****{“raise”, “ignore”}, default=”raise”
        :   What to do when `roles`, `kinds`, `tags` or `overrides` name a
            column that is not in the data.

    Parameters:
    :   * ****roles**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**ColumnRule**](scikitplot.feature_selection.ColumnRule.html#scikitplot.feature_selection.ColumnRule "scikitplot.feature_selection._policy.ColumnRule")**]****,** **...****]**)
        * ****kinds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** **...****]**)
        * ****tags**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**ColumnRule**](scikitplot.feature_selection.ColumnRule.html#scikitplot.feature_selection.ColumnRule "scikitplot.feature_selection._policy.ColumnRule")**]****,** **...****]**)
        * ****assessments**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**AssessmentSpec**](scikitplot.feature_selection.AssessmentSpec.html#scikitplot.feature_selection.AssessmentSpec "scikitplot.feature_selection._policy.AssessmentSpec")**]****,** **...****]**)
        * ****overrides**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]****,** **...****]****]****,** **...****]**)
        * ****binning**** ([**BinningPolicy**](scikitplot.feature_selection.BinningPolicy.html#scikitplot.feature_selection.BinningPolicy "scikitplot.feature_selection._policy.BinningPolicy"))
        * ****drift**** ([**DriftPolicy**](scikitplot.feature_selection.DriftPolicy.html#scikitplot.feature_selection.DriftPolicy "scikitplot.feature_selection._policy.DriftPolicy"))
        * ****on\_missing\_column**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    > **See also**
    > [`load_policy`](scikitplot.feature_selection.load_policy.html#scikitplot.feature_selection.load_policy "scikitplot.feature_selection.load_policy")
    :   Read a policy from TOML, YAML or JSON.

    [`dump_policy`](scikitplot.feature_selection.dump_policy.html#scikitplot.feature_selection.dump_policy "scikitplot.feature_selection.dump_policy")
    :   Write a policy, verified by reading it back.

    [`profile_features`](scikitplot.feature_selection.profile_features.html#scikitplot.feature_selection.profile_features "scikitplot.feature_selection.profile_features")
    :   Fit a schema from a DataFrame and a policy.

    Notes

    ****User note.**** Keep one policy per project in version control. Its
    [`digest`](#scikitplot.feature_selection.FeaturePolicy.digest "scikitplot.feature_selection.FeaturePolicy.digest") is recorded in every fitted schema, so you can tell which
    configuration produced a result.

    ****Developer note.**** Stored containers are sorted tuples of pairs; the
    `*_map` properties return fresh dictionaries.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.feature_selection import FeaturePolicy
    >>> policy = FeaturePolicy(
    ...     roles={"target": ["churn"]},
    ...     assessments={
    ...         "skewed": {"provider": "skewed", "params": {"threshold": 0.75}}
    ...     },
    ... )
    >>> policy.assessments_map["skewed"].params_dict["threshold"]
    0.75
    >>> FeaturePolicy.from_dict(policy.to_dict()) == policy
    True

    ```
    Go BackOpen In Tab

    assessments: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [AssessmentSpec](scikitplot.feature_selection.AssessmentSpec.html#scikitplot.feature_selection.AssessmentSpec "scikitplot.feature_selection._policy.AssessmentSpec")], ...] = ()[#](#scikitplot.feature_selection.FeaturePolicy.assessments "Link to this definition")

    property assessments\_map: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [AssessmentSpec](scikitplot.feature_selection.AssessmentSpec.html#scikitplot.feature_selection.AssessmentSpec "scikitplot.feature_selection._policy.AssessmentSpec")][#](#scikitplot.feature_selection.FeaturePolicy.assessments_map "Link to this definition")
    :   Assessment name to spec, defaults included.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    binning: [BinningPolicy](scikitplot.feature_selection.BinningPolicy.html#scikitplot.feature_selection.BinningPolicy "scikitplot.feature_selection._policy.BinningPolicy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L676)[#](#scikitplot.feature_selection.FeaturePolicy.binning "Link to this definition")

    check\_columns(**names**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L910)[#](#scikitplot.feature_selection.FeaturePolicy.check_columns "Link to this definition")
    :   Refuse `kinds`/`overrides` keys absent from `names` (unless ignored).

        Parameters:
        :   ****names****sequence of str
            :   Column names of the data.

        Raises:
        :   PolicyError
            :   If a key is missing and `on_missing_column="raise"`.

        Parameters:
        :   ****names**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   None

    property digest: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.feature_selection.FeaturePolicy.digest "Link to this definition")
    :   SHA-256 of the canonical JSON form; equal policies share it.

        Type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    drift: [DriftPolicy](scikitplot.feature_selection.DriftPolicy.html#scikitplot.feature_selection.DriftPolicy "scikitplot.feature_selection._policy.DriftPolicy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L676)[#](#scikitplot.feature_selection.FeaturePolicy.drift "Link to this definition")

    dumps(**format='toml'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L1010)[#](#scikitplot.feature_selection.FeaturePolicy.dumps "Link to this definition")
    :   Serialise the policy, verified by reading it back.

        Parameters:
        :   ****format****{“toml”, “yaml”, “json”}, default=”toml”
            :   Output format.

        Returns:
        :   str
            :   The document.

        Raises:
        :   PolicyError
            :   If the document would not load back equal to this policy.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L961)[#](#scikitplot.feature_selection.FeaturePolicy.from_dict "Link to this definition")
    :   Build a policy from its config form, checking every field first.

        Parameters:
        :   ****data****mapping
            :   A document as produced by [`to_dict`](#scikitplot.feature_selection.FeaturePolicy.to_dict "scikitplot.feature_selection.FeaturePolicy.to_dict") or written by hand; every
                key is optional except that `schema_version`, when given, must
                be the supported generation.

        Returns:
        :   FeaturePolicy
            :   The policy.

        Raises:
        :   PolicyError
            :   For an unknown key, a wrong type or an out-of-range value.

            IncompatibleSchemaError
            :   For another `schema_version`.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**FeaturePolicy**](#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection._policy.FeaturePolicy")

    kinds: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], ...] = ()[#](#scikitplot.feature_selection.FeaturePolicy.kinds "Link to this definition")

    property kinds\_map: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.FeaturePolicy.kinds_map "Link to this definition")
    :   Column to declared kind.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    classmethod loads(**text**, **format='toml'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L1036)[#](#scikitplot.feature_selection.FeaturePolicy.loads "Link to this definition")
    :   Parse a policy document.

        Parameters:
        :   ****text****str
            :   The document.

            ****format****{“toml”, “yaml”, “json”}, default=”toml”
            :   Input format.

        Returns:
        :   FeaturePolicy
            :   The policy.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FeaturePolicy**](#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection._policy.FeaturePolicy")

    on\_missing\_column: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'raise'[#](#scikitplot.feature_selection.FeaturePolicy.on_missing_column "Link to this definition")

    overrides: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")], ...]], ...] = ()[#](#scikitplot.feature_selection.FeaturePolicy.overrides "Link to this definition")

    property overrides\_map: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")]][#](#scikitplot.feature_selection.FeaturePolicy.overrides_map "Link to this definition")
    :   Column to manual assessment answers.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    resolve\_roles(**names**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L853)[#](#scikitplot.feature_selection.FeaturePolicy.resolve_roles "Link to this definition")
    :   Return the role of every column in `names`.

        Parameters:
        :   ****names****sequence of str
            :   Column names of the data.

        Returns:
        :   dict
            :   Column to role value; unlisted columns are `"feature"`.

        Raises:
        :   PolicyError
            :   If a column matches two roles, or a named column is missing and
                `on_missing_column="raise"`.

        Parameters:
        :   ****names**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    resolve\_tags(**names**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L888)[#](#scikitplot.feature_selection.FeaturePolicy.resolve_tags "Link to this definition")
    :   Return the tags of every column in `names`.

        Parameters:
        :   ****names****sequence of str
            :   Column names of the data.

        Returns:
        :   dict
            :   Column to sorted tuple of tags (empty when untagged).

        Parameters:
        :   ****names**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]]

    roles: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [ColumnRule](scikitplot.feature_selection.ColumnRule.html#scikitplot.feature_selection.ColumnRule "scikitplot.feature_selection._policy.ColumnRule")], ...] = ()[#](#scikitplot.feature_selection.FeaturePolicy.roles "Link to this definition")

    property roles\_map: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [ColumnRule](scikitplot.feature_selection.ColumnRule.html#scikitplot.feature_selection.ColumnRule "scikitplot.feature_selection._policy.ColumnRule")][#](#scikitplot.feature_selection.FeaturePolicy.roles_map "Link to this definition")
    :   Role name to column rule.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    tags: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [ColumnRule](scikitplot.feature_selection.ColumnRule.html#scikitplot.feature_selection.ColumnRule "scikitplot.feature_selection._policy.ColumnRule")], ...] = ()[#](#scikitplot.feature_selection.FeaturePolicy.tags "Link to this definition")

    property tags\_map: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [ColumnRule](scikitplot.feature_selection.ColumnRule.html#scikitplot.feature_selection.ColumnRule "scikitplot.feature_selection._policy.ColumnRule")][#](#scikitplot.feature_selection.FeaturePolicy.tags_map "Link to this definition")
    :   Tag to column rule.

        Type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L940)[#](#scikitplot.feature_selection.FeaturePolicy.to_dict "Link to this definition")
    :   Return the canonical config form, defaults included.

        Returns:
        :   dict
            :   A tree of the shared data model with `schema_version`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]