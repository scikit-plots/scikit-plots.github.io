📏  ****Gini Coefficient****

# Gini Coefficient[#](#gini-coefficient "Link to this heading")

**A ranking-quality score linearly tied to AUROC: Gini = 2 x AUROC - 1.**

## What it is[#](#what-it-is "Link to this heading")

The ****Gini coefficient**** has two lives. In economics (Corrado Gini, 1912) it
measures ****inequality**** in a distribution such as income, via the ****Lorenz curve**** —
the cumulative share of income against the cumulative share of population. It is the
normalised area between the line of perfect equality and the Lorenz curve:

\[\text{Gini} = \frac{A}{A + B},\]

where \(A\) is the area between the equality line and the Lorenz curve and
\(B\) is the area under the Lorenz curve.

## In machine learning[#](#in-machine-learning "Link to this heading")

For a binary classifier, Gini measures ****discriminatory power**** and is a simple
linear rescaling of AUROC:

\[\text{Gini} = 2 \cdot \text{AUROC} - 1.\]

So AUROC 0.5 (random) gives Gini 0, AUROC 1.0 (perfect) gives Gini 1, and an AUROC
below 0.5 gives a negative Gini. It carries ****no information beyond AUROC**** — the
same ranking quality on a stretched scale — but it is the convention in finance.

## Why credit risk uses it[#](#why-credit-risk-uses-it "Link to this heading")

Credit-scoring models (loan default, churn, fraud) usually report Gini rather than
AUROC: a higher Gini means the model separates “goods” (non-defaulters) from “bads”
(defaulters) better, and regulatory frameworks (Basel II/III) often expect it in
model validation. The ML Lorenz curve simply replaces “income” with the predicted
score and “population” with cases sorted by that score.

## Worked example[#](#worked-example "Link to this heading")

* Model A: AUROC 0.72 → \(\text{Gini} = 2(0.72) - 1 = 0.44\).
* Model B: AUROC 0.85 → \(\text{Gini} = 0.70\).

Model B ranks defaulters above non-defaulters far better; a Gini of 0.70 is
considered excellent in credit risk.

## Rules of thumb and edge cases[#](#rules-of-thumb-and-edge-cases "Link to this heading")

* Typical bands: 0.20–0.30 weak, 0.40–0.50 useful, 0.60–0.70 strong.
* ****0.80+ is suspicious**** — usually overfitting or target leakage, not a genuinely
  great model.
* A ****negative Gini**** means predictions are inverted (worse than random); flipping
  the score sign fixes it.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import roc_auc_score

gini = 2 * roc_auc_score(y_true, y_score) - 1

```

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Multiclass AUROC](022-multiclass-auroc.html) · [One-vs-Rest (OvR) AUROC](017-one-vs-rest-ovr-auroc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html) · [Macro Precision](021-macro-precision.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Gini Coefficient](https://insightful-data-lab.com/2025/08/30/gini-coefficient/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)