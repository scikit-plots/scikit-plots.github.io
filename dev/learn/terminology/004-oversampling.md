🧪  ****Oversampling****

# Oversampling[#](#oversampling "Link to this heading")

**Rebalancing classes by replicating or synthesising additional minority-class examples.**

## What it is[#](#what-it-is "Link to this heading")

****Oversampling**** is a resampling strategy for class imbalance that **grows the
minority class** — by duplicating real samples or generating new ones — until the
classes are closer to balanced. It is the mirror image of undersampling, which
shrinks the majority class instead.

## Why it’s used[#](#why-it-s-used "Link to this heading")

When one class is rare (fraud, disease, defects), a model can reach high accuracy
by almost always predicting the majority class while essentially ignoring the
minority. Oversampling raises the minority’s presence in training so the model is
forced to learn it, usually improving minority-class recall and F1.

## How it’s done[#](#how-it-s-done "Link to this heading")

* ****Random oversampling**** — duplicate existing minority rows at random until the
  counts match.
* ****Synthetic oversampling**** — create **new** minority points with methods such as
  SMOTE or ADASYN instead of exact copies.

## Trade-offs[#](#trade-offs "Link to this heading")

Advantages:

* Stops the model from ignoring the minority class.
* Random oversampling is trivial to apply.
* Often lifts recall and F1 for the rare class.

Disadvantages:

* Duplicating rows can cause overfitting to those exact points.
* A larger training set means longer training.
* Synthetic methods can introduce unrealistic or noisy samples.

## Example[#](#example "Link to this heading")

With 10,000 non-fraud and 1,000 fraud rows, oversampling brings the fraud class up
to 10,000 — by duplication (random) or by synthesis (SMOTE).

```
from collections import Counter
from imblearn.over_sampling import RandomOverSampler, SMOTE

X_dup, y_dup = RandomOverSampler(random_state=42).fit_resample(X, y)
X_syn, y_syn = SMOTE(random_state=42).fit_resample(X, y)
print(Counter(y_dup), Counter(y_syn))

```

---

**Theme:** [Imbalanced Learning & Resampling](index.html#term-theme-imbalance)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Random Undersampling](008-random-undersampling.html) · [Class Weighting](002-class-weighting.html) · [Subsampling](001-subsampling.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html)

---

> **Hint**
> ****More in Imbalanced Learning & Resampling****

[Class Weighting](002-class-weighting.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [Downsampling](368-downsampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Random Undersampling](008-random-undersampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Subsampling](001-subsampling.html) · [Upsampling](367-upsampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Oversampling](https://insightful-data-lab.com/2025/08/30/oversampling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)