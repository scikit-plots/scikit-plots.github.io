# scikitplot.annoy[#](#module-scikitplot.annoy "Link to this heading")

## scikitplot.annoy[#](#id1 "Link to this heading")

Public Annoy Python API for scikitplot.

Spotify ANNoy [[1]](#r9976e86a58f0-1) (Approximate Nearest Neighbors Oh Yeah).

This package exposes ****two layers****:

Exports:

1. Low-level C-extension types copied from Spotify’s **annoy** project:
   [`Annoy`](../modules/generated/scikitplot.cexternals._annoy.Annoy.html#scikitplot.cexternals._annoy.Annoy "scikitplot.cexternals._annoy.Annoy") and [`AnnoyIndex`](../modules/generated/scikitplot.cexternals._annoy.AnnoyIndex.html#scikitplot.cexternals._annoy.AnnoyIndex "scikitplot.cexternals._annoy.AnnoyIndex").
2. A high-level, mixin-composed wrapper [`Index`](../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") that:
   - forwards the complete low-level API deterministically,
   - adds versioned manifest import/export,
   - provides explicit index I/O names (`save_index` / `load_index`),
   - provides safe Python-object persistence helpers (pickling),
   - adds optional NumPy export and plotting utilities.

Notes

This module intentionally avoids side effects at import time (no implicit NumPy
or matplotlib imports).

> **See also**
> * [ANNoy](../user_guide/annoy/index.html#annoy-index)
* [cexternals/ANNoy](../user_guide/cexternals/_annoy/index.html#cexternals-annoy-index)
* <https://github.com/spotify/annoy>
* <https://pypi.org/project/annoy>
> **See also**
> [`scikitplot.cexternals._annoy`](../modules/generated/scikitplot.cexternals._annoy.html#module-scikitplot.cexternals._annoy "scikitplot.cexternals._annoy")
:   Low-level C-extension backend.

[`scikitplot.annoy.Index`](../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index")
:   High-level wrapper composed from mixins.

References

[[1](#id2)]

[Spotify AB. (2013, Feb 20). “ANNoy: Approximate Nearest Neighbors Oh Yeah”
Github. https://github.com/spotify/annoy](https://github.com/spotify/annoy)

Examples

```
>>> import random
>>> random.seed(0)

```
```
>>> # from annoy import AnnoyIndex
>>> from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
>>> from scikitplot.annoy import Annoy, AnnoyIndex, Index

```
```
>>> f = 40  # vector dimensionality
>>> t = Index(f, "angular")  # same constructor as the low-level backend
>>> t.add_item(0, [1] * f)
>>> t.build(10)  # Build 10 trees
>>> t.get_nns_by_item(0, 1)  # Find nearest neighbor

```

****User guide.**** See the [ANNoy Vector Database (Approximate Nearest Neighbors)](../user_guide/annoy/index.html#annoy-index) section for further details.

## ANNoy (`cython` based `scikitplot/annoy/_annoy`)[#](#annoy-cython-based-scikitplot-annoy-annoy "Link to this heading")

ANNoy (Approximate Nearest Neighbors Oh Yeah)

|  |  |
| --- | --- |
| [`_annoy.Index`](../modules/generated/scikitplot.annoy._annoy.Index.html#scikitplot.annoy._annoy.Index "scikitplot.annoy._annoy.Index") | Annoy Approximate Nearest Neighbors Index. |

## ANNoy (cpp based `scikitplot/cexternals/_annoy`)[#](#annoy-cpp-based-scikitplot-cexternals-annoy "Link to this heading")

ANNoy (Approximate Nearest Neighbors Oh Yeah)

|  |  |
| --- | --- |
| [`Annoy`](../modules/generated/scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy") | Compiled with GCC/Clang. |
| [`AnnoyIndex`](../modules/generated/scikitplot.annoy.AnnoyIndex.html#scikitplot.annoy.AnnoyIndex "scikitplot.annoy.AnnoyIndex") |  |
| [`Index`](../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") | High-level ANNoy index composed from mixins. |

## ANNoy (cpp based [`Index`](../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") Mixins)[#](#annoy-cpp-based-index-mixins "Link to this heading")

|  |  |
| --- | --- |
| [`CompressMode`](../modules/generated/scikitplot.annoy.CompressMode.html#scikitplot.annoy.CompressMode "scikitplot.annoy.CompressMode") | Compression used for `"byte"` pickling by [`PickleMixin`](../modules/generated/scikitplot.annoy.PickleMixin.html#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin"). |
| [`IndexIOMixin`](../modules/generated/scikitplot.annoy.IndexIOMixin.html#scikitplot.annoy.IndexIOMixin "scikitplot.annoy.IndexIOMixin") | Mixin adding explicit Annoy-native persistence helpers. |
| [`MetaMixin`](../modules/generated/scikitplot.annoy.MetaMixin.html#scikitplot.annoy.MetaMixin "scikitplot.annoy.MetaMixin") | Mixin that exports and restores index metadata. |
| [`NDArrayMixin`](../modules/generated/scikitplot.annoy.NDArrayMixin.html#scikitplot.annoy.NDArrayMixin "scikitplot.annoy.NDArrayMixin") | NumPy / SciPy / pandas interoperability for Annoy-like indexes. |
| [`PickleMixin`](../modules/generated/scikitplot.annoy.PickleMixin.html#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin") | Mixin adding pickle support. |
| [`PickleMode`](../modules/generated/scikitplot.annoy.PickleMode.html#scikitplot.annoy.PickleMode "scikitplot.annoy.PickleMode") | Persistence strategy used by [`PickleMixin`](../modules/generated/scikitplot.annoy.PickleMixin.html#scikitplot.annoy.PickleMixin "scikitplot.annoy.PickleMixin"). |
| [`PlottingMixin`](../modules/generated/scikitplot.annoy.PlottingMixin.html#scikitplot.annoy.PlottingMixin "scikitplot.annoy.PlottingMixin") | Mixin that adds convenient plotting methods to high-level Annoy wrappers. |
| [`VectorOpsMixin`](../modules/generated/scikitplot.annoy.VectorOpsMixin.html#scikitplot.annoy.VectorOpsMixin "scikitplot.annoy.VectorOpsMixin") | User-facing neighbor queries for Annoy-like backends. |