🧪  ****Class Weighting****

# Class Weighting[#](#class-weighting "Link to this heading")

**Giving minority-class errors a larger weight in the loss so the model stops ignoring rare classes.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****Class weighting**** rebalances an imbalanced problem **without touching the data**.
Instead of duplicating or deleting rows, it changes the ****loss function**** so that
mistakes on rare classes cost more than mistakes on common ones. The dataset keeps
its original size; only the penalties change.

## Why use it[#](#why-use-it "Link to this heading")

On imbalanced data a model can score well by simply always predicting the majority
class. Up-weighting the minority class forces the optimiser to take those examples
seriously. Compared with resampling, class weighting adds no synthetic points and
throws nothing away.

## How it works[#](#how-it-works "Link to this heading")

Give each class \(c\) a weight \(w\_c\) and scale every sample’s loss by the
weight of its true class:

\[L\_{\text{weighted}} = \sum\_{i=1}^{N} w\_{y\_i}\,\ell\big(f(x\_i),\, y\_i\big),\]

where \(y\_i\) is the true label, \(\ell(\cdot)\) is the per-sample loss
(for example cross-entropy) and \(w\_{y\_i}\) is that class’s weight. A standard
choice makes the weight inversely proportional to class frequency:

\[w\_c = \frac{N}{K \cdot n\_c},\]

with \(N\) total samples, \(K\) classes and \(n\_c\) samples in class
\(c\) — so smaller classes receive larger weights.

## Trade-offs[#](#trade-offs "Link to this heading")

Advantages:

* No information loss — every row is kept.
* No synthetic data (unlike SMOTE).
* One-line support in most libraries.

Disadvantages:

* Extreme weights (for very rare classes) can make training unstable.
* A tiny minority class is still hard to learn from, however it is weighted.

## Examples[#](#examples "Link to this heading")

scikit-learn — let the estimator set the weights automatically:

```
from sklearn.linear_model import LogisticRegression

# weights set to N / (K * n_c) per class
model = LogisticRegression(class_weight="balanced")
model.fit(X, y)
# or pass them explicitly, e.g. class_weight={0: 1, 1: 10}

```

PyTorch — pass a weight tensor to the loss:

```
import torch
import torch.nn as nn

class_weights = torch.tensor([1.0, 10.0])   # minority class weighted higher
criterion = nn.CrossEntropyLoss(weight=class_weights)

```

## Weighting vs resampling[#](#weighting-vs-resampling "Link to this heading")

| Method | How it works | Trade-off |
| --- | --- | --- |
| Oversampling | Duplicate or synthesise minority samples | Improves recall, but risks overfitting |
| Undersampling | Drop majority samples | Faster and balanced, but loses information |
| Class weighting | Reweight the loss, data unchanged | No data loss, but unstable if weights are extreme |

---

**Theme:** [Imbalanced Learning & Resampling](index.html#term-theme-imbalance)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Oversampling](004-oversampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Random Undersampling](008-random-undersampling.html) · [Subsampling](001-subsampling.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html)

---

> **Hint**
> ****More in Imbalanced Learning & Resampling****

[Cluster-based undersampling](007-cluster-based-undersampling.html) · [Downsampling](368-downsampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Oversampling](004-oversampling.html) · [Random Undersampling](008-random-undersampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Subsampling](001-subsampling.html) · [Upsampling](367-upsampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Class Weighting](https://insightful-data-lab.com/2025/08/30/class-weighting/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)