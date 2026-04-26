> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-annoy-plot-annoy-python-api-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# annoy.Index python-api with examples[#](#annoy-index-python-api-with-examples "Link to this heading")

An example showing the [`Index`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") class.

> **See also**
> * [`from_low_level`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index.from_low_level "scikitplot.annoy.Index.from_low_level")
* <https://docs.python.org/3/library/pickle.html#what-can-be-pickled-and-unpickled>
```
import numpy as np
import random; random.seed(0)

# from annoy import Annoy, AnnoyIndex
# from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
from scikitplot.annoy import Annoy, AnnoyIndex, Index

print(Annoy.__doc__)

```
```
Compiled with GCC/Clang. Not using AVX instructions.

Approximate Nearest Neighbors index (Annoy) with a small, lazy C-extension wrapper.

::

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

Parameters
----------
f : int or None, optional, default=None
    Vector dimension. If ``0`` or ``None``, dimension may be inferred from the
    first vector passed to ``add_item`` (lazy mode).
    If None, treated as ``0`` (reset to default).
metric : {"angular", "cosine", "euclidean", "l2", "lstsq", "manhattan", "l1", "cityblock", "taxicab", "dot", "@", ".", "dotproduct", "inner", "innerproduct", "hamming"} or None, optional, default=None
    Distance metric (one of 'angular', 'euclidean', 'manhattan', 'dot', 'hamming').
    If omitted and ``f > 0``, defaults to ``'angular'`` (cosine-like).
    If omitted and ``f == 0``, metric may be set later before construction.
    If None, behavior depends on ``f``:

    * If ``f > 0``: defaults to ``'angular'`` (legacy behavior; may emit a
      :class:`FutureWarning`).
    * If ``f == 0``: leaves the metric unset (lazy). You may set
      :attr:`metric` later before construction, or it will default to
      ``'angular'`` on first :meth:`add_item`.
n_trees : int, default=-1
    Number of trees to build. If -1, auto-selects based on dimension.
    More trees = better accuracy but slower queries and more memory.
n_neighbors : int, default=5
    Non-negative integer Number of neighbors to retrieve for each query.
on_disk_path : str or None, optional, default=None
    If provided, configures the path for on-disk building. When the underlying
    index exists, this enables on-disk build mode (equivalent to calling
    :meth:`on_disk_build` with the same filename).

    Note: Annoy core truncates the target file when enabling on-disk build.
    This wrapper treats ``on_disk_path`` as strictly equivalent to calling
    :meth:`on_disk_build` with the same filename (truncate allowed).

    In lazy mode (``f==0`` and/or ``metric is None``), activation occurs once
    the underlying C++ index is created.
prefault : bool or None, optional, default=None
    If True, request page-faulting index pages into memory when loading
    (when supported by the underlying platform/backing).
    If None, treated as ``False`` (reset to default).
seed : int or None, optional, default=None
    Non-negative integer seed. If set before the index is constructed,
    the seed is stored and applied when the C++ index is created.
    Seed value ``0`` is treated as \"use Annoy's deterministic default seed\"
    (a :class:`UserWarning` is emitted when ``0`` is explicitly provided).
verbose : int or None, optional, default=None
    Verbosity level. Values are clamped to the range ``[-2, 2]``.
    ``level >= 1`` enables Annoy's verbose logging; ``level <= 0`` disables it.
    Logging level inspired by gradient-boosting libraries:

    * ``<= 0`` : quiet (warnings only)
    * ``1``    : info (Annoy's ``verbose=True``)
    * ``>= 2`` : debug (currently same as info, reserved for future use)
schema_version : int, optional, default=None
    Serialization/compatibility strategy marker.

    This does not change the Annoy on-disk format, but it *does* control
    how the index is snapshotted in pickles.

    * ``0`` or ``1``: pickle stores a ``portable-v1`` snapshot (fast restore,
      ABI-checked).
    * ``2``: pickle stores ``canonical-v1`` (portable across ABIs; restores by
      rebuilding deterministically).
    * ``>=3``: pickle stores both portable and canonical (canonical is used as
      a fallback if the ABI check fails).

    If None, treated as ``0`` (reset to default).
n_jobs : int or None, default=None
    Number of threads. If -1, uses all available cores.
    If None, treated as ``-1``.

Attributes
----------
f : int, default=0
    Vector dimension. ``0`` means "unknown / lazy".
metric : {'angular', 'euclidean', 'manhattan', 'dot', 'hamming'}, default="angular"
    Canonical metric name, or None if not configured yet (lazy).
n_neighbors : int, default=5
    Non-negative integer Number of neighbors to retrieve for each query.
on_disk_path : str or None, optional, default=None
    Configured on-disk build path. Setting this attribute enables on-disk
    build mode (equivalent to :meth:`on_disk_build`), with safety checks
    to avoid implicit truncation of existing files.
prefault : bool, default=False
    Stored prefault flag (see :meth:`load`/`:meth:`save` prefault parameters).
seed : int or None, optional, default=None
    Non-negative integer seed. Also provides :meth:`random_state`
verbose : int or None, optional, default=None
    Verbosity level.
schema_version : int, default=0
    Reserved schema/version marker (stored; does not affect on-disk format).
n_features : int
    Alias of :meth:`f` (dimension), provided for scikit-learn naming parity.
    Also provides :meth:`n_features_`, :meth:`n_features_in_`.
n_features_out_ : int
    Number of output features produced by transform.
feature_names_in_ : list-like
    Input feature names seen during fit.
    Set only when explicitly provided via fit(..., feature_names=...).
y : list-like | None, optional, default=None
    Dense label cache aligned to item ids (``0 .. n_items-1``). This is a
    convenience view for scikit-learn style APIs and may be derived from
    ``y_map`` lazily.
    The setter accepts sequences only (a dict is not allowed); when possible it
    validates that ``len(y) == n_items`` and updates ``y_map`` deterministically.
y_map : dict | None, optional, default=None
    Canonical sparse mapping ``{item_id -> label}``. Keys must be non-negative
    integers and (when an index exists) strictly less than ``n_items``.
    Setting this property invalidates the dense ``y`` cache; ``y`` is
    materialized lazily (missing keys become ``None``).

See Also
--------
add_item : Add a vector to the index.
build : Build the forest after adding items.
unbuild : Remove trees to allow adding more items.
get_nns_by_item, get_nns_by_vector : Query nearest neighbours.
save, load : Persist the index to/from disk.
serialize, deserialize : Persist the index to/from bytes.
set_seed : Set the random seed deterministically.
set_verbose : Set verbosity level.
info : Return a structured summary of the current index.

Notes
-----
* Once the underlying C++ index is created, ``f`` and ``metric`` are immutable.
  This keeps the object consistent and avoids undefined behavior.
* The C++ index is created lazily when sufficient information is available:
  when both ``f > 0`` and ``metric`` are known, or when an operation that
  requires the index is first executed.
* If ``f == 0``, the dimensionality is inferred from the first non-empty vector
  passed to :meth:`add_item` and is then fixed for the lifetime of the index.
* Assigning ``None`` to :attr:`f` is not supported. Use ``0`` for lazy
  inference (this matches ``Annoy(f=None, ...)`` at construction time).
* If ``metric`` is omitted while ``f > 0``, the current behavior defaults to
  ``'angular'`` and may emit a :class:`FutureWarning`. To avoid warnings and
  future behavior changes, always pass ``metric=...`` explicitly.
* Items must be added *before* calling :meth:`build`. After :meth:`build`, the
  index becomes read-only; to add more items, call :meth:`unbuild`, add items
  again with :meth:`add_item`, then call :meth:`build` again.
* Very large indexes can be built directly on disk with :meth:`on_disk_build`
  and then memory-mapped with :meth:`load`.
* :meth:`info` returns a structured summary (dimension, metric, counts, and
  optional memory usage) suitable for programmatic inspection.
* This wrapper stores user configuration (e.g., seed/verbosity) even before the
  C++ index exists and applies it deterministically upon construction.

Developer Notes:

- Source of truth:

  * ``f`` (int) and ``metric_id`` (enum) describe configuration.
  * ``ptr`` is NULL when index is not constructed.

- Invariant:

  * ``ptr != NULL`` implies ``f > 0`` and ``metric_id != METRIC_UNKNOWN``.

Examples
--------
>>> from annoy import Annoy, AnnoyIndex

High-level API:

>>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
>>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

The lifecycle follows the examples in ``test.ipynb``:

1. **Construct the index**

>>> import random; random.seed(0)
>>> # from annoy import AnnoyIndex
>>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
>>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

>>> idx = Annoy(f=3, metric="angular")
>>> idx.f, idx.metric
(3, 'angular')

If you pass ``f=0`` the dimension can be inferred on the first
call to :meth:`add_item`.

2. **Add items**

>>> idx.add_item(0, [1.0, 0.0, 0.0])
>>> idx.add_item(1, [0.0, 1.0, 0.0])
>>> idx.add_item(2, [0.0, 0.0, 1.0])
>>> idx.get_n_items()
3

3. **Build the forest**

>>> idx.build(n_trees=-1)
>>> idx.get_n_trees()
10
>>> idx.memory_usage()  # byte
543076

After :meth:`build` the index becomes read-only.  You can still
query, save, load and serialize it.

4. **Query neighbours**

By stored item id:

>>> idx.get_nns_by_item(0, 5)
[0, 1, 2, ...]

With distances:

>>> idx.get_nns_by_item(0, 5, include_distances=True)
([0, 1, 2, ...], [0.0, 1.22, 1.26, ...])

Or by an explicit query vector:

>>> idx.get_nns_by_vector([0.1, 0.2, 0.3], 5, include_distances=True)
([103, 71, 160, 573, 672], [...])

5. **Persistence**

To work with memory-mapped indices on disk:

>>> idx.save("annoy_test.annoy")
>>> idx2 = Annoy(f=100, metric="angular")
>>> idx2.load("annoy_test.annoy")
>>> idx2.get_n_items()
1000

Or via raw byte:

>>> buf = idx.serialize()
>>> new_idx = Annoy(f=100, metric="angular")
>>> new_idx.deserialize(buf)
>>> new_idx.get_n_items()
1000

You can release OS resources with :meth:`unload` and drop the
current forest with :meth:`unbuild`.

```
```
print(Index.__doc__)

```
```
High-level ANNoy index composed from mixins.

Parameters
----------
f : int or None, optional, default=None
    Vector dimension. If ``0`` or ``None``, dimension may be inferred from the
    first vector passed to ``add_item`` (lazy mode).
    If None, treated as ``0`` (reset to default).
metric : {"angular", "cosine", "euclidean", "l2", "lstsq", "manhattan", "l1", "cityblock", "taxicab",             "dot", "@", ".", "dotproduct", "inner", "innerproduct", "hamming"} or None, optional, default=None
    Distance metric (one of 'angular', 'euclidean', 'manhattan', 'dot', 'hamming').
    If omitted and ``f > 0``, defaults to ``'angular'`` (cosine-like).
    If omitted and ``f == 0``, metric may be set later before construction.
    If None, behavior depends on ``f``:

    * If ``f > 0``: defaults to ``'angular'`` (legacy behavior; may emit a
      :class:`FutureWarning`).
    * If ``f == 0``: leaves the metric unset (lazy). You may set
      :attr:`metric` later before construction, or it will default to
      ``'angular'`` on first :meth:`add_item`.
n_neighbors : int, default=5
    Non-negative integer Number of neighbors to retrieve for each query.
on_disk_path : str or None, optional, default=None
    If provided, configures the path for on-disk building. When the underlying
    index exists, this enables on-disk build mode (equivalent to calling
    :meth:`on_disk_build` with the same filename).

    Note: Annoy core truncates the target file when enabling on-disk build.
    This wrapper treats ``on_disk_path`` as strictly equivalent to calling
    :meth:`on_disk_build` with the same filename (truncate allowed).

    In lazy mode (``f==0`` and/or ``metric is None``), activation occurs once
    the underlying C++ index is created.
prefault : bool or None, optional, default=None
    If True, request page-faulting index pages into memory when loading
    (when supported by the underlying platform/backing).
    If None, treated as ``False`` (reset to default).
seed : int or None, optional, default=None
    Non-negative integer seed. If set before the index is constructed,
    the seed is stored and applied when the C++ index is created.
    Seed value ``0`` is treated as "use Annoy's deterministic default seed"
    (a :class:`UserWarning` is emitted when ``0`` is explicitly provided).
verbose : int or None, optional, default=None
    Verbosity level. Values are clamped to the range ``[-2, 2]``.
    ``level >= 1`` enables Annoy's verbose logging; ``level <= 0`` disables it.
    Logging level inspired by gradient-boosting libraries:

    * ``<= 0`` : quiet (warnings only)
    * ``1``    : info (Annoy's ``verbose=True``)
    * ``>= 2`` : debug (currently same as info, reserved for future use)
schema_version : int, optional, default=None
    Serialization/compatibility strategy marker.

    This does not change the Annoy on-disk format, but it *does* control
    how the index is snapshotted in pickles.

    * ``0`` or ``1``: pickle stores a ``portable-v1`` snapshot (fast restore,
      ABI-checked).
    * ``2``: pickle stores ``canonical-v1`` (portable across ABIs; restores by
      rebuilding deterministically).
    * ``>=3``: pickle stores both portable and canonical (canonical is used as
      a fallback if the ABI check fails).

    If None, treated as ``0`` (reset to default).

Attributes
----------
f : int, default=0
    Vector dimension. ``0`` means "unknown / lazy".
metric : {'angular', 'euclidean', 'manhattan', 'dot', 'hamming'}, default="angular"
    Canonical metric name, or None if not configured yet (lazy).
n_neighbors : int, default=5
    Non-negative integer Number of neighbors to retrieve for each query.
on_disk_path : str or None, optional, default=None
    Configured on-disk build path. Setting this attribute enables on-disk
    build mode (equivalent to :meth:`on_disk_build`), with safety checks
    to avoid implicit truncation of existing files.
seed, random_state : int or None, optional, default=None
    Non-negative integer seed.
verbose : int or None, optional, default=None
    Verbosity level.
prefault : bool, default=False
    Stored prefault flag (see :meth:`load`/`:meth:`save` prefault parameters).
schema_version : int, default=0
    Reserved schema/version marker (stored; does not affect on-disk format).
n_features, n_features_, n_features_in_ : int
    Alias of `f` (dimension), provided for scikit-learn naming parity.
n_features_out_ : int
    Number of output features produced by transform.
feature_names_in_ : list-like
    Input feature names seen during fit.
    Set only when explicitly provided via fit(..., feature_names=...).
y : dict | None, optional, default=None
    If provided to fit(X, y), labels are stored here after a successful build.
    You may also set this property manually. When possible, the setter enforces
    that len(y) matches the current number of items (n_items).
pickle_mode : PickleMode
    Pickle strategy used by :class:`~scikitplot.annoy._mixins._pickle.PickleMixin`.
compress_mode : CompressMode or None
    Optional compression used by :class:`~scikitplot.annoy._mixins._pickle.PickleMixin`
    when serializing to bytes.

Notes
-----
This class is a direct subclass of the C-extension backend. It does not
override ``__new__`` and does not rely on cooperative initialization across
mixins. Mixins must be written so that their methods work even if they
define no ``__init__`` at all.

See Also
--------
scikitplot.cexternals._annoy.Annoy
Index.from_low_level

```
```
from scikitplot import annoy

annoy.__version__, dir(annoy), dir(annoy.Annoy)

```
```
('2.0.0+git.20251130.8a7e82cb537053926b0ac6ec132b9ccc875af40c', ['Annoy', 'AnnoyIndex', 'CompressMode', 'Index', 'IndexIOMixin', 'MetaMixin', 'NDArrayMixin', 'PickleMixin', 'PickleMode', 'PlottingMixin', 'VectorOpsMixin', '__all__', '__author__', '__author_email__', '__builtins__', '__cached__', '__doc__', '__file__', '__git_hash__', '__loader__', '__name__', '__package__', '__path__', '__spec__', '__version__', '_base', '_metadata', '_mixins', '_utils', 'annotations', 'annoylib'], ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__sklearn_clone__', '__sklearn_is_fitted__', '__sklearn_tags__', '__str__', '__subclasshook__', '_f', '_metric_id', '_on_disk_path', '_prefault', '_repr_html_', '_schema_version', '_y', '_y_map', 'add_item', 'build', 'deserialize', 'f', 'feature_names_in_', 'fit', 'fit_transform', 'get_distance', 'get_feature_names_out', 'get_item', 'get_n_items', 'get_n_trees', 'get_nns_by_item', 'get_nns_by_vector', 'get_params', 'info', 'load', 'memory_usage', 'metric', 'n_features', 'n_features_', 'n_features_in_', 'n_features_out_', 'n_neighbors', 'on_disk_build', 'on_disk_path', 'prefault', 'random_state', 'rebuild', 'repr_info', 'save', 'schema_version', 'seed', 'serialize', 'set_params', 'set_seed', 'set_verbose', 'set_verbosity', 'transform', 'unbuild', 'unload', 'verbose', 'y', 'y_map'])

```
```
import sys

# TODO: change this import to wherever your modified AnnoyIndex lives
# e.g. scikitplot.cexternals._annoy or similar
# import scikitplot.cexternals._annoy as annoy
from scikitplot import annoy

sys.modules["annoy"] = annoy  # now `import annoy` will resolve to your module

import annoy

print(annoy.__doc__)

```
```
scikitplot.annoy
================
Public Annoy Python API for scikitplot.

Spotify ANNoy [1]_ (Approximate Nearest Neighbors Oh Yeah).

This package exposes **two layers**:

Exports:

1. Low-level C-extension types copied from Spotify's *annoy* project:
   :class:`~scikitplot.cexternals._annoy.Annoy` and :class:`~scikitplot.cexternals._annoy.AnnoyIndex`.

2. A high-level, mixin-composed wrapper :class:`~scikitplot.annoy.Index` that:
   - forwards the complete low-level API deterministically,
   - adds versioned manifest import/export,
   - provides explicit index I/O names (``save_index`` / ``load_index``),
   - provides safe Python-object persistence helpers (pickling),
   - adds optional NumPy export and plotting utilities.

Notes
-----
This module intentionally avoids side effects at import time (no implicit NumPy
or matplotlib imports).

.. seealso::
    * :ref:`ANNoy <annoy-index>`
    * :ref:`cexternals/ANNoy <cexternals-annoy-index>`
    * https://github.com/spotify/annoy
    * https://pypi.org/project/annoy

See Also
--------
scikitplot.cexternals._annoy
    Low-level C-extension backend.
scikitplot.annoy.Index
    High-level wrapper composed from mixins.

References
----------
.. [1] `Spotify AB. (2013, Feb 20). "ANNoy: Approximate Nearest Neighbors Oh Yeah"
   Github. https://github.com/spotify/annoy <https://github.com/spotify/annoy>`_

Examples
--------
>>> import random
>>> random.seed(0)

>>> # from annoy import AnnoyIndex
>>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
>>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

>>> f = 40  # vector dimensionality
>>> t = Index(f, "angular")  # same constructor as the low-level backend
>>> t.add_item(0, [1] * f)
>>> t.build(10)  # Build 10 trees
>>> t.get_nns_by_item(0, 1)  # Find nearest neighbor

```
```
AnnoyIndex()

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | None |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
Index()

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | None |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# =============================================================
# 1. Construction
# =============================================================
idx = Index()
idx = Index(None, None)
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
print(idx.info())
print(idx)
print(type(idx))
idx
# help(idx.info)

```
```
Index dimension: 0
Metric         : None
{'f': 0, 'metric': None, 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 0, 'n_trees': 0}
Annoy(**{'f': 0, 'metric': None, 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})
<class 'scikitplot.annoy._base.Index'>

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | None |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
dir(idx)

```
```
['_META_SCHEMA_VERSION', '_PICKLE_STATE_VERSION', '__annotations__', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__len__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__setstate__', '__sizeof__', '__sklearn_clone__', '__sklearn_is_fitted__', '__sklearn_tags__', '__str__', '__subclasshook__', '__weakref__', '_as_2d_coords', '_backend', '_compress_mode', '_f', '_get_lock', '_lock', '_metric_id', '_ndarray_expected_rows', '_ndarray_infer_f', '_ndarray_iter_ids', '_ndarray_materialize_dense', '_ndarray_require_unbuilt', '_on_disk_path', '_pickle_mode', '_plotting_backend', '_prefault', '_rebuild', '_repr_html_', '_schema_version', '_y', '_y_map', 'add_item', 'add_items', 'backend', 'build', 'compress_mode', 'deserialize', 'f', 'feature_names_in_', 'fit', 'fit_transform', 'from_bytes', 'from_json', 'from_low_level', 'from_metadata', 'from_yaml', 'get_distance', 'get_feature_names_out', 'get_item', 'get_item_vectors', 'get_n_items', 'get_n_trees', 'get_nns_by_item', 'get_nns_by_vector', 'get_params', 'info', 'iter_item_vectors', 'kneighbors', 'kneighbors_graph', 'load', 'load_bundle', 'load_index', 'memory_usage', 'metric', 'n_features', 'n_features_', 'n_features_in_', 'n_features_out_', 'n_neighbors', 'on_disk_build', 'on_disk_path', 'pickle_mode', 'plot_index', 'plot_knn_edges', 'prefault', 'query_by_item', 'query_by_vector', 'query_vectors_by_item', 'query_vectors_by_vector', 'random_state', 'rebuild', 'repr_info', 'save', 'save_bundle', 'save_index', 'schema_version', 'seed', 'serialize', 'set_params', 'set_seed', 'set_verbose', 'set_verbosity', 'to_bytes', 'to_json', 'to_metadata', 'to_numpy', 'to_pandas', 'to_scipy_csr', 'to_yaml', 'transform', 'unbuild', 'unload', 'verbose', 'y', 'y_map']

```
```
# AttributeError: readonly attribute
# idx._metric_id = 1
idx._f, idx._metric_id, idx._on_disk_path

```
```
(0, 0, None)

```
```
idx.f, idx.metric, idx.on_disk_path

```
```
(0, None, None)

```
```
idx.metric = "dot"
idx

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | 'dot' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
idx.f, idx.metric, idx.on_disk_path

```
```
(0, 'dot', None)

```
```
type(idx)

```
```
# =============================================================
# 1. Construction
# =============================================================
idx = Index(f=3, metric="angular")
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
print(idx.info())
print(idx)
idx

```
```
Index dimension: 3
Metric         : angular
{'f': 3, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 0, 'n_trees': 0}
Annoy(**{'f': 3, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 3 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# =============================================================
# 2. Add items
# =============================================================
idx.add_item(0, [0, 0, 0])

idx.add_item(1, [1, 0, 0])
idx.add_item(2, [0, 1, 0])
idx.add_item(3, [0, 0, 1])

idx.add_item(4, [2, 0, 0])
idx.add_item(5, [0, 2, 0])
idx.add_item(6, [0, 0, 2])

idx.add_item(7, [3, 0, 0])
idx.add_item(8, [0, 3, 0])
idx.add_item(9, [0, 0, 3])

idx.add_item(10, [4, 0, 0])
idx.add_item(11, [0, 4, 0])
idx.add_item(12, [0, 0, 4])

idx.add_item(12, [4, 0, 0])
idx.add_item(13, [0, 4, 0])
idx.add_item(14, [0, 0, 4])

print("Number of items:", idx.get_n_items())
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
print(idx.info())
print(idx)
idx

```
```
Number of items: 15
Index dimension: 3
Metric         : angular
{'f': 3, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 15, 'n_trees': 0}
Annoy(**{'f': 3, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 3 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
def plot(idx, y=None, **kwargs):
    import numpy as np
    import matplotlib.pyplot as plt
    import scikitplot.cexternals._annoy._plotting as utils

    single = np.zeros(idx.get_n_items(), dtype=int)
    if y is None:
        double = np.random.uniform(0, 1, idx.get_n_items()).round()

    # single vs double
    fig, ax = plt.subplots(ncols=2, figsize=(12, 5))
    alpha = kwargs.pop("alpha", 0.8)
    y2 = utils.plot_annoy_index(
        idx,
        dims = list(range(idx.f)),
        plot_kwargs={"draw_legend": False},
        ax=ax[0],
    )[0]
    utils.plot_annoy_knn_edges(
        idx,
        y2,
        k=1,
        line_kwargs={"alpha": alpha},
        ax=ax[1],
    )

idx.unbuild()
idx.build(100)
plot(idx)

```
![plot Annoy python api](../../_images/sphx_glr_plot_Annoy_python_api_001.png)
```
from scikitplot import annoy as a

print(a.Annoy)          # same
print(a.AnnoyIndex)     # same
print(a.Index)          # should show <class '..._base.Index'>

print(isinstance(idx, a.Annoy))
print(isinstance(idx, a.AnnoyIndex))
print(isinstance(idx, a.Index))

print(type(idx))
print(idx.__class__.__module__)
print(idx.__class__.__mro__)

```
```
<class 'scikitplot.cexternals._annoy.Annoy'>
<class 'scikitplot.cexternals._annoy.Annoy'>
<class 'scikitplot.annoy._base.Index'>
True
True
True
<class 'scikitplot.annoy._base.Index'>
scikitplot.annoy._base
(<class 'scikitplot.annoy._base.Index'>, <class 'scikitplot.cexternals._annoy.Annoy'>, <class 'scikitplot.annoy._mixins._meta.MetaMixin'>, <class 'scikitplot.annoy._mixins._io.IndexIOMixin'>, <class 'scikitplot.annoy._mixins._pickle.PickleMixin'>, <class 'scikitplot.annoy._mixins._vectors.VectorOpsMixin'>, <class 'scikitplot.annoy._mixins._ndarray.NDArrayMixin'>, <class 'scikitplot.annoy._mixins._plotting.PlottingMixin'>, <class 'object'>)

```
```
# =============================================================
# 1. Construction
# =============================================================
idx = Index(f=3, metric="angular")
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
print(idx.info())
print(idx)
idx

```
```
Index dimension: 3
Metric         : angular
{'f': 3, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 0, 'n_trees': 0}
Annoy(**{'f': 3, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 3 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# =============================================================
# 2. Add items
# =============================================================
idx.add_item(0, [1, 0, 0])
idx.add_item(1, [0, 1, 0])
idx.add_item(2, [0, 0, 1])

print("Number of items:", idx.get_n_items())
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)

```
```
Number of items: 3
Index dimension: 3
Metric         : angular

```
```
# =============================================================
# 1. Construction
# =============================================================
idx = Index(100, metric="angular")
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
idx.on_disk_build("annoy_test_2.annoy")
# help(idx.on_disk_build)

```
```
Index dimension: 100
Metric         : angular

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | 'annoy\_test\_2.annoy' |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# =============================================================
# 2. Add items
# =============================================================
f=100
n=1000
for i in range(n):
    if(i % (n//10) == 0): print(f"{i} / {n} = {1.0 * i / n}")
    # v = []
    # for z in range(f):
    #     v.append(random.gauss(0, 1))
    v = [random.gauss(0, 1) for _ in range(f)]
    idx.add_item(i, v)

print("Number of items:", idx.get_n_items())
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
print(idx)

```
```
0 / 1000 = 0.0
100 / 1000 = 0.1
200 / 1000 = 0.2
300 / 1000 = 0.3
400 / 1000 = 0.4
500 / 1000 = 0.5
600 / 1000 = 0.6
700 / 1000 = 0.7
800 / 1000 = 0.8
900 / 1000 = 0.9
Number of items: 1000
Index dimension: 100
Metric         : angular
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
```
# =============================================================
# 3. Build index
# =============================================================
idx.build(10)
print("Trees:", idx.get_n_trees())
print("Memory usage:", idx.memory_usage(), "bytes")
print(idx.info())
print(idx)
idx
# help(idx.build)

```
```
Trees: 10
Memory usage: 688688 bytes
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 10, 'memory_usage_byte': 688688, 'memory_usage_mib': 0.6567840576171875}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | 10 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | 'annoy\_test\_2.annoy' |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
idx.unbuild()
print(idx.info())
print(idx)
idx

```
```
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 0}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | 10 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | 'annoy\_test\_2.annoy' |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
idx.build(10)
print(idx.info())
print(idx)
idx

```
```
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 10, 'memory_usage_byte': 688688, 'memory_usage_mib': 0.6567840576171875}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | 10 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | 'annoy\_test\_2.annoy' |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# =============================================================
# 1. Construction
# =============================================================
idx = Index(0, metric="angular")
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
print(idx.info())
print(idx)
idx

```
```
Index dimension: 0
Metric         : angular
{'f': 0, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 0, 'n_trees': 0}
Annoy(**{'f': 0, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# =============================================================
# 2. Add items
# =============================================================
f=100
n=1000
for i in range(n):
    if(i % (n//10) == 0): print(f"{i} / {n} = {1.0 * i / n}")
    # v = []
    # for z in range(f):
    #     v.append(random.gauss(0, 1))
    v = [random.gauss(0, 1) for _ in range(f)]
    idx.add_item(i, v)

print("Number of items:", idx.get_n_items())
print("Index dimension:", idx.f)
print("Metric         :", idx.metric)
print(idx)

```
```
0 / 1000 = 0.0
100 / 1000 = 0.1
200 / 1000 = 0.2
300 / 1000 = 0.3
400 / 1000 = 0.4
500 / 1000 = 0.5
600 / 1000 = 0.6
700 / 1000 = 0.7
800 / 1000 = 0.8
900 / 1000 = 0.9
Number of items: 1000
Index dimension: 100
Metric         : angular
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
```
# =============================================================
# 3. Build index
# =============================================================
idx.build(10)
print("Trees:", idx.get_n_trees())
print("Memory usage:", idx.memory_usage(), "bytes")
print(idx.info())
print(idx)
idx
# help(idx.get_n_trees)

```
```
Trees: 10
Memory usage: 818008 bytes
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 10, 'memory_usage_byte': 818008, 'memory_usage_mib': 0.7801132202148438}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | 10 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# =============================================================
# 4. Query — return
# =============================================================
res = idx.get_nns_by_item(
    0,
    5,
    # search_k = -1,
    include_distances=True,
)

print(res)

```
```
([0, 183, 596, 293, 132], [0.0, 1.1197848320007324, 1.2014238834381104, 1.201889991760254, 1.2221797704696655])

```
```
# =============================================================
# 8. Query using vector
# =============================================================
res2 = idx.get_nns_by_vector(
    [random.gauss(0, 1) for _ in range(f)],
    5,
    include_distances=True
)
print("\nQuery by vector:", res2)

```
```
Query by vector: ([543, 406, 539, 833, 868], [1.2443636655807495, 1.2754391431808472, 1.2776145935058594, 1.2818483114242554, 1.2914206981658936])

```
```
# =============================================================
# 9. Low-level (non-result) mode
# =============================================================
items = idx.get_nns_by_item(0, 2, include_distances=False)
print("\nLow-level items only:", items)

items_low, d_low = idx.get_nns_by_item(0, 2, include_distances=True)
print("Low-level tuple return:", items_low, d_low)

```
```
Low-level items only: [0, 293]
Low-level tuple return: [0, 293] [0.0, 1.201889991760254]

```
```
# =============================================================
# 10. Persistence
# =============================================================
print("\n=== Saving with binary annoy ===")
print(idx.info())
print(idx)
idx
idx.save("annoy_test_2.annoy")
print(idx.info())
print(idx)
idx

print("Loading...")
idx2 = Index(100, metric='angular').load("annoy_test_2.annoy")
print("Loaded index:", idx2)

```
```
=== Saving with binary annoy ===
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 10, 'memory_usage_byte': 818008, 'memory_usage_mib': 0.7801132202148438}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 10, 'memory_usage_byte': 687840, 'memory_usage_mib': 0.655975341796875}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})
Loading...
Loaded index: Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
```
import joblib

joblib.dump(idx2, "test.joblib")
a = joblib.load("test.joblib")
a

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | 'annoy\_test\_2.annoy' |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
a.info(), a.get_n_items(), a.get_n_trees()

```
```
({'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 10, 'memory_usage_byte': 687840, 'memory_usage_mib': 0.655975341796875}, 1000, 10)

```
```
np.array_equal(a.get_item(0), idx2.get_item(0))

```
```
True

```
```
np.array_equal(a.get_item(0), idx.get_item(0))

```
```
True

```
```
# =============================================================
# 11. Raw serialize / deserialize
# =============================================================
print("\n=== Raw serialize ===")
buf = idx.serialize()
new_idx = Index(100, metric='angular')
new_idx.deserialize(buf)
print("Deserialized index n_items:", new_idx.get_n_items())
print(idx.info())
print(idx)
idx

```
```
=== Raw serialize ===
Deserialized index n_items: 1000
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 1000, 'n_trees': 10, 'memory_usage_byte': 687840, 'memory_usage_mib': 0.655975341796875}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | 10 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | 'annoy\_test\_2.annoy' |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
idx.unload()
print(idx.info())
print(idx)
idx

```
```
{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 0, 'n_trees': 0}
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 100 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | 10 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
# idx.build(10)
idx.load("annoy_test_2.annoy")
print(idx)
type(idx)

```
```
Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
```
# joblib
import joblib

joblib.dump(idx, "test.joblib"), joblib.load("test.joblib")

```
```
(['test.joblib'], Annoy(**{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'annoy_test_2.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0}))

```
```
from scikitplot import annoy as a

f = 10
idx = a.AnnoyIndex(f, "angular")

# Distinct non-zero content so we can see mismatches clearly
for i in range(20):
    idx.add_item(i, [float(i)] * f)
idx.build(10)
type(idx)

```
```
from scikitplot import annoy as a

# Legacy Support
idx = a.Index.from_low_level(idx)

import joblib
joblib.dump(idx, "test.joblib")
type(idx)

```
```
print(idx.info())
print(idx)
idx

```
```
{'f': 10, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 20, 'n_trees': 10, 'memory_usage_byte': 6832, 'memory_usage_mib': 0.0065155029296875}
Annoy(**{'f': 10, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': None, 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0})

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 10 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | 10 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
idx.get_nns_by_item(0, 10), len(idx.get_item(0))

```
```
([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)

```
```
import random
from scikitplot.utils._time import Timer

n, f = 1_000_000, 10
X = [[random.gauss(0, 1) for _ in range(f)] for _ in range(n)]
q = [[random.gauss(0, 1) for _ in range(f)]]

```
```
feature_names = [f"col_{i}" for i in range(10)]
# idx = Index().fit(X, feature_names=map("feature_{}".format, range(0,10)))
idx = Index().fit(X, feature_names=feature_names)
idx

```
Annoy[dev](https://scikit-plots.github.io/dev/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (dev)")|[0.5](https://scikit-plots.github.io/0.5/modules/generated/scikitplot.cexternals._annoy.Annoy.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 10 |
| 🗗 Copy | metric | 'angular' |
| 🗗 Copy | n\_trees | -1 |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | n\_jobs | -1 |
| 🗗 Copy | l1\_ratio | 0.0 |

  
  
```
idx.feature_names_in_

```
```
('col_0', 'col_1', 'col_2', 'col_3', 'col_4', 'col_5', 'col_6', 'col_7', 'col_8', 'col_9')

```
```
idx.transform(X[:5], include_distances=True, return_labels=True)

```
```
([[[0.2995162308216095, 0.26872411370277405, -0.31986403465270996, 0.40183380246162415, -0.38237830996513367, 0.9011735916137695, 0.7422892451286316, 0.8437517285346985, 1.3799339532852173, -0.06174032390117645], [0.3315776586532593, 0.1875527799129486, -0.8046607375144958, 0.3848173916339874, -0.5218529105186462, 0.9577100872993469, 0.6407361626625061, 0.6109951138496399, 1.6533797979354858, -0.14335046708583832], [0.5550230741500854, 0.1936453878879547, -0.6877626776695251, 0.3667159378528595, -1.054802417755127, 1.2736949920654297, 0.7120872139930725, 0.9665201306343079, 1.589842438697815, 0.11769255250692368], [0.6585002541542053, 1.2284033298492432, -0.5905928611755371, 0.8687102198600769, -0.38249245285987854, 1.7344026565551758, 2.142791271209717, 1.7588355541229248, 2.0976037979125977, 0.07778248935937881], [0.03238312527537346, 0.15098726749420166, -0.7241115570068359, 0.42932650446891785, -0.39402392506599426, 1.4385422468185425, 0.5785043835639954, 0.723202109336853, 1.7738548517227173, -0.3067554533481598]], [[-0.4028843939304352, 0.6818151473999023, -1.117720365524292, 1.0333377122879028, 0.1900119036436081, -0.8227489590644836, 0.7598976492881775, 0.5180985927581787, 0.3719368278980255, 1.6910221576690674], [-0.6337267160415649, 0.2562711834907532, -1.0475351810455322, 0.6090968251228333, 0.16023726761341095, -0.25397247076034546, 0.7996667623519897, 0.4232807755470276, 0.3861091434955597, 1.6330668926239014], [-0.26220712065696716, 1.4323557615280151, -1.7844585180282593, 1.471380591392517, -0.12713484466075897, -0.7947000861167908, 0.7404575943946838, 0.37495657801628113, -0.26135268807411194, 2.0074775218963623], [-0.633094072341919, 1.0765098333358765, -1.2297742366790771, 1.385195255279541, 0.47716212272644043, -0.8874576091766357, 0.627689778804779, 0.2656075656414032, 0.010012293234467506, 1.1639745235443115], [-0.057369060814380646, 0.14341656863689423, -0.7659817337989807, 1.020512580871582, 0.5652787685394287, -0.5196720957756042, 0.25376802682876587, 0.34293559193611145, 0.19690339267253876, 1.371278166770935]], [[-0.21217121183872223, 0.2056313157081604, 0.722652018070221, 0.8762103319168091, 0.6707500219345093, -1.6379401683807373, 0.9332223534584045, -0.5422225594520569, -1.1026482582092285, 0.056520331650972366], [-0.4286768138408661, 0.7249663472175598, 0.6372804641723633, 1.19240403175354, 1.4679796695709229, -2.310258150100708, 1.4233965873718262, -0.17894130945205688, -1.9173343181610107, -0.042759768664836884], [-0.6377572417259216, -0.5511672496795654, 0.5751820206642151, 1.4192023277282715, 0.5922985672950745, -2.668642997741699, 1.5364527702331543, -0.8178994655609131, -1.6896406412124634, 0.10657071322202682], [-0.5726475119590759, 0.8345264792442322, 1.36396324634552, 0.6331958174705505, 1.1805782318115234, -1.7656670808792114, 1.5728577375411987, -1.2082107067108154, -1.7261351346969604, 0.2111993134021759], [-0.2336995154619217, 0.049890730530023575, 0.28595656156539917, 0.9530869126319885, 0.8761396408081055, -1.5737037658691406, 0.822296679019928, -0.01487642154097557, -0.6082475781440735, -0.13022370636463165]], [[1.8360724449157715, -1.7788029909133911, -1.0985404253005981, -1.2299158573150635, -0.4852966070175171, 0.22859908640384674, -0.03444309160113335, -0.34960466623306274, -0.2747590243816376, 0.1640910655260086], [2.132922649383545, -1.8067975044250488, -0.5985732078552246, -1.4354743957519531, -0.6862561702728271, -0.055050190538167953, -0.20438416302204132, -0.10576765984296799, -0.18300966918468475, 0.0332980640232563], [1.1669689416885376, -1.1882712841033936, -1.2006605863571167, -0.9844658970832825, -0.35999438166618347, 0.1763678342103958, -0.16189533472061157, -0.22041620314121246, -0.4420163631439209, -0.25835075974464417], [1.956663966178894, -2.392338991165161, -1.1514801979064941, -0.632803738117218, -0.8665069341659546, 0.0485476516187191, -0.1458033323287964, 0.21871283650398254, -0.542730987071991, 0.1998269259929657], [2.334972858428955, -1.329618215560913, -1.0470868349075317, -0.9541568160057068, -0.20112811028957367, 0.07081523537635803, -0.7037537693977356, -0.5045510530471802, -0.27305135130882263, 0.003621454583480954]], [[0.38939982652664185, -0.7888681292533875, 0.21797947585582733, -0.39556416869163513, 0.09195032715797424, -0.45746126770973206, 0.7257154583930969, 0.163970485329628, 0.3641418516635895, 0.2510545551776886], [1.57913339138031, -2.1115193367004395, 0.8659923672676086, -1.4170335531234741, 0.31213846802711487, -1.1963188648223877, 1.6555734872817993, 0.32366394996643066, 0.7790639996528625, 0.7397186160087585], [1.0569108724594116, -1.1905972957611084, 0.2124386429786682, -0.611705482006073, -0.0573427639901638, -1.1755845546722412, 1.216412901878357, 0.34951576590538025, 0.6942406296730042, 0.12841904163360596], [0.7479621171951294, -0.9955563545227051, -0.015303264372050762, -1.035817265510559, 0.12877921760082245, -0.4193073809146881, 1.2454578876495361, 0.11109428107738495, 0.49217328429222107, 0.44488564133644104], [0.5615819096565247, -1.8715558052062988, 0.3513823449611664, -0.457656592130661, 0.13815268874168396, -1.3939476013183594, 0.9171489477157593, -0.1433219164609909, 0.8151221871376038, 0.5432571768760681]]], [[0.0, 0.26271483302116394, 0.2870350480079651, 0.29192054271698, 0.30356016755104065], [0.0, 0.3105616569519043, 0.3365742266178131, 0.34621360898017883, 0.364113450050354], [0.0, 0.26791828870773315, 0.28913918137550354, 0.32415494322776794, 0.3490498960018158], [0.0, 0.2397470921278, 0.2777545750141144, 0.32662802934646606, 0.3373226523399353], [0.0, 0.20473255217075348, 0.2834738790988922, 0.32531020045280457, 0.3566683232784271]], [[None, None, None, None, None], [None, None, None, None, None], [None, None, None, None, None], [None, None, None, None, None], [None, None, None, None, None]])

```
```
with Timer("set_params"):
    for m in ["angular", "l1", "l2", ".", "hamming"]:
        idx = Index().set_params(metric=m).fit(X)
        print(m, idx.transform(q))

```
```
angular [[[-0.576092004776001, -1.1014655828475952, 1.5072448253631592, -0.37987226247787476, -0.12107884138822556, -0.16090495884418488, -0.9599498510360718, 0.6443582773208618, 0.7830631136894226, 0.1322690099477768], [-0.14904215931892395, -1.9222668409347534, 2.399625778198242, -0.568252444267273, 0.47048714756965637, -0.5003377199172974, -1.3439618349075317, 1.420609951019287, 1.4913909435272217, -0.13222387433052063], [0.047580111771821976, -0.6638967394828796, 1.7719310522079468, 0.10254024714231491, 0.41480061411857605, -0.6402038931846619, -0.8408301472663879, 0.6886392831802368, 0.7279884219169617, -0.45430782437324524], [0.14965766668319702, -0.647461473941803, 0.9277555346488953, -0.2826462686061859, 0.030802298337221146, -0.31125545501708984, -0.5365280508995056, 0.6251130104064941, 0.402795672416687, -0.2578299939632416], [-1.5860871076583862, -1.3003756999969482, 2.377390146255493, 0.26952216029167175, 0.4409177601337433, -0.7791521549224854, -0.8170314431190491, 0.6286078095436096, 1.7586954832077026, -0.5436699986457825]]]
l1 [[[-0.30479490756988525, -1.4008817672729492, 1.698373556137085, 0.24252529442310333, 0.2701326012611389, -0.360563188791275, -0.9885985255241394, -0.042488664388656616, 1.2770600318908691, -0.04430120438337326], [-0.6219375729560852, -1.06143057346344, 1.399613380432129, -0.2740878462791443, 0.24684467911720276, -0.2587703764438629, -1.1598162651062012, 1.0147157907485962, 0.45408761501312256, -0.5282885432243347], [-0.4270615875720978, -1.5546542406082153, 1.813949704170227, -0.2853894829750061, 0.43189895153045654, -0.4212631285190582, -0.8940620422363281, 0.34188783168792725, 1.3183560371398926, -0.31580230593681335], [-1.2136160135269165, -1.201457142829895, 1.8118925094604492, 0.6647083163261414, -0.10947311669588089, -0.5995438694953918, -0.6518698334693909, 0.6958609819412231, 1.019225001335144, -0.35290318727493286], [0.06335698813199997, -1.2978917360305786, 1.9375625848770142, -0.3019416332244873, -0.44243577122688293, 0.09211653470993042, -0.9813377857208252, 0.8846978545188904, 0.9574850797653198, 0.4997349977493286]]]
l2 [[[-0.6069902777671814, -1.5303187370300293, 1.7485501766204834, 0.09983374923467636, -0.2737273573875427, -0.4870619773864746, -0.857934296131134, 0.7189533114433289, 0.4311307370662689, 0.388454407453537], [-1.2136160135269165, -1.201457142829895, 1.8118925094604492, 0.6647083163261414, -0.10947311669588089, -0.5995438694953918, -0.6518698334693909, 0.6958609819412231, 1.019225001335144, -0.35290318727493286], [-0.30987605452537537, -1.2312941551208496, 2.0116841793060303, -0.16664312779903412, -0.520256757736206, -0.9175041913986206, -0.714323878288269, 0.7462008595466614, 0.1487007439136505, -0.02592574991285801], [-1.0766710042953491, -1.4681044816970825, 1.9089303016662598, 0.6252002120018005, -0.25846579670906067, -1.316728949546814, -0.5661339163780212, 1.2526668310165405, 0.7563868165016174, 0.052930448204278946], [-0.10180085152387619, -1.4097673892974854, 1.7270126342773438, 0.45651310682296753, 0.33137813210487366, -1.0178571939468384, -0.7259405851364136, 1.7998244762420654, 1.4066683053970337, 0.10225006937980652]]]
. [[[-2.2803711891174316, -1.5878574848175049, 2.8240625858306885, -1.586233377456665, 0.9097247123718262, -0.4147607982158661, -2.09379506111145, 0.3496924936771393, 0.728812575340271, 0.5651527047157288], [-1.3417750597000122, -1.9075969457626343, 2.253904342651367, 0.010064701549708843, 0.46100345253944397, -0.8102414608001709, -1.217931866645813, 0.9163800477981567, 1.270017385482788, 0.9628432393074036], [-0.16387999057769775, -2.0130932331085205, 2.535552740097046, -1.0601918697357178, 0.7495193481445312, 0.13379618525505066, -0.9361055493354797, 1.2072060108184814, 1.6731535196304321, 0.8728613257408142], [-3.885061025619507, -1.308631181716919, 1.6636812686920166, -0.2573096752166748, -1.8441660404205322, -0.5698438882827759, -0.8686019778251648, 1.9412153959274292, 1.0181323289871216, 1.467710256576538], [-1.5860871076583862, -1.3003756999969482, 2.377390146255493, 0.26952216029167175, 0.4409177601337433, -0.7791521549224854, -0.8170314431190491, 0.6286078095436096, 1.7586954832077026, -0.5436699986457825]]]
hamming [[[0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0]]]

```
```
with Timer("rebuild"):
    base = Index(metric="l2").fit(X)

    for m in ["angular", "l1", "l2", "dot", "hamming"]:
        idx_m = base.rebuild(metric=m)          # rebuild-from-index
        print(m, idx_m.transform(q))            # no .fit(X) here

```
```
angular [[[-0.576092004776001, -1.1014655828475952, 1.5072448253631592, -0.37987226247787476, -0.12107884138822556, -0.16090495884418488, -0.9599498510360718, 0.6443582773208618, 0.7830631136894226, 0.1322690099477768], [-0.14904215931892395, -1.9222668409347534, 2.399625778198242, -0.568252444267273, 0.47048714756965637, -0.5003377199172974, -1.3439618349075317, 1.420609951019287, 1.4913909435272217, -0.13222387433052063], [0.047580111771821976, -0.6638967394828796, 1.7719310522079468, 0.10254024714231491, 0.41480061411857605, -0.6402038931846619, -0.8408301472663879, 0.6886392831802368, 0.7279884219169617, -0.45430782437324524], [0.14965766668319702, -0.647461473941803, 0.9277555346488953, -0.2826462686061859, 0.030802298337221146, -0.31125545501708984, -0.5365280508995056, 0.6251130104064941, 0.402795672416687, -0.2578299939632416], [-1.5860871076583862, -1.3003756999969482, 2.377390146255493, 0.26952216029167175, 0.4409177601337433, -0.7791521549224854, -0.8170314431190491, 0.6286078095436096, 1.7586954832077026, -0.5436699986457825]]]
l1 [[[-0.30479490756988525, -1.4008817672729492, 1.698373556137085, 0.24252529442310333, 0.2701326012611389, -0.360563188791275, -0.9885985255241394, -0.042488664388656616, 1.2770600318908691, -0.04430120438337326], [-0.6219375729560852, -1.06143057346344, 1.399613380432129, -0.2740878462791443, 0.24684467911720276, -0.2587703764438629, -1.1598162651062012, 1.0147157907485962, 0.45408761501312256, -0.5282885432243347], [-0.4270615875720978, -1.5546542406082153, 1.813949704170227, -0.2853894829750061, 0.43189895153045654, -0.4212631285190582, -0.8940620422363281, 0.34188783168792725, 1.3183560371398926, -0.31580230593681335], [-1.2136160135269165, -1.201457142829895, 1.8118925094604492, 0.6647083163261414, -0.10947311669588089, -0.5995438694953918, -0.6518698334693909, 0.6958609819412231, 1.019225001335144, -0.35290318727493286], [0.06335698813199997, -1.2978917360305786, 1.9375625848770142, -0.3019416332244873, -0.44243577122688293, 0.09211653470993042, -0.9813377857208252, 0.8846978545188904, 0.9574850797653198, 0.4997349977493286]]]
l2 [[[-0.6069902777671814, -1.5303187370300293, 1.7485501766204834, 0.09983374923467636, -0.2737273573875427, -0.4870619773864746, -0.857934296131134, 0.7189533114433289, 0.4311307370662689, 0.388454407453537], [-1.2136160135269165, -1.201457142829895, 1.8118925094604492, 0.6647083163261414, -0.10947311669588089, -0.5995438694953918, -0.6518698334693909, 0.6958609819412231, 1.019225001335144, -0.35290318727493286], [-0.30987605452537537, -1.2312941551208496, 2.0116841793060303, -0.16664312779903412, -0.520256757736206, -0.9175041913986206, -0.714323878288269, 0.7462008595466614, 0.1487007439136505, -0.02592574991285801], [-1.0766710042953491, -1.4681044816970825, 1.9089303016662598, 0.6252002120018005, -0.25846579670906067, -1.316728949546814, -0.5661339163780212, 1.2526668310165405, 0.7563868165016174, 0.052930448204278946], [-0.10180085152387619, -1.4097673892974854, 1.7270126342773438, 0.45651310682296753, 0.33137813210487366, -1.0178571939468384, -0.7259405851364136, 1.7998244762420654, 1.4066683053970337, 0.10225006937980652]]]
dot [[[-2.2803711891174316, -1.5878574848175049, 2.8240625858306885, -1.586233377456665, 0.9097247123718262, -0.4147607982158661, -2.09379506111145, 0.3496924936771393, 0.728812575340271, 0.5651527047157288], [-1.3417750597000122, -1.9075969457626343, 2.253904342651367, 0.010064701549708843, 0.46100345253944397, -0.8102414608001709, -1.217931866645813, 0.9163800477981567, 1.270017385482788, 0.9628432393074036], [-0.16387999057769775, -2.0130932331085205, 2.535552740097046, -1.0601918697357178, 0.7495193481445312, 0.13379618525505066, -0.9361055493354797, 1.2072060108184814, 1.6731535196304321, 0.8728613257408142], [-3.885061025619507, -1.308631181716919, 1.6636812686920166, -0.2573096752166748, -1.8441660404205322, -0.5698438882827759, -0.8686019778251648, 1.9412153959274292, 1.0181323289871216, 1.467710256576538], [-1.5860871076583862, -1.3003756999969482, 2.377390146255493, 0.26952216029167175, 0.4409177601337433, -0.7791521549224854, -0.8170314431190491, 0.6286078095436096, 1.7586954832077026, -0.5436699986457825]]]
hamming [[[0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0]]]

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 35.409 seconds)

[![Launch binder](../../_images/binder_badge_logo.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/annoy/plot_Annoy_python_api.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo.svg)](../../lite/lab/index.html?path=auto_examples/annoy/plot_Annoy_python_api.ipynb)

[`Download Jupyter notebook: plot_Annoy_python_api.ipynb`](../../_downloads/81d65148e8e87b5a104fb7dc4dc24cd3/plot_Annoy_python_api.ipynb)

[`Download Python source code: plot_Annoy_python_api.py`](../../_downloads/2f64219d7cbca816c17f48b8b477f495/plot_Annoy_python_api.py)

[`Download zipped: plot_Annoy_python_api.zip`](../../_downloads/8288dcc098dff1a53e43b54cc43ffcdc/plot_Annoy_python_api.zip)

Related examples

![](../../_images/sphx_glr_plot_Annoy_legacy_c_api_thumb.png)

[annoy.Annoy legacy c-api with examples](plot_Annoy_legacy_c_api.html)

annoy.Annoy legacy c-api with examples![](../../_images/sphx_glr_plot_annoy_to_NPY_CSV_thumb.png)

[annoy.Index to NPY or CSV with examples](plot_annoy_to_NPY_CSV.html)

annoy.Index to NPY or CSV with examples![](../../_images/sphx_glr_plot_simple_script_thumb.png)

[Simple annoy.AnnoyIndex with examples](plot_simple_script.html)

Simple annoy.AnnoyIndex with examples![](../../_images/sphx_glr_plot_mmap_script_thumb.png)

[Mmap annoy.AnnoyIndex with examples](plot_mmap_script.html)

Mmap annoy.AnnoyIndex with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)