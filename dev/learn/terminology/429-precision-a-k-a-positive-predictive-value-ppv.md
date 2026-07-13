📏  ****Precision (a.k.a. Positive Predictive Value, PPV)****

# Precision (a.k.a. Positive Predictive Value, PPV)[#](#precision-a-k-a-positive-predictive-value-ppv "Link to this heading")

**The share of predicted positives that are truly positive.**

## What it is[#](#what-it-is "Link to this heading")

****Precision**** (also ****positive predictive value****, ****PPV****) is the fraction of ****correct**** positive
predictions among ****all**** positive predictions:

\[\text{Precision} = \frac{TP}{TP + FP}.\]

It answers: **of everything the model flagged positive, how much really was?**

## The trade-off[#](#the-trade-off "Link to this heading")

Precision counts ****false positives**** against you but ignores ****false negatives**** — so a model can reach high
precision by only flagging the cases it is surest about. It is therefore read ****together with recall****
(\(TP/(TP+FN)\)), which counts the positives ****missed****; the ****F1**** score is their harmonic mean.

## When it matters[#](#when-it-matters "Link to this heading")

Precision is the priority when a ****false positive is costly**** — a spam filter deleting real mail, a system
flagging innocent transactions as fraud — where you would rather miss some positives than raise false
alarms.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[ROC-AUC (Receiver Operating Characteristic – Area Under Curve, = AUROC)](427-roc-auc-receiver-operating-characteristic-area-u.html) · [Precision–Recall AUC (PR-AUC)](430-precisionrecall-auc-pr-auc.html) · [Binary Classification](293-binary-classification.html) · [Multiclass AUROC](022-multiclass-auroc.html) · [Classification Probability](231-classification-probability.html) · [Multiclass Classification](311-multiclass-classification.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Precision (a.k.a. Positive Predictive Value, PPV)](https://insightful-data-lab.com/2025/08/17/precision-a-k-a-positive-predictive-value-ppv/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)