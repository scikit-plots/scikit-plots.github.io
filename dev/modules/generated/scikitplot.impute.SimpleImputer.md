# SimpleImputer[#](#simpleimputer "Link to this heading")

class scikitplot.impute.SimpleImputer(**\***, **missing\_values=nan**, **strategy='mean'**, **fill\_value=None**, **copy=True**, **add\_indicator=False**, **keep\_empty\_features=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/impute/_base.py#L171)[#](#scikitplot.impute.SimpleImputer "Link to this definition")
:   Univariate imputer for completing missing values with simple strategies.

    Replace missing values using a descriptive statistic (e.g. mean, median, or
    most frequent) along each column, or using a constant value.

    Read more in the [User Guide](https://scikit-learn.org/dev/modules/impute.html#impute "(in scikit-learn v1.10)").

    Added in version 0.20: `SimpleImputer` replaces the previous `sklearn.preprocessing.Imputer`
    estimator which is now removed.

    Parameters:
    :   ****missing\_values****int, float, str, np.nan, None or pandas.NA, default=np.nan
        :   The placeholder for the missing values. All occurrences of
            `missing_values` will be imputed. For pandas’ dataframes with
            nullable integer dtypes with missing values, `missing_values`
            can be set to either `np.nan` or `pd.NA`.

        ****strategy****str or Callable, default=’mean’
        :   The imputation strategy.

            * If “mean”, then replace missing values using the mean along
              each column. Can only be used with numeric data.
            * If “median”, then replace missing values using the median along
              each column. Can only be used with numeric data.
            * If “most\_frequent”, then replace missing using the most frequent
              value along each column. Can be used with strings or numeric data.
              If there is more than one such value, only the smallest is returned.
            * If “constant”, then replace missing values with fill\_value. Can be
              used with strings or numeric data.
            * If an instance of Callable, then replace missing values using the
              scalar statistic returned by running the callable over a dense 1d
              array containing non-missing values of each column.

            Added in version 0.20: strategy=”constant” for fixed value imputation.

            Added in version 1.5: strategy=callable for custom value imputation.

        ****fill\_value****str or numerical value, default=None
        :   When strategy == “constant”, `fill_value` is used to replace all
            occurrences of missing\_values. For string or object data types,
            `fill_value` must be a string.
            If `None`, `fill_value` will be 0 when imputing numerical
            data and “missing\_value” for strings or object data types.

        ****copy****bool, default=True
        :   If True, a copy of X will be created. If False, imputation will
            be done in-place whenever possible. Note that, in the following cases,
            a new copy will always be made, even if `copy=False`:

            * If `X` is not an array of floating values;
            * If `X` is encoded as a CSR matrix;
            * If `add_indicator=True`.

        ****add\_indicator****bool, default=False
        :   If True, a [`MissingIndicator`](scikitplot.impute.MissingIndicator.html#scikitplot.impute.MissingIndicator "scikitplot.impute.MissingIndicator") transform will stack onto output
            of the imputer’s transform. This allows a predictive estimator
            to account for missingness despite imputation. If a feature has no
            missing values at fit/train time, the feature won’t appear on
            the missing indicator even if there are missing values at
            transform/test time.

        ****keep\_empty\_features****bool, default=False
        :   If True, features that consist exclusively of missing values when
            `fit` is called are returned in results when `transform` is called.
            The imputed value is always `0` except when `strategy="constant"`
            in which case `fill_value` will be used instead.

            Added in version 1.2.

    Attributes:
    :   ****statistics\_****array of shape (n\_features,)
        :   The imputation fill value for each feature.
            Computing statistics can result in `np.nan` values.
            During [`transform`](#scikitplot.impute.SimpleImputer.transform "scikitplot.impute.SimpleImputer.transform"), features corresponding to `np.nan`
            statistics will be discarded.

        ****indicator\_****[`MissingIndicator`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "(in scikit-learn v1.10)")
        :   Indicator used to add binary indicators for missing values.
            `None` if `add_indicator=False`.

        ****n\_features\_in\_****int
        :   Number of features seen during [fit](https://scikit-learn.org/dev/glossary.html#term-fit "(in scikit-learn v1.10)").

            Added in version 0.24.

        ****feature\_names\_in\_****ndarray of shape (`n_features_in_`,)
        :   Names of features seen during [fit](https://scikit-learn.org/dev/glossary.html#term-fit "(in scikit-learn v1.10)"). Defined only when `X`
            has feature names that are all strings.

            Added in version 1.0.

    > **See also**
    > `IterativeImputer`
    :   Multivariate imputer that estimates values to impute for each feature with missing values from all the others.

    `KNNImputer`
    :   Multivariate imputer that estimates missing features using nearest samples.

    Notes

    Columns which only contained missing values at [`fit`](#scikitplot.impute.SimpleImputer.fit "scikitplot.impute.SimpleImputer.fit") are discarded
    upon [`transform`](#scikitplot.impute.SimpleImputer.transform "scikitplot.impute.SimpleImputer.transform") if strategy is not `"constant"`.

    In a prediction context, simple imputation usually performs poorly when
    associated with a weak learner. However, with a powerful learner, it can
    lead to as good or better performance than complex imputation such as
    [`IterativeImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.IterativeImputer.html#sklearn.impute.IterativeImputer "(in scikit-learn v1.10)") or [`KNNImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.KNNImputer.html#sklearn.impute.KNNImputer "(in scikit-learn v1.10)").

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from sklearn.impute import SimpleImputer
    >>> imp_mean = SimpleImputer(missing_values=np.nan, strategy='mean')
    >>> imp_mean.fit([[7, 2, 3], [4, np.nan, 6], [10, 5, 9]])
    SimpleImputer()
    >>> X = [[np.nan, 2, 3], [4, np.nan, 6], [10, np.nan, 9]]
    >>> print(imp_mean.transform(X))
    [[ 7.   2.   3. ]
     [ 4.   3.5  6. ]
     [10.   3.5  9. ]]

    ```

    For a more detailed example see
    [Imputing missing values before building an estimator](https://scikit-learn.org/dev/auto_examples/impute/plot_missing_values.html#sphx-glr-auto-examples-impute-plot-missing-values-py "(in scikit-learn v1.10)").

    Go BackOpen In Tab

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/impute/_base.py#L430)[#](#scikitplot.impute.SimpleImputer.fit "Link to this definition")
    :   Fit the imputer on `X`.

        Parameters:
        :   ****X****{array-like, sparse matrix}, shape (n\_samples, n\_features)
            :   Input data, where `n_samples` is the number of samples and
                `n_features` is the number of features.

            ****y****Ignored
            :   Not used, present here for API consistency by convention.

        Returns:
        :   ****self****object
            :   Fitted estimator.

    fit\_transform(**X**, **y=None**, **\*\*fit\_params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/base.py#L913)[#](#scikitplot.impute.SimpleImputer.fit_transform "Link to this definition")
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

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/impute/_base.py#L760)[#](#scikitplot.impute.SimpleImputer.get_feature_names_out "Link to this definition")
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

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/utils/_metadata_requests.py#L1743)[#](#scikitplot.impute.SimpleImputer.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](../../user_guide/metadata_routing.html#metadata-routing) on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.10)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/base.py#L248)[#](#scikitplot.impute.SimpleImputer.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    inverse\_transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/impute/_base.py#L690)[#](#scikitplot.impute.SimpleImputer.inverse_transform "Link to this definition")
    :   Convert the data back to the original representation.

        Inverts the `transform` operation performed on an array.
        This operation can only be performed after [`SimpleImputer`](#scikitplot.impute.SimpleImputer "scikitplot.impute.SimpleImputer") is
        instantiated with `add_indicator=True`.

        Note that `inverse_transform` can only invert the transform in
        features that have binary indicators for missing values. If a feature
        has no missing values at `fit` time, the feature won’t have a binary
        indicator, and the imputation done at `transform` time won’t be
        inverted.

        Added in version 0.24.

        Parameters:
        :   ****X****array-like of shape (n\_samples, n\_features + n\_features\_missing\_indicator)
            :   The imputed data to be reverted to original data. It has to be
                an augmented array of imputed data and the missing indicator mask.

        Returns:
        :   ****X\_original****ndarray of shape (n\_samples, n\_features)
            :   The original `X` with missing values as it was prior
                to imputation.

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/utils/_set_output.py#L400)[#](#scikitplot.impute.SimpleImputer.set_output "Link to this definition")
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

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/base.py#L400)[#](#scikitplot.impute.SimpleImputer.set_params "Link to this definition")
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

    transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/../sklearn/impute/_base.py#L601)[#](#scikitplot.impute.SimpleImputer.transform "Link to this definition")
    :   Impute all missing values in `X`.

        Parameters:
        :   ****X****{array-like, sparse matrix}, shape (n\_samples, n\_features)
            :   The input data to complete.

        Returns:
        :   ****X\_imputed****{ndarray, sparse matrix} of shape (n\_samples, n\_features\_out)
            :   `X` with imputed values.