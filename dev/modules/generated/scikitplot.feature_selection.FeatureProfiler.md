# FeatureProfiler[#](#featureprofiler "Link to this heading")

class scikitplot.feature\_selection.FeatureProfiler(**policy=None**, **\***, **output='all'**, **on\_mismatch='raise'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L126)[#](#scikitplot.feature_selection.FeatureProfiler "Link to this definition")
:   Fit a feature schema on the training data; pass data through unchanged.

    Parameters:
    :   ****policy****FeaturePolicy, mapping, path or None, default=None
        :   Profiling policy (see [`FeaturePolicy`](scikitplot.feature_selection.FeaturePolicy.html#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection.FeaturePolicy")).

        ****output****{“all”, “features”}, default=”all”
        :   `"all"` returns every fitted column; `"features"` only the columns
            whose role is `"feature"` (target, identifier, drop … removed).

        ****on\_mismatch****{“raise”, “warn”, “ignore”}, default=”raise”
        :   What `transform` does with extra, reordered or retyped columns.
            Missing columns always raise. Output always has the fitted columns in
            the fitted order.

    Attributes:
    :   ****schema\_****FeatureSchema
        :   Schema fitted on the training data.

        ****feature\_names\_in\_****ndarray of str
        :   Columns seen in `fit`.

        ****n\_features\_in\_****int
        :   Their count.

    Parameters:
    :   * ****policy**** (**Any**)
        * ****output**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****on\_mismatch**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    > **See also**
    > [`profile_features`](scikitplot.feature_selection.profile_features.html#scikitplot.feature_selection.profile_features "scikitplot.feature_selection.profile_features")
    :   The same without scikit-learn.

    [`FeatureFilter`](scikitplot.feature_selection.FeatureFilter.html#scikitplot.feature_selection.FeatureFilter "scikitplot.feature_selection.FeatureFilter")
    :   Drops features by assessment.

    Notes

    ****User note.**** Put it first in a pipeline to keep the training schema next
    to the model: `pipe.named_steps["profile"].schema_`. Use
    [`audit`](#scikitplot.feature_selection.FeatureProfiler.audit "scikitplot.feature_selection.FeatureProfiler.audit") on validation or test data to see structural differences
    without refitting.

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import FeatureProfiler
    >>> X = pd.DataFrame({"a": [1.0, 2.0, 3.0] * 4, "id": [str(i) for i in range(12)]})
    >>> prof = FeatureProfiler(
    ...     policy={"roles": {"identifier": ["id"]}}, output="features"
    ... )
    >>> prof.fit_transform(X).columns.tolist()
    ['a']
    >>> prof.schema_["id"].role
    'identifier'

    ```
    Go BackOpen In Tab

    audit(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L237)[#](#scikitplot.feature_selection.FeatureProfiler.audit "Link to this definition")
    :   Return [`FeatureSchema.audit`](scikitplot.feature_selection.FeatureSchema.html#scikitplot.feature_selection.FeatureSchema.audit "scikitplot.feature_selection.FeatureSchema.audit") of `X`.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Later data.

        Returns:
        :   pandas.DataFrame
            :   Structural findings.

        Parameters:
        :   ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L184)[#](#scikitplot.feature_selection.FeatureProfiler.fit "Link to this definition")
    :   Fit the schema on `X`.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Training data.

            ****y****ignored
            :   Present for API consistency.

        Returns:
        :   ****self****FeatureProfiler
            :   The fitted profiler.

        Parameters:
        :   * ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))
            * ****y**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FeatureProfiler**](#scikitplot.feature_selection.FeatureProfiler "scikitplot.feature_selection._estimators.FeatureProfiler")

    fit\_transform(**X**, **y=None**, **\*\*fit\_params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/base.py#L913)[#](#scikitplot.feature_selection.FeatureProfiler.fit_transform "Link to this definition")
    :   Fit to data, then transform it.

        Fits transformer to `X` and `y` with optional parameters `fit_params`
        and returns a transformed version of `X`.

        Parameters:
        :   ****X****array-like of shape (n\_samples, n\_features)
            :   Input samples.

            ****y****array-like of shape (n\_samples,) or (n\_samples, n\_outputs), default=None
            :   Target values (None for unsupervised transformations).

            ****\*\*fit\_params****dict
            :   Additional fit parameters.
                Pass only if the estimator accepts additional params in its `fit` method.

        Returns:
        :   ****X\_new****ndarray array of shape (n\_samples, n\_features\_new)
            :   Transformed array.

    get\_feature\_lineage(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L271)[#](#scikitplot.feature_selection.FeatureProfiler.get_feature_lineage "Link to this definition")
    :   Return the exact lineage of this step (a subset or the identity).

        Parameters:
        :   ****input\_features****array-like of str or None, default=None
            :   Must equal `feature_names_in_` when given.

        Returns:
        :   FeatureMapping
            :   The mapping.

        Parameters:
        :   ****input\_features**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FeatureMapping**](scikitplot.feature_selection.FeatureMapping.html#scikitplot.feature_selection.FeatureMapping "scikitplot.feature_selection._lineage.FeatureMapping")

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L254)[#](#scikitplot.feature_selection.FeatureProfiler.get_feature_names_out "Link to this definition")
    :   Return the output column names.

        Parameters:
        :   ****input\_features****array-like of str or None, default=None
            :   Must equal `feature_names_in_` when given.

        Returns:
        :   ndarray of str
            :   Output names.

        Parameters:
        :   ****input\_features**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/utils/_metadata_requests.py#L1743)[#](#scikitplot.feature_selection.FeatureProfiler.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](https://scikit-learn.org/dev/metadata_routing.html#metadata-routing "(in scikit-learn v1.10)") on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.10)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/base.py#L248)[#](#scikitplot.feature_selection.FeatureProfiler.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/utils/_set_output.py#L400)[#](#scikitplot.feature_selection.FeatureProfiler.set_output "Link to this definition")
    :   Set output container.

        Refer to the [user guide](https://scikit-learn.org/dev/modules/df_output_transform.html#df-output-transform "(in scikit-learn v1.10)") for more details
        and [Introducing the set\_output API](https://scikit-learn.org/dev/auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py "(in scikit-learn v1.10)") for an
        example on how to use the API.

        Parameters:
        :   ****transform****{“default”, “pandas”, “polars”}, default=None
            :   Configure output of `transform` and `fit_transform`.

                * `"default"`: Default output format of a transformer
                * `"pandas"`: DataFrame output
                * `"polars"`: Polars output
                * `None`: Transform configuration is unchanged

                Added in version 1.4: `"polars"` option was added.

        Returns:
        :   ****self****estimator instance
            :   Estimator instance.

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/base.py#L400)[#](#scikitplot.feature_selection.FeatureProfiler.set_params "Link to this definition")
    :   Set the parameters of this estimator.

        The method works on simple estimators as well as on nested objects
        (such as [`Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)")). The latter have
        parameters of the form `<component>__<parameter>` so that it’s
        possible to update each component of a nested object.

        Parameters:
        :   ****\*\*params****dict
            :   Estimator parameters.

        Returns:
        :   ****self****estimator instance
            :   Estimator instance.

    transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L212)[#](#scikitplot.feature_selection.FeatureProfiler.transform "Link to this definition")
    :   Check `X` against the schema and return the fitted columns.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Data to pass through.

        Returns:
        :   pandas.DataFrame
            :   `X` itself when it already has exactly the output columns,
                otherwise `X[output columns]`.

        Raises:
        :   SchemaMismatchError
            :   For missing columns, or other differences with `on_mismatch="raise"`.

        Parameters:
        :   ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")