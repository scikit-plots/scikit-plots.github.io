> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-annoy-plot-annoy-cython-api-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Index (cython) python-api with examples[#](#index-cython-python-api-with-examples "Link to this heading")

An example showing the [`Index`](../../modules/generated/scikitplot.annoy._annoy.Index.html#scikitplot.annoy._annoy.Index "scikitplot.annoy._annoy.Index") class.

```
import numpy as np
import random; random.seed(0)
from pprint import pprint

import struct; print(struct.calcsize('P')*8)

```
```
64

```
```
from scikitplot.annoy._annoy import Index  # cython Total: 160 concrete index-data-metrics types 8 S × 4 T × 5 metrics
from scikitplot.annoy import AnnoyIndex  # Cpp 1 concrete index-data type (uint64 index float32 data)

# 32 bit int index
i = Index(10, "angular")
i.load(f"./test.tree")
# This might change in the future if we change the search algorithm, but in that case let's update the test
result1 = i.get_nns_by_item(0, 10)

# 64 bit uint index
j = AnnoyIndex(10, "angular")
for idx in range(i.get_n_items()):
    j.add_item(idx, i.get_item(idx))
j.build(10)
j.save("test64.tree")
result2 = i.get_nns_by_item(0, 10)

i = AnnoyIndex(10, "angular")
i.load(f"./test64.tree")
# This might change in the future if we change the search algorithm, but in that case let's update the test
result3 = i.get_nns_by_item(0, 10)

result1, result2, result3

```
```
([0, 85, 42, 11, 54, 38, 53, 66, 19, 31], [0, 85, 42, 11, 54, 38, 53, 66, 19, 31], [0, 85, 42, 11, 54, 38, 26, 53, 66, 3])

```
```
# from annoy import Annoy, AnnoyIndex
# from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
# from scikitplot.annoy import Annoy, AnnoyIndex, Index
from scikitplot.annoy._annoy import Index, AnnoyIndex

print(Index.__doc__)

```
```
Index(int f: Optional[int] = None, str metric: Optional[str] = None, int n_neighbors: int = 5, *, str on_disk_path: Optional[str] = None, bool prefault: bool = False, int seed: Optional[int] = None, int verbose: Optional[int] = None, int schema_version: int = 0, str dtype: str = 'float32', str index_dtype: str = 'int32', str wrapper_dtype: str = 'uint64', str random_dtype: str = 'uint64', int n_jobs: Optional[int] = None, **kwargs)

Annoy Approximate Nearest Neighbors Index.

This is a Cython-powered Python wrapper around the Annoy C++ library.

Parameters
----------
f : int or None, default=None
    Embedding dimension. If 0 or None, dimension is inferred from first
    vector added. Must be positive for immediate index construction.
metric : str or None, default=None
    Distance metric. Supported values:
    * "angular", "cosine" → cosine-like distance
    * "euclidean", "l2", "lstsq" → L2 distance
    * "manhattan", "l1", "cityblock", "taxicab" → L1 distance
    * "dot", "@", ".", "dotproduct", "inner", "innerproduct" → negative dot product
    * "hamming" → bitwise Hamming distance
    If None and f > 0, defaults to "angular" with FutureWarning.
n_trees : int, default=-1
    Number of trees to build. If -1, auto-selects based on dimension.
    More trees = better accuracy but slower queries and more memory.
n_neighbors : int, default=5
    Default number of neighbors for queries (estimator parameter).
on_disk_path : str or None, default=None
    Path for on-disk building. If provided, enables memory-efficient
    building for large indices.
prefault : bool, default=False
    Whether to prefault pages when loading (may improve query latency).
seed : int or None, default=None
    Random seed for tree construction. If None, uses Annoy's default.
    Value 0 is treated as "use default" and emits a UserWarning.
verbose : int or None, default=None
    Verbosity level (clamped to [-2, 2]). Level >= 1 enables logging.
schema_version : int, default=0
    Pickle schema version marker (does not affect on-disk format).
dtype : str, default="float32"
    Data type for embeddings. Supported values:
    * "float16" / "half" / "fp16"   → float16_t (16-bit half precision)
    * "float32" / "single" / "fp32" → float (32-bit single precision, default)
    * "float64" / "double" / "fp64" → double (64-bit double precision)
    * "float128" / "quad" / "fp128" → float128_t (128-bit or long double)
    All types are accessed via the double-precision widened bridge.
    float16 values are narrowed on add_item; float128 gains no input precision
    but benefits from higher-precision internal arithmetic on GCC/Clang.
index_dtype : str, default="int32"
    Index identifier type. Supported values:
    * "int8"   → int8_t   (max 127 items)
    * "uint8"  → uint8_t  (max 255 items)
    * "int16"  → int16_t  (max 32,767 items)
    * "uint16" → uint16_t (max 65,535 items)
    * "int32"  → int32_t  (max 2,147,483,647 items, default)
    * "uint32" → uint32_t (max 4,294,967,295 items)
    * "int64"  → int64_t  (max 9,223,372,036,854,775,807 items)
    * "uint64" → uint64_t (max 18,446,744,073,709,551,615 items)
wrapper_dtype : str, default="uint64"
    Internal wrapper type (e.g., for Hamming packing).
    Future: "bool", "uint8", "uint32" etc.
random_dtype : str, default="uint64"
    Random seed type. Currently only "uint64" supported.
n_jobs : int or None, default=None
    Number of threads. If -1, uses all available cores.
**kwargs
    Future extensibility

Attributes
----------
f : int
    Embedding dimension (0 means "unset / lazy").
metric : str or None
    Canonical metric name, or None if not configured.
ptr : AnnoyIndexInterface*
    Pointer to C++ index (NULL if not constructed).

# State Indicators (Internal)
_f_valid : bool
    True if f has been set (> 0)
_metric_valid : bool
    True if metric has been configured
_index_constructed : bool
    True if C++ index exists (ptr != NULL)

Notes
-----
* 32-bit integer (4 bytes) can store values from −2**31 to 2**31−1, roughly ±2 billion.
* 64-bit integer (8 bytes) can store values from −2**63 to 2**63−1, roughly ±9 quintillion.

Examples
--------
>>> index = Index(f=128, metric='angular', seed=42)
>>> index.add_item(0, [0.1] * 128)
>>> index.add_item(1, [0.2] * 128)
>>> index.build(n_trees=10)
>>> neighbors, distances = index.get_nns_by_item(0, n=5, include_distances=True)

set dtype:

>>> # Standard usage (float32)
>>> index = Index(f=128, metric='angular', dtype='float32')
>>>
>>> # High precision (float64)
>>> index = Index(f=128, metric='euclidean', dtype='float64')
>>>
>>> # Half precision (float16) - future
>>> # index = Index(f=128, metric='angular', dtype='float16')

```
```
import sys
import tempfile
from pathlib import Path

import scikitplot

# spotify/annoy Backward compatibility helper
sys.modules["annoy"] = scikitplot.annoy._annoy  # now `import annoy` will resolve to your module

import annoy; print(annoy.AnnoyIndex.__doc__)

```
```
Index(int f: Optional[int] = None, str metric: Optional[str] = None, int n_neighbors: int = 5, *, str on_disk_path: Optional[str] = None, bool prefault: bool = False, int seed: Optional[int] = None, int verbose: Optional[int] = None, int schema_version: int = 0, str dtype: str = 'float32', str index_dtype: str = 'int32', str wrapper_dtype: str = 'uint64', str random_dtype: str = 'uint64', int n_jobs: Optional[int] = None, **kwargs)

Annoy Approximate Nearest Neighbors Index.

This is a Cython-powered Python wrapper around the Annoy C++ library.

Parameters
----------
f : int or None, default=None
    Embedding dimension. If 0 or None, dimension is inferred from first
    vector added. Must be positive for immediate index construction.
metric : str or None, default=None
    Distance metric. Supported values:
    * "angular", "cosine" → cosine-like distance
    * "euclidean", "l2", "lstsq" → L2 distance
    * "manhattan", "l1", "cityblock", "taxicab" → L1 distance
    * "dot", "@", ".", "dotproduct", "inner", "innerproduct" → negative dot product
    * "hamming" → bitwise Hamming distance
    If None and f > 0, defaults to "angular" with FutureWarning.
n_trees : int, default=-1
    Number of trees to build. If -1, auto-selects based on dimension.
    More trees = better accuracy but slower queries and more memory.
n_neighbors : int, default=5
    Default number of neighbors for queries (estimator parameter).
on_disk_path : str or None, default=None
    Path for on-disk building. If provided, enables memory-efficient
    building for large indices.
prefault : bool, default=False
    Whether to prefault pages when loading (may improve query latency).
seed : int or None, default=None
    Random seed for tree construction. If None, uses Annoy's default.
    Value 0 is treated as "use default" and emits a UserWarning.
verbose : int or None, default=None
    Verbosity level (clamped to [-2, 2]). Level >= 1 enables logging.
schema_version : int, default=0
    Pickle schema version marker (does not affect on-disk format).
dtype : str, default="float32"
    Data type for embeddings. Supported values:
    * "float16" / "half" / "fp16"   → float16_t (16-bit half precision)
    * "float32" / "single" / "fp32" → float (32-bit single precision, default)
    * "float64" / "double" / "fp64" → double (64-bit double precision)
    * "float128" / "quad" / "fp128" → float128_t (128-bit or long double)
    All types are accessed via the double-precision widened bridge.
    float16 values are narrowed on add_item; float128 gains no input precision
    but benefits from higher-precision internal arithmetic on GCC/Clang.
index_dtype : str, default="int32"
    Index identifier type. Supported values:
    * "int8"   → int8_t   (max 127 items)
    * "uint8"  → uint8_t  (max 255 items)
    * "int16"  → int16_t  (max 32,767 items)
    * "uint16" → uint16_t (max 65,535 items)
    * "int32"  → int32_t  (max 2,147,483,647 items, default)
    * "uint32" → uint32_t (max 4,294,967,295 items)
    * "int64"  → int64_t  (max 9,223,372,036,854,775,807 items)
    * "uint64" → uint64_t (max 18,446,744,073,709,551,615 items)
wrapper_dtype : str, default="uint64"
    Internal wrapper type (e.g., for Hamming packing).
    Future: "bool", "uint8", "uint32" etc.
random_dtype : str, default="uint64"
    Random seed type. Currently only "uint64" supported.
n_jobs : int or None, default=None
    Number of threads. If -1, uses all available cores.
**kwargs
    Future extensibility

Attributes
----------
f : int
    Embedding dimension (0 means "unset / lazy").
metric : str or None
    Canonical metric name, or None if not configured.
ptr : AnnoyIndexInterface*
    Pointer to C++ index (NULL if not constructed).

# State Indicators (Internal)
_f_valid : bool
    True if f has been set (> 0)
_metric_valid : bool
    True if metric has been configured
_index_constructed : bool
    True if C++ index exists (ptr != NULL)

Notes
-----
* 32-bit integer (4 bytes) can store values from −2**31 to 2**31−1, roughly ±2 billion.
* 64-bit integer (8 bytes) can store values from −2**63 to 2**63−1, roughly ±9 quintillion.

Examples
--------
>>> index = Index(f=128, metric='angular', seed=42)
>>> index.add_item(0, [0.1] * 128)
>>> index.add_item(1, [0.2] * 128)
>>> index.build(n_trees=10)
>>> neighbors, distances = index.get_nns_by_item(0, n=5, include_distances=True)

set dtype:

>>> # Standard usage (float32)
>>> index = Index(f=128, metric='angular', dtype='float32')
>>>
>>> # High precision (float64)
>>> index = Index(f=128, metric='euclidean', dtype='float64')
>>>
>>> # Half precision (float16) - future
>>> # index = Index(f=128, metric='angular', dtype='float16')

```
```
index = Index()
index

```
Annoy[⍰](https://scikit-plots.github.io/dev/modules/generated/scikitplot.annoy.Index.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | None |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | dtype | 'float32' |
| 🗗 Copy | index\_dtype | 'int32' |
| 🗗 Copy | wrapper\_dtype | 'uint64' |
| 🗗 Copy | random\_dtype | 'uint64' |
| 🗗 Copy | n\_jobs | 1 |

  
  
```
index.set_params(**index.get_params())

```
Annoy[⍰](https://scikit-plots.github.io/dev/modules/generated/scikitplot.annoy.Index.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | None |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | dtype | 'float32' |
| 🗗 Copy | index\_dtype | 'int32' |
| 🗗 Copy | wrapper\_dtype | 'uint64' |
| 🗗 Copy | random\_dtype | 'uint64' |
| 🗗 Copy | n\_jobs | 1 |

  
  
```
a = index.clone()
a

```
Annoy[⍰](https://scikit-plots.github.io/dev/modules/generated/scikitplot.annoy.Index.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 0 |
| 🗗 Copy | metric | None |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | dtype | 'float32' |
| 🗗 Copy | index\_dtype | 'int32' |
| 🗗 Copy | wrapper\_dtype | 'uint64' |
| 🗗 Copy | random\_dtype | 'uint64' |
| 🗗 Copy | n\_jobs | 1 |

  
  
```
Index(10, metric= '.')

```
Annoy[⍰](https://scikit-plots.github.io/dev/modules/generated/scikitplot.annoy.Index.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 10 |
| 🗗 Copy | metric | '.' |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | dtype | 'float32' |
| 🗗 Copy | index\_dtype | 'int32' |
| 🗗 Copy | wrapper\_dtype | 'uint64' |
| 🗗 Copy | random\_dtype | 'uint64' |
| 🗗 Copy | n\_jobs | 1 |

  
  
```
Index(10, metric= 'l1')

```
Annoy[⍰](https://scikit-plots.github.io/dev/modules/generated/scikitplot.annoy.Index.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 10 |
| 🗗 Copy | metric | 'l1' |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | dtype | 'float32' |
| 🗗 Copy | index\_dtype | 'int32' |
| 🗗 Copy | wrapper\_dtype | 'uint64' |
| 🗗 Copy | random\_dtype | 'uint64' |
| 🗗 Copy | n\_jobs | 1 |

  
  
```
Index(10, metric= 'l2')

```
Annoy[⍰](https://scikit-plots.github.io/dev/modules/generated/scikitplot.annoy.Index.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 10 |
| 🗗 Copy | metric | 'l2' |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | dtype | 'float32' |
| 🗗 Copy | index\_dtype | 'int32' |
| 🗗 Copy | wrapper\_dtype | 'uint64' |
| 🗗 Copy | random\_dtype | 'uint64' |
| 🗗 Copy | n\_jobs | 1 |

  
  
```
Index(10, metric= 'hamming')

```
Annoy[⍰](https://scikit-plots.github.io/dev/modules/generated/scikitplot.annoy.Index.html "Annoy docs (installed)")Parameters

|  | Parameter | Value |
| --- | --- | --- |
| 🗗 Copy | f | 10 |
| 🗗 Copy | metric | 'hamming' |
| 🗗 Copy | n\_neighbors | 5 |
| 🗗 Copy | seed | None |
| 🗗 Copy | verbose | None |
| 🗗 Copy | on\_disk\_path | None |
| 🗗 Copy | prefault | False |
| 🗗 Copy | schema\_version | 0 |
| 🗗 Copy | dtype | 'float32' |
| 🗗 Copy | index\_dtype | 'int32' |
| 🗗 Copy | wrapper\_dtype | 'uint64' |
| 🗗 Copy | random\_dtype | 'uint64' |
| 🗗 Copy | n\_jobs | 1 |

  
  
```
import numpy as np

# Create index
index = Index(128)

# Add normalized vectors
for i in range(1000):
    v = np.random.randn(128)
    v = v / np.linalg.norm(v)  # Normalize
    index.add_item(i, v)

# Build and query
index.build(10)
neighbors, distances = index.get_nns_by_item(0, 10, include_distances=True)
neighbors, distances

```
```
/home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/sphinx_gallery/gen_rst.py:891: FutureWarning: The default metric will be removed in a future version. Please pass metric='angular' explicitly.
  exec(self.code, self.fake_main.__dict__)

([0, 424, 274, 309, 839, 807, 443, 657, 82, 583], [0.0, 1.1566990613937378, 1.2004526853561401, 1.2517021894454956, 1.2616901397705078, 1.2671644687652588, 1.268679141998291, 1.269202470779419, 1.2849621772766113, 1.2916245460510254])

```
```
index.get_params()

```
```
{'f': 128, 'metric': 'angular', 'n_neighbors': 5, 'seed': None, 'verbose': None, 'on_disk_path': None, 'prefault': False, 'schema_version': 0, 'dtype': 'float32', 'index_dtype': 'int32', 'wrapper_dtype': 'uint64', 'random_dtype': 'uint64', 'n_jobs': 1}

```
```
with index.clone() as idx:
    pprint(idx.get_state(), sort_dicts=False)

```
```
{'__version__': '1.0',
 'params': {'f': 128,
            'metric': 'angular',
            'n_neighbors': 5,
            'seed': None,
            'verbose': None,
            'on_disk_path': None,
            'prefault': False,
            'schema_version': 0,
            'dtype': 'float32',
            'index_dtype': 'int32',
            'wrapper_dtype': 'uint64',
            'random_dtype': 'uint64',
            'n_jobs': 1},
 'constructed': True,
 'n_items': 0,
 'n_trees': 0,
 'index_data': None}

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 0.040 seconds)

[![Launch binder](../../_images/binder_badge_logo.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/annoy/plot_annoy_cython_api.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo.svg)](../../lite/lab/index.html?path=auto_examples/annoy/plot_annoy_cython_api.ipynb)

[`Download Jupyter notebook: plot_annoy_cython_api.ipynb`](../../_downloads/85e8195fe31ad1d5009158e20de3de8d/plot_annoy_cython_api.ipynb)

[`Download Python source code: plot_annoy_cython_api.py`](../../_downloads/fbae7998e6b22c69c1ca8bf65db8c5b2/plot_annoy_cython_api.py)

[`Download zipped: plot_annoy_cython_api.zip`](../../_downloads/a736e5dc3e8edd1b94377cbc5f6ae2b1/plot_annoy_cython_api.zip)

Related examples

![](../../_images/sphx_glr_plot_Annoy_legacy_c_api_thumb.png)

[annoy.Annoy legacy c-api with examples](plot_Annoy_legacy_c_api.html)

annoy.Annoy legacy c-api with examples![](../../_images/sphx_glr_plot_annoy_cython_0benchmark_thumb.png)

[Index (cython) python-api benchmark with examples](plot_annoy_cython_0benchmark.html)

Index (cython) python-api benchmark with examples![](../../_images/sphx_glr_plot_Annoy_python_api_thumb.png)

[annoy.Index python-api with examples](plot_Annoy_python_api.html)

annoy.Index python-api with examples![](../../_images/sphx_glr_plot_dl_nlp_vector_index_db_thumb.png)

[visualkeras: Vector Index DB](../visualkeras/plot_dl_nlp_vector_index_db.html)

visualkeras: Vector Index DB

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)