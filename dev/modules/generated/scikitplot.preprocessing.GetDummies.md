# GetDummies[#](#getdummies "Link to this heading")

class scikitplot.preprocessing.GetDummies(**\***, **columns=None**, **sep='**, **'**, **col\_name\_sep='\_'**, **drop=None**, **sparse\_output=False**, **dtype=<class 'numpy.float64'>**, **handle\_unknown='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/preprocessing/_encoders.py#L80)[#](#scikitplot.preprocessing.GetDummies "Link to this definition")
:   Multi-column multi-label string column one-hot encoder [[1]](#rbcee2ffc57f9-1).

    Custom transformer to expand string columns that contain multiple labels
    separated by `sep` into one-hot encoded columns by [`pandas.get_dummies`](https://pandas.pydata.org/docs/dev/reference/api/pandas.get_dummies.html#pandas.get_dummies "(in pandas v3.1.0.dev0+1159.gd7b577e035)").

    Compatible with sklearn pipelines, `set_output` API, and supports both
    dense and sparse output.

    Parameters:
    :   ****columns****str, list of str or None, default=None
        :   Column(s) to encode. If str, single column. If list, multiple columns.
            If None, automatically detect object (string) columns containing `sep`.

        ****sep****str, default “|”
        :   String to split on (e.g., “a,b,c”).

        ****col\_name\_sep****str, default=”\_”
        :   Separator for new dummy column names, e.g., “tags\_a”.

        ****sparse\_output****bool, default=False
        :   If True, return a SciPy sparse CSR matrix.
            If False, return pandas DataFrame (or numpy array if set\_output=”default”).

        ****handle\_unknown****{“ignore”, “error”}, default=”ignore”
        :   Strategy for unknown categories at transform time.

        ****drop****{“first”, True, None}, default=None
        :   Drop the first dummy in each feature (sorted order) to avoid collinearity.

        ****dtype****number type, default=np.float64
        :   Data type for the output values. (sklearn default is float)

    > **See also**
    > [`DummyCodeEncoder`](scikitplot.preprocessing.DummyCodeEncoder.html#scikitplot.preprocessing.DummyCodeEncoder "scikitplot.preprocessing.DummyCodeEncoder")
    :   Same but more extended and support convert to dummy codes to [`scipy.sparse._csr.csr_matrix`](https://scipy.github.io/devdocs/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix "(in SciPy v1.19.0.dev)") compressed Sparse Row matrix.

    [`pandas.Series.str.get_dummies`](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.str.get_dummies.html#pandas.Series.str.get_dummies "(in pandas v3.1.0.dev0+1159.gd7b577e035)")
    :   Convert Series of strings to dummy codes.

    [`pandas.from_dummies`](https://pandas.pydata.org/docs/dev/reference/api/pandas.from_dummies.html#pandas.from_dummies "(in pandas v3.1.0.dev0+1159.gd7b577e035)")
    :   Convert dummy codes back to categorical DataFrame.

    [`sklearn.preprocessing.OneHotEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.OneHotEncoder.html#sklearn.preprocessing.OneHotEncoder "(in scikit-learn v1.10)")
    :   General-purpose one-hot encoder.

    [`sklearn.preprocessing.MultiLabelBinarizer`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html#sklearn.preprocessing.MultiLabelBinarizer "(in scikit-learn v1.10)")
    :   Multi-label binarizer for iterable of iterables.

    References

    [[1](#id1)]

    [Çelik, M. (2023, December 9).
    “How to converting pandas column of comma-separated strings into dummy variables?.”
    Medium. https://medium.com/@celik-muhammed/how-to-converting-pandas-column-of-comma-separated-strings-into-dummy-variables-762c02282a6c](https://medium.com/@celik-muhammed/how-to-converting-pandas-column-of-comma-separated-strings-into-dummy-variables-762c02282a6c)

    Examples

    Try it in your browser!
    ```
    >>> import pandas as pd
    >>> df = pd.DataFrame(
    ...     {
    ...         "tags": ["a,b,", " A , b", "a,B,C", None],
    ...         "color": ["red", "blue", "green", "Red"],
    ...         "value": [1, 2, 3, 4],
    ...     }
    ... )
    >>> from sklearn.pipeline import Pipeline
    >>> from scikitplot.preprocessing import GetDummies
    >>> pipe = Pipeline(
    ...     [
    ...         (
    ...             "encoder",
    ...             GetDummies(
    ...                 columns=["tags", "color"], drop=None, sparse_output=False
    ...             ),
    ...         )
    ...     ]
    ... )
    >>> X_trans = pipe.fit_transform(df)
    >>> print(X_trans)
       value  ta_a  ta_b  ta_c  co_blue  co_green  co_red
    0      1   1.0   1.0   0.0      0.0       0.0     1.0
    1      2   1.0   1.0   0.0      1.0       0.0     0.0
    2      3   1.0   1.0   1.0      0.0       1.0     0.0
    3      4   0.0   0.0   0.0      0.0       0.0     1.0
    >>> type(X_trans)
    <class 'pandas.core.frame.DataFrame'>

    ```
    Go BackOpen In Tab

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/preprocessing/_encoders.py#L360)[#](#scikitplot.preprocessing.GetDummies.fit "Link to this definition")
    :   Learn dummy categories from training data.

        Stores column order, prefixes, and categories for later alignment.

    fit\_transform(**X**, **y=None**, **\*\*fit\_params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/../sklearn/base.py#L913)[#](#scikitplot.preprocessing.GetDummies.fit_transform "Link to this definition")
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

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/preprocessing/_encoders.py#L488)[#](#scikitplot.preprocessing.GetDummies.get_feature_names_out "Link to this definition")
    :   Return feature names after transformation.

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/../sklearn/utils/_metadata_requests.py#L1737)[#](#scikitplot.preprocessing.GetDummies.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](https://scikit-learn.org/dev/metadata_routing.html#metadata-routing "(in scikit-learn v1.10)") on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.10)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/../sklearn/base.py#L248)[#](#scikitplot.preprocessing.GetDummies.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/../sklearn/utils/_set_output.py#L392)[#](#scikitplot.preprocessing.GetDummies.set_output "Link to this definition")
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

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/../sklearn/base.py#L400)[#](#scikitplot.preprocessing.GetDummies.set_params "Link to this definition")
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

    transform(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/9359828/scikitplot/preprocessing/_encoders.py#L430)[#](#scikitplot.preprocessing.GetDummies.transform "Link to this definition")
    :   Transform new data into dummy-expanded format.

        Steps:
        - Align columns with fit.
        - Drop unknown categories or raise error.
        - Return dense/pandas or sparse output.