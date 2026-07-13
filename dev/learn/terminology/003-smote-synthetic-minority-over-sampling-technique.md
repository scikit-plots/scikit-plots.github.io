🧪  ****SMOTE (Synthetic Minority Over-sampling Technique)****

# SMOTE (Synthetic Minority Over-sampling Technique)[#](#smote-synthetic-minority-over-sampling-technique "Link to this heading")

**Creates new minority examples by interpolating between nearest neighbours instead of duplicating existing rows.**

## What it is[#](#what-it-is "Link to this heading")

****SMOTE**** (Synthetic Minority Over-sampling Technique), introduced by Chawla and
colleagues in 2002, fixes class imbalance by **synthesising** new minority-class
examples rather than duplicating existing ones. Where plain duplication just copies
points, SMOTE invents plausible new ones in the gaps between real minority samples.

## Why not just duplicate[#](#why-not-just-duplicate "Link to this heading")

Random oversampling repeats the same minority rows, so a classifier can memorise
those exact points and overfit. SMOTE instead places new points **along the lines
between** nearby minority samples, filling out the minority region and pushing the
decision boundary toward something more general.

## The algorithm[#](#the-algorithm "Link to this heading")

For each minority sample \(x\):

1. find its \(k\) nearest minority-class neighbours;
2. pick one neighbour \(x\_{nn}\) at random;
3. create a synthetic point on the segment joining them,

\[x\_{\text{new}} = x + \delta\,(x\_{nn} - x), \qquad \delta \sim \mathcal{U}(0, 1).\]

Because \(\delta\) is uniform on \([0, 1]\), the new point lands somewhere
between the two originals.

## Variants[#](#variants "Link to this heading")

* ****Borderline-SMOTE**** — synthesises only near the decision boundary, where
  mistakes are most likely.
* ****SMOTE-Tomek / SMOTE-ENN**** — pair SMOTE with a cleaning step that removes
  overlapping or noisy points.
* ****ADASYN**** — generates more synthetic points for the minority samples that are
  hardest to learn.

## Trade-offs[#](#trade-offs "Link to this heading")

Advantages:

* Less overfitting than duplicating samples.
* Smoother, more general boundaries and better minority-class scores.

Disadvantages:

* Can create unrealistic points when the minority distribution is complex.
* May push synthetic points into majority territory, causing class overlap.
* More expensive than simple duplication.

## Example[#](#example "Link to this heading")

With 100 minority and 1,000 majority samples, SMOTE generates 900 synthetic
minority points, giving a balanced 1,000 vs 1,000.

```
from collections import Counter
from imblearn.over_sampling import SMOTE

print("before:", Counter(y))
X_res, y_res = SMOTE(k_neighbors=5, random_state=42).fit_resample(X, y)
print("after: ", Counter(y_res))

```

---

**Theme:** [Imbalanced Learning & Resampling](index.html#term-theme-imbalance)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Oversampling](004-oversampling.html) · [Random Undersampling](008-random-undersampling.html) · [Class Weighting](002-class-weighting.html) · [Subsampling](001-subsampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html)

---

> **Hint**
> ****More in Imbalanced Learning & Resampling****

[Class Weighting](002-class-weighting.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [Downsampling](368-downsampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Oversampling](004-oversampling.html) · [Random Undersampling](008-random-undersampling.html) · [Subsampling](001-subsampling.html) · [Upsampling](367-upsampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [SMOTE (Synthetic Minority Over-sampling Technique)](https://insightful-data-lab.com/2025/08/30/smote-synthetic-minority-over-sampling-technique/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)