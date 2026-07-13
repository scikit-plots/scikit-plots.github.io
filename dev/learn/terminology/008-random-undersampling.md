🧪  ****Random Undersampling****

# Random Undersampling[#](#random-undersampling "Link to this heading")

**Drops random majority-class rows to balance classes — simple, but can discard useful information.**

## What it is[#](#what-it-is "Link to this heading")

****Random undersampling**** balances an imbalanced dataset the simplest way possible:
by randomly deleting majority-class rows until the classes are closer in size. It is
the counterpart of oversampling, which adds minority rows rather than removing
majority ones.

## Why it’s used[#](#why-it-s-used "Link to this heading")

When the majority class dominates (fraud, churn), a classifier can drift toward
always predicting it. Trimming the majority restores balance so the model gives the
minority class real weight — and, as a bonus, trains faster on the smaller set.

## How it works[#](#how-it-works "Link to this heading")

With 10,000 majority and 1,000 minority rows, draw 1,000 of the majority at random
and keep all the minority, yielding a balanced 1,000 vs 1,000.

## Trade-offs[#](#trade-offs "Link to this heading")

Advantages:

* Simple and fast.
* Balances the classes so the minority is not ignored.
* Less data means quicker training.

Disadvantages:

* ****Information loss**** — useful majority rows are thrown away.
* Risk of ****underfitting**** from training on fewer points.
* Poor when the minority class is tiny, since too much majority data is discarded.

## Smarter alternatives[#](#smarter-alternatives "Link to this heading")

* ****Random oversampling**** or ****SMOTE**** — grow the minority instead of shrinking the
  majority.
* ****Tomek links / Edited Nearest Neighbours**** — remove borderline or overlapping
  majority points rather than random ones.
* ****Ensemble methods**** — combine undersampling with bagging/boosting, e.g. a
  Balanced Random Forest.

## Example[#](#example "Link to this heading")

```
from collections import Counter
from imblearn.under_sampling import RandomUnderSampler

print("before:", Counter(y))
X_res, y_res = RandomUnderSampler(random_state=42).fit_resample(X, y)
print("after: ", Counter(y_res))

```

---

**Theme:** [Imbalanced Learning & Resampling](index.html#term-theme-imbalance)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Oversampling](004-oversampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [Class Weighting](002-class-weighting.html) · [Subsampling](001-subsampling.html)

---

> **Hint**
> ****More in Imbalanced Learning & Resampling****

[Class Weighting](002-class-weighting.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [Downsampling](368-downsampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Oversampling](004-oversampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Subsampling](001-subsampling.html) · [Upsampling](367-upsampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Random Undersampling](https://insightful-data-lab.com/2025/08/30/random-undersampling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)