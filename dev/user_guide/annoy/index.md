# Annoy vector search[#](#annoy-vector-search "Link to this heading")

`scikitplot.annoy` wraps Spotify Annoy-style approximate nearest-neighbor
search with a higher-level `Index` facade. It is designed for immutable or
build-once vector indexes where memory-mapped persistence, predictable query
semantics, and process sharing matter more than online mutation.

> **Important**
> Approximate nearest-neighbor search is a retrieval strategy, not a proof of
semantic relevance. Vector dimensionality and metric are index invariants; add
items before building, and treat saved indexes as data artifacts with their own
lifecycle.
Getting started

Build a small index, add vectors, build trees, and query neighbors.

[Getting started](getting_started.html#annoy-getting-started)Architecture

Understand the compiled backend, high-level `Index` facade, and mixins.

[Architecture](architecture.html#annoy-architecture)Persistence and I/O

Choose native files, bundles, bytes, metadata, or pickle deliberately.

[Persistence and I/O](persistence_and_io.html#annoy-persistence-and-io)Performance and threads

Tune tree count, search effort, metrics, and build concurrency.

[Performance and threads](performance_and_threads.html#annoy-performance-and-threads)Python API

Map the high-level public surface and advanced mixins.

[Python API](python_api.html#annoy-python-api)Limits and troubleshooting

Compiled-backend requirements, mmap lifetime, vector rules, and build caveats.

[Limits and troubleshooting](limits_and_troubleshooting.html#annoy-limits-and-troubleshooting)

## Deep dives[#](#deep-dives "Link to this heading")

* [Vector Similarity Search and Vector Database](annoy_index_vector_database.html) – vector-database concepts and similarity search.
* [Annoy Index class Inheritance Diagrams (MRO)](annoy_index_inheritance_diagrams.html) – wrapper/backend inheritance diagrams.
* [ANNoy Cython](_annoy.html) – private Cython-backend notes for advanced maintainers.

## Examples[#](#examples "Link to this heading")

See [Annoy](../../auto_examples/annoy/index.html#annoy-examples) for executable examples that accompany this guide.

## See also[#](#see-also "Link to this heading")

* [spotify/ANNoy Vector Database (Approximate Nearest Neighbors)](../cexternals/_annoy/index.html#cexternals-annoy-index)
* [Corpus User Guide](../corpus/index.html#corpus-index)

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

[1]

[Spotify AB. (2013, Feb 20). “Approximate Nearest Neighbors Oh Yeah”
Github. https://pypi.org/project/annoy](https://pypi.org/project/annoy)