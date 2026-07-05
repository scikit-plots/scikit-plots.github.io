📏  ****Macro Averaging****

# Macro Averaging[#](#macro-averaging "Link to this heading")

**Computing a metric per class then averaging them equally.**

## What it is[#](#what-it-is "Link to this heading")

****Macro averaging**** computes the metric ****separately for each class**** (one-vs-rest), then takes the
****unweighted arithmetic mean****. Every ****class**** counts the ****same****, no matter how many samples it has:

\[P\_{\text{macro}} = \frac{1}{C}\sum\_{c=1}^{C}\frac{TP\_c}{TP\_c + FP\_c}.\]

## Its behavior[#](#its-behavior "Link to this heading")

Because each class contributes equally, macro averaging ****punishes ignoring minorities**** — a model that aces
the majority but fails a rare class gets a ****low**** macro score. That makes it sensitive to ****rare-class****
performance and a natural ****fairness****-oriented headline.

## When to use it[#](#when-to-use-it "Link to this heading")

Use macro averaging when ****all classes matter equally****, especially on ****imbalanced**** data where you don’t
want the majority to drown out the rest. It can, however, look ****pessimistic**** if some tiny classes are
inherently hard.

---

****Mind map — connected ideas****

> [Micro Averaging](369-micro-averaging.html) · [Weighted Averaging](361-weighted-averaging.html) · [Macro AUC](314-macro-auc.html) · [One-vs-Rest (OvR)](310-one-vs-rest-ovr.html) · [F1-score](363-f1-score.html) · [Multiclass Classification](311-multiclass-classification.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)

---

**Theme:** Classification & Averaging Metrics  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Macro Averaging](https://insightful-data-lab.com/2025/08/20/macro-averaging/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)