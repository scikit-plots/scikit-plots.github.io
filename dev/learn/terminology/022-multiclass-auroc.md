📏  ****Multiclass AUROC****

# Multiclass AUROC[#](#multiclass-auroc "Link to this heading")

**AUROC extended beyond two classes via One-vs-Rest or One-vs-One schemes.**

## What it is[#](#what-it-is "Link to this heading")

AUROC — the probability a random positive outscores a random negative, from 0.5
(chance) to 1.0 (perfect) — is defined only for a binary problem. ****Multiclass
AUROC**** is the umbrella for the strategies that extend it to \(K\) classes by
reducing the problem to many binary ones and aggregating.

## Two reductions[#](#two-reductions "Link to this heading")

### one-vs-rest (OvR)[#](#one-vs-rest-ovr "Link to this heading")

For each class, score it against **all others** combined — \(K\) binary AUROCs:

\[\text{AUROC}\_{\text{macro}}
= \frac{1}{K} \sum\_{i=1}^{K} \text{AUROC}(\text{class}\_i \;\text{vs}\; \text{rest}).\]

### one-vs-one (OvO)[#](#one-vs-one-ovo "Link to this heading")

Score **every pair** of classes and average over all \(\binom{K}{2}\) pairs:

\[\text{AUROC}\_{\text{ovo}}
= \frac{2}{K(K-1)} \sum\_{i<j} \text{AUROC}(\text{class}\_i \;\text{vs}\; \text{class}\_j).\]

OvO gives a more balanced picture under heavy imbalance, at \(O(K^2)\) cost.

## Two averagings[#](#two-averagings "Link to this heading")

Independently of OvR / OvO, the per-binary results can be combined as ****macro****
(equal weight per class — fair to minorities), ****micro**** (pool all decisions into
one global AUROC — sample-weighted, majority-driven), or ****weighted**** (by class
frequency).

## Worked example[#](#worked-example "Link to this heading")

OvR AUROCs of 0.82, 0.75, 0.70 over three classes:

\[\text{AUROC}\_{\text{macro}} = \frac{0.82 + 0.75 + 0.70}{3} = 0.7567.\]

## Interpretation[#](#interpretation "Link to this heading")

All variants keep the binary AUROC scale (0.5 random, 1.0 perfect). Read ****macro****
for fairness across classes, ****micro**** for overall sample-level discrimination, and
****OvO**** for pairwise separability. Reporting more than one avoids being misled by a
single summary.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import roc_auc_score

ovr_macro = roc_auc_score(y_true, y_score, multi_class="ovr", average="macro")
ovo_macro = roc_auc_score(y_true, y_score, multi_class="ovo", average="macro")

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[One-vs-Rest (OvR) AUROC](017-one-vs-rest-ovr-auroc.html) · [Micro AUROC](011-micro-auroc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Gini Coefficient](023-gini-coefficient.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Multiclass AUROC](https://insightful-data-lab.com/2025/08/30/multiclass-auroc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)