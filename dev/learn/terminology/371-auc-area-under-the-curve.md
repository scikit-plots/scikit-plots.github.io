📏  ****AUC (Area Under the Curve)****

# AUC (Area Under the Curve)[#](#auc-area-under-the-curve "Link to this heading")

**The area under a ROC or PR curve summarising performance across thresholds.**

## What it is[#](#what-it-is "Link to this heading")

****AUC**** — the ****area under the curve**** — condenses an entire ****ROC curve**** into one number by measuring the
area beneath it. It ranges from ****0 to 1****: ****1**** is perfect, ****0.5**** is random guessing, and below 0.5 means
the scores are ****inverted****.

## Its meaning[#](#its-meaning "Link to this heading")

AUC has a clean interpretation — it is the ****probability that a random positive is scored higher than a
random negative**** (the Wilcoxon–Mann–Whitney statistic). So it measures how well the model ****ranks****
positives above negatives, independent of any single threshold.

## Why it beats accuracy[#](#why-it-beats-accuracy "Link to this heading")

AUC is ****threshold-invariant**** and always calibrated so ****0.5 = useless****, unlike ****accuracy****, which is
misleading under ****imbalance**** (90% accuracy is trivial when 90% of data is negative). But on ****heavily
imbalanced**** data the ****PR-AUC**** often tells a more honest story, since ROC-AUC can look optimistic.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[ROC Curve (Receiver Operating Characteristic)](277-roc-curve-receiver-operating-characteristic.html) · [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Precision–Recall AUC (PR-AUC)](430-precisionrecall-auc-pr-auc.html) · [Model Score](364-model-score.html) · [Partial AUC (pAUC)](312-partial-auc-pauc.html) · [Accuracy](323-accuracy.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [AUC (Area Under the Curve)](https://insightful-data-lab.com/2025/08/20/auc-area-under-the-curve/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)