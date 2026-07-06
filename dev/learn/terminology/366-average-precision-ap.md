📏  ****Average Precision (AP)****

# Average Precision (AP)[#](#average-precision-ap "Link to this heading")

**The area under the precision-recall curve summarising ranked retrieval.**

## What it is[#](#what-it-is "Link to this heading")

****Average precision**** summarizes the entire ****precision–recall curve**** in one number — the mean of precision
across recall levels, computed as precision weighted by the ****gain in recall**** at each threshold:

\[\text{AP} = \sum\_{n} (R\_n - R\_{n-1})\,P\_n.\]

It equals the ****area under the PR curve**** (PR-AUC / AUPRC).

## Why it’s useful[#](#why-it-s-useful "Link to this heading")

Because it sweeps ****all thresholds****, AP needs no single cutoff, and because it is built from ****precision and
recall**** it ****ignores true negatives**** — making it far more informative than ROC-AUC on ****imbalanced**** data
where the positive class is rare.

## Where it’s used[#](#where-it-s-used "Link to this heading")

AP is the standard score for ****ranking**** and ****detection****; averaging it over classes or queries gives
****mean average precision (mAP)****, the headline metric in information retrieval and object detection.

---

****Mind map — connected ideas****

> [Precision–Recall AUC (PR-AUC)](430-precisionrecall-auc-pr-auc.html) · [F1-score](363-f1-score.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Harmonic Mean](362-harmonic-mean.html) · [Macro Averaging](370-macro-averaging.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Average Precision (AP)](https://insightful-data-lab.com/2025/08/20/average-precision-ap/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)