# Annoy[#](#annoy "Link to this heading")

class scikitplot.annoy.Annoy[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/cexternals/_annoy/__init__.py#L)[#](#scikitplot.annoy.Annoy "Link to this definition")
:   Compiled with GCC/Clang. Using 512-bit AVX instructions.

    Approximate Nearest Neighbors index (Annoy) with a small, lazy C-extension wrapper.

    ```
    >>> Annoy(
    >>>     f=None,
    >>>     metric=None,
    >>>     *,
    >>>     n_trees=-1,  # None = -1 = auto
    >>>     n_neighbors=5,  # None = 5
    >>>     on_disk_path=None,
    >>>     prefault=None,
    >>>     seed=None,
    >>>     verbose=None,
    >>>     schema_version=None,
    >>>     n_jobs=None,  # None = -1
    >>>     l1_ratio = 0.0,  # None = 0.0 Future
    >>> )

    ```

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
              [`metric`](#scikitplot.annoy.Annoy.metric "scikitplot.annoy.Annoy.metric") later before construction, or it will default to
              `'angular'` on first [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item").

        ****n\_trees****int, default=-1
        :   Number of trees to build. If -1, auto-selects based on dimension.
            More trees = better accuracy but slower queries and more memory.

        ****n\_neighbors****int, default=5
        :   Non-negative integer Number of neighbors to retrieve for each query.

        ****on\_disk\_path****str or None, optional, default=None
        :   If provided, configures the path for on-disk building. When the underlying
            index exists, this enables on-disk build mode (equivalent to calling
            [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build") with the same filename).

            Note: Annoy core truncates the target file when enabling on-disk build.
            This wrapper treats `on_disk_path` as strictly equivalent to calling
            [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build") with the same filename (truncate allowed).

            In lazy mode (`f==0` and/or `metric is None`), activation occurs once
            the underlying C++ index is created.

        ****prefault****bool or None, optional, default=None
        :   If True, request page-faulting index pages into memory when loading
            (when supported by the underlying platform/backing).
            If None, treated as `False` (reset to default).

        ****seed****int or None, optional, default=None
        :   Non-negative integer seed. If set before the index is constructed,
            the seed is stored and applied when the C++ index is created.
            Seed value `0` is treated as "use Annoy’s deterministic default seed"
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

        ****n\_jobs****int or None, default=None
        :   Number of threads. If -1, uses all available cores.
            If None, treated as `-1`.

    Attributes:
    :   [`f`](#scikitplot.annoy.Annoy.f "scikitplot.annoy.Annoy.f")int, default=0
        :   Vector dimension.

        [`metric`](#scikitplot.annoy.Annoy.metric "scikitplot.annoy.Annoy.metric"){‘angular’, ‘euclidean’, ‘manhattan’, ‘dot’, ‘hamming’}, default=”angular”
        :   Distance metric for the index.

        [`n_neighbors`](#scikitplot.annoy.Annoy.n_neighbors "scikitplot.annoy.Annoy.n_neighbors")int, default=5
        :   Number of neighbors returned by transform/fit\_transform (SLEP013; strict schema).

        [`on_disk_path`](#scikitplot.annoy.Annoy.on_disk_path "scikitplot.annoy.Annoy.on_disk_path")str or None, optional, default=None
        :   Path used for on-disk build/load/save operations.

        [`prefault`](#scikitplot.annoy.Annoy.prefault "scikitplot.annoy.Annoy.prefault")bool, default=False
        :   Default prefault flag stored on the object.

        [`seed`](#scikitplot.annoy.Annoy.seed "scikitplot.annoy.Annoy.seed")int or None, optional, default=None
        :   Random seed override (scikit-learn compatible).

        [`verbose`](#scikitplot.annoy.Annoy.verbose "scikitplot.annoy.Annoy.verbose")int or None, optional, default=None
        :   Verbosity level in [-2, 2] or None (unset).

        [`schema_version`](#scikitplot.annoy.Annoy.schema_version "scikitplot.annoy.Annoy.schema_version")int, default=0
        :   Serialization/compatibility strategy marker sentinel value.

        [`n_features`](#scikitplot.annoy.Annoy.n_features "scikitplot.annoy.Annoy.n_features")int
        :   Alias of `f` (dimension), provided for scikit-learn naming parity.

        [`n_features_out_`](#scikitplot.annoy.Annoy.n_features_out_ "scikitplot.annoy.Annoy.n_features_out_")int
        :   Number of output features produced by transform (SLEP013).

        [`feature_names_in_`](#scikitplot.annoy.Annoy.feature_names_in_ "scikitplot.annoy.Annoy.feature_names_in_")list-like
        :   Input feature names seen during fit (SLEP007).

        [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y")list-like | None, optional, default=None
        :   y : list[object] | None

        [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map")dict | None, optional, default=None
        :   y\_map : dict[int, object] | None

    > **See also**
    > [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item")
    :   Add a vector to the index.

    [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")
    :   Build the forest after adding items.

    [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild")
    :   Remove trees to allow adding more items.

    [`get_nns_by_item`](#scikitplot.annoy.Annoy.get_nns_by_item "scikitplot.annoy.Annoy.get_nns_by_item"), [`get_nns_by_vector`](#scikitplot.annoy.Annoy.get_nns_by_vector "scikitplot.annoy.Annoy.get_nns_by_vector")
    :   Query nearest neighbours.

    [`save`](#scikitplot.annoy.Annoy.save "scikitplot.annoy.Annoy.save"), [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load")
    :   Persist the index to/from disk.

    [`serialize`](#scikitplot.annoy.Annoy.serialize "scikitplot.annoy.Annoy.serialize"), [`deserialize`](#scikitplot.annoy.Annoy.deserialize "scikitplot.annoy.Annoy.deserialize")
    :   Persist the index to/from bytes.

    [`set_seed`](#scikitplot.annoy.Annoy.set_seed "scikitplot.annoy.Annoy.set_seed")
    :   Set the random seed deterministically.

    [`set_verbose`](#scikitplot.annoy.Annoy.set_verbose "scikitplot.annoy.Annoy.set_verbose")
    :   Set verbosity level.

    [`info`](#scikitplot.annoy.Annoy.info "scikitplot.annoy.Annoy.info")
    :   Return a structured summary of the current index.

    Notes

    * Once the underlying C++ index is created, `f` and `metric` are immutable.
      This keeps the object consistent and avoids undefined behavior.
    * The C++ index is created lazily when sufficient information is available:
      when both `f > 0` and `metric` are known, or when an operation that
      requires the index is first executed.
    * If `f == 0`, the dimensionality is inferred from the first non-empty vector
      passed to [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item") and is then fixed for the lifetime of the index.
    * Assigning `None` to [`f`](#scikitplot.annoy.Annoy.f "scikitplot.annoy.Annoy.f") is not supported. Use `0` for lazy
      inference (this matches `Annoy(f=None, ...)` at construction time).
    * If `metric` is omitted while `f > 0`, the current behavior defaults to
      `'angular'` and may emit a [`FutureWarning`](https://docs.python.org/3/library/exceptions.html#FutureWarning "(in Python v3.14)"). To avoid warnings and
      future behavior changes, always pass `metric=...` explicitly.
    * Items must be added **before** calling [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build"). After [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build"), the
      index becomes read-only; to add more items, call [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild"), add items
      again with [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item"), then call [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build") again.
    * Very large indexes can be built directly on disk with [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
      and then memory-mapped with [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load").
    * [`info`](#scikitplot.annoy.Annoy.info "scikitplot.annoy.Annoy.info") returns a structured summary (dimension, metric, counts, and
      optional memory usage) suitable for programmatic inspection.
    * This wrapper stores user configuration (e.g., seed/verbosity) even before the
      C++ index exists and applies it deterministically upon construction.

    Developer Notes:

    * Source of truth:

      * `f` (int) and `metric_id` (enum) describe configuration.
      * `ptr` is NULL when index is not constructed.
    * Invariant:

      * `ptr != NULL` implies `f > 0` and `metric_id != METRIC_UNKNOWN`.

    Examples

    Try it in your browser!
    ```
    >>> from annoy import Annoy, AnnoyIndex

    ```

    High-level API:

    ```
    >>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
    >>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

    ```

    The lifecycle follows the examples in `test.ipynb`:

    1. ****Construct the index****

    ```
    >>> import random; random.seed(0)
    >>> # from annoy import AnnoyIndex
    >>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
    >>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

    ```
    ```
    >>> idx = Annoy(f=3, metric="angular")
    >>> idx.f, idx.metric
    (3, 'angular')

    ```

    If you pass `f=0` the dimension can be inferred on the first
    call to [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item").

    2. ****Add items****

    ```
    >>> idx.add_item(0, [1.0, 0.0, 0.0])
    >>> idx.add_item(1, [0.0, 1.0, 0.0])
    >>> idx.add_item(2, [0.0, 0.0, 1.0])
    >>> idx.get_n_items()
    3

    ```

    3. ****Build the forest****

    ```
    >>> idx.build(n_trees=-1)
    >>> idx.get_n_trees()
    10
    >>> idx.memory_usage()  # byte
    543076

    ```

    After [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build") the index becomes read-only. You can still
    query, save, load and serialize it.

    4. ****Query neighbours****

    By stored item id:

    ```
    >>> idx.get_nns_by_item(0, 5)
    [0, 1, 2, ...]

    ```

    With distances:

    ```
    >>> idx.get_nns_by_item(0, 5, include_distances=True)
    ([0, 1, 2, ...], [0.0, 1.22, 1.26, ...])

    ```

    Or by an explicit query vector:

    ```
    >>> idx.get_nns_by_vector([0.1, 0.2, 0.3], 5, include_distances=True)
    ([103, 71, 160, 573, 672], [...])

    ```

    5. ****Persistence****

    To work with memory-mapped indices on disk:

    ```
    >>> idx.save("annoy_test.annoy")
    >>> idx2 = Annoy(f=100, metric="angular")
    >>> idx2.load("annoy_test.annoy")
    >>> idx2.get_n_items()
    1000

    ```

    Or via raw byte:

    ```
    >>> buf = idx.serialize()
    >>> new_idx = Annoy(f=100, metric="angular")
    >>> new_idx.deserialize(buf)
    >>> new_idx.get_n_items()
    1000

    ```

    You can release OS resources with [`unload`](#scikitplot.annoy.Annoy.unload "scikitplot.annoy.Annoy.unload") and drop the
    current forest with [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild").

    Go BackOpen In Tab

    add\_item(**i**, **vector**)[#](#scikitplot.annoy.Annoy.add_item "Link to this definition")
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
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")
        :   Build the forest after adding items.

        [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild")
        :   Remove trees to allow adding more items.

        [`get_nns_by_item`](#scikitplot.annoy.Annoy.get_nns_by_item "scikitplot.annoy.Annoy.get_nns_by_item"), [`get_nns_by_vector`](#scikitplot.annoy.Annoy.get_nns_by_vector "scikitplot.annoy.Annoy.get_nns_by_vector")
        :   Query nearest neighbours.

        Notes

        Items must be added **before** calling [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build"). After building
        the forest, further calls to [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item") are not supported.

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

    build(**n\_trees=-1**, **n\_jobs=-1**)[#](#scikitplot.annoy.Annoy.build "Link to this definition")
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
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item")
        :   Add vectors before building.

        [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild")
        :   Drop trees to add more items.

        [`rebuild`](#scikitplot.annoy.Annoy.rebuild "scikitplot.annoy.Annoy.rebuild")
        :   Return a new Annoy index rebuilt from the current index contents.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Configure on-disk build mode.

        [`get_nns_by_item`](#scikitplot.annoy.Annoy.get_nns_by_item "scikitplot.annoy.Annoy.get_nns_by_item"), [`get_nns_by_vector`](#scikitplot.annoy.Annoy.get_nns_by_vector "scikitplot.annoy.Annoy.get_nns_by_vector")
        :   Query nearest neighbours.

        [`save`](#scikitplot.annoy.Annoy.save "scikitplot.annoy.Annoy.save"), [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load")
        :   Persist the index to/from disk.

        Notes

        After [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build") completes, the index becomes read-only for queries.
        To add more items, call [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild"), add items, and then rebuild.

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

    deserialize(**byte**, **prefault=None**)[#](#scikitplot.annoy.Annoy.deserialize "Link to this definition")
    :   Restore the index from a serialized byte string.

        Parameters:
        :   ****byte****bytes
            :   Byte string produced by [`serialize`](#scikitplot.annoy.Annoy.serialize "scikitplot.annoy.Annoy.serialize"). Both native (legacy)
                blobs and portable blobs (created with `serialize(format='portable')`)
                are accepted; portable and canonical blobs are auto-detected.
                Canonical blobs restore by rebuilding the index deterministically.

            ****prefault****bool or None, optional, default=None
            :   Accepted for API symmetry with [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load"). If None, the stored
                Ignored for canonical blobs.
                [`prefault`](#scikitplot.annoy.Annoy.prefault "scikitplot.annoy.Annoy.prefault") value is used.

        Returns:
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   IOError
            :   If deserialization fails due to invalid or incompatible data.

            RuntimeError
            :   If the index is not initialized.

        > **See also**
        > [`serialize`](#scikitplot.annoy.Annoy.serialize "scikitplot.annoy.Annoy.serialize")
        :   Create a binary snapshot of the index.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Configure on-disk build mode.

        Notes

        Portable blobs add a small header (version, ABI sizes, endianness, metric, f)
        to ensure incompatible binaries fail loudly and safely. They are not a
        cross-architecture wire format; the payload remains Annoy’s native snapshot.

    f[#](#scikitplot.annoy.Annoy.f "Link to this definition")
    :   Vector dimension.

        Returns:
        :   int
            :   Dimension of each item vector. `0` means unknown / lazy.

        Notes

        * `Annoy(f=None, ...)` is supported at construction time and is treated as `f=0`.
        * `0` (or `None`) means “unknown / lazy”: the first call to [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item")
          will infer `f` from the input vector length and then fix it.

        Changing `f` after the index has been initialized (items added and/or
        trees built) is a **structural** change: the stored items and all tree splits
        depend on the vector dimension.

        For scikit-learn compatibility, assigning a different `f` (or `None`) on
        an already initialized index will deterministically ****reset**** the index (drop
        all items, trees, and label metadata ([`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") and [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y"))). You must call [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit") (or
        [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item") + [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")) again before querying.

    feature\_names\_in\_[#](#scikitplot.annoy.Annoy.feature_names_in_ "Link to this definition")
    :   Input feature names seen during fit (SLEP007). Set only when explicitly provided via fit(…, feature\_names=…).

    fit(**X=None**, **y=None**, **\***, **y\_map=None**, **n\_trees=-1**, **n\_jobs=-1**, **reset=True**, **start\_index=None**, **missing\_value=None**, **feature\_names=None**)[#](#scikitplot.annoy.Annoy.fit "Link to this definition")
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
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`fit_transform`](#scikitplot.annoy.Annoy.fit_transform "scikitplot.annoy.Annoy.fit_transform")
        :   Estimator-style APIs.

        [`transform`](#scikitplot.annoy.Annoy.transform "scikitplot.annoy.Annoy.transform")
        :   Query the built index.

        [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item")
        :   Add one item at a time.

        [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")
        :   Build the forest after manual calls to add\_item.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Configure on-disk build mode.

        [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild")
        :   Remove trees so items can be appended.

        [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map"), [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y")
        :   Stored label metadata (canonical mapping and dense cache).

        [`get_params`](#scikitplot.annoy.Annoy.get_params "scikitplot.annoy.Annoy.get_params"), [`set_params`](#scikitplot.annoy.Annoy.set_params "scikitplot.annoy.Annoy.set_params")
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

    fit\_transform(**X**, **y=None**, **\***, **y\_map=None**, **n\_trees=-1**, **n\_jobs=-1**, **reset=True**, **start\_index=None**, **missing\_value=None**, **feature\_names=None**, **n\_neighbors=None**, **search\_k=-1**, **include\_distances=False**, **return\_labels=False**, **y\_fill\_value=None**)[#](#scikitplot.annoy.Annoy.fit_transform "Link to this definition")
    :   Fit the index and transform X in a single deterministic call.

        This is equivalent to calling [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit") followed by [`transform`](#scikitplot.annoy.Annoy.transform "scikitplot.annoy.Annoy.transform").

        Parameters:
        :   ****X****array-like
            :   Training data / queries. See [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit") and [`transform`](#scikitplot.annoy.Annoy.transform "scikitplot.annoy.Annoy.transform").

            ****y****array-like of shape (n\_samples,), default=None
            :   Optional dense labels/targets aligned to rows of `X`.

            ****y\_map****dict[int, object] or None, default=None
            :   Optional sparse mapping `{item_id -> label/target}`. Provide only one
                of `y` or `y_map`.

        Returns:
        :   ****neighbors****object
            :   The output of [`transform`](#scikitplot.annoy.Annoy.transform "scikitplot.annoy.Annoy.transform") for `X` under the provided query options.

        Raises:
        :   TypeError
            :   If both `y` and `y_map` are provided, or if input types are invalid.

            ValueError
            :   If the index cannot be built deterministically or query options are inconsistent.

        > **See also**
        > [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`transform`](#scikitplot.annoy.Annoy.transform "scikitplot.annoy.Annoy.transform")
        :   Query the built index.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
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

    get\_distance(**i**, **j**) → [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.get_distance "Link to this definition")
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

    get\_feature\_names\_out(**input\_features=None**)[#](#scikitplot.annoy.Annoy.get_feature_names_out "Link to this definition")
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
            :   If called before [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit")/`build`.

            ValueError
            :   If `input_features` is provided but does not match
                [`feature_names_in_`](#scikitplot.annoy.Annoy.feature_names_in_ "scikitplot.annoy.Annoy.feature_names_in_").

    get\_item(**i**) → [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")][#](#scikitplot.annoy.Annoy.get_item "Link to this definition")
    :   Return the stored embedding vector for a given item id.

        Parameters:
        :   ****i****int
            :   Item id (index) previously passed to [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item").

        Returns:
        :   ****vector****list[float]
            :   Stored embedding of length `f`.

        Raises:
        :   RuntimeError
            :   If the index is not initialized.

            IndexError
            :   If `i` is out of range.

    get\_n\_items() → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.get_n_items "Link to this definition")
    :   Return the number of stored items in the index.

        Returns:
        :   ****n\_items****int
            :   Number of items that have been added and are currently addressable.

        Raises:
        :   RuntimeError
            :   If the index is not initialized.

    get\_n\_trees() → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.get_n_trees "Link to this definition")
    :   Return the number of trees in the current forest.

        Returns:
        :   ****n\_trees****int
            :   Number of trees that have been built.

        Raises:
        :   RuntimeError
            :   If the index is not initialized.

    get\_nns\_by\_item(**i**, **n**, **search\_k=-1**, **include\_distances=False**)[#](#scikitplot.annoy.Annoy.get_nns_by_item "Link to this definition")
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
        > [`get_nns_by_vector`](#scikitplot.annoy.Annoy.get_nns_by_vector "scikitplot.annoy.Annoy.get_nns_by_vector")
        :   Query with an explicit query embedding.

    get\_nns\_by\_vector(**vector**, **n**, **search\_k=-1**, **include\_distances=False**)[#](#scikitplot.annoy.Annoy.get_nns_by_vector "Link to this definition")
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
        > [`get_nns_by_item`](#scikitplot.annoy.Annoy.get_nns_by_item "scikitplot.annoy.Annoy.get_nns_by_item")
        :   Query by stored item id.

    get\_params(**deep=True**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.get_params "Link to this definition")
    :   Return estimator-style parameters (scikit-learn compatibility).

        Parameters:
        :   ****deep****bool, optional, default=True
            :   Included for scikit-learn API compatibility. Ignored because Annoy
                does not contain nested estimators.

        Returns:
        :   ****params****dict
            :   Dictionary of stable, user-facing parameters.

        > **See also**
        > [`set_params`](#scikitplot.annoy.Annoy.set_params "scikitplot.annoy.Annoy.set_params")
        :   Set estimator-style parameters.

        [`schema_version`](#scikitplot.annoy.Annoy.schema_version "scikitplot.annoy.Annoy.schema_version")
        :   Controls pickle / snapshot strategy.

        Notes

        This is intended to make Annoy behave like a scikit-learn estimator for
        tools such as [`sklearn.base.clone`](https://scikit-learn.org/dev/modules/generated/sklearn.base.clone.html#sklearn.base.clone "(in scikit-learn v1.10)") and parameter grids.

    info(**include\_n\_items=True**, **include\_n\_trees=True**, **include\_memory=None**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.info "Link to this definition")
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

                Memory usage is computed after [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build") and may be expensive for
                very large indexes.

        Returns:
        :   ****info****dict
            :   Dictionary describing the current index state.

        > **See also**
        > [`serialize`](#scikitplot.annoy.Annoy.serialize "scikitplot.annoy.Annoy.serialize")
        :   Create a binary snapshot of the index.

        [`deserialize`](#scikitplot.annoy.Annoy.deserialize "scikitplot.annoy.Annoy.deserialize")
        :   Restore from a binary snapshot.

        [`save`](#scikitplot.annoy.Annoy.save "scikitplot.annoy.Annoy.save")
        :   Persist the index to disk.

        [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load")
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

    load(**fn**, **prefault=None**)[#](#scikitplot.annoy.Annoy.load "Link to this definition")
    :   Load (mmap) an index from disk into the current object.

        Parameters:
        :   ****fn****str
            :   Path to a file previously created by [`save`](#scikitplot.annoy.Annoy.save "scikitplot.annoy.Annoy.save") or
                [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build").

            ****prefault****bool or None, optional, default=None
            :   If True, fault pages into memory when the file is mapped.
                If None, use the stored [`prefault`](#scikitplot.annoy.Annoy.prefault "scikitplot.annoy.Annoy.prefault") value.
                Primarily useful on some platforms for very large indexes.

        Returns:
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   IOError
            :   If the file cannot be opened or mapped.

            RuntimeError
            :   If the index is not initialized or the file is incompatible.

        > **See also**
        > [`save`](#scikitplot.annoy.Annoy.save "scikitplot.annoy.Annoy.save")
        :   Save the current index to disk.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Build directly using an on-disk backing file.

        [`unload`](#scikitplot.annoy.Annoy.unload "scikitplot.annoy.Annoy.unload")
        :   Release mmap resources.

        Notes

        The in-memory index must have been constructed with the same dimension
        and metric as the on-disk file.

    memory\_usage() → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.memory_usage "Link to this definition")
    :   Approximate memory usage of the index in bytes.

        Returns:
        :   ****n\_bytes****int or None
            :   Approximate number of bytes used by the index. Returns `None` if the
                index is not initialized or the forest has not been built yet.

        Raises:
        :   RuntimeError
            :   If memory usage cannot be computed.

    metric[#](#scikitplot.annoy.Annoy.metric "Link to this definition")
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
            > * [`cosine`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.cosine.html#scipy.spatial.distance.cosine "(in SciPy v1.19.0.dev)")
            * [`euclidean`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.euclidean.html#scipy.spatial.distance.euclidean "(in SciPy v1.19.0.dev)")
            * [`cityblock`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.cityblock.html#scipy.spatial.distance.cityblock "(in SciPy v1.19.0.dev)")
            * [`dot`](https://scipy.github.io/devdocs/reference/generated/scipy.sparse.coo_array.dot.html#scipy.sparse.coo_array.dot "(in SciPy v1.19.0.dev)")
            * [`hamming`](https://scipy.github.io/devdocs/reference/generated/scipy.spatial.distance.hamming.html#scipy.spatial.distance.hamming "(in SciPy v1.19.0.dev)")

        Notes

        Changing `metric` after the index has been initialized (items added and/or
        trees built) is a **structural** change: the forest and all distances depend on
        the distance function.

        For scikit-learn compatibility, setting a different metric on an already
        initialized index will deterministically ****reset**** the index (drop all items,
        trees, and label metadata ([`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") and [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y")). You must call [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit") (or [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item") +
        [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")) again before querying.

    n\_features[#](#scikitplot.annoy.Annoy.n_features "Link to this definition")
    :   Alias of `f` (dimension), provided for scikit-learn naming parity.

    n\_features\_[#](#scikitplot.annoy.Annoy.n_features_ "Link to this definition")
    :   Read-only alias of `n_features_in_`.

    n\_features\_in\_[#](#scikitplot.annoy.Annoy.n_features_in_ "Link to this definition")
    :   Number of features seen during fit (scikit-learn compatible). Alias of `f` when available.

    n\_features\_out\_[#](#scikitplot.annoy.Annoy.n_features_out_ "Link to this definition")
    :   Number of output features produced by transform (SLEP013). Equals n\_neighbors once fitted.

    n\_neighbors[#](#scikitplot.annoy.Annoy.n_neighbors "Link to this definition")
    :   Number of neighbors returned by transform/fit\_transform (SLEP013; strict schema).

    on\_disk\_build(**fn**)[#](#scikitplot.annoy.Annoy.on_disk_build "Link to this definition")
    :   Configure the index to build using an on-disk backing file.

        Parameters:
        :   ****fn****str
            :   Path to a file that will hold the index during build.
                The file is created or overwritten as needed.

        Returns:
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")
        :   Build trees after adding items (on-disk backed).

        [`rebuild`](#scikitplot.annoy.Annoy.rebuild "scikitplot.annoy.Annoy.rebuild")
        :   Return a new Annoy index rebuilt from the current index contents.

        [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load")
        :   Memory-map the built index.

        [`save`](#scikitplot.annoy.Annoy.save "scikitplot.annoy.Annoy.save")
        :   Persist the built index to disk.

        Notes

        This mode is useful for very large datasets that do not fit
        comfortably in RAM during construction.

    on\_disk\_path[#](#scikitplot.annoy.Annoy.on_disk_path "Link to this definition")
    :   Path used for on-disk build/load/save operations.

        Returns:
        :   str or None
            :   Filesystem path used for on-disk operations, or None if not configured.

            > **See also**
            > * [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
            * [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load")
            * [`unload`](#scikitplot.annoy.Annoy.unload "scikitplot.annoy.Annoy.unload")

        Notes

        * Assigning a string/PathLike to `on_disk_path` configures on-disk build mode
          (equivalent to calling [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build") with the same filename).
        * Note: Annoy core truncates the target file when enabling on-disk build.
          `on_disk_path` is strictly equivalent to calling [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
          with the same filename (truncate allowed).
        * Assigning `None` (or an empty string) clears the configured path, but only
          when no disk-backed index is currently active.
        * Clearing/changing this while an on-disk index is active is disallowed.
          Call [`unload`](#scikitplot.annoy.Annoy.unload "scikitplot.annoy.Annoy.unload") first.

    prefault[#](#scikitplot.annoy.Annoy.prefault "Link to this definition")
    :   Default prefault flag stored on the object.

        This setting is used as the default for per-call `prefault` arguments when
        `prefault` is omitted or set to `None` in methods like [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load") and
        [`save`](#scikitplot.annoy.Annoy.save "scikitplot.annoy.Annoy.save").

        Returns:
        :   bool
            :   Current prefault flag.

        Notes

        * This flag does not retroactively change already-loaded mappings.

    random\_state[#](#scikitplot.annoy.Annoy.random_state "Link to this definition")
    :   Alias of `seed` (scikit-learn convention).

    rebuild(**metric=None**, **\***, **on\_disk\_path=None**, **n\_trees=None**, **n\_jobs=-1**) → [Annoy](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")[#](#scikitplot.annoy.Annoy.rebuild "Link to this definition")
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
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   A new Annoy instance containing the same items (and label metadata if present).

        > **See also**
        > [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")
        :   Build trees after adding items (on-disk backed).

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Configure on-disk build mode.

        [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`get_params`](#scikitplot.annoy.Annoy.get_params "scikitplot.annoy.Annoy.get_params")
        :   Read constructor parameters.

        [`set_params`](#scikitplot.annoy.Annoy.set_params "scikitplot.annoy.Annoy.set_params")
        :   Update estimator parameters (use with `fit(X)` when refitting from data).

        [`serialize`](#scikitplot.annoy.Annoy.serialize "scikitplot.annoy.Annoy.serialize"), [`deserialize`](#scikitplot.annoy.Annoy.deserialize "scikitplot.annoy.Annoy.deserialize")
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

    repr\_info(**include\_n\_items=True**, **include\_n\_trees=True**, **include\_memory=None**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.repr_info "Link to this definition")
    :   Return a dict-like string representation with optional extra fields.

        Unlike `__repr__`, this method can include additional fields on demand.
        Note that `include_memory=True` may be expensive for large indexes.
        Memory is calculated after [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build").

    save(**fn**, **prefault=None**)[#](#scikitplot.annoy.Annoy.save "Link to this definition")
    :   Persist the index to a binary file on disk.

        Parameters:
        :   ****fn****str
            :   Path to the output file. Existing files will be overwritten.

            ****prefault****bool or None, optional, default=None
            :   If True, aggressively fault pages into memory during save.
                If None, use the stored [`prefault`](#scikitplot.annoy.Annoy.prefault "scikitplot.annoy.Annoy.prefault") value.
                Primarily useful on some platforms for very large indexes.

        Returns:
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   IOError
            :   If the file cannot be written.

            RuntimeError
            :   If the index is not initialized or save fails.

        > **See also**
        > [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load")
        :   Load an index from disk.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Configure on-disk build mode.

        [`serialize`](#scikitplot.annoy.Annoy.serialize "scikitplot.annoy.Annoy.serialize")
        :   Snapshot to bytes for in-memory persistence.

        [`deserialize`](#scikitplot.annoy.Annoy.deserialize "scikitplot.annoy.Annoy.deserialize")
        :   Restore an index from a serialized byte string.

        Notes

        The output file will be overwritten if it already exists.
        Use prefault=None to fall back to the stored [`prefault`](#scikitplot.annoy.Annoy.prefault "scikitplot.annoy.Annoy.prefault") setting.

    schema\_version[#](#scikitplot.annoy.Annoy.schema_version "Link to this definition")
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

    seed[#](#scikitplot.annoy.Annoy.seed "Link to this definition")
    :   Random seed override (scikit-learn compatible). None means use Annoy default seed.

    serialize(**format=None**) → [bytes](https://docs.python.org/3/library/stdtypes.html#bytes "(in Python v3.14)")[#](#scikitplot.annoy.Annoy.serialize "Link to this definition")
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
        > [`deserialize`](#scikitplot.annoy.Annoy.deserialize "scikitplot.annoy.Annoy.deserialize")
        :   Restore an index from a serialized byte string.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Configure on-disk build mode.

        Notes

        “Portable” blobs are the native snapshot with additional compatibility guards.
        They are not a cross-architecture wire format.

        “Canonical” blobs trade load time for portability: deserialization rebuilds
        the index with `n_jobs=1` for deterministic reconstruction.

    set\_params(**\*\*params**) → [Annoy](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")[#](#scikitplot.annoy.Annoy.set_params "Link to this definition")
    :   Set estimator-style parameters (scikit-learn compatibility).

        Parameters:
        :   ****\*\*params****
            :   Keyword parameters to set. Unknown keys raise `ValueError`.

        Returns:
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        Raises:
        :   ValueError
            :   If an unknown parameter name is provided.

            TypeError
            :   If parameter names are not strings or types are invalid.

        > **See also**
        > [`get_params`](#scikitplot.annoy.Annoy.get_params "scikitplot.annoy.Annoy.get_params")
        :   Return estimator-style parameters.

        Notes

        Changing structural parameters (notably `metric`) on an already
        initialized index resets the index deterministically (drops all items,
        trees, and label metadata ([`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") and [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y")). Refit/rebuild is required before querying.

        This behavior matches scikit-learn expectations: `set_params` may be
        called at any time, but parameter changes that affect learned state
        invalidate the fitted model.

    set\_seed(**seed=None**)[#](#scikitplot.annoy.Annoy.set_seed "Link to this definition")
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
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`seed`](#scikitplot.annoy.Annoy.seed "scikitplot.annoy.Annoy.seed")
        :   Parameter attribute (int | None).

        Notes

        Annoy is deterministic by default. Setting an explicit seed is useful for
        reproducible experiments and debugging.

    set\_verbose(**verbosity=1**)[#](#scikitplot.annoy.Annoy.set_verbose "Link to this definition")
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
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`verbose`](#scikitplot.annoy.Annoy.verbose "scikitplot.annoy.Annoy.verbose")
        :   Parameter attribute (int | None).

        [`set_verbosity`](#scikitplot.annoy.Annoy.set_verbosity "scikitplot.annoy.Annoy.set_verbosity")
        :   Alias of [`set_verbose`](#scikitplot.annoy.Annoy.set_verbose "scikitplot.annoy.Annoy.set_verbose").

        [`get_params`](#scikitplot.annoy.Annoy.get_params "scikitplot.annoy.Annoy.get_params"), [`set_params`](#scikitplot.annoy.Annoy.set_params "scikitplot.annoy.Annoy.set_params")
        :   Estimator parameter API.

    set\_verbosity(**level=1**)[#](#scikitplot.annoy.Annoy.set_verbosity "Link to this definition")
    :   Alias of [`set_verbose`](#scikitplot.annoy.Annoy.set_verbose "scikitplot.annoy.Annoy.set_verbose").

        > **See also**
        > [`verbose`](#scikitplot.annoy.Annoy.verbose "scikitplot.annoy.Annoy.verbose")
        :   Parameter attribute (int | None).

        [`set_verbose`](#scikitplot.annoy.Annoy.set_verbose "scikitplot.annoy.Annoy.set_verbose")
        :   Set the verbosity level (callable setter).

    transform(**X**, **\***, **n\_neighbors=5**, **search\_k=-1**, **include\_distances=False**, **return\_labels=False**, **y\_fill\_value=None**, **input\_type='vector'**, **output\_type='vector'**, **exclude\_self=False**, **exclude\_items=None**, **missing\_value=None**)[#](#scikitplot.annoy.Annoy.transform "Link to this definition")
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
            :   If True, also return per-neighbor labels resolved from [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") (or [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y") cache).

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
        > [`get_nns_by_item`](#scikitplot.annoy.Annoy.get_nns_by_item "scikitplot.annoy.Annoy.get_nns_by_item")
        :   Neighbor search by item id.

        [`get_nns_by_vector`](#scikitplot.annoy.Annoy.get_nns_by_vector "scikitplot.annoy.Annoy.get_nns_by_vector")
        :   Neighbor search by query vector.

        [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`fit_transform`](#scikitplot.annoy.Annoy.fit_transform "scikitplot.annoy.Annoy.fit_transform")
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

    unbuild()[#](#scikitplot.annoy.Annoy.unbuild "Link to this definition")
    :   Discard the current forest, allowing new items to be added.

        Returns:
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")
        :   Rebuild the forest after adding new items.

        [`rebuild`](#scikitplot.annoy.Annoy.rebuild "scikitplot.annoy.Annoy.rebuild")
        :   Return a new Annoy index rebuilt from the current index contents.

        [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit")
        :   Build the index from `X` (preferred if you already have `X` available).

        [`add_item`](#scikitplot.annoy.Annoy.add_item "scikitplot.annoy.Annoy.add_item")
        :   Add items (only valid when no trees are built).

        Notes

        After calling [`unbuild`](#scikitplot.annoy.Annoy.unbuild "scikitplot.annoy.Annoy.unbuild"), you must call [`build`](#scikitplot.annoy.Annoy.build "scikitplot.annoy.Annoy.build")
        again before running nearest-neighbour queries.

    unload()[#](#scikitplot.annoy.Annoy.unload "Link to this definition")
    :   Unmap any memory-mapped file backing this index.

        Returns:
        :   [`Annoy`](#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy")
            :   This instance (self), enabling method chaining.

        > **See also**
        > [`load`](#scikitplot.annoy.Annoy.load "scikitplot.annoy.Annoy.load")
        :   Memory-map an on-disk index into this object.

        [`on_disk_build`](#scikitplot.annoy.Annoy.on_disk_build "scikitplot.annoy.Annoy.on_disk_build")
        :   Configure on-disk build mode.

        Notes

        This releases OS-level resources associated with the mmap,
        but keeps the Python object alive.

    verbose[#](#scikitplot.annoy.Annoy.verbose "Link to this definition")
    :   set\_verbose().

        Type:
        :   Verbosity level in [-2, 2] or None (unset). Callable setter

    y[#](#scikitplot.annoy.Annoy.y "Link to this definition")
    :   list[object] | None
        :   Dense labels/targets aligned to item ids `0..n_items-1`.

        Returns:
        :   ****y****list[object] | None
            :   A Python list of length `n_items` (missing labels are `None`), or
                `None` if no label metadata is available.

        Raises:
        :   TypeError
            :   If assigned a dict. Use [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") for dict mappings.

            ValueError
            :   If assigned a sequence whose length does not match `n_items` when the
                index already contains items.

        > **See also**
        > [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map")
        :   Canonical sparse mapping of labels by item id.

        [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit"), [`fit_transform`](#scikitplot.annoy.Annoy.fit_transform "scikitplot.annoy.Annoy.fit_transform")
        :   Set labels while fitting.

        Notes

        * [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") is the canonical storage. [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y") is a convenience cache
          that may be cleared and materialized from [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") on demand.
        * Setting `y` replaces [`y_map`](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map") deterministically.

        Type:
        :   [y](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y")

    y\_map[#](#scikitplot.annoy.Annoy.y_map "Link to this definition")
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
        > [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y")
        :   Dense cache aligned to item ids.

        [`fit`](#scikitplot.annoy.Annoy.fit "scikitplot.annoy.Annoy.fit"), [`fit_transform`](#scikitplot.annoy.Annoy.fit_transform "scikitplot.annoy.Annoy.fit_transform")
        :   Set labels while fitting.

        [`transform`](#scikitplot.annoy.Annoy.transform "scikitplot.annoy.Annoy.transform")
        :   Use `return_labels=True` to return labels.

        Notes

        * This is the canonical label metadata storage.
        * Missing keys imply “no label”; when [`y`](#scikitplot.annoy.Annoy.y "scikitplot.annoy.Annoy.y") is materialized, missing ids
          become `None`.

        Type:
        :   [y\_map](#scikitplot.annoy.Annoy.y_map "scikitplot.annoy.Annoy.y_map")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_Annoy_legacy_c_api_thumb.png)

[annoy.Annoy legacy c-api with examples](../../auto_examples/annoy/plot_Annoy_legacy_c_api.html)

annoy.Annoy legacy c-api with examples![](../../_images/sphx_glr_plot_Annoy_python_api_thumb.png)

[annoy.Index python-api with examples](../../auto_examples/annoy/plot_Annoy_python_api.html)

annoy.Index python-api with examples