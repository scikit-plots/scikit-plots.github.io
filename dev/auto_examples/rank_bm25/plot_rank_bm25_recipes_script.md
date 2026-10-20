> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-rank-bm25-plot-rank-bm25-recipes-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Compare the Three Rank-BM25 Scoring Recipes[#](#compare-the-three-rank-bm25-scoring-recipes "Link to this heading")

Scikit-Plots exposes three concrete BM25 recipes: [`BM25Okapi`](../../modules/generated/scikitplot.rank_bm25.BM25Okapi.html#scikitplot.rank_bm25.BM25Okapi "scikitplot.rank_bm25.BM25Okapi"),
[`BM25L`](../../modules/generated/scikitplot.rank_bm25.BM25L.html#scikitplot.rank_bm25.BM25L "scikitplot.rank_bm25.BM25L"), and [`BM25Plus`](../../modules/generated/scikitplot.rank_bm25.BM25Plus.html#scikitplot.rank_bm25.BM25Plus "scikitplot.rank_bm25.BM25Plus"). This example runs one corpus and query
through all three, shows each versioned recipe identifier, and compares result
ordering without assuming that scores from different formulas share one scale.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

from __future__ import annotations

from scikitplot.rank_bm25 import BM25L, BM25Okapi, BM25Plus

```

## 1. One corpus, one analysis policy[#](#one-corpus-one-analysis-policy "Link to this heading")

Keep the corpus and query fixed so that the scoring recipe is the only thing
changing.

```
documents = {
    "short": "python plotting library",
    "focused": "python statistical plotting plotting plotting",
    "broad": "python machine learning visualization metrics plotting",
    "other": "database transaction storage engine",
}


def analyze(text: str) -> list[str]:
    return text.lower().split()


doc_ids = list(documents)
corpus = [analyze(documents[doc_id]) for doc_id in doc_ids]
query = analyze("python plotting")

```

## 2. Construct each public recipe[#](#construct-each-public-recipe "Link to this heading")

The defaults are intentionally left intact. `recipe.identifier` records a
named/versioned formula choice instead of asking callers to infer semantics
from the class name alone.

```
indexes = [
    BM25Okapi(corpus, doc_ids=doc_ids),
    BM25L(corpus, doc_ids=doc_ids),
    BM25Plus(corpus, doc_ids=doc_ids),
]

for index in indexes:
    print(type(index).__name__)
    print("  recipe:", index.recipe.identifier)
    for rank, (doc_id, score) in enumerate(index.get_top_ids(query, n=3), start=1):
        print(f"  {rank}. {doc_id:7s} score={score:.6f}")

```
```
BM25Okapi
  recipe: okapi-epsilon-floor/1
  1. focused score=0.363491
  2. short   score=0.332274
  3. broad   score=0.245594
BM25L
  recipe: bm25l-delta/1
  1. focused score=1.045348
  2. short   score=0.980856
  3. broad   score=0.827995
BM25Plus
  recipe: bm25plus-delta/1
  1. focused score=2.336518
  2. short   score=2.223594
  3. broad   score=1.910044

```

## 3. Compare rankings, not score units[#](#compare-rankings-not-score-units "Link to this heading")

Each formula is free to produce a different numeric scale. A robust
comparison records the ordering and evaluates it against your retrieval task
rather than comparing a `0.8` from one recipe with a `0.8` from another.

```
rankings = {
    type(index).__name__: [
        doc_id for doc_id, _score in index.get_top_ids(query, n=len(doc_ids))
    ]
    for index in indexes
}

print("rankings:")
for name, ranking in rankings.items():
    print(f"  {name:10s}: {ranking}")

assert set(rankings) == {"BM25Okapi", "BM25L", "BM25Plus"}
assert all(ranking for ranking in rankings.values())

```
```
rankings:
  BM25Okapi : ['focused', 'short', 'broad']
  BM25L     : ['focused', 'short', 'broad']
  BM25Plus  : ['focused', 'short', 'broad']

```

Parameter domains are validated when an index is built. Tune a recipe only
with an evaluation set that represents your application; the gallery avoids
presenting one parameter choice as universally optimal.

Tags: [model-workflow: retrieval](../../_tags/model-workflow-retrieval.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: compare](../../_tags/purpose-compare.html)

****Total running time of the script:**** (0 minutes 0.003 seconds)

[![Launch binder](../../_images/binder_badge_logo17.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/rank_bm25/plot_rank_bm25_recipes_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo17.svg)](../../lite/lab/index.html?path=auto_examples/rank_bm25/plot_rank_bm25_recipes_script.ipynb)

[`Download Jupyter notebook: plot_rank_bm25_recipes_script.ipynb`](../../_downloads/2b15b18bde602319ca3897ec9e848ef1/plot_rank_bm25_recipes_script.ipynb)

[`Download Python source code: plot_rank_bm25_recipes_script.py`](../../_downloads/0270f512df1dc04a94ad2f240c0873a9/plot_rank_bm25_recipes_script.py)

[`Download zipped: plot_rank_bm25_recipes_script.zip`](../../_downloads/81ad26289432290e944b9df040173d79/plot_rank_bm25_recipes_script.zip)

Related examples

![](../../_images/sphx_glr_plot_rank_bm25_quickstart_script_thumb.png)

[Rank-BM25 Quick Start with Stable Document IDs](plot_rank_bm25_quickstart_script.html)

Rank-BM25 Quick Start with Stable Document IDs![](../../_images/sphx_glr_plot_rank_bm25_sparse_dense_script_thumb.png)

[Sparse Retrieval and Dense BM25 Diagnostics](plot_rank_bm25_sparse_dense_script.html)

Sparse Retrieval and Dense BM25 Diagnostics![](../../_images/sphx_glr_plot_rank_bm25_persistence_script_thumb.png)

[Persist and Reload a Rank-BM25 Index](plot_rank_bm25_persistence_script.html)

Persist and Reload a Rank-BM25 Index![](../../_images/sphx_glr_plot_corpus_levenshtein_script_thumb.png)

[Use Levenshtein distance with Corpus retrieval](../corpus/plot_corpus_levenshtein_script.html)

Use Levenshtein distance with Corpus retrieval

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)