> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-rank-bm25-plot-rank-bm25-quickstart-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Rank-BM25 Quick Start with Stable Document IDs[#](#rank-bm25-quick-start-with-stable-document-ids "Link to this heading")

A useful lexical-search result should name the document it belongs to, not ask
its caller to remember which list happened to occupy the same row order as the
index. This example builds `BM25Okapi` with `doc_ids` and retrieves
`(document_id, score)` pairs with `BM25.get_top_ids`.

It also checks two small but important contracts: an out-of-vocabulary query
returns no sparse hits, and equal scores are returned in original corpus order.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

from __future__ import annotations

from scikitplot.rank_bm25 import BM25Okapi

```

## 1. Tokenize the corpus once[#](#tokenize-the-corpus-once "Link to this heading")

BM25 consumes token sequences. Keep the same normalization policy for the
corpus and every query; here that policy is deliberately just lowercase plus
whitespace splitting so the example stays transparent.

```
documents = [
    "A search index maps terms to documents",
    "BM25 is a lexical ranking function",
    "Vector search ranks documents by embedding similarity",
    "Hybrid retrieval can combine lexical and vector evidence",
]
doc_ids = ["indexing", "bm25", "vectors", "hybrid"]


def analyze(text: str) -> list[str]:
    """Apply the same tiny analysis policy to documents and queries."""
    return text.lower().split()


corpus = [analyze(text) for text in documents]
index = BM25Okapi(corpus, doc_ids=doc_ids)

print("corpus rows:", index.corpus_size)
print("bound document IDs:", index.doc_ids)

```
```
corpus rows: 4
bound document IDs: ('indexing', 'bm25', 'vectors', 'hybrid')

```

## 2. Retrieve by identity[#](#retrieve-by-identity "Link to this heading")

`get_top_ids` only considers rows containing at least one query term and
returns identities held by the index itself.

```
query = analyze("lexical BM25 ranking")
hits = index.get_top_ids(query, n=3)

for position, (doc_id, score) in enumerate(hits, start=1):
    print(f"{position}. {doc_id:8s} score={score:.6f}")

assert hits
assert hits[0][0] == "bm25"

```
```
1. bm25     score=1.811018
2. hybrid   score=0.000000

```

## 3. Unknown terms do not manufacture results[#](#unknown-terms-do-not-manufacture-results "Link to this heading")

A dense score vector has a zero for every non-match, but sparse retrieval has
no reason to return arbitrary zero-score rows. A query with no indexed term
therefore returns an empty list.

```
missing = index.get_top_ids(analyze("quasar-neutrino"), n=3)
print("out-of-vocabulary hits:", missing)
assert missing == []

```
```
out-of-vocabulary hits: []

```

## 4. Ties are deterministic[#](#ties-are-deterministic "Link to this heading")

Equal scores preserve corpus row order. This makes repeated runs stable and
keeps the identity path aligned with the positional path.

```
tied = BM25Okapi(
    [["same"], ["same"], ["same"]],
    doc_ids=["first", "second", "third"],
)
tied_ids = [doc_id for doc_id, _score in tied.get_top_ids(["same"], n=3)]

print("tie order:", tied_ids)
assert tied_ids == ["first", "second", "third"]

```
```
tie order: ['first', 'second', 'third']

```

The next examples compare scoring recipes, explain sparse versus dense paths,
and persist an index. The full contracts and failure modes live in
[Rank-BM25 user guide](../../user_guide/rank_bm25/index.html#rank-bm25-index).

Tags: [model-workflow: retrieval](../../_tags/model-workflow-retrieval.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: tutorial](../../_tags/purpose-tutorial.html)

****Total running time of the script:**** (0 minutes 0.003 seconds)

[![Launch binder](../../_images/binder_badge_logo17.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/rank_bm25/plot_rank_bm25_quickstart_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo17.svg)](../../lite/lab/index.html?path=auto_examples/rank_bm25/plot_rank_bm25_quickstart_script.ipynb)

[`Download Jupyter notebook: plot_rank_bm25_quickstart_script.ipynb`](../../_downloads/56b16713795f21edf3d747a426821ffa/plot_rank_bm25_quickstart_script.ipynb)

[`Download Python source code: plot_rank_bm25_quickstart_script.py`](../../_downloads/219541714206148c55453bbf73d609bf/plot_rank_bm25_quickstart_script.py)

[`Download zipped: plot_rank_bm25_quickstart_script.zip`](../../_downloads/0bb444d3371d651947221e82d8f7efe6/plot_rank_bm25_quickstart_script.zip)

Related examples

![](../../_images/sphx_glr_plot_rank_bm25_sparse_dense_script_thumb.png)

[Sparse Retrieval and Dense BM25 Diagnostics](plot_rank_bm25_sparse_dense_script.html)

Sparse Retrieval and Dense BM25 Diagnostics![](../../_images/sphx_glr_plot_rank_bm25_persistence_script_thumb.png)

[Persist and Reload a Rank-BM25 Index](plot_rank_bm25_persistence_script.html)

Persist and Reload a Rank-BM25 Index![](../../_images/sphx_glr_plot_rank_bm25_recipes_script_thumb.png)

[Compare the Three Rank-BM25 Scoring Recipes](plot_rank_bm25_recipes_script.html)

Compare the Three Rank-BM25 Scoring Recipes![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v1_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../corpus/plot_corpus_fluent_hamlet_retrieval_script_v1.html)

Build and Search a Real Hamlet Corpus with FluentCorpus

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)