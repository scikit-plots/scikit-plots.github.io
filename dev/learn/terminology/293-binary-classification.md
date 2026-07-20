📏  ****Binary Classification****

# Binary Classification[#](#binary-classification "Link to this heading")

**Predicting one of two classes for each instance.**

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

****Binary classification**** predicts one of ****two classes**** — positive/negative, 1/0, spam/not-spam. The
model doesn’t output a bare label directly; it estimates the ****probability**** that an instance belongs to
the ****positive**** class, then a ****decision threshold**** turns that probability into a hard label.

## The threshold[#](#the-threshold "Link to this heading")

By default the cutoff is ****0.5**** — probability \(\ge 0.5\) → class 1, else class 0 — but 0.5 is ****not****
always right. On ****imbalanced**** data (e.g. fraud at 1%), 0.5 may label everything negative; the threshold
is tuned against ****precision / recall**** or an ****ROC**** curve to match the cost of each error.

## How it’s judged[#](#how-it-s-judged "Link to this heading")

Predictions map to the ****confusion matrix**** — true and false positives and negatives — from which
precision, recall, F1 and AUROC follow. The threshold choice moves directly along that trade-off.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Classification Probability](231-classification-probability.html) · [Log-Odds](295-log-odds.html) · [Sigmoid Function](297-sigmoid-function.html) · [Logistic Regression](292-logistic-regression.html) · [Classification Models](294-classification-models.html) · [Neural Networks](287-neural-networks.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Binary Classification](https://insightful-data-lab.com/2025/08/21/binary-classification/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)