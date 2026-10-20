> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-rank-bm25-plot-rank-bm25-sparse-dense-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Sparse Retrieval and Dense BM25 Diagnostics[#](#sparse-retrieval-and-dense-bm25-diagnostics "Link to this heading")

Rank-BM25 exposes two deliberately different views of the same query.
[`BM25.get_top_ids`](../../modules/generated/scikitplot.rank_bm25.BM25.html#scikitplot.rank_bm25.BM25.get_top_ids "scikitplot.rank_bm25.BM25.get_top_ids") is the retrieval path: it scores documents that contain
at least one query term. [`BM25.get_scores`](../../modules/generated/scikitplot.rank_bm25.BM25.html#scikitplot.rank_bm25.BM25.get_scores "scikitplot.rank_bm25.BM25.get_scores") is a dense diagnostic: it
returns one score for every corpus row, including zeros for non-matches.

Use [`BM25.candidate_count`](../../modules/generated/scikitplot.rank_bm25.BM25.html#scikitplot.rank_bm25.BM25.candidate_count "scikitplot.rank_bm25.BM25.candidate_count") when you need to see how much of the corpus a
query actually touches.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

from __future__ import annotations

import math

from scikitplot.rank_bm25 import BM25Okapi

```

## 1. Build a corpus with an obvious candidate set[#](#build-a-corpus-with-an-obvious-candidate-set "Link to this heading")

Only three rows contain `retrieval`; the filler rows make the difference
between candidate count and corpus size visible without creating a large
example.

```
corpus = [
    ["retrieval", "bm25", "lexical"],
    ["retrieval", "hybrid"],
    ["retrieval", "evaluation"],
]
corpus.extend([["filler", str(i)] for i in range(12)])

doc_ids = [f"doc-{i:02d}" for i in range(len(corpus))]
index = BM25Okapi(corpus, doc_ids=doc_ids)
query = ["retrieval"]

print("corpus size:", index.corpus_size)
print("candidate count:", index.candidate_count(query))

assert index.corpus_size == 15
assert index.candidate_count(query) == 3

```
```
corpus size: 15
candidate count: 3

```

## 2. Sparse retrieval returns only matching rows[#](#sparse-retrieval-returns-only-matching-rows "Link to this heading")

```
hits = index.get_top_ids(query, n=10)
print("sparse hits:", [doc_id for doc_id, _score in hits])

assert len(hits) == 3

```
```
sparse hits: ['doc-01', 'doc-02', 'doc-00']

```

## 3. Dense diagnostics preserve row alignment[#](#dense-diagnostics-preserve-row-alignment "Link to this heading")

`get_scores` is useful for evaluation code that wants a score aligned with
every input row. It intentionally has different output cardinality from the
sparse retrieval call above.

```
scores = index.get_scores(query)
nonzero_positions = [i for i, score in enumerate(scores) if float(score) != 0.0]

print("dense vector length:", len(scores))
print("nonzero positions:", nonzero_positions)

assert len(scores) == index.corpus_size
assert nonzero_positions == [0, 1, 2]

```
```
dense vector length: 15
nonzero positions: [0, 1, 2]

```

## 4. The two views agree on scores for actual candidates[#](#the-two-views-agree-on-scores-for-actual-candidates "Link to this heading")

```
sparse_by_id = dict(hits)
for row, doc_id in enumerate(doc_ids[:3]):
    assert math.isclose(sparse_by_id[doc_id], float(scores[row]), rel_tol=1e-12)

print("sparse and dense candidate scores agree:", True)

```
```
sparse and dense candidate scores agree: True

```

Do not read a dense zero as a retrieved result. If the application wants
documents, use `get_top_ids`; if it wants a row-aligned diagnostic vector,
use `get_scores`.

Tags: [model-workflow: retrieval](../../_tags/model-workflow-retrieval.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: explain](../../_tags/purpose-explain.html)

****Total running time of the script:**** (0 minutes 0.003 seconds)

[![Launch binder](../../_images/binder_badge_logo17.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/rank_bm25/plot_rank_bm25_sparse_dense_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo17.svg)](../../lite/lab/index.html?path=auto_examples/rank_bm25/plot_rank_bm25_sparse_dense_script.ipynb)

[`Download Jupyter notebook: plot_rank_bm25_sparse_dense_script.ipynb`](../../_downloads/9a455b5178b2c8c2f189b8a93b9a57de/plot_rank_bm25_sparse_dense_script.ipynb)

[`Download Python source code: plot_rank_bm25_sparse_dense_script.py`](../../_downloads/bc85f1e16a0a6aaf382884aa76453fb0/plot_rank_bm25_sparse_dense_script.py)

[`Download zipped: plot_rank_bm25_sparse_dense_script.zip`](../../_downloads/89a65b2633699c8c1a4a7d765de2b2fa/plot_rank_bm25_sparse_dense_script.zip)

Related examples

![](../../_images/sphx_glr_plot_rank_bm25_quickstart_script_thumb.png)

[Rank-BM25 Quick Start with Stable Document IDs](plot_rank_bm25_quickstart_script.html)

Rank-BM25 Quick Start with Stable Document IDs![](../../_images/sphx_glr_plot_rank_bm25_persistence_script_thumb.png)

[Persist and Reload a Rank-BM25 Index](plot_rank_bm25_persistence_script.html)

Persist and Reload a Rank-BM25 Index![](../../_images/sphx_glr_plot_rank_bm25_recipes_script_thumb.png)

[Compare the Three Rank-BM25 Scoring Recipes](plot_rank_bm25_recipes_script.html)

Compare the Three Rank-BM25 Scoring Recipes![](../../_images/sphx_glr_plot_evalplot_script_thumb.png)

[plot\_evalplot\_script with examples](../seaborn/plot_evalplot_script.html)

plot\_evalplot\_script with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)