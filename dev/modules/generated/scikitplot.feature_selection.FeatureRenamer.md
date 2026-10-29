# FeatureRenamer[#](#featurerenamer "Link to this heading")

class scikitplot.feature\_selection.FeatureRenamer(**rule=None**, **\***, **start=0**, **on\_collision='raise'**, **on\_missing='raise'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L609)[#](#scikitplot.feature_selection.FeatureRenamer "Link to this definition")
:   Rename columns with a plan frozen at fit time.

    Parameters:
    :   ****rule****mapping, sequence of str, callable, str or None, default=None
        :   Naming rule (see [`RenamePlan`](scikitplot.feature_selection.RenamePlan.html#scikitplot.feature_selection.RenamePlan "scikitplot.feature_selection.RenamePlan")):
            `{"old": "new"}`, a list of new names, `callable(name)`, or a
            template such as `"f{index}"`. None keeps every name.

        ****start****int, default=0
        :   First `{index}` of a template.

        ****on\_collision****{“raise”, “suffix”}, default=”raise”
        :   Handling of duplicate new names.

        ****on\_missing****{“raise”, “ignore”}, default=”raise”
        :   Handling of mapping keys that are not columns.

    Attributes:
    :   ****plan\_****RenamePlan
        :   The frozen plan.

        ****feature\_names\_in\_****ndarray of str
        :   Set only when fitted on a DataFrame, as in scikit-learn.

        ****n\_features\_in\_****int
        :   Input count. A NumPy input is named `x0, x1, ...` for the rule.

    Parameters:
    :   * ****rule**** (**Any**)
        * ****start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****on\_collision**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****on\_missing**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****User note.**** Output is always a DataFrame. A callable rule runs once in
    `fit`; `transform` only applies the stored plan, so test data can never
    be renamed differently. Define callables with `def` (not `lambda`) if
    the pipeline must be pickled.

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> from scikitplot.feature_selection import FeatureRenamer
    >>> X = pd.DataFrame({"num__age": [1, 2], "cat__city_a": [0, 1]})
    >>> FeatureRenamer(lambda n: n.split("__", 1)[1]).fit_transform(X).columns.tolist()
    ['age', 'city_a']

    ```
    Go BackOpen In Tab

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L682)[#](#scikitplot.feature_selection.FeatureRenamer.fit "Link to this definition")
    :   Build and freeze the rename plan from the columns of `X`.

        Parameters:
        :   ****X****pandas.DataFrame or array-like
            :   Training data.

            ****y****ignored
            :   Present for API consistency.

        Returns:
        :   ****self****FeatureRenamer
            :   The fitted renamer.

        Parameters:
        :   * ****X**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****y**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FeatureRenamer**](#scikitplot.feature_selection.FeatureRenamer "scikitplot.feature_selection._estimators.FeatureRenamer")

    fit\_transform(**X**, **y=None**, **\*\*fit\_params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/base.py#L913)[#](#scikitplot.feature_selection.FeatureRenamer.fit_transform "Link to this definition")
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

    get\_feature\_lineage(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L772)[#](#scikitplot.feature_selection.FeatureRenamer.get_feature_lineage "Link to this definition")
    :   Return the one-to-one lineage of this step.

        Parameters:
        :   ****input\_features****array-like of str or None, default=None
            :   Checked as in [`get_feature_names_out`](#scikitplot.feature_selection.FeatureRenamer.get_feature_names_out "scikitplot.feature_selection.FeatureRenamer.get_feature_names_out").

        Returns:
        :   FeatureMapping
            :   The identity mapping.

        Parameters:
        :   ****input\_features**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**FeatureMapping**](scikitplot.feature_selection.FeatureMapping.html#scikitplot.feature_selection.FeatureMapping "scikitplot.feature_selection._lineage.FeatureMapping")

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L755)[#](#scikitplot.feature_selection.FeatureRenamer.get_feature_names_out "Link to this definition")
    :   Return the new names.

        Parameters:
        :   ****input\_features****array-like of str or None, default=None
            :   Must equal `feature_names_in_` when given.

        Returns:
        :   ndarray of str
            :   New names.

        Parameters:
        :   ****input\_features**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/utils/_metadata_requests.py#L1743)[#](#scikitplot.feature_selection.FeatureRenamer.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](https://scikit-learn.org/dev/metadata_routing.html#metadata-routing "(in scikit-learn v1.10)") on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.10)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/base.py#L248)[#](#scikitplot.feature_selection.FeatureRenamer.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/utils/_set_output.py#L400)[#](#scikitplot.feature_selection.FeatureRenamer.set_output "Link to this definition")
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

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/../sklearn/base.py#L400)[#](#scikitplot.feature_selection.FeatureRenamer.set_params "Link to this definition")
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

    transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_estimators.py#L727)[#](#scikitplot.feature_selection.FeatureRenamer.transform "Link to this definition")
    :   Apply the frozen plan.

        Parameters:
        :   ****X****pandas.DataFrame or array-like
            :   Data with the fitted columns, in the fitted order.

        Returns:
        :   pandas.DataFrame
            :   Renamed frame.

        Raises:
        :   SchemaMismatchError
            :   If the columns differ from those seen in `fit`.

        Parameters:
        :   ****X**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)")