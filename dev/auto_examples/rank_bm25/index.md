# Rank-BM25[#](#rank-bm25 "Link to this heading")

Examples for [`rank_bm25`](../../apis/scikitplot.rank_bm25.html#module-scikitplot.rank_bm25 "scikitplot.rank_bm25") are arranged as a learning path for
lexical retrieval rather than as isolated API demonstrations. They use only
small in-memory corpora, make no network requests, and keep result identities
bound to the index whenever a result could leave the process.

The examples intentionally avoid inventing a plotting layer for a text-ranking
API. Sphinx-Gallery still uses `plot_*.py` filenames, but these examples
render their useful output as code and text.

## Install[#](#install "Link to this heading")

The full Scikit-Plots distribution already includes Rank-BM25:

```
python -m pip install scikit-plots

```

For a smaller installation that owns only the Rank-BM25 package and the
Scikit-Plots core dependencies:

```
python -m pip install scikit-plots-rank-bm25

```

Do not install the full and partial distributions into the same environment;
they own overlapping `scikitplot` package files. See
[Scikit-Plots Partial Distributions](../../affiliated/index.html#affiliated-packages-index) for the partial-distribution
model.

## Start here[#](#start-here "Link to this heading")

1. ****Quick start and stable identities**** — build a `BM25Okapi` index,
   retrieve by document ID, see deterministic tie ordering, and verify that an
   out-of-vocabulary query returns no sparse hits.
2. ****Choose a recipe**** — run the same corpus through `BM25Okapi`,
   `BM25L`, and `BM25Plus`; inspect the versioned recipe identity
   and compare rankings without treating one score scale as interchangeable
   with another.
3. ****Sparse retrieval versus dense diagnostics**** — use
   `BM25.candidate_count`, `BM25.get_top_ids`, and
   `BM25.get_scores` for the jobs they actually perform.
4. ****Save and reload an index**** — publish a pre-tokenized index to a temporary
   directory, reload it, and verify that identities and retrieval survive the
   round trip.

## Which example should I use?[#](#which-example-should-i-use "Link to this heading")

| Goal | Example |
| --- | --- |
| Add lexical search to an application | [Rank-BM25 Quick Start with Stable Document IDs](plot_rank_bm25_quickstart_script.html#sphx-glr-auto-examples-rank-bm25-plot-rank-bm25-quickstart-script-py) |
| Decide among Okapi, BM25L, and BM25+ | [Compare the Three Rank-BM25 Scoring Recipes](plot_rank_bm25_recipes_script.html#sphx-glr-auto-examples-rank-bm25-plot-rank-bm25-recipes-script-py) |
| Understand candidate filtering and whole-corpus scores | [Sparse Retrieval and Dense BM25 Diagnostics](plot_rank_bm25_sparse_dense_script.html#sphx-glr-auto-examples-rank-bm25-plot-rank-bm25-sparse-dense-script-py) |
| Persist an index across process starts | [Persist and Reload a Rank-BM25 Index](plot_rank_bm25_persistence_script.html#sphx-glr-auto-examples-rank-bm25-plot-rank-bm25-persistence-script-py) |

## What the gallery treats as the contract[#](#what-the-gallery-treats-as-the-contract "Link to this heading")

The examples follow the current public behavior rather than assumptions from
other BM25 libraries:

* corpus rows are token sequences unless `tokenizer=` is supplied;
* stable `doc_ids` are preferred over caller-owned row offsets;
* `BM25.get_top_ids` uses sparse candidate retrieval and an unknown term
  can therefore return an empty result;
* `BM25.get_scores` is a dense diagnostic vector with one value per
  corpus row;
* equal retrieval scores are ordered by original corpus position;
* exact floating-point values are not used as cross-recipe compatibility
  assertions; and
* persistence examples use pre-tokenized data because the public namespace does
  not currently expose the durable analyzer declaration used by the internal
  tokenizer persistence path.

The corpus is deliberately tiny. These are correctness and workflow examples,
not performance benchmarks or evidence that an in-process NumPy index is the
right backend for every corpus size.

> **See also**
> * [BM25 lexical ranking](../../user_guide/rank_bm25/index.html#rank-bm25-index) — concepts,
  contracts, failure modes, persistence boundaries, and performance choices.
* [Corpus User Guide](../../user_guide/corpus/index.html#corpus-index) — corpus ingestion and
  retrieval workflows.
* [Annoy vector search](../../user_guide/annoy/index.html#annoy-index) — approximate
  nearest-neighbor vector retrieval.
![](../../_images/sphx_glr_plot_rank_bm25_persistence_script_thumb.png)

[Persist and Reload a Rank-BM25 Index](plot_rank_bm25_persistence_script.html)

Persist and Reload a Rank-BM25 Index![](../../_images/sphx_glr_plot_rank_bm25_quickstart_script_thumb.png)

[Rank-BM25 Quick Start with Stable Document IDs](plot_rank_bm25_quickstart_script.html)

Rank-BM25 Quick Start with Stable Document IDs![](../../_images/sphx_glr_plot_rank_bm25_recipes_script_thumb.png)

[Compare the Three Rank-BM25 Scoring Recipes](plot_rank_bm25_recipes_script.html)

Compare the Three Rank-BM25 Scoring Recipes![](../../_images/sphx_glr_plot_rank_bm25_sparse_dense_script_thumb.png)

[Sparse Retrieval and Dense BM25 Diagnostics](plot_rank_bm25_sparse_dense_script.html)

Sparse Retrieval and Dense BM25 Diagnostics