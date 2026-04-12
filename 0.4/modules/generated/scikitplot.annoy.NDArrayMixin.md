# NDArrayMixin[#](#ndarraymixin "Link to this heading")

class scikitplot.annoy.NDArrayMixin[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/annoy/_mixins/_ndarray.py#L212)[#](#scikitplot.annoy.NDArrayMixin "Link to this definition")
:   NumPy / SciPy / pandas interoperability for Annoy-like indexes.

    add\_items(**X**, **ids=None**, **\***, **start\_id=None**, **accept\_sparse='error'**, **ensure\_all\_finite=True**, **copy=False**, **dtype=<class 'numpy.float32'>**, **order='C'**, **check\_unique\_ids=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/annoy/_mixins/_ndarray.py#L376)[#](#scikitplot.annoy.NDArrayMixin.add_items "Link to this definition")
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
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")

        > **See also**
        > [`get_item_vectors`](#scikitplot.annoy.NDArrayMixin.get_item_vectors "scikitplot.annoy.NDArrayMixin.get_item_vectors")
        :   Fetch vectors by id selection.

        [`to_numpy`](#scikitplot.annoy.NDArrayMixin.to_numpy "scikitplot.annoy.NDArrayMixin.to_numpy")
        :   Export vectors as a dense NumPy array.

        Notes

        This method is deterministic: ids are generated predictably and vectors
        are added in row order.

    get\_item\_vectors(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **return\_ids=False**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/annoy/_mixins/_ndarray.py#L509)[#](#scikitplot.annoy.NDArrayMixin.get_item_vectors "Link to this definition")
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
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")]

        > **See also**
        > [`to_numpy`](#scikitplot.annoy.NDArrayMixin.to_numpy "scikitplot.annoy.NDArrayMixin.to_numpy")
        :   Dense NumPy export alias.

        [`iter_item_vectors`](#scikitplot.annoy.NDArrayMixin.iter_item_vectors "scikitplot.annoy.NDArrayMixin.iter_item_vectors")
        :   Streaming export without allocating a dense matrix.

    iter\_item\_vectors(**ids=None**, **\***, **start=0**, **stop=None**, **with\_ids=True**, **dtype=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/annoy/_mixins/_ndarray.py#L605)[#](#scikitplot.annoy.NDArrayMixin.iter_item_vectors "Link to this definition")
    :   Iterate vectors without allocating a dense matrix.

        Parameters:
        :   ****ids, start, stop****
            :   Selection controls. See [`get_item_vectors`](#scikitplot.annoy.NDArrayMixin.get_item_vectors "scikitplot.annoy.NDArrayMixin.get_item_vectors").

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
        :   [**Iterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)") | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"), [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")]]

        > **See also**
        > [`get_item_vectors`](#scikitplot.annoy.NDArrayMixin.get_item_vectors "scikitplot.annoy.NDArrayMixin.get_item_vectors")
        :   Dense export.

    to\_numpy(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/annoy/_mixins/_ndarray.py#L571)[#](#scikitplot.annoy.NDArrayMixin.to_numpy "Link to this definition")
    :   Export vectors to a dense NumPy array.

        > **See also**
        > [`get_item_vectors`](#scikitplot.annoy.NDArrayMixin.get_item_vectors "scikitplot.annoy.NDArrayMixin.get_item_vectors")
        :   Dense export with optional id output.

        [`iter_item_vectors`](#scikitplot.annoy.NDArrayMixin.iter_item_vectors "scikitplot.annoy.NDArrayMixin.iter_item_vectors")
        :   Streaming export.

        [`to_scipy_csr`](#scikitplot.annoy.NDArrayMixin.to_scipy_csr "scikitplot.annoy.NDArrayMixin.to_scipy_csr")
        :   Export as SciPy CSR.

        [`to_pandas`](#scikitplot.annoy.NDArrayMixin.to_pandas "scikitplot.annoy.NDArrayMixin.to_pandas")
        :   Export as pandas DataFrame.

        Notes

        This is an alias of [`get_item_vectors`](#scikitplot.annoy.NDArrayMixin.get_item_vectors "scikitplot.annoy.NDArrayMixin.get_item_vectors") with `return_ids=False`.

        Parameters:
        :   * ****ids**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** [**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
            * ****dtype**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****start**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****stop**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****n\_rows**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
            * ****validate\_vector\_len**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")

    to\_pandas(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **id\_location='index'**, **id\_name='id'**, **columns=None**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/annoy/_mixins/_ndarray.py#L681)[#](#scikitplot.annoy.NDArrayMixin.to_pandas "Link to this definition")
    :   Export vectors to a pandas `DataFrame`.

        Parameters:
        :   ****ids, start, stop, n\_rows****
            :   Selection controls. See [`get_item_vectors`](#scikitplot.annoy.NDArrayMixin.get_item_vectors "scikitplot.annoy.NDArrayMixin.get_item_vectors").

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
        > [`to_numpy`](#scikitplot.annoy.NDArrayMixin.to_numpy "scikitplot.annoy.NDArrayMixin.to_numpy")
        :   Dense NumPy export.

        [`to_scipy_csr`](#scikitplot.annoy.NDArrayMixin.to_scipy_csr "scikitplot.annoy.NDArrayMixin.to_scipy_csr")
        :   Export as SciPy CSR.

    to\_scipy\_csr(**ids=None**, **\***, **dtype=<class 'numpy.float32'>**, **start=0**, **stop=None**, **n\_rows=None**, **validate\_vector\_len=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/annoy/_mixins/_ndarray.py#L642)[#](#scikitplot.annoy.NDArrayMixin.to_scipy_csr "Link to this definition")
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
        > [`to_numpy`](#scikitplot.annoy.NDArrayMixin.to_numpy "scikitplot.annoy.NDArrayMixin.to_numpy")
        :   Dense NumPy export.

        [`to_pandas`](#scikitplot.annoy.NDArrayMixin.to_pandas "scikitplot.annoy.NDArrayMixin.to_pandas")
        :   Export as pandas DataFrame.