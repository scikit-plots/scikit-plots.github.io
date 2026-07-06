📏  ****F1-score****

# F1-score[#](#f1-score "Link to this heading")

**The harmonic mean of precision and recall.**

## What it is[#](#what-it-is "Link to this heading")

The ****F1-score**** combines ****precision**** and ****recall**** into one number by taking their ****harmonic mean****:

\[F\_1 = 2\cdot\frac{P \cdot R}{P + R} = \frac{2\,TP}{2\,TP + FP + FN}.\]

It ranges from ****0 to 1****, and is high only when ****both**** precision and recall are high.

## Why harmonic[#](#why-harmonic "Link to this heading")

Using the harmonic mean makes F1 ****penalize lopsided**** models — a classifier with 0.95 precision but 0.20
recall scores a low F1, unlike accuracy or a plain average. This makes F1 far more informative than
****accuracy**** on ****imbalanced**** data, and it deliberately ****ignores true negatives****.

## Its variants[#](#its-variants "Link to this heading")

For ****multiclass**** problems, F1 is aggregated with ****micro****, ****macro**** or ****weighted**** averaging; the
general ****Fβ**** score tilts the balance toward recall (β > 1) or precision (β < 1) when the two errors carry
different costs.

---

****Mind map — connected ideas****

> [Harmonic Mean](362-harmonic-mean.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Accuracy](323-accuracy.html) · [Macro Averaging](370-macro-averaging.html) · [Micro Averaging](369-micro-averaging.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [F1-score](https://insightful-data-lab.com/2025/08/20/f1-score/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)