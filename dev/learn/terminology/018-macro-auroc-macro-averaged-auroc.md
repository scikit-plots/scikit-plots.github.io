📏  ****Macro AUROC (Macro-Averaged AUROC)****

# Macro AUROC (Macro-Averaged AUROC)[#](#macro-auroc-macro-averaged-auroc "Link to this heading")

**The mean of per-class AUROC values, weighting every class equally regardless of size.**

## What it is[#](#what-it-is "Link to this heading")

AUROC measures ranking ability for a binary task — the probability a random positive
outscores a random negative, ranging from 0.5 (chance) to 1.0 (perfect). Since ROC
is inherently binary, a \(K\)-class model is scored by reducing it with
****one-vs-rest (OvR)**** (or one-vs-one). ****Macro AUROC**** averages the per-class OvR
AUROCs with ****equal weight****:

\[\text{AUROC}\_{\text{macro}}
= \frac{1}{K} \sum\_{i=1}^{K} \text{AUROC}(\text{class}\_i \;\text{vs}\; \text{rest}).\]

Because every class counts the same, a rare class the model handles badly drags the
score down just as much as a common one.

## Macro vs micro[#](#macro-vs-micro "Link to this heading")

****Macro**** gives equal weight per class, so it is sensitive to ****minority-class****
performance. ****Micro**** pools all OvR decisions into one global AUROC and is therefore
dominated by ****majority classes****. They answer different questions — fairness across
classes vs overall sample-level discrimination — so reporting both is good practice.
The scale matches binary AUROC in every case.

## Worked example[#](#worked-example "Link to this heading")

Three classes with AUROC(A vs rest)=0.85, AUROC(B vs rest)=0.72,
AUROC(C vs rest)=0.65:

\[\text{AUROC}\_{\text{macro}} = \frac{0.85 + 0.72 + 0.65}{3} = 0.74.\]

If C is rare but poorly separated, macro AUROC reflects it; micro might not.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****Undefined per-class AUROC**** — if a class has no positive (or no negative)
  samples in the evaluation set, its OvR AUROC is undefined and breaks the average;
  guard against empty classes.
* ****Equal weighting cuts both ways**** — a single tiny, hard class can dominate the
  headline number; inspect the per-class AUROCs, not just the mean.
* ****Weighted variant**** — averaging the per-class AUROCs by class frequency gives a
  middle ground between macro and micro.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import roc_auc_score

macro = roc_auc_score(y_true, y_score, multi_class="ovr", average="macro")
per_class = roc_auc_score(y_true, y_score, multi_class="ovr", average=None)

```

---

****Mind map — connected ideas****

> [Micro AUROC](011-micro-auroc.html) · [One-vs-Rest (OvR) AUROC](017-one-vs-rest-ovr-auroc.html) · [Macro F1](019-macro-f1.html) · [Macro Recall](020-macro-recall.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)

---

**Theme:** Classification & Averaging Metrics  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [Macro AUROC (Macro-Averaged AUROC)](https://insightful-data-lab.com/2025/08/30/macro-auroc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)