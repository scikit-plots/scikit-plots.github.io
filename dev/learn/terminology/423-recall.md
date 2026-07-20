📏  ****Recall****

# Recall[#](#recall "Link to this heading")

**The share of actual positives the model correctly identifies.**

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

****Recall**** — also the ****true positive rate**** or ****sensitivity**** — is the share of ****actual positives**** the
model correctly ****catches****:

\[\text{Recall} = \frac{TP}{TP + FN}.\]

It answers “****of everything that was truly positive, how much did we find?****” and falls when ****false
negatives**** pile up.

## The trade-off[#](#the-trade-off "Link to this heading")

Recall trades off against ****precision**** — loosening the threshold catches more positives (higher recall) but
admits more false alarms (lower precision), which is why they’re read together via the ****F1-score****. High
recall matters most when a ****miss**** is costly: disease screening, fraud, safety.

## Its fairness role[#](#its-fairness-role "Link to this heading")

Comparing recall ****across groups**** is exactly the ****equal-opportunity**** fairness test — it asks whether
****qualified**** members of every group have the ****same**** chance of being correctly selected. Unequal recall
means the model ****misses**** true positives more often for one group, a common and consequential bias.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Fairness parity](372-fairness-parity.html) · [Selection Rate](390-selection-rate.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [F1-score](363-f1-score.html) · [Macro Recall](020-macro-recall.html) · [Micro Recall](015-micro-recall.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Recall](https://insightful-data-lab.com/2025/08/17/recall/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)