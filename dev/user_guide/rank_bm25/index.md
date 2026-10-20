# BM25 lexical ranking[#](#bm25-lexical-ranking "Link to this heading")

`scikitplot.rank_bm25` provides in-process lexical ranking with Okapi BM25, BM25L and BM25Plus. It makes tokenization policy, stable document identity, sparse retrieval, persistence and recipe identity explicit rather than hiding them behind a generic search interface.

> **Important**
> Text analysis is part of index correctness. Tokenize documents and queries with the same policy, bind rows to stable `doc_ids` when results leave the index process, and protect saved lexical state according to the sensitivity of the indexed vocabulary.
Getting started

Build an index with stable doc\_ids and retrieve lexical matches.

[Getting started](getting_started.html#rank-bm25-getting-started)Recipes and tokenization

Choose Okapi/BM25L/BM25Plus and keep document/query analysis consistent.

[Recipes and tokenization](recipes_and_tokenization.html#rank-bm25-recipes-and-tokenization)Retrieval and identity

Use sparse top-id retrieval, dense scores, stable ties, and candidate diagnostics correctly.

[Retrieval and identity](retrieval_and_identity.html#rank-bm25-retrieval-and-identity)Persistence and reproducibility

Save generation-based state, understand build identity, and protect derived lexical artifacts.

[Persistence and reproducibility](persistence_and_reproducibility.html#rank-bm25-persistence-and-reproducibility)Performance and scaling

Sparse postings, dense vectors, tokenizer workers, and when to move to a larger search system.

[Performance and scaling](performance_and_scaling.html#rank-bm25-performance-and-scaling)Python API

BM25 classes, recipe/identity properties, validation behavior, and internal analyzer boundary.

[Python API](python_api.html#rank-bm25-python-api)Troubleshooting

Tokenization mismatch, OOV queries, doc-id binding, persistence, and parameter validation.

[Troubleshooting](troubleshooting.html#rank-bm25-troubleshooting)Usage Scenarios[Rank-BM25 Usage Scenarios](usage_scenarios.html#rank-bm25-usage-scenarios-index)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Rank-BM25](../../auto_examples/rank_bm25/index.html#rank-bm25-examples) for executable examples that accompany this guide.

## See also[#](#see-also "Link to this heading")

* [Model Context Protocol Retrieval](../mcp/index.html#mcp-index)
* [Corpus User Guide](../corpus/index.html#corpus-index)
* [dorianbrown/rank\_bm25](https://github.com/dorianbrown/rank_bm25)