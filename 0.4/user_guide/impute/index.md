# Impute[#](#impute "Link to this heading")

This module contains some functions related to [`impute`](../../apis/scikitplot.impute.html#module-scikitplot.impute "scikitplot.impute").

`Annoy (Approximate Nearest Neighbors Oh Yeah)` is a C++ library with Python bindings
to search for points in space that are close to a given query point.
It also creates large read-only file-based data structures
that are mmapped into memory so that many processes may share the same data.

`Voyager` is optimized for modern nearest-neighbor search.

`HNSW (Hierarchical Navigable Small World)` provides better accuracy and speed,
outperforming Annoy in most use cases, especially when precision is important.

> **See also**
> * [github: ANNoy based on random projection (hyperplane) trees](https://github.com/spotify/annoy)
* [pypi: ANNoy based on random projection (hyperplane) method](https://pypi.org/project/annoy)
* [github: Voyager based on HNSW algorithm (hnswlib)](https://github.com/spotify/voyager)
* [pypi: Voyager based on HNSW algorithm (hnswlib)](https://pypi.org/project/voyager)
* [github: HNSW implementation Header-only C++/python](https://github.com/nmslib/hnswlib)
* [pypi: HNSW implementation Header-only C++/python](https://pypi.org/project/hnswlib)

## ANNImputer[#](#annimputer "Link to this heading")

This module contains some functions related to [`ANNImputer`](../../modules/generated/scikitplot.impute._ann.ANNImputer.html#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer").

## TL;DR[#](#tl-dr "Link to this heading")

* Purpose: Approximate k-nearest-neighbors (KNN) imputation
* Import path: `from scikitplot.impute import ANNImputer`
* Functionality: Replaces missing values using neighbors retrieved via Annoy
* Parameters: n\_neighbors, n\_trees, metric, optional search\_k, etc.

## Overview[#](#overview "Link to this heading")

[`ANNImputer`](../../modules/generated/scikitplot.impute._ann.ANNImputer.html#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer") (from [`impute`](../../apis/scikitplot.impute.html#module-scikitplot.impute "scikitplot.impute")) is an approximate nearest-neighbors
imputer that uses Annoy to fill missing values in datasets. It replaces missing
entries by querying the nearest neighbors of samples with missing values and
computing imputations from those neighbors.

## Motivation[#](#motivation "Link to this heading")

Unlike exact KNN imputation [`KNNImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.KNNImputer.html#sklearn.impute.KNNImputer "(in scikit-learn v1.9)"), using Annoy allows:
- Faster neighbor retrieval in high-dimensional data
- Memory-efficient indexing of large datasets
- Sharing of prebuilt indexes across processes

Example: Your exact NumPy array example:

```
import numpy as np
from scikitplot.experimental import enable_ann_imputer
from scikitplot.impute import ANNImputer

X = np.array([[1, 2, np.nan],
              [3, 4, 3],
              [np.nan, 6, 5],
              [8, 8, 7]])

imputer = ANNImputer(n_trees=5, n_neighbors=5)
X_imputed = imputer.fit_transform(X)

print(X_imputed)
# Output:
# array([[1., 2., 5.],
#        [3., 4., 3.],
#        [4., 6., 5.],
#        [8., 8., 7.]])

```

## Mechanism[#](#mechanism "Link to this heading")

* Builds an Annoy index from complete samples
* Queries nearest neighbors for incomplete samples
* Imputes missing values based on neighbor vectors
* Integer identifiers are used internally; memory allocated to max(id)+1

## Notes[#](#notes "Link to this heading")

* Memory-efficient and fast for large datasets
* Approximate neighbors; exact KNN may differ slightly
* Shares indexes across processes using mmap
* Behavior depends on `n_trees` and `search_k` parameters

## Comparison[#](#comparison "Link to this heading")

* Similar in usage to [`KNNImputer`](https://scikit-learn.org/dev/modules/generated/sklearn.impute.KNNImputer.html#sklearn.impute.KNNImputer "(in scikit-learn v1.9)"), but faster on large, high-dimensional datasets
* Provides a trade-off between accuracy and speed via Annoy parameters