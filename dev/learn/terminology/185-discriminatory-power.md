📏  ****Discriminatory Power****

# Discriminatory Power[#](#discriminatory-power "Link to this heading")

**A model’s ability to separate positive from negative cases.**

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

****Discriminatory power**** is a model’s (or test’s) ability to ****distinguish correctly between two
groups**** — usually positives versus negatives: good versus bad credit, disease versus healthy,
responder versus not. The plain question it answers: **how well can the model separate those who will
do X from those who won’t?**

## Where it applies[#](#where-it-applies "Link to this heading")

A classifier with high discriminatory power assigns ****higher scores to positives**** than negatives. A
****credit scorecard**** is judged on how cleanly it separates defaulters from non-defaulters; a
****diagnostic test**** on how well it separates the sick from the healthy.

## How it’s measured[#](#how-it-s-measured "Link to this heading")

Several metrics. ****AUC**** is the probability a random positive outscores a random negative — 0.5 is
random, 1.0 is perfect. The ****KS statistic**** is the maximum gap between the cumulative score
distributions of positives and negatives (0.4-0.6 is strong in credit risk). The ****Gini coefficient****
rescales AUC, \(\text{Gini} = 2 \times \text{AUC} - 1\). Lift and CAP curves give a visual read.

## An example, and why it matters[#](#an-example-and-why-it-matters "Link to this heading")

If good borrowers average a score of 0.8 and bad ones 0.3, with ****AUC 0.85 and KS 0.45****, the model
has strong discriminatory power; ****AUC 0.55, KS 0.08**** is near-random. It drives better ****targeting****
and ****lending**** decisions, is a ****regulatory**** reporting requirement in finance, and reduces false
positives and negatives for fairer outcomes.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Gini Coefficient](023-gini-coefficient.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [KS Statistic (Kolmogorov–Smirnov Statistic)](186-ks-statistic-kolmogorovsmirnov-statistic.html) · [Demographic Parity (Statistical Parity)](030-demographic-parity-statistical-parity.html) · [Recalibration](159-recalibration.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Discriminatory Power](https://insightful-data-lab.com/2025/08/23/discriminatory-power/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)