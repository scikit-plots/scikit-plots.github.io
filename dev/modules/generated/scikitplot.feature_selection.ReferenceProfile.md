# ReferenceProfile[#](#referenceprofile "Link to this heading")

class scikitplot.feature\_selection.ReferenceProfile(**features**, **policy=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L408)[#](#scikitplot.feature_selection.ReferenceProfile "Link to this definition")
:   Frozen training distribution of every compared feature.

    Parameters:
    :   ****features****tuple of FeatureReference
        :   One reference per feature.

        ****policy****DriftPolicy
        :   Bucketing and judging settings.

    Parameters:
    :   * ****features**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**FeatureReference**](scikitplot.feature_selection.FeatureReference.html#scikitplot.feature_selection.FeatureReference "scikitplot.feature_selection._drift.FeatureReference")**,** **...****]**)
        * ****policy**** ([**DriftPolicy**](scikitplot.feature_selection.DriftPolicy.html#scikitplot.feature_selection.DriftPolicy "scikitplot.feature_selection._policy.DriftPolicy"))

    > **See also**
    > [`FeatureSchema.audit`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema.audit "scikitplot.feature_selection.FeatureSchema.audit")
    :   Structural (column/dtype) comparison.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np, pandas as pd
    >>> from scikitplot.feature_selection import ReferenceProfile
    >>> rng = np.random.default_rng(0)
    >>> train = pd.DataFrame(
    ...     {"x": rng.normal(size=500), "c": rng.choice(list("ab"), 500)}
    ... )
    >>> later = pd.DataFrame(
    ...     {"x": rng.normal(2.0, 1.0, 500), "c": rng.choice(list("ab"), 500)}
    ... )
    >>> report = ReferenceProfile.fit(train).drift(later)
    >>> report.set_index("feature")["status"].to_dict()
    {'x': 'drift', 'c': 'stable'}

    ```
    Go BackOpen In Tab

    drift(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L511)[#](#scikitplot.feature_selection.ReferenceProfile.drift "Link to this definition")
    :   Compare `X` with the reference, feature by feature.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Current data.

        Returns:
        :   pandas.DataFrame
            :   One row per reference feature with the columns `feature`,
                `kind`, `method`, `n_reference`, `n_current`, `psi`,
                `js_distance`, `missing_reference`, `missing_current`,
                `missing_delta`, `unseen_ratio` and `status` (`stable`,
                `warn`, `drift`, `insufficient`, `missing_column`,
                `type_changed`, `not_applicable`).

        Parameters:
        :   ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    dumps(**format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L651)[#](#scikitplot.feature_selection.ReferenceProfile.dumps "Link to this definition")
    :   Serialise the reference (verified by reading it back).

        Parameters:
        :   ****format****{“json”, “yaml”, “toml”}, default=”json”
            :   Format.

        Returns:
        :   str
            :   The document.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    features: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[FeatureReference](scikitplot.feature_selection.FeatureReference.html#scikitplot.feature_selection.FeatureReference "scikitplot.feature_selection._drift.FeatureReference"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L408)[#](#scikitplot.feature_selection.ReferenceProfile.features "Link to this definition")

    classmethod fit(**X**, **schema=None**, **\***, **policy=None**, **columns=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L443)[#](#scikitplot.feature_selection.ReferenceProfile.fit "Link to this definition")
    :   Freeze the reference buckets of `X`.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Reference (training) data.

            ****schema****FeatureSchema or None, default=None
            :   Kinds to use; profiled from `X` with `policy` when None.

            ****policy****FeaturePolicy, mapping, path or None, default=None
            :   Used to profile `X` when `schema` is None; its `drift`
                section configures the reference.

            ****columns****sequence of str or None, default=None
            :   Columns to compare; defaults to the `role="feature"` columns.

        Returns:
        :   ReferenceProfile
            :   The reference.

        Parameters:
        :   * ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))
            * ****schema**** ([**FeatureSchema**](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema "scikitplot.feature_selection._schema.FeatureSchema") **|** **None**)
            * ****policy**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****columns**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**ReferenceProfile**](#scikitplot.feature_selection.ReferenceProfile "scikitplot.feature_selection._drift.ReferenceProfile")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L607)[#](#scikitplot.feature_selection.ReferenceProfile.from_dict "Link to this definition")
    :   Rebuild a reference from [`to_dict`](#scikitplot.feature_selection.ReferenceProfile.to_dict "scikitplot.feature_selection.ReferenceProfile.to_dict") output.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   ReferenceProfile
            :   The reference.

        Raises:
        :   IncompatibleSchemaError
            :   For another generation or artefact type.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**ReferenceProfile**](#scikitplot.feature_selection.ReferenceProfile "scikitplot.feature_selection._drift.ReferenceProfile")

    classmethod load(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L713)[#](#scikitplot.feature_selection.ReferenceProfile.load "Link to this definition")
    :   Read a reference written by [`save`](#scikitplot.feature_selection.ReferenceProfile.save "scikitplot.feature_selection.ReferenceProfile.save").

        Parameters:
        :   ****path****str or os.PathLike
            :   Source file.

            ****format****str or None, default=None
            :   Explicit format.

        Returns:
        :   ReferenceProfile
            :   The reference.

        Parameters:
        :   * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**ReferenceProfile**](#scikitplot.feature_selection.ReferenceProfile "scikitplot.feature_selection._drift.ReferenceProfile")

    classmethod loads(**text**, **format='json'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L670)[#](#scikitplot.feature_selection.ReferenceProfile.loads "Link to this definition")
    :   Parse a reference document.

        Parameters:
        :   ****text****str
            :   The document.

            ****format****{“json”, “yaml”, “toml”}, default=”json”
            :   Format.

        Returns:
        :   ReferenceProfile
            :   The reference.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**ReferenceProfile**](#scikitplot.feature_selection.ReferenceProfile "scikitplot.feature_selection._drift.ReferenceProfile")

    property names: [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")][#](#scikitplot.feature_selection.ReferenceProfile.names "Link to this definition")
    :   Compared feature names.

        Type:
        :   List of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    policy: [DriftPolicy](scikitplot.feature_selection.DriftPolicy.html#scikitplot.feature_selection.DriftPolicy "scikitplot.feature_selection._policy.DriftPolicy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L408)[#](#scikitplot.feature_selection.ReferenceProfile.policy "Link to this definition")

    save(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L693)[#](#scikitplot.feature_selection.ReferenceProfile.save "Link to this definition")
    :   Write the reference atomically.

        Parameters:
        :   ****path****str or os.PathLike
            :   Target file.

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

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L598)[#](#scikitplot.feature_selection.ReferenceProfile.to_dict "Link to this definition")
    :   Return the persisted form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_feature_profiling_and_lineage_thumb.png)

[Profile, route, trace and monitor wide tables](../../auto_examples/feature_selection/plot_feature_profiling_and_lineage.html)

Profile, route, trace and monitor wide tables