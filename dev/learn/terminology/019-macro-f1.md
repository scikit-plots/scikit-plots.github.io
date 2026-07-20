📏  ****Macro F1****

# Macro F1[#](#macro-f1 "Link to this heading")

**The unweighted mean of per-class F1 scores; exposes weak performance on rare classes.**

> **Important**
> ****✨ AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

F1 is the harmonic mean of precision and recall, high only when both are high:

\[F\_1 = \frac{2 \cdot \text{Precision} \cdot \text{Recall}}
{\text{Precision} + \text{Recall}}.\]

For \(K\) classes, compute an F1 **per class** (one-vs-rest), then ****average them
with equal weight**** to get macro F1:

\[F\_{1,\text{macro}} = \frac{1}{K} \sum\_{i=1}^{K} F\_{1,i}.\]

Each class contributes the same, whatever its size — so weak performance on a rare
class is fully visible.

## Macro vs micro vs weighted[#](#macro-vs-micro-vs-weighted "Link to this heading")

* ****Macro**** — equal weight per class; surfaces minority-class weakness.
* ****Micro**** — pool global TP / FP / FN first, then compute F1; dominated by majority
  classes (and equals accuracy in single-label problems).
* ****Weighted**** — average per-class F1 weighted by class frequency; a compromise that
  respects class sizes while staying per-class.

## Worked example[#](#worked-example "Link to this heading")

Three classes:

* F1(A) = 0.80 (P=0.80, R=0.80)
* F1(B) = 0.48 (P=0.60, R=0.40)
* F1(C) = 0.33 (P=0.50, R=0.25)

\[F\_{1,\text{macro}} = \frac{0.80 + 0.48 + 0.33}{3} = 0.54.\]

Class A is strong, but B and C pull the average down — exactly what you want when
every class matters.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Zero-division**** — if a class is never predicted, its precision is undefined; by
  convention its F1 is taken as 0, which (correctly) penalises ignoring that class.
* ****Rare-class leverage**** — one small, hard class can dominate the macro average;
  read the per-class F1s alongside it.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import f1_score

macro = f1_score(y_true, y_pred, average="macro")
weighted = f1_score(y_true, y_pred, average="weighted")

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Micro F1](013-micro-f1.html) · [Macro Precision](021-macro-precision.html) · [Macro Recall](020-macro-recall.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Macro F1](https://insightful-data-lab.com/2025/08/30/macro-f1/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)