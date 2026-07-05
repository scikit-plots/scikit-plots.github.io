📏  ****Micro AUC****

# Micro AUC[#](#micro-auc "Link to this heading")

**AUC pooled across all classes by aggregating decisions before averaging.**

## What it is[#](#what-it-is "Link to this heading")

****Micro AUC**** is the multiclass / multilabel AUROC that ****pools**** every class’s predictions into ****one
global**** ROC curve — aggregating all true-positive and false-positive counts across classes, then computing
a single AUC. Because it counts ****every prediction**** equally, frequent classes contribute more.

## Micro vs macro[#](#micro-vs-macro "Link to this heading")

Where ****macro AUC**** averages per-class AUCs with equal weight, micro AUC is effectively ****weighted by
prevalence**** — a rare class with few samples barely moves it. Micro answers **how well does the model do on
the average prediction?**, macro **on the average class?**

## When to use it[#](#when-to-use-it "Link to this heading")

Micro AUC suits ****imbalanced**** multiclass problems when you care about ****overall**** performance dominated by
common classes, and it matches how a ****multilabel**** system is scored (over the flattened label matrix).
Report it beside ****macro**** to expose class-size effects.

---

****Mind map — connected ideas****

> [Macro AUC](314-macro-auc.html) · [One-vs-Rest (OvR)](310-one-vs-rest-ovr.html) · [Multiclass Classification](311-multiclass-classification.html) · [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Partial AUC (pAUC)](312-partial-auc-pauc.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** Classification & Averaging Metrics  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Micro AUC](https://insightful-data-lab.com/2025/08/21/micro-auc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)