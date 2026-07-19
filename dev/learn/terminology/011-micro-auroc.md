📏  ****Micro AUROC****

# Micro AUROC[#](#micro-auroc "Link to this heading")

**AUROC pooled across classes by aggregating individual decisions first; weights every sample equally.**

> **Important**
> ****AI-generated content.**** This page was written with the assistance of an
AI language model and is provided as a learning aid. Despite careful
review, it may still contain mistakes, omissions, or out-of-date
information. Whether you are new to the topic, a team lead, or a senior
practitioner, treat it as a starting point rather than an authoritative
reference: read it critically and independently verify anything you act on
(code, commands, figures, and factual claims) against official
documentation and primary sources before relying on it.

## What it is[#](#what-it-is "Link to this heading")

****AUROC**** (Area Under the ROC Curve) is, for a binary task, the probability that
the model scores a randomly chosen positive higher than a randomly chosen negative
— a threshold-free measure of ranking ability. ****Micro AUROC**** is one of the two
standard ways to extend that single number to \(K\) classes.

## The multiclass problem[#](#the-multiclass-problem "Link to this heading")

With \(K\) classes there is no single ROC curve. Two aggregation strategies
dominate:

* ****Macro AUROC**** — compute a one-vs-rest AUROC per class, then average them with
  equal weight.
* ****Micro AUROC**** — **pool** every one-vs-rest binary decision across all classes
  into one big set, then compute a single AUROC.

## How micro works[#](#how-micro-works "Link to this heading")

Flatten all per-class one-vs-rest scores and labels into a single pool, count true
and false positives ****globally****, and evaluate AUROC as if it were one binary
problem:

\[\text{AUROC}\_{\text{micro}}
= \text{AUROC}\!\left(\textstyle\bigcup\_{i=1}^{K}\text{positives}\_i,\;
\bigcup\_{i=1}^{K}\text{negatives}\_i\right).\]

Because counts are pooled, ****frequent classes dominate**** the result.

## Worked example[#](#worked-example "Link to this heading")

Three classes with one-vs-rest scores AUROC(A)=0.90, AUROC(B)=0.70, AUROC(C)=0.60:

* ****Macro AUROC**** \(= (0.90 + 0.70 + 0.60)/3 = 0.733\).
* ****Micro AUROC**** pools predictions, so if class A has far more samples the micro
  value is pulled toward 0.90 — the majority class’s score.

## When to use it (and the trap)[#](#when-to-use-it-and-the-trap "Link to this heading")

Micro AUROC answers “how well does the model discriminate ****overall, per sample****”.
Its trap is imbalance: it can look excellent while rare classes are handled badly,
because their few samples barely move the pooled total. Macro AUROC weights every
class equally and exposes weak minorities. ****Report both.****

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import roc_auc_score

# y_true: one-hot (n_samples, K); y_score: predicted probabilities (n_samples, K)
micro = roc_auc_score(y_true, y_score, average="micro", multi_class="ovr")
macro = roc_auc_score(y_true, y_score, average="macro", multi_class="ovr")

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [One-vs-Rest (OvR) AUROC](017-one-vs-rest-ovr-auroc.html) · [Micro F1](013-micro-f1.html) · [Micro Recall](015-micro-recall.html) · [Micro Precision](016-micro-precision.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Micro AUROC](https://insightful-data-lab.com/2025/08/30/micro-auroc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)