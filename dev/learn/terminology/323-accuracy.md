📏  ****Accuracy****

# Accuracy[#](#accuracy "Link to this heading")

**The fraction of predictions that are correct.**

## What it is[#](#what-it-is "Link to this heading")

****Accuracy**** is the simplest classification metric — the ****fraction of predictions that are correct****:

\[\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}.\]

It answers **what share did the model get right?**

## The imbalance trap[#](#the-imbalance-trap "Link to this heading")

Accuracy is ****misleading on imbalanced**** data — if 99% of cases are negative, a model that predicts
“negative” for ****everything**** scores ****99%**** while catching ****zero**** positives. That false sense of security
is why fraud, disease and anomaly tasks report ****precision / recall****, ****AUC**** or ****F1**** instead.

## When it’s fine[#](#when-it-s-fine "Link to this heading")

Accuracy is a reasonable headline when classes are ****roughly balanced**** and every error costs about the
****same****. Otherwise it hides ****which**** errors happen — a ****confusion matrix**** and threshold-aware metrics
tell the real story.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Binary Classification](293-binary-classification.html) · [Multiclass Classification](311-multiclass-classification.html) · [Macro AUC](314-macro-auc.html) · [Precision–Recall AUC (PR-AUC)](430-precisionrecall-auc-pr-auc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Accuracy](https://insightful-data-lab.com/2025/08/20/accuracy/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)