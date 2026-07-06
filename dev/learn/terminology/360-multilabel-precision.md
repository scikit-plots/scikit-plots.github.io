📏  ****Multilabel Precision****

# Multilabel Precision[#](#multilabel-precision "Link to this heading")

**Precision when each instance may carry several labels at once.**

## What it is[#](#what-it-is "Link to this heading")

****Multilabel precision**** is precision when each sample can carry ****several labels at once**** — the labels are
****not**** mutually exclusive. Targets are an ****indicator matrix**** (cell [i, j] = 1 if sample i has label j),
and precision is computed ****per label****, each label a binary problem.

## How it’s aggregated[#](#how-it-s-aggregated "Link to this heading")

As with multiclass, per-label precisions are combined by ****micro****, ****macro**** or ****weighted**** averaging —
but multilabel adds a distinctive ****‘samples’**** average, which computes precision ****per instance**** (across
that sample’s labels) and averages over samples.

## Why it differs[#](#why-it-differs "Link to this heading")

Unlike multiclass, where exactly one class is correct, multilabel labels ****co-occur****, so a prediction can
be ****partly**** right (some labels correct, others missed). The averaging choice — especially ****samples**** vs
****micro**** — decides whether you’re scoring per-label or per-example accuracy.

---

****Mind map — connected ideas****

> [Multiclass Precision](359-multiclass-precision.html) · [Per-class Precision (sometimes called class-wise precision)](358-per-class-precision-sometimes-called-class-wise.html) · [One-vs-Rest (OvR)](310-one-vs-rest-ovr.html) · [Micro Averaging](369-micro-averaging.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [F1-score](363-f1-score.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Multilabel Precision](https://insightful-data-lab.com/2025/08/20/multilabel-precision/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)