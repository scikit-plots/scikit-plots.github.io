📏  ****Macro AUC****

# Macro AUC[#](#macro-auc "Link to this heading")

**AUC averaged equally across per-class scores.**

## What it is[#](#what-it-is "Link to this heading")

****Macro AUC**** averages the per-class AUCs (from ****One-vs-Rest****) with ****equal weight**** — every class counts
the ****same****, no matter how rare or common. It answers **how well does the model do on the average class?**

## Macro vs micro[#](#macro-vs-micro "Link to this heading")

The contrast is ****micro AUC****, which pools every class’s true/false-positive contributions into ****one global****
curve, effectively ****weighting by prevalence**** so frequent classes dominate. Macro treats a class with 10
samples exactly like one with 10,000.

## When to use which[#](#when-to-use-which "Link to this heading")

****Macro**** is the choice when the ****rare**** classes matter as much as the common ones (you want minority
performance to show), while ****micro**** (or a ****weighted**** macro) better reflects ****overall**** accuracy on
****imbalanced**** data. Reporting both reveals whether a good score is carried by the majority classes.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Micro AUC](313-micro-auc.html) · [One-vs-Rest (OvR)](310-one-vs-rest-ovr.html) · [Multiclass Classification](311-multiclass-classification.html) · [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Partial AUC (pAUC)](312-partial-auc-pauc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Macro AUC](https://insightful-data-lab.com/2025/08/21/macro-auc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)