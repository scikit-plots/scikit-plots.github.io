# MissingIndicator[#](#missingindicator "Link to this heading")

class scikitplot.impute.MissingIndicator(**\***, **missing\_values=nan**, **features='missing-only'**, **sparse='auto'**, **error\_on\_new=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/impute/_base.py#L787)[#](#scikitplot.impute.MissingIndicator "Link to this definition")
:   Binary indicators for missing values.

    Note that this component typically should not be used in a vanilla
    [`Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)") consisting of transformers and a
    classifier, but rather could be added using a
    [`FeatureUnion`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.FeatureUnion.html#sklearn.pipeline.FeatureUnion "(in scikit-learn v1.10)") or
    [`ColumnTransformer`](https://scikit-learn.org/dev/modules/generated/sklearn.compose.ColumnTransformer.html#sklearn.compose.ColumnTransformer "(in scikit-learn v1.10)").

    Read more in the [User Guide](https://scikit-learn.org/dev/modules/impute.html#impute "(in scikit-learn v1.10)").

    Added in version 0.20.

    Parameters:
    :   ****missing\_values****int, float, str, np.nan or None, default=np.nan
        :   The placeholder for the missing values. All occurrences of
            `missing_values` will be imputed. For pandas’ dataframes with
            nullable integer dtypes with missing values, `missing_values`
            should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`.

        ****features****{‘missing-only’, ‘all’}, default=’missing-only’
        :   Whether the imputer mask should represent all or a subset of
            features.

            * If `'missing-only'` (default), the imputer mask will only represent
              features containing missing values during fit time.
            * If `'all'`, the imputer mask will represent all features.

        ****sparse****bool or ‘auto’, default=’auto’
        :   Whether the imputer mask format should be sparse or dense.

            * If `'auto'` (default), the imputer mask will be of same type as
              input.
            * If `True`, the imputer mask will be a sparse matrix.
            * If `False`, the imputer mask will be a numpy array.

        ****error\_on\_new****bool, default=True
        :   If `True`, [`transform`](#scikitplot.impute.MissingIndicator.transform "scikitplot.impute.MissingIndicator.transform") will raise an error when there are
            features with missing values that have no missing values in
            [`fit`](#scikitplot.impute.MissingIndicator.fit "scikitplot.impute.MissingIndicator.fit"). This is applicable only when `features='missing-only'`.

    Attributes:
    :   ****features\_****ndarray of shape (n\_missing\_features,) or (n\_features,)
        :   The features indices which will be returned when calling
            [`transform`](#scikitplot.impute.MissingIndicator.transform "scikitplot.impute.MissingIndicator.transform"). They are computed during [`fit`](#scikitplot.impute.MissingIndicator.fit "scikitplot.impute.MissingIndicator.fit"). If
            `features='all'`, `features_` is equal to `range(n_features)`.

        ****n\_features\_in\_****int
        :   Number of features seen during [fit](https://scikit-learn.org/dev/glossary.html#term-fit "(in scikit-learn v1.10)").

            Added in version 0.24.

        ****feature\_names\_in\_****ndarray of shape (`n_features_in_`,)
        :   Names of features seen during [fit](https://scikit-learn.org/dev/glossary.html#term-fit "(in scikit-learn v1.10)"). Defined only when `X`
            has feature names that are all strings.

            Added in version 1.0.

    > **See also**
    > [`SimpleImputer`](scikitplot.impute.SimpleImputer.html#scikitplot.impute.SimpleImputer "scikitplot.impute.SimpleImputer")
    :   Univariate imputation of missing values.

    `IterativeImputer`
    :   Multivariate imputation of missing values.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from sklearn.impute import MissingIndicator
    >>> X1 = np.array([[np.nan, 1, 3],
    ...                [4, 0, np.nan],
    ...                [8, 1, 0]])
    >>> X2 = np.array([[5, 1, np.nan],
    ...                [np.nan, 2, 3],
    ...                [2, 4, 0]])
    >>> indicator = MissingIndicator()
    >>> indicator.fit(X1)
    MissingIndicator()
    >>> X2_tr = indicator.transform(X2)
    >>> X2_tr
    array([[False,  True],
           [ True, False],
           [False, False]])

    ```
    Go BackOpen In Tab

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/impute/_base.py#L1023)[#](#scikitplot.impute.MissingIndicator.fit "Link to this definition")
    :   Fit the transformer on `X`.

        Parameters:
        :   ****X****{array-like, sparse matrix} of shape (n\_samples, n\_features)
            :   Input data, where `n_samples` is the number of samples and
                `n_features` is the number of features.

            ****y****Ignored
            :   Not used, present for API consistency by convention.

        Returns:
        :   ****self****object
            :   Fitted estimator.

    fit\_transform(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/impute/_base.py#L1086)[#](#scikitplot.impute.MissingIndicator.fit_transform "Link to this definition")
    :   Generate missing values indicator for `X`.

        Parameters:
        :   ****X****{array-like, sparse matrix} of shape (n\_samples, n\_features)
            :   The input data to complete.

            ****y****Ignored
            :   Not used, present for API consistency by convention.

        Returns:
        :   ****Xt****{ndarray, sparse matrix} of shape (n\_samples, n\_features) or (n\_samples, n\_features\_with\_missing)
            :   The missing indicator for input data. The data type of `Xt`
                will be boolean.

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/impute/_base.py#L1112)[#](#scikitplot.impute.MissingIndicator.get_feature_names_out "Link to this definition")
    :   Get output feature names for transformation.

        Parameters:
        :   ****input\_features****array-like of str or None, default=None
            :   Input features.

                * If `input_features` is `None`, then `feature_names_in_` is
                  used as feature names in. If `feature_names_in_` is not defined,
                  then the following input feature names are generated:
                  `["x0", "x1", ..., "x(n_features_in_ - 1)"]`.
                * If `input_features` is an array-like, then `input_features` must
                  match `feature_names_in_` if `feature_names_in_` is defined.

        Returns:
        :   ****feature\_names\_out****ndarray of str objects
            :   Transformed feature names.

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/utils/_metadata_requests.py#L1743)[#](#scikitplot.impute.MissingIndicator.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](../../user_guide/metadata_routing.html#metadata-routing) on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.10)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/base.py#L248)[#](#scikitplot.impute.MissingIndicator.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/utils/_set_output.py#L400)[#](#scikitplot.impute.MissingIndicator.set_output "Link to this definition")
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

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/base.py#L400)[#](#scikitplot.impute.MissingIndicator.set_params "Link to this definition")
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

    transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../sklearn/impute/_base.py#L1045)[#](#scikitplot.impute.MissingIndicator.transform "Link to this definition")
    :   Generate missing values indicator for `X`.

        Parameters:
        :   ****X****{array-like, sparse matrix} of shape (n\_samples, n\_features)
            :   The input data to complete.

        Returns:
        :   ****Xt****{ndarray, sparse matrix} of shape (n\_samples, n\_features) or (n\_samples, n\_features\_with\_missing)
            :   The missing indicator for input data. The data type of `Xt`
                will be boolean.