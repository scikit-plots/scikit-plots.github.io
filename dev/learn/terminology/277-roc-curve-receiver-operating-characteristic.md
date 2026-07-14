📏  ****ROC Curve (Receiver Operating Characteristic)****

# ROC Curve (Receiver Operating Characteristic)[#](#roc-curve-receiver-operating-characteristic "Link to this heading")

**A plot of true- versus false-positive rate across thresholds.**

## What it is[#](#what-it-is "Link to this heading")

A ****ROC curve**** (Receiver Operating Characteristic) plots a binary classifier’s ****true positive rate****
(sensitivity / recall) against its ****false positive rate**** (1 − specificity) as the ****decision threshold****
sweeps from strict to lenient. Each point is one threshold’s (FPR, TPR) trade-off.

## Reading it[#](#reading-it "Link to this heading")

Lowering the threshold labels ****more**** examples positive, so ****both**** TPR and FPR rise — the curve runs from
(0, 0) to (1, 1). A curve hugging the ****upper-left**** corner (high TPR, low FPR) is excellent; the
****diagonal**** line is ****random guessing****; the closer to the top-left, the better the separation.

## Why it’s useful[#](#why-it-s-useful "Link to this heading")

Because it shows performance at ****every**** threshold, the ROC curve reveals the full ****trade-off**** between
catching positives and raising false alarms — letting you pick an operating point for your costs, rather than
being locked to one cutoff. It dates to ****radar**** signal detection in the 1940s.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Model Score](364-model-score.html) · [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Precision–Recall AUC (PR-AUC)](430-precisionrecall-auc-pr-auc.html) · [Accuracy](323-accuracy.html) · [Partial AUC (pAUC)](312-partial-auc-pauc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [ROC Curve (Receiver Operating Characteristic)](https://insightful-data-lab.com/2025/08/22/roc-curve-receiver-operating-characteristic/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)