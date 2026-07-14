# Index[#](#index "Link to this heading")

class scikitplot.annoy.\_annoy.Index(**int f: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None**, **str metric: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None**, **int n\_neighbors: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 5**, **\***, **str on\_disk\_path: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None**, **bool prefault: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False**, **int seed: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None**, **int verbose: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None**, **int schema\_version: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0**, **str dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'float32'**, **str index\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'int32'**, **str wrapper\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'uint64'**, **str random\_dtype: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'uint64'**, **int n\_jobs: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/7b27db8/scikitplot/annoy/_annoy/__init__.py#L)[#](#scikitplot.annoy._annoy.Index "Link to this definition")
:   Annoy Approximate Nearest Neighbors Index.

    This is a Cython-powered Python wrapper around the Annoy C++ library.

    Parameters:
    :   ****f****int or None, default=None
        :   Embedding dimension. If 0 or None, dimension is inferred from first
            vector added. Must be positive for immediate index construction.

        ****metric****str or None, default=None
        :   Distance metric. Supported values:
            \* “angular”, “cosine” → cosine-like distance
            \* “euclidean”, “l2”, “lstsq” → L2 distance
            \* “manhattan”, “l1”, “cityblock”, “taxicab” → L1 distance
            \* “dot”, “@”, “.”, “dotproduct”, “inner”, “innerproduct” → negative dot product
            \* “hamming” → bitwise Hamming distance
            If None and f > 0, defaults to “angular” with FutureWarning.

        ****n\_trees****int, default=-1
        :   Number of trees to build. If -1, auto-selects based on dimension.
            More trees = better accuracy but slower queries and more memory.

        ****n\_neighbors****int, default=5
        :   Default number of neighbors for queries (estimator parameter).

        ****on\_disk\_path****str or None, default=None
        :   Path for on-disk building. If provided, enables memory-efficient
            building for large indices.

        ****prefault****bool, default=False
        :   Whether to prefault pages when loading (may improve query latency).

        ****seed****int or None, default=None
        :   Random seed for tree construction. If None, uses Annoy’s default.
            Value 0 is treated as “use default” and emits a UserWarning.

        ****verbose****int or None, default=None
        :   Verbosity level (clamped to [-2, 2]). Level >= 1 enables logging.

        ****schema\_version****int, default=0
        :   Pickle schema version marker (does not affect on-disk format).

        ****dtype****str, default=”float32”
        :   Data type for embeddings. Supported values:
            \* “float16” / “half” / “fp16” → float16\_t (16-bit half precision)
            \* “float32” / “single” / “fp32” → float (32-bit single precision, default)
            \* “float64” / “double” / “fp64” → double (64-bit double precision)
            \* “float128” / “quad” / “fp128” → float128\_t (128-bit or long double)
            All types are accessed via the double-precision widened bridge.
            float16 values are narrowed on add\_item; float128 gains no input precision
            but benefits from higher-precision internal arithmetic on GCC/Clang.

        ****index\_dtype****str, default=”int32”
        :   Index identifier type. Supported values:
            \* “int8” → int8\_t (max 127 items)
            \* “uint8” → uint8\_t (max 255 items)
            \* “int16” → int16\_t (max 32,767 items)
            \* “uint16” → uint16\_t (max 65,535 items)
            \* “int32” → int32\_t (max 2,147,483,647 items, default)
            \* “uint32” → uint32\_t (max 4,294,967,295 items)
            \* “int64” → int64\_t (max 9,223,372,036,854,775,807 items)
            \* “uint64” → uint64\_t (max 18,446,744,073,709,551,615 items)

        ****wrapper\_dtype****str, default=”uint64”
        :   Internal wrapper type (e.g., for Hamming packing).
            Future: “bool”, “uint8”, “uint32” etc.

        ****random\_dtype****str, default=”uint64”
        :   Random seed type. Currently only “uint64” supported.

        ****n\_jobs****int or None, default=None
        :   Number of threads. If -1, uses all available cores.

        ****\*\*kwargs****
        :   Future extensibility

    Attributes:
    :   [`f`](#scikitplot.annoy._annoy.Index.f "scikitplot.annoy._annoy.Index.f")int
        :   Index.f: int

        [`metric`](#scikitplot.annoy._annoy.Index.metric "scikitplot.annoy._annoy.Index.metric")str or None
        :   Index.metric: Optional[str]

        ****ptr****AnnoyIndexInterface\*
        :   Pointer to C++ index (NULL if not constructed).

        ****# State Indicators (Internal)****


        ****\_f\_valid****bool
        :   True if f has been set (> 0)

        ****\_metric\_valid****bool
        :   True if metric has been configured

        ****\_index\_constructed****bool
        :   True if C++ index exists (ptr != NULL)

    Notes

    * 32-bit integer (4 bytes) can store values from −2\*\*31 to 2\*\*31−1, roughly ±2 billion.
    * 64-bit integer (8 bytes) can store values from −2\*\*63 to 2\*\*63−1, roughly ±9 quintillion.

    Examples

    Try it in your browser!
    ```
    >>> index = Index(f=128, metric='angular', seed=42)
    >>> index.add_item(0, [0.1] * 128)
    >>> index.add_item(1, [0.2] * 128)
    >>> index.build(n_trees=10)
    >>> neighbors, distances = index.get_nns_by_item(0, n=5, include_distances=True)

    ```

    set dtype:

    ```
    >>> # Standard usage (float32)
    >>> index = Index(f=128, metric='angular', dtype='float32')
    >>>
    >>> # High precision (float64)
    >>> index = Index(f=128, metric='euclidean', dtype='float64')
    >>>
    >>> # Half precision (float16) - future
    >>> # index = Index(f=128, metric='angular', dtype='float16')

    ```
    Go BackOpen In Tab

    add\_item(**self**, **item**, **vector**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.add_item "Link to this definition")
    :   Add a vector to the index.

        Parameters:
        :   ****item****int
            :   Non-negative item identifier. For `index_dtype='int32'` the
                maximum valid ID is `2**31 - 1 = 2_147_483_647`. For
                `index_dtype='int64'` the maximum is `2**63 - 1`.

            ****vector****sequence
            :   Embedding vector of length f

        Raises:
        :   IndexError
            :   If item is negative

            OverflowError
            :   If item exceeds the maximum for the configured index\_dtype
                (e.g. 2\*\*31-1 for int32, 2\*\*63-1 for int64, 2\*\*64-1 for uint64).

            RuntimeError
            :   If index is not constructed or already built

            ValueError
            :   If vector dimension doesn’t match f

        Return type:
        :   None

        Notes

        * Must be called before build()
        * Item IDs need not be contiguous
        * After build(), call unbuild() to add more items

    build(**self**, **int n\_trees=-1**, **n\_jobs=None**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.build "Link to this definition")
    :   Build the search forest (thread-safe, releases GIL).

        Parameters:
        :   ****n\_trees****int, default=-1
            :   Number of trees to build. If -1, auto-selects based on dimension.
                More trees = better accuracy but slower queries and more memory.

            ****n\_jobs****int or None, default=None
            :   Number of threads. If -1, uses all available cores.

        Raises:
        :   RuntimeError
            :   If index is not constructed or no items added

        Return type:
        :   None

        Notes

        * Index becomes read-only after build()
        * Auto n\_trees formula: max(10, 2\*f)
        * Call unbuild() to add more items
        * Releases GIL during C++ build operation
        * Allows concurrent Python threads to run
        * The C++ build itself is multi-threaded (n\_jobs)

        Examples

        Try it in your browser!
        ```
        >>> # Multiple threads can build independently:
        >>> from concurrent.futures import ThreadPoolExecutor
        >>> def worker(index, i):
        ...     index.build(n_trees=10)
        >>> with ThreadPoolExecutor(max_workers=4) as executor:
        ...     futures = [executor.submit(worker, index, i) for i in range(4)]

        ```
        Go BackOpen In Tab

    clone(**self**, **\*\*override\_params**) → Self[#](#scikitplot.annoy._annoy.Index.clone "Link to this definition")
    :   Create a copy of the index with optional parameter overrides.

        Parameters:
        :   ****\*\*override\_params****dict
            :   Parameters to override in the clone

        Returns:
        :   ****index****Index
            :   New index with same parameters (but no data)

        Return type:
        :   Self

        Examples

        Try it in your browser!
        ```
        >>> index1 = Index(f=128, metric='angular', seed=42)
        >>> index2 = index1.clone(seed=123)  # Same f and metric, different seed

        ```
        Go BackOpen In Tab

    classmethod deserialize(**cls, dict data: dict[str, Any]**) → Self[#](#scikitplot.annoy._annoy.Index.deserialize "Link to this definition")
    :   Deserialize from dictionary.

        Parameters:
        :   ****data****dict
            :   Serialized state from serialize()

        Returns:
        :   ****index****Index
            :   Restored index instance

        Raises:
        :   TypeError
            :   If data is not a dict

            ValueError
            :   If data format is invalid

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)

        Return type:
        :   Self

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> index = Index(f=128, metric='angular', seed=42)
        >>> json_str = json.dumps(index.serialize(), default=str)
        >>> data = json.loads(json_str)
        >>> restored = Index.deserialize(data)

        ```
        Go BackOpen In Tab

    f[#](#scikitplot.annoy._annoy.Index.f "Link to this definition")
    :   int

        Embedding dimension.

        Returns:
        :   ****f****int
            :   Number of dimensions (0 means “unset / lazy”).

        Notes

        * Immutable after index construction
        * Setting to 0 after construction raises ValueError

        Type:
        :   [Index.f](#scikitplot.annoy._annoy.Index.f "scikitplot.annoy._annoy.Index.f")

    classmethod from\_dict(**cls, dict data: dict[str, Any]**) → Self[#](#scikitplot.annoy._annoy.Index.from_dict "Link to this definition")
    :   Alias for deserialize().

        Parameters:
        :   ****data****dict
            :   Serialized state

        Returns:
        :   Index
            :   Restored instance

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)

        Return type:
        :   Self

    get\_distance(**self**, **i**, **j**)[#](#scikitplot.annoy._annoy.Index.get_distance "Link to this definition")
    :   Compute distance between two stored items.

        Parameters:
        :   ****i, j****int
            :   Item IDs (must be < n\_items). For `index_dtype='int32'` max is
                `2**31-1`.

        Returns:
        :   ****distance****float
            :   Distance according to index metric

        Raises:
        :   IndexError
            :   If i or j is negative or >= n\_items

            OverflowError
            :   If i or j exceeds the maximum for the configured index\_dtype
                (e.g. 2\*\*31-1 for int32, 2\*\*63-1 for int64, 2\*\*64-1 for uint64).

            RuntimeError
            :   If index not constructed

        Notes

        * Does not require built index
        * For Hamming metric, distance is clipped to [0, f]

    get\_feature\_names\_out(**self**, **input\_features=None**)[#](#scikitplot.annoy._annoy.Index.get_feature_names_out "Link to this definition")
    :   Get output feature names for the transformer-style API.

        Output feature names are independent of input feature names and
        follow a stable schema based on `n_neighbors`:
        `('neighbor_0', 'neighbor_1', ..., 'neighbor_{k-1}')`.

        Parameters:
        :   ****input\_features****sequence of str or None, default=None
            :   If provided, validated deterministically against the fitted
                input feature names (if `feature_names_in_` was set during
                `fit()`) and against the expected input dimensionality.

        Returns:
        :   ****feature\_names****tuple of str
            :   Output feature names: `('neighbor_0', ..., 'neighbor_{k-1}')`
                where `k == n_neighbors`.

        Raises:
        :   AttributeError
            :   If called before `fit` / [`build`](#scikitplot.annoy._annoy.Index.build "scikitplot.annoy._annoy.Index.build").

            ValueError
            :   If `input_features` is provided but does not match
                `feature_names_in_`.

            TypeError
            :   If `input_features` elements are not strings.

        Examples

        Try it in your browser!
        ```
        >>> idx = Index(3, metric='angular').fit([[1,0,0],[0,1,0]])
        >>> idx.get_feature_names_out()
        ('neighbor_0', 'neighbor_1', 'neighbor_2', 'neighbor_3', 'neighbor_4')

        ```
        Go BackOpen In Tab

    get\_item(**self**, **item**)[#](#scikitplot.annoy._annoy.Index.get_item "Link to this definition")
    :   Retrieve a stored embedding vector.

        Parameters:
        :   ****item****int
            :   Item ID (must be < n\_items). For `index_dtype='int32'` max is
                `2**31-1`.

        Returns:
        :   ****vector****list[float]
            :   Embedding vector of length f

        Raises:
        :   IndexError
            :   If item is negative or >= n\_items

            OverflowError
            :   If item exceeds the maximum for the configured index\_dtype
                (e.g. 2\*\*31-1 for int32, 2\*\*63-1 for int64, 2\*\*64-1 for uint64).

            RuntimeError
            :   If index not constructed

    get\_n\_items(**self**) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.get_n_items "Link to this definition")
    :   Return number of items in the index.

        Returns:
        :   ****n\_items****int
            :   Number of items added (may be sparse)

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

    get\_n\_trees(**self**) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.get_n_trees "Link to this definition")
    :   Return number of trees in the index.

        Returns:
        :   ****n\_trees****int
            :   Number of trees (0 if not built)

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

    get\_nns\_by\_item(**self**, **item**, **int n**, **int search\_k=-1**, **bool include\_distances=False**)[#](#scikitplot.annoy._annoy.Index.get_nns_by_item "Link to this definition")
    :   Find nearest neighbors (thread-safe, releases GIL).

        Parameters:
        :   ****item****int
            :   Query item ID. For `index_dtype='int32'` max is `2**31-1`.

            ****n****int
            :   Number of neighbors to return

            ****search\_k****int, default=-1
            :   Search effort. If -1, uses n\_trees \* n.
                Higher values = better accuracy but slower.

            ****include\_distances****bool, default=False
            :   If True, return (neighbors, distances) tuple

        Returns:
        :   ****neighbors****list[int]
            :   Item IDs of nearest neighbors

            ****distances****list[float], optional
            :   Distances to neighbors (only if include\_distances=True)

        Raises:
        :   IndexError
            :   If item >= n\_items

            OverflowError
            :   If item exceeds the maximum for the configured index\_dtype
                (e.g. 2\*\*31-1 for int32, 2\*\*63-1 for int64, 2\*\*64-1 for uint64).

            ValueError
            :   If n <= 0

            RuntimeError
            :   If index not built

        Notes

        * Releases GIL during query (true parallelism)
        * Multiple threads can query simultaneously
        * Linear speedup with thread count

        Examples

        Try it in your browser!
        ```
        >>> # Parallel queries from multiple threads:
        >>> from concurrent.futures import ThreadPoolExecutor
        >>> def query_worker(index, item_id):
        ...     return index.get_nns_by_item(item_id, n=10)
        >>> with ThreadPoolExecutor(max_workers=8) as executor:
        ...     results = list(executor.map(
        ...         lambda i: query_worker(index, i),
        ...         range(1000)
        ...     ))
        >>> # True parallelism - all 8 threads run concurrently!

        ```
        Go BackOpen In Tab

    get\_nns\_by\_vector(**self**, **vector**, **int n**, **int search\_k=-1**, **bool include\_distances=False**)[#](#scikitplot.annoy._annoy.Index.get_nns_by_vector "Link to this definition")
    :   Query by vector (thread-safe, releases GIL).

        Parameters:
        :   ****vector****sequence
            :   Query vector of length f

            ****n****int
            :   Number of neighbors to return

            ****search\_k****int, default=-1
            :   Search effort. If -1, uses n\_trees \* n.

            ****include\_distances****bool, default=False
            :   If True, return (neighbors, distances) tuple

        Returns:
        :   ****neighbors****list[int]
            :   Item IDs of nearest neighbors

            ****distances****list[float], optional
            :   Distances to neighbors

        Raises:
        :   RuntimeError
            :   If index not built

            ValueError
            :   If n <= 0, or if vector length does not match index dimension f

    get\_params(**self**, **bool deep: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][#](#scikitplot.annoy._annoy.Index.get_params "Link to this definition")
    :   Get parameters (sklearn-style).

        Parameters:
        :   ****deep****bool, default=True
            :   If True, include nested parameters (reserved for future use)

        Returns:
        :   ****params****dict
            :   Parameter dictionary with all configuration

        Parameters:
        :   ****deep**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any]

        Examples

        Try it in your browser!
        ```
        >>> index = Index(f=128, metric='angular', seed=42)
        >>> params = index.get_params()
        >>> print(params['f'])
        128
        >>> print(params['metric'])
        'angular'

        ```
        Go BackOpen In Tab

    get\_state(**self**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][#](#scikitplot.annoy._annoy.Index.get_state "Link to this definition")
    :   Get complete state dictionary.

        Returns:
        :   ****state****dict
            :   Complete index state including:
                \* Parameters (f, metric, etc.)
                \* Index data (if built)
                \* Configuration

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any]

        Examples

        Try it in your browser!
        ```
        >>> index = Index(f=128, metric='angular', seed=42)
        >>> index.add_item(0, [0.1] * 128)
        >>> index.build()
        >>> state = index.get_state()
        >>> print('f' in state)
        True
        >>> print('metric' in state)
        True

        ```
        Go BackOpen In Tab

    is\_built(**self**) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.is_built "Link to this definition")
    :   Check if index has been built.

        Returns:
        :   ****built****bool
            :   True if build() has been called

        Return type:
        :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    is\_empty(**self**) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.is_empty "Link to this definition")
    :   Check if index has no items.

        Returns:
        :   ****empty****bool
            :   True if no items added

        Return type:
        :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    load(**self**, **filename**, **bool prefault=False**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.load "Link to this definition")
    :   Load index from disk file.

        Parameters:
        :   ****filename****str
            :   Input file path

            ****prefault****bool, default=False
            :   Whether to prefault pages into memory

        Raises:
        :   RuntimeError
            :   If dimensions don’t match

            IOError
            :   If file cannot be read

        Return type:
        :   None

        Notes

        * Dimension f and metric must match the saved index
        * prefault=True may improve query latency at cost of load time

    metric[#](#scikitplot.annoy._annoy.Index.metric "Link to this definition")
    :   Optional[str]

        Distance metric name.

        Possible Values:

        * “angular” : cosine-like distance
        * “euclidean” : L2 distance
        * “manhattan” : L1 distance
        * “dot” : negative dot product
        * “hamming” : bitwise Hamming distance
        * None : not yet configured (lazy mode)

        Returns:
        :   ****metric****str or None
            :   Canonical metric name, or None if not configured.

        Notes

        * Immutable after index construction
        * Returns canonical name even if alias was used in constructor

        Type:
        :   [Index.metric](#scikitplot.annoy._annoy.Index.metric "scikitplot.annoy._annoy.Index.metric")

    n\_neighbors[#](#scikitplot.annoy._annoy.Index.n_neighbors "Link to this definition")
    :   int

        Default number of neighbors for queries.

        Type:
        :   [Index.n\_neighbors](#scikitplot.annoy._annoy.Index.n_neighbors "scikitplot.annoy._annoy.Index.n_neighbors")

    on\_disk\_build(**self**, **fn**) → Self[#](#scikitplot.annoy._annoy.Index.on_disk_build "Link to this definition")
    :   Configure the index to build using an on-disk backing file.

        Calling this method explicitly supersedes any `on_disk_path` set in
        the constructor. It is safe to call before any `add_item()` calls;
        the method ensures the C++ index is constructed first.

        Parameters:
        :   ****fn****str
            :   Path to the backing file. The file is created or overwritten.

        Returns:
        :   ****self****Index
            :   This instance (for method chaining).

        Raises:
        :   TypeError
            :   If `fn` is not a string.

            ValueError
            :   If `fn` is empty.

            IOError
            :   If the C++ `on_disk_build` call fails (bad path, permissions…).

            RuntimeError
            :   If the index cannot be constructed (`f` or `metric` not set).

        Return type:
        :   Self

        Notes

        * After calling `on_disk_build`, the index is backed by the file
          during `add_item` / `build`. Data written to disk is **not**
          a finished index file until `save()` or after `build()`
          completes the tree structure on disk.
        * For very large datasets that do not fit comfortably in RAM during
          construction this is the recommended workflow.

        Examples

        Try it in your browser!
        ```
        >>> idx = Index(3, metric='angular').on_disk_build("test.annoy")
        >>> for i, v in enumerate([[1,2,3],[4,5,6],[7,8,9]]):
        ...     idx.add_item(i, v)
        >>> idx.build(n_trees=10)

        ```
        Go BackOpen In Tab

    repr\_info(**self**, **bool include\_n\_items=True**, **bool include\_n\_trees=True**, **include\_memory=None**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.repr_info "Link to this definition")
    :   Rich dictionary-like string representation.

        Parameters:
        :   ****include\_n\_items****bool, default=True
            :   Include item count

            ****include\_n\_trees****bool, default=True
            :   Include tree count

            ****include\_memory****bool or None, default=None
            :   Include memory usage estimate
                If None, includes only if index is built

        Returns:
        :   ****repr\_str****str
            :   Dictionary-style representation

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> print(index.repr_info())
        Annoy(**{'f': 128, 'metric': 'angular', 'n_items': 1000, 'n_trees': 10})

        ```
        Go BackOpen In Tab

    save(**self**, **filename**, **bool prefault=False**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.save "Link to this definition")
    :   Save index to disk file.

        Parameters:
        :   ****filename****str
            :   Output file path

            ****prefault****bool, default=False
            :   Whether to prefault pages during save

        Raises:
        :   RuntimeError
            :   If index not built

            IOError
            :   If file cannot be written

        Return type:
        :   None

    serialize(**self**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][#](#scikitplot.annoy._annoy.Index.serialize "Link to this definition")
    :   Serialize to JSON-compatible dictionary.

        Returns:
        :   ****data****dict
            :   JSON-serializable state

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any]

        Examples

        Try it in your browser!
        ```
        >>> import json
        >>> index = Index(f=128, metric='angular', seed=42)
        >>> index.add_item(0, [0.1] * 128)
        >>> index.build()
        >>> data = index.serialize()
        >>> json_str = json.dumps(data, default=str)  # handle bytes

        ```
        Go BackOpen In Tab

    set\_params(**self**, **\*\*params**) → Self[#](#scikitplot.annoy._annoy.Index.set_params "Link to this definition")
    :   Set parameters (sklearn-style).

        Parameters:
        :   ****\*\*params****dict
            :   Parameters to update

        Returns:
        :   ****self****Index
            :   Returns self for method chaining

        Raises:
        :   ValueError
            :   If trying to set immutable parameters after construction

        Return type:
        :   Self

        Notes

        * Cannot modify f or metric after index construction
        * Can always modify n\_neighbors, seed, verbose

        Examples

        Try it in your browser!
        ```
        >>> index = Index(f=128, metric='angular')
        >>> index.set_params(n_neighbors=10, seed=42)
        >>> index.build()

        ```
        Go BackOpen In Tab

    set\_seed(**self**, **seed**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.set_seed "Link to this definition")
    :   Set random seed for index construction.

        Parameters:
        :   ****seed****int
            :   Non-negative integer in [0, 2\*\*64 - 1].
                0 uses Annoy’s deterministic default seed and emits a UserWarning.

        Returns:
        :   ****self****Index

        Raises:
        :   TypeError
            :   If seed is not an integer.

            ValueError
            :   If seed is negative or exceeds uint64\_t range [0, 2\*\*64 - 1].

        Return type:
        :   None

        Notes

        * Must be called before build() to take effect.
        * set\_seed(R) is not on AnnoyIndexInterfaceBase; the widened
          set\_seed\_w(uint64\_t) bridge is used for all concrete index types.
        * Seed 0 triggers Annoy’s deterministic default (Kiss64Random::default\_seed).

    set\_state(**self, dict state: dict[str, Any]**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.set_state "Link to this definition")
    :   Restore state from dictionary.

        Parameters:
        :   ****state****dict
            :   State dictionary from get\_state()

        Parameters:
        :   ****state**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)

        Return type:
        :   None

        Examples

        Try it in your browser!
        ```
        >>> index1 = Index(f=128, metric='angular', seed=42)
        >>> index1.add_item(0, [0.1] * 128)
        >>> index1.build()
        >>> state = index1.get_state()
        >>>
        >>> index2 = Index()
        >>> index2.set_state(state)
        >>> # index2 now has same data as index1

        ```
        Go BackOpen In Tab

    set\_verbose(**self**, **bool v**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.set_verbose "Link to this definition")
    :   Enable/disable verbose logging.

        Parameters:
        :   ****v****bool
            :   True to enable verbose output

        Return type:
        :   None

    to\_dict(**self**) → [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any][#](#scikitplot.annoy._annoy.Index.to_dict "Link to this definition")
    :   Alias for serialize().

        Returns:
        :   dict
            :   Serialized state

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), Any]

    unbuild(**self**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.unbuild "Link to this definition")
    :   Remove all trees to allow adding more items.

        Transitions index back to BUILDING state.

        Raises:
        :   RuntimeError
            :   If index is not built

        Return type:
        :   None

    unload(**self**) → [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)")[#](#scikitplot.annoy._annoy.Index.unload "Link to this definition")
    :   Unmap memory-mapped files and free memory.

        Transitions index to EMPTY state.
        Safe to call multiple times.

        Return type:
        :   None

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_Annoy_legacy_c_api_thumb.png)

[annoy.Annoy legacy c-api with examples](../../auto_examples/annoy/plot_Annoy_legacy_c_api.html)

annoy.Annoy legacy c-api with examples![](../../_images/sphx_glr_plot_annoy_cython_0benchmark_thumb.png)

[Index (cython) python-api benchmark with examples](../../auto_examples/annoy/plot_annoy_cython_0benchmark.html)

Index (cython) python-api benchmark with examples![](../../_images/sphx_glr_plot_annoy_cython_api_thumb.png)

[Index (cython) python-api with examples](../../auto_examples/annoy/plot_annoy_cython_api.html)

Index (cython) python-api with examples![](../../_images/sphx_glr_plot_annoy_cython_hamlet_example_thumb.png)

[Approximate Nearest Neighbors with Annoy — A Hamlet Example](../../auto_examples/annoy/plot_annoy_cython_hamlet_example.html)

Approximate Nearest Neighbors with Annoy — A Hamlet Example