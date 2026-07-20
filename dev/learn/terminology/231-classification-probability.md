📏  ****Classification Probability****

# Classification Probability[#](#classification-probability "Link to this heading")

**The probability a model assigns to a class for an instance.**

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

The ****classification probability**** is the ****score**** a classifier assigns that an instance belongs to a
class — an estimate of \(P(\text{class} \mid \text{features})\) between ****0 and 1****. It is the model’s
****confidence**** **before** any hard decision is made.

## From probability to label[#](#from-probability-to-label "Link to this heading")

A ****threshold**** converts it to a class (in scikit-learn, `predict_proba` gives the probability,
`predict` applies the cutoff). Two instances scored 0.51 and 0.99 both become “positive,” but they are
****not**** equally certain — which is why the probability carries more information than the label.

## Why calibration matters[#](#why-calibration-matters "Link to this heading")

The probability is only trustworthy if it is ****calibrated**** — if events predicted at 0.7 actually happen
about 70% of the time. ****Over-**** or ****under-confident**** scores mislead any downstream ****risk-based
decision****, so probabilities are validated with calibration curves, not just accuracy.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Binary Classification](293-binary-classification.html) · [Log-Odds](295-log-odds.html) · [Sigmoid Function](297-sigmoid-function.html) · [Logistic Regression](292-logistic-regression.html) · [Probabilistic Forecasts](241-probabilistic-forecasts.html) · [Multiclass AUROC](022-multiclass-auroc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Classification Probability](https://insightful-data-lab.com/2025/08/23/classification-probability/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)