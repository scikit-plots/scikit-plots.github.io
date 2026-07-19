📏  ****ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)****

# ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)[#](#roc-auc-receiver-operating-characteristic-area-under-curve-auroc "Link to this heading")

**The probability a random positive outranks a random negative.**

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

****ROC-AUC**** is the ****area under the ROC curve****, which plots the ****true positive rate**** (recall) against the
****false positive rate**** as the decision ****threshold**** sweeps from 0 to 1. It condenses that whole curve into
****one number**** in \([0, 1]\).

## How to read it[#](#how-to-read-it "Link to this heading")

****1.0**** is a perfect classifier, ****0.5**** is random guessing. It has a clean probabilistic meaning — the
chance that a randomly chosen ****positive**** is scored ****higher**** than a randomly chosen ****negative**** — so it
measures ****ranking**** quality, independent of any single threshold and invariant to the score ****scale****.

## The caveat[#](#the-caveat "Link to this heading")

Because the ****false positive rate**** has all the ****true negatives**** in its denominator, ROC-AUC can look
****optimistically high**** on ****imbalanced**** data where negatives dominate — a model can score well while still
flooding a rare positive class with false alarms. There, ****PR-AUC**** is more honest.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Precision–Recall AUC (PR-AUC)](430-precisionrecall-auc-pr-auc.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Multiclass Classification](311-multiclass-classification.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](https://insightful-data-lab.com/2025/08/17/roc-auc-receiver-operating-characteristic-area-under-curve/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)