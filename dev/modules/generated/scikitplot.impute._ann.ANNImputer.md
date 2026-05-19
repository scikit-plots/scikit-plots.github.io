# ANNImputer[#](#annimputer "Link to this heading")

class scikitplot.impute.\_ann.ANNImputer(**\***, **missing\_values=nan**, **backend='annoy'**, **index\_access='external'**, **index\_store\_path=None**, **on\_disk\_build=False**, **n\_trees=-1**, **search\_k=-1**, **n\_neighbors=5**, **weights='uniform'**, **metric='angular'**, **initial\_strategy='mean'**, **fill\_value=None**, **copy=True**, **add\_indicator=False**, **keep\_empty\_features=False**, **n\_jobs=None**, **random\_state=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/impute/_ann.py#L109)[#](#scikitplot.impute._ann.ANNImputer "Link to this definition")
:   Approximate K-nearest-neighbours (KNN) imputer with pluggable ANN backends.

    [`ANNImputer`](#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer") performs vector-based imputation by querying an
    approximate nearest-neighbours (ANN) index instead of using exact
    brute-force distances as in [`KNNImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.KNNImputer.html#sklearn.impute.KNNImputer "(in scikit-learn v1.9)").

    Two backends are currently supported:

    * `backend='annoy'` (default):
      uses the Spotify Annoy library and the in-tree
      [`Index`](scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") wrapper.
    * `backend='voyager'`:
      uses the optional `voyager` package (HNSW-based index).

    All high-level imputation parameters (`n_neighbors`,
    `weights`, `metric`, `index_access`,
    `index_store_path`. Backend-specific details
    (such as the Annoy forest size) are handled internally.

    This imputer identifies approximate nearest neighbors for samples
    containing missing values and imputes those values using statistics computed
    from the retrieved neighbor vectors.

    Parameters:
    :   ****missing\_values****int, float, str, np.nan or None, default=np.nan
        :   The placeholder for the missing values. All occurrences of
            `missing_values` will be imputed. For pandas’ dataframes with
            nullable integer dtypes with missing values, `missing_values`
            should be set to np.nan, since `pd.NA` will be converted to np.nan.

        ****backend****{‘annoy’, ‘voyager’}, default=’annoy’
        :   Name of the approximate nearest-neighbour backend to use.

            * `'annoy'`: use the modified Spotify Annoy library (in-tree wrapper).
            * `'voyager'`: use the optional `voyager` package.

            When `backend='voyager'` the `voyager` package must be
            installed. An [`ImportError`](https://docs.python.org/3/library/exceptions.html#ImportError "(in Python v3.14)") is raised otherwise.

            Parameters `index_access`, `index_store_path` and
            behave identically for both backends.

        ****index\_access****{‘public’, ‘private’, ‘external’}, default=’external’
        :   Controls whether and how the fitted ANN index is exposed or stored.

            * `'public'`: [`train_index_`](#scikitplot.impute._ann.ANNImputer.train_index_ "scikitplot.impute._ann.ANNImputer.train_index_") returns the underlying
              ANN index instance (backwards compatible behaviour).
            * `'private'`: Any attempt to access [`train_index_`](#scikitplot.impute._ann.ANNImputer.train_index_ "scikitplot.impute._ann.ANNImputer.train_index_")
              raises [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.14)"). The index is still used
              internally during [`transform`](#scikitplot.impute._ann.ANNImputer.transform "scikitplot.impute._ann.ANNImputer.transform"), but is not directly
              exposed to user code.
            * `'external'`: The fitted ANN index is persisted to disk using
              the backend index’s `save` method
              (e.g. `AnnoyIndex.save` or `voyager.Index.save`) and
              only the file name (`index_path_`) and metadata
              (`index_created_at_`) are stored on the estimator.
              At runtime the index is reloaded from that file as needed.
              In this mode [`train_index_`](#scikitplot.impute._ann.ANNImputer.train_index_ "scikitplot.impute._ann.ANNImputer.train_index_") is not available.

            For production and privacy-sensitive workloads, it is strongly
            recommended to keep the default `'external'` mode so that the
            underlying ANN index is not part of the public API by default.

        ****index\_store\_path****str or path-like, PathNamer, default=None
        :   Target file path used when `index_access='external'`. The
            fitted ANN index is saved to this location via the backend index
            `save` method, and only the file name and metadata
            are stored in the estimator.

            If `index_access='external'` and this is `None`,
            [`fit`](#scikitplot.impute._ann.ANNImputer.fit "scikitplot.impute._ann.ANNImputer.fit") will automatically generate an OS-friendly unique
            file name by [`PathNamer`](scikitplot.utils._path.PathNamer.html#scikitplot.utils._path.PathNamer "scikitplot.utils._path.PathNamer") (or the current working directory) and
            save the ANN index there.

        ****on\_disk\_build****bool, default=False
        :   Only used when `backend='annoy'`. Ignored for other backends.

            If `True`, the underlying Annoy index is built using
            `AnnoyIndex.on_disk_build`, which streams the index to a backing
            file during construction. This can significantly reduce peak RAM
            usage for very large datasets.

            This only affects how the index is ****built****. How the index is
            stored and accessed at runtime is still controlled by
            `index_access` (`'public'`, `'private'`, `'external'`) and
            `index_store_path`.

        ****n\_trees****int, default=-1
        :   Number of trees in the Annoy forest. Increasing the number of trees
            generally improves nearest-neighbor accuracy but increases build time
            and memory usage.

            If set to `-1`, the value is passed as-is to the backend index
            implementation, which may interpret it built dynamically
            until the index reaches approximately twice the number of items
            If -1, defaults to `_n_nodes >= 2 * n_items`.
            This situation can lead to a stochastic result.

            Guidelines:

            * Small datasets (<10k samples): 10-20 trees.
            * Medium datasets (10k-1M samples): 20-50 trees.
            * Large datasets (>1M samples): 50-100+ trees.

        ****search\_k****int, default=-1
        :   Backend-specific search-depth parameter.

            For Annoy, this is passed as `search_k` to
            `AnnoyIndex.get_nns_by_vector`. Larger values inspect more
            nodes during search and are therefore slower but more accurate.
            If -1, defaults to `n_trees * n_neighbors`.

            In Voyager Index.query() passed to as query\_ef - The depth of search
            to perform for this query. Up to query\_ef candidates will be searched
            through to try to find up the k nearest neighbors per query vector.

        ****n\_neighbors****int, default=5
        :   Number of neighboring samples used for imputation.
            Higher values produce smoother imputations but may reduce locality.

        ****weights****{‘uniform’, ‘distance’} or callable, default=’uniform’
        :   Weighting strategy for neighbor contributions:

            * `'uniform'` : all neighbors have equal weight.
            * `'distance'` : inverse-distance weighting,
              where closer neighbors contribute more
              (`w_ik = 1 / (1 + d(x_i, x_k))`).
            * callable : custom function taking an array of distances
              and returning an array of weights.

        ****metric****{“angular”, “cosine”, “euclidean”, “l2”, “lstsq”, “manhattan”, “l1”, “cityblock”, “taxicab”, “dot”, “@”, “.”, “dotproduct”, “inner”, “innerproduct”, “hamming”}, optional, default=’angular’
        :   Distance metric used for nearest-neighbor search:

            * `'angular'` : Cosine similarity (angle only, ignores magnitude).
              Best for normalized embeddings (e.g., text embeddings, image features).
            * `'euclidean'` : L2 distance, defined as √Σ(xᵢ - yᵢ)².
              Standard geometric distance, sensitive to scale.
            * `'manhattan'` : L1 (City-block) distance, defined as Σ|xᵢ - yᵢ|.
              More robust to outliers than L2, still scale-sensitive.
            * `'hamming'` : Fraction or count of of differing elements.
              Suitable for binary or categorical features (e.g., 0/1).
            * `'dot'` : Negative inner product (-x·y).
              Sensitive to both direction and magnitude of vectors.

            Aliases:

            * cosine <-> angular
            * euclidean <- l2, lstsq
            * manhattan <- l1, cityblock, taxicab
            * dot <-> innerproduct <- @, ., dotproduct, inner

            Note that when `backend='voyager'` not support all metrics
            (such as `"manhattan"` or `"hamming"`)
            with the voyager backend will raise [`ValueError`](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.14)").

            > **See also**
            > * [`cosine`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.cosine.html#scipy.spatial.distance.cosine "(in SciPy v1.18.0.dev)")
            * [`euclidean`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.euclidean.html#scipy.spatial.distance.euclidean "(in SciPy v1.18.0.dev)")
            * [`cityblock`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.cityblock.html#scipy.spatial.distance.cityblock "(in SciPy v1.18.0.dev)")
            * [`dot`](https://scipy.github.io/devdocs/reference/generated/scipy.sparse.coo_array.dot.html#scipy.sparse.coo_array.dot "(in SciPy v1.18.0.dev)")
            * [`hamming`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.hamming.html#scipy.spatial.distance.hamming "(in SciPy v1.18.0.dev)")

        ****initial\_strategy****{‘mean’, ‘median’, ‘most\_frequent’, ‘constant’}, default=’mean’
        :   Which strategy to use to initialize the missing values when building
            the ANN index. This is analogous to the `strategy` parameter in
            [`SimpleImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.SimpleImputer.html#sklearn.impute.SimpleImputer "(in scikit-learn v1.9)"):

            * `'mean'`: use the column-wise mean (ignoring NaNs).
            * `'median'`: use the column-wise median (ignoring NaNs).
            * `'most_frequent'`: use the column-wise mode (most frequent value,
              ignoring NaNs; if a column has no observed values, it falls back
              to 0.0).
            * `'constant'`: use `fill_value` for all features. If
              `fill_value` is `None`, a default of `0.0` is used for
              numeric data.

            This strategy affects only the temporary fill vector used to build the
            ANN index and the global fallback used when no valid neighbor values
            are available. The main imputation logic is still k-nearest-neighbours
            based on the ANN index.

        ****fill\_value****str or numerical value, default=None
        :   When `strategy="constant"`, `fill_value` is used to replace all
            occurrences of missing\_values. For string or object data types,
            `fill_value` must be a string.
            If `None`, `fill_value` will be 0 when imputing numerical
            data and “missing\_value” for strings or object data types.

        ****copy****bool, default=True
        :   If True, a copy of X will be created. If False, imputation will
            be done in-place whenever possible.

        ****add\_indicator****bool, default=False
        :   If True, a `MissingIndicator` transform will stack onto the
            output of the imputer’s transform. This allows a predictive estimator
            to account for missingness despite imputation. If a feature has no
            missing values at fit/train time, the feature won’t appear on the
            missing indicator even if there are missing values at transform/test
            time.

        ****keep\_empty\_features****bool, default=False
        :   If True, features that consist exclusively of missing values when
            `fit` is called are returned in results when `transform` is called.
            The imputed value is always `0`.

        ****n\_jobs****int or None, default=None
        :   Parallelism level used in two places:

            * during Annoy index construction, passed to
              `AnnoyIndex.build`,
            * during Voyager query construction, passed to
              `Voyager.query`,
            * during imputation, used as the number of worker threads in a
              [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.6.dev0)") loop.

            If None usually = 1 worker (sequential).

            A value of `-1` uses all available CPU cores. Using threads
            for the imputation step avoids spawning new Python processes and
            keeps this estimator compatible with editable installs and other
            environments where the package cannot be safely re-imported in
            child processes. So like uses `import joblib; joblib.cpu_count()`

        ****random\_state****int or None, default=None
        :   Seed for the backend index construction (e.g. Annoy hyperplanes,
            Voyager graph initialization).

            > **Caution**
            > ⚠️ Reproducibility for Annoy required both `random_state`
            with `n_trees`.

    Attributes:
    :   ****indicator\_****[`MissingIndicator`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "(in scikit-learn v1.9)")
        :   Indicator used to add binary indicators for missing values.
            `None` if add\_indicator is False.

        ****n\_features\_in\_****int
        :   Number of features seen during [fit](../../project/glossary/_glossary_sklearn.html#term-fit).

        ****feature\_names\_in\_****ndarray of shape (`n_features_in_`,)
        :   Names of features seen during [fit](../../project/glossary/_glossary_sklearn.html#term-fit). Defined only when `X`
            has feature names that are all strings.

        ****temp\_fill\_vector\_****ndarray of shape (`n_features_in_`,)
        :   Per-feature statistics (e.g. mean or median) used to temporarily
            fill missing values when building the ANN index and as a
            fallback when neighbor information is not available.

        ****index\_path\_****str
        :   File path of the persisted ANN index when
            `index_access='external'`. Only set after [`fit`](#scikitplot.impute._ann.ANNImputer.fit "scikitplot.impute._ann.ANNImputer.fit").

        ****index\_created\_at\_****str
        :   UTC ISO 8601 timestamp recording when the ANN index was
            persisted to `index_path_` in `index_access='external'`
            mode.

        [`train_index_`](#scikitplot.impute._ann.ANNImputer.train_index_ "scikitplot.impute._ann.ANNImputer.train_index_")object or property
        :   Optionally expose the fitted ANN index (Annoy or Voyager).

        ****.. warning::****
        :   `index_access='private'` or `index_access='external'`
            prevents access to the underlying ANN index
            through the public API (for example [`train_index_`](#scikitplot.impute._ann.ANNImputer.train_index_ "scikitplot.impute._ann.ANNImputer.train_index_")). This protects
            against accidental leaks and misuse, but it is ****not**** a hard security
            boundary: any Python code running in the same process can still inspect
            the estimator using introspection facilities.

            If you need strong confidentiality for the training data or the ANN index,
            do ****not**** share the [`ANNImputer`](#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer") instance with untrusted code.
            Instead, run it inside a separate process or service and expose only a
            high-level API (e.g. an `/impute` endpoint) rather than the Python
            object itself (model-as-a-service pattern).

    > **See also**
    > [`sklearn.neighbors`](https://scikit-learn.org/dev/api/sklearn.neighbors.html#module-sklearn.neighbors "(in scikit-learn v1.9)")
    :   The k-nearest neighbors algorithms.

    [`sklearn.neighbors.NearestNeighbors`](https://scikit-learn.org/dev/modules/generated/sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "(in scikit-learn v1.9)")
    :   Unsupervised learner for implementing neighbor searches.

    [`sklearn.neighbors.KNeighborsTransformer`](https://scikit-learn.org/dev/modules/generated/sklearn.neighbors.KNeighborsTransformer.html#sklearn.neighbors.KNeighborsTransformer "(in scikit-learn v1.9)")
    :   Transform X into a (weighted) graph of k nearest neighbors.

    [`sklearn.impute.KNNImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.KNNImputer.html#sklearn.impute.KNNImputer "(in scikit-learn v1.9)")
    :   Multivariate imputer that estimates missing features using nearest samples. Exact KNN-based imputer using brute-force search.

    `sklearn_ann.kneighbors.annoy.AnnoyTransformer`
    :   Wrapper for using annoy.AnnoyIndex as sklearn’s KNeighborsTransformer [AnnoyTransformer](https://sklearn-ann.readthedocs.io/en/latest/kneighbors.html#annoy)

    [`scikitplot.utils._path.PathNamer`](scikitplot.utils._path.PathNamer.html#scikitplot.utils._path.PathNamer "scikitplot.utils._path.PathNamer")
    :   Naming helper for external index file.

    Notes

    For each sample \(x\_i\) and feature \(j\), the imputed value is:

    \[\hat{x}\_{ij} = \frac{\sum\_{k \in N\_i} w\_{ik} x\_{kj}}{\sum\_{k \in N\_i} w\_{ik}}\]

    where \(N\_i\) is the set of K nearest neighbors of \(x\_i\),
    and \(w\_{ik}\) is the neighbor weight:

    \(w\_{ik} = \frac{1}{1 + d(x\_i, x\_k)}\)

    * ANN provides approximate neighbor search, so imputations are not exact.
    * Annoy uses random projections to split the vector space at each node in
      the tree, selecting a random hyperplane defined by two sampled points.
    * In `index_access='public'` or `'private'` mode the Annoy index
      is kept in memory after [`fit`](#scikitplot.impute._ann.ANNImputer.fit "scikitplot.impute._ann.ANNImputer.fit") for efficient queries.
      In `index_access='external'` mode the index is stored on disk
      and loaded on demand at transform-time.
    * Index creation is separate from lookup. After calling `build()`,
      no additional vectors may be added.
    * Index files created by Annoy are memory-mapped, allowing multiple processes
      to share the same data without additional memory overhead.
    * Annoy is optimized for scenarios with many items in moderate to high
      dimensional spaces where fast approximate neighbor retrieval is more
      important than exact results.
    * Annoy supports specific metrics; `'euclidean'` (p=2) and `'manhattan'` (p=1)
      are special cases of the Minkowski distance.

    References

    [1]

    [Bernhardsson, E. (2013). “ANNoy (Approximate Nearest Neighbors Oh Yeah).”
    Spotify AB. https://github.com/spotify/annoy](https://github.com/spotify/annoy)

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> from scikitplot.experimental import enable_aknn_imputer
    >>> from scikitplot.impute import ANNImputer
    >>> X = np.array([[1, 2, np.nan], [3, 4, 3], [np.nan, 6, 5], [8, 8, 7]])
    >>> # imputer = ANNImputer(backend="voyager", n_neighbors=5, metric="euclidean")
    >>> imputer = ANNImputer(n_trees=5, n_neighbors=5)
    >>> imputer.fit_transform(X)
    array([[1. , 2. , 5. ],
           [3. , 4. , 3. ],
           [4. , 6. , 5. ],
           [8. , 8. , 7. ]])

    ```
    Go BackOpen In Tab

    delete\_external\_index()[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/impute/_privacy.py#L318)[#](#scikitplot.impute._ann.ANNImputer.delete_external_index "Link to this definition")
    :   Delete the external index file referenced by `index_path_`.

        This helper removes the file on disk if `index_path_` is
        set. It does ****not**** modify `index_path_` itself, so
        subsequent calls that rely on the file (for example
        `_get_index_for_runtime` in `index_access='external'`
        mode) will fail until the estimator is re-fitted.

        Any [`OSError`](https://docs.python.org/3/library/exceptions.html#OSError "(in Python v3.14)") raised by [`os.remove`](https://docs.python.org/3/library/os.html#os.remove "(in Python v3.14)") will propagate
        to the caller.

    fit(**X**, **y=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/impute/_ann.py#L1047)[#](#scikitplot.impute._ann.ANNImputer.fit "Link to this definition")
    :   Fit the imputer on X and build the underlying ANN index.

        This step:

        * validates the input data,
        * records which features are completely empty,
        * builds the backend-specific ANN index, and
        * fits the missing-value indicator (if enabled).

    fit\_transform(**X**, **y=None**, **\*\*fit\_params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/../sklearn/base.py#L851)[#](#scikitplot.impute._ann.ANNImputer.fit_transform "Link to this definition")
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

    get\_feature\_names\_out(**input\_features=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/impute/_ann.py#L1693)[#](#scikitplot.impute._ann.ANNImputer.get_feature_names_out "Link to this definition")
    :   Return output feature names, including indicator features if used.

    get\_metadata\_routing()[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/../sklearn/utils/_metadata_requests.py#L1550)[#](#scikitplot.impute._ann.ANNImputer.get_metadata_routing "Link to this definition")
    :   Get metadata routing of this object.

        Please check [User Guide](https://scikit-learn.org/dev/metadata_routing.html#metadata-routing "(in scikit-learn v1.9)") on how the routing
        mechanism works.

        Returns:
        :   ****routing****MetadataRequest
            :   A [`MetadataRequest`](https://scikit-learn.org/dev/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "(in scikit-learn v1.9)") encapsulating
                routing information.

    get\_params(**deep=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/../sklearn/base.py#L240)[#](#scikitplot.impute._ann.ANNImputer.get_params "Link to this definition")
    :   Get parameters for this estimator.

        Parameters:
        :   ****deep****bool, default=True
            :   If True, will return the parameters for this estimator and
                contained subobjects that are estimators.

        Returns:
        :   ****params****dict
            :   Parameter names mapped to their values.

    set\_output(**\***, **transform=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/../sklearn/utils/_set_output.py#L389)[#](#scikitplot.impute._ann.ANNImputer.set_output "Link to this definition")
    :   Set output container.

        See [Introducing the set\_output API](https://scikit-learn.org/dev/auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py "(in scikit-learn v1.9)")
        for an example on how to use the API.

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

    set\_params(**\*\*params**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/../sklearn/base.py#L338)[#](#scikitplot.impute._ann.ANNImputer.set_params "Link to this definition")
    :   Set the parameters of this estimator.

        The method works on simple estimators as well as on nested objects
        (such as [`Pipeline`](https://scikit-learn.org/dev/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "(in scikit-learn v1.9)")). The latter have
        parameters of the form `<component>__<parameter>` so that it’s
        possible to update each component of a nested object.

        Parameters:
        :   ****\*\*params****dict
            :   Estimator parameters.

        Returns:
        :   ****self****estimator instance
            :   Estimator instance.

    property train\_index\_[#](#scikitplot.impute._ann.ANNImputer.train_index_ "Link to this definition")
    :   Optionally expose the fitted ANN index (Annoy or Voyager).

        This attribute is only available when `index_access='public'`.
        For other values, [`AttributeError`](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.14)") is raised by
        `OutsourcedIndexMixin._get_index`.

    transform(**X**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/impute/_ann.py#L1622)[#](#scikitplot.impute._ann.ANNImputer.transform "Link to this definition")
    :   Impute missing values in X using approximate nearest neighbors.