🧪  ****Downsampling****

# Downsampling[#](#downsampling "Link to this heading")

**Reducing majority-class examples to balance a dataset.**

## What it is[#](#what-it-is "Link to this heading")

****Downsampling**** (random ****undersampling****) rebalances an ****imbalanced**** dataset the opposite way — by
****removing majority-class**** examples until the classes are closer to even. It keeps all the minority data and
thins out the majority.

## The risk[#](#the-risk "Link to this heading")

Discarding majority examples can cause ****underfitting**** — the model loses ****informative**** cases and may miss
the majority class’s general pattern. In extreme imbalance you may throw away the vast bulk of the data
(99%+), damaging its representation.

## When to use it[#](#when-to-use-it "Link to this heading")

Prefer downsampling when data is ****plentiful****, since it is ****computationally efficient**** (less data to train
on) and ****avoids the overfitting**** of duplication. As with upsampling, apply it to the ****training set only****
to avoid ****data leakage****.

---

****Mind map — connected ideas****

> [Upsampling](367-upsampling.html) · [Bootstrap](365-bootstrap.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Recall](423-recall.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Model Stability](187-model-stability.html)

---

****More in Imbalanced Learning & Resampling****

> [Class Weighting](002-class-weighting.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Oversampling](004-oversampling.html) · [Random Undersampling](008-random-undersampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Subsampling](001-subsampling.html) · [Upsampling](367-upsampling.html)

---

**Theme:** Imbalanced Learning & Resampling  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Downsampling](https://insightful-data-lab.com/2025/08/20/downsampling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)