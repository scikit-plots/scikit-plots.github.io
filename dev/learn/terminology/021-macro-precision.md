📏  ****Macro Precision****

# Macro Precision[#](#macro-precision "Link to this heading")

**The unweighted mean of per-class precision values.**

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

****Precision**** is the share of the model’s positive predictions that are correct,
\(\text{Precision} = TP/(TP+FP)\), so it is sensitive to ****false positives****.
For \(K\) classes, compute precision **per class** (one-vs-rest) and take the
****arithmetic mean**** to get macro precision:

\[\text{Precision}\_{\text{macro}} = \frac{1}{K} \sum\_{i=1}^{K} \text{Precision}\_i.\]

Every class counts equally, whatever its size, so a small class the model
over-flags pulls the score down as much as a large one.

## Macro vs micro vs weighted[#](#macro-vs-micro-vs-weighted "Link to this heading")

* ****Macro**** — equal weight per class; fair across classes.
* ****Micro**** — pool global TP and FP first; dominated by large classes (and equals
  accuracy in single-label problems).
* ****Weighted**** — per-class precision averaged by class frequency.

## Worked example[#](#worked-example "Link to this heading")

Three classes with Precision(A)=0.80, Precision(B)=0.60, Precision(C)=0.40:

\[\text{Precision}\_{\text{macro}} = \frac{0.80 + 0.60 + 0.40}{3} = 0.60.\]

If C is tiny, macro precision still penalises weak performance on it.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Zero-division**** — a class the model never predicts has 0 in the denominator;
  its precision is undefined and conventionally set to 0, which penalises ignoring
  the class. Set `zero_division` explicitly to control this.
* ****Pair it with recall**** — precision rewards being conservative; a model that
  rarely predicts a class can post high precision while missing most of it.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import precision_score

macro = precision_score(y_true, y_pred, average="macro", zero_division=0)
weighted = precision_score(y_true, y_pred, average="weighted")

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Micro Precision](016-micro-precision.html) · [Macro Recall](020-macro-recall.html) · [Macro F1](019-macro-f1.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Macro Precision](https://insightful-data-lab.com/2025/08/30/macro-precision/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)