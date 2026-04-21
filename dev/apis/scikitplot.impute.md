# scikitplot.impute[#](#module-scikitplot.impute "Link to this heading")

Transformers for missing value imputation.

This submodule re-exports the standard scikit-learn imputers and
exposes additional experimental imputers via the
[`scikitplot.experimental`](scikitplot.experimental.html#module-scikitplot.experimental "scikitplot.experimental") namespace.

In particular, [`ANNImputer`](../modules/generated/scikitplot.impute._ann.ANNImputer.html#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer") is an approximate
nearest-neighbours based imputer built on top of the Spotify
Annoy library. It is gated behind the experimental switch

`from scikitplot.experimental import enable_ann_imputer`

to follow scikit-learn’s experimental API conventions.

****User guide.**** See the [Impute](../user_guide/impute/index.html#impute-index) section for further details.

## Approximate K-nearest-neighbours (KNN) imputation.[#](#module-scikitplot.impute._ann "Link to this heading")

Vector-based Approximate K-Nearest Neighbors (KNN) [[1]](#r6149389b6f12-1) imputation [`ANNImputer`](../modules/generated/scikitplot.impute._ann.ANNImputer.html#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer").

Annoy [[2]](#r6149389b6f12-2) (Approximate Nearest Neighbors Oh Yeah) is a C++ library with Python bindings
to search for points in space that are close to a given query point.

Voyager [[3]](#r6149389b6f12-3) is an HNSW-based approximate nearest-neighbor index with a Python API.

Both libraries create large read-only file-based data structures that can be
memory-mapped so that many processes may share the same data.

References

[[1](#id1)]

<http://en.wikipedia.org/wiki/Nearest_neighbor_search#Approximate_nearest_neighbor>

[[2](#id2)]

[spotify/annoy](https://github.com/spotify/annoy)

[[3](#id3)]

[spotify/voyager](https://github.com/spotify/voyager)

****User guide.**** See the [ANNImputer](../user_guide/impute/index.html#ann-imputer-index) section for further details.

|  |  |
| --- | --- |
| [`_ann.ANNImputer`](../modules/generated/scikitplot.impute._ann.ANNImputer.html#scikitplot.impute._ann.ANNImputer "scikitplot.impute._ann.ANNImputer") | Approximate K-nearest-neighbours (KNN) imputer with pluggable ANN backends. |