# spotify/ANNoy Vector Database (Approximate Nearest Neighbors)[#](#spotify-annoy-vector-database-approximate-nearest-neighbors "Link to this heading")

ANNoy helps you find **similar items** fast.

You give your data as ****vectors**** (arrays of numbers). Then you can search for
the ****nearest neighbors**** (the most similar vectors).

This page documents the Annoy [[1]](#id31) user guide integration shipped with scikit-plots.

* Low-level bindings C-API: [`_annoy`](../../../modules/generated/scikitplot.cexternals._annoy.html#module-scikitplot.cexternals._annoy "scikitplot.cexternals._annoy")
* High-level Python-API: [`annoy`](../../../apis/scikitplot.annoy.html#module-scikitplot.annoy "scikitplot.annoy")

## Python API[#](#python-api "Link to this heading")

ANNoy (Approximate Nearest Neighbors Oh Yeah) is a C++ library with Python bindings
for approximate nearest-neighbor search in high-dimensional vector spaces. [[1]](#id31)

* A ****vector**** is a list of numbers.
* “Similarity search” means: **find items that are close to each other**.
* Annoy builds an index so searching is fast.

Many AI apps convert data into vectors:

* text → embeddings
* images → embeddings
* audio → embeddings

After that, you can do ****vector similarity search****: you search with a query
vector and get back the closest vectors. This is useful for:

* semantic search (meaning-based search)
* recommendations (“users like you also liked…”)
* de-duplication (find near-duplicates)

Annoy is an ****approximate nearest neighbor (ANN)**** method.

* It is ****fast**** for search.
* It is ****approximate**** (it may not return the exact best answer every time).
* You often tune index/search parameters to trade off ****speed vs accuracy****.

If you need a full service (storage, filtering, replication, access control),
you may want a ****vector database**** instead of a single in-process index.

## When to use Annoy[#](#when-to-use-annoy "Link to this heading")

Use Annoy when you want:

* a lightweight, local index (often inside one Python process)
* fast similarity search for a static or slowly changing dataset
* simple deployment (no separate database service)

If you need distributed storage, many writers, metadata filtering, or a managed
service, see [Vector Similarity Search and Vector Database](../../annoy/annoy_index_vector_database.html#annoy-index-vector-database).

## TL;DR[#](#tl-dr "Link to this heading")

* ****What it is:**** C++ library with Python bindings for approximate nearest-neighbor (ANN) search. [[1]](#id31)
* ****Origin:**** Developed at Spotify (Hack Week). [[1]](#id31)
* ****Since:**** Open sourced in 2013. [[2]](#id32), [[3]](#id33)
* ****Index type:**** Forest of random projection trees. [[1]](#id31)
* ****Storage:**** File-based indexes can be memory-mapped (mmap) and shared across processes. [[1]](#id31)
* ****Tuning:**** Use `n_trees` (build) and `search_k` (query) to trade accuracy for speed. [[1]](#id31)
* ****Metrics:**** Euclidean, Manhattan, cosine (angular), Hamming, dot (inner product). [[1]](#id31)

## Quick start[#](#quick-start "Link to this heading")

Examples

```
import random
random.seed(0)

# from annoy import AnnoyIndex
# from scikitplot.cexternals._annoy import AnnoyIndex
from scikitplot.annoy import AnnoyIndex

f = 40
t = AnnoyIndex(f, "angular")

for i in range(1000):
    v = [random.gauss(0, 1) for _ in range(f)]
    t.add_item(i, v)

t.build(10)            # n_trees
t.save("test.ann")

u = AnnoyIndex(f, "angular")
u.load("test.ann")     # memory-mapped (mmap)
print(u.get_nns_by_item(0, 10))

```

## Workflow[#](#workflow "Link to this heading")

1. Create an [`AnnoyIndex`](../../../modules/generated/scikitplot.cexternals._annoy.AnnoyIndex.html#scikitplot.cexternals._annoy.AnnoyIndex "scikitplot.cexternals._annoy.AnnoyIndex") with vector length `f` and a metric. [[1]](#id31)
2. Add items with `add_item`. [[1]](#id31)
3. Build the forest with `build`. [[1]](#id31)
4. Query with `get_nns_by_item` or `get_nns_by_vector`. [[1]](#id31)
5. Persist with `save` and load with `load`. [[1]](#id31)

### Important rules[#](#important-rules "Link to this heading")

* Every added vector must have length `f`.
* Add items before calling `build`. [[1]](#id31)
* After `build`, the index is used for queries. To add more items,
  discard the forest with `unbuild`, add items, and build again.

## Persistence and sharing[#](#persistence-and-sharing "Link to this heading")

### Save and load[#](#save-and-load "Link to this heading")

* `save` writes the index to a file.
* `load` memory-maps (mmap) the file for fast loading and sharing
  across processes. [[1]](#id31)

### Prefault (optional)[#](#prefault-optional "Link to this heading")

Some builds expose a `prefault` option for `load`. When enabled,
the loader may aggressively fault pages into memory. This is platform dependent. [[1]](#id31)

## On-disk build (large datasets)[#](#on-disk-build-large-datasets "Link to this heading")

Annoy can build an index directly into a file on disk. This is intended for datasets
that are too large to fit into memory during index construction. [[1]](#id31)

### Workflow[#](#id20 "Link to this heading")

1. Create the index.
2. Call `on_disk_build` ****before**** adding any items. [[1]](#id31)
3. Add items.
4. Call `build`.
5. Query the index, or load it from other processes with `load`. [[1]](#id31)

### Important rules[#](#id23 "Link to this heading")

* Call `on_disk_build` ****before**** `add_item`. [[1]](#id31)
* After building in this mode, there is no need to call `save`
  because the file is already the backing store. [[1]](#id31)

### Example[#](#example "Link to this heading")

```
import random
from scikitplot.annoy import AnnoyIndex

random.seed(0)
f = 40

a = AnnoyIndex(f, "angular")
a.on_disk_build("big.ann")

for i in range(1000):
    v = [random.gauss(0, 1) for _ in range(f)]
    a.add_item(i, v)

a.build(10)

# In another process, load the same file (mmap):
b = AnnoyIndex(f, "angular")
b.load("big.ann")
print(b.get_nns_by_item(0, 10))

```

## Tuning[#](#tuning "Link to this heading")

* `n_trees` (build time):
  Larger values usually improve recall but increase build time and memory usage. [[1]](#id31)
* `search_k` (query time):
  Larger values usually improve recall but make queries slower. [[1]](#id31)

If `search_k` is not provided, Annoy uses a default based on the number of trees
and the requested neighbor count. [[1]](#id31)

## Practical tips[#](#practical-tips "Link to this heading")

### Choose stable item ids[#](#choose-stable-item-ids "Link to this heading")

Annoy uses non-negative integer item ids and allocates storage up to `max(id) + 1`. [[1]](#id31)
If your external ids are sparse or non-numeric, keep a separate mapping to compact ids.

### Multi-process serving[#](#multi-process-serving "Link to this heading")

A common serving pattern is:

1. Build once and write an index file.
2. In each worker process, load the same file with `load` (mmap) and query. [[1]](#id31)

## Developer notes (C++)[#](#developer-notes-c "Link to this heading")

`AnnoyIndex` is not copyable (it contains atomic state). In C++14, avoid copy
initialization from temporaries. Prefer direct initialization:

```
using Index = Annoy::AnnoyIndex<int, double, Annoy::Angular, Annoy::Kiss32Random,
                                Annoy::AnnoyIndexSingleThreadedBuildPolicy>;
Index t(f);  // C++14 compatible

```

## See also[#](#see-also "Link to this heading")

> **See also**
> * [ANNoy](../../annoy/index.html#annoy-index)
* [cexternals/ANNoy (experimental)](#cexternals-annoy-index)
* [spotify/annoy](https://github.com/spotify/annoy)
* <https://pypi.org/project/annoy>
> **See also**
> * [`from_low_level`](../../../modules/generated/scikitplot.annoy.Index.html#scikitplot.annoy.Index.from_low_level "scikitplot.annoy.Index.from_low_level")
* [`pickle`](https://docs.python.org/3/library/pickle.html#module-pickle "(in Python v3.14)") (Python standard library)
* Alternative ANN libraries:
  - [nmslib/hnswlib](https://github.com/nmslib/hnswlib)
  - [spotify/voyager](https://github.com/spotify/voyager)

## References[#](#references "Link to this heading")

[1]
([1](#id1),[2](#id2),[3](#id3),[4](#id4),[5](#id7),[6](#id8),[7](#id9),[8](#id10),[9](#id11),[10](#id12),[11](#id13),[12](#id14),[13](#id15),[14](#id16),[15](#id17),[16](#id18),[17](#id19),[18](#id21),[19](#id22),[20](#id24),[21](#id25),[22](#id26),[23](#id27),[24](#id28),[25](#id29),[26](#id30))

[Spotify AB. (2013, Feb 20). “Approximate Nearest Neighbors Oh Yeah”
Github. https://github.com/spotify/annoy](https://github.com/spotify/annoy)


[[2](#id5)]

<https://pypi.org/project/annoy/> (Project description)


[[3](#id6)]

<https://erikbern.com/2015/05/03/annoy-now-without-boost-dependencies-and-with-python-3-support.html> (History note: open sourced in 2013)

## Glossary[#](#glossary "Link to this heading")

Vector
:   An array of numbers (often an embedding).

Embedding
:   A vector representation created by a model (text/image/audio → numbers).

Vector similarity search
:   Find vectors in a dataset that are most similar to a query vector.

Vector database
:   A system that stores, manages, and indexes high-dimensional vector data for
    low-latency similarity queries.