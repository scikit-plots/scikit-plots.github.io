# ANNoy Vector Database[#](#annoy-vector-database "Link to this heading")

ANNOY (Approximate Nearest Neighbors Oh Yeah): The core data structure are random projection trees,
a set of binary trees where each non-leaf node represents a hyperplane splitting the input space into half
and each leaf stores one data point. Trees are built independently and at random, so to some extent,
it mimics a hashing function. ANNOY search happens in all the trees to iteratively search through the half
that is closest to the query and then aggregates the results.
The idea is quite related to KD tree but a lot more scalable.
`LLM Powered Autonomous Agents <https://lilianweng.github.io/posts/2023-06-23-agent/>`

ANNoy helps you find **similar items** fast.

You give your data as ****vectors**** (arrays of numbers). Then you can search for
the ****nearest neighbors**** (the most similar vectors).

This page documents the Annoy [[1]](#id2) user guide integration shipped with scikit-plots.

* Low-level bindings C-API: [`_annoy`](../../apis/scikitplot.cexternals.html#module-scikitplot.cexternals._annoy "scikitplot.cexternals._annoy")
* High-level Python-API: [`annoy`](../../apis/scikitplot.annoy.html#module-scikitplot.annoy "scikitplot.annoy")

**VectorDB**

* [Vector Similarity Search](annoy_index_vector_database.html)
  * [Vector similarity search](annoy_index_vector_database.html#vector-similarity-search)
  * [Vector database vs “vector index library”](annoy_index_vector_database.html#vector-database-vs-vector-index-library)
  * [Pros and cons of vector search](annoy_index_vector_database.html#pros-and-cons-of-vector-search)
  * [5 practical tips](annoy_index_vector_database.html#practical-tips)
  * [Open source options](annoy_index_vector_database.html#open-source-options)
  * [How to choose (simple rules)](annoy_index_vector_database.html#how-to-choose-simple-rules)
**Architecture**

* [Index Inheritance](annoy_index_inheritance_diagrams.html)
  * [Index + mixins](annoy_index_inheritance_diagrams.html#index-mixins)
  * [Mixins only (independence + MRO scan)](annoy_index_inheritance_diagrams.html#mixins-only-independence-mro-scan)
  * [Notes and Limitations](annoy_index_inheritance_diagrams.html#notes-and-limitations)
**cython**

* [ANNoy Cython](_annoy.html)

## Public Python API[#](#public-python-api "Link to this heading")

This module exports:

* [`Annoy`](../../modules/generated/scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy"):
  Low-level C-extension type (stable, picklable).
* [`AnnoyIndex`](../../modules/generated/scikitplot.annoy.AnnoyIndex.html#scikitplot.annoy.AnnoyIndex "scikitplot.annoy.AnnoyIndex"):
  Public alias of the Low-level [`Annoy`](../../modules/generated/scikitplot.annoy.Annoy.html#scikitplot.annoy.Annoy "scikitplot.annoy.Annoy") index.
* [`Index`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index"):
  High-level Python wrapper subclass (stable, picklable).

> **Note**
> For backend and C-extension details, see [spotify/ANNoy Vector Database (Approximate Nearest Neighbors)](../cexternals/_annoy/index.html#cexternals-annoy-index).

High-level Python interface for the C++ Annoy backend.

This page documents [`annoy`](../../apis/scikitplot.annoy.html#module-scikitplot.annoy "scikitplot.annoy"). It provides a stable import path
and a small, user-facing API built on the low-level bindings in
[`_annoy`](../../apis/scikitplot.cexternals.html#module-scikitplot.cexternals._annoy "scikitplot.cexternals._annoy").

## Workflow[#](#workflow "Link to this heading")

1. Create an [`AnnoyIndex`](../../modules/generated/scikitplot.annoy.AnnoyIndex.html#scikitplot.annoy.AnnoyIndex "scikitplot.annoy.AnnoyIndex") with a fixed vector length `f` and a metric.
2. Add items with `add_item`.
3. Build the forest with `build`.
4. Save and load with `save` and `load`.

## Quick start[#](#quick-start "Link to this heading")

Examples

```
import random; random.seed(0)
# from annoy import Annoy, AnnoyIndex
# from scikitplot.cexternals._annoy import Annoy, AnnoyIndex
from scikitplot.annoy import Annoy, AnnoyIndex, Index

f = 40  # Length of item vector that will be indexed
t = AnnoyIndex(f, 'angular')

for i in range(1000):
    v = [random.gauss(0, 1) for z in range(f)]
    t.add_item(i, v)

t.build(10)  # 10 trees
t.save('test.ann')

u = AnnoyIndex(f, 'angular')
u.load('test.ann')  # memory-mapped

print(u.get_nns_by_item(0, 1000))

```

## Notes[#](#notes "Link to this heading")

* Every added vector must have length `f`.
* Add items before calling `build`.
* Item ids are integers. Storage is allocated up to `max(id) + 1`.

## High-level wrapper: [`Index`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index")[#](#high-level-wrapper-index "Link to this heading")

[`Index`](../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index "scikitplot.annoy.Index") is a Pythonic wrapper for Annoy-like objects.

It is designed for higher-level workflows where you want a Python object that is
safe to serialize and move between processes.

## Mixins used by the high-level wrapper[#](#mixins-used-by-the-high-level-wrapper "Link to this heading")

The wrapper uses mixins `_mixins`
to keep features separate and explicit.

## Further reading[#](#further-reading "Link to this heading")

> **See also**
> * [ANNoy](#annoy-index)
* [cexternals/ANNoy (experimental)](../cexternals/_annoy/index.html#cexternals-annoy-index)
* [spotify/annoy](https://github.com/spotify/annoy)
* <https://pypi.org/project/annoy>
> **See also**
> * Python pickling: <https://docs.python.org/3/library/pickle.html#what-can-be-pickled-and-unpickled>
* <https://docs.python.org/3/library/pickle.html#what-can-be-pickled-and-unpickled>
* [github: ANNoy based on random projection (hyperplane) trees](https://github.com/spotify/annoy)
* [pypi: ANNoy based on random projection (hyperplane) method](https://pypi.org/project/annoy)
* [github: Voyager based on HNSW algorithm (hnswlib)](https://github.com/spotify/voyager)
* [pypi: Voyager based on HNSW algorithm (hnswlib)](https://pypi.org/project/voyager)
* [github: HNSW implementation Header-only C++/python](https://github.com/nmslib/hnswlib)
* [pypi: HNSW implementation Header-only C++/python](https://pypi.org/project/hnswlib)
* [github: Non-Metric Space Library (NMSLIB)](https://github.com/nmslib/nmslib)
> **See also**
> * Nearest neighbor search (background): <https://en.wikipedia.org/wiki/Nearest_neighbor_search>
* <https://www.researchgate.net/publication/386374637_Optimizing_Domain-Specific_Image_Retrieval_A_Benchmark_of_FAISS_and_Annoy_with_Fine-Tuned_Features>
* <https://www.researchgate.net/publication/363234433_Analysis_of_Image_Similarity_Using_CNN_and_ANNOY>
* <https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/XboxInnerProduct.pdf>
* <https://link.springer.com/chapter/10.1007/978-981-97-7831-7_2>

## References[#](#references "Link to this heading")

[[1](#id1)]

[Spotify AB. (2013, Feb 20). “Approximate Nearest Neighbors Oh Yeah”
Github. https://pypi.org/project/annoy](https://pypi.org/project/annoy)