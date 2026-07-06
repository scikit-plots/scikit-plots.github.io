📏  ****Micro Recall****

# Micro Recall[#](#micro-recall "Link to this heading")

**Recall computed from globally pooled true positives and false negatives.**

## What it is[#](#what-it-is "Link to this heading")

****Recall**** answers: of all the items that are **actually** positive, how many did the
model catch?

\[\text{Recall} = \frac{TP}{TP + FN},\]

so it is sensitive to ****false negatives**** (missed positives). ****Micro recall****
extends this to \(K\) classes by pooling counts across classes rather than
averaging per-class recall (which is macro recall).

## How it’s computed[#](#how-it-s-computed "Link to this heading")

Sum true positives and false negatives over every class, then divide:

\[\text{Recall}\_{\text{micro}}
= \frac{\sum\_{i=1}^{K} TP\_i}{\sum\_{i=1}^{K} (TP\_i + FN\_i)}.\]

This treats the whole multi-class problem as one pooled “caught vs missed”
question, so ****majority classes dominate**** the result.

## The micro identity[#](#the-micro-identity "Link to this heading")

In single-label problems, micro recall equals micro precision equals micro F1 (and
equals accuracy): once everything is pooled, the denominators coincide. The three
diverge only in the multi-label setting.

## Worked example[#](#worked-example "Link to this heading")

Three classes with TP = (40, 30, 10), FN = (10, 20, 30):

* Recall(A)=0.80, Recall(B)=0.60, Recall(C)=0.25 → ****Macro recall**** = 0.55.
* ****Micro recall**** \(= 80/140 \approx 0.571\).

Macro weights every class equally (exposing class C’s weak 0.25); micro is a global,
sample-weighted figure.

## When recall matters most[#](#when-recall-matters-most "Link to this heading")

Favour recall when a ****missed positive is costly**** — disease screening, fraud
detection, safety alerts — where you would rather tolerate false alarms than let a
true case slip through.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import recall_score

micro = recall_score(y_true, y_pred, average="micro")
macro = recall_score(y_true, y_pred, average="macro")

```

---

****Mind map — connected ideas****

> [Micro Precision](016-micro-precision.html) · [Micro F1](013-micro-f1.html) · [Macro Recall](020-macro-recall.html) · [Micro AUROC](011-micro-auroc.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Micro Recall](https://insightful-data-lab.com/2025/08/30/micro-recall/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)