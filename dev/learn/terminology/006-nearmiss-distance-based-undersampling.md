🧪  ****NearMiss (Distance-based Undersampling)****

# NearMiss (Distance-based Undersampling)[#](#nearmiss-distance-based-undersampling "Link to this heading")

**Undersamples the majority class by keeping the majority points nearest to the minority, chosen by distance heuristics.**

## What it is[#](#what-it-is "Link to this heading")

****NearMiss**** is a family of **undersampling** methods that shrink the majority class
intelligently. Instead of dropping majority samples at random, NearMiss chooses
which ones to keep based on their ****distance to minority samples****, retaining the
informative, hard-to-classify majority points near the boundary and discarding the
“easy” ones far away.

## The three versions[#](#the-three-versions "Link to this heading")

* ****NearMiss-1**** — keep the majority samples whose **average distance to their
  :math:`k` nearest minority samples** is smallest (closest to the minority class).
* ****NearMiss-2**** — keep the majority samples whose **average distance to their
  :math:`k` farthest minority samples** is smallest.
* ****NearMiss-3**** — for each minority sample, keep a fixed number of its nearest
  majority samples, guaranteeing every minority point is surrounded.

## Trade-offs[#](#trade-offs "Link to this heading")

Advantages:

* Preserves boundary-defining points instead of throwing data away blindly.
* Reduces majority-class bias and can generalise better than naive undersampling.

Disadvantages:

* Distance computations make it more expensive than random undersampling.
* Pruning “easy” samples too hard can overfit the difficult regions.
* Results are sensitive to the choice of \(k\).

## Example[#](#example "Link to this heading")

```
from collections import Counter
from imblearn.under_sampling import NearMiss

print("before:", Counter(y))
X_res, y_res = NearMiss(version=1).fit_resample(X, y)   # version 1, 2 or 3
print("after: ", Counter(y_res))

```

---

****Mind map — connected ideas****

> [Random Undersampling](008-random-undersampling.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [Subsampling](001-subsampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Oversampling](004-oversampling.html)

---

****More in Imbalanced Learning & Resampling****

> [Class Weighting](002-class-weighting.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [Downsampling](368-downsampling.html) · [Oversampling](004-oversampling.html) · [Random Undersampling](008-random-undersampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Subsampling](001-subsampling.html) · [Upsampling](367-upsampling.html)

---

**Theme:** Imbalanced Learning & Resampling  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [NearMiss (Distance-based Undersampling)](https://insightful-data-lab.com/2025/08/30/nearmiss-distance-based-undersampling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)