📏  ****Precision–Recall AUC (PR-AUC)****

# Precision–Recall AUC (PR-AUC)[#](#precisionrecall-auc-pr-auc "Link to this heading")

**Area under the precision-recall curve, informative under class imbalance.**

## What it is[#](#what-it-is "Link to this heading")

****PR-AUC**** is the ****area under the precision–recall curve****, which plots ****precision**** against ****recall****
across thresholds — also called ****Average Precision (AP)****, the mean precision over all recall levels. It
ranges \([0, 1]\), higher is better.

## Why it’s imbalance-friendly[#](#why-it-s-imbalance-friendly "Link to this heading")

Unlike ROC-AUC, PR-AUC ignores ****true negatives**** entirely and focuses on the ****positive**** class, so it
stays informative when positives are ****rare****. Its ****baseline**** also shifts with prevalence — random
guessing scores the ****positive-class ratio**** (0.5 when balanced, 0.01 at 1% positive), not a fixed 0.5.

## When to use it[#](#when-to-use-it "Link to this heading")

Reach for PR-AUC on ****highly imbalanced**** problems where finding the ****minority**** positive is the goal —
fraud, rare-disease, anomaly detection — where a high ROC-AUC can be misleading. Report it ****alongside****
ROC-AUC for the full picture.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Binary Classification](293-binary-classification.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Classification Probability](231-classification-probability.html) · [Macro AUC](314-macro-auc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Precision–Recall AUC (PR-AUC)](https://insightful-data-lab.com/2025/08/17/precision-recall-auc-pr-auc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)