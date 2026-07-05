📏  ****Harmonic Mean****

# Harmonic Mean[#](#harmonic-mean "Link to this heading")

**The reciprocal-based mean underlying the F1 score.**

## What it is[#](#what-it-is "Link to this heading")

The ****harmonic mean**** is an average that ****leans toward the smaller**** of the values — the reciprocal of the
average of reciprocals. For two numbers it is:

\[\text{HM} = \frac{2ab}{a + b}.\]

It is always ****≤ the arithmetic mean****, and equal only when the values match.

## Its key property[#](#its-key-property "Link to this heading")

It ****penalizes imbalance****. Averaging precision 0.95 and recall 0.20, the arithmetic mean gives a rosy
****0.575****, but the harmonic mean gives ****~0.33**** — correctly flagging that one component is poor. A high
harmonic mean requires ****all**** inputs to be high.

## Where it’s used[#](#where-it-s-used "Link to this heading")

That property is exactly why the ****F1-score**** uses it to combine precision and recall, and why harmonic
means are the right average for ****rates and ratios**** (speeds, P/E ratios) rather than additive quantities.

---

****Mind map — connected ideas****

> [F1-score](363-f1-score.html) · [Mean](316-mean.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Weighted Averaging](361-weighted-averaging.html) · [Macro Averaging](370-macro-averaging.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)

---

**Theme:** Classification & Averaging Metrics  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Harmonic Mean](https://insightful-data-lab.com/2025/08/20/harmonic-mean/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)