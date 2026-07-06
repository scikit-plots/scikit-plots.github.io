🧬  ****Embedding Similarity****

# Embedding Similarity[#](#embedding-similarity "Link to this heading")

**Measuring how close two items are in a learned embedding space.**

## What it is[#](#what-it-is "Link to this heading")

****Embedding similarity**** is how we measure the closeness of two objects once they
have been turned into embedding vectors: similar objects should have vectors that
are close, so a similarity (or distance) score on the vectors becomes a proxy for
how alike the **objects** are. It is the operation that makes embeddings useful in
practice — search, recommendation and clustering are all “find the nearby
vectors” at heart.

## Similarity measures[#](#similarity-measures "Link to this heading")

### cosine similarity[#](#cosine-similarity "Link to this heading")

The most common choice for semantic vectors. It measures the angle between two
vectors and ignores their magnitude, so it compares **direction** (meaning) rather
than length:

\[\operatorname{cosine}(u, v) = \frac{u \cdot v}{\lVert u\rVert\,\lVert v\rVert}
\quad\in\; [-1, 1],\]

where 1 means identical direction, 0 means unrelated and −1 means opposite.

### other measures[#](#other-measures "Link to this heading")

* ****Dot product**** — like cosine but sensitive to magnitude; common inside neural
  networks (attention, matrix factorisation).
* ****Euclidean distance (L2)**** — straight-line distance; smaller is more similar.
* ****Manhattan distance (L1)**** — sum of absolute coordinate differences.
* ****Jaccard similarity**** — for sparse sets rather than dense vectors.
* ****Mahalanobis distance**** — accounts for feature covariance.

## Why it matters[#](#why-it-matters "Link to this heading")

Reducing “are these two things alike?” to a number on vectors is what powers
semantic search, “people who liked this also liked that” recommendations, face and
image retrieval, and clustering or anomaly detection in embedding space.

## In practice[#](#in-practice "Link to this heading")

```
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

u = np.array([[0.1, 0.8, 0.5]])
v = np.array([[0.2, 0.7, 0.4]])

score = cosine_similarity(u, v)[0, 0]
print(f"cosine similarity: {score:.2f}")   # ~0.99  ->  very similar

```

---

****Mind map — connected ideas****

> [Embedding](173-embedding.html) · [Autoencoder](171-autoencoder.html)

---

****More in Representations & Embeddings****

> [Autoencoder](171-autoencoder.html) · [Embedding](173-embedding.html) · [Frozen Encoder](172-frozen-encoder.html)

---

**Theme:** [Representations & Embeddings](index.html#term-theme-repr)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Embedding Similarity](https://insightful-data-lab.com/2025/08/20/embedding-similarity/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: advanced](../../_tags/level-advanced.html)