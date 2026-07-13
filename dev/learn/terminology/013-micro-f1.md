📏  ****Micro F1****

# Micro F1[#](#micro-f1 "Link to this heading")

**F1 computed from globally pooled TP/FP/FN; dominated by the more frequent classes.**

## What it is[#](#what-it-is "Link to this heading")

The ****F1 score**** is the harmonic mean of precision and recall, rewarding a model
only when **both** are high:

\[F\_1 = \frac{2 \cdot \text{Precision} \cdot \text{Recall}}
{\text{Precision} + \text{Recall}}.\]

****Micro F1**** extends F1 to \(K\) classes by pooling counts before computing the
score, rather than averaging per-class F1 values (which is macro F1).

## How it’s computed[#](#how-it-s-computed "Link to this heading")

First form ****global**** precision and recall by summing true/false positives and
false negatives over all classes:

\[\text{Precision}\_{\text{micro}} = \frac{\sum\_i TP\_i}{\sum\_i (TP\_i + FP\_i)},
\qquad
\text{Recall}\_{\text{micro}} = \frac{\sum\_i TP\_i}{\sum\_i (TP\_i + FN\_i)},\]

then combine them with the F1 formula:

\[F\_{1,\text{micro}} = \frac{2 \cdot \text{Precision}\_{\text{micro}}
\cdot \text{Recall}\_{\text{micro}}}
{\text{Precision}\_{\text{micro}} + \text{Recall}\_{\text{micro}}}.\]

## A key identity[#](#a-key-identity "Link to this heading")

In ****single-label**** (multi-class) problems, micro precision, micro recall and micro
F1 are all equal — and equal to plain ****accuracy****. With one label per sample, a
false positive for one class is the same event as a false negative for another, so
the pooled denominators coincide. (In **multi-label** problems they can differ.)

## Worked example[#](#worked-example "Link to this heading")

Three classes with TP = (40, 30, 10), FP = (10, 20, 20), FN = (10, 20, 30):

* \(\text{Precision}\_{\text{micro}} = 80/130 \approx 0.615\)
* \(\text{Recall}\_{\text{micro}} = 80/140 \approx 0.571\)
* \(F\_{1,\text{micro}} \approx 0.592\)

## When to use it[#](#when-to-use-it "Link to this heading")

Micro F1 measures overall, sample-weighted performance and lets majority classes
dominate — handy on imbalanced data when overall throughput matters. Use ****macro
F1**** when every class should count equally, including rare ones.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import f1_score

micro = f1_score(y_true, y_pred, average="micro")
macro = f1_score(y_true, y_pred, average="macro")

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Macro F1](019-macro-f1.html) · [Micro Precision](016-micro-precision.html) · [Micro Recall](015-micro-recall.html) · [Micro AUROC](011-micro-auroc.html) · [Multi-label Classification](012-multi-label-classification.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Micro F1](https://insightful-data-lab.com/2025/08/30/micro-f1/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)