📏  ****Per-class Precision (sometimes called class-wise precision)****

# Per-class Precision (sometimes called class-wise precision)[#](#per-class-precision-sometimes-called-class-wise-precision "Link to this heading")

**Precision computed separately for each class.**

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

****Per-class precision**** is ****precision computed separately for each class****, treating that class as the
****positive**** one and everything else as negative (****one-vs-rest****). For class \(c\) it is

\[\text{precision}\_c = \frac{TP\_c}{TP\_c + FP\_c},\]

answering **of everything predicted as class c, how much really was c?**

## Why report it[#](#why-report-it "Link to this heading")

A single averaged number can ****hide**** a class the model handles badly; per-class precision exposes exactly
****which**** classes suffer false positives. In scikit-learn, `precision_score(average=None)` returns the
whole ****array**** of per-class values.

## Its role[#](#its-role "Link to this heading")

Per-class precision is the ****building block**** that ****micro****, ****macro**** and ****weighted**** averaging then
collapse into one score. Best practice is to report the ****per-class**** values ****alongside**** any aggregate.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Multiclass Precision](359-multiclass-precision.html) · [Multilabel Precision](360-multilabel-precision.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [One-vs-Rest (OvR)](310-one-vs-rest-ovr.html) · [Macro Averaging](370-macro-averaging.html) · [Micro Averaging](369-micro-averaging.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Per-class Precision (sometimes called class-wise precision)](https://insightful-data-lab.com/2025/08/20/per-class-precision-sometimes-called-class-wise-precision/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)