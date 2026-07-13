📏  ****Macro Recall****

# Macro Recall[#](#macro-recall "Link to this heading")

**The unweighted mean of per-class recall values.**

## What it is[#](#what-it-is "Link to this heading")

Recall is the share of actual positives the model catches,
\(\text{Recall} = TP/(TP+FN)\). For \(K\) classes, compute recall **per class**
(one-vs-rest) and take the ****unweighted mean****:

\[\text{Recall}\_{\text{macro}} = \frac{1}{K} \sum\_{i=1}^{K} \text{Recall}\_i.\]

Every class counts equally regardless of how many samples it has.

## A useful equivalence[#](#a-useful-equivalence "Link to this heading")

In single-label classification, ****macro recall is exactly balanced accuracy**** — the
average per-class hit rate. That makes it a go-to headline metric for imbalanced
problems, because it refuses to let a dominant class inflate the score.

## Macro vs micro vs weighted[#](#macro-vs-micro-vs-weighted "Link to this heading")

* ****Macro**** — equal weight per class; good when every class is equally important.
* ****Micro**** — global TP and FN pooled first; dominated by large classes.
* ****Weighted**** — per-class recall averaged by the number of true samples in each
  class.

## Worked example[#](#worked-example "Link to this heading")

Three classes with Recall(A)=0.90, Recall(B)=0.60, Recall(C)=0.30:

\[\text{Recall}\_{\text{macro}} = \frac{0.90 + 0.60 + 0.30}{3} = 0.60.\]

Even though C is rare, it carries the same weight as A.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Ignores false positives**** — recall says nothing about precision, so a model that
  over-predicts a class can still score well; pair it with macro precision or
  macro F1.
* ****Empty classes**** — a class with no true samples has undefined recall and must be
  handled before averaging.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import recall_score, balanced_accuracy_score

macro = recall_score(y_true, y_pred, average="macro")
# in single-label problems this equals:
bal_acc = balanced_accuracy_score(y_true, y_pred)

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Macro Precision](021-macro-precision.html) · [Macro F1](019-macro-f1.html) · [Micro Recall](015-micro-recall.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Macro Recall](https://insightful-data-lab.com/2025/08/30/macro-recall/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)