# Missing-value imputation[#](#missing-value-imputation "Link to this heading")

`scikitplot.impute` combines standard scikit-learn-style imputation surfaces with an experimental approximate-nearest-neighbor imputer for larger or index-oriented workflows.

> **Important**
> `ANNImputer` is experimental and is not imported into the public namespace until you explicitly enable it. Approximate-neighbor imputation changes the computational trade-off; it does not guarantee the same neighbors or values as exact KNN imputation.
Getting started

Use stable sklearn-compatible imputers or explicitly enable ANNImputer.

[Getting started](getting_started.html#impute-getting-started)Standard imputers

Understand the re-exported MissingIndicator and SimpleImputer surface.

[Standard imputers](standard_imputers.html#impute-standard-imputers)ANNImputer

Approximate-neighbor imputation with Annoy or Voyager backends.

[ANNImputer](ann_imputer.html#impute-ann-imputer)Index access and privacy

Choose private/public/external index ownership and understand data exposure.

[Index access and privacy](index_access_and_privacy.html#impute-index-access-and-privacy)Python API

Stable imports, experimental activation, fit/transform behavior, and feature names.

[Python API](python_api.html#impute-python-api)Limits and troubleshooting

Approximation, fallback behavior, optional backends, and current review findings.

[Limits and troubleshooting](limits_and_troubleshooting.html#impute-limits-and-troubleshooting)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Impute](../../auto_examples/impute/index.html#impute-examples) for executable examples that accompany this guide.

## See also[#](#see-also "Link to this heading")

* [Annoy vector search](../annoy/index.html#annoy-index)

## Further reading[#](#further-reading "Link to this heading")

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