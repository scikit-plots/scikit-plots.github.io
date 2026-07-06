📏  ****One-vs-Rest (OvR)****

# One-vs-Rest (OvR)[#](#one-vs-rest-ovr "Link to this heading")

**A multiclass strategy fitting one binary classifier per class.**

## What it is[#](#what-it-is "Link to this heading")

****One-vs-Rest**** (also ****one-vs-all****) reduces a ****K-class**** problem to ****K binary**** ones — in each, a single
class is the ****positive**** and all the others are lumped together as the ****negative****. It’s the simplest way
to let binary tools handle many classes.

## How it’s used[#](#how-it-s-used "Link to this heading")

For a K-class model you get ****K**** ROC curves and AUCs, one per class, each answering **how well does the model
separate this class from everything else?** scikit-learn exposes it as `multi_class='ovr'`; it also matches
the ****multilabel**** setting, where classes aren’t exclusive.

## The catch[#](#the-catch "Link to this heading")

Each binary split is ****imbalanced**** — the positive class is only about ****1/K**** of the data, and the “rest”
group’s makeup shifts with the class distribution, so OvR scores are ****sensitive to class imbalance****. The
alternative, ****One-vs-One****, compares class ****pairs**** and is less imbalance-prone but trains
\(O(K^2)\) classifiers.

---

****Mind map — connected ideas****

> [Multiclass Classification](311-multiclass-classification.html) · [Macro AUC](314-macro-auc.html) · [Micro AUC](313-micro-auc.html) · [Binary Classification](293-binary-classification.html) · [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Multiclass AUROC](022-multiclass-auroc.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [One-vs-Rest (OvR)](https://insightful-data-lab.com/2025/08/21/one-vs-rest-ovr/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)