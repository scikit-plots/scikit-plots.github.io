# VectorOpsMixin[#](#vectoropsmixin "Link to this heading")

class scikitplot.annoy.VectorOpsMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/annoy/_mixins/_vectors.py#L272)[#](#scikitplot.annoy.VectorOpsMixin "Link to this definition")
:   User-facing neighbor queries for Annoy-like backends.

    This mixin exposes explicit per-query helpers ([`query_by_item`](#scikitplot.annoy.VectorOpsMixin.query_by_item "scikitplot.annoy.VectorOpsMixin.query_by_item"),
    [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector")) and scikit-learn style batch helpers
    ([`kneighbors`](#scikitplot.annoy.VectorOpsMixin.kneighbors "scikitplot.annoy.VectorOpsMixin.kneighbors"), [`kneighbors_graph`](#scikitplot.annoy.VectorOpsMixin.kneighbors_graph "scikitplot.annoy.VectorOpsMixin.kneighbors_graph")).

    Notes

    Output ordering for [`kneighbors`](#scikitplot.annoy.VectorOpsMixin.kneighbors "scikitplot.annoy.VectorOpsMixin.kneighbors") is `(neighbors, distances)` when
    `include_distances=True` (neighbors first). This is **not** the same as
    `sklearn.neighbors.NearestNeighbors.kneighbors` (which returns distances
    first). The order is intentional and documented.

    kneighbors(**X**, **n\_neighbors=5**, **\***, **search\_k=-1**, **include\_distances=True**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **output\_type='vector'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/annoy/_mixins/_vectors.py#L661)[#](#scikitplot.annoy.VectorOpsMixin.kneighbors "Link to this definition")
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
                [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector") for each query row.

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
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")]

        > **See also**
        > [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector")
        :   Per-query 1D interface.

        [`kneighbors_graph`](#scikitplot.annoy.VectorOpsMixin.kneighbors_graph "scikitplot.annoy.VectorOpsMixin.kneighbors_graph")
        :   CSR kNN graph.

    kneighbors\_graph(**X**, **n\_neighbors=5**, **\***, **search\_k=-1**, **mode='connectivity'**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **output\_type='item'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/annoy/_mixins/_vectors.py#L769)[#](#scikitplot.annoy.VectorOpsMixin.kneighbors_graph "Link to this definition")
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
                [`kneighbors`](#scikitplot.annoy.VectorOpsMixin.kneighbors "scikitplot.annoy.VectorOpsMixin.kneighbors") for each query row.

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
        > [`kneighbors`](#scikitplot.annoy.VectorOpsMixin.kneighbors "scikitplot.annoy.VectorOpsMixin.kneighbors")
        :   Dense kNN results.

    query\_by\_item(**item**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/annoy/_mixins/_vectors.py#L291)[#](#scikitplot.annoy.VectorOpsMixin.query_by_item "Link to this definition")
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
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")]

        > **See also**
        > [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector")
        :   Query neighbors by an explicit vector.

        [`kneighbors`](#scikitplot.annoy.VectorOpsMixin.kneighbors "scikitplot.annoy.VectorOpsMixin.kneighbors")
        :   Batch neighbor queries (sklearn-like).

        Notes

        Exclusions are applied deterministically in the order returned by the backend.

    query\_by\_vector(**vector**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/annoy/_mixins/_vectors.py#L472)[#](#scikitplot.annoy.VectorOpsMixin.query_by_vector "Link to this definition")
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
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")]

        > **See also**
        > [`query_by_item`](#scikitplot.annoy.VectorOpsMixin.query_by_item "scikitplot.annoy.VectorOpsMixin.query_by_item")
        :   Query neighbors by stored item id.

        [`kneighbors`](#scikitplot.annoy.VectorOpsMixin.kneighbors "scikitplot.annoy.VectorOpsMixin.kneighbors")
        :   Batch neighbor queries (sklearn-like).

        Notes

        Exclusions are applied deterministically in the order returned by the backend.
        If `exclude_self=True` and no exact `0.0` distance candidate is returned
        in the first position, no additional self-exclusion is applied.

    query\_vectors\_by\_item(**item**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **dtype=<class 'numpy.float32'>**, **output\_type='vector'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/annoy/_mixins/_vectors.py#L400)[#](#scikitplot.annoy.VectorOpsMixin.query_vectors_by_item "Link to this definition")
    :   Query neighbor vectors by stored item id.

        This is a convenience wrapper over [`query_by_item`](#scikitplot.annoy.VectorOpsMixin.query_by_item "scikitplot.annoy.VectorOpsMixin.query_by_item") that materializes
        vectors using the backend’s `get_item`.

        Parameters:
        :   ****item, n\_neighbors, search\_k, include\_distances, exclude\_self, exclude\_item\_ids****
            :   See [`query_by_item`](#scikitplot.annoy.VectorOpsMixin.query_by_item "scikitplot.annoy.VectorOpsMixin.query_by_item").

            ****ensure\_all\_finite, copy****
            :   See [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector").

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
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")]

        > **See also**
        > [`query_vectors_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_vectors_by_vector "scikitplot.annoy.VectorOpsMixin.query_vectors_by_vector")
        :   Vector query returning vectors (or ids).

    query\_vectors\_by\_vector(**vector**, **n\_neighbors**, **\***, **search\_k=-1**, **include\_distances=False**, **exclude\_self=False**, **exclude\_item\_ids=None**, **ensure\_all\_finite=True**, **copy=False**, **dtype=<class 'numpy.float32'>**, **output\_type='vector'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/annoy/_mixins/_vectors.py#L583)[#](#scikitplot.annoy.VectorOpsMixin.query_vectors_by_vector "Link to this definition")
    :   Query neighbor vectors by an explicit vector.

        Convenience wrapper over [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector"). By default it returns
        vectors; set `output_type='item'` to return neighbor ids instead.

        Parameters:
        :   ****vector, n\_neighbors, search\_k, include\_distances, exclude\_self, exclude\_item\_ids,****
            :   See [`query_by_item`](#scikitplot.annoy.VectorOpsMixin.query_by_item "scikitplot.annoy.VectorOpsMixin.query_by_item").

            ****ensure\_all\_finite, copy****
            :   See [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector").

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
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")]

        > **See also**
        > [`query_vectors_by_item`](#scikitplot.annoy.VectorOpsMixin.query_vectors_by_item "scikitplot.annoy.VectorOpsMixin.query_vectors_by_item")
        :   Item id query returning vectors.

        [`query_by_vector`](#scikitplot.annoy.VectorOpsMixin.query_by_vector "scikitplot.annoy.VectorOpsMixin.query_by_vector")
        :   Per-query id interface.