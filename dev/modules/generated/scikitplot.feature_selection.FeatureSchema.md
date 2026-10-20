# FeatureSchema[#](#featureschema "Link to this heading")

class scikitplot.feature\_selection.FeatureSchema(**features**, **policy**, **n\_rows**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L462)[#](#scikitplot.feature_selection.FeatureSchema "Link to this definition")
:   Immutable, fitted description of a table’s columns.

    Parameters:
    :   ****features****tuple of FeatureSpec
        :   One spec per column, in training column order.

        ****policy****FeaturePolicy
        :   The policy the schema was fitted with.

        ****n\_rows****int
        :   Training rows.

    Parameters:
    :   * ****features**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**FeatureSpec**](scikitplot.feature_selection.FeatureSpec.html#scikitplot.feature_selection.FeatureSpec "scikitplot.feature_selection._schema.FeatureSpec")**,** **...****]**)
        * ****policy**** ([**FeaturePolicy**](scikitplot.feature_selection.FeaturePolicy.html#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection._policy.FeaturePolicy"))
        * ****n\_rows**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    > **See also**
    > [`profile_features`](scikitplot.feature_selection.profile_features.html#scikitplot.feature_selection.profile_features "scikitplot.feature_selection.profile_features")
    :   Fit a schema.

    [`FeatureProfiler`](scikitplot.feature_selection.FeatureProfiler.html#scikitplot.feature_selection.FeatureProfiler "scikitplot.feature_selection.FeatureProfiler")
    :   Fit a schema inside a scikit-learn pipeline.

    Notes

    ****User note.**** A schema is fitted state: build it from training data once,
    keep it ([`save`](#scikitplot.feature_selection.FeatureSchema.save "scikitplot.feature_selection.FeatureSchema.save")), and [`audit`](#scikitplot.feature_selection.FeatureSchema.audit "scikitplot.feature_selection.FeatureSchema.audit") later data against it.

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import profile_features
    >>> X = pd.DataFrame(
    ...     {
    ...         "age": [21, 35, 47, 52, 33, 41] * 5,
    ...         "city": ["a", "b", "a", "c", "b", "a"] * 5,
    ...         "vip": [True, False] * 15,
    ...         "churn": [0, 1] * 15,
    ...     }
    ... )
    >>> schema = profile_features(X, {"roles": {"target": ["churn"]}})
    >>> schema.groups(by="kind")
    {'binary': ['vip'], 'categorical_nominal': ['city'], 'numeric_discrete': ['age']}
    >>> schema["age"].is_("discrete"), schema["churn"].role
    (True, 'target')

    ```
    Go BackOpen In Tab

    assessment\_table()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L742)[#](#scikitplot.feature_selection.FeatureSchema.assessment_table "Link to this definition")
    :   Return a features-by-assessments table of states.

        Returns:
        :   pandas.DataFrame
            :   Index: feature names; columns: assessment names; values: state strings.

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    audit(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L779)[#](#scikitplot.feature_selection.FeatureSchema.audit "Link to this definition")
    :   Compare later data’s columns and dtypes with the fitted schema.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Validation, test or production data.

        Returns:
        :   pandas.DataFrame
            :   One row per finding with columns `column`, `issue`
                (`missing_column`, `extra_column`, `order_changed`,
                `family_changed`, `dtype_changed`), `expected`, `observed`.
                Empty when the structure matches. `dtype_changed` with an
                unchanged family (`int64` to `Int64`) is informational.

        Parameters:
        :   ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

        Notes

        The schema is not changed. Distribution changes are the job of
        [`ReferenceProfile`](scikitplot.feature_selection.ReferenceProfile.html#scikitplot.feature_selection.ReferenceProfile "scikitplot.feature_selection.ReferenceProfile").

    binning\_plan()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L758)[#](#scikitplot.feature_selection.FeatureSchema.binning_plan "Link to this definition")
    :   Return the binning recommendation of every numeric feature.

        Returns:
        :   pandas.DataFrame
            :   Columns `state`, `rule`, `n_bins`, `rule_n_bins`, `strategy`,
                `edges`, `reasons`; indexed by feature.

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    check(**X**, **\***, **allow=('dtype\_changed',)**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L840)[#](#scikitplot.feature_selection.FeatureSchema.check "Link to this definition")
    :   Raise when [`audit`](#scikitplot.feature_selection.FeatureSchema.audit "scikitplot.feature_selection.FeatureSchema.audit") finds an issue that is not allowed.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Later data.

            ****allow****sequence of str, default=(“dtype\_changed”,)
            :   Issue codes to tolerate.

        Raises:
        :   SchemaMismatchError
            :   Listing every disallowed finding.

        Parameters:
        :   * ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))
            * ****allow**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   None

    dumps(**format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L1032)[#](#scikitplot.feature_selection.FeatureSchema.dumps "Link to this definition")
    :   Serialise the schema (verified by reading it back).

        Parameters:
        :   ****format****{“json”, “yaml”, “toml”}, default=”json”
            :   Output format.

        Returns:
        :   str
            :   The document.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    feature(**key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L543)[#](#scikitplot.feature_selection.FeatureSchema.feature "Link to this definition")
    :   Return a feature by name (or position).

        Parameters:
        :   ****key****str or int
            :   Column name, or position.

        Returns:
        :   FeatureSpec
            :   The feature.

        Raises:
        :   KeyError
            :   If the name is unknown.

        Parameters:
        :   ****key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [**FeatureSpec**](scikitplot.feature_selection.FeatureSpec.html#scikitplot.feature_selection.FeatureSpec "scikitplot.feature_selection._schema.FeatureSpec")

    property feature\_names: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.FeatureSchema.feature_names "Link to this definition")
    :   Names of the `role="feature"` columns.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    features: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[FeatureSpec](scikitplot.feature_selection.FeatureSpec.html#scikitplot.feature_selection.FeatureSpec "scikitplot.feature_selection._schema.FeatureSpec"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L462)[#](#scikitplot.feature_selection.FeatureSchema.features "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L967)[#](#scikitplot.feature_selection.FeatureSchema.from_dict "Link to this definition")
    :   Rebuild a schema from [`to_dict`](#scikitplot.feature_selection.FeatureSchema.to_dict "scikitplot.feature_selection.FeatureSchema.to_dict") output.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   FeatureSchema
            :   The schema.

        Raises:
        :   IncompatibleSchemaError
            :   For another `schema_version` or artefact type.

            ValueError
            :   For an off-contract record or a policy digest that does not match
                the stored policy.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**FeatureSchema**](#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema")

    groups(**by='kind'**, **\***, **role='feature'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L667)[#](#scikitplot.feature_selection.FeatureSchema.groups "Link to this definition")
    :   Group feature names.

        Parameters:
        :   ****by****{“kind”, “family”, “role”, “tag”, “assessment”}, default=”kind”
            :   Grouping key. `"assessment"` lists, per assessment, the features
                whose state is `"true"`; `"tag"` lists, per tag, the tagged
                features (a feature can be in several groups).

            ****role****str or sequence of str or None, default=”feature”
            :   Only features with these roles; None for all.

        Returns:
        :   dict of str to list of str
            :   Group name (sorted) to member names (schema order); empty groups
                are omitted.

        Parameters:
        :   * ****by**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****role**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]

    classmethod load(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L1090)[#](#scikitplot.feature_selection.FeatureSchema.load "Link to this definition")
    :   Read a schema written by [`save`](#scikitplot.feature_selection.FeatureSchema.save "scikitplot.feature_selection.FeatureSchema.save").

        Parameters:
        :   ****path****str or os.PathLike
            :   Source file.

            ****format****str or None, default=None
            :   Explicit format.

        Returns:
        :   FeatureSchema
            :   The schema.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**FeatureSchema**](#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema")

    classmethod loads(**text**, **format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L1051)[#](#scikitplot.feature_selection.FeatureSchema.loads "Link to this definition")
    :   Parse a schema document.

        Parameters:
        :   ****text****str
            :   The document.

            ****format****{“json”, “yaml”, “toml”}, default=”json”
            :   Input format.

        Returns:
        :   FeatureSchema
            :   The schema.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FeatureSchema**](#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema")

    n\_rows: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L462)[#](#scikitplot.feature_selection.FeatureSchema.n_rows "Link to this definition")

    property names: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.FeatureSchema.names "Link to this definition")
    :   Every column name, in training order.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    policy: [FeaturePolicy](scikitplot.feature_selection.FeaturePolicy.html#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection._policy.FeaturePolicy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L462)[#](#scikitplot.feature_selection.FeatureSchema.policy "Link to this definition")

    property policy\_digest: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.feature_selection.FeatureSchema.policy_digest "Link to this definition")
    :   Digest of the policy the schema was fitted with.

        Type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    rename(**mapping**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L870)[#](#scikitplot.feature_selection.FeatureSchema.rename "Link to this definition")
    :   Return a schema whose features are renamed, keeping old names as aliases.

        Parameters:
        :   ****mapping****mapping of str to str
            :   Old name to new name; unlisted features keep their names.

        Returns:
        :   FeatureSchema
            :   The renamed schema (identity, stats and assessments unchanged).

        Raises:
        :   KeyError
            :   If a key is not a feature name.

            ValueError
            :   If the result has duplicate names.

        Parameters:
        :   ****mapping**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [**FeatureSchema**](#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema")

    resolve\_alias(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L921)[#](#scikitplot.feature_selection.FeatureSchema.resolve_alias "Link to this definition")
    :   Return the current name of a feature known by `name` or an alias.

        Parameters:
        :   ****name****str
            :   Current name or any earlier name.

        Returns:
        :   str
            :   The current name.

        Raises:
        :   KeyError
            :   If no feature has that name or alias.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    save(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L1070)[#](#scikitplot.feature_selection.FeatureSchema.save "Link to this definition")
    :   Write the schema to `path` atomically.

        Parameters:
        :   ****path****str or os.PathLike
            :   Target file (`.json`, `.yaml`, `.toml`).

            ****format****str or None, default=None
            :   Explicit format.

        Returns:
        :   pathlib.Path
            :   The written path.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")

    select(**\***, **kind=None**, **family=None**, **role='feature'**, **tag=None**, **is\_=()**, **is\_not=()**, **names=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L588)[#](#scikitplot.feature_selection.FeatureSchema.select "Link to this definition")
    :   Return the names of the features that satisfy every given condition.

        Parameters:
        :   ****kind, family****str or sequence of str or None, default=None
            :   Accept features of any of these kinds / families.

            ****role****str or sequence of str or None, default=”feature”
            :   Accept these roles; None accepts every role.

            ****tag****str or sequence of str or None, default=None
            :   Accept features carrying at least one of these tags.

            ****is\_****sequence of str, default=()
            :   Assessments that must all be `"true"`.

            ****is\_not****sequence of str, default=()
            :   Assessments that must not be `"true"` (`unknown` passes).

            ****names****sequence of str or None, default=None
            :   Restrict to these names.

        Returns:
        :   list of str
            :   Matching names in schema order.

        Raises:
        :   ValueError
            :   For an unknown kind, family, role or assessment name.

        Parameters:
        :   * ****kind**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****family**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****role**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****tag**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****is\_**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****is\_not**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****names**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Examples

        Try it in your browser!
        ```
        >>> import pandas as pd
        >>> from scikitplot.feature_selection import profile_features
        >>> X = pd.DataFrame({"a": [1.5, 2.5, 3.5, 95.5] * 5, "b": list("xyzx") * 5})
        >>> schema = profile_features(X)
        >>> schema.select(kind="numeric_continuous", is_=("skewed",))
        ['a']

        ```
        Go BackOpen In Tab

    summary()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L705)[#](#scikitplot.feature_selection.FeatureSchema.summary "Link to this definition")
    :   Return one row per feature with role, kind, key statistics and states.

        Returns:
        :   pandas.DataFrame
            :   Indexed by feature name. Assessment columns hold state strings.

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_schema.py#L949)[#](#scikitplot.feature_selection.FeatureSchema.to_dict "Link to this definition")
    :   Return the persisted form (schema version, policy, digest, features).

        Returns:
        :   dict
            :   A tree of the shared data model.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]