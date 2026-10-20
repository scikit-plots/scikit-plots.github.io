# FeatureFilter[#](#featurefilter "Link to this heading")

class scikitplot.feature\_selection.FeatureFilter(**policy=None**, **\***, **drop=('constant', 'identifier\_like')**, **keep\_roles=('feature',)**, **keep=()**, **on\_mismatch='raise'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L292)[#](#scikitplot.feature_selection.FeatureFilter "Link to this definition")
:   Drop features whose assessments are true, and columns with non-feature roles.

    Parameters:
    :   ****policy****FeaturePolicy, mapping, path or None, default=None
        :   Profiling policy.

        ****drop****sequence of str, default=(“constant”, “identifier\_like”)
        :   A feature is dropped when **any** of these assessments is `"true"`.
            `unknown` never drops.

        ****keep\_roles****sequence of str, default=(“feature”,)
        :   Roles that survive; every other role (target, identifier, drop …) is
            removed so it cannot leak into the model.

        ****keep****sequence of str, default=()
        :   Columns kept regardless of their assessments (not of their role).

        ****on\_mismatch****{“raise”, “warn”, “ignore”}, default=”raise”
        :   As in [`FeatureProfiler`](scikitplot.feature_selection.FeatureProfiler.html#scikitplot.feature_selection.FeatureProfiler "scikitplot.feature_selection.FeatureProfiler").

    Attributes:
    :   ****schema\_****FeatureSchema
        :   Fitted schema.

        ****support\_****ndarray of bool
        :   Kept columns.

        ****report\_****pandas.DataFrame
        :   One row per column: `kept` and the `reasons` for dropping.

        ****feature\_names\_in\_, n\_features\_in\_****
        :   As in scikit-learn.

    Parameters:
    :   * ****policy**** (**Any**)
        * ****drop**** (**Sequence****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****keep\_roles**** (**Sequence****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****keep**** (**Sequence****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****on\_mismatch**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import FeatureFilter
    >>> X = pd.DataFrame(
    ...     {"id": [f"r{i}" for i in range(30)], "c": [1] * 30, "x": list(range(30))}
    ... )
    >>> f = FeatureFilter().fit(X)
    >>> f.get_feature_names_out().tolist()
    ['x']
    >>> f.report_.loc["id", "reasons"]
    ('identifier_like',)

    ```
    Go BackOpen In Tab

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L351)[#](#scikitplot.feature_selection.FeatureFilter.fit "Link to this definition")
    :   Profile `X` and decide which columns to keep.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Training data.

            ****y****ignored
            :   Present for API consistency.

        Returns:
        :   ****self****FeatureFilter
            :   The fitted filter.

        Raises:
        :   ValueError
            :   For unknown assessment or role names, `keep` columns absent from
                `X`, or when every column would be dropped.

        Parameters:
        :   * ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))
            * ****y**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FeatureFilter**](#scikitplot.feature_selection.FeatureFilter "scikitplot.feature_selection._estimators.FeatureFilter")

    fit\_transform(**X**, **y=None**, **\*\*fit\_params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/../sklearn/base.py#L913)[#](#scikitplot.feature_selection.FeatureFilter.fit_transform "Link to this definition")
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

    get\_feature\_lineage(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L466)[#](#scikitplot.feature_selection.FeatureFilter.get_feature_lineage "Link to this definition")
    :   Return the exact subset lineage of this step.

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

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L449)[#](#scikitplot.feature_selection.FeatureFilter.get_feature_names_out "Link to this definition")
    :   Return the kept column names.

        Parameters:
        :   ****input\_features****array-like of str or None, default=None
            :   Must equal `feature_names_in_` when given.

        Returns:
        :   ndarray of str
            :   Kept names.

        Parameters:
        :   ****input\_features**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/../sklearn/utils/_metadata_requests.py#L1743)[#](#scikitplot.feature_selection.FeatureFilter.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](https://scikit-learn.org/dev/metadata_routing.html#metadata-routing "(in scikit-learn v1.10)") on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.10)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/../sklearn/base.py#L248)[#](#scikitplot.feature_selection.FeatureFilter.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    get\_support(**indices=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L432)[#](#scikitplot.feature_selection.FeatureFilter.get_support "Link to this definition")
    :   Return the mask (or indices) of kept input columns.

        Parameters:
        :   ****indices****bool, default=False
            :   Return integer positions instead of a mask.

        Returns:
        :   ndarray
            :   Boolean mask or integer positions.

        Parameters:
        :   ****indices**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/../sklearn/utils/_set_output.py#L400)[#](#scikitplot.feature_selection.FeatureFilter.set_output "Link to this definition")
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

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/../sklearn/base.py#L400)[#](#scikitplot.feature_selection.FeatureFilter.set_params "Link to this definition")
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

    transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_estimators.py#L415)[#](#scikitplot.feature_selection.FeatureFilter.transform "Link to this definition")
    :   Return the kept columns of `X`.

        Parameters:
        :   ****X****pandas.DataFrame
            :   Data with the fitted columns.

        Returns:
        :   pandas.DataFrame
            :   Kept columns in fitted order.

        Parameters:
        :   ****X**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_feature_profiling_and_lineage_thumb.png)

[Profile, route, trace and monitor wide tables](../../auto_examples/feature_selection/plot_feature_profiling_and_lineage.html)

Profile, route, trace and monitor wide tables