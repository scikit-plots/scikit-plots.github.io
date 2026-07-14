🧪  ****Cluster-based undersampling****

# Cluster-based undersampling[#](#cluster-based-undersampling "Link to this heading")

**Clusters the majority class and keeps representatives of each cluster, shrinking it while preserving its structure.**

## What it is[#](#what-it-is "Link to this heading")

****Cluster-based undersampling**** is a smarter way to shrink the majority class than
dropping rows at random. It first ****clusters**** the majority samples (typically with
K-means) and then keeps a ****representative**** from each cluster, so the reduced set
still covers the full spread of the majority class instead of leaving gaps by
chance.

## How it works[#](#how-it-works "Link to this heading")

1. Split the data into majority and minority classes.
2. Cluster the majority class (commonly K-means).
3. From each cluster, keep representatives — the points nearest the centroid, or a
   fixed proportion of the cluster.
4. Combine those with the minority class to form a balanced dataset.

## Trade-offs[#](#trade-offs "Link to this heading")

Advantages:

* Preserves the **structure** of the majority class, so less information is lost.
* Avoids the luck-of-the-draw problem of random undersampling.
* Often classifies better than naive undersampling.

Disadvantages:

* The clustering step adds cost.
* Results depend on the clustering method and the number of clusters \(K\).
* It still discards data, so cutting too far risks underfitting.

## Example[#](#example "Link to this heading")

With 10,000 majority and 1,000 minority samples, cluster the majority into 1,000
clusters and keep one representative per cluster — a balanced 1,000 vs 1,000 that
still spans the majority distribution.

```
from collections import Counter
from imblearn.under_sampling import ClusterCentroids

print("before:", Counter(y))
X_res, y_res = ClusterCentroids(random_state=42).fit_resample(X, y)
print("after: ", Counter(y_res))

```

---

**Theme:** [Imbalanced Learning & Resampling](index.html#term-theme-imbalance)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Random Undersampling](008-random-undersampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Subsampling](001-subsampling.html) · [Oversampling](004-oversampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html)

---

> **Hint**
> ****More in Imbalanced Learning & Resampling****

[Class Weighting](002-class-weighting.html) · [Downsampling](368-downsampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Oversampling](004-oversampling.html) · [Random Undersampling](008-random-undersampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Subsampling](001-subsampling.html) · [Upsampling](367-upsampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Cluster-based undersampling](https://insightful-data-lab.com/2025/08/30/cluster-based-undersampling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)