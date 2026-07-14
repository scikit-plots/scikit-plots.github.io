📏  ****Weighted Averaging****

# Weighted Averaging[#](#weighted-averaging "Link to this heading")

**Averaging per-class metrics weighted by class support.**

## What it is[#](#what-it-is "Link to this heading")

****Weighted averaging**** is macro averaging with a twist — it computes each class’s metric, then averages them
****weighted by support**** (the number of true instances in each class). Larger classes therefore ****count
more****.

## Its behavior[#](#its-behavior "Link to this heading")

This makes the score ****reflect the actual class distribution**** — it is essentially macro averaging
****adjusted for imbalance****, sitting between micro and macro. On a ****representative**** test set, the weighted
average estimates what you’d see on a ****random production**** example.

## When to use it[#](#when-to-use-it "Link to this heading")

Weighted averaging suits ****stakeholder and production**** reporting, where you want one number that respects
the ****real class mix**** without letting a tiny class swing the result. Use ****macro**** instead when minority
classes must be weighted ****equally**** regardless of frequency.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Micro Averaging](369-micro-averaging.html) · [Macro Averaging](370-macro-averaging.html) · [F1-score](363-f1-score.html) · [Multiclass Classification](311-multiclass-classification.html) · [Precision (a.k.a. Positive Predictive Value, PPV)](429-precision-a-k-a-positive-predictive-value-ppv.html) · [Macro AUC](314-macro-auc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Weighted Averaging](https://insightful-data-lab.com/2025/08/20/weighted-averaging/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)