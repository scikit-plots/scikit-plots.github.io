📏  ****Micro Precision****

# Micro Precision[#](#micro-precision "Link to this heading")

**Precision computed from globally pooled true positives and false positives.**

## What it is[#](#what-it-is "Link to this heading")

****Precision**** answers: of all the items the model **flagged** positive, how many were
right?

\[\text{Precision} = \frac{TP}{TP + FP},\]

so it is sensitive to ****false positives**** (false alarms). ****Micro precision****
extends it to \(K\) classes by pooling counts before dividing, rather than
averaging per-class precision (macro precision).

## How it’s computed[#](#how-it-s-computed "Link to this heading")

\[\text{Precision}\_{\text{micro}}
= \frac{\sum\_{i=1}^{K} TP\_i}{\sum\_{i=1}^{K} (TP\_i + FP\_i)}.\]

Summing across classes first makes the metric a single global “of all predictions,
how many correct”, so ****frequent classes carry the most weight****.

## The micro identity[#](#the-micro-identity "Link to this heading")

As with micro recall and micro F1, in single-label classification micro precision
equals the other two (and accuracy), because the pooled denominators line up. They
differ only under multi-label evaluation.

## Worked example[#](#worked-example "Link to this heading")

Three classes with TP = (40, 30, 10), FP = (10, 20, 20):

* Precision(A)=0.80, Precision(B)=0.60, Precision(C)=0.33 → ****Macro precision**** = 0.58.
* ****Micro precision**** \(= 80/130 \approx 0.615\).

The micro value sits near the large classes’ contribution; macro surfaces class C’s
weaker 0.33.

## When precision matters most[#](#when-precision-matters-most "Link to this heading")

Favour precision when a ****false positive is costly**** — spam filters (blocking real
mail), recommending a bad product, flagging an innocent transaction — where the
price of a wrong “yes” is high.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import precision_score

micro = precision_score(y_true, y_pred, average="micro")
macro = precision_score(y_true, y_pred, average="macro")

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Micro Recall](015-micro-recall.html) · [Micro F1](013-micro-f1.html) · [Macro Precision](021-macro-precision.html) · [Micro AUROC](011-micro-auroc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Micro Precision](https://insightful-data-lab.com/2025/08/30/micro-precision/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)