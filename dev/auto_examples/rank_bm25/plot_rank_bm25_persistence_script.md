> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-rank-bm25-plot-rank-bm25-persistence-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Persist and Reload a Rank-BM25 Index[#](#persist-and-reload-a-rank-bm25-index "Link to this heading")

A BM25 index can be published to a directory and loaded in a later process.
This example uses pre-tokenized input, stable document identities, and a
temporary directory so the gallery leaves no artifact behind.

The saved state contains derived lexical data such as terms, frequencies, IDF
values, document lengths, parameters, and `doc_ids`. Treat the artifact as
potentially sensitive even though it does not serialize the original document
objects.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

from __future__ import annotations

import tempfile
from pathlib import Path

from scikitplot.rank_bm25 import BM25Okapi

```

## 1. Build an index that can identify its results[#](#build-an-index-that-can-identify-its-results "Link to this heading")

```
corpus = [
    ["python", "visualization"],
    ["lexical", "retrieval", "bm25"],
    ["vector", "retrieval", "annoy"],
]
doc_ids = ["visualization", "bm25", "annoy"]
index = BM25Okapi(corpus, doc_ids=doc_ids)

before = index.get_top_ids(["retrieval", "bm25"], n=3)
print("before save:", before)
print("build identity:", index.identity)

```
```
before save: [('bm25', 0.5699829445233371), ('annoy', 0.0863610522005056)]
build identity: 4a029b342b87df32a0853f5c5907550b050c2a8fb89235aac3ffee0c7f8130e9

```

## 2. Publish into an isolated temporary directory[#](#publish-into-an-isolated-temporary-directory "Link to this heading")

`save` returns the concrete generation it wrote. Callers normally keep the
publication root and let `load` follow its current-generation pointer.

```
with tempfile.TemporaryDirectory(prefix="scikitplot-rank-bm25-") as tmp:
    publication = Path(tmp) / "index"
    generation = index.save(publication)

    print("publication root exists:", publication.is_dir())
    print("generation directory created:", generation.is_dir())

    restored = BM25Okapi.load(publication)
    after = restored.get_top_ids(["retrieval", "bm25"], n=3)

    print("after load:", after)
    print("identity preserved:", restored.identity == index.identity)
    print("document IDs preserved:", restored.doc_ids == index.doc_ids)

    assert restored.identity == index.identity
    assert restored.doc_ids == index.doc_ids
    assert after == before

```
```
publication root exists: True
generation directory created: True
after load: [('bm25', 0.5699829445233371), ('annoy', 0.0863610522005056)]
identity preserved: True
document IDs preserved: True

```

## 3. What is intentionally absent from this example[#](#what-is-intentionally-absent-from-this-example "Link to this heading")

A bare callable passed as `tokenizer=` cannot be persisted because it does
not carry a durable analyzer identity. The implementation has a declaration
type for that purpose, but it is not currently exported from the public
`scikitplot.rank_bm25` namespace. Until that public contract is resolved,
the gallery keeps persistence examples on the supported pre-tokenized path
rather than teaching a private import.

Tags: [model-workflow: retrieval](../../_tags/model-workflow-retrieval.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: workflow](../../_tags/purpose-workflow.html)

****Total running time of the script:**** (0 minutes 0.008 seconds)

[![Launch binder](../../_images/binder_badge_logo17.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/rank_bm25/plot_rank_bm25_persistence_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo17.svg)](../../lite/lab/index.html?path=auto_examples/rank_bm25/plot_rank_bm25_persistence_script.ipynb)

[`Download Jupyter notebook: plot_rank_bm25_persistence_script.ipynb`](../../_downloads/e1b28178b46860f574fe919897a0d491/plot_rank_bm25_persistence_script.ipynb)

[`Download Python source code: plot_rank_bm25_persistence_script.py`](../../_downloads/bf4067fb4ff2da593f1f566f3d133f9c/plot_rank_bm25_persistence_script.py)

[`Download zipped: plot_rank_bm25_persistence_script.zip`](../../_downloads/181783e7496a4505453a5a094d8a8697/plot_rank_bm25_persistence_script.zip)

Related examples

![](../../_images/sphx_glr_plot_rank_bm25_quickstart_script_thumb.png)

[Rank-BM25 Quick Start with Stable Document IDs](plot_rank_bm25_quickstart_script.html)

Rank-BM25 Quick Start with Stable Document IDs![](../../_images/sphx_glr_plot_rank_bm25_sparse_dense_script_thumb.png)

[Sparse Retrieval and Dense BM25 Diagnostics](plot_rank_bm25_sparse_dense_script.html)

Sparse Retrieval and Dense BM25 Diagnostics![](../../_images/sphx_glr_plot_rank_bm25_recipes_script_thumb.png)

[Compare the Three Rank-BM25 Scoring Recipes](plot_rank_bm25_recipes_script.html)

Compare the Three Rank-BM25 Scoring Recipes![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)