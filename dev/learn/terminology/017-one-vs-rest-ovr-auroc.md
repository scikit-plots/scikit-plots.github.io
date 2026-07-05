📏  ****One-vs-Rest (OvR) AUROC****

# One-vs-Rest (OvR) AUROC[#](#one-vs-rest-ovr-auroc "Link to this heading")

**Multiclass AUROC obtained by scoring each class against all others and averaging.**

## What it is[#](#what-it-is "Link to this heading")

AUROC is only defined for a binary problem, so to score a \(K\)-class model we
reduce it to \(K\) binary ones with ****One-vs-Rest (OvR)****: for each class
\(i\), treat class \(i\) as positive and **all other classes together** as
negative, and compute that binary AUROC.

\[\text{AUROC}\_{\text{OvR}}(i) = \text{AUROC}(\text{class}\_i \;\text{vs}\; \text{rest}).\]

Each value measures how well the model separates **that one class** from everything
else.

## From per-class to a single number[#](#from-per-class-to-a-single-number "Link to this heading")

You can report the per-class AUROCs directly, or average them into ****macro AUROC****:

\[\text{AUROC}\_{\text{macro}}
= \frac{1}{K} \sum\_{i=1}^{K} \text{AUROC}\_{\text{OvR}}(i).\]

(Pooling the OvR decisions instead of averaging gives **micro** AUROC; averaging, as
here, weights every class equally.)

## Worked example[#](#worked-example "Link to this heading")

Three classes with AUROC(A vs rest)=0.83, AUROC(B vs rest)=0.76,
AUROC(C vs rest)=0.70:

* Per class, these show A is the easiest to separate and C the hardest.
* ****Macro AUROC**** \(= (0.83 + 0.76 + 0.70)/3 = 0.763\).

## When it’s useful[#](#when-it-s-useful "Link to this heading")

OvR AUROC gives a ****per-class, threshold-free**** read on discrimination — exactly
what you want to answer “how well does the model pick out **this** class from the
rest?”. It is especially informative for imbalanced problems (e.g. a rare fraud
class), where a single global score can hide a weak minority.

## In code[#](#in-code "Link to this heading")

```
from sklearn.metrics import roc_auc_score

per_class = roc_auc_score(y_true, y_score, multi_class="ovr", average=None)
macro = roc_auc_score(y_true, y_score, multi_class="ovr", average="macro")

```

---

****Mind map — connected ideas****

> [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Micro AUROC](011-micro-auroc.html) · [Macro F1](019-macro-f1.html) · [Single-label Classification](014-single-label-classification.html)

---

****More in Classification & Averaging Metrics****

> [Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)

---

**Theme:** Classification & Averaging Metrics  ·  [All terminology](index.html)

> **See also**
> Adapted in our own words from [One-vs-Rest (OvR) AUROC](https://insightful-data-lab.com/2025/08/30/one-vs-rest-ovr-auroc/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [level: intermediate](../../_tags/level-intermediate.html)