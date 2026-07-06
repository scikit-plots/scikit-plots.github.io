📏  ****Multiclass Classification****

# Multiclass Classification[#](#multiclass-classification "Link to this heading")

**Assigning each instance to one of three or more classes.**

## What it is[#](#what-it-is "Link to this heading")

****Multiclass classification**** predicts one of ****more than two**** mutually exclusive classes — a handwritten
digit (0–9), a species, a product category. It generalizes ****binary**** classification, and its models usually
end in a ****softmax**** layer that outputs a probability over the ****K**** classes.

## The evaluation twist[#](#the-evaluation-twist "Link to this heading")

Metrics built for two classes — ****ROC-AUC****, ****precision****, recall — have no direct multiclass definition,
because “****positive**** vs negative” is ambiguous with many classes. To use them, the problem is ****binarized****
(one class vs the others) and the per-class scores are ****averaged****.

## The two decompositions[#](#the-two-decompositions "Link to this heading")

****One-vs-Rest**** turns K classes into K binary problems (each class against the rest); ****One-vs-One**** compares
every ****pair****. Either produces a set of per-class or per-pair scores that a ****micro**** or ****macro**** average
then collapses into a single number.

---

****Mind map — connected ideas****

> [One-vs-Rest (OvR)](310-one-vs-rest-ovr.html) · [Macro AUC](314-macro-auc.html) · [Micro AUC](313-micro-auc.html) · [Binary Classification](293-binary-classification.html) · [Softmax Function](296-softmax-function.html) · [Multiclass AUROC](022-multiclass-auroc.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Multiclass Classification](https://insightful-data-lab.com/2025/08/21/multiclass-classification/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)