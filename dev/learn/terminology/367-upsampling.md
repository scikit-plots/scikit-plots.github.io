🧪  ****Upsampling****

# Upsampling[#](#upsampling "Link to this heading")

**Increasing minority-class examples to balance a dataset.**

## What it is[#](#what-it-is "Link to this heading")

****Upsampling**** (random ****oversampling****) rebalances an ****imbalanced**** dataset by ****inflating the minority
class**** — duplicating its examples until the classes are closer to even, so the classifier isn’t overwhelmed
by the majority.

## The risk[#](#the-risk "Link to this heading")

Because it ****repeats**** existing points, upsampling can cause ****overfitting**** — the model learns patterns that
only exist in the ****duplicated**** samples rather than the true minority distribution. The fix is ****SMOTE****,
which ****interpolates**** new synthetic points between a minority point and its nearest neighbors instead of
copying, so no example is an exact duplicate.

## When to use it[#](#when-to-use-it "Link to this heading")

Prefer upsampling when the dataset is ****small**** and discarding data would hurt. Critically, apply it to the
****training set only**** — resampling the validation or test set causes ****data leakage**** and inflates your
metrics.

---

**Theme:** [Imbalanced Learning & Resampling](index.html#term-theme-imbalance)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Downsampling](368-downsampling.html) · [Bootstrap](365-bootstrap.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Recall](423-recall.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Model Stability](187-model-stability.html)

---

> **Hint**
> ****More in Imbalanced Learning & Resampling****

[Class Weighting](002-class-weighting.html) · [Cluster-based undersampling](007-cluster-based-undersampling.html) · [Downsampling](368-downsampling.html) · [NearMiss (Distance-based Undersampling)](006-nearmiss-distance-based-undersampling.html) · [Oversampling](004-oversampling.html) · [Random Undersampling](008-random-undersampling.html) · [SMOTE (Synthetic Minority Over-sampling Technique)](003-smote-synthetic-minority-over-sampling-technique.html) · [Subsampling](001-subsampling.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Upsampling](https://insightful-data-lab.com/2025/08/20/upsampling/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)