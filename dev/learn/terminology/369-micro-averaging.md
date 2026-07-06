📏  ****Micro Averaging****

# Micro Averaging[#](#micro-averaging "Link to this heading")

**Aggregating counts across classes before computing a metric.**

## What it is[#](#what-it-is "Link to this heading")

****Micro averaging**** aggregates a metric by ****pooling the counts**** — it sums the ****true positives, false
positives and false negatives**** across all classes first, then computes precision, recall or F1 from those
totals. Every ****instance**** counts equally, so ****frequent classes dominate****.

## Its behavior[#](#its-behavior "Link to this heading")

Because it is driven by raw counts, micro averaging gives an ****overall****, accuracy-flavored number — in
fact, for ****single-label multiclass****, micro-F1 ****equals accuracy****. Its weakness is that strong performance
on a big class can ****mask**** poor performance on a small one.

## When to use it[#](#when-to-use-it "Link to this heading")

Reach for micro averaging on ****balanced**** problems, in ****multilabel**** settings, or whenever you want a
****single global**** score reflecting overall correctness. Pair it with ****macro**** to expose whether minority
classes are being hidden.

---

****Mind map — connected ideas****

> [Macro Averaging](370-macro-averaging.html) · [Weighted Averaging](361-weighted-averaging.html) · [Micro AUC](313-micro-auc.html) · [One-vs-Rest (OvR)](310-one-vs-rest-ovr.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Multiclass Classification](311-multiclass-classification.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Micro Averaging](https://insightful-data-lab.com/2025/08/20/micro-averaging/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)