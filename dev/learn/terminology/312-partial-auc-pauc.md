📏  ****Partial AUC (pAUC)****

# Partial AUC (pAUC)[#](#partial-auc-pauc "Link to this heading")

**AUC restricted to a region of interest of the ROC curve.**

## What it is[#](#what-it-is "Link to this heading")

****Partial AUC**** is the area under ****only a slice**** of the ROC curve — typically a confined range of ****false
positive rate**** (say \(\text{FPR} \le 0.1\)), sometimes of TPR, or both. It focuses the metric on the
****operating region**** that actually matters.

## Why restrict[#](#why-restrict "Link to this heading")

Full AUC weights ****all**** FPR regions equally, but many are operationally irrelevant — a radiologist doesn’t
care about performance at 80% FPR, a bank won’t run a fraud model that flags half of transactions. pAUC
scores the model ****where it will be used**** (low FPR / high TPR for screening), and is especially apt for
****low-prevalence**** data needing high specificity.

## The trade-off[#](#the-trade-off "Link to this heading")

pAUC is more ****decision-relevant**** than full AUC and distinguishes curves that ****cross**** yet share the same
total AUC, but it ****ignores**** the ROC outside the band and its raw value depends on the ****interval width****
(so it’s often ****standardized****, e.g. McClish, back to \([0,1]\)). The bounds must be justified by the
use case.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Macro AUC](314-macro-auc.html) · [Micro AUC](313-micro-auc.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Binary Classification](293-binary-classification.html) · [Precision–Recall AUC (PR-AUC)](430-precisionrecall-auc-pr-auc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Partial AUC (pAUC)](https://insightful-data-lab.com/2025/08/21/partial-auc-pauc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)