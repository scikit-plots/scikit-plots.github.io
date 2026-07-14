📏  ****Single-label Classification****

# Single-label Classification[#](#single-label-classification "Link to this heading")

**Tasks where each instance is assigned exactly one label.**

## What it is[#](#what-it-is "Link to this heading")

In ****single-label classification**** every sample is assigned ****exactly one**** label
from a set of \(K\) mutually exclusive classes. Formally the classifier maps an
input to one label,

\[f : X \rightarrow Y, \qquad Y = \{1, 2, \dots, K\},\]

and typically picks the highest-probability class,

\[f(x) = \arg\max\_{k}\, P(y = k \mid x).\]

This is the most common classification setting: spam vs not-spam, an image that is a
cat **or** a dog **or** a horse (never two at once), a single diagnosis from mutually
exclusive outcomes.

## How it’s modelled[#](#how-it-s-modelled "Link to this heading")

The output layer is a ****softmax****, so the predicted class probabilities sum to one
and the classes compete — raising one lowers the others. Training uses ****categorical
cross-entropy****.

## How it’s scored[#](#how-it-s-scored "Link to this heading")

Because there is one prediction per sample, the natural metrics are ****accuracy****
plus ****precision, recall and F1**** (with micro / macro / weighted averaging for the
multi-class case) and ****AUROC / AUPRC**** via one-vs-rest. A useful identity: under
single-label evaluation, **micro** precision, recall and F1 all equal accuracy.

## vs multi-label[#](#vs-multi-label "Link to this heading")

The contrast is exclusivity. Single-label gives one label per sample (an image is
cat **or** dog); ****multi-label**** allows any subset (a news story tagged **politics** and
**economy**), uses independent sigmoids instead of a softmax, and needs set-based
metrics like Hamming loss and Jaccard.

## Pitfalls and edge cases[#](#pitfalls-and-edge-cases "Link to this heading")

* ****The exclusivity assumption**** — if samples can truly belong to several classes,
  forcing one label loses information; use multi-label instead.
* ****Calibrated probabilities**** — `argmax` discards confidence; keep the softmax
  scores if you need ranking, thresholds or AUROC.
* ****Imbalance**** — plain accuracy flatters a majority-heavy dataset; prefer macro
  metrics when minority classes matter.

---

**Theme:** [Classification & Averaging Metrics](index.html#term-theme-metrics)  ·  [All terminology](index.html)

---

> **Hint**
> ****Mind map — connected ideas****

[Multi-label Classification](012-multi-label-classification.html) · [Micro F1](013-micro-f1.html) · [Macro F1](019-macro-f1.html) · [One-vs-Rest (OvR) AUROC](017-one-vs-rest-ovr-auroc.html)

---

> **Hint**
> ****More in Classification & Averaging Metrics****

[Accuracy](323-accuracy.html) · [AUC (Area Under the Curve)](371-auc-area-under-the-curve.html) · [Average Precision (AP)](366-average-precision-ap.html) · [Binary Classification](293-binary-classification.html) · [Classification Probability](231-classification-probability.html) · [Discriminatory Power](185-discriminatory-power.html) · [F1-score](363-f1-score.html) · [Gini Coefficient](023-gini-coefficient.html) · [Harmonic Mean](362-harmonic-mean.html) · [Log Loss (also called Logarithmic Loss or Cross-Entropy Loss)](417-log-loss-also-called-logarithmic-loss-or-cross-e.html) · [Macro AUC](314-macro-auc.html) · [Macro AUROC (Macro-Averaged AUROC)](018-macro-auroc-macro-averaged-auroc.html) · [Macro Averaging](370-macro-averaging.html) · [Macro F1](019-macro-f1.html)
> **See also**
> ****Source article**** Adapted (context, re-expressed) in our own words from: [Single-label Classification](https://insightful-data-lab.com/2025/08/30/single-label-classification/) (insightful-data-lab.com).

Tags: [purpose: reference](../../_tags/purpose-reference.html) [topic: terminology](../../_tags/topic-terminology.html) [level: intermediate](../../_tags/level-intermediate.html)