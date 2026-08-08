# DummyCodeEncoder[#](#dummycodeencoder "Link to this heading")

class scikitplot.preprocessing.DummyCodeEncoder(**\***, **columns=None**, **sep='|'**, **regex=False**, **prefix=None**, **prefix\_sep='\_'**, **dummy\_na=False**, **categories='auto'**, **drop=None**, **sparse\_output=True**, **dtype=<class 'numpy.float64'>**, **handle\_unknown='error'**, **min\_frequency=None**, **max\_categories=None**, **feature\_name\_combiner='concat'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/preprocessing/_encoders.py#L932)[#](#scikitplot.preprocessing.DummyCodeEncoder "Link to this definition")
:   Encode categorical features into dummy/indicator 0/1 variables.

    Each string in Series is split by `sep` and returned as a DataFrame
    of dummy/indicator 0/1 variables.

    Each variable is converted in as many 0/1 variables as there are different
    values. Columns in the output are each named after a value; if the input is
    a DataFrame, the name of the original variable is prepended to the value.

    The input to this transformer should be an array-like of integers or
    strings, denoting the values taken on by categorical (discrete) features.
    The features are encoded using a one-hot (aka ‘one-of-K’ or ‘dummy’)
    encoding scheme. This creates a binary column for each category and
    returns a sparse matrix or dense array (depending on the `sparse_output`
    parameter).

    By default, the encoder derives the categories based on the unique values
    in each feature that contain multiple string labels separated by `sep`
    into one-hot encoded columns by [`pandas.get_dummies`](https://pandas.pydata.org/docs/dev/reference/api/pandas.get_dummies.html#pandas.get_dummies "(in pandas v3.1.0.dev0+1386.gcb2086a1a4)").
    Alternatively, you can also specify the `categories` manually.

    This encoding is needed for feeding categorical data to many scikit-learn
    estimators, notably linear models and SVMs with the standard kernels.

    Compatible with sklearn pipelines, `set_output` API, and supports both
    dense and sparse output.

    Read more in the [User Guide](https://scikit-learn.org/dev/modules/preprocessing.html#preprocessing-categorical-features "(in scikit-learn v1.10)").
    For a comparison of different encoders, refer to:
    [Comparing Target Encoder with Other Encoders](https://scikit-learn.org/dev/auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py "(in scikit-learn v1.10)").

    > **Caution**
    > ⚠️ These parameters are reserved for future use;
    some have no impact on the current implementation,
    and their behavior or presence may change in future versions
    without notice.

    Parameters:
    :   ****columns****list-like, default=None
        :   Column names in the DataFrame to be encoded.
            If `columns` is None then all the columns with
            `object`, `string`, or `category` dtype will be converted.

        ****sep****callable or str, default=’|’
        :   String regex or literal separator to split on (e.g., “a,b,c”).

            * sep=’,’,
            * sep=r’s\*[,;|]s\*’,
            * sep=lambda s: re.split(r’s\*[,;|]s\*’, s.lower()),

        ****regex****bool, default=True
        :   Use regex to split on (e.g., “a,b|C;”) by `sep` like:

            * `pattern=r'\s*[,;|]\s*'`

        ****prefix****str, list of str, or dict of str, default=None
        :   String to append DataFrame column names.
            Pass a list with length equal to the number of columns
            when calling get\_dummies on a DataFrame. Alternatively, `prefix`
            can be a dictionary mapping column names to prefixes.

        ****prefix\_sep****str, default=’\_’
        :   If appending prefix, separator/delimiter to use. Or pass a
            list or dictionary as with `prefix` (e.g., “tags\_a”).

        ****dummy\_na****bool, default=False
        :   Add a column to indicate NaNs, if False NaNs are ignored.

            > **Caution**
            > If enabled to encode multi-feature supports only one contains `None`.
            Due to total categories need to unique so suggested dummy
            fill instead of keeping one of (e.g., None, np.nan, pd.Na, pd.NAT).

        ****categories****‘auto’ or a list of array-like, default=’auto’
        :   Categories (unique values) per feature:

            * ‘auto’ : Determine categories automatically from the training data.
            * list : `categories[i]` holds the categories expected in the ith
              column. The passed categories should not mix strings and numeric
              values within a single feature, and should be sorted in case of
              numeric values.

            The used categories can be found in the `categories_` attribute.

        ****drop****{‘first’, ‘if\_binary’} or an array-like of shape (n\_features,), default=None
        :   Specifies a methodology to use to drop one of the categories per
            feature. This is useful in situations where perfectly collinear
            features cause problems, such as when feeding the resulting data
            into an unregularized linear regression model.

            However, dropping one category breaks the symmetry of the original
            representation and can therefore induce a bias in downstream models,
            for instance for penalized linear classification or regression models.

            * None : retain all features (the default).
            * ‘first’ : drop the first category in each feature. If only one
              category is present, the feature will be dropped entirely.
            * ‘if\_binary’ : drop the first category in each feature with two
              categories. Features with 1 or more than 2 categories are
              left intact.
            * array : `drop[i]` is the category in feature `X[:, i]` that
              should be dropped.

            When `max_categories` or `min_frequency` is configured to group
            infrequent categories, the dropping behavior is handled after the
            grouping.

        ****sparse\_output****bool, default=True
        :   When `True`, it returns a [`scipy.sparse.csr_matrix`](https://scipy.github.io/devdocs/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix "(in SciPy v2.0.0.dev)"),
            i.e. a sparse matrix in “Compressed Sparse Row” (CSR) format.

        ****dtype****number type, default=np.float64
        :   Desired dtype of output.

        ****handle\_unknown****{‘error’, ‘ignore’, ‘infrequent\_if\_exist’, ‘warn’}, default=’error’
        :   Specifies the way unknown categories are handled during [`transform`](#scikitplot.preprocessing.DummyCodeEncoder.transform "scikitplot.preprocessing.DummyCodeEncoder.transform").

            * ‘error’ : Raise an error if an unknown category is present during transform.
            * ‘ignore’ : When an unknown category is encountered during
              transform, the resulting one-hot encoded columns for this feature
              will be all zeros. In the inverse transform, an unknown category
              will be denoted as None.
            * ‘infrequent\_if\_exist’ : When an unknown category is encountered
              during transform, the resulting one-hot encoded columns for this
              feature will map to the infrequent category if it exists. The
              infrequent category will be mapped to the last position in the
              encoding. During inverse transform, an unknown category will be
              mapped to the category denoted `'infrequent'` if it exists. If the
              `'infrequent'` category does not exist, then [`transform`](#scikitplot.preprocessing.DummyCodeEncoder.transform "scikitplot.preprocessing.DummyCodeEncoder.transform") and
              [`inverse_transform`](#scikitplot.preprocessing.DummyCodeEncoder.inverse_transform "scikitplot.preprocessing.DummyCodeEncoder.inverse_transform") will handle an unknown category as with
              `handle_unknown='ignore'`. Infrequent categories exist based on
              `min_frequency` and `max_categories`. Read more in the
              [User Guide](https://scikit-learn.org/dev/modules/preprocessing.html#encoder-infrequent-categories "(in scikit-learn v1.10)").
            * ‘warn’ : When an unknown category is encountered during transform
              a warning is issued, and the encoding then proceeds as described for
              `handle_unknown="infrequent_if_exist"`.

        ****min\_frequency****int or float, default=None
        :   Specifies the minimum frequency below which a category will be
            considered infrequent.

            * If `int`, categories with a smaller cardinality will be considered
              infrequent.
            * If `float`, categories with a smaller cardinality than
              `min_frequency * n_samples` will be considered infrequent.

            Added in version 1.1: Read more in the [User Guide](https://scikit-learn.org/dev/modules/preprocessing.html#encoder-infrequent-categories "(in scikit-learn v1.10)").

        ****max\_categories****int, default=None
        :   Specifies an upper limit to the number of output features for each input
            feature when considering infrequent categories. If there are infrequent
            categories, `max_categories` includes the category representing the
            infrequent categories along with the frequent categories. If `None`,
            there is no limit to the number of output features.

            Added in version 1.1: Read more in the [User Guide](https://scikit-learn.org/dev/modules/preprocessing.html#encoder-infrequent-categories "(in scikit-learn v1.10)").

        ****feature\_name\_combiner****“concat” or callable, default=”concat”
        :   Callable with signature `def callable(input_feature, category)` that returns a
            string. This is used to create feature names to be returned by
            [`get_feature_names_out`](#scikitplot.preprocessing.DummyCodeEncoder.get_feature_names_out "scikitplot.preprocessing.DummyCodeEncoder.get_feature_names_out").

            `"concat"` concatenates encoded feature name and category with
            `feature + "_" + str(category)`.E.g. feature X with values 1, 6, 7 create
            feature names `X_1, X_6, X_7`.

    Attributes:
    :   ****categories\_****list of arrays
        :   The categories of each feature determined during fitting
            (in order of the features in X and corresponding with the output
            of `transform`). This includes the category specified in `drop`
            (if any).

        ****drop\_idx\_****array of shape (n\_features,)
        :   * `drop_idx_[i]` is the index in `categories_[i]` of the category
              to be dropped for each feature.
            * `drop_idx_[i] = None` if no category is to be dropped from the
              feature with index `i`, e.g. when `drop='if_binary'` and the
              feature isn’t binary.
            * `drop_idx_ = None` if all the transformed features will be
              retained.

            If infrequent categories are enabled by setting `min_frequency` or
            `max_categories` to a non-default value and `drop_idx[i]` corresponds
            to an infrequent category, then the entire infrequent category is
            dropped.

            Changed in version 0.23: Added the possibility to contain `None` values.

        [`infrequent_categories_`](#scikitplot.preprocessing.DummyCodeEncoder.infrequent_categories_ "scikitplot.preprocessing.DummyCodeEncoder.infrequent_categories_")list of ndarray
        :   Infrequent categories for each feature.

        ****n\_features\_in\_****int
        :   Number of features seen during [fit](../../learn/glossary/_glossary_sklearn.html#term-fit).

            Added in version 1.0.

        ****feature\_names\_in\_****ndarray of shape (`n_features_in_`,)
        :   Names of features seen during [fit](../../learn/glossary/_glossary_sklearn.html#term-fit). Defined only when `X`
            has feature names that are all strings.

            Added in version 1.0.

        ****feature\_name\_combiner****callable or None
        :   Callable with signature `def callable(input_feature, category)` that returns a
            string. This is used to create feature names to be returned by
            [`get_feature_names_out`](#scikitplot.preprocessing.DummyCodeEncoder.get_feature_names_out "scikitplot.preprocessing.DummyCodeEncoder.get_feature_names_out").

            Added in version 1.3.

    Parameters:
    :   * ****sep**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****prefix\_sep**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **Iterable****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****dummy\_na**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    > **See also**
    > [`GetDummies`](scikitplot.preprocessing.GetDummies.html#scikitplot.preprocessing.GetDummies "scikitplot.preprocessing.GetDummies")
    :   Same but more limited and pandas based convert to dummy codes.

    [`pandas.Series.str.get_dummies`](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.str.get_dummies.html#pandas.Series.str.get_dummies "(in pandas v3.1.0.dev0+1386.gcb2086a1a4)")
    :   Convert Series of strings to dummy codes.

    [`pandas.from_dummies`](https://pandas.pydata.org/docs/dev/reference/api/pandas.from_dummies.html#pandas.from_dummies "(in pandas v3.1.0.dev0+1386.gcb2086a1a4)")
    :   Convert dummy codes back to categorical DataFrame.

    [`sklearn.preprocessing.OrdinalEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.OrdinalEncoder.html#sklearn.preprocessing.OrdinalEncoder "(in scikit-learn v1.10)")
    :   Performs an ordinal (integer) encoding of the categorical features.

    [`sklearn.preprocessing.TargetEncoder`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.TargetEncoder.html#sklearn.preprocessing.TargetEncoder "(in scikit-learn v1.10)")
    :   Encodes categorical features using the target.

    [`sklearn.feature_extraction.DictVectorizer`](https://scikit-learn.org/dev/modules/generated/sklearn.feature_extraction.DictVectorizer.html#sklearn.feature_extraction.DictVectorizer "(in scikit-learn v1.10)")
    :   Performs a one-hot encoding of dictionary items (also handles string-valued features).

    [`sklearn.feature_extraction.FeatureHasher`](https://scikit-learn.org/dev/modules/generated/sklearn.feature_extraction.FeatureHasher.html#sklearn.feature_extraction.FeatureHasher "(in scikit-learn v1.10)")
    :   Performs an approximate one-hot encoding of dictionary items or strings.

    [`sklearn.preprocessing.LabelBinarizer`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.LabelBinarizer.html#sklearn.preprocessing.LabelBinarizer "(in scikit-learn v1.10)")
    :   Binarizes labels in a one-vs-all fashion.

    [`sklearn.preprocessing.MultiLabelBinarizer`](https://scikit-learn.org/dev/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html#sklearn.preprocessing.MultiLabelBinarizer "(in scikit-learn v1.10)")
    :   Transforms between iterable of iterables and a multilabel format, e.g. a (samples x classes) binary matrix indicating the presence of a class label.

    References

    [1]

    [Çelik, M. (2023, December 9).
    “How to converting pandas column of comma-separated strings into dummy variables?.”
    Medium. https://medium.com/@celik-muhammed/how-to-converting-pandas-column-of-comma-separated-strings-into-dummy-variables-762c02282a6c](https://medium.com/@celik-muhammed/how-to-converting-pandas-column-of-comma-separated-strings-into-dummy-variables-762c02282a6c)

    Examples

    Try it in your browser!

    Given a dataset with three features, we let the encoder find the unique
    values per feature and transform the data to a binary one-hot dummy encoding.

    ```
    >>> import pandas as pd
    >>> df = pd.DataFrame(
    ...     {
    ...         "tags": ["a,b,", " A , b", "a,B,C", None],
    ...         "color": ["red", "blue", "green", "Red"],
    ...         "value": [1, 2, 3, 4],
    ...     }
    ... )

    ```
    ```
    >>> from sklearn.pipeline import Pipeline
    >>> from scikitplot.preprocessing import DummyCodeEncoder
    >>> pipe = Pipeline(
    ...     [
    ...         (
    ...             "encoder",
    ...             DummyCodeEncoder(
    ...                 # sep=',',
    ...                 # sep=r'\s*[,;|]\s*',
    ...                 sep=lambda s: re.split(r'\s*[,;|]\s*', s.lower()),
    ...                 regex=True,
    ...                 sparse_output=True,
    ...             ),
    ...         )
    ...     ]
    ... )
    >>> X_trans = pipe.fit_transform(df)
    >>> print(X_trans)
    <Compressed Sparse Row sparse matrix of dtype 'float64'
        with 15 stored elements and shape (4, 10)>
    >>> type(X_trans)
    scipy.sparse._csr.csr_matrix

    ```
    ```
    >>> from sklearn.pipeline import Pipeline
    >>> from scikitplot.preprocessing import DummyCodeEncoder
    >>> pipe = Pipeline(
    ...     [
    ...         (
    ...             "encoder",
    ...             DummyCodeEncoder(
    ...                 # sep=',',
    ...                 # sep=r'\s*[,;|]\s*',
    ...                 sep=lambda s: re.split(r'\s*[,;|]\s*', s.lower()),
    ...                 regex=True,
    ...                 sparse_output=False,
    ...             ),
    ...         )
    ...     ]
    ... ).set_output(transform='pandas')
    >>> X_trans = pipe.fit_transform(df)
    >>> print(X_trans)
       value  tags_a  tags_b  tags_c  color_blue  color_green  color_red  value_1  value_2  value_3  value_4
    0      1   1.0     1.0     0.0      0.0         0.0          1.0        1.0      0.0          0.0      0.0
    1      2   1.0     1.0     0.0      1.0         0.0          0.0        0.0      1.0          0.0      0.0
    2      3   1.0     1.0     1.0      0.0         1.0          0.0        0.0      0.0          1.0      0.0
    3      4   0.0     0.0     0.0      0.0         0.0          1.0        0.0      0.0          0.0      1.0
    >>> type(X_trans)
    pandas.core.frame.DataFrame

    ```
    Go BackOpen In Tab

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/preprocessing/_encoders.py#L1707)[#](#scikitplot.preprocessing.DummyCodeEncoder.fit "Link to this definition")
    :   Fit OneHotEncoder to X.

        Parameters:
        :   ****X****array-like of shape (n\_samples, n\_features)
            :   The data to determine the categories of each feature.

            ****y****None
            :   Ignored. This parameter exists only for compatibility with
                [`Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.10)").

        Returns:
        :   self
            :   Fitted encoder.

    fit\_transform(**X**, **y=None**, **\*\*fit\_params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/../sklearn/base.py#L913)[#](#scikitplot.preprocessing.DummyCodeEncoder.fit_transform "Link to this definition")
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

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/preprocessing/_encoders.py#L2116)[#](#scikitplot.preprocessing.DummyCodeEncoder.get_feature_names_out "Link to this definition")
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

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/../sklearn/utils/_metadata_requests.py#L1737)[#](#scikitplot.preprocessing.DummyCodeEncoder.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](https://scikit-learn.org/dev/metadata_routing.html#metadata-routing "(in scikit-learn v1.10)") on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.10)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/../sklearn/base.py#L248)[#](#scikitplot.preprocessing.DummyCodeEncoder.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    property infrequent\_categories\_[#](#scikitplot.preprocessing.DummyCodeEncoder.infrequent_categories_ "Link to this definition")
    :   Infrequent categories for each feature.

    inverse\_transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/preprocessing/_encoders.py#L2058)[#](#scikitplot.preprocessing.DummyCodeEncoder.inverse_transform "Link to this definition")
    :   Convert the data back to the original representation.

        When unknown categories are encountered (all zeros in the
        one-hot encoding), `None` is used to represent this category. If the
        feature with the unknown category has a dropped category, the dropped
        category will be its inverse.

        For a given input feature, if there is an infrequent category,
        ‘infrequent\_sklearn’ will be used to represent the infrequent category.

        Parameters:
        :   ****X****{array-like, sparse matrix} of shape (n\_samples, n\_encoded\_features)
            :   The transformed data.

        Returns:
        :   ****X\_original****ndarray of shape (n\_samples, n\_features)
            :   Inverse transformed array.

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/../sklearn/utils/_set_output.py#L392)[#](#scikitplot.preprocessing.DummyCodeEncoder.set_output "Link to this definition")
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

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/../sklearn/base.py#L400)[#](#scikitplot.preprocessing.DummyCodeEncoder.set_params "Link to this definition")
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

    transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/preprocessing/_encoders.py#L1858)[#](#scikitplot.preprocessing.DummyCodeEncoder.transform "Link to this definition")
    :   Transform X using one-hot encoding.

        If `sparse_output=True` (default), it returns an instance of
        [`scipy.sparse._csr.csr_matrix`](https://scipy.github.io/devdocs/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix "(in SciPy v2.0.0.dev)") (CSR format).

        If there are infrequent categories for a feature, set by specifying
        `max_categories` or `min_frequency`, the infrequent categories are
        grouped into a single category.

        Parameters:
        :   ****X****array-like of shape (n\_samples, n\_features)
            :   The data to encode.

        Returns:
        :   ****X\_out****{ndarray, sparse matrix} of shape (n\_samples, n\_encoded\_features)
            :   Transformed input. If `sparse_output=True`, a sparse matrix will be
                returned.