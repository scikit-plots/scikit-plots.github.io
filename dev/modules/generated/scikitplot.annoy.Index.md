# Index[#](#index "Link to this heading")

class scikitplot.annoy.Index[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_base.py#L77)[#](#scikitplot.annoy.Index "Link to this definition")
:   High-level ANNoy index composed from mixins.

    Parameters:
    :   ****f****int or None, optional, default=None
        :   Vector dimension. If `0` or `None`, dimension may be inferred from the
            first vector passed to `add_item` (lazy mode).
            If None, treated as `0` (reset to default).

        ****metric****{“angular”, “cosine”, “euclidean”, “l2”, “lstsq”, “manhattan”, “l1”, “cityblock”, “taxicab”, “dot”, “@”, “.”, “dotproduct”, “inner”, “innerproduct”, “hamming”} or None, optional, default=None
        :   Distance metric (one of ‘angular’, ‘euclidean’, ‘manhattan’, ‘dot’, ‘hamming’).
            If omitted and `f > 0`, defaults to `'angular'` (cosine-like).
            If omitted and `f == 0`, metric may be set later before construction.
            If None, behavior depends on `f`:

            * If `f > 0`: defaults to `'angular'` (legacy behavior; may emit a
              [`FutureWarning`](https://docs.python.org/3/library/exceptions.html#FutureWarning "(in Python v3.14)")).
            * If `f == 0`: leaves the metric unset (lazy). You may set
              [`metric`](#scikitplot.annoy.Index.metric "scikitplot.annoy.Index.metric") later before construction, or it will default to
              `'angular'` on first [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item").

        ****n\_neighbors****int, default=5
        :   Non-negative integer Number of neighbors to retrieve for each query.

        ****on\_disk\_path****str or None, optional, default=None
        :   If provided, configures the path for on-disk building. When the underlying
            index exists, this enables on-disk build mode (equivalent to calling
            [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build") with the same filename).

            Note: Annoy core truncates the target file when enabling on-disk build.
            This wrapper treats `on_disk_path` as strictly equivalent to calling
            [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build") with the same filename (truncate allowed).

            In lazy mode (`f==0` and/or `metric is None`), activation occurs once
            the underlying C++ index is created.

        ****prefault****bool or None, optional, default=None
        :   If True, request page-faulting index pages into memory when loading
            (when supported by the underlying platform/backing).
            If None, treated as `False` (reset to default).

        ****seed****int or None, optional, default=None
        :   Non-negative integer seed. If set before the index is constructed,
            the seed is stored and applied when the C++ index is created.
            Seed value `0` is treated as “use Annoy’s deterministic default seed”
            (a [`UserWarning`](https://docs.python.org/3/library/exceptions.html#UserWarning "(in Python v3.14)") is emitted when `0` is explicitly provided).

        ****verbose****int or None, optional, default=None
        :   Verbosity level. Values are clamped to the range `[-2, 2]`.
            `level >= 1` enables Annoy’s verbose logging; `level <= 0` disables it.
            Logging level inspired by gradient-boosting libraries:

            * `<= 0` : quiet (warnings only)
            * `1` : info (Annoy’s `verbose=True`)
            * `>= 2` : debug (currently same as info, reserved for future use)

        ****schema\_version****int, optional, default=None
        :   Serialization/compatibility strategy marker.

            This does not change the Annoy on-disk format, but it **does** control
            how the index is snapshotted in pickles.

            * `0` or `1`: pickle stores a `portable-v1` snapshot (fast restore,
              ABI-checked).
            * `2`: pickle stores `canonical-v1` (portable across ABIs; restores by
              rebuilding deterministically).
            * `>=3`: pickle stores both portable and canonical (canonical is used as
              a fallback if the ABI check fails).

            If None, treated as `0` (reset to default).

    Attributes:
    :   [`f`](#scikitplot.annoy.Index.f "scikitplot.annoy.Index.f")int, default=0
        :   Vector dimension.

        [`metric`](#scikitplot.annoy.Index.metric "scikitplot.annoy.Index.metric"){‘angular’, ‘euclidean’, ‘manhattan’, ‘dot’, ‘hamming’}, default=”angular”
        :   Distance metric for the index.

        [`n_neighbors`](#scikitplot.annoy.Index.n_neighbors "scikitplot.annoy.Index.n_neighbors")int, default=5
        :   Number of neighbors returned by transform/fit\_transform (SLEP013; strict schema).

        [`on_disk_path`](#scikitplot.annoy.Index.on_disk_path "scikitplot.annoy.Index.on_disk_path")str or None, optional, default=None
        :   Path used for on-disk build/load/save operations.

        ****seed, random\_state****int or None, optional, default=None
        :   Non-negative integer seed.

        [`verbose`](#scikitplot.annoy.Index.verbose "scikitplot.annoy.Index.verbose")int or None, optional, default=None
        :   Verbosity level in [-2, 2] or None (unset).

        [`prefault`](#scikitplot.annoy.Index.prefault "scikitplot.annoy.Index.prefault")bool, default=False
        :   Default prefault flag stored on the object.

        [`schema_version`](#scikitplot.annoy.Index.schema_version "scikitplot.annoy.Index.schema_version")int, default=0
        :   Serialization/compatibility strategy marker sentinel value.

        ****n\_features, n\_features\_, n\_features\_in\_****int
        :   Alias of `f` (dimension), provided for scikit-learn naming parity.

        [`n_features_out_`](#scikitplot.annoy.Index.n_features_out_ "scikitplot.annoy.Index.n_features_out_")int
        :   Number of output features produced by transform (SLEP013).

        [`feature_names_in_`](#scikitplot.annoy.Index.feature_names_in_ "scikitplot.annoy.Index.feature_names_in_")list-like
        :   Input feature names seen during fit (SLEP007).

        [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y")dict | None, optional, default=None
        :   y : list[object] | None

        [`pickle_mode`](#scikitplot.annoy.Index.pickle_mode "scikitplot.annoy.Index.pickle_mode")PickleMode
        :   Persist strategy used by [`PickleMixin`](scikitplot.annoy.PickleMixin.html#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin").

        [`compress_mode`](#scikitplot.annoy.Index.compress_mode "scikitplot.annoy.Index.compress_mode")CompressMode or None
        :   Compression used for `"byte"` pickling by [`PickleMixin`](scikitplot.annoy.PickleMixin.html#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin").

    > **See also**
    > [`scikitplot.cexternals._annoy.Annoy`](scikitplot.cexternals._annoy.Annoy.html#scikitplot.cexternals._annoy.Annoy "scikitplot.cexternals._annoy.Annoy")


    [`Index.from_low_level`](#scikitplot.annoy.Index.from_low_level "scikitplot.annoy.Index.from_low_level")

    Notes

    This class is a direct subclass of the C-extension backend. It does not
    override `__new__` and does not rely on cooperative initialization across
    mixins. Mixins must be written so that their methods work even if they
    define no `__init__` at all.

    add\_item(**i**, **vector**)[#](#scikitplot.annoy.Index.add_item "Link to this definition")
    :   Add a single embedding vector to the index.

        Parameters:
        :   ****i****int
            :   Item id (index) must be non-negative.
                Ids may be non-contiguous; the index allocates up to `max(i) + 1`.

            ****vector****sequence of float
            :   1D embedding of length `f`. Values are converted to `float`.
                If `f == 0` and this is the first item, `f` is inferred from
                `vector` and then fixed for the lifetime of this index.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")
        :   Build the forest after adding items.

        [`unbuild`](#scikitplot.annoy.Index.unbuild "scikitplot.annoy.Index.unbuild")
        :   Remove trees to allow adding more items.

        [`get_nns_by_item`](#scikitplot.annoy.Index.get_nns_by_item "scikitplot.annoy.Index.get_nns_by_item"), [`get_nns_by_vector`](#scikitplot.annoy.Index.get_nns_by_vector "scikitplot.annoy.Index.get_nns_by_vector")
        :   Query nearest neighbours.

        Notes

        Items must be added **before** calling [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build"). After building
        the forest, further calls to [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item") are not supported.

        Examples

        Try it in your browser!
        ```
        >>> import random
        >>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
        ...
        >>> f=100
        >>> n=1000
        >>> idx = AnnoyIndex(f, metric='l2')
        ...
        >>> for i in range(n):
        ...    v = [random.gauss(0, 1) for _ in range(f)]
        ...    idx.add_item(i, v)

        ```
        Go BackOpen In Tab

    add\_items(**X**, **ids=None**, **\***, **start\_id=None**, **accept\_sparse='error'**, **ensure\_all\_finite=True**, **copy=False**, **dtype=<class 'numpy.float32'>**, **order='C'**, **check\_unique\_ids=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_ndarray.py#L376)[#](#scikitplot.annoy.Index.add_items "Link to this definition")
    :   Add many vectors to the index.

        Parameters:
        :   ****X****array-like of shape (n\_samples, n\_features)
            :   Vectors to add.

            ****ids****array-like of shape (n\_samples,), optional
            :   Explicit integer ids. If omitted, ids are allocated as a contiguous
                range starting at `start_id` (or `get_n_items()` at call time).

            ****start\_id****int, optional
            :   Starting id used when `ids` is None. If None, defaults to
                `backend.get_n_items()` at call time.

            ****accept\_sparse****{‘error’, ‘toarray’}, default=’error’
            :   Sparse input handling. `'toarray'` densifies SciPy sparse inputs
                explicitly. Any other sparse behavior raises.

            ****ensure\_all\_finite****bool or ‘allow-nan’, default=True
            :   Finiteness validation policy.

            ****copy****bool, default=False
            :   If True, copy the validated dense array before adding.

            ****dtype****numpy dtype, default=numpy.float32
            :   Dtype passed to the backend.

            ****order****{‘C’, ‘F’, ‘A’, ‘K’}, default=’C’
            :   Memory order used when coercing `X`.

            ****check\_unique\_ids****bool, default=True
            :   If True, require ids to be unique.

        Returns:
        :   ****ids\_out****numpy.ndarray of shape (n\_samples,)
            :   The ids that were added, as `int64`.

        Raises:
        :   RuntimeError
            :   If the backend indicates the index is built.

            TypeError
            :   If sparse input is given while `accept_sparse='error'`.

            ValueError
            :   If `X` is not 2D, feature dimensions mismatch `f`, ids are
                invalid, or finiteness policy is violated.

        Parameters:
        :   * ****X**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****ids**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****start\_id**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****accept\_sparse**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'error'****,** **'toarray'****]**)
            * ****ensure\_all\_finite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'allow-nan'****]**)
            * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****order**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'C'****,** **'F'****,** **'A'****,** **'K'****]**)
            * ****check\_unique\_ids**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

        > **See also**
        > [`get_item_vectors`](#scikitplot.annoy.Index.get_item_vectors "scikitplot.annoy.Index.get_item_vectors")
        :   Fetch vectors by id selection.

        [`to_numpy`](#scikitplot.annoy.Index.to_numpy "scikitplot.annoy.Index.to_numpy")
        :   Export vectors as a dense NumPy array.

        Notes

        This method is deterministic: ids are generated predictably and vectors
        are added in row order.

    property backend: [Annoy](scikitplot.cexternals._annoy.Annoy.html#scikitplot.cexternals._annoy.Annoy "scikitplot.cexternals._annoy.Annoy")[#](#scikitplot.annoy.Index.backend "Link to this definition")
    :   Public alias for `_backend`.

        Returns:
        :   ****backend****scikitplot.cexternals.\_annoy.Annoy
            :   Low-level Annoy backend instance.

    build(**n\_trees=-1**, **n\_jobs=-1**)[#](#scikitplot.annoy.Index.build "Link to this definition")
    :   Build a forest of random projection trees.

        Parameters:
        :   ****n\_trees****int or None, optional, default=None
            :   Number of trees in the forest. Larger values typically improve recall
                at the cost of slower build time and higher memory usage.

                If set to `n_trees=-1`, trees are built dynamically until
                the index reaches approximately twice the number of items
                `_n_nodes >= 2 * n_items`.

                Guidelines:

                * Small datasets (<10k samples): 10-20 trees.
                * Medium datasets (10k-1M samples): 20-50 trees.
                * Large datasets (>1M samples): 50-100+ trees.

            ****n\_jobs****int or None, optional, default=None
            :   Number of threads to use while building. `-1` means “auto” (use
                the implementation’s default, typically all available CPU cores).

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item")
        :   Add vectors before building.

        [`unbuild`](#scikitplot.annoy.Index.unbuild "scikitplot.annoy.Index.unbuild")
        :   Drop trees to add more items.

        [`rebuild`](#scikitplot.annoy.Index.rebuild "scikitplot.annoy.Index.rebuild")
        :   Return a new Annoy index rebuilt from the current index contents.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        [`get_nns_by_item`](#scikitplot.annoy.Index.get_nns_by_item "scikitplot.annoy.Index.get_nns_by_item"), [`get_nns_by_vector`](#scikitplot.annoy.Index.get_nns_by_vector "scikitplot.annoy.Index.get_nns_by_vector")
        :   Query nearest neighbours.

        [`save`](#scikitplot.annoy.Index.save "scikitplot.annoy.Index.save"), [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load")
        :   Persist the index to/from disk.

        Notes

        After [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build") completes, the index becomes read-only for queries.
        To add more items, call [`unbuild`](#scikitplot.annoy.Index.unbuild "scikitplot.annoy.Index.unbuild"), add items, and then rebuild.

        References

        [1]

        Erik Bernhardsson, “Annoy: Approximate Nearest Neighbours in C++/Python”.

        Examples

        Try it in your browser!
        ```
        >>> import random
        >>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
        ...
        >>> f=100
        >>> n=1000
        >>> idx = AnnoyIndex(f, metric='l2')
        ...
        >>> for i in range(n):
        ...    v = [random.gauss(0, 1) for _ in range(f)]
        ...    idx.add_item(i, v)
        >>> idx.build(10)

        ```
        Go BackOpen In Tab

    property compress\_mode: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")['zlib', 'gzip'] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy.Index.compress_mode "Link to this definition")
    :   Compression used for `"byte"` pickling by [`PickleMixin`](scikitplot.annoy.PickleMixin.html#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin").

    deserialize(**byte**, **prefault=None**)[#](#scikitplot.annoy.Index.deserialize "Link to this definition")
    :   Restore the index from a serialized byte string.

        Parameters:
        :   ****byte****bytes
            :   Byte string produced by [`serialize`](#scikitplot.annoy.Index.serialize "scikitplot.annoy.Index.serialize"). Both native (legacy)
                blobs and portable blobs (created with `serialize(format='portable')`)
                are accepted; portable and canonical blobs are auto-detected.
                Canonical blobs restore by rebuilding the index deterministically.

            ****prefault****bool or None, optional, default=None
            :   Accepted for API symmetry with [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load"). If None, the stored
                Ignored for canonical blobs.
                [`prefault`](#scikitplot.annoy.Index.prefault "scikitplot.annoy.Index.prefault") value is used.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   IOError
            :   If deserialization fails due to invalid or incompatible data.

            RuntimeError
            :   If the index is not initialized.

        > **See also**
        > [`serialize`](#scikitplot.annoy.Index.serialize "scikitplot.annoy.Index.serialize")
        :   Create a binary snapshot of the index.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        Notes

        Portable blobs add a small header (version, ABI sizes, endianness, metric, f)
        to ensure incompatible binaries fail loudly and safely. They are not a
        cross-architecture wire format; the payload remains Annoy’s native snapshot.

    f[#](#scikitplot.annoy.Index.f "Link to this definition")
    :   Vector dimension.

        Returns:
        :   int
            :   Dimension of each item vector. `0` means unknown / lazy.

        Notes

        * `Annoy(f=None, ...)` is supported at construction time and is treated as `f=0`.
        * `0` (or `None`) means “unknown / lazy”: the first call to [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item")
          will infer `f` from the input vector length and then fix it.

        Changing `f` after the index has been initialized (items added and/or
        trees built) is a **structural** change: the stored items and all tree splits
        depend on the vector dimension.

        For scikit-learn compatibility, assigning a different `f` (or `None`) on
        an already initialized index will deterministically ****reset**** the index (drop
        all items, trees, and label metadata ([`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") and [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y"))). You must call [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit") (or
        [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item") + [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")) again before querying.

    feature\_names\_in\_[#](#scikitplot.annoy.Index.feature_names_in_ "Link to this definition")
    :   Input feature names seen during fit (SLEP007). Set only when explicitly provided via fit(…, feature\_names=…).

    fit(**X=None**, **y=None**, **\***, **y\_map=None**, **n\_trees=-1**, **n\_jobs=-1**, **reset=True**, **start\_index=None**, **missing\_value=None**, **feature\_names=None**)[#](#scikitplot.annoy.Index.fit "Link to this definition")
    :   Fit the Annoy index (scikit-learn compatible).

        This method supports two deterministic workflows:

        1. Manual add/build:
           If X is None and y is None, fit() builds the forest using items
           previously added via add\_item().
        2. Array-like X:
           If X is provided (2D array-like), fit() optionally resets or appends,
           adds all rows as items, then builds the forest.

        Parameters:
        :   ****X****array-like of shape (n\_samples, n\_features), default=None
            :   Vectors to add to the index. If None (and y is None), fit() only builds.

            ****y****array-like of shape (n\_samples,), default=None
            :   Optional dense labels/targets associated with X. This must be a 1D
                sequence (dicts are not accepted; use `y_map`).

            ****y\_map****dict[int, object] or None, default=None
            :   Optional sparse mapping `{item_id -> label/target}`. This is the
                canonical label metadata storage. Provide only one of `y` or `y_map`.

            ****n\_trees****int, default=-1
            :   Number of trees to build. Use -1 for Annoy’s internal default.

            ****n\_jobs****int, default=-1
            :   Number of threads to use during build (-1 means “auto”).

            ****reset****bool, default=True
            :   If True, clear existing items before adding X. If False, append.

            ****start\_index****int or None, default=None
            :   Item id for the first row of X. If None, uses 0 when reset=True,
                otherwise uses current n\_items when reset=False.

            ****missing\_value****float or None, default=None
            :   If not None, imputes missing entries in X.

                * Dense rows: replaces None elements with missing\_value.
                * Dict rows: fills missing keys (and None values) with missing\_value.

                If None, missing entries raise an error (strict mode).

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`fit_transform`](#scikitplot.annoy.Index.fit_transform "scikitplot.annoy.Index.fit_transform")
        :   Estimator-style APIs.

        [`transform`](#scikitplot.annoy.Index.transform "scikitplot.annoy.Index.transform")
        :   Query the built index.

        [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item")
        :   Add one item at a time.

        [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")
        :   Build the forest after manual calls to add\_item.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        [`unbuild`](#scikitplot.annoy.Index.unbuild "scikitplot.annoy.Index.unbuild")
        :   Remove trees so items can be appended.

        [`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map"), [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y")
        :   Stored label metadata (canonical mapping and dense cache).

        [`get_params`](#scikitplot.annoy.Index.get_params "scikitplot.annoy.Index.get_params"), [`set_params`](#scikitplot.annoy.Index.set_params "scikitplot.annoy.Index.set_params")
        :   Estimator parameter API.

        Examples

        Try it in your browser!
        ```
        >>> import random
        >>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
        ...
        >>> n, f = 10_000, 1_000
        >>> X = [[random.gauss(0, 1) for _ in range(f)] for _ in range(n)]
        >>> q = [[random.gauss(0, 1) for _ in range(f)]]
        ...
        >>> for m in ['angular', 'l1', 'l2', '.', 'hamming']:
        ...     idx = AnnoyIndex().set_params(metric=m).fit(X)
        ...     print(m, idx.transform(q))
        ...
        >>> idx = AnnoyIndex().fit(X)
        >>> for m in ['angular', 'l1', 'l2', '.', 'hamming']:
        ...     idx_m = base.rebuild(metric=m)  # rebuild-from-index
        ...     print(m, idx_m.transform(q))  # no .fit(X) here

        ```
        Go BackOpen In Tab

    fit\_transform(**X**, **y=None**, **\***, **y\_map=None**, **n\_trees=-1**, **n\_jobs=-1**, **reset=True**, **start\_index=None**, **missing\_value=None**, **feature\_names=None**, **n\_neighbors=None**, **search\_k=-1**, **include\_distances=False**, **return\_labels=False**, **y\_fill\_value=None**)[#](#scikitplot.annoy.Index.fit_transform "Link to this definition")
    :   Fit the index and transform X in a single deterministic call.

        This is equivalent to calling [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit") followed by [`transform`](#scikitplot.annoy.Index.transform "scikitplot.annoy.Index.transform").

        Parameters:
        :   ****X****array-like
            :   Training data / queries. See [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit") and [`transform`](#scikitplot.annoy.Index.transform "scikitplot.annoy.Index.transform").

            ****y****array-like of shape (n\_samples,), default=None
            :   Optional dense labels/targets aligned to rows of `X`.

            ****y\_map****dict[int, object] or None, default=None
            :   Optional sparse mapping `{item_id -> label/target}`. Provide only one
                of `y` or `y_map`.

        Returns:
        :   ****neighbors****object
            :   The output of [`transform`](#scikitplot.annoy.Index.transform "scikitplot.annoy.Index.transform") for `X` under the provided query options.

        Raises:
        :   TypeError
            :   If both `y` and `y_map` are provided, or if input types are invalid.

            ValueError
            :   If the index cannot be built deterministically or query options are inconsistent.

        > **See also**
        > [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`transform`](#scikitplot.annoy.Index.transform "scikitplot.annoy.Index.transform")
        :   Query the built index.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        Examples

        Try it in your browser!
        ```
        >>> import random
        >>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
        ...
        >>> n, f = 10_000, 1_000
        >>> X = [[random.gauss(0, 1) for _ in range(f)] for _ in range(n)]
        >>> q = [[random.gauss(0, 1) for _ in range(f)]]
        ...
        >>> for m in ['angular', 'l1', 'l2', '.', 'hamming']:
        ...     print(m, AnnoyIndex().set_params(metric=m).fit_transform(q))

        ```
        Go BackOpen In Tab

    classmethod from\_bytes(**data**, **\***, **f=None**, **metric=None**, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_io.py#L316)[#](#scikitplot.annoy.Index.from_bytes "Link to this definition")
    :   Construct a new index and load it from serialized bytes.

        Parameters:
        :   ****data****
            :   Bytes produced by [`to_bytes`](#scikitplot.annoy.Index.to_bytes "scikitplot.annoy.Index.to_bytes") (backend `serialize`).

            ****f****
            :   Vector dimension for construction.

            ****metric****
            :   Metric name for construction.

            ****prefault****
            :   Forwarded to the backend `deserialize` if supported.

        Returns:
        :   index
            :   Newly constructed index with the data loaded.

        Raises:
        :   TypeError
            :   If `data` is not bytes-like.

            ValueError
            :   If `f` or `metric` is invalid.

            TypeError
            :   If the backend does not provide `deserialize`.

        Parameters:
        :   * ****data**** ([**bytes**](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)") **|** [**bytearray**](https://docs.python.org/3/library/stdtypes.html#bytearray "(in Python v3.14)") **|** [**memoryview**](https://docs.python.org/3/library/stdtypes.html#memoryview "(in Python v3.14)"))
            * ****f**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****metric**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

        Notes

        Portable blobs add a small header (version, ABI sizes, endianness, metric, f)
        to ensure incompatible binaries fail loudly and safely. They are not a
        cross-architecture wire format; the payload remains Annoy’s native snapshot.

        For `data` if fed `to_bytes(format='native') required params
        ``f``, `metric`.

    classmethod from\_json(**path**, **\***, **load=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_meta.py#L425)[#](#scikitplot.annoy.Index.from_json "Link to this definition")
    :   Load metadata from JSON and construct an index.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****load**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

    classmethod from\_low\_level(**obj**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_base.py#L270)[#](#scikitplot.annoy.Index.from_low_level "Link to this definition")
    :   Create a new [`Index`](#scikitplot.annoy.Index "scikitplot.annoy.Index") from a low-level instance.

        The new object is rebuilt by round-tripping through Annoy’s native
        `serialize` / `deserialize` to avoid sharing low-level state between
        two Python objects.

        Parameters:
        :   ****obj****scikitplot.cexternals.\_annoy.Annoy
            :   Low-level Annoy instance.

            ****prefault****bool or None, default=None
            :   Prefault override passed to [`deserialize`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy.deserialize "scikitplot.annoy.Annoy.deserialize"). If None, the
                value is taken from `obj.get_params(deep=False)` when available,
                otherwise it falls back to `obj.prefault` / destination defaults.

        Returns:
        :   ****index****Index
            :   Newly constructed high-level index.

        Raises:
        :   TypeError
            :   If `obj` is not an Annoy instance.

            TypeError
            :   If serialization or deserialization fails, or required configuration
                (e.g., `f`) cannot be determined.

        Parameters:
        :   * ****obj**** ([**Annoy**](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy"))
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

        > **See also**
        > [`Annoy.serialize`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy.serialize "scikitplot.annoy.Annoy.serialize")


        [`Annoy.deserialize`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy.deserialize "scikitplot.annoy.Annoy.deserialize")


        [`Annoy.get_params`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy.get_params "scikitplot.annoy.Annoy.get_params")


        [`Annoy.set_params`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy.set_params "scikitplot.annoy.Annoy.set_params")

        Notes

        The implementation uses Annoy’s native serialization. It does not attempt
        to copy internal pointers or C++ state directly.

        This method is deterministic. It always constructs a new index from the
        serialized payload; it does not share low-level state between objects.

    classmethod from\_metadata(**metadata**, **\***, **load=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_meta.py#L256)[#](#scikitplot.annoy.Index.from_metadata "Link to this definition")
    :   Construct an index from a metadata payload.

        Parameters:
        :   ****metadata****Mapping[str, any]
            :   Payload as produced by [`to_metadata`](#scikitplot.annoy.Index.to_metadata "scikitplot.annoy.Index.to_metadata").

            ****load****bool, default=True
            :   If True and `params['on_disk_path']` is present, attempt to load the
                index into the returned object via backend `load`.

        Returns:
        :   ****index****Self
            :   Newly constructed index.

        Raises:
        :   TypeError
            :   If input types are invalid.

            ValueError
            :   If required fields are missing or invalid.

            RuntimeError
            :   If schema version is missing on the class.

            AttributeError
            :   If backend `set_params`/`load` are missing when required.

        Parameters:
        :   * ****metadata**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **any****]**)
            * ****load**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

        > **See also**
        > [`to_metadata`](#scikitplot.annoy.Index.to_metadata "scikitplot.annoy.Index.to_metadata")


        [`from_json`](#scikitplot.annoy.Index.from_json "scikitplot.annoy.Index.from_json")


        [`from_yaml`](#scikitplot.annoy.Index.from_yaml "scikitplot.annoy.Index.from_yaml")

    classmethod from\_yaml(**path**, **\***, **load=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_meta.py#L459)[#](#scikitplot.annoy.Index.from_yaml "Link to this definition")
    :   Load metadata from YAML and construct an index (requires PyYAML).

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****load**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Self**](https://docs.python.org/3/library/typing.html#typing.Self "(in Python v3.14)")

    get\_distance(**i**, **j**) → [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[#](#scikitplot.annoy.Index.get_distance "Link to this definition")
    :   Return the distance between two stored items.

        Parameters:
        :   ****i, j****int
            :   Item ids (index) of two stored samples.

        Returns:
        :   ****d****float
            :   Distance between items `i` and `j` under the current metric.

        Raises:
        :   RuntimeError
            :   If the index is not initialized.

            IndexError
            :   If either index is out of range.

    get\_feature\_names\_out(**input\_features=None**)[#](#scikitplot.annoy.Index.get_feature_names_out "Link to this definition")
    :   Get output feature names for the transformer-style API.

        Parameters:
        :   ****input\_features****sequence of str or None, optional, default=None
            :   If provided, validated deterministically against the fitted input
                feature names (if available) and the expected input dimensionality.

        Returns:
        :   tuple of str
            :   Output feature names: `('neighbor_0', ..., 'neighbor_{k-1}')` where
                `k == n_neighbors`.

        Raises:
        :   AttributeError
            :   If called before [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit")/`build`.

            ValueError
            :   If `input_features` is provided but does not match
                [`feature_names_in_`](#scikitplot.annoy.Index.feature_names_in_ "scikitplot.annoy.Index.feature_names_in_").

    get\_item(**i**) → [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")][#](#scikitplot.annoy.Index.get_item "Link to this definition")
    :   Return the stored embedding vector for a given item id.

        Parameters:
        :   ****i****int
            :   Item id (index) previously passed to [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item").

        Returns:
        :   ****vector****list[float]
            :   Stored embedding of length `f`.

        Raises:
        :   RuntimeError
            :   If the index is not initialized.

            IndexError
            :   If `i` is out of range.

    get\_item\_vectors(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **return\_ids=False**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_ndarray.py#L509)[#](#scikitplot.annoy.Index.get_item_vectors "Link to this definition")
    :   Fetch many vectors as a dense NumPy array.

        Parameters:
        :   ****ids****sequence of int or iterable of int, optional
            :   Ids to fetch. If None, selects `range(start, stop or n_items)`.

            ****dtype****numpy dtype, default=numpy.float32
            :   Output dtype.

            ****start, stop****int, optional
            :   Range selection used when `ids` is None.

            ****n\_rows****int, optional
            :   Required when `ids` is a non-sized iterable (e.g., generator).

            ****return\_ids****bool, default=False
            :   If True, also return the realized ids (int64) in row order.

            ****validate\_vector\_len****bool, default=True
            :   If True, verify every fetched vector has length `f`.

        Returns:
        :   ****X****numpy.ndarray of shape (n\_rows, f)
            :   Dense matrix of vectors.

            ****ids\_out****numpy.ndarray of shape (n\_rows,), optional
            :   Returned when `return_ids=True`.

        Raises:
        :   ValueError
            :   If the id selection is inconsistent or vectors have unexpected length.

            TypeError
            :   If `ids` is a non-sized iterable and `n_rows` is not provided.

        Parameters:
        :   * ****ids**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****stop**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****n\_rows**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****return\_ids**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****validate\_vector\_len**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")]

        > **See also**
        > [`to_numpy`](#scikitplot.annoy.Index.to_numpy "scikitplot.annoy.Index.to_numpy")
        :   Dense NumPy export alias.

        [`iter_item_vectors`](#scikitplot.annoy.Index.iter_item_vectors "scikitplot.annoy.Index.iter_item_vectors")
        :   Streaming export without allocating a dense matrix.

    get\_n\_items() → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy.Index.get_n_items "Link to this definition")
    :   Return the number of stored items in the index.

        Returns:
        :   ****n\_items****int
            :   Number of items that have been added and are currently addressable.

        Raises:
        :   RuntimeError
            :   If the index is not initialized.

    get\_n\_trees() → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy.Index.get_n_trees "Link to this definition")
    :   Return the number of trees in the current forest.

        Returns:
        :   ****n\_trees****int
            :   Number of trees that have been built.

        Raises:
        :   RuntimeError
            :   If the index is not initialized.

    get\_nns\_by\_item(**i**, **n**, **search\_k=-1**, **include\_distances=False**)[#](#scikitplot.annoy.Index.get_nns_by_item "Link to this definition")
    :   Return the `n` nearest neighbours for a stored item id.

        Parameters:
        :   ****i****int
            :   Item id (index) previously passed to `add_item(i, embedding)`.

            ****n****int
            :   Number of nearest neighbours to return.

            ****search\_k****int, optional, default=-1
            :   Maximum number of nodes to inspect. Larger values usually improve recall
                at the cost of slower queries. If `-1`, defaults to approximately
                `n_trees * n`.

            ****include\_distances****bool, optional, default=False
            :   If True, return a `(indices, distances)` tuple. Otherwise return only
                the list of indices.

        Returns:
        :   ****indices****list[int] | tuple[list[int], list[float]]
            :   If `include_distances=False`: list of neighbour item ids.
                If `include_distances=True`: `(indices, distances)`.

        Raises:
        :   RuntimeError
            :   If the index is not initialized or has not been built.

            IndexError
            :   If `i` is out of range.

        > **See also**
        > [`get_nns_by_vector`](#scikitplot.annoy.Index.get_nns_by_vector "scikitplot.annoy.Index.get_nns_by_vector")
        :   Query with an explicit query embedding.

    get\_nns\_by\_vector(**vector**, **n**, **search\_k=-1**, **include\_distances=False**)[#](#scikitplot.annoy.Index.get_nns_by_vector "Link to this definition")
    :   Return the `n` nearest neighbours for a query embedding.

        Parameters:
        :   ****vector****sequence of float
            :   Query embedding of length `f`.

            ****n****int
            :   Number of nearest neighbours to return.

            ****search\_k****int, optional, default=-1
            :   Maximum number of nodes to inspect. Larger values typically improve recall
                at the cost of slower queries. If `-1`, defaults to approximately
                `n_trees * n`.

            ****include\_distances****bool, optional, default=False
            :   If True, return a `(indices, distances)` tuple. Otherwise return only
                the list of indices.

        Returns:
        :   ****indices****list[int] | tuple[list[int], list[float]]
            :   If `include_distances=False`: list of neighbour item ids.
                If `include_distances=True`: `(indices, distances)`.

        Raises:
        :   RuntimeError
            :   If the index is not initialized or has not been built.

            ValueError
            :   If `len(vector) != f`.

        > **See also**
        > [`get_nns_by_item`](#scikitplot.annoy.Index.get_nns_by_item "scikitplot.annoy.Index.get_nns_by_item")
        :   Query by stored item id.

    get\_params(**deep=True**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.annoy.Index.get_params "Link to this definition")
    :   Return estimator-style parameters (scikit-learn compatibility).

        Parameters:
        :   ****deep****bool, optional, default=True
            :   Included for scikit-learn API compatibility. Ignored because Annoy
                does not contain nested estimators.

        Returns:
        :   ****params****dict
            :   Dictionary of stable, user-facing parameters.

        > **See also**
        > [`set_params`](#scikitplot.annoy.Index.set_params "scikitplot.annoy.Index.set_params")
        :   Set estimator-style parameters.

        [`schema_version`](#scikitplot.annoy.Index.schema_version "scikitplot.annoy.Index.schema_version")
        :   Controls pickle / snapshot strategy.

        Notes

        This is intended to make Annoy behave like a scikit-learn estimator for
        tools such as [`sklearn.base.clone`](https://scikit-learn.org/dev/modules/generated/sklearn.base.clone.html#sklearn.base.clone "(in scikit-learn v1.10)") and parameter grids.

    info(**include\_n\_items=True**, **include\_n\_trees=True**, **include\_memory=None**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.annoy.Index.info "Link to this definition")
    :   Return a structured summary of the index.

        This method returns a JSON-like Python dictionary that is easier to
        inspect programmatically than the legacy multi-line string format.

        Parameters:
        :   ****include\_n\_items****bool, optional, default=True
            :   If True, include `n_items`.

            ****include\_n\_trees****bool, optional, default=True
            :   If True, include `n_trees`.

            ****include\_memory****bool or None, optional, default=None
            :   Controls whether memory usage fields are included.

                * `None`: include memory usage only if the index is built.
                * `True`: include memory usage if available (built).
                * `False`: omit memory usage fields.

                Memory usage is computed after [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build") and may be expensive for
                very large indexes.

        Returns:
        :   ****info****dict
            :   Dictionary describing the current index state.

        > **See also**
        > [`serialize`](#scikitplot.annoy.Index.serialize "scikitplot.annoy.Index.serialize")
        :   Create a binary snapshot of the index.

        [`deserialize`](#scikitplot.annoy.Index.deserialize "scikitplot.annoy.Index.deserialize")
        :   Restore from a binary snapshot.

        [`save`](#scikitplot.annoy.Index.save "scikitplot.annoy.Index.save")
        :   Persist the index to disk.

        [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load")
        :   Load the index from disk.

        Notes

        * Some keys are optional depending on include\_\* flags.

        Keys:

        * fint, default=0
          :   Dimensionality of the index.
        * metricstr, default=’angular’
          :   Distance metric name.
        * on\_disk\_pathstr, default=’’
          :   Path used for on-disk build, if configured.
        * prefaultbool, default=False
          :   If True, aggressively fault pages into memory during save.
              Primarily useful on some platforms for very large indexes.
        * schema\_versionint, default=0
          :   Stored schema/version marker on this object (reserved for future use).
        * seedint or None, optional, default=None
          :   Non-negative integer seed. If called before the index is constructed,
              the seed is stored and applied when the C++ index is created.
        * verboseint or None, optional, default=None
          :   Verbosity level. Values are clamped to the range `[-2, 2]`.
              `level >= 1` enables Annoy’s verbose logging; `level <= 0` disables it.
              Logging level inspired by gradient-boosting libraries:

              * `<= 0` : quiet (warnings only)
              * `1` : info (Annoy’s `verbose=True`)
              * `>= 2` : debug (currently same as info, reserved for future use)

        Optional Keys:

        * n\_itemsint
          :   Number of items currently stored.
        * n\_treesint
          :   Number of built trees in the forest.
        * memory\_usage\_byteint
          :   Approximate memory usage in bytes. Present only when requested and available.
        * memory\_usage\_mibfloat
          :   Approximate memory usage in MiB. Present only when requested and available.

        Examples

        Try it in your browser!
        ```
        >>> info = idx.info()
        >>> info['f']
        100
        >>> info['n_items']
        1000

        ```
        Go BackOpen In Tab

    iter\_item\_vectors(**ids=None**, **\***, **start=0**, **stop=None**, **with\_ids=True**, **dtype=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_ndarray.py#L605)[#](#scikitplot.annoy.Index.iter_item_vectors "Link to this definition")
    :   Iterate vectors without allocating a dense matrix.

        Parameters:
        :   ****ids, start, stop****
            :   Selection controls. See [`get_item_vectors`](#scikitplot.annoy.Index.get_item_vectors "scikitplot.annoy.Index.get_item_vectors").

            ****with\_ids****bool, default=True
            :   If True, yield `(id, vector)`. If False, yield vectors only.

            ****dtype****numpy dtype, optional
            :   If provided, cast output vectors to this dtype.

        Yields:
        :   (id, vector) or vector
            :   Each vector is returned as a 1D NumPy array.

        Parameters:
        :   * ****ids**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****stop**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****with\_ids**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")]]

        > **See also**
        > [`get_item_vectors`](#scikitplot.annoy.Index.get_item_vectors "scikitplot.annoy.Index.get_item_vectors")
        :   Dense export.

    kneighbors(**X**, **n\_neighbors=5**, **\***, **search\_k=-1**, **include\_distances=True**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **output\_type='vector'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_vectors.py#L661)[#](#scikitplot.annoy.Index.kneighbors "Link to this definition")
    :   Find k nearest neighbors for one or more query vectors.

        This is a sklearn-like convenience wrapper that returns rectangular arrays.

        Parameters:
        :   ****X****array-like of shape (f,) or (n\_queries, f)
            :   Query vector(s).

            ****n\_neighbors****int, default=5
            :   Number of neighbors to return per query.

            ****search\_k****int, default=-1
            :   Search parameter forwarded to the backend.

            ****include\_distances****bool, default=True
            :   If True, return `(neighbors, distances)`. Otherwise return neighbors.

            ****exclude\_self****bool, default=False
            :   If True, apply the same deterministic self-exclusion rule as
                [`query_by_vector`](#scikitplot.annoy.Index.query_by_vector "scikitplot.annoy.Index.query_by_vector") for each query row.

            ****exclude\_item\_ids****iterable of int, optional
            :   Exclude these ids for every query.

            ****ensure\_all\_finite****bool or ‘allow-nan’, default=True
            :   Input validation option forwarded to scikit-learn.

            ****copy****bool, default=False
            :   Input validation option forwarded to scikit-learn.

            ****output\_type****{‘item’, ‘vector’}, default=’vector’
            :   If ‘item’, return neighbor ids. If ‘vector’, return neighbor vectors.

        Returns:
        :   ****neighbors****numpy.ndarray
            :   If `output_type='item'`, shape is `(n_queries, n_neighbors)`.
                If `output_type='vector'`, shape is `(n_queries, n_neighbors, f)`.

            ****distances****numpy.ndarray of shape (n\_queries, n\_neighbors)
            :   Neighbor distances. Returned when `include_distances=True`.

        Raises:
        :   sklearn.exceptions.NotFittedError
            :   If the backend reports that the index is unbuilt.

            ValueError
            :   If `n_neighbors <= 0` or any query yields too few neighbors after exclusions.

        Parameters:
        :   * ****X**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****n\_neighbors**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****include\_distances**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_self**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_item\_ids**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****ensure\_all\_finite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'allow-nan'****]**)
            * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****output\_type**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'item'****,** **'vector'****]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")]

        > **See also**
        > [`query_by_vector`](#scikitplot.annoy.Index.query_by_vector "scikitplot.annoy.Index.query_by_vector")
        :   Per-query 1D interface.

        [`kneighbors_graph`](#scikitplot.annoy.Index.kneighbors_graph "scikitplot.annoy.Index.kneighbors_graph")
        :   CSR kNN graph.

    kneighbors\_graph(**X**, **n\_neighbors=5**, **\***, **search\_k=-1**, **mode='connectivity'**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **output\_type='item'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_vectors.py#L769)[#](#scikitplot.annoy.Index.kneighbors_graph "Link to this definition")
    :   Compute the k-neighbors graph (CSR) for query vectors.

        Parameters:
        :   ****X****array-like of shape (f,) or (n\_queries, f)
            :   Query vector(s).

            ****n\_neighbors****int, default=5
            :   Number of neighbors per query.

            ****search\_k****int, default=-1
            :   Search parameter forwarded to the backend.

            ****mode****{‘connectivity’, ‘distance’}, default=’connectivity’
            :   If ‘connectivity’, graph entries are 1. If ‘distance’, entries are
                backend distances.

            ****exclude\_self****bool, default=False
            :   If True, apply the same deterministic self-exclusion rule as
                [`kneighbors`](#scikitplot.annoy.Index.kneighbors "scikitplot.annoy.Index.kneighbors") for each query row.

            ****exclude\_item\_ids****iterable of int, optional
            :   Exclude these ids for every query.

            ****ensure\_all\_finite****bool or ‘allow-nan’, default=True
            :   Input validation option forwarded to scikit-learn.

            ****copy****bool, default=False
            :   Input validation option forwarded to scikit-learn.

            ****output\_type****{‘item’}, default=’item’
            :   Must be ‘item’ for CSR construction.

        Returns:
        :   ****graph****scipy.sparse.csr\_matrix
            :   CSR matrix of shape `(n_queries, n_items)`.

        Raises:
        :   ImportError
            :   If SciPy is not installed.

            ValueError
            :   If `mode` is invalid or `output_type != 'item'`.

            RuntimeError
            :   If the backend returns an out-of-range neighbor id.

        Parameters:
        :   * ****X**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****n\_neighbors**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'connectivity'****,** **'distance'****]**)
            * ****exclude\_self**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_item\_ids**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****ensure\_all\_finite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'allow-nan'****]**)
            * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****output\_type**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'item'****,** **'vector'****]**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

        > **See also**
        > [`kneighbors`](#scikitplot.annoy.Index.kneighbors "scikitplot.annoy.Index.kneighbors")
        :   Dense kNN results.

    load(**fn**, **prefault=None**)[#](#scikitplot.annoy.Index.load "Link to this definition")
    :   Load (mmap) an index from disk into the current object.

        Parameters:
        :   ****fn****str
            :   Path to a file previously created by [`save`](#scikitplot.annoy.Index.save "scikitplot.annoy.Index.save") or
                [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build").

            ****prefault****bool or None, optional, default=None
            :   If True, fault pages into memory when the file is mapped.
                If None, use the stored [`prefault`](#scikitplot.annoy.Index.prefault "scikitplot.annoy.Index.prefault") value.
                Primarily useful on some platforms for very large indexes.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   IOError
            :   If the file cannot be opened or mapped.

            RuntimeError
            :   If the index is not initialized or the file is incompatible.

        > **See also**
        > [`save`](#scikitplot.annoy.Index.save "scikitplot.annoy.Index.save")
        :   Save the current index to disk.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Build directly using an on-disk backing file.

        [`unload`](#scikitplot.annoy.Index.unload "scikitplot.annoy.Index.unload")
        :   Release mmap resources.

        Notes

        The in-memory index must have been constructed with the same dimension
        and metric as the on-disk file.

    classmethod load\_bundle(**manifest\_filename='manifest.json'**, **index\_filename='index.ann'**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_io.py#L209)[#](#scikitplot.annoy.Index.load_bundle "Link to this definition")
    :   Load a directory bundle created by [`save_bundle`](#scikitplot.annoy.Index.save_bundle "scikitplot.annoy.Index.save_bundle").

        Parameters:
        :   ****manifest\_filename****
            :   Filename for the metadata manifest inside the directory.

            ****index\_filename****
            :   Filename for the Annoy index inside the directory.

            ****prefault****
            :   Forwarded to [`load_index`](#scikitplot.annoy.Index.load_index "scikitplot.annoy.Index.load_index").

        Returns:
        :   index
            :   Newly constructed index.

        Raises:
        :   TypeError
            :   If [`from_json`](#scikitplot.annoy.Index.from_json "scikitplot.annoy.Index.from_json") is not available (compose with [`MetaMixin`](scikitplot.annoy.MetaMixin.html#scikitplot.annoy.MetaMixin "scikitplot.annoy._mixins._meta.MetaMixin")).

            TypeError
            :   If [`from_json`](#scikitplot.annoy.Index.from_json "scikitplot.annoy.Index.from_json") returns an unexpected type.

            OSError
            :   On filesystem failures.

        Parameters:
        :   * ****manifest\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****index\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

    classmethod load\_index(**f**, **metric**, **path**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_io.py#L109)[#](#scikitplot.annoy.Index.load_index "Link to this definition")
    :   Load (mmap) an Annoy index file into this object.

        Parameters:
        :   ****f****
            :   Vector dimension for construction.

            ****metric****
            :   Metric name for construction.

            ****path****str or os.PathLike
            :   Path to a file previously created by [`save_index`](#scikitplot.annoy.Index.save_index "scikitplot.annoy.Index.save_index") or the
                backend `save`.

            ****prefault****
            :   Forwarded to the backend. If `None`, the backend default is used.

        Raises:
        :   TypeError
            :   If the backend does not provide `load(path, prefault=...)`.

            OSError
            :   If loading fails (backend or filesystem).

        Parameters:
        :   * ****f**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****metric**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **PathLike****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

    memory\_usage() → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy.Index.memory_usage "Link to this definition")
    :   Approximate memory usage of the index in bytes.

        Returns:
        :   ****n\_bytes****int or None
            :   Approximate number of bytes used by the index. Returns `None` if the
                index is not initialized or the forest has not been built yet.

        Raises:
        :   RuntimeError
            :   If memory usage cannot be computed.

    metric[#](#scikitplot.annoy.Index.metric "Link to this definition")
    :   Distance metric for the index. Valid values:

        * ‘angular’ -> Cosine-like distance on normalized vectors.
        * ‘euclidean’ -> L2 distance.
        * ‘manhattan’ -> L1 distance.
        * ‘dot’ -> Negative dot-product distance (inner product).
        * ‘hamming’ -> Hamming distance for binary vectors.

        Aliases (case-insensitive):

        * angular : cosine
        * euclidean : l2, lstsq
        * manhattan : l1, cityblock, taxicab
        * dot : @, ., dotproduct, inner, innerproduct
        * hamming : hamming

        Returns:
        :   str or None
            :   Canonical metric name, or None if not configured yet.

            > **See also**
            > * [`cosine`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.cosine.html#scipy.spatial.distance.cosine "(in SciPy v2.0.0.dev)")
            * [`euclidean`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.euclidean.html#scipy.spatial.distance.euclidean "(in SciPy v2.0.0.dev)")
            * [`cityblock`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.cityblock.html#scipy.spatial.distance.cityblock "(in SciPy v2.0.0.dev)")
            * [`dot`](https://scipy.github.io/devdocs/reference/generated/scipy.sparse.coo_array.dot.html#scipy.sparse.coo_array.dot "(in SciPy v2.0.0.dev)")
            * [`hamming`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.hamming.html#scipy.spatial.distance.hamming "(in SciPy v2.0.0.dev)")

        Notes

        Changing `metric` after the index has been initialized (items added and/or
        trees built) is a **structural** change: the forest and all distances depend on
        the distance function.

        For scikit-learn compatibility, setting a different metric on an already
        initialized index will deterministically ****reset**** the index (drop all items,
        trees, and label metadata ([`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") and [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y")). You must call [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit") (or [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item") +
        [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")) again before querying.

    n\_features[#](#scikitplot.annoy.Index.n_features "Link to this definition")
    :   Alias of `f` (dimension), provided for scikit-learn naming parity.

    n\_features\_[#](#scikitplot.annoy.Index.n_features_ "Link to this definition")
    :   Read-only alias of `n_features_in_`.

    n\_features\_in\_[#](#scikitplot.annoy.Index.n_features_in_ "Link to this definition")
    :   Number of features seen during fit (scikit-learn compatible). Alias of `f` when available.

    n\_features\_out\_[#](#scikitplot.annoy.Index.n_features_out_ "Link to this definition")
    :   Number of output features produced by transform (SLEP013). Equals n\_neighbors once fitted.

    n\_neighbors[#](#scikitplot.annoy.Index.n_neighbors "Link to this definition")
    :   Number of neighbors returned by transform/fit\_transform (SLEP013; strict schema).

    on\_disk\_build(**fn**)[#](#scikitplot.annoy.Index.on_disk_build "Link to this definition")
    :   Configure the index to build using an on-disk backing file.

        Parameters:
        :   ****fn****str
            :   Path to a file that will hold the index during build.
                The file is created or overwritten as needed.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")
        :   Build trees after adding items (on-disk backed).

        [`rebuild`](#scikitplot.annoy.Index.rebuild "scikitplot.annoy.Index.rebuild")
        :   Return a new Annoy index rebuilt from the current index contents.

        [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load")
        :   Memory-map the built index.

        [`save`](#scikitplot.annoy.Index.save "scikitplot.annoy.Index.save")
        :   Persist the built index to disk.

        Notes

        This mode is useful for very large datasets that do not fit
        comfortably in RAM during construction.

    on\_disk\_path[#](#scikitplot.annoy.Index.on_disk_path "Link to this definition")
    :   Path used for on-disk build/load/save operations.

        Returns:
        :   str or None
            :   Filesystem path used for on-disk operations, or None if not configured.

            > **See also**
            > * [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
            * [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load")
            * [`unload`](#scikitplot.annoy.Index.unload "scikitplot.annoy.Index.unload")

        Notes

        * Assigning a string/PathLike to `on_disk_path` configures on-disk build mode
          (equivalent to calling [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build") with the same filename).
        * Note: Annoy core truncates the target file when enabling on-disk build.
          `on_disk_path` is strictly equivalent to calling [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
          with the same filename (truncate allowed).
        * Assigning `None` (or an empty string) clears the configured path, but only
          when no disk-backed index is currently active.
        * Clearing/changing this while an on-disk index is active is disallowed.
          Call [`unload`](#scikitplot.annoy.Index.unload "scikitplot.annoy.Index.unload") first.

    property pickle\_mode: [Literal](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")['auto', 'disk', 'byte'][#](#scikitplot.annoy.Index.pickle_mode "Link to this definition")
    :   Persist strategy used by [`PickleMixin`](scikitplot.annoy.PickleMixin.html#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin").

    plot\_index(**labels=None**, **\***, **ids=None**, **projection='pca'**, **dims=(0**, **1)**, **center=True**, **maxabs=False**, **l2\_normalize=False**, **dtype=<class 'numpy.float32'>**, **ax=None**, **title=None**, **plot\_kwargs=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_plotting.py#L231)[#](#scikitplot.annoy.Index.plot_index "Link to this definition")
    :   Plot this index as a 2D scatter plot.

        This is a thin wrapper around `plot_annoy_index` that uses
        `_plotting_backend`.

        Parameters:
        :   ****labels, ids, projection, dims, center, maxabs, l2\_normalize, dtype, ax, title, plot\_kwargs****
            :   See `plot_annoy_index`.

        Returns:
        :   y2, ids\_out, ax
            :   See `plot_annoy_index`.

        Parameters:
        :   * ****labels**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
            * ****ids**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****projection**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****dims**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]**)
            * ****center**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****maxabs**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****l2\_normalize**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****ax**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****plot\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        > **See also**
        > `plot_annoy_index`
        :   Low-level plotting helper this method delegates to.

        [`plot_knn_edges`](#scikitplot.annoy.Index.plot_knn_edges "scikitplot.annoy.Index.plot_knn_edges")
        :   Overlay kNN edges on the returned 2D coordinates.

        Notes

        * This method does not mutate the index.
        * Plotting backends (e.g. Matplotlib) are imported lazily and are only
          required when this method is called.
        * The returned `ids_out` corresponds to the item id for each row in
          `y2`.

        Examples

        Try it in your browser!
        ```
        >>> import numpy as np
        >>> import scikitplot.annoy as skann
        >>> idx = skann.Index(f=10, metric="angular")
        >>> # ... add items & build ...
        >>> labels = np.zeros(idx.get_n_items(), dtype=int)
        >>> y2, ids, ax = idx.plot_index(labels=labels, projection="pca")

        ```
        Go BackOpen In Tab

    plot\_knn\_edges(**y2**, **\***, **ids=None**, **k=10**, **search\_k=-1**, **ax=None**, **line\_kwargs=None**, **undirected=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_plotting.py#L304)[#](#scikitplot.annoy.Index.plot_knn_edges "Link to this definition")
    :   Overlay kNN edges onto an existing 2D index plot.

        This is a thin wrapper around `plot_annoy_knn_edges` that uses
        `_plotting_backend`.

        Parameters:
        :   ****y2, ids, k, search\_k, ax, line\_kwargs, undirected****
            :   See `plot_annoy_knn_edges`.

        Returns:
        :   ax
            :   The axes that were drawn on.

        Parameters:
        :   * ****y2**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"))
            * ****ids**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****ax**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****line\_kwargs**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
            * ****undirected**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

        > **See also**
        > `plot_annoy_knn_edges`
        :   Low-level edge overlay helper this method delegates to.

        [`plot_index`](#scikitplot.annoy.Index.plot_index "scikitplot.annoy.Index.plot_index")
        :   Computes the 2D coordinates used as input to this method.

        Notes

        * `y2` must represent 2D coordinates with shape `(n_samples, 2)`.
        * If `ids` is provided, it must have length `n_samples`.
        * This method does not mutate the index; it only performs neighbor
          queries to draw edges.

        Examples

        Try it in your browser!
        ```
        >>> y2, ids, ax = idx.plot_index(labels=np.zeros(idx.get_n_items(), dtype=int))
        >>> idx.plot_knn_edges(y2, ids=ids, k=5, line_kwargs={"alpha": 0.15})

        ```
        Go BackOpen In Tab

    prefault[#](#scikitplot.annoy.Index.prefault "Link to this definition")
    :   Default prefault flag stored on the object.

        This setting is used as the default for per-call `prefault` arguments when
        `prefault` is omitted or set to `None` in methods like [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load") and
        [`save`](#scikitplot.annoy.Index.save "scikitplot.annoy.Index.save").

        Returns:
        :   bool
            :   Current prefault flag.

        Notes

        * This flag does not retroactively change already-loaded mappings.

    query\_by\_item(**item**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_vectors.py#L291)[#](#scikitplot.annoy.Index.query_by_item "Link to this definition")
    :   Query neighbors by stored item id.

        Parameters:
        :   ****item****int
            :   Stored item id.

            ****n\_neighbors****int
            :   Number of neighbors to return **after** applying exclusions.

            ****search\_k****int, default=-1
            :   Search parameter forwarded to the backend.

            ****include\_distances****bool, default=False
            :   If True, also return distances.

            ****exclude\_self****bool, default=False
            :   If True, exclude `item` from the returned neighbors.

            ****exclude\_item\_ids****iterable of int, optional
            :   Additional item ids to exclude.

            ****ensure\_all\_finite****bool or ‘allow-nan’, default=True
            :   Input validation option forwarded to scikit-learn.

            ****copy****bool, default=False
            :   Input validation option forwarded to scikit-learn.

        Returns:
        :   ****indices****numpy.ndarray of shape (n\_neighbors,)
            :   Neighbor ids.

            ****(indices, distances)****tuple of numpy.ndarray
            :   Returned when `include_distances=True`.

        Raises:
        :   sklearn.exceptions.NotFittedError
            :   If the backend reports that the index is unbuilt.

            ValueError
            :   If `n_neighbors <= 0` or not enough neighbors remain after exclusions.

        Parameters:
        :   * ****item**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****n\_neighbors**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****include\_distances**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_self**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_item\_ids**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****ensure\_all\_finite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'allow-nan'****]**)
            * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")]

        > **See also**
        > [`query_by_vector`](#scikitplot.annoy.Index.query_by_vector "scikitplot.annoy.Index.query_by_vector")
        :   Query neighbors by an explicit vector.

        [`kneighbors`](#scikitplot.annoy.Index.kneighbors "scikitplot.annoy.Index.kneighbors")
        :   Batch neighbor queries (sklearn-like).

        Notes

        Exclusions are applied deterministically in the order returned by the backend.

    query\_by\_vector(**vector**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_vectors.py#L472)[#](#scikitplot.annoy.Index.query_by_vector "Link to this definition")
    :   Query neighbors by an explicit vector.

        Parameters:
        :   ****vector****array-like of shape (f,)
            :   Query vector.

            ****n\_neighbors****int
            :   Number of neighbors to return after exclusions.

            ****search\_k****int, default=-1
            :   Search parameter forwarded to the backend.

            ****include\_distances****bool, default=False
            :   If True, also return distances.

            ****exclude\_self****bool, default=False
            :   If True, exclude the first returned candidate whose distance
                is exactly `0.0`. This is intended for queries where `vector` comes
                from the index itself.

            ****exclude\_item\_ids****iterable of int, optional
            :   Additional item ids to exclude.

            ****ensure\_all\_finite****bool or ‘allow-nan’, default=True
            :   Input validation option forwarded to scikit-learn.

            ****copy****bool, default=False
            :   Input validation option forwarded to scikit-learn.

        Returns:
        :   ****indices****numpy.ndarray of shape (n\_neighbors,)
            :   Neighbor ids.

            ****(indices, distances)****tuple of numpy.ndarray
            :   Returned when `include_distances=True`.

        Raises:
        :   sklearn.exceptions.NotFittedError
            :   If the backend reports that the index is unbuilt.

            ValueError
            :   If `n_neighbors <= 0`, vector dimension mismatches `f`, or not
                enough neighbors remain after exclusions.

        Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****n\_neighbors**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****include\_distances**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_self**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_item\_ids**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****ensure\_all\_finite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'allow-nan'****]**)
            * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")]

        > **See also**
        > [`query_by_item`](#scikitplot.annoy.Index.query_by_item "scikitplot.annoy.Index.query_by_item")
        :   Query neighbors by stored item id.

        [`kneighbors`](#scikitplot.annoy.Index.kneighbors "scikitplot.annoy.Index.kneighbors")
        :   Batch neighbor queries (sklearn-like).

        Notes

        Exclusions are applied deterministically in the order returned by the backend.
        If `exclude_self=True` and no exact `0.0` distance candidate is returned
        in the first position, no additional self-exclusion is applied.

    query\_vectors\_by\_item(**item**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **dtype=<class 'numpy.float32'>**, **output\_type='vector'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_vectors.py#L400)[#](#scikitplot.annoy.Index.query_vectors_by_item "Link to this definition")
    :   Query neighbor vectors by stored item id.

        This is a convenience wrapper over [`query_by_item`](#scikitplot.annoy.Index.query_by_item "scikitplot.annoy.Index.query_by_item") that materializes
        vectors using the backend’s `get_item`.

        Parameters:
        :   ****item, n\_neighbors, search\_k, include\_distances, exclude\_self, exclude\_item\_ids****
            :   See [`query_by_item`](#scikitplot.annoy.Index.query_by_item "scikitplot.annoy.Index.query_by_item").

            ****ensure\_all\_finite, copy****
            :   See [`query_by_vector`](#scikitplot.annoy.Index.query_by_vector "scikitplot.annoy.Index.query_by_vector").

            ****dtype****numpy dtype, default=numpy.float32
            :   Output dtype for the returned vectors.

            ****output\_type****{‘item’, ‘vector’}, default=’vector’
            :   If ‘vector’, return neighbor vectors. If ‘item’, return neighbor ids.

        Returns:
        :   ****vectors****numpy.ndarray of shape (n\_neighbors, f)
            :   Neighbor vectors.

            ****(vectors, distances)****tuple
            :   Returned when `include_distances=True`.

        Parameters:
        :   * ****item**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****n\_neighbors**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****include\_distances**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_self**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_item\_ids**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****ensure\_all\_finite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'allow-nan'****]**)
            * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****output\_type**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'item'****,** **'vector'****]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")]

        > **See also**
        > [`query_vectors_by_vector`](#scikitplot.annoy.Index.query_vectors_by_vector "scikitplot.annoy.Index.query_vectors_by_vector")
        :   Vector query returning vectors (or ids).

    query\_vectors\_by\_vector(**vector**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **dtype=<class 'numpy.float32'>**, **output\_type='vector'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_vectors.py#L583)[#](#scikitplot.annoy.Index.query_vectors_by_vector "Link to this definition")
    :   Query neighbor vectors by an explicit vector.

        Convenience wrapper over [`query_by_vector`](#scikitplot.annoy.Index.query_by_vector "scikitplot.annoy.Index.query_by_vector"). By default it returns
        vectors; set `output_type='item'` to return neighbor ids instead.

        Parameters:
        :   ****vector, n\_neighbors, search\_k, include\_distances, exclude\_self, exclude\_item\_ids,****
            :   See [`query_by_item`](#scikitplot.annoy.Index.query_by_item "scikitplot.annoy.Index.query_by_item").

            ****ensure\_all\_finite, copy****
            :   See [`query_by_vector`](#scikitplot.annoy.Index.query_by_vector "scikitplot.annoy.Index.query_by_vector").

            ****dtype****numpy dtype, default=numpy.float32
            :   Output dtype for the returned vectors.

            ****output\_type****{‘item’, ‘vector’}, default=’vector’
            :   If ‘vector’, return neighbor vectors. If ‘item’, return neighbor ids.

        Returns:
        :   ****neighbors****numpy.ndarray
            :   If `output_type='vector'`, an array of shape `(n_neighbors, f)`.
                If `output_type='item'`, an array of shape `(n_neighbors,)`.

            ****(neighbors, distances)****tuple
            :   Returned when `include_distances=True`.

        Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****n\_neighbors**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****search\_k**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****include\_distances**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_self**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****exclude\_item\_ids**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****ensure\_all\_finite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** [**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'allow-nan'****]**)
            * ****copy**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****output\_type**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'item'****,** **'vector'****]**)

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")]

        > **See also**
        > [`query_vectors_by_item`](#scikitplot.annoy.Index.query_vectors_by_item "scikitplot.annoy.Index.query_vectors_by_item")
        :   Item id query returning vectors.

        [`query_by_vector`](#scikitplot.annoy.Index.query_by_vector "scikitplot.annoy.Index.query_by_vector")
        :   Per-query id interface.

    random\_state[#](#scikitplot.annoy.Index.random_state "Link to this definition")
    :   Alias of `seed` (scikit-learn convention).

    rebuild(**metric=None**, **\***, **on\_disk\_path=None**, **n\_trees=None**, **n\_jobs=-1**) → [Annoy](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")[#](#scikitplot.annoy.Index.rebuild "Link to this definition")
    :   Return a new Annoy index rebuilt from the current index contents.

        This helper is intended for deterministic, explicit rebuilds when changing
        structural constraints such as the metric (Annoy uses metric-specific C++
        index types). The source index is not mutated.

        Parameters:
        :   ****metric****{‘angular’, ‘euclidean’, ‘manhattan’, ‘dot’, ‘hamming’} or None, optional
            :   Metric for the new index. If None, reuse the current metric.

            ****on\_disk\_path****path-like or None, optional
            :   Optional on-disk build path for the new index.

                Safety: the source object’s on\_disk\_path is never carried over implicitly.
                If on\_disk\_path is provided and is string-equal to the source’s configured
                path, it is ignored to avoid accidental overwrite/truncation hazards.

            ****n\_trees****int or None, optional, default=None
            :   If provided, build the new index with this number of trees (or -1 for
                Annoy’s internal auto mode). If None, reuse the source’s tree count only
                when the source index is already built; otherwise do not build.

            ****n\_jobs****int, optional, default=-1
            :   Number of threads to use while building (-1 means “auto”).

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   A new Annoy instance containing the same items (and label metadata if present).

        > **See also**
        > [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")
        :   Build trees after adding items (on-disk backed).

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`get_params`](#scikitplot.annoy.Index.get_params "scikitplot.annoy.Index.get_params")
        :   Read constructor parameters.

        [`set_params`](#scikitplot.annoy.Index.set_params "scikitplot.annoy.Index.set_params")
        :   Update estimator parameters (use with `fit(X)` when refitting from data).

        [`serialize`](#scikitplot.annoy.Index.serialize "scikitplot.annoy.Index.serialize"), [`deserialize`](#scikitplot.annoy.Index.deserialize "scikitplot.annoy.Index.deserialize")
        :   Persist / restore indexes; canonical restores rebuild deterministically.

        `__sklearn_clone__`
        :   Unfitted clone hook (no fitted state).

        Notes

        `rebuild(metric=...)` is deterministic and preserves item ids (0..n\_items-1).
        by copying item vectors from the current fitted index into a new instance
        and rebuilding trees.

        Use `rebuild()` when you want to change `metric` while **reusing the already-stored
        vectors** (e.g., you do not want to re-read or re-materialize `X`, or you loaded an
        index from disk and only have access to its stored vectors).

    repr\_info(**include\_n\_items=True**, **include\_n\_trees=True**, **include\_memory=None**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.annoy.Index.repr_info "Link to this definition")
    :   Return a dict-like string representation with optional extra fields.

        Unlike `__repr__`, this method can include additional fields on demand.
        Note that `include_memory=True` may be expensive for large indexes.
        Memory is calculated after [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build").

    save(**fn**, **prefault=None**)[#](#scikitplot.annoy.Index.save "Link to this definition")
    :   Persist the index to a binary file on disk.

        Parameters:
        :   ****fn****str
            :   Path to the output file. Existing files will be overwritten.

            ****prefault****bool or None, optional, default=None
            :   If True, aggressively fault pages into memory during save.
                If None, use the stored [`prefault`](#scikitplot.annoy.Index.prefault "scikitplot.annoy.Index.prefault") value.
                Primarily useful on some platforms for very large indexes.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   IOError
            :   If the file cannot be written.

            RuntimeError
            :   If the index is not initialized or save fails.

        > **See also**
        > [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load")
        :   Load an index from disk.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        [`serialize`](#scikitplot.annoy.Index.serialize "scikitplot.annoy.Index.serialize")
        :   Snapshot to bytes for in-memory persistence.

        [`deserialize`](#scikitplot.annoy.Index.deserialize "scikitplot.annoy.Index.deserialize")
        :   Restore an index from a serialized byte string.

        Notes

        The output file will be overwritten if it already exists.
        Use prefault=None to fall back to the stored [`prefault`](#scikitplot.annoy.Index.prefault "scikitplot.annoy.Index.prefault") setting.

    save\_bundle(**manifest\_filename='manifest.json'**, **index\_filename='index.ann'**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_io.py#L164)[#](#scikitplot.annoy.Index.save_bundle "Link to this definition")
    :   Save a **directory bundle** containing metadata + the index file.

        The bundle contains:
        - `manifest.json`: metadata payload produced by [`to_json`](#scikitplot.annoy.Index.to_json "scikitplot.annoy.Index.to_json")
        - `index.ann`: Annoy index produced by [`save_index`](#scikitplot.annoy.Index.save_index "scikitplot.annoy.Index.save_index")

        Parameters:
        :   ****manifest\_filename****
            :   Filename for the metadata manifest inside the directory.

            ****index\_filename****
            :   Filename for the Annoy index inside the directory.

            ****prefault****
            :   Forwarded to [`save_index`](#scikitplot.annoy.Index.save_index "scikitplot.annoy.Index.save_index").

        Raises:
        :   TypeError
            :   If [`to_json`](#scikitplot.annoy.Index.to_json "scikitplot.annoy.Index.to_json") is not available (compose with [`MetaMixin`](scikitplot.annoy.MetaMixin.html#scikitplot.annoy.MetaMixin "scikitplot.annoy._mixins._meta.MetaMixin")).

            OSError
            :   On filesystem failures.

        Parameters:
        :   * ****manifest\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****index\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    save\_index(**path**, **\***, **prefault=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_io.py#L70)[#](#scikitplot.annoy.Index.save_index "Link to this definition")
    :   Persist the Annoy index to disk.

        Parameters:
        :   ****path****str or os.PathLike
            :   Destination path for the Annoy index file.

            ****prefault****
            :   Forwarded to the backend. If `None`, the backend default is used.

        Raises:
        :   TypeError
            :   If the backend does not provide `save(path, prefault=...)`.

            OSError
            :   For filesystem-level failures.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **PathLike****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****prefault**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

    schema\_version[#](#scikitplot.annoy.Index.schema_version "Link to this definition")
    :   Serialization/compatibility strategy marker sentinel value.

        This does not change the Annoy on-disk format, but it controls how the index
        is snapshotted in pickles.

        Returns:
        :   int
            :   Current schema version marker.

        Notes

        * `0` or `1`: pickle stores a `portable-v1` snapshot (fast restore, ABI-checked).
        * `2`: pickle stores `canonical-v1` (portable; restores by rebuilding deterministically).
        * `>=3`: pickle stores both portable and canonical; canonical is used as a fallback.

    seed[#](#scikitplot.annoy.Index.seed "Link to this definition")
    :   Random seed override (scikit-learn compatible). None means use Annoy default seed.

    serialize(**format=None**) → [bytes](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")[#](#scikitplot.annoy.Index.serialize "Link to this definition")
    :   Serialize the built in-memory index into a byte string.

        Parameters:
        :   ****format****{“native”, “portable”, “canonical”} or None, optional, default=None
            :   Serialization format.

                * “native” (legacy): raw Annoy memory snapshot. Fastest, but
                  only compatible when the ABI matches exactly.
                * “portable”: prepend a small compatibility header (version,
                  endianness, sizeof checks, metric, f) so deserialization fails
                  loudly on mismatches.
                * “canonical”: rebuildable wire format storing item vectors + build
                  parameters. Portable across ABIs (within IEEE-754 float32) and
                  restores by rebuilding trees deterministically.

        Returns:
        :   ****data****bytes
            :   Opaque binary blob containing the Annoy index.

        Raises:
        :   RuntimeError
            :   If the index is not initialized or serialization fails.

            OverflowError
            :   If the serialized payload is too large to fit in a Python bytes object.

        > **See also**
        > [`deserialize`](#scikitplot.annoy.Index.deserialize "scikitplot.annoy.Index.deserialize")
        :   Restore an index from a serialized byte string.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        Notes

        “Portable” blobs are the native snapshot with additional compatibility guards.
        They are not a cross-architecture wire format.

        “Canonical” blobs trade load time for portability: deserialization rebuilds
        the index with `n_jobs=1` for deterministic reconstruction.

    set\_params(**\*\*params**) → [Annoy](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")[#](#scikitplot.annoy.Index.set_params "Link to this definition")
    :   Set estimator-style parameters (scikit-learn compatibility).

        Parameters:
        :   ****\*\*params****
            :   Keyword parameters to set. Unknown keys raise `ValueError`.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   ValueError
            :   If an unknown parameter name is provided.

            TypeError
            :   If parameter names are not strings or types are invalid.

        > **See also**
        > [`get_params`](#scikitplot.annoy.Index.get_params "scikitplot.annoy.Index.get_params")
        :   Return estimator-style parameters.

        Notes

        Changing structural parameters (notably `metric`) on an already
        initialized index resets the index deterministically (drops all items,
        trees, and label metadata ([`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") and [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y")). Refit/rebuild is required before querying.

        This behavior matches scikit-learn expectations: `set_params` may be
        called at any time, but parameter changes that affect learned state
        invalidate the fitted model.

    set\_seed(**seed=None**)[#](#scikitplot.annoy.Index.set_seed "Link to this definition")
    :   Set the random seed used for tree construction.

        Parameters:
        :   ****seed****int or None, optional, default=None
            :   Non-negative integer seed. If called before the index is constructed,
                the seed is stored and applied when the C++ index is created.
                Seed value `0` resets to Annoy’s core default seed (with a [`UserWarning`](https://docs.python.org/3/library/exceptions.html#UserWarning "(in Python v3.14)")).

                * If omitted (or None, NULL), the seed is set to Annoy’s default seed.
                * If 0, clear any pending override and reset to Annoy’s default seed
                  (a [`UserWarning`](https://docs.python.org/3/library/exceptions.html#UserWarning "(in Python v3.14)") is emitted).

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`seed`](#scikitplot.annoy.Index.seed "scikitplot.annoy.Index.seed")
        :   Parameter attribute (int | None).

        Notes

        Annoy is deterministic by default. Setting an explicit seed is useful for
        reproducible experiments and debugging.

    set\_verbose(**verbosity=1**)[#](#scikitplot.annoy.Index.set_verbose "Link to this definition")
    :   Set the verbosity level (callable setter).

        This method exists to preserve a callable interface while keeping the
        parameter name `verbose` available as an attribute for scikit-learn
        compatibility.

        Parameters:
        :   ****verbosity****int, optional, default=1
            :   Verbosity level. Values are clamped to the range `[-2, 2]`.
                `level >= 1` enables Annoy’s verbose logging; `level <= 0` disables it.
                Logging level inspired by gradient-boosting libraries:

                * `<= 0` : quiet (warnings only)
                * `1` : info (Annoy’s `verbose=True`)
                * `>= 2` : debug (currently same as info, reserved for future use)

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`verbose`](#scikitplot.annoy.Index.verbose "scikitplot.annoy.Index.verbose")
        :   Parameter attribute (int | None).

        [`set_verbosity`](#scikitplot.annoy.Index.set_verbosity "scikitplot.annoy.Index.set_verbosity")
        :   Alias of [`set_verbose`](#scikitplot.annoy.Index.set_verbose "scikitplot.annoy.Index.set_verbose").

        [`get_params`](#scikitplot.annoy.Index.get_params "scikitplot.annoy.Index.get_params"), [`set_params`](#scikitplot.annoy.Index.set_params "scikitplot.annoy.Index.set_params")
        :   Estimator parameter API.

    set\_verbosity(**level=1**)[#](#scikitplot.annoy.Index.set_verbosity "Link to this definition")
    :   Alias of [`set_verbose`](#scikitplot.annoy.Index.set_verbose "scikitplot.annoy.Index.set_verbose").

        > **See also**
        > [`verbose`](#scikitplot.annoy.Index.verbose "scikitplot.annoy.Index.verbose")
        :   Parameter attribute (int | None).

        [`set_verbose`](#scikitplot.annoy.Index.set_verbose "scikitplot.annoy.Index.set_verbose")
        :   Set the verbosity level (callable setter).

    to\_bytes(**format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_io.py#L261)[#](#scikitplot.annoy.Index.to_bytes "Link to this definition")
    :   Serialize the built index to bytes (backend `serialize`).

        Parameters:
        :   ****format****{“native”, “portable”, “canonical”} or None, optional, default=None
            :   Serialization format. If `None` used `"canonical"`

                * “native” (legacy): raw Annoy memory snapshot. Fastest, but
                  only compatible when the ABI matches exactly.
                * “portable”: prepend a small compatibility header (version,
                  endianness, sizeof checks, metric, f) so deserialization fails
                  loudly on mismatches.
                * “canonical”: rebuildable wire format storing item vectors + build
                  parameters. Portable across ABIs (within IEEE-754 float32) and
                  restores by rebuilding trees deterministically.

        Returns:
        :   data
            :   Serialized index bytes.

        Raises:
        :   TypeError
            :   If the backend does not provide `serialize`.

            RuntimeError
            :   If serialization fails.

            TypeError
            :   If the backend returns non-bytes-like data.

        Return type:
        :   [bytes](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")

        Notes

        “Portable” blobs are the native snapshot with additional compatibility guards.
        They are not a cross-architecture wire format.

        “Canonical” blobs trade load time for portability: deserialization rebuilds
        the index with `n_jobs=1` for deterministic reconstruction.

    to\_json(**path=None**, **\***, **indent=2**, **sort\_keys=True**, **ensure\_ascii=False**, **include\_info=True**, **strict=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_meta.py#L376)[#](#scikitplot.annoy.Index.to_json "Link to this definition")
    :   Serialize [`to_metadata`](#scikitplot.annoy.Index.to_metadata "scikitplot.annoy.Index.to_metadata") to JSON.

        Parameters:
        :   ****path****
            :   If provided, write the JSON to this path atomically.

            ****indent****
            :   Indentation level passed to [`json.dumps`](https://docs.python.org/3/library/json.html#json.dumps "(in Python v3.14)").

            ****sort\_keys****
            :   If True, sort keys for stable output.

            ****ensure\_ascii****
            :   If True, escape non-ASCII characters.

            ****include\_info, strict****
            :   Forwarded to [`to_metadata`](#scikitplot.annoy.Index.to_metadata "scikitplot.annoy.Index.to_metadata").

        Returns:
        :   json\_str
            :   JSON representation of the metadata.

        Raises:
        :   TypeError
            :   If the exported metadata contains non-JSON-serializable values.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****indent**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****sort\_keys**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****ensure\_ascii**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****include\_info**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        > **See also**
        > [`from_json`](#scikitplot.annoy.Index.from_json "scikitplot.annoy.Index.from_json")


        [`to_metadata`](#scikitplot.annoy.Index.to_metadata "scikitplot.annoy.Index.to_metadata")

    to\_metadata(**\***, **include\_info=True**, **strict=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_meta.py#L153)[#](#scikitplot.annoy.Index.to_metadata "Link to this definition")
    :   Export a serializable metadata payload.

        Parameters:
        :   ****include\_info****
            :   If True, include an `info()` mapping when available.

            ****strict****
            :   If True, failures in optional `info()` propagation raise.

        Returns:
        :   metadata
            :   A JSON/YAML-serializable mapping containing configuration parameters
                and optional info.

        Raises:
        :   RuntimeError
            :   If `_META_SCHEMA_VERSION` is missing on the concrete class.

            TypeError
            :   If `get_params` does not return a mapping.

            TypeError
            :   If neither the instance nor the backend implements `get_params`.

            TypeError
            :   If a persistence knob (e.g., `pickle_mode`) is not JSON/YAML-serializable.

        Parameters:
        :   * ****include\_info**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   **IndexMetadata**

        > **See also**
        > [`to_json`](#scikitplot.annoy.Index.to_json "scikitplot.annoy.Index.to_json")


        [`to_yaml`](#scikitplot.annoy.Index.to_yaml "scikitplot.annoy.Index.to_yaml")

    to\_numpy(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_ndarray.py#L571)[#](#scikitplot.annoy.Index.to_numpy "Link to this definition")
    :   Export vectors to a dense NumPy array.

        > **See also**
        > [`get_item_vectors`](#scikitplot.annoy.Index.get_item_vectors "scikitplot.annoy.Index.get_item_vectors")
        :   Dense export with optional id output.

        [`iter_item_vectors`](#scikitplot.annoy.Index.iter_item_vectors "scikitplot.annoy.Index.iter_item_vectors")
        :   Streaming export.

        [`to_scipy_csr`](#scikitplot.annoy.Index.to_scipy_csr "scikitplot.annoy.Index.to_scipy_csr")
        :   Export as SciPy CSR.

        [`to_pandas`](#scikitplot.annoy.Index.to_pandas "scikitplot.annoy.Index.to_pandas")
        :   Export as pandas DataFrame.

        Notes

        This is an alias of [`get_item_vectors`](#scikitplot.annoy.Index.get_item_vectors "scikitplot.annoy.Index.get_item_vectors") with `return_ids=False`.

        Parameters:
        :   * ****ids**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****stop**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****n\_rows**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****validate\_vector\_len**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    to\_pandas(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **id\_location='index'**, **id\_name='id'**, **columns=None**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_ndarray.py#L681)[#](#scikitplot.annoy.Index.to_pandas "Link to this definition")
    :   Export vectors to a pandas `DataFrame`.

        Parameters:
        :   ****ids, start, stop, n\_rows****
            :   Selection controls. See [`get_item_vectors`](#scikitplot.annoy.Index.get_item_vectors "scikitplot.annoy.Index.get_item_vectors").

            ****dtype****numpy dtype, default=numpy.float32
            :   Output dtype.

            ****id\_location****{‘index’, ‘column’, ‘both’, ‘none’}, default=’index’
            :   Where to place ids in the output.

            ****id\_name****str, default=’id’
            :   Name used for the id column / index.

            ****columns****sequence of str, optional
            :   Column names for vector dimensions. If None, uses `feature_names_in_`
                when present and length matches `f`; otherwise uses
                `feature_0..feature_{f-1}`.

            ****validate\_vector\_len****bool, default=True
            :   If True, verify every fetched vector has length `f`.

        Returns:
        :   ****df****pandas.DataFrame
            :   DataFrame with shape `(n_rows, f)` plus optional id metadata.

        Raises:
        :   ImportError
            :   If pandas is not installed.

            ValueError
            :   If `id_location` is invalid or `columns` length mismatches `f`.

        Parameters:
        :   * ****ids**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****stop**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****n\_rows**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****id\_location**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'index'****,** **'column'****,** **'both'****,** **'none'****]**)
            * ****id\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****columns**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****validate\_vector\_len**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

        > **See also**
        > [`to_numpy`](#scikitplot.annoy.Index.to_numpy "scikitplot.annoy.Index.to_numpy")
        :   Dense NumPy export.

        [`to_scipy_csr`](#scikitplot.annoy.Index.to_scipy_csr "scikitplot.annoy.Index.to_scipy_csr")
        :   Export as SciPy CSR.

    to\_scipy\_csr(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_ndarray.py#L642)[#](#scikitplot.annoy.Index.to_scipy_csr "Link to this definition")
    :   Export vectors as a SciPy CSR matrix.

        Returns:
        :   ****X****scipy.sparse.csr\_matrix
            :   CSR matrix with shape `(n_rows, f)`.

        Raises:
        :   ImportError
            :   If SciPy is not installed.

        Parameters:
        :   * ****ids**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****stop**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****n\_rows**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****validate\_vector\_len**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

        > **See also**
        > [`to_numpy`](#scikitplot.annoy.Index.to_numpy "scikitplot.annoy.Index.to_numpy")
        :   Dense NumPy export.

        [`to_pandas`](#scikitplot.annoy.Index.to_pandas "scikitplot.annoy.Index.to_pandas")
        :   Export as pandas DataFrame.

    to\_yaml(**path=None**, **\***, **include\_info=True**, **strict=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/annoy/_mixins/_meta.py#L438)[#](#scikitplot.annoy.Index.to_yaml "Link to this definition")
    :   Serialize [`to_metadata`](#scikitplot.annoy.Index.to_metadata "scikitplot.annoy.Index.to_metadata") to YAML (requires PyYAML).

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****include\_info**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    transform(**X**, **\***, **n\_neighbors=5**, **search\_k=-1**, **include\_distances=False**, **return\_labels=False**, **y\_fill\_value=None**, **input\_type='vector'**, **output\_type='vector'**, **exclude\_self=False**, **exclude\_items=None**, **missing\_value=None**)[#](#scikitplot.annoy.Index.transform "Link to this definition")
    :   Transform queries into nearest-neighbor results (ids or vectors; optional distances / labels).

        Parameters:
        :   ****X****array-like
            :   Query inputs. The expected shape/type depends on `input_type`:

                * input\_type=’item’ : X must be a 1D sequence of item ids.
                * input\_type=’vector’: X must be a 2D array-like of shape (n\_queries, f).

            ****n\_neighbors****int or None, default=5
            :   Number of neighbors to retrieve for each query. For backwards compatibility
                this keyword is accepted, but it must match the estimator parameter
                `n_neighbors` (STRICT schema).

            ****search\_k****int, default=-1
            :   Search parameter passed to Annoy (-1 uses Annoy’s default).

            ****include\_distances****bool, default=False
            :   If True, also return per-neighbor distances.

            ****return\_labels****bool, default=False
            :   If True, also return per-neighbor labels resolved from [`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") (or [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y") cache).

            ****y\_fill\_value****object, default=None
            :   Value used when label metadata is unset or missing an entry for a neighbor id.

            ****input\_type****{‘vector’, ‘item’}, default=’vector’
            :   Controls how X is interpreted.

            ****output\_type****{‘vector’, ‘item’}, default=’vector’
            :   Controls what neighbors are returned.

                * output\_type=’item’: return neighbor ids.
                * output\_type=’vector’: return neighbor vectors.

            ****exclude\_self****bool, default=False
            :   If True, exclude the query item id from results. Only valid when
                input\_type=’item’.

            ****exclude\_items****sequence of int or None, default=None
            :   Explicit neighbor ids to exclude from results.

            ****missing\_value****float or None, default=None
            :   If not None, imputes missing entries in X (None values in dense rows;
                missing keys / None values in dict rows). If None, missing entries raise.

        Returns:
        :   ****neighbors****list
            :   Neighbor results for each query.
                - output\_type=’item’ : list of list of int
                - output\_type=’vector’: list of list of list of float

            ****(neighbors, distances)****tuple
            :   Returned when include\_distances=True.

            ****(neighbors, labels)****tuple
            :   Returned when return\_labels=True.

            ****(neighbors, distances, labels)****tuple
            :   Returned when include\_distances=True and return\_labels=True.

        > **See also**
        > [`get_nns_by_item`](#scikitplot.annoy.Index.get_nns_by_item "scikitplot.annoy.Index.get_nns_by_item")
        :   Neighbor search by item id.

        [`get_nns_by_vector`](#scikitplot.annoy.Index.get_nns_by_vector "scikitplot.annoy.Index.get_nns_by_vector")
        :   Neighbor search by query vector.

        [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`fit_transform`](#scikitplot.annoy.Index.fit_transform "scikitplot.annoy.Index.fit_transform")
        :   Estimator-style APIs.

        Notes

        * Excluding self is performed by matching neighbor ids to the query id (not by checking distance values).
        * For input\_type=’vector’, exclude\_self=True is an error; use exclude\_items for explicit, deterministic filtering.
        * If exclusions prevent returning exactly `n_neighbors` results, this method raises ValueError.

        Examples

        Try it in your browser!

        Item queries (exclude the query id itself):

        ```
        >>> idx.transform([10, 20], input_type='item', output_type='item', n_neighbors=5, exclude_self=True)

        ```

        Vector queries (exclude explicit ids):

        ```
        >>> idx.transform(X_query, input_type='vector', output_type='item', n_neighbors=5, exclude_items=[10, 20])

        ```

        Return neighbor vectors:

        ```
        >>> idx.transform([10], input_type='item', output_type='vector', n_neighbors=5, exclude_self=True)

        ```
        Go BackOpen In Tab

    unbuild()[#](#scikitplot.annoy.Index.unbuild "Link to this definition")
    :   Discard the current forest, allowing new items to be added.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")
        :   Rebuild the forest after adding new items.

        [`rebuild`](#scikitplot.annoy.Index.rebuild "scikitplot.annoy.Index.rebuild")
        :   Return a new Annoy index rebuilt from the current index contents.

        [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`add_item`](#scikitplot.annoy.Index.add_item "scikitplot.annoy.Index.add_item")
        :   Add items (only valid when no trees are built).

        Notes

        After calling [`unbuild`](#scikitplot.annoy.Index.unbuild "scikitplot.annoy.Index.unbuild"), you must call [`build`](#scikitplot.annoy.Index.build "scikitplot.annoy.Index.build")
        again before running nearest-neighbour queries.

    unload()[#](#scikitplot.annoy.Index.unload "Link to this definition")
    :   Unmap any memory-mapped file backing this index.

        Returns:
        :   [`Annoy`](scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`load`](#scikitplot.annoy.Index.load "scikitplot.annoy.Index.load")
        :   Memory-map an on-disk index into this object.

        [`on_disk_build`](#scikitplot.annoy.Index.on_disk_build "scikitplot.annoy.Index.on_disk_build")
        :   Configure on-disk build mode.

        Notes

        This releases OS-level resources associated with the mmap,
        but keeps the Python object alive.

    verbose[#](#scikitplot.annoy.Index.verbose "Link to this definition")
    :   set\_verbose().

        Type:
        :   Verbosity level in [-2, 2] or None (unset). Callable setter

    y[#](#scikitplot.annoy.Index.y "Link to this definition")
    :   list[object] | None
        :   Dense labels/targets aligned to item ids `0..n_items-1`.

        Returns:
        :   ****y****list[object] | None
            :   A Python list of length `n_items` (missing labels are `None`), or
                `None` if no label metadata is available.

        Raises:
        :   TypeError
            :   If assigned a dict. Use [`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") for dict mappings.

            ValueError
            :   If assigned a sequence whose length does not match `n_items` when the
                index already contains items.

        > **See also**
        > [`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map")
        :   Canonical sparse mapping of labels by item id.

        [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit"), [`fit_transform`](#scikitplot.annoy.Index.fit_transform "scikitplot.annoy.Index.fit_transform")
        :   Set labels while fitting.

        Notes

        * [`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") is the canonical storage. [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y") is a convenience cache
          that may be cleared and materialized from [`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") on demand.
        * Setting `y` replaces [`y_map`](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map") deterministically.

        Type:
        :   [y](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y")

    y\_map[#](#scikitplot.annoy.Index.y_map "Link to this definition")
    :   dict[int, object] | None
        :   Sparse mapping `{item_id -> label/target}`.

        Returns:
        :   ****y\_map****dict[int, object] | None
            :   Mapping of labels keyed by item id, or `None` if unset.

        Raises:
        :   TypeError
            :   If assigned a non-dict (other than `None`).

            ValueError
            :   If any key is negative, not an integer, or (when the index already contains
                items) out of range.

        > **See also**
        > [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y")
        :   Dense cache aligned to item ids.

        [`fit`](#scikitplot.annoy.Index.fit "scikitplot.annoy.Index.fit"), [`fit_transform`](#scikitplot.annoy.Index.fit_transform "scikitplot.annoy.Index.fit_transform")
        :   Set labels while fitting.

        [`transform`](#scikitplot.annoy.Index.transform "scikitplot.annoy.Index.transform")
        :   Use `return_labels=True` to return labels.

        Notes

        * This is the canonical label metadata storage.
        * Missing keys imply “no label”; when [`y`](#scikitplot.annoy.Index.y "scikitplot.annoy.Index.y") is materialized, missing ids
          become `None`.

        Type:
        :   [y\_map](#scikitplot.annoy.Index.y_map "scikitplot.annoy.Index.y_map")