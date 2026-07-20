📏  ****Multiclass Precision****

# Multiclass Precision[#](#multiclass-precision "Link to this heading")

**Precision aggregated across the classes of a multiclass problem.**

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

****Multiclass precision**** is precision for a problem with ****more than two mutually exclusive**** classes. Since
precision is defined on a ****binary**** positive/negative split, it is computed by treating the task as ****K
one-vs-rest**** binary problems — the ****per-class**** precisions — then reduced to a single number.

## How it’s reduced[#](#how-it-s-reduced "Link to this heading")

The per-class values are combined by an ****averaging**** scheme — ****micro**** (pool counts,
majority-dominated), ****macro**** (equal weight per class), or ****weighted**** (by support). The choice
determines whether rare classes are surfaced or hidden, so it must be ****stated**** with the score.

## The caveat[#](#the-caveat "Link to this heading")

Because each class is scored against “the rest,” each binary split is ****imbalanced****; reporting the
****per-class**** precisions guards against an average that looks good only because the majority class does.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Per-class Precision (sometimes called class-wise precision)](358-per-class-precision-sometimes-called-class-wise.html) · [Multilabel Precision](360-multilabel-precision.html) · [Multiclass Classification](311-multiclass-classification.html) · [Macro Averaging](370-macro-averaging.html) · [Weighted Averaging](361-weighted-averaging.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Multiclass Precision](https://insightful-data-lab.com/2025/08/20/multiclass-precision/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)